import React, { Component } from 'react'
import Chat from '../chatWindow.jpg'
import './windowChat.css'

class ChatWindow extends React.Component {
	render() {
		return <img src={Chat} className="window" alt="chatWindow"></img>
	}	
}

export default ChatWindow 