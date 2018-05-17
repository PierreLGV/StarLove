import React from 'react'

const HandleQuestion = ({ handleAnswer, ifyes, ifno, yes, no, text }) =>
    <div>
      <p>{text}</p>
      <button onClick={() => handleAnswer(ifyes)}>{yes}</button>
      <button onClick={() => handleAnswer(ifno)}>{no}</button>
    </div>

export default HandleQuestion
