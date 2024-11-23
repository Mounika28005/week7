
function Uncontrolled() {
  const inputRef = useRef();
  const handleSubmit = (e) => {
    e.preventDefault(); 
    alert('Input Value: ' + inputRef.current.value); 
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" ref={inputRef} /> 
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Uncontrolled;
