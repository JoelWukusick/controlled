import React from 'react';
import styled from 'styled-components';

const Box = styled.div`
  height: 0px;
  padding-top: ${props => props.thumbnail ? '100%' : '90%'};
  border-style: ${props => props.selected[props.i] ? 'dashed' : 'solid'};
  border-color: ${props => props.selected[props.i] ? props.theme.colorDark : props.theme.backgroundColor2};
  box-sizing: border-box;
  border-width: ${props => props.thumbnail ? '0px' : '3px'};
  border-radius: 5%;
  background-color: ${ props => props.color};
  background-clip: padding-box;
  position: relative;
`

function Led({ selected, theme, i, color, handleSelect, thumbnail }) {

  return (
    <Box
      thumbnail={thumbnail}
      selected={selected}
      theme={theme}
      i={i}

      onClick={((e) => thumbnail ? null : handleSelect(e, i))}
      color={color} >
      <div></div>
    </Box >
  )

}

export default Led;