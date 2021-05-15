import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Div = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
`;

toast.configure()
const ReactToastify = () => {
    const history = useHistory();
    const notify = () => {
        toast('Default!', { position: toast.POSITION.TOP_LEFT });
        toast.success('Success!', {
            position: toast.POSITION.TOP_CENTER,
            autoClose: 8000
        });
        toast.info('Info!', {
            position: toast.POSITION.TOP_RIGHT,
            autoClose: false
        });
        toast.warn('Warning !', {
            position: toast.POSITION.BOTTOM_LEFT
        });
        toast.error('Error!', { position: toast.POSITION.BOTTOM_CENTER });
        toast('Wow so easy !', { position: toast.POSITION.BOTTOM_RIGHT });
    }

    return (
        <Div>
            <div onClick={ () => history.push('/') } > Back </div>
            <div> React tostify </div>
            <button onClick={ notify }> Show Notifications </button>
        </Div>
    )
}

export default ReactToastify;