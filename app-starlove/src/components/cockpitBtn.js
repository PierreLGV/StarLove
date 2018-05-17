import React from 'react';
import Start from '../startbtn.png';
// import AskQuestion from './questions.js';
import '../btn.css'
import WindowChat from './ChatWindow.js'

// questions.map(object => {
//   return object.filterThis = <AskQuestion RandomName={object}/>
// })

const StartBtn = () => <img onClick={WindowChat} className="startBtn" src={Start} alt="creepy dude masturbating in starship"></img>

export default StartBtn 