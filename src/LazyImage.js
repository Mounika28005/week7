import React, { useState, useEffect, useRef } from 'react';

const LazyImage = ({ src, alt, width, height }) => {
  const [inView, setInView] = useState(false);
  const imageRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect(); 
        }
      },
      {
        rootMargin: '100px', 
      }
    );
    
    if (imageRef.current) {
      observer.observe(imageRef.current);
    }

    return () => observer.disconnect(); 
  }, []);

  return (
    <img
      ref={imageRef}
      src={inView ? src : ''}
      alt={alt}
      width={width}
      height={height}
    />
  );
};

export default LazyImage;
