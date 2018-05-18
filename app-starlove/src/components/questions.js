import React from 'react'
import Chat from '../chatWindow.png'
import './windowChat.css'

const HandleQuestion = ({ handleAnswer, ifyes, ifno, yes, no, text }) =>
    <div>
      <img src={Chat} className="window" alt="chatWindow"></img>
      <div className="questionAnswer">
      <p>{text}</p>
      <button onClick={() => handleAnswer(ifyes)}>{yes}</button>
      <button onClick={() => handleAnswer(ifno)}>{no}</button>
        </div>
    </div>

export default HandleQuestion
