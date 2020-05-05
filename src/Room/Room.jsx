import React from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import { DesignContext } from '../utils/DesignContext';

export const Room = ({ id, priceTotal, intensity, numberLamps, color }) => {

  const context = React.useContext(DesignContext);


     React.useEffect(()=>{
        context.setId(uuidv4());
    },[]);


    const style = {
        backgroundColor: color,
        width: '70%',
        height: '100vh'
    }

    if(numberLamps == 1){
      var img1 = 'holis';
    }


    return (<div style={style} className="Room">
        {/* <img className="step__contentImg" src="/resources/room.jpg"></img> */}
        {/* <img className="step__contentImg" src="/resources/piso1_colorcafe.png"></img> */}
        <p>{id}</p>
        <p>{priceTotal}</p>
        <p>{intensity}</p>
        <p>{img1}</p>
      </div>);
  }
  
  Room.propTypes = {
    name: PropTypes.string,
    id: PropTypes.string,
    height: PropTypes.number,
    color: PropTypes.string,
    onDelete: PropTypes.func,
  }