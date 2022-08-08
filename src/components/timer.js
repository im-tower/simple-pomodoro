import React, { useEffect } from 'react';
const bell = require('../media/bell.mp3');

const Timer = ({ time, isRunning }) => {
    const minutes = Math.floor(time/60);
    const seconds = time%60;
    useEffect(() => {
      if( time === 0 && !isRunning ){
        const audio = new Audio(bell);
        audio.play();
      }
    }, [time, isRunning]);
  return (
    <div className={`text-center fs-1 clock d-flex align-items-center justify-content-center ${(isRunning ? 'clock-running' : '')} mb-5`}>
      <p id="timer-text">{`${( minutes < 9 ? '0' : '')}${minutes}:${( seconds < 10 ? '0' : '')}${seconds}`}</p>
    </div>
  )
}

export default Timer