import React, { useState } from "react";
import styled from 'styled-components';
import Overlay from './overlay.jsx';

const Form = styled.form`
  padding: 20px;
  text-align: left;
`
const Input = styled.input`
  box-sizing: border-box;
  width: 100%;
  margin-top: 4px;
`

const Hidden = styled.input`
  display: none;
`

const ButtonWrapper = styled.div`
  text-align: center;
  padding: 5px;
`

function IP({ handleSubmit, show, toggle }) {
  const [ip, setIPAddress] = useState("");

  function validateForm() {
    var ipformat = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
    return (ip.match(ipformat))
  }

  return (
    <Overlay show={show}>
      <Form onSubmit={e => handleSubmit(e, { ip }, 'ip')}>
        <Hidden type="submit" />
        <Input
          id='ip'
          placeholder='local IP'
          autoFocus
          type='text'
          value={ip}
          onChange={e => setIPAddress(e.target.value)}
        />
        <ButtonWrapper>
          <button onClick={() => toggle('ip')}>cancel</button>
          <button disabled={!validateForm()} type="submit">submit</button>
        </ButtonWrapper>
      </Form>
    </Overlay>
  )
}

export default IP;