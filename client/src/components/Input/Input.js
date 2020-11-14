import React from 'react';

import './Input.css';

const Input = ({ setMessage, sendMessage, message }) => (
  <form className="form">
    <input
      className="input"
      type="text"
      placeholder="Typ een bericht..."
      value={message}
      onChange={({ target: { value } }) => setMessage(value)}
      onKeyPress={event => event.key === 'Enter' ? sendMessage(event) : null}
    />

  <div>
    <a className="sendButton" onClick={e => sendMessage(e)}>
      <img src="send.svg"></img>
    </a>
  </div>
  </form>
)

export default Input;