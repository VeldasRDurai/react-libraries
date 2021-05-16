import React, { useState } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

import { ChromePicker } from 'react-color';
   
const Div = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    background-color:${ ({color}) => color };
`;
const ReactColorPicker = () => {
    const history = useHistory();
  const [color, setColor] = useState('#fff')
  const [showColorPicker, setShowColorPicker] = useState(false)

  return (
    <Div color={ color } >
        <div onClick={ () => history.push('/') }> Back </div>
        <button onClick={() => setShowColorPicker(showColorPicker => !showColorPicker)} >
            {showColorPicker ? 'Close color picker' : 'Pick a color'}
        </button>
        {showColorPicker && (
            <ChromePicker
            color={color}
            onChange={updatedColor => setColor(updatedColor.hex)}
            />
        )}
        <h2>You picked {color}</h2>
    </Div>
  )
}

export default ReactColorPicker;