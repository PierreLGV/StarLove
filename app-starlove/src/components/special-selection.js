import React from 'react'

const ShowSpecialSelection = ({ chooseBitch, trainer }) =>
    <div>
      <img src={trainer.image} alt={trainer.name} />
      <p>{trainer.name}</p>
      <p>{trainer.gender}</p>
      <p>{trainer.height}</p>
      <p>{trainer.mass}</p>
      <p>{trainer.speciality}</p>
      <button>See profile</button>
      <button onClick={() => chooseBitch()}>CHOOSE</button>
    </div>

export default ShowSpecialSelection
