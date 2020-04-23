import React from 'react';
import PropTypes from 'prop-types';
import { Slider, InputLabel, Select, MenuItem, FormControl } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { DesignContext } from '../utils/DesignContext';

function FirstOptions(props){
    const context = React.useContext(DesignContext);

    console.log(context.id);

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

    return <div className="optionOne">
            <div className="optionOne__first">
                <h2 className="optionOne__firstLuminity">Intensidad iluminación</h2>
                <Slider className="optionOne__firstRange" onChange={handleChangeSlider}  value={context.config.intensity} defaultValue={1} aria-labelledby="discrete-slider" valueLabelDisplay="auto" marks min={1} max={5} />
                {/* <input min="0" max="10" className="optionOne__firstRange" type="range"></input> */}
                <div className="optionOne__firstPrice">
                    <h4 className="optionOne__firstPriceTitle">Precio iluminación</h4>
                    <h4 className="optionOne__firstPriceNumber">$0</h4>
                </div> 
            </div>

            <div className="optionOne__second">
                <h2 className="optionOne__secondLamps">Número de Lamparas</h2>
                {/* <select className="optionOne__secondRange">
                    <option value="O1">1 Lampara</option>
                    <option value="O2">2 Lamparas</option>
                    <option value="O3">3 Lamparas</option>
                    <option value="O4">4 Lamparas</option>
                </select> */}
                <FormControl className={classes.formControl}>
                    <InputLabel className="optionOne__secondLabel" id="demo-simple-select-label">Número Lamparas</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={context.numberLamps}
                            onChange={handleChange}
                            className="optionOne__secondSelect"
                        >
                        <MenuItem value={1}>1 Lampara</MenuItem>
                        <MenuItem value={2}>2 Lamparas</MenuItem>
                        <MenuItem value={3}>3 Lamparas</MenuItem>
                        </Select>
                </FormControl>

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