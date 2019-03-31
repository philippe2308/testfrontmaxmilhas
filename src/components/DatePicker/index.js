import React from 'react';
import Calendar from 'react-calendar';
import './style.css';

export const DatePicker = ({onChange, value}) => {
  
    return (
        <div>
            <Calendar
                minDate={new Date()}
                onChange={(date)=>onChange(date)}
                value={value}
            />
        </div>
    );
  }
