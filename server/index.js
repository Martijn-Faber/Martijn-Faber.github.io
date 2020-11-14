const http = require('http');
const express = require('express');
const socketio = require('socket.io');
const cors = require('cors');
const monk = require('monk');

require('dotenv').config();


const { addUser, removeUser, getUser, getUsersInRoom } = require('./users');

console.log("connecting to db:" + process.env.MONGO_URI);

const db = monk(process.env.MONGO_URI || 'localhost/messages');
const messagesDb = db.get('messages');

const router = require('./router');

const app = express();
const server = http.createServer(app);
const io = socketio(server);

const botName = 'EckartHub';

app.use(cors());
app.use(router);

io.on('connect', (socket) => {
  socket.on('join', ({ name, room }, callback) => {
    const { error, user } = addUser({ id: socket.id, name, room });

    if(error) return callback(error);

    socket.join(user.room);


    messagesDb
    .find()
    .then(messagesFromDb => {
      //console.log(messagesFromDb);

      messagesFromDb.forEach(msg => {
        //console.log(msg);
        if ( msg.room == user.room) {
          socket.emit('message', { user: msg.user, text: msg.text});
        }
      } );

    }).then( () => {
      socket.emit('message', { user: botName, text: `${user.name}, welkom!! bij ${user.room}.`});
      socket.broadcast.to(user.room).emit('message', { user: botName, text: `welkom, ${user.name}` });
    }).catch(err =>console.log("failed to get message from db " + err));


    io.to(user.room).emit('roomData', { room: user.room, users: getUsersInRoom(user.room) });


    callback();
  });

  socket.on('sendMessage', (message, callback) => {
    const user = getUser(socket.id);

    io.to(user.room).emit('message', { user: user.name, text: message }); 


    // create message object for db
    const messageToDb = {
      user: user.name,
      text: message,
      room: user.room,
      created: new Date()
    };

    // inser into db
    messagesDb.insert(messageToDb).then(createdMew => {
    }).catch(err => console.log("failed to save message to db")) 


    callback();
  });

  socket.on('disconnect', () => {
    const user = removeUser(socket.id);

    if(user) {
      io.to(user.room).emit('message', { user: botName, text: `${user.name} has left.` });
      io.to(user.room).emit('roomData', { room: user.room, users: getUsersInRoom(user.room)});
    }
  })
});

server.listen(process.env.PORT || 5000, () => console.log(`Server has started.` ));