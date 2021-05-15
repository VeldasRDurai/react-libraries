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
        </Div>
    )
}

export default MainPage;