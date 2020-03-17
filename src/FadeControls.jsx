import React from 'react';
import styled from 'styled-components';
import fade from './colorFunctions/fadeFunctions.js';

const FadeControlsContainer = styled.div`
  margin-top: 10%;
`

const Fade = styled.button`
`

const FadePatterns = styled.form`
  display: grid;
  grid-gap: 15px;
  grid-template-columns: repeat(7, auto);

`

const FadeColors = styled.ul`
  padding-left: 0px;
  width: 80%;
  display: grid;
  grid-gap: 15px;
  grid-template-columns: repeat(6, auto);
`

const FadeColor = styled.li`
  list-style: none;
  border-style: solid;
  border-width: 1px;
  border-color: ${props => props.theme.backgroundColor2};
  width: 100%;
  padding-top: 100%;
  background-color: ${props => props.color};
`

const FadePattern = styled.input`
  opacity: 0;
  position: fixed;
  width: 0;
`

const FadePatternContainer = styled.div`
  /* display: inline-block; */
  border-style: solid;
  border-width: 1px;
  border-color: ${props => props.theme.backgroundColor2};
  width: 100%;
`

const PatternImage = styled.img`
  max-width: 100%;
`

function FadeControls({ handleFade, handleChange, setting }) {
  let directions = ['N', 'E', 'NE', 'NW', 'O', 'solid', 'X'];
  return (
    <FadeControlsContainer>
      <p>FADE OPTIONS</p>
      <FadePatterns onChange={handleChange} value={setting.direction}>
        {directions.map((dir) => {
          return (
            <FadePatternContainer>
              <FadePattern type='radio' id={dir} name='direction' value={dir} />
              <label for={dir}>
                <PatternImage src={`https://ledcontroller.s3.us-east-2.amazonaws.com/fadeThumbs/${dir}.png`}></PatternImage>
              </label>
            </FadePatternContainer>
          )
        })}

        {/*
        // <input type='radio' id='E' name='direction' value='E' />
        // <label >E</label>
        // <input type='radio' id='NE' name='direction' value='NE' />
        // <label >NE</label>
        // <input type='radio' id='NW' name='direction' value='NW' />
        // <label >NW</label>
        // <input type='radio' id='O' name='direction' value='O' />
        // <label >o</label>
        // <input type='radio' id='solid' name='direction' value='solid' />
        // <label >solid</label>
        // <input type='radio' id='X' name='direction' value='X' />
        // <label >X</label> */}
      </FadePatterns>
      <FadeColors>
        {setting.fadeColors.map((color) => {
          return <FadeColor color={color}></FadeColor>
        })}
      </FadeColors>
      <input onChange={handleChange} type='checkbox' name='balanced' />
      <label>BALANCED</label><br></br>
      <Fade onClick={() => { handleFade(fade[setting.direction]) }}>FADE</Fade>
    </FadeControlsContainer>
  )
}

export default FadeControls;