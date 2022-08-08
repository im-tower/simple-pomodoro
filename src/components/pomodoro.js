import React, { useEffect, useState } from 'react'
import '../styles/pomodoro.scss';
import Config from './config';
import Controles from './controles'
import Timer from './timer'

const PomodoroTimer = () => {
  const [config, setconfig] = useState(false);
  const [running, setrunning] = useState(false);
  const [time, settime] = useState(0);
  const [startTime, setstartTime] = useState(25*60);
  const start = () => {
    settime(startTime);
    setrunning(true);
  }
  const stop = () => {
    settime(startTime);
    setrunning(false);
  }
  useEffect(() => {
    if(time <= 0){
      setrunning(false);
      return;
    }
    if(running){
      const interval = setInterval(() => settime(time-1), 1000);
      return () => clearInterval(interval);
    }
  }, [time,running]);
  return (
    <div className='pomodoro-app mt-5'>
      <Timer time={time} isRunning={running}/>
        {
          !config ?
            <>
              <Controles startAt={start} runningTimer={running} stop={stop} openConfig={ () => setconfig(true) } />
            </>
          :
          <Config setInitialTime = { t => { settime(t); setstartTime(t); } } closeConfig={ () => setconfig(false)} startTime={startTime} />
        }
    </div>
  )
}

export default PomodoroTimer