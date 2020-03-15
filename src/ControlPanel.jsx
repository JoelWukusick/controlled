import React from 'react';
import styled from 'styled-components';
import ColorPicker from './ColorPicker.jsx'
import SaveForm from './SaveForm.jsx';
import horizontalFade from './colorFunctions/horizontalFade.js';

const Main = styled.div`
  display: inline-block;
  padding: 0px 15px;

  padding-left: 0px;
  background-color: ${props => props.theme.backgroundColor1};
`


const Fade = styled.button`
  margin-top: 10%;
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
      <Fade onClick={() => { handleFade(horizontalFade) }}>HORIZONTAL FADE</Fade>
      <SaveForm
        settingName={settingName}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
    </Main>
  )
}

export default ControlPanel;