import React from 'react';
import styled from 'styled-components';
import MyColorPicker from './CustomPicker.jsx'

const Main = styled.div`
  display: 'inline-block';
  padding: 15px;
  padding-left: 0px;
  background-color: ${props => props.theme.backgroundColor1};
`

const SaturationContainer = styled.div`
  position: relative;
  width: 100%;
  padding-top:65%;
`


function ColorPicker({ handleDrag, color }) {
  return (
    <Main>
      <MyColorPicker
        onChange={handleDrag}
        color={color}
      />
    </Main>
  )
}

export default ColorPicker;