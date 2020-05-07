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
        color: 0,
        texture: ' ',
        furniture: ' ',
        picture: ' ',
    },
    setConfig: () => null,
    list: [],
    setList: () => null,
    handleFinish: () => null,
    handleDelete: () => null,
    handleRoomDelete: () => null,
});