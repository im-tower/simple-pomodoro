import React from 'react'

const Controles = ({ startAt, stop, runningTimer, openConfig }) => {
  return (
    <div className='controles text-center d-flex flex-column align-items-center'>
      <button onClick={runningTimer ? () => stop() : () => startAt(30)} className='btn btn-primary mb-3'>{runningTimer ? 'Stop' : 'Start'}</button>
      {
        !runningTimer && <button className='btn btn-secondary' onClick={() => openConfig()}>Config</button>
      }
    </div>
  )
}

export default Controles