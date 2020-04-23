import React from 'react';
import PropTypes from 'prop-types';
import { Link, useHistory } from 'react-router-dom';

function Home(props){
    var className = 'home';
    const history = useHistory();

    const handleClick = () => {
        history.push('/diseño/');
    }


    return <div className = {className}>
            <div className="home__title">
                <h1 className="home__titleFirst">DESIGN</h1>
                <h2 className="home__titleSecond">HOME</h2>
            </div>
            <img className="home__img" src="/resources/home.png"/>
            <div className="home__buttons">
                <Link className="link" to="/gallery"><button className="btn btn--noFill">Ver galeria</button></Link>
                <button onClick={handleClick} className="btn btn--fill">Comenzar</button>
            </div>
        </div>
}

Home.propTypes = {
    value: PropTypes.number,
    default: PropTypes.string,
    private: PropTypes.bool,
}

export default Home;