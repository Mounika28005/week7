function ToggleText() {
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div>
      <button onClick={toggleVisibility}>
        {isVisible ? 'Hide' : 'Show'} Text
      </button>
      {isVisible && <p>This is the text that can be toggled!</p>}
    </div>
  );
}

export default ToggleText;
