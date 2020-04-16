import React from 'react';
import PropTypes from 'prop-types';


function FirstOptions(props){

    return <div className="optionOne">
            <div className="optionOne__first">
                <h2 className="optionOne__firstLuminity">Potencia iluminación</h2>
                <input min="0" max="10" className="optionOne__firstRange" type="range"></input>
                <div className="optionOne__firstPrice">
                    <h4 className="optionOne__firstPriceTitle">Precio iluminación</h4>
                    <h4 className="optionOne__firstPriceNumber">$0</h4>
                </div> 
            </div>

            <div className="optionOne__second">
                <h2 className="optionOne__secondLamps">Número de Lamparas</h2>
                <select className="optionOne__secondRange">
                    <option value="O1">1 Lampara</option>
                    <option value="O2">2 Lamparas</option>
                    <option value="O3">3 Lamparas</option>
                    <option value="O4">4 Lamparas</option>
                </select>
                <div className="optionOne__secondPrice">
                    <h4 className="optionOne__secondPriceTitle">Precio Lamparas</h4>
                    <h4 className="optionOne__secondPriceNumber">$0</h4>
                </div> 
            </div>
    </div>
}

FirstOptions.propTypes = {
    value: PropTypes.number,
    default: PropTypes.string,
    private: PropTypes.bool,
}

export default FirstOptions;