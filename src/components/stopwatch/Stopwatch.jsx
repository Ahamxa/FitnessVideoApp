import React, { useState, useEffect } from 'react';
import './index.css'
import Iconify from '../iconify';

function Stopwatch() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let intervalId;

    if (isRunning) {
      intervalId = setInterval(() => {
        setTime(prevTime => prevTime + 1);
      }, 1000);
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [isRunning]);

  const handleStart = () => {
    setIsRunning(true);
  };

  const handleStop = () => {
    setIsRunning(false);
  };

  const handleReset = () => {
    setTime(0);
    setIsRunning(false);
  };

  const formatTime = () => {
    const hours = Math.floor(time / 3600).toString().padStart(2, '0');
    const minutes = Math.floor((time % 3600) / 60).toString().padStart(2, '0');
    const seconds = (time % 60).toString().padStart(2, '0');

    return `${hours}:${minutes}:${seconds}`;
  };

  return (
    <div className='watch-widget'>
      <h2>{formatTime()}</h2>
      {!isRunning && (
        <button onClick={handleStart}>Start</button>
      )}
      {isRunning && (
        <button className='stop-btn' onClick={handleStop}>Stop</button>
      )}
      <button className='reset-btn' onClick={handleReset}>Reset</button>
    </div>
  );
}

export default Stopwatch;