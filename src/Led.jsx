import React from 'react';
import styled from 'styled-components';

const Box = styled.div`
  height: 0;
  padding-top: ${props => props.thumbnail ? '100%' : '95%'};
  border-style: ${props => props.selected[props.i] ? 'dashed' : 'solid'};
  border-color: ${props => props.selected[props.i] ? props.theme.colorDark : props.theme.backgroundColor2};
  box-sizing: border-box;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
  border-width: ${props => props.thumbnail ? '0px' : '2px'};
  border-radius: 5%;
  background-color: ${ props => props.color ? props.color : 'white'};
  background-clip: padding-box;
  position: relative;
`

function Led({ selected, theme, i, color, handleSelect, thumbnail }) {


  return (
    <Box
      thumbnail={thumbnail}
      selected={selected}
      theme={theme} i={i}
      onClick={((e) => handleSelect(e, i))}
      color={color} >
      <div></div>
    </Box >
  )

}

export default Led;