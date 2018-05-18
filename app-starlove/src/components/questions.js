import React from 'react'
import Chat from '../chatWindow.png'
import './windowChat.css'

const HandleQuestion = ({ handleAnswer, ifyes, ifno, yes, no, text }) =>
    <div>
      <img src={Chat} className="window" alt="chatWindow"></img>
      <p>{text}</p>
      <button onClick={() => handleAnswer(ifyes)}>{yes}</button>
      <button onClick={() => handleAnswer(ifno)}>{no}</button>
    </div>

export default HandleQuestion
