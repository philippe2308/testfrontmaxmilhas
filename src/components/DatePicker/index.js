import React from 'react';
import Calendar from 'react-calendar';
import './style.css';

export const DatePicker = ({}) => {
  
    return (
        <div>
            <Calendar
                minDate={new Date()}
            />
        </div>
    );
  }

  /*
          onChange={this.onChange}
          value={this.state.date}*/