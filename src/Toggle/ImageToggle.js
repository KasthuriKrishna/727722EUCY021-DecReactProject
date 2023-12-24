import React, { useState } from 'react';
import './Pagecss.css';
const ImageToggle = ({ image1, image2 }) => {
  const [isImage1Visible, setIsImage1Visible] = useState(true);

  const toggleImage = () => {
    setIsImage1Visible((prevValue) => !prevValue);
  };

  return (
    <body className='body'>
    <div className='header'>
    TOGGLE ME!!!
    </div>
    <div onClick={toggleImage} style={{ cursor: 'pointer' }} className='image'>
      {isImage1Visible ? (
        <img src={image1} alt="Image 1" />
      ) : (
        <img src={image2} alt="Image 2" />
      )}
    </div>
    </body>
  );
};

export default ImageToggle;
