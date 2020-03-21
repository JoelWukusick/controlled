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



function ControlPanel({ handleClick, handleDrag, handleSelect, handleChange, handleSubmit, handleFade, color, theme, fadeColors, fadeColor, direction, balanced, name, selected, n }) {
  return (
    <Main>
      <ColorPicker
        handleClick={handleClick}
        onChange={handleDrag}
        color={color}
        theme={theme}
      />
      <FadeControls
        fadeColors={fadeColors}
        fadeColor={fadeColor}
        n={n}
        handleFade={handleFade}
        balanced={balanced}
        handleSelect={handleSelect}
        handleChange={handleChange}
        direction={direction}
        selected={selected} />

      <SaveForm
        settingName={name}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
    </Main>
  )
}

export default ControlPanel;