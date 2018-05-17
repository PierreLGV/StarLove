import React from 'react';
import Start from '../startbtn.png';
import '../btn.css'

const StartBtn = ({ handleCall }) => <img onClick={() => handleCall()} className="startBtn" src={Start} alt="creepy dude masturbating in starship"></img>

export default StartBtn
