import { useState } from "react";

const useToggle = defaultValue => {
    if(typeof defaultValue === 'boolean'){
        throw new Error("Default value should be boolean type");
    }
    const [ value, setValue ] = useState( defaultValue );

    const toggledValue = input => 
        setValue( currentValue => 
            ( input && typeof input === 'boolean') ? input : !currentValue );
            
    return [ value, toggledValue ];
}

export default useToggle;