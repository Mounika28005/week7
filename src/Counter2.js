
const Counter2 = () => {

  const [count, setCount] = useState(0);
  const prevCountRef = useRef();
  useEffect(() => {
    prevCountRef.current = count;
  }, [count]); 
  const prevCount = prevCountRef.current;

  return (
    <div>
      <h1>Current Count: {count}</h1>
      <h2>Previous Count: {prevCount !== undefined ? prevCount : 'N/A'}</h2>
      
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  );
};

export default Counter2;