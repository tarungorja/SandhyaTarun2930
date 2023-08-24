import React from 'react';
import './1Components.css';
import DialogueBox from './DialogueBox';
import { dates } from '../Utils/dates';
const Letters = () => {
  return (
    <div
      style={{
        backgroundColor: '#A7ECEE',
        backgroundImage:
          'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAUHnciTByU1nRSs-JXtUsW9GVZnK9wHMtGw&usqp=CAU")',
        backgroundSize: '100dvw',
        // 'url("https://colorhunt.co/img/color-hunt-logo-face.svg")'
      }}
    >
      {/* date: '29-12-2021',
          title: 'Seen U For The First Time',
          letter: '😍😍😍', */}
      {dates.map((date, index) => {
        return (
          <div key={index} className="date-btn" style={{ margin: '0' }}>
            <DialogueBox
              date={date.date}
              title={date.title}
              letter={date.letter}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Letters;
