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

function Login({handleSubmit, show, toggle}) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {
    return username.length > 0 && password.length > 0;
  }

  return show ? (
    <Container>
      <Popup>
        <form onSubmit={e => handleSubmit(e, {username, password}, 'login')}>
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
          <button onClick={() => toggle('login')}>cancel</button>
          <button disabled={!validateForm()} type="submit">submit</button>
        </form>
      </Popup>
    </Container>
  ) : null;
}

export default Login;

// function SignIn() {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");


//   const SignInContainer = styled.div`
//   padding: 100px;
//   text-align: center;
// `

//   return (
//     <SignInContainer className="Login">
//       <form onSubmit={handleSubmit}>
//         <label>Username</label>
//         <input
//           id='username'
//           autoFocus
//           type='text'
//           value={username}
//           onChange={e => setUsername(e.target.value)}
//         />
//         <label>Password</label>
//         <input
//           id='password'
//           value={password}
//           onChange={e => setPassword(e.target.value)}
//           type="password"
//         />
//         <button disabled={!validateForm()} type="submit">
//           Login
//         </button>
//       </form>
//     </SignInContainer>
//   );
// }

// export default SignIn;
