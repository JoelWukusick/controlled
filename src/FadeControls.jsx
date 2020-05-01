import React from 'react';
import FadeColor from './FadeColor.jsx';
import styled from 'styled-components';
import fade from './colorFunctions/fadeFunctions.js';

const FadeControlsContainer = styled.div`
  padding: 0px 0px 4%;
  border-width: 2px 0px;
  border-style: solid;
  border-color: ${props => props.theme.colorMedium};
`

const FadePatterns = styled.form`
  display: grid;
  grid-gap: 15px;
  grid-template-columns: repeat(7, auto);

`

const FadeColors = styled.ul`
  margin-top: 0px;
  padding-left: 0px;
  width: 60%;
  display: grid;
  grid-gap: 6%;
  grid-template-columns: repeat(4, 20%);
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
  cursor: pointer;
  max-width: 100%;
`

const OptionsLabel = styled.p`
  font-family: ${props => props.theme.displayFont};
  font-weight: 300;
  font-size: 12pt;
  display: block;
  margin-bottom: 2%;
`

const Apply = styled.button`
  cursor: pointer;
  position: relative;
  width: 35%;
  margin-top: 2%;
  padding: '15px ';
  padding-right: '0px';
  text-align: center;
  font-family: ${props => props.theme.displayFont};
  font-size: 12pt;
  font-weight: 300;
  color: ${props => props.theme.colorDark};
`
const Balanced = styled.label`
  font-family: ${props => props.theme.displayFont};
  font-weight: 300;
  font-size: 12pt;
`

function FadeControls({ handleFade, handleChange, handleSelect, fadeColors, direction, selected, n }) {
  let directions = ['N', 'E', 'NE', 'NW', 'O', 'X'];
  return (
    <FadeControlsContainer>
      <OptionsLabel>Fade Options</OptionsLabel>
      <FadePatterns onChange={handleChange} value={direction}>
        {directions.map((dir) => {
          let selected = (dir === direction) ? true : false;
          return (
            <FadePatternContainer selected={selected}>
              <FadePattern type='radio' id={dir} name='direction' value={dir} />
              <label htmlFor={dir}>
                <PatternImage src={`https://ledcontroller.s3.us-east-2.amazonaws.com/fadeThumbs/${dir}.png`}></PatternImage>
              </label>
            </FadePatternContainer>
          )
        })}
      </FadePatterns>
      <OptionsLabel>Fade Colors</OptionsLabel>
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
      <Balanced>Balanced</Balanced><br></br>
      <Apply onClick={() => { handleFade(fade[direction]) }}>Apply Fade</Apply>
    </FadeControlsContainer >
  )
}

export default FadeControls;