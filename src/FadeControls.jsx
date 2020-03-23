import React from 'react';
import FadeColor from './FadeColor.jsx';
import styled from 'styled-components';
import fade from './colorFunctions/fadeFunctions.js';

const FadeControlsContainer = styled.div`
  margin-top: 8%;
`

const FadePatterns = styled.form`
  display: grid;
  grid-gap: 15px;
  grid-template-columns: repeat(7, auto);

`

const FadeColors = styled.ul`
  padding-left: 0px;
  width: 60%;
  display: grid;
  grid-gap: 6%;
  grid-template-columns: repeat(4, 22%);
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
  border-width:  2px;
  border-color: ${props => props.selected ? props.theme.colorDark : props.theme.backgroundColor1};
`

const PatternImage = styled.img`
  max-width: 100%;
`

const PatternLabel = styled.label`

`

const Apply = styled.button`
  position: relative;
  width: 30%;
  margin-top: 2%;
  padding: '15px ';
  padding-right: '0px';
  text-align: center;
  font-family: ${props => props.theme.displayFont};
  font-size: 12pt;
  font-weight: 300;
  color: ${props => props.theme.colorDark};
`

function FadeControls({ handleFade, handleChange, handleSelect, fadeColors, direction, selected, n }) {
  let directions = ['N', 'E', 'NE', 'NW', 'O', 'X'];
  return (
    <FadeControlsContainer>
      <p>FADE OPTIONS</p>
      <FadePatterns onChange={handleChange} value={direction}>
        {directions.map((dir) => {
          let selected = (dir === direction) ? true : false;
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
      <p>FADE COLORS</p>
      <FadeColors>
        {fadeColors.map((color, i) => {
          return color ? <FadeColor
            selected={selected[i]}
            id={i + n * n}
            handleSelect={handleSelect}
            color={color}>
          </FadeColor> : null;
        })}
      </FadeColors>
      <input onChange={handleChange} type='checkbox' name='balanced' />
      <label>BALANCED</label><br></br>
      <Apply onClick={() => { handleFade(fade[direction]) }}>APPLY FADE</Apply>
    </FadeControlsContainer >
  )
}

export default FadeControls;