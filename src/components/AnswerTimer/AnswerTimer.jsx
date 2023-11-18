import './AnswerTimer.scss';
import { useEffect, useState, useRef } from 'react';

function AnswerTimer ({duration, onTimeUp}) {
  const [counter, setCounter] = useState(0);
  const [progressloaded, setProgressloaded] = useState(0);
  const intervalRef = useRef();

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCounter((cur) => cur + 1);
    }, 1000);

    return () => clearInterval(intervalRef.current);
  }, []);

  useEffect(() => {
    setProgressloaded(100 * (counter / duration));

    if (counter === duration) {
      clearInterval(intervalRef.current);

      setTimeout(() => {
        onTimeUp();
      }, 1000);
    }
  }, [counter, duration, onTimeUp]);

  return (
    <div className='answer-timer-container'>
      <div 
      style={{
        width: `${progressloaded}%`,
        backgroundColor: `${
          progressloaded < 40
            ? 'lightgreen'
            : progressloaded < 70
            ? 'orange'
            : 'red'
        }`
      }}
      className='progress'></div>
    </div>
  );
}

export default AnswerTimer;