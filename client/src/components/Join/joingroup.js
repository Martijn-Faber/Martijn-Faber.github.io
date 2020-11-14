import React, { useState } from 'react';
import { Link } from "react-router-dom";
import './Join.css';



export default function SignIn() {
  const [name, setName] = useState('');
  //const [room, setRoom] = useState('');


  //let params = queryString.parse(this.props.location.search);

  let queryString  = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const roomFromUrl = urlParams.get('room')

  return (
    <div className="joinOuterContainer">
      <div className="joinInnerContainer">
       <img src="logo.svg" className="logo" alt="EckartHub logo"></img>
        <div>
          <input 
          placeholder="Naam" 
          className="joinInput" 
          type="text" onChange={(event) => setName(event.target.value)} 
          required
          />
        </div>

        <Link onClick={e => (!name || !roomFromUrl) ? e.preventDefault() : null} to={`/chat?name=${name}&room=${roomFromUrl}`}>
  <button className={'button mt-20'} type="submit">Join {roomFromUrl}</button>
        </Link>
      </div>
    </div>
  );
}