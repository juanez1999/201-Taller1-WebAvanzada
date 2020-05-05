import * as React from 'react';
import PropTypes from 'prop-types';
import { Typography } from '@material-ui/core';

export const Design = ({id, intensity, numberLamps, color }) =>{

    return (<div>
        <Typography>
        </Typography>
    </div>);
}

Design.propTypes = {
    id: PropTypes.string,
    intensity: PropTypes.number,
    numberLamps: PropTypes.number,
    color: PropTypes.string,
}