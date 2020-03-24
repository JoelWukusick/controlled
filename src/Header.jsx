import React from 'react';
import styled from 'styled-components';
import SignUp from './signUp.jsx';


const HeaderContainer = styled.div`
  background-color: ${props => props.theme.colorDark};
  flex-wrap: wrap;
  display: flex;
  align-items: center;
`

const TitleContainer = styled.div`
  color: ${props => props.theme.backgroundColor1};
  padding: .4% 2%;
  font-size: 32px;
  font-weight: 100;
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
  font-weight: 200;
  color: ${props => props.theme.backgroundColor1};
  font-size: 20pt;
`


function Header() {
  return (
    <div>
      <HeaderContainer>
        <TitleContainer>
          ControlLED
      </TitleContainer>
        <NavContainer>
          {/* <ListItem>instructions</ListItem>
          <SignUp />
          <ListItem>sign in</ListItem> */}
        </NavContainer>
      </HeaderContainer>

    </div>
  )
}

export default Header;