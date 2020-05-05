import React from 'react';
import PropTypes from 'prop-types';
import { DesignContext } from '../utils/DesignContext';
import { Room } from '../Room/Room';

function Gallery(props){
    const context = React.useContext(DesignContext);

    
    return (
        <div className="GalleryMain">
        {context.list.map(room => {
            return(
                <div>
                    <Room  
                    color={room.color} 
                    id={room.id} 
                    intensity={room.intensity} 
                    numberLamps={room.numberLamps} 
                    priceTotal={room.priceTotal}>
                    </Room>
                </div>
            )         
        })}
        </div>
        )
}

Gallery.propTypes = {
    value: PropTypes.number,
    default: PropTypes.string,
    private: PropTypes.bool,
}

export default Gallery;