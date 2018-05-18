import React from 'react'
import cockpitImg from '../cockpit.jpg'
import { StartBtn, QuitBtn }  from './cockpitBtns.js'
import '../index.css'

const style = {
  backgroundImage:`url(${cockpitImg})`,
  backgroundSize:'cover',
  backgroundPosition:'center',
  height: '50vw',
}

const Cockpit =  ({handleCall, hangUpCall}, props) =>  {
  return <div className="backgroundImg" style={style}>
    <StartBtn handleCall={handleCall} />
    <QuitBtn hangUpCall={hangUpCall} />
  </div>
}



export default Cockpit
