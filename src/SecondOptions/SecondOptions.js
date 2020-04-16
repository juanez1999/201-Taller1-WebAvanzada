import React from 'react';
import PropTypes from 'prop-types';


function SecondOptions(props){
    return <div className="optionSecond">
        <div className="optionSecond__first">
            <h2 className="optionSecond__firstPainting">Pintura pared</h2>
            <input min="0" max="10" className="optionSecond__firstColor" type="color"></input>
            <div className="optionSecond__firstPrice">
                <h4 className="optionSecond__firstPriceTitle">Precio pintura</h4>
                <h4 className="optionSecond__firstPriceNumber">$0</h4>
            </div> 
        </div>

        <div className="optionSecond__second">
                <h2 className="optionSecond__secondMaterial">Material del piso</h2>
                <div className="optionSecond__secondPrice">
                    <h4 className="optionSecond__secondPriceTitle">Precio del material</h4>
                    <h4 className="optionSecond__secondPriceNumber">$0</h4>
                </div> 
        </div>
    </div>
}

SecondOptions.propTypes = {
    value: PropTypes.number,
    default: PropTypes.string,
    private: PropTypes.bool,
}

export default SecondOptions;