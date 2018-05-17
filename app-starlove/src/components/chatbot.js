import React from 'react'

const HandleChat = ({ handleClientLine, ifChoiceA, ifChoiceB, ifChoiceC, choiceA, choiceB, choiceC, text }) =>
    <div>
      <p>{text}</p>
      <button onClick={() => handleClientLine(ifChoiceA)}>{choiceA}</button>
      <button onClick={() => handleClientLine(ifChoiceB)}>{choiceB}</button>
      <button onClick={() => handleClientLine(ifChoiceC)}>{choiceC}</button>
    </div>

export default HandleChat
