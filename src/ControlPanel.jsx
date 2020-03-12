import React from 'react';
import styled from 'styled-components';
import ColorPicker from './ColorPicker.jsx'
import SaveForm from './SaveForm.jsx';
import horizontalFade from './colorFunctions/horizontalFade.js';

const Main = styled.div`
  display: 'inline-block';
  padding: 15px;
  padding-left: 0px;
  background-color: ${props => props.theme.backgroundColor1};
`
const Fade = styled.button`
`


function ControlPanel({ handleClick, handleDrag, handleChange, handleSubmit, handleFade, color, settingName, theme }) {
  return (
    <Main>
      <ColorPicker
        handleClick={handleClick}
        onChange={handleDrag}
        color={color}
        theme={theme}
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