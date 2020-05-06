import React from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import { DesignContext } from '../utils/DesignContext';

export const Room = ({ id, priceTotal, intensity, numberLamps, color }) => {

  const context = React.useContext(DesignContext);
  var cantLamps = [];

     React.useEffect(()=>{
        context.setId(uuidv4());
    },[]);

    const style = {
        backgroundColor: color,
        width: '70%',
        height: '100vh'
    }
    console.log(intensity);

    if(intensity == 1){
      cantLamps = [{
        cantLamps: ' ',
      }]
    }

    if(intensity == 2){
      cantLamps = [
      {
        cantLamps: ' ',
      },
      {
        cantLamps: ' ',
      }
      ]
    }

    if(intensity == 3){
      cantLamps = [
      {
        cantLamps: ' ',
      },
      {
        cantLamps: ' ',
      },
      {
        cantLamps: ' ',
      }
      ]
    }



    return (<div style={style} className="Room">
        {/* <p>{id}</p>
        <p>{priceTotal}</p>
        <p>{intensity}</p> */}
        <div className="Room__lamps">
          {/* <div className="imgLamps"><img className="imgLamps__lamp" src={'/resources/lamp'+numberLamps+'.png'}></img></div> */}
          {cantLamps.map((cant)=>{
            console.log(cantLamps.length);
            return <div className="imgLamps"><img className="imgLamps__lamp" src={'/resources/lamp'+numberLamps+'.png'}></img></div>
          })}
        </div>
      </div>);
  }
  
  Room.propTypes = {
    name: PropTypes.string,
    id: PropTypes.string,
    height: PropTypes.number,
    color: PropTypes.string,
    onDelete: PropTypes.func,
  }