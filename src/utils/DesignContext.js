import * as React from 'react';

export const DesignContext = React.createContext({
    id: '',
    setInsensity: () => null,
    setNumberLamps: () => null,
    config: {
        intensity: 1,
        numberLamps: 1,
        color: '#ffffff',
    },
    setConfig: () => null,
});