import React, { useState } from "react";
import styled from 'styled-components';
import Overlay from './overlay.jsx';

const Hidden = styled.input`
display: none;
`

const ButtonWrapper = styled.div`
text-align: center;
padding: 5px;
`

const DesignName = styled.div`
  cursor: pointer;
  padding: 10px;
  font-family: ${props => props.theme.displayFont};
  font-weight: 200;
  text-transform: uppercase;
  font-size: 12pt;
`

const DesignList = styled.div`
  height: 40vh;
  overflow: scroll;
`

function Designs({ show, toggle, designs, handleSelectSaved }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Overlay show={show}>
      <DesignList>
        {designs.map(design => {
          return (
            <DesignName onClick={(e) => { handleSelectSaved(e, design) }}>{design.name}</DesignName>
          )
        })}
      </DesignList>
      <ButtonWrapper>
        <button onClick={() => toggle('designs')}>exit</button>
      </ButtonWrapper>
    </Overlay>
  )
}

export default Designs;