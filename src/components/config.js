import React, { useState } from 'react'

const Config = ({ setInitialTime, closeConfig, startTime }) => {
    const [minutes, setminutes] = useState(Math.floor(startTime/60));
    const [seconds, setseconds] = useState(startTime%60);
    return (
      <form onSubmit={(e) => {
        e.preventDefault();
        setInitialTime(minutes*60 + seconds);
        closeConfig();
      }}>
        <div className='form-group'>
          <label>Minutes</label>
          <input type="number" className='form-control form-control-sm' value={minutes} onChange={({target}) => {
                if(target.value < 0) return;
                setminutes(parseInt(target.value));
            }}/>
        </div>
        <div className='form-group'>
          <label>Seconds</label>
          <input type="number" className='form-control form-control-sm' value={seconds} onChange={({target}) => {
                if(target.value < 0) return;
                setseconds(parseInt(target.value));
            }}/>
        </div>
        <button type='submit' className='btn btn-primary mt-3'>Save</button>
      </form>
  )
}

export default Config