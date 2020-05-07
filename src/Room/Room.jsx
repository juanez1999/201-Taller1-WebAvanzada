import React from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import { DesignContext } from '../utils/DesignContext';

export const Room = ({ id, priceTotal, intensity, numberLamps, color, texture, furniture, picture }) => {

  const context = React.useContext(DesignContext);
  var cantLamps = [];

     React.useEffect(()=>{
        context.setId(uuidv4());
    },[]);

    const style = {
        backgroundImage: `url(${'./resources/pared'+color+'.jpg'})`,
        width: '100%',
        height: '100%',
    }

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
    
    return (<div className="Room__container">
        {/* <p>{id}</p>
        <p>{priceTotal}</p>
        <p>{intensity}</p> */}
        {/* <img className="Room__fondoImg" src={'/resources/room.jpg'}></img> */}
        <div style={style} className="Room">
            <div className="Room__lamps">
              {cantLamps.map((cant)=>{
                return <div className="imgLamps"><img className="imgLamps__lamp" src={'./resources/lamp'+numberLamps+'.png'}></img></div>
              })}
            </div>
            {furniture != ' ' &&
              <div className="Room__furniture">
                <img className="Room__furnitureImg" src={'./resources/mueble'+furniture+'.png'}></img>
              </div>
            }
            {picture != ' ' &&
              <div className="Room__picture">
                <img className="Room__pictureImg" src={'./resources/cuadro'+picture+'.png'}></img>
              </div>
            }
            {texture != ' ' &&
              <div className="Room__floor">
                <img className="Room__floorImg" src={'./resources/piso'+texture+'.png'}></img>
              </div>
            }
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