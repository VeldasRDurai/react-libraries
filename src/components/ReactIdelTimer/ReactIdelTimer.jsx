import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import IdleTimer from 'react-idle-timer'; 
   
const Div = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
`;

const ReactIdleTimer = () => {
  const idleTimerRef = useRef(null);
  const [ isActive, setIsActive ] = useState(true);
  const history = useHistory();
  return (
    <Div>
        <div onClick={ () => history.push('/') } > Back </div>
        <h1> { isActive ? 'Active' : 'Inactive' }  </h1>
        <IdleTimer ref={idleTimerRef} timeout={1000 * 5} onIdle={ () => setIsActive(false) } />
    </Div>
  );
}

export default ReactIdleTimer;