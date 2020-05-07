import React from 'react';
import PropTypes from 'prop-types';
import { GithubPicker } from 'react-color';
import { DesignContext } from '../utils/DesignContext';
import { Redirect } from 'react-router-dom';
import { floor } from '../config/floor';
import { paint } from '../config/paint';


function SecondOptions(props){
    const context = React.useContext(DesignContext);
    const textures = [1,2,3];

    const handleColor = (color) => {
        if(color.hex === '#b80000'){
            var colorpick = 1;
        }
        if(color.hex === '#db3e00'){
            var colorpick = 2;
        }
        if(color.hex === '#fccb00'){
            var colorpick = 3;
        }
        if(color.hex === '#008b02'){
            var colorpick = 4;
        }
        if(color.hex === '#006b76'){
            var colorpick = 5;
        }
        if(color.hex === '#1273de'){
            var colorpick = 6;
        }
        if(color.hex === '#004dcf'){
            var colorpick = 7;
        }
        if(color.hex === '#5300eb'){
            var colorpick = 8;
        }
        context.setConfig({
            ...context.config,
            color: colorpick,
        });
    }

    const handleTexture = (texture) =>{
        context.setConfig({
            ...context.config,
            texture: texture,
        })
    }
    const priceFloor = floor.find((e) => e.value == context.config.texture)?.cost || 0;
    const pricePaint = paint.find((e) => e.value == context.config.color)?.cost || 0;

    if(context.config.numberLamps == ' ' ){
        return <Redirect to = "/diseño/iluminacion" />
    } 

    return <div className="optionSecond">
        <div className="optionSecond__first">
            <h2 className="optionSecond__firstPainting">Pintura pared</h2>
            {/* <input min="0" max="10" className="optionSecond__firstColor" type="color"></input> */}
            <GithubPicker colors={
                ['#B80000', 
                '#DB3E00', 
                '#FCCB00', 
                '#008B02', 
                '#006B76', 
                '#1273DE', 
                '#004DCF', 
                '#5300EB',]} 
                value={context.config.color} 
                onChange={handleColor}/>
            <div className="optionSecond__firstPrice">
                <h4 className="optionSecond__firstPriceTitle">Precio pintura</h4>
                <h4 className="optionSecond__firstPriceNumber">${pricePaint.toLocaleString()}</h4>
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