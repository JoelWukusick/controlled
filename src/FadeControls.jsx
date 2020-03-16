import React from 'react';
import styled from 'styled-components';
import fade from './colorFunctions/fadeFunctions.js';

const FadeControlsContainer = styled.div`
  margin-top: 10%;
`

const Fade = styled.button`
`

function FadeControls({ handleFade, handleChange, setting }) {
  return (
    <FadeControlsContainer>
      <p>FADE OPTIONS</p>
      <form onChange={handleChange} value={setting.direction}>
        <input type='radio' id='N' name='direction' value='N' />
        <label >N</label>
        <input type='radio' id='E' name='direction' value='E' />
        <label >E</label>
        <input type='radio' id='NE' name='direction' value='NE' />
        <label >NE</label>
        <input type='radio' id='NW' name='direction' value='NW' />
        <label >NW</label>
        <input type='radio' id='O' name='direction' value='O' />
        <label >o</label>
        <input type='radio' id='solid' name='direction' value='solid' />
        <label >solid</label>
        <input type='radio' id='X' name='direction' value='X' />
        <label >X</label>
      </form>
      <input onChange={handleChange} type='checkbox' name='balanced' />
      <label>BALANCED</label><br></br>
      <Fade onClick={() => { handleFade(fade[setting.direction]) }}>FADE</Fade>
    </FadeControlsContainer>
  )
}

export default FadeControls;