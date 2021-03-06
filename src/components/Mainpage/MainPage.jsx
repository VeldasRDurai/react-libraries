import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Div = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
`;
const MainPage = () => {
    return (
        <Div>
            <div> Practicals </div>
            <div> <Link to="/react-icons"> React Icons </Link> </div>
            <div> <Link to="/react-toastify"> React Toastify </Link> </div>
            <div> <Link to="/react-modal"> React Modal </Link> </div>
            <div> <Link to="/react-tool-tip"> React Tool Tit </Link> </div>
            <div> <Link to="/react-count-up"> React Count Up </Link> </div>
            <div> <Link to="/react-idle-timer"> React idle timer </Link> </div>
            <div> <Link to="/react-color-picker"> React Color Picker </Link> </div>
            <div> <Link to="/"> React Credit Card </Link> </div>
            <div> <Link to="/react-date-picker"> React Date Picker </Link> </div>
            <div> <Link to="/react-video-player"> React Video Player </Link> </div>
        </Div>
    )
}

export default MainPage;