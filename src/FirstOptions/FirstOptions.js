import React from 'react';
import PropTypes from 'prop-types';
import { Slider, InputLabel, Select, MenuItem, FormControl } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { DesignContext } from '../utils/DesignContext';
import { lamps } from '../config/lamps';
import { ilumination } from '../config/ilumination';


function FirstOptions(props){
    const context = React.useContext(DesignContext);

    // console.log(context.id);
    // console.log(context.config.numberLamps);

    const useStyles = makeStyles((theme) => ({
        formControl: {
          margin: theme.spacing(1),
          minWidth: 120,
        },
        selectEmpty: {
          marginTop: theme.spacing(2),
        },
    }));

    const classes = useStyles();

    const handleChange = (event) => {
        context.setConfig({
            ...context.config,
            numberLamps: event.target.value,
        });
    };

    const handleChangeSlider = (event, newValue) => {
        context.setConfig({
            ...context.config,
            intensity: newValue,
        });
    };
    

    const priceLamps = lamps.find((e) => e.value == context.config.numberLamps)?.cost || 0;
    const priceIlumination = ilumination.find((e) => e.value == context.config.intensity)?.cost || 0;

    return <div className="optionOne">
            <div className="optionOne__second">
                <h2 className="optionOne__secondLamps">Tipo de lámpara</h2>
                <FormControl className={classes.formControl}>
                    <InputLabel className="optionOne__secondLabel" id="demo-simple-select-label">Tipo de lámparas</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={context.config.numberLamps}
                            onChange={handleChange}
                            className="optionOne__secondSelect"
                        >
                        {lamps.map(elem => <MenuItem value={elem.value}>{elem.text}</MenuItem>)}
                        </Select>
                </FormControl>

                <div className="optionOne__secondPrice">
                    <h4 className="optionOne__secondPriceTitle">Precio lámparas</h4>
                    <h4 className="optionOne__secondPriceNumber">${priceLamps.toLocaleString()}</h4>
                </div> 
            </div>
            
            <div className="optionOne__first">
                <h2 className="optionOne__firstLuminity">Intensidad iluminación</h2>
                <Slider className="optionOne__firstRange" onChange={handleChangeSlider}  value={context.config.intensity} defaultValue={1} aria-labelledby="discrete-slider" valueLabelDisplay="auto" marks min={1} max={3} />
                <div className="optionOne__firstPrice">
                    <h4 className="optionOne__firstPriceTitle">Precio iluminación</h4>
                    <h4 className="optionOne__firstPriceNumber">${priceIlumination.toLocaleString()}</h4>
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