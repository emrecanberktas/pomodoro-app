import React, { useState, useEffect } from "react";

function Timer() {
  const [minute, setMinute] = useState(15);
  const [second, setSecond] = useState(0);

  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval = null;
    if (isRunning) {
      interval = setInterval(() => {
        if (second > 0) {
          setSecond(second - 1);
        }
        if (second === 0) {
          if (minute === 0) {
            clearInterval(interval);
          } else {
            setMinute(minute - 1);
            setSecond(59);
          }
        }
      }, 1000);
    } else if (!isRunning && minute === 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  });

  return (
    <div>
      <h1>
        {minute}:{second}
      </h1>
      <button onClick={() => setIsRunning(!isRunning)}>
        {isRunning ? "Pause" : "Start"}
      </button>
    </div>
  );
}

export default Timer;
