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
            <h2>Galeria Design Home</h2>
            <div className="GalleryMain__container">
            {context.list.map((room, index) => {
            return(
                <div className="GalleryMain__elem">
                    <Room  
                    color={room.color} 
                    id={room.id} 
                    intensity={room.intensity} 
                    numberLamps={room.numberLamps} 
                    texture = {room.texture}
                    furniture = {room.furniture}
                    picture = {room.picture}
                    priceTotal={room.priceTotal}>
                    </Room>
                    <div className="GalleryMain__elemFooter">
                        <img onClick={()=> handleRoomDelete(room.id)} className="GalleryMain__elemFooterDelete" src="./resources/delete.png" alt=""/>
                        <h2>Precio total: ${room.priceTotal.toLocaleString()}</h2>
                    </div>
                    {/* <button onClick={()=> handleRoomDelete(room.id)} className="btn btn--noFill btn--optionsBar GalleryMain__elemBtn">Eliminar</button> */}
                </div>
            )         
        })}
        </div>
        <div className="GalleryMain__buttons">
            <button onClick={handleStart} className="btn btn--fill btn--optionsBar">Crear nuevo diseño</button>
            {context.list.length > 0 && <button onClick={handleDelete} className="btn btn--noFill btn--optionsBar">Borrar toda la galeria</button>}
        </div>  
        </div>
        )
}

Gallery.propTypes = {
    value: PropTypes.number,
    default: PropTypes.string,
    private: PropTypes.bool,
}

export default Gallery;