import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import { theme, Win, Header, Pad, Content, Column, Main } from './styles/App.js';
import Matrix from './Matrix.jsx';
import ColorPicker from './ColorPicker.jsx';
import SaveForm from './SaveForm.jsx';
import SavedDesigns from './SavedDesigns.jsx';
const axios = require('axios').default;



class App extends React.Component {
  constructor(props) {
    super(props);
    this.n = 12;
    this.handleDrag = this.handleDrag.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.getDesigns = this.getDesigns.bind(this);
    this.emptySelectedSet = this.generateColorData(this.n, false);
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
      },
      savedDesigns: []
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

  handleClick(e) {
    this.setState(state => {
      let newColors = this.state.setting.colors.map((value, i) => {
        return this.state.selected[i] ? this.state.color : value;
      })
      return { setting: { colors: newColors }, selected: this.generateColorData(this.n, false) };
    })
  }


  handleSelect(e, i) {
    this.setState(state => {
      let selected = state.selected;
      selected[i] = !selected[i];
      return { selected }; g
    })
  }

  handleChange(e) {
    let name = e.target.value;
    this.setState(state => {
      return ({ setting: { name, colors: state.setting.colors } })
    })
  }

  handleSubmit(e) {
    e.preventDefault();
    let user = '/' + this.state.user.name;
    axios.post('/api' + user, this.state.setting)
      .then(res => console.log(res))
      .catch(err => console.log(err));
  }

  getDesigns() {
    let user = '/' + this.state.user.name;
    return (axios('/api' + user))

  }

  componentDidMount() {
    this.getDesigns()
      .then(res => this.setState({ savedDesigns: res.data }))
      .catch(err => console.log(err));
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

                  <ColorPicker
                    handleDrag={this.handleDrag}
                    handleClick={this.handleClick}
                    color={this.state.color}
                    handleChange={this.handleChange}
                    handleSubmit={this.handleSubmit}
                    settingName={this.state.setting.name} />
                  <div>
                    {/* <setHeight></setHight> */}
                    <Matrix
                      thumbnail={false}
                      n={this.n}
                      handleSelect={this.handleSelect}
                      selected={this.state.selected}
                      handleClick={this.handleClick}
                      colors={this.state.setting.colors} />
                  </div>

                </Main>
              </Column>
              <Column>
                <SavedDesigns
                  n={this.n}
                  designs={this.state.savedDesigns}
                  selected={this.emptySelectedSet} />
              </Column>
            </Content>
          </Pad>
        </Win>
      </ThemeProvider>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'))