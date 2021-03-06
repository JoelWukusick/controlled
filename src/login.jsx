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

function Login({ handleSubmit, show, toggle }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {
    return username.length > 0 && password.length > 0;
  }

  return (
    <Overlay show={show}>
      <Form onSubmit={e => handleSubmit(e, { username, password }, 'login')}>
        <Hidden type="submit" />
        <Input
          id='username'
          placeholder='username'
          autoFocus
          type='text'
          value={username}
          onChange={e => setUsername(e.target.value)}
        />
        <Input
          id='password'
          placeholder='password'
          value={password}
          onChange={e => setPassword(e.target.value)}
          type="password"
        />
        <ButtonWrapper>
          <button onClick={() => toggle('login')}>cancel</button>
          <button disabled={!validateForm()} type="submit">submit</button>
        </ButtonWrapper>
      </Form>
    </Overlay>
  )
}

export default Login;