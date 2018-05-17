import React, { Component } from 'react'

const HandleAnswer = ({characters, question}) => console.log('LOLILOLOLOOOOOL')

  const AskQuestion = ({characters, question}) => { 
console.log(question)
return (<div>
  <p>{question.text}</p>
  <button onClick={HandleAnswer(characters, question.ifyes)}>{question.yes}</button>
  <button onClick={HandleAnswer(characters, question.ifno)}>{question.no}</button>
</div>
)
}



export default AskQuestion