import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import { theme, Win, Pad, Content, Column, Main } from './styles/App.js';
import Header from './Header.jsx'
import Matrix from './Matrix.jsx';
import ControlPanel from './ControlPanel.jsx';
import SaveForm from './SaveForm.jsx';
import SavedDesigns from './SavedDesigns.jsx';
import SignIn from './signIn.jsx';
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
    this.handleSelectSaved = this.handleSelectSaved.bind(this);
    this.handleFade = this.handleFade.bind(this);
    this.state = {
      color: '#337475',
      selected: this.emptySelectedSet,
      fadeColorsSelected: [false, false, false, false],
      setting: {
        balanced: false,
        direction: 'N',
        fadeColors: ['#ffffff', '#ffffff', null, null],
        name: null,
        colors: this.generateColorData(this.n, '#ffffff')
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
    if (!color) { console.log(e.target.value); }
    this.setState({ color: color.hex })
  }

  handleClick(e) {
    this.setState(state => {
      let newColors = state.setting.colors.map((value, i) => {
        return state.selected[i] ? this.state.color : value;
      })
      let newFadeColors = state.setting.fadeColors.map((value, i) => {
        return state.fadeColorsSelected[i] ? this.state.color : value;
      })
      let setting = state.setting;
      setting.colors = newColors;
      setting.fadeColors = newFadeColors;
      return { setting, selected: this.generateColorData(this.n, false), fadeColorsSelected: [false, false, false, false] };
    })
  }


  handleSelect(e, i) {
    if (i >= this.n ** 2) {
      this.setState(state => {
        let selected = state.fadeColorsSelected;
        selected[i - this.n ** 2] = !selected[i - this.n ** 2]
        return { fadeColorsSelected: selected };
      })
    } else {
      this.setState(state => {
        let selected = state.selected;
        selected[i] = !selected[i];
        return { selected };
      })
    }
  }

  handleChange(e) {
    let name = e.target.name;
    let value = name === 'balanced' ? e.target.checked : e.target.value;
    this.setState(state => {
      let setting = this.state.setting;
      setting[name] = value;
      if (name === 'direction') {
        setting.fadeColors = setting.direction === 'X' ? [setting.fadeColors[0], setting.fadeColors[1], '#ffffff', '#ffffff'] : [setting.fadeColors[0], setting.fadeColors[1], null, null];
      }
      return ({ setting })
    })
  }

  handleSubmit(e) {
    e.preventDefault();
    let user = '/' + this.state.user.name;
    axios.post('/api' + user, this.state.setting)
      .then(() => {
        return (this.getDesigns())
      })
      .then(res => {
        this.setState({ savedDesigns: res.data })
      })
      .catch(err => console.log(err));
  }

  handleSelectSaved(e, design) {
    this.setState((state) => {
      let setting = state.setting;
      setting.name = design.name;
      setting.colors = design.colors;
      return { setting };
    })
  }

  handleFade(fadeFunction) {
    let newColors = fadeFunction(this.state.setting.colors, this.state.setting.balanced, this.state.setting.fadeColors);
    this.setState((state) => {
      let setting = state.setting;
      setting.colors = newColors;
      return { setting };
    })
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
          <Header />
          <Pad>
            <Content>
              <Column>
                <Main>

                  <ControlPanel
                    defaultColors={this.state.defaultColors}
                    color={this.state.color}
                    handleDrag={this.handleDrag}
                    handleClick={this.handleClick}
                    handleChange={this.handleChange}
                    handleSubmit={this.handleSubmit}
                    handleFade={this.handleFade}
                    handleSelect={this.handleSelect}
                    direction={this.state.setting.direction}
                    fadeColors={this.state.setting.fadeColors}
                    settingName={this.state.setting.name}
                    balanced={this.state.setting.balanced}
                    selected={this.state.fadeColorsSelected}
                    n={this.n}
                    theme={theme} />
                  <Matrix
                    thumbnail={false}
                    n={this.n}
                    handleSelect={this.handleSelect}
                    selected={this.state.selected}
                    handleClick={this.handleClick}
                    colors={this.state.setting.colors} />

                </Main>
              </Column>
              <Column>
                <SavedDesigns
                  n={this.n}
                  designs={this.state.savedDesigns}
                  selected={this.emptySelectedSet}
                  handleSelectSaved={this.handleSelectSaved} />
              </Column>
            </Content>
          </Pad>
        </Win>
      </ThemeProvider>
    );
  }
}

ReactDOM.render(<SignIn />, document.getElementById('app'))