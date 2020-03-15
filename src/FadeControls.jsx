import React from 'react';
import styled from 'styled-components';
import horizontalFade from './colorFunctions/horizontalFade.js';

const FadeControlsContainer = styled.div`
  margin-top: 10%;
`

const Fade = styled.button`
`

function FadeControls({ handleFade, balanced, handleChange }) {
  console.log(balanced);
  return (
    <FadeControlsContainer>
      <p>FADE OPTIONS</p>
      <input onChange={handleChange} type="checkbox" name='balanced'/>
      <label>BALANCED</label>
      <Fade onClick={() => { handleFade(horizontalFade) }}>FADE</Fade>
    </FadeControlsContainer>
  )
}

export default FadeControls;