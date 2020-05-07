import React from 'react';
import PropTypes from 'prop-types';
import { DesignContext } from '../utils/DesignContext';
import Furniture from './Furniture';
import { furniture } from '../config/furniture';

function ThirdOptions(props){
    const context = React.useContext(DesignContext);
    const furnitures = [1,2,3,4,5,6];

    const handleFurniture = (furniture) =>{
        context.setConfig({
            ...context.config,
            furniture: furniture,
        })
    }
    const priceFurniture = furniture.find((e) => e.value == context.config.furniture)?.cost || 0;

    return (<div className="thirdOptions">
        <h2 className="thirdOptions__title">Muebleria</h2>
        <div className="thirdOptions__elem">
            {furnitures.map(furniture => {
            return <div className="thirdOptions__elemImg">
                    {/* <Furniture fur={fur}></Furniture> */}
                    <button onClick={()=>handleFurniture(furniture)} className="thirdOptions__elemImgBtn">
                        <img src={'../resources/mueble'+furniture+'.png'} alt=""/>
                    </button>
                </div>
            })}
        </div>
        <div className="optionSecond__secondPrice">
            <h4 className="optionSecond__secondPriceTitle">Precio del mueble</h4>
        <h4 className="optionSecond__secondPriceNumber">${priceFurniture.toLocaleString()}</h4>
        </div> 
    </div>)
    
}

ThirdOptions.propTypes = {
    value: PropTypes.number,
    default: PropTypes.string,
    private: PropTypes.bool,
}

export default ThirdOptions;