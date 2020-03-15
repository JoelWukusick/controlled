import React from 'react';
import styled from 'styled-components';
import ColorPicker from './ColorPicker.jsx';
import FadeControls from './FadeControls.jsx';
import SaveForm from './SaveForm.jsx';

const Main = styled.div`
  display: inline-block;
  padding: 0px 15px;

  padding-left: 0px;
  background-color: ${props => props.theme.backgroundColor1};
`



function ControlPanel({ handleClick, handleDrag, handleChange, handleSubmit, handleFade, color, settingName, theme, balanced }) {
  return (
    <Main>
      <ColorPicker
        handleClick={handleClick}
        onChange={handleDrag}
        color={color}
        theme={theme}
      />
      <FadeControls
        handleFade={handleFade}
        balanced={balanced}
        handleChange={handleChange}/>
      <SaveForm
        settingName={settingName}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
    </Main>
  )
}

export default ControlPanel;