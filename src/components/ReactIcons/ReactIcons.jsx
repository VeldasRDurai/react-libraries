import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

import { IconContext } from 'react-icons';
import { AiFillAudio as Audio } from "react-icons/ai";//ant design icons
import { BsFillAlarmFill as Alarm } from "react-icons/bs"; //bootstrap icons
import { BiBomb as Bomb } from "react-icons/bi"; // box icons

const Div = styled.div`
    color:green;
    font-size:20px;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
`;

const ReactIcons = () => {
    const history = useHistory();
    return (
        <IconContext.Provider value={{ color: 'green', size:'20px' }} >
            <Div>
                <div onClick={ () => history.push('/') } > Back </div>
                <div> ant design icons - Audio - <Audio /> </div>
                <div> bootstrap icons - Alarm - <Alarm /> </div>
                <div> box icons - Bomb - <Bomb/> </div>
                <div> etc... </div>
            </Div>
        </IconContext.Provider>
    )
}

export default ReactIcons;