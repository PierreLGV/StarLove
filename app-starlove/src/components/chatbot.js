import React from 'react'
import Chat from '../chatWindow.png'
import './windowChat.css'

const HandleChat = ({ handleClientLine, ifChoiceA, ifChoiceB, ifChoiceC, choiceA, choiceB, choiceC, text }) =>
    <div>
      <img src={Chat} className="window" alt="chatWindow"></img>
      <p>{text}</p>
      <button onClick={() => handleClientLine(ifChoiceA)}>{choiceA}</button>
      <button onClick={() => handleClientLine(ifChoiceB)}>{choiceB}</button>
      <button onClick={() => handleClientLine(ifChoiceC)}>{choiceC}</button>
    </div>

export default HandleChat
