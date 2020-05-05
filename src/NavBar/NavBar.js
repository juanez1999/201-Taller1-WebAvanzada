import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


function NavBar(props){
    return <div className ="navBar">

        <div className="navBar__step">
            <Link className="link" to="/diseño/iluminacion">
                <div className="navBar__stepState">
                    {/* Asi se hace para condicionar el cambio de estado de la nav con el parametro route que recibe a través
                    de props y quien dice en que ruta esta actualmente */}
                    <div className={`navBar__stepStateCircle navBar__stepStateCircle${props.route != 'iluminacion' && '--done'}`}>1</div>
                    <p className="navBar__stepStateTitle">Iluminación</p>
                </div>
            </Link>
            <div className={`navBar__stepLine navBar__stepLine${props.route != 'iluminacion' && '--done'}`}></div>
        </div>
        
        <div className="navBar__step">
            <Link className="link" to="/diseño/pintura">
                <div className="navBar__stepState">
                        <div className={`navBar__stepStateCircle navBar__stepStateCircle${props.route != 'pintura' && props.route !='iluminacion' && '--done'}`}>2</div>
                        <p className="navBar__stepStateTitle">Pintura</p>
                    </div>
            </Link>
            <div className={`navBar__stepLine navBar__stepLine${props.route != 'pintura' && props.route !='iluminacion' && '--done'}`}></div>
        </div>    
        <div className="navBar__step">
        <Link className="link" to="/diseño/muebleria">
            <div className="navBar__stepState">
                <div className="navBar__stepStateCircle">3</div>
                <p className="navBar__stepStateTitle">Muebleria</p>
            </div>
        </Link>
            <div className="navBar__stepLine"></div>
        </div>
        <div className="navBar__step">
        <Link className="link" to="/Galeria">
            <div className="navBar__stepState">
                <div className="navBar__stepStateCircle">4</div>
                <p className="navBar__stepStateTitle">Finalizar</p>
            </div>
        </Link>
        </div>
        
        
    </div>
}

NavBar.propTypes = {
    value: PropTypes.number,
    default: PropTypes.string,
    private: PropTypes.bool,
}

export default NavBar;