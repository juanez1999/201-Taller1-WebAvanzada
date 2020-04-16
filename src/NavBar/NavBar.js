import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


function NavBar(props){
    return <div className ="navBar">

        <div className="navBar__step">
            <Link className="link" to="/design/ilumination">
                <div className="navBar__stepState">
                    <div className="navBar__stepStateCircle navBar__stepStateCircle--done">1</div>
                    <p className="navBar__stepStateTitle">Iluminación</p>
                </div>
            </Link>
            <div className="navBar__stepLine navBar__stepLine--done"></div>
        </div>
        
        
        <div className="navBar__step">
            <Link className="link" to="/design/painting">
                <div className="navBar__stepState">
                        <div className="navBar__stepStateCircle">2</div>
                        <p className="navBar__stepStateTitle">Pintura</p>
                    </div>
            </Link>
            <div className="navBar__stepLine"></div>
        </div>    
        <div className="navBar__step">
            <div className="navBar__stepState">
                <div className="navBar__stepStateCircle">3</div>
                <p className="navBar__stepStateTitle">Muebleria</p>
            </div>
            <div className="navBar__stepLine"></div>
        </div>
        <div className="navBar__step">
            <div className="navBar__stepState">
                <div className="navBar__stepStateCircle">4</div>
                <p className="navBar__stepStateTitle">Finalizar</p>
            </div>
        </div>
        
        
    </div>
}

NavBar.propTypes = {
    value: PropTypes.number,
    default: PropTypes.string,
    private: PropTypes.bool,
}

export default NavBar;