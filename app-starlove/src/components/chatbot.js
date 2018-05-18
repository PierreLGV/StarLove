import React from 'react'
import Chat from '../chatWindow.png'
import './windowChat.css'

const HandleChat = ({ handleClientLine, choiceA, choiceB, choiceC, text }) =>
    <div className="chatBot">
      <img src={Chat} className="window" alt="chatWindow"></img>
      <p>{text}</p>
      <div className="bitchBtn">
      <button onClick={() => handleClientLine()}>{choiceA}</button>
      <button onClick={() => handleClientLine()}>{choiceB}</button>
      <button onClick={() => handleClientLine()}>{choiceC}</button>
      </div>
    </div>

export default HandleChat
