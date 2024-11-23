const InputForm = () => {

  const [inputValue, setInputValue] = useState('');
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div>
      <h2>Real-time Input Handling</h2>
      <form>
        <label>
          Type something:
          <input 
            type="text" 
            value={inputValue} 
            onChange={handleInputChange}  
            placeholder="Type here"
          />
        </label>
      </form>
      <p>You typed: {inputValue}</p>
    </div>
  );
};

export default InputForm;
