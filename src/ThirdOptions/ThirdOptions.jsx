import React from 'react';
import PropTypes from 'prop-types';
import { DesignContext } from '../utils/DesignContext';

function ThirdOptions(props){
    const context = React.useContext(DesignContext);

    return <p>Holis</p>
}

ThirdOptions.propTypes = {
    value: PropTypes.number,
    default: PropTypes.string,
    private: PropTypes.bool,
}

export default ThirdOptions;