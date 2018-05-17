import React from 'react'

const ShowSelection = ({ chooseBitch, character }) =>
    <div>
      <img src={character.image} alt={character.name} />
      <p>{character.name}</p>
      <p>{character.gender}</p>
      <p>{character.height}</p>
      <p>{character.mass}</p>
      <button>See profile</button>
      <button onClick={() => chooseBitch()}>CHOOSE</button>
    </div>

export default ShowSelection
