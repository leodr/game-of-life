import React, { useState } from 'react';

const StateContext = React.createContext<any>(undefined);

interface props {
    children?: any;
}

const initialState = {
    running: true
};

const StateProvider: React.FC<props> = ({ children }) => {
    const value = useState(initialState);

    return (
        <StateContext.Provider value={value}>{children}</StateContext.Provider>
    );
};

export default StateProvider;
