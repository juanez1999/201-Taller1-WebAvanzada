import React from 'react';
import PropTypes from 'prop-types';
import { DesignContext } from '../utils/DesignContext';
import { Room } from '../Room/Room';
import { Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';


function Gallery(props){
    const context = React.useContext(DesignContext);
    const history = useHistory();

    const handleDelete = () =>{
        context.handleDelete();
    }

    const handleRoomDelete = (id) =>{
        console.log(id);
        context.handleRoomDelete(id);
    }
    
    const handleStart = () => {
        history.push('/diseño');
    }

   

    return (
        <div className="GalleryMain">
        {context.list.map((room, index) => {
            return(
                <div className="GalleryMain__elem">
                    <Room  
                    color={room.color} 
                    id={room.id} 
                    intensity={room.intensity} 
                    numberLamps={room.numberLamps} 
                    texture = {room.texture}
                    priceTotal={room.priceTotal}>
                    </Room>
                    <Button onClick={()=> handleRoomDelete(room.id)} variant="contained" color="primary">Eliminar</Button>
                </div>
            )         
        })}
        <Button variant="contained" onClick={handleStart} color="secondary">Crear nuevo diseño</Button>
        {context.list.length > 0 && <Button onClick={handleDelete} variant="contained" color="secondary">Borrar toda la galeria</Button>}
        </div>
        )
}

Gallery.propTypes = {
    value: PropTypes.number,
    default: PropTypes.string,
    private: PropTypes.bool,
}

export default Gallery;