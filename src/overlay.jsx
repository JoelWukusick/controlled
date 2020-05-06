import React, { useState } from "react";
import styled from 'styled-components';

const Container = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  background-color: rgba(0,0,0, 0.6);
  z-index: 1;
`
const Content = styled.div`
  position: absolute;
  left: 40%;
  right: 40%;
  top: 25%;
  max-height: calc(50vh);
  margin: auto;
  border-radius: 5px;
  background: white;
`

function Overlay({ show, children }) {
  return show ? (
    <Container>
      <Content>
        {children}
      </Content>
    </Container>
  ) : null;
}

export default Overlay;