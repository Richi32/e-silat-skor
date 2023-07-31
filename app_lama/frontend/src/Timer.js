import React, { useState, useEffect } from 'react';

const Timer = () => {
  const [time, setTime] = useState(5000);
  const [isActive, setIsActive] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    let interval = null;

    if (isActive && !isPaused) {
      interval = setInterval(() => {
        setTime((prevTime) => (prevTime > 0 ? prevTime - 10 : 0)); // Mengurangi waktu dalam format milidetik (ms)        
      }, 10);      
    }

    else {
      clearInterval(interval);
    }

    if (time === 0) {
      clearInterval(interval);
      handleStop();
    }

    return () => {
      clearInterval(interval);
    };
  }, [isActive, isPaused, time]);

  const handleStart = () => {
    setIsActive(true);
    setIsPaused(false);
    setTime(5000);
    const audio = new Audio('assets/sounds/sempritan.mp3');
          audio.play();
  };

  const handlePause = () => {
    setIsPaused(true);
  };

  const handleResume = () => {
    setIsPaused(false);
  };

  const handleStop = () => {
    setIsActive(false);
    setIsPaused(false);  
    setTime(0);  
    const audio = new Audio('assets/sounds/timer-habis.mp3');
          audio.play();
  };

  const handleReset = () => {
     setTime(5000);
  };

  const formatTime = (time) => {
    const minutes = Math.floor((time / 1000 / 60) % 60).toString().padStart(2, '0');
    const seconds = Math.floor((time / 1000) % 60).toString().padStart(2, '0');
    const milliseconds = Math.floor((time % 1000) / 10).toString().padStart(2, '0');

    return `${minutes}:${seconds}.${milliseconds}`;
  };

  return (
    <div>
      <div>{formatTime(time)}</div>
      {!isActive && !isPaused && (
        <>
        <button onClick={handleStart} className="btn btn-primary btn-sm"><i className="fas fa-play"></i></button>---
        <button onClick={handleReset} className="btn btn-primary btn-sm"><i className="fas fa-sync-alt"></i></button>
        </>
      )}
      {isActive && !isPaused && (
        <button onClick={handlePause} className="btn btn-primary btn-sm"><i className="fas fa-pause"></i></button>
      )}
      {isPaused && (
        <div>
          <button onClick={handleResume} className="btn btn-primary btn-sm"><i className="fas fa-play"></i></button>---
          <button onClick={handleStop} className="btn btn-primary btn-sm"><i className="fas fa-stop"></i></button>          
        </div>
      )}
    </div>
  );
};

export default Timer;
