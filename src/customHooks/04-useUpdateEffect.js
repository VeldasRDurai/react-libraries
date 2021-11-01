import { useEffect, useRef } from "react";

const useUpdateEffect = ( callback, dependencies ) => {

    if( !Array.isArray(dependencies) )    throw new Error("Dependencies must be an array");
    if( ! typeof callback === "function") throw new Error("Callback function is not a function");

    const firstRender = useRef( true );

    useEffect( () => {
        if ( firstRender.current ){
            firstRender.current = false;
            return;
        }
        callback();

    },dependencies);
}

export default useUpdateEffect;