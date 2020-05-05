import React from 'react';
import PropTypes from 'prop-types';

export const Room = ({ id, priceTotal, intensity, numberLamps, color }) => {
    
    const style = {
        backgroundColor: color,
        width: '300px',
    }

    return (<div style={style}>
        <p>{id}</p>
        <p>{priceTotal}</p>
        <p>{intensity}</p>
        <p>{numberLamps}</p>
        </div>);
  }
  
  Room.propTypes = {
    name: PropTypes.string,
    id: PropTypes.string,
    height: PropTypes.number,
    color: PropTypes.string,
    onDelete: PropTypes.func,
  }