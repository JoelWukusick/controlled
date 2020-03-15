import React from 'react';
import styled from 'styled-components';
import horizontalFade from './colorFunctions/horizontalFade.js';

const FadeControlsContainer = styled.div`
  margin-top: 10%;
`

const Fade = styled.button`
`

function FadeControls({ handleFade, balanced }) {
  return (
    <FadeControlsContainer>
      <p>FADE OPTIONS</p>
      <input type="checkbox" id="male" name="gender" value="male" />
      <label htmlFor="male">BALANCED</label>
      <Fade onClick={() => { handleFade(horizontalFade, balanced) }}>FADE</Fade>
    </FadeControlsContainer>
  )
}

export default FadeControls;