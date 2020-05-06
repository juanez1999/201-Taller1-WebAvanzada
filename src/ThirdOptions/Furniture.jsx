import React from 'react';
import PropTypes from 'prop-types';

function Furniture({fur}){
    return <img src={'../resources/mueble'+fur+'.png'} alt=""/>
}

Furniture.propTypes = {
    value: PropTypes.number,
    default: PropTypes.string,
    private: PropTypes.bool,
}

export default Furniture;