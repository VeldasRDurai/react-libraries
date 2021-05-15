import React, { useState } from 'react';
import Modal from 'react-modal';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

const Div = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
`;
Modal.setAppElement('#root')
const ReactModal = () => {
    const history = useHistory();
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const style = {
        overlay: {
            backgroundColor: '#0003'
        },
        content: {
            height: 'auto',
            width: 'auto',
            display:'flex',
            flexDirection:'column',
            justifyContent:'center',
            alignItems:'center',
            color: 'green'
        }
    }
    return (
        <Div>
            <div onClick={ () => history.push('/') }> Back </div>
            <div> React Modal </div>
            <button onClick={() => setModalIsOpen(true)}>Open modal</button>
            <Modal isOpen={modalIsOpen} style={ style } 
                onRequestClose={() => setModalIsOpen(false)} 
                shouldCloseOnOverlayClick={true} >
                
                <h2>Modal title</h2>
                <div>Modal Body</div>
                <div>
                    <button onClick={() => setModalIsOpen(false)}>Close</button>
                </div>

            </Modal>
        </Div>
    );
}

export default ReactModal;