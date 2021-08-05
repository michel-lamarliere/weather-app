import React, { useContext, useState } from 'react';

const UnitContext = React.createContext();

export const useUnit = () => {
    return useContext(UnitContext);
};

const UnitProvider = (props) => {
    const [unit, setUnit] = useState('celcius' || true);

    return (
        <UnitContext.Provider value={[unit, setUnit]}>
            {props.children}
        </UnitContext.Provider>
    );
};

export default UnitProvider;
