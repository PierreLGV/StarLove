import React from 'react'

const ShowBitch = ({ character }) =>
    <div>
      <img src="{character.image}" alt="{character.name}" />
      <p>{character.name}</p>
      <p>{character.gender}</p>
      <p>{character.height}</p>
      <p>{character.mass}</p>
    </div>

export default ShowBitch
