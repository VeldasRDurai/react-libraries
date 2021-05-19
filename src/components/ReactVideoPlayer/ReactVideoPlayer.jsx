import React, { useState } from 'react';
import ReactPlayer from 'react-player';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
   
const Div = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
`;

const ReactVideoPlayer = () => {
    const history = useHistory();
    const [ loading, setLoading ] = useState(true);
    return (
        <Div>
            <div onClick={ () => history.push('/') } > Back </div>
            {   loading && 'Loading...' }
            <ReactPlayer
                url='https://youtu.be/47bXqs0Zs7E'
                controls
                height='250px' width='500px'
                onReady={() => setLoading(false)}
                onStart={() => console.log('onStart callback')}
                onPause={() => console.log('onPause callback')}
                onEnded={() => console.log('onEnded callback')}
                onError={() => console.log('onError callback')}
            />
        </Div>
    );
}

export default ReactVideoPlayer;