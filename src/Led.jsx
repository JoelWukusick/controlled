import React from 'react';
import styled from 'styled-components';

const Box = styled.div`
  height: 0;
  padding-top: 100%;
  border-style: ${props => props.selected[props.i] ? 'dashed' : 'solid'};
  border-color: ${props => props.selected[props.i] ? props.theme.colorDark : props.theme.backgroundColor2};
  border-width: 2px;
  border-radius: 6px;
  background-color: ${ props => props.color ? props.color : props.theme.backgroundColor1};
  background-clip: padding-box;
`

function Led({ selected, theme, i, color, handleSelect }) {


  return (
    <Box
      selected={selected}
      theme={theme} i={i}
      onClick={((e) => handleSelect(e, i))}
      color={color} >
    <div></div>
    </Box >
  )

}

export default Led;