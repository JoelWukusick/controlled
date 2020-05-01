import React, { useState } from 'react';
import styled from 'styled-components'

const Container = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  background-color: rgba(0,0,0, 0.5);
  z-index:1;
`
const Popup = styled.div`
  position: absolute;
  left: 25%;
  right: 25%;
  top: 25%;
  bottom: 25%;
  margin: auto;
  border-radius: 20px;
  background: white;
`

const Form = styled.form`
  padding-top: 60px;
  text-align: center;
`

function SignUp({ handleSubmit, show, toggle }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {
    return username.length > 0 && password.length > 0;
  }

  return show ? (
    <Container>
      <Popup>
        <Form onSubmit={e => handleSubmit(e, { username, password }, 'signUp')} >
          <label>Username</label>
          <input
            id='username'
            autoFocus
            type='text'
            value={username}
            onChange={e => setUsername(e.target.value)}
          />
          <label>Password</label>
          <input
            id='password'
            value={password}
            onChange={e => setPassword(e.target.value)}
            type="password"
          />
          <button onClick={() => toggle('signUp')}>cancel</button>
          <button disabled={!validateForm()} type="submit">submit</button>
        </Form>
      </Popup>
    </Container >
  ) : null;
}

export default SignUp;