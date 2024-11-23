import React, { useRef } from 'react';

function ScrollToSection() {

  const sectionRef = useRef(null);
  const scroll = () => {
    sectionRef.current.scrollIntoView({
      behavior: 'smooth', 
      block: 'start',    
    });
  };

  return (
    <div>
      <button onClick={scrollToSection}>Scroll to Section</button>

      <div style={{ height: '100vh' }}>
        <h1>Welcome to the page!</h1>
        <p>Scroll down to see the target section.</p>
      </div>
      <div ref={sectionRef} style={{ height: '100vh', backgroundColor: '#f0f0f0' }}>
        <h2>This is the section to scroll to!</h2>
      </div>

      <div style={{ height: '100vh' }}>
        <h1>More content below...</h1>
      </div>
    </div>
  );
}

export default Scroll;
