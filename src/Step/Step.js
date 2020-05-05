import React from 'react';
import PropTypes from 'prop-types';
import NavBar from '../NavBar/NavBar';
import FirstOptions from '../FirstOptions/FirstOptions';
import SecondOptions from '../SecondOptions/SecondOptions';
import ThirdOptions from '../ThirdOptions/ThirdOptions';
import { Route, Link, Redirect, useHistory } from 'react-router-dom';
import { DesignContext } from '../utils/DesignContext';
import Gallery from '../Gallery/Gallery';


function Step(props){
    const [active, setActive ] = React.useState(true);
    const context = React.useContext(DesignContext);
    const history = useHistory();
    let nextRoute = '';
    let tagBtn = 'Continuar';

    if(!props.match.params.id) {
         // redirigir al usuario a la ruta /desing/ilumination cuando el match este vacio
        nextRoute = '/diseño/iluminacion'
        return <Redirect to="/diseño/iluminacion"/>;
    }

    // if(!active && props.match.params.id === 'pintura') {
    //     // redirigir al usuario a la ruta /diseño/iluminacion
    //     return <Redirect to="/diseño/iluminacion" />;
    // }

    
    
    
    if(props.match.params.id === 'iluminacion') nextRoute = '/diseño/pintura';
    if(props.match.params.id === 'pintura') nextRoute = '/diseño/muebleria';
    if(props.match.params.id === 'muebleria') {
        tagBtn = 'Finalizar';
        nextRoute = '/Galeria'
    }

    const handleFinish = () =>{
        context.handleFinish();
    }
    
    
    const handleClick = () => {
        if(props.match.params.id === 'muebleria') {
           handleFinish();
           tagBtn = 'Finalizar';
           nextRoute = '/Galeria'
        }
        history.push(nextRoute);
    }

    
    return <div className ="step">
        <div className="step__content">
            <NavBar route={props.match.params.id}></NavBar>
            <img className="step__contentImg" src="/resources/room.jpg"></img>
        </div>

        <div className ="step__bar">
            <button className="btn btn--help step__barHelp">?</button>
            <img className="step__barLogo" src="/resources/logo.png"/>
            <div className="step__barPrice">
                <h1 className="step__barPriceTitle">Total</h1>
                <h1 className="step__barPriceNumber">${context.priceTotal.toLocaleString()} </h1>
            </div>

            <div className="step__barSeparator">
                <h2 className="step__barSeparatorTitle">Escoge tus opciones</h2>
            </div>

            <div className="step__barOptions"> 
                <Route path="/diseño/iluminacion" component={FirstOptions}/>
                <Route path="/diseño/pintura" component={SecondOptions}/>
                <Route path="/diseño/muebleria" component={ThirdOptions}/>
                <Route path="/diseño/galeria" component={Gallery}/>
            </div>

            <div className="step__barButtons">
                <button className="btn btn--noFill btn--optionsBar">Ver Galeria</button>
                <button onClick={handleClick} className="btn btn--fill btn--optionsBar">{tagBtn}</button>
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