import React from 'react';

const NoMatch = () => {
  return (
    <div
      style={{
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        fontWeight: 'bold',
        padding: '10px',
        borderStyle: 'solid',
        borderRadius: '10',
        backgroundColor: 'aqua',
      }}
    >
      No page Found
    </div>
  );
};

export default NoMatch;
