import React, { useState } from 'react';

export const UnitContext = React.createContext();

const UnitContextProvider = (props) => {
    const [unit, setUnit] = useState(true);

    return (
        <UnitContext.Provider value={[unit, setUnit]}>
            {props.children}
        </UnitContext.Provider>
    );
};

export default UnitContextProvider;
