import React, { useState } from 'react';
import { Link } from "react-router-dom";

import './Join.css';

export default function SignIn() {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');

  const creategroup = './create'
  const joingroup = './join'

  return (
    <div className="joinOuterContainer">
      <div className="joinInnerContainer">
       <img src="logo.svg" class="logo" alt="EckartHub logo"></img>
        <div>
        </div>
        <div>
          <a className="button" type="button" href={creategroup}>Create a group</a>
          <a className="button" type="button" href={joingroup}>Join a group</a>
        </div>
      </div>
    </div>
  );
}
