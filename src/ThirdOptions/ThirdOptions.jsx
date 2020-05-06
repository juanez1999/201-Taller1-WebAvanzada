import React from 'react';
import PropTypes from 'prop-types';
import { DesignContext } from '../utils/DesignContext';
import Furniture from './Furniture';

function ThirdOptions(props){
    const context = React.useContext(DesignContext);
    const furniture = [1,2,3,4,5,6];

    return (<div className="thirdOptions">
        <h2 className="thirdOptions__title">Muebleria</h2>
        <div className="thirdOptions__elem">
            {furniture.map(fur => {
            return <div className="thirdOptions__elemImg">
                    <Furniture fur={fur}></Furniture>
                    {/* <img src={'../resources/mueble'+fur+'.png'} alt=""/> */}
                </div>
            })}
        </div>
        <div className="optionSecond__secondPrice">
            <h4 className="optionSecond__secondPriceTitle">Precio del mueble</h4>
            <h4 className="optionSecond__secondPriceNumber">$0</h4>
        </div> 
    </div>)
    
}

ThirdOptions.propTypes = {
    value: PropTypes.number,
    default: PropTypes.string,
    private: PropTypes.bool,
}

export default ThirdOptions;