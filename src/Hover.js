const Hover = () => {
  const [isHovered, setIsHovered] = useState(false);
  const boxStyle = {
    width: '200px',
    height: '200px',
    backgroundColor: isHovered ? 'lightblue' : 'lightgray',
    transition: 'background-color 0.3s ease',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    border: '2px solid #000',
  };

  return (
    <div
      style={boxStyle}
      onMouseEnter={() => setIsHovered(true)}  
      onMouseLeave={() => setIsHovered(false)} 
    >
      Hover over me!
    </div>
  );
};

export default Hover;
