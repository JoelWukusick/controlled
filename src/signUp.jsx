import React, { useState } from 'react';
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

function SignUp({ handleSubmit, show, toggle }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [verify, setVerify] = useState('');

  function validateForm() {
    return username.length > 0 && password.length > 0 && password === verify;
  }

  return (
    <Overlay show={show}>
      <Form onSubmit={e => handleSubmit(e, { username, password }, 'signUp')} >
        <Hidden type="submit" />
        <Input
          placeholder='username'
          id='username'
          autoFocus
          type='text'
          value={username}
          onChange={e => setUsername(e.target.value)}
        />
        <Input
          placeholder='password'
          id='password'
          value={password}
          onChange={e => setPassword(e.target.value)}
          type="password"
        />
        <Input
          placeholder='verify password'
          value={verify}
          onChange={e => setVerify(e.target.value)}
          type="password"
        />
        <ButtonWrapper>
          <button onClick={() => toggle('signUp')}>cancel</button>
          <button disabled={!validateForm()} type="submit">submit</button>
        </ButtonWrapper>
      </Form>
    </Overlay>
  )
}

export default SignUp;