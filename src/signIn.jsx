import React, {useState} from "react";
import styled from 'styled-components';


function SignIn() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {
    return username.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  const SignInContainer = styled.div`
  padding: 100px;
  text-align: center;
`

  return (
    <SignInContainer className="Login">
      <form onSubmit={handleSubmit}>
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
        <button  disabled={!validateForm()} type="submit">
          Login
        </button>
      </form>
    </SignInContainer>
  );
}

export default SignIn;
