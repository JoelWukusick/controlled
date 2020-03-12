import React from 'react';
import styled from 'styled-components';
import Led from './Led.jsx';

const Main = styled.div`
  margin: 0% 10%;
  display: grid;
  grid-template-columns: repeat(${props => props.n}, auto);
  grid-template-rows: repeat(${props => props.n}, auto);
  grid-gap: ${props => { return (props.thumbnail ? '0px' : '1px') }};
  padding: 0px;
  background-color: ${props => props.theme.backgroundColor1};
  border-radius: 7px;
  box-sizing: border-box;
`
const Container = styled.div`
  height: 0px;
  padding-bottom: 80%;

  position: relative;
`

function Matrix({ n, theme, handleSelect, selected, colors, thumbnail }) {


  return (
    <Container>
      <Main n={n} theme={theme} thumbnail={thumbnail}>
        {colors.map((color, i) => {
          return (
            <Led
              thumbnail={thumbnail}
              key={i.toString()}
              i={i}
              color={color}
              // handleSelect={thumbnail ? null : handleSelect}
              handleSelect={thumbnail ? null : handleSelect}
              selected={selected} />
          )
        })}
      </Main>
    </Container>
  )

}

export default Matrix;