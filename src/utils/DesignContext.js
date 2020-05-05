import * as React from 'react';

export const DesignContext = React.createContext({
    id: ' ',
    setId: () => null,
    priceTotal: '',
    setPriceTotal: () => null,
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