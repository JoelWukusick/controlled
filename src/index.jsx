import React from 'react';
import ReactDOM from 'react-dom';
import styled, { ThemeProvider } from 'styled-components';
import Matrix from './Matrix.jsx';
import ColorPicker from './ColorPicker.jsx';

const theme = {
  color1: 'tan',
  color2: 'black',
  color3: 'teal',
  backgroundColor1: 'white',
  backgroundColor2: 'lightgray'
}

const Header = styled.div`
  background-color: ${(props) => props.theme.color2};
  color: white;
  padding: 15px 30px;
  font-size: 24pt;
  font-family: Arial;
`
const Win = styled.div`
  background-color: ${props => props.theme.backgroundColor1};
`

const Main = styled.div`
  display: grid;
  grid-template-columns: 25% 75%;
  grid-gap: 2px;
  background-color: tan;
`
const Column = styled.div`
  background-color: ${props => props.theme.backgroundColor1};
  padding: 15px;
`

const Pad = styled.div`
 background-color: ${props => props.theme.backgroundColor1};
 padding: 15px;
`

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  render() {
    return (
      <ThemeProvider theme={theme}>
        <Win>
          <Header>
            ControlLED
          </Header>
          <Pad>
            <Main>
              <Column>
                <ColorPicker/>
              </Column>
              <Column>
                <Matrix/>
              </Column>
            </Main>
          </Pad>
        </Win>
      </ThemeProvider>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'))