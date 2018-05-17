import React from 'react';
import Start from '../startbtn.png';
import AskQuestion from './questions.js';
import '../btn.css'

// questions.map(object => {
//   return object.filterThis = <AskQuestion RandomName={object}/>
// })

const StartBtn = () => <img onClick={AskQuestion} className="startBtn" src={Start} alt="creepy dude masturbating in starship"></img>

export default StartBtn 