import React, { Component } from 'react'

const HandleQuestion = ({characters, question}) => {
  const HandleAnswer = (e, {characters}, question) => {
     const filter1 = characters.filter(c => c.species === question)
  }

  return (
    <div>
      <p>{question.text}</p>
      <button onClick={(e) => HandleAnswer(e, {characters}, question.ifyes)}>{question.yes}</button>
      <button onClick={(e) => HandleAnswer(e, {characters}, question.ifno)}>{question.no}</button>
    </div>
  )
}

export default HandleQuestion