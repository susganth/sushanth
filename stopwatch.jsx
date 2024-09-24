import React, { useState, useEffect } from 'react';


const Stopwatch = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);

  useEffect(() => {
    let intervalId;
    if (isRunning) {
      intervalId = setInterval(() => {
        setElapsedTime(prevTime => prevTime + 0.1);
      }, 100);
    }
    return () => clearInterval(intervalId);
  }, [isRunning]);

  const handleStartStop = () => {
    setIsRunning(!isRunning);
  };

  const handleReset = () => {
    setIsRunning(false);
    setElapsedTime(0);
  };

  return (
    <div className={`stopwatch ${isRunning ? 'running' : ''}`}>
      <h2>Stopwatch</h2>
      <div className="time-display">
        {elapsedTime.toFixed(1)} seconds
      </div>
      <div className="controls">
        
        <button onClick={handleStartStop}>
          {isRunning ? 'Stop' : 'Start'}
        </button>
        <button onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
};

export default Stopwatch;