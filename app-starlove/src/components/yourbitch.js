import React from 'react'
import './yourbitch.css'

const ShowBitch = ({ character }) =>
    <div className="bitch">
      <img src={character.image} alt={character.name} />
      <p><span>name: </span>{character.name}</p>
      <p><span>gender: </span>{character.gender}</p>
      <p><span>height: </span>{character.height}</p>
      <p><span>mass: </span>{character.mass}</p>
    </div>

export default ShowBitch
