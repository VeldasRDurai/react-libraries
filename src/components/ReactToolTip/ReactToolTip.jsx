import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

import Tippy from '@tippy.js/react'
import 'tippy.js/dist/tippy.css'

const Div = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
`;

const ToolTipDiv = styled.div`
    background-color:palegreen;
    color:black;
    padding:0 5px;
    border-radius:2px;
`;

const ReactToolTip = () => {
    const history = useHistory();
    return (
        <Div>
            <div onClick={ () => history.push('/') } > Back </div>

            <Tippy content='Hello' arrow={false} delay={500} placement='left-start' >
                <button>My button</button>
            </Tippy>

            <Tippy content={<ToolTipDiv> Button2 </ToolTipDiv>} >
                <button>My button</button>
            </Tippy>
        </Div>
    );
}

export default ReactToolTip;