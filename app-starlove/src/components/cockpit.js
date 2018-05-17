import React from 'react'
import cockpitImg from '../cockpit.jpg'
import StartBtn  from './cockpitBtn.js'
import '../index.css'
import WindowChat from './ChatWindow.js'

console.log(this.state)

const style = {
  backgroundImage:`url(${cockpitImg})`, 
  backgroundSize:'cover',
  backgroundPosition:'center',
  height: '50vw',
}

class Cockpit extends React.Component {
	render() {
		return <div className="backgroundImg" style={style}>
    	<StartBtn/>
    	<WindowChat/>
  	</div>
	};
} 
 

export default Cockpit
