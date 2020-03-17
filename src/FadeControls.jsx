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
  display: inline-block;
  padding: 3px 3px 0px 3px;
  border-style: solid;
  border-width:  ${props => props.selected ? '2px' : '1px'};
  border-color: ${props => props.selected ? props.theme.colorDark : props.theme.backgroundColor2};
`

const PatternImage = styled.img`
  max-width: 100%;
`

const PatternLabel = styled.label`

`

function FadeControls({ handleFade, handleChange, setting }) {
  let directions = ['N', 'E', 'NE', 'NW', 'O', 'solid', 'X'];
  return (
    <FadeControlsContainer>
      <p>FADE OPTIONS</p>
      <FadePatterns onChange={handleChange} value={setting.direction}>
        {directions.map((dir) => {
          let selected = (dir === setting.fade) ? true : false;
          return (
            <FadePatternContainer selected={selected}>
              <FadePattern type='radio' id={dir} name='direction' value={dir} />
              <PatternLabel htmlFor={dir}>
                <PatternImage src={`https://ledcontroller.s3.us-east-2.amazonaws.com/fadeThumbs/${dir}.png`}></PatternImage>
              </PatternLabel>
            </FadePatternContainer>
          )
        })}
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