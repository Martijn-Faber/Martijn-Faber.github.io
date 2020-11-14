import React, { useState } from 'react';
import { Link } from "react-router-dom";

import './Join.css';

export default function SignIn() {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');

  let uriString  = window.location.href;
  let qrUri=""

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
        <div>
          <input 
          placeholder="Groep" 
          className="joinInput mt-20"
          type="text" onChange={(event) => {
              let targetUri = window.location.href + "?room=" + event.target.value;
              targetUri = targetUri.replace("/create", "/join");
              qrUri = `https://api.qrserver.com/v1/create-qr-code/?data=${targetUri}&amp;size=80x80`
              document.getElementById("qrimageid").src=qrUri;
              setRoom(event.target.value)
          }
          } 
          />
        </div>
        <div>
          <p>Laat je vrienden deze QR-code scannen om deel te namen aan deze groep</p>
          <img id="qrimageid" src={qrUri}/>
        </div>

        <Link onClick={e => (!name || !room) ? e.preventDefault() : null} to={`/chat?name=${name}&room=${room}`}>
          <button className={'button mt-20'} type="submit">Create group</button>
        </Link>
      </div>
    </div>
  );
}
