import * as React from 'react';

export const DesignContext = React.createContext({
    id: '',
    priceTotal: 0,
    setInsensity: () => null,
    setNumberLamps: () => null,
    config: {
        intensity: 1,
        numberLamps: ' ',
        color: '#ffffff',
    },
    setConfig: () => null,
    list: [],
    setList: () => null,
});