import React, { Component } from 'react'

const HandleQuestion = ({characters, question}) => {
  const HandleAnswer = ({characters}, question) => {
    console.log(characters, question);
    console.log(characters.filter(c => c.species === question))
  }

  return (
    <div>
      <p>{question.text}</p>
      <button onClick={HandleAnswer({characters}, question.ifyes)}>{question.yes}</button>
      <button onClick={HandleAnswer({characters}, question.ifno)}>{question.no}</button>
    </div>
  )
}

export default HandleQuestion