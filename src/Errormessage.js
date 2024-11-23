const Errormessage = () => {
  const [hasError, setHasError] = useState(false);
  const toggleError = () => {
    setHasError(!hasError);
  };

  return (
    <div>
      <button onClick={toggleError}>
        {hasError ? 'Clear Error' : 'Simulate Error'}
      </button>
      {hasError && (
        <div style={{ color: 'red', marginTop: '10px' }}>
          <strong>Error: Something went wrong!</strong>
        </div>
      )}
    </div>
  );
};

export default Errormessage;
