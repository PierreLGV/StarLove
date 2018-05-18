import React from 'react'
import './yourselection.css'

const ShowSelection = ({ chooseBitch, character }) =>
    <div className="charSelection">
      <img className="imgSelection" src={character.image} alt={character.name} />
      <p><span>name:</span> {character.name}</p>
      <p><span>gender:</span> {character.gender}</p>
      <p><span>height:</span> {character.height}</p>
      <p><span>mass:</span> {character.mass}</p>
      <button className="chooseBtn" onClick={() => chooseBitch(character)}>CHOOSE</button>
    </div>

export default ShowSelection
