import React, { useState } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css';
   
const Div = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
`;
const ReactCreditCard = () => {
    const history = useHistory();
    const [number, setNumber] = useState('')
    const [name, setName] = useState('')
    const [expiry, setExpiry] = useState('')
    const [cvc, setCvc] = useState('')
    const [focus, setFocus] = useState('')

    return (
        <Div>
            <div onClick={ () => history.push('/') } > Back </div>
            <Cards
                number={number}
                name={name}
                expiry={expiry}
                cvc={cvc}
                focused={focus}
            />
            <form>
                <input
                    type='tel'
                    name='number'
                    placeholder='Card Number'
                    value={number}
                    onChange={e => setNumber(e.target.value)}
                    onFocus={e => setFocus(e.target.name)}
                />
                <input
                    type='text'
                    name='name'
                    placeholder='Name'
                    value={name}
                    onChange={e => setName(e.target.value)}
                    onFocus={e => setFocus(e.target.name)}
                />
                <input
                    type='text'
                    name='expiry'
                    placeholder='MM/YY Expiry'
                    value={expiry}
                    onChange={e => setExpiry(e.target.value)}
                    onFocus={e => setFocus(e.target.name)}
                />
                <input
                    type='tel'
                    name='cvc'
                    placeholder='CVC'
                    value={cvc}
                    onChange={e => setCvc(e.target.value)}
                    onFocus={e => setFocus(e.target.name)}
                />
            </form>
        </Div>
  );
}

export default ReactCreditCard;