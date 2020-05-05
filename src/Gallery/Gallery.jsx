import React from 'react';
import PropTypes from 'prop-types';
import { DesignContext } from '../utils/DesignContext';
import { Room } from '../Room/Room';
import { v4 as uuidv4 } from 'uuid';
import { Button } from '@material-ui/core';


function Gallery(props){
    const context = React.useContext(DesignContext);

    const handleDelete = () =>{
        context.handleDelete();
    }

    const handleRoomDelete = (id) =>{
        console.log(id);
        context.handleRoomDelete(id);
    }

    React.useEffect(()=>{
        context.setId(uuidv4());
    },[]);

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
                    priceTotal={room.priceTotal}>
                    </Room>
                    <Button onClick={()=> handleRoomDelete(room.id)} variant="contained" color="primary">Eliminar</Button>
                </div>
            )         
        })}
        <Button variant="contained" color="secondary">Crear nuevo diseño</Button>
        <Button onClick={handleDelete} variant="contained" color="secondary">Borrar toda la galeria</Button>

        </div>
        )
}

Gallery.propTypes = {
    value: PropTypes.number,
    default: PropTypes.string,
    private: PropTypes.bool,
}

export default Gallery;