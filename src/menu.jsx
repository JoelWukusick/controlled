import React from 'react';
import styled from 'styled-components';

const NavContainer = styled.ul`
  list-style: none;
  display: flex;
  margin: auto 3% auto auto;
`

const ListItem = styled.li`
  cursor: pointer;
  padding: 0px 25px;
  font-family: ${props => props.theme.displayFont};
  font-weight: 200;
  color: ${props => props.theme.backgroundColor1};
  font-size: 20px;
`

function Menu({ toggle, user, logout }) {
  if (user === 'demo') {
    return (
      <NavContainer>
        <ListItem onClick={() => toggle('signUp')}> Sign up</ListItem>
        <ListItem onClick={() => toggle('login')}>Log in</ListItem>
      </NavContainer>

    )
  } else {
    return (
      <NavContainer>
        <ListItem onClick={logout}> Log out</ListItem>
      </NavContainer>
    )
  }
}

export default Menu;