import * as React from 'react';

export const DesignContext = React.createContext({
    intensity: '',
    numberLamps: '',
    id: '',
    setInsensity: () => null,
    setNumberLamps: () => null,
});