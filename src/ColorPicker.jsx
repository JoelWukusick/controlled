import React from 'react';
import styled from 'styled-components';
import MyColorPicker from './CustomPicker.jsx'
import SaveForm from './SaveForm.jsx';

const Main = styled.div`
  display: 'inline-block';
  padding: 15px;
  padding-left: 0px;
  background-color: ${props => props.theme.backgroundColor1};
`



function ColorPicker({ handleClick, handleDrag, handleChange, handleSubmit, color }) {
  return (
    <Main>
      <MyColorPicker
        handleClick={handleClick}
        onChange={handleDrag}
        color={color}
      />
      <SaveForm
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
    </Main>
  )
}

export default ColorPicker;