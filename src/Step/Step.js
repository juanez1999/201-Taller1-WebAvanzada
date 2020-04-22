import React from 'react';
import PropTypes from 'prop-types';
import NavBar from '../NavBar/NavBar';
import FirstOptions from '../FirstOptions/FirstOptions';
import SecondOptions from '../SecondOptions/SecondOptions';
import { Route, Link, Redirect, useHistory } from 'react-router-dom';


function Step(props){
    const [active, setActive ] = React.useState(true);
    const history = useHistory();

    if(!props.match.params.id) {
         // redirigir al usuario a la ruta /desing/ilumination cuando el match este vacio
        return <Redirect to="/design/ilumination"/>;
    }

    if(!active && props.match.params.id === 'painting') {
        // redirigir al usuario a la ruta /main/one
        return <Redirect to="/design/ilumination" />;
    }

    const handleClick = () => {
        history.push('/design/painting');
    }

    return <div className ="step">
        <div className="step__content">
            <NavBar></NavBar>
            <img className="step__contentImg" src="/resources/room.jpg"></img>
        </div>

        <div className ="step__bar">
            <button className="btn btn--help step__barHelp">?</button>
            <img className="step__barLogo" src="/resources/logo.png"/>
            <div className="step__barPrice">
                <h1 className="step__barPriceTitle">Total</h1>
                <h1 className="step__barPriceNumber">$1.000.000</h1>
            </div>

            <div className="step__barSeparator">
                <h2 className="step__barSeparatorTitle">Escoge tus opciones</h2>
            </div>

            <div className="step__barOptions"> 
                <Route path="/design/ilumination" component={FirstOptions}/>
                <Route path="/design/painting" component={SecondOptions}/>
            </div>

            <div className="step__barButtons">
                <button className="btn btn--noFill btn--optionsBar">Ver Galeria</button>
                <button onClick={handleClick} className="btn btn--fill btn--optionsBar">Continuar</button>
            </div>

        </div>
    </div>
}

Step.propTypes = {
    value: PropTypes.number,
    default: PropTypes.string,
    private: PropTypes.bool,
}

export default Step;