import React from 'react'
import Chat from '../chatWindow.png'
import './windowChat.css'

const HandleChat = ({ handleClientLine, choiceA, choiceB, choiceC, text }) =>
    <div>
      <img src={Chat} className="window" alt="chatWindow"></img>
      <p>{text}</p>
      <button onClick={() => handleClientLine()}>{choiceA}</button>
      <button onClick={() => handleClientLine()}>{choiceB}</button>
      <button onClick={() => handleClientLine()}>{choiceC}</button>
    </div>

export default HandleChat
