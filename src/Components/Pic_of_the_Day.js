import React from 'react';
import image from '../Images/1.png';

const PicOfTheDay = () => {
  return (
    <div
      style={{
        height: '89vh',
        backgroundImage: `url(${image})`,
      }}
    >
      <h1
        className="div"
        style={{
          backgroundColor: 'violet',
          borderRadius: '20px',
          padding: ' 5px, 5px,5px',
        }}
      >
        Uploading...
      </h1>
    </div>
  );
};
export default PicOfTheDay;
