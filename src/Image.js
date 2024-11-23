import React from 'react';

const Image = () => {
  const imagePaths = [
    '/images/image1.jpg',
    '/images/image2.jpg',
    '/images/image3.jpg',
    '/images/image4.jpg'
  ];

  return (
    <div>
      <h1>Image Gallery</h1>
      <div className="image-gallery">
        {imagePaths.map((path, index) => (
          <img 
            key={index} 
            src={path} 
            alt={`Image ${index + 1}`} 
            style={{ width: '200px', margin: '10px' }} 
          />
        ))}
      </div>
    </div>
  );
};

export default Image;
