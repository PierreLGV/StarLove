import React from 'react'
import './special-selection.css'

const ShowSpecialSelection = ({ chooseBitch, trainer }) =>
    <div className='trainerSelection'>
      <img className='trainerImg' src={trainer.image} alt={trainer.name} />
      <p><span>name:</span> {trainer.name}</p>
      <p><span>gender:</span> {trainer.gender}</p>
      <p><span>height:</span> {trainer.height}</p>
      <p><span>mass:</span> {trainer.mass}</p>
      <button className="chooseBtn" onClick={() => chooseBitch(trainer)}>CHOOSE</button>
    </div>

export default ShowSpecialSelection
