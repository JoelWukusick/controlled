import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import { theme, Win, Header, Pad, Content, Column, Main } from './styles/App.js';
import Matrix from './Matrix.jsx';
import ColorPicker from './ColorPicker.jsx';



class App extends React.Component {
  constructor(props) {
    super(props);
    this.n = 12;
    this.handleDrag = this.handleDrag.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
    this.state = {
      color: '#128278',
      selected: this.generateColorData(this.n, false),
      setting: {
        name: null,
        colors: this.generateColorData(this.n, null)
      },
      user: {
        name: null,
        settings: null
      }
    }
  };

  generateColorData(n, data) {
    let out = [];
    for (var i = 0; i < n * n; i++) {
      out.push(data)
    }
    return out;
  }

  handleDrag(color, e) {
    this.setState({ color: color.hex })
  }

  handleSelect(e, i) {
    this.setState(state => {
      let selected = state.selected;
      selected[i] = !selected[i];
      return { selected };
    })
  }

  render() {
    return (
      <ThemeProvider theme={theme}>
        <Win>
          <Header>
            ControlLED
          </Header>
          <Pad>
            <Content>
              <Column>
                <Main>

                  <ColorPicker handleDrag={this.handleDrag} color={this.state.color} />
                  <div>
                    {/* <setHeight></setHight> */}
                    <Matrix n={this.n} handleSelect={this.handleSelect} selected={this.state.selected} />
                  </div>

                </Main>
              </Column>
              <Column>
              </Column>
            </Content>
          </Pad>
        </Win>
      </ThemeProvider>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'))