import React from 'react'

const HandleChat = ({ handleClientLine, choiceA, choiceB, choiceC, text }) =>
    <div>
      <p>{text}</p>
      <button onClick={() => handleClientLine()}>{choiceA}</button>
      <button onClick={() => handleClientLine()}>{choiceB}</button>
      <button onClick={() => handleClientLine()}>{choiceC}</button>
    </div>

export default HandleChat
