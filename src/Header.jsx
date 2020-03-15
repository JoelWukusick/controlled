import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.div`
  background-color: ${props => props.theme.colorDark};
  flex-wrap: wrap;
  display: flex;
  align-items: center;
`

const TitleContainer = styled.div`
  font-weight: 200;
  -webkit-font-smoothing: antialiased;
  color: ${props => props.theme.backgroundColor1};
  padding: .4% 2%;
  font-size: 1.3vw;
  font-family: ${props => props.theme.displayFont};
`

const NavContainer = styled.ul`
  list-style: none;
  display: flex;
  margin: auto 3% auto auto;
`

const ListItem = styled.li`
  padding: 0px 25px;
  font-family: ${props => props.theme.displayFont};
  font-weight: 400;
  -webkit-font-smoothing: antialiased;
  color: ${props => props.theme.backgroundColor1};
  font-size: .8vw;
`

function Header() {
  return (
    <HeaderContainer>
      <TitleContainer>
        ControlLED
      </TitleContainer>
      <NavContainer>
        <ListItem>instructions</ListItem>
        <ListItem>sign up</ListItem>
        <ListItem>sign in</ListItem>
      </NavContainer>
    </HeaderContainer>
  )
}

export default Header;