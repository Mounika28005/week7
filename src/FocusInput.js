const FocusInput = () => {
  const inputRef = useRef(null);
  const focusInput = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <input 
        ref={inputRef} 
        type="text" 
        placeholder="Click the button to focus me!" 
      />
      <button onClick={focusInput}>Focus the input</button>
    </div>
  );
};

export default FocusInput;
