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



function ControlPanel({ handleClick, handleDrag, handleChange, handleSubmit, handleFade, color, theme, setting }) {
  return (
    <Main>
      <ColorPicker
        handleClick={handleClick}
        onChange={handleDrag}
        color={color}
        theme={theme}
      />
      <FadeControls
        fadeColors={setting.fadeColors}
        setting={setting}
        handleFade={handleFade}
        balanced={setting.balanced}
        handleChange={handleChange}/>
      <SaveForm
        settingName={setting.name}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
    </Main>
  )
}

export default ControlPanel;