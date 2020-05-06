import React from 'react';
import styled from 'styled-components';
import Menu from './menu.jsx';


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



function Header({ toggle, user, logout, localIP }) {
  return (
    <div>
      <HeaderContainer>
        <TitleContainer>
          ControlLED
        </TitleContainer>
        <Menu toggle={toggle} user={user} logout={logout} localIP={localIP}/>
      </HeaderContainer>
    </div>
  )
}

export default Header;