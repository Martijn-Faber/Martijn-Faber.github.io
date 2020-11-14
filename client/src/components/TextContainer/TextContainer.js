import React from 'react';

import onlineIcon from '../../icons/onlineIcon.png';

import './TextContainer.css';

const TextContainer = ({ users }) => (
  <div className="textContainer">
    <div>
      <img className="logo" src="logo.svg" alt="EckartHub logo"></img>
      <h2>Een Social media platform voor het Eckartcollege genaamd EckartHub</h2>
      <h2>Try it out right now!</h2>
    </div>
    {
      users
        ? (
          <div>
            <h1>Online</h1>
            <div className="activeContainer">
              <h2>
                {users.map(({name}) => (
                  <div key={name} className="activeItem">
                    {name}
                    <img alt="Online Icon" src={onlineIcon}/>
                  </div>
                ))}
              </h2>
            </div>
          </div>
        )
        : null
    }

    {
      <div>
        <h3 className="Copiright">&copy;2020 EckartHub</h3>
      </div>
    }
  </div>
);

export default TextContainer;