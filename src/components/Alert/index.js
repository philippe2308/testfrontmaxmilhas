import React from 'react';
import './style.css';

export const Alert = ({message,showAlert}) => {
    if(!showAlert){
        return null
    }
    return (
        <div className="alert">
            {message}
        </div>
    );
  }