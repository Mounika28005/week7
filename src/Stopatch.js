
const Stopwatch = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const timerRef = useRef(null);
  const startTimer = () => {
    if (isRunning) return; 
    setIsRunning(true);
    timerRef.current = setInterval(() => {
      setTime((prevTime) => prevTime + 1);
    }, 1000);
  };
  const stopTimer = () => {
    clearInterval(timerRef.current);
    setIsRunning(false);
  };


  const resetTimer = () => {
    clearInterval(timerRef.current);
    setTime(0);
    setIsRunning(false);
  };

  return (
    <div>
      <h1>Stopwatch</h1>
      <p>Time: {time} seconds</p>

      <button onClick={startTimer} disabled={isRunning}>
        Start
      </button>
      <button onClick={stopTimer} disabled={!isRunning}>
        Stop
      </button>
      <button onClick={resetTimer}>
        Reset
      </button>
    </div>
  );
};

export default Stopwatch;
