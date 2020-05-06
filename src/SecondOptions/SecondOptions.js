import React from 'react';
import PropTypes from 'prop-types';
import { GithubPicker } from 'react-color';
import { DesignContext } from '../utils/DesignContext';
import { Redirect } from 'react-router-dom';
import { floor } from '../config/floor';


function SecondOptions(props){
    const context = React.useContext(DesignContext);
    const textures = [1,2,3];

    const handleColor = (color) => {
        context.setConfig({
            ...context.config,
            color: color.hex,
        });
    }

    const handleTexture = (texture) =>{
        context.setConfig({
            ...context.config,
            texture: texture,
        })
    }
    const priceFloor = floor.find((e) => e.value == context.config.texture)?.cost || 0;

    // console.log('holiwis');

    if(context.config.numberLamps == ' ' ){
        return <Redirect to = "/diseño/iluminacion" />
    } 

    return <div className="optionSecond">
        <div className="optionSecond__first">
            <h2 className="optionSecond__firstPainting">Pintura pared</h2>
            {/* <input min="0" max="10" className="optionSecond__firstColor" type="color"></input> */}
            <GithubPicker value={context.config.color} onChange={handleColor}/>
            <div className="optionSecond__firstPrice">
                <h4 className="optionSecond__firstPriceTitle">Precio pintura</h4>
                <h4 className="optionSecond__firstPriceNumber">$0</h4>
            </div> 
        </div>

        <div className="optionSecond__second">
                <h2 className="optionSecond__secondMaterial">Material del piso</h2>
                <div className="optionSecond__secondTexture">
                    {textures.map(texture => {
                        return <div className="optionSecond__secondTextureImg">
                            <button onClick={()=>handleTexture(texture)} className="optionSecond__secondTextureImgBtn">
                                <img src={'../resources/texture'+texture+'.jpg'} alt=""/>
                            </button>
                        </div>
                    })}
                </div>
                <div className="optionSecond__secondPrice">
                    <h4 className="optionSecond__secondPriceTitle">Precio del material</h4>
                    <h4 className="optionSecond__secondPriceNumber">${priceFloor.toLocaleString()}</h4>
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