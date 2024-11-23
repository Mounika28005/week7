const Background = () => {
  return (
    <div 
      style={{
        backgroundImage: `url(${backgroundImage})`, 
        backgroundSize: 'cover',
        backgroundPosition: 'center', 
        width: '100%', 
        height: '400px' 
      }}
    >
      <h2 style={{ color: 'white', textAlign: 'center' }}>Hello, World!</h2>
    </div>
  );
};

export default Background;
