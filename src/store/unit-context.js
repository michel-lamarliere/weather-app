import React, { useContext, useState } from 'react';

const UnitContext = React.createContext();

export const useUnit = () => {
    return useContext(UnitContext);
};

const UnitContextProvider = (props) => {
    const [unit, setUnit] = useState(true);

    return (
        <UnitContext.Provider value={[unit, setUnit]}>
            {props.children}
        </UnitContext.Provider>
    );
};

export default UnitContextProvider;
