import React, { Component } from 'react'

const HandleAnswer = ({characters, question}) => 

const AskQuestion = ({characters, question}) => <div>
  <p>{question.text}</p>
  <button onClick={HandleAnswer(characters, question.ifyes)}>{question.yes}</button> onclik return ifyes
  <button onClick={HandleAnswer(characters, question.ifno)}>{question.no}</button>  ifno
</div>




export default AskQuestion