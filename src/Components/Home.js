import React from 'react';
import Button1 from './Button';
import image from '../Images/download.png';
const Home = () => {
  return (
    <div
      style={{
        height: '89vh',
        backgroundImage: `url(${image})`,
      }}
    >
      <Button1></Button1>
    </div>
  );
};

export default Home;
