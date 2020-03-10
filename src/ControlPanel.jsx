import React from 'react';
import styled from 'styled-components';
import MyColorPicker from './MyColorPicker.jsx'
import SaveForm from './SaveForm.jsx';
import horizontalFade from './fadeFunctions/horizontalFade.js';

const Main = styled.div`
  display: 'inline-block';
  padding: 15px;
  padding-left: 0px;
  background-color: ${props => props.theme.backgroundColor1};
`
const Fade = styled.button`

`


function ControlPanel({ handleClick, handleDrag, handleChange, handleSubmit, handleFade, color, settingName }) {
  return (
    <Main>
      <MyColorPicker
        handleClick={handleClick}
        onChange={handleDrag}
        color={color}
      />
      <SaveForm
        settingName={settingName}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
      <Fade onClick={() => { handleFade(horizontalFade) }}>HORIZONTAL FADE</Fade>
    </Main>
  )
}

export default ControlPanel;