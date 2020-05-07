import React from 'react';
import PropTypes from 'prop-types';
import { DesignContext } from '../utils/DesignContext';
import { picture } from '../config/picture';

function FourthOptions(props){
    const context = React.useContext(DesignContext);
    const pictures = [1,2,3,4,5,6];

    const handlePicture = (picture) =>{
        context.setConfig({
            ...context.config,
            picture: picture,
        })
    }
    const pricePicture = picture.find((e) => e.value == context.config.picture)?.cost || 0;

    return (<div className="FourthOptions">
        <h2 className="FourthOptions__title">Cuadros</h2>
        <div className="FourthOptions__elem">
            {pictures.map(picture => {
            return <div className="FourthOptions__elemImg">
                    <button onClick={()=>handlePicture(picture)} className="FourthOptions__elemImgBtn">
                        <img src={'../resources/cuadro'+picture+'.png'} alt=""/>
                    </button>
                </div>
            })}
        </div>
        <div className="optionSecond__secondPrice">
            <h4 className="optionSecond__secondPriceTitle">Precio del cuadro</h4>
        <h4 className="optionSecond__secondPriceNumber">${pricePicture.toLocaleString()}</h4>
        </div> 
    </div>)
    
}

FourthOptions.propTypes = {
    value: PropTypes.number,
    default: PropTypes.string,
    private: PropTypes.bool,
}

export default FourthOptions;