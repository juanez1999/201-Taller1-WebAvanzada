import React from 'react';
import PropTypes from 'prop-types';
import { ItemTypes } from '../App/App'
import { useDrag } from 'react-dnd'

function Furniture({fur}){

    const [{ isDragging }, drag] = useDrag({
        item: { type: ItemTypes.FURNITURE },
        collect: monitor => ({
          isDragging: !!monitor.isDragging(),
        }),
      })

    return (<div ref={drag} style={{opacity: isDragging ? 0.5 : 1, cursor: 'move'}}>
        <img src={'../resources/mueble'+fur+'.png'} alt=""/>
    </div>)
}

Furniture.propTypes = {
    value: PropTypes.number,
    default: PropTypes.string,
    private: PropTypes.bool,
}

export default Furniture;