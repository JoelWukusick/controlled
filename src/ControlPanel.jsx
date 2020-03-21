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



function ControlPanel({ handleClick, handleDrag, handleSelect, handleChange, handleSubmit, handleFade, color, theme, setting, n }) {
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
        n={n}
        handleFade={handleFade}
        balanced={setting.balanced}
        handleSelect={handleSelect}
        handleChange={handleChange} />

      <SaveForm
        settingName={setting.name}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
    </Main>
  )
}

export default ControlPanel;