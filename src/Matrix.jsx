import React from 'react';
import styled from 'styled-components';
import Led from './Led.jsx';

const Main = styled.div`
  margin: 0% 10%;
  display: grid;
  grid-template-columns: repeat(12, auto);
  grid-template-rows: repeat(12, auto);
  grid-gap: 5px 5px;
  padding: 20px;
  background-color: ${props => props.theme.backgroundColor2};
  border-radius: 7px;
`

function Matrix({ n, theme, handleSelect, selected }) {

  let colors = [];
  for (var i = 0; i < n * n; i++) {
    colors.push(i);
  }

  return (
    <Main n={n} theme={theme}>
      {colors.map((color, i) => {
        return (
          <Led
            key={i.toString()}
            i={i}
            color={color}
            handleSelect={handleSelect}
            selected={selected} />
        )
      })}
    </Main>
  )

}

export default Matrix;