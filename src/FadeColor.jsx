import React from 'react';
import styled from 'styled-components';

const Box = styled.li`
  list-style: none;
  border-style: solid;
  border-width: 3px;
  border-style: ${props => props.selected ? 'dashed' : 'solid'};
  border-color: ${props => props.selected ? props.theme.colorDark : props.theme.backgroundColor2};
  border-radius: 5%;
  box-sizing: border-box;
  background-clip: padding-box;
  width: 100%;
  padding-top: 95%;
  background-color: ${props => props.color};
`

function FadeColor({ selected, id, color, handleSelect }) {

  return (
    <Box
      selected={selected}
      id={id}
      color={color}
      onClick={(e) => handleSelect(e, id)}>
    </ Box >
  )
}

export default FadeColor;