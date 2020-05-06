import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import { theme, Win, Pad, Content, Column, Main } from './styles/App.js';
import Header from './Header.jsx'
import Matrix from './Matrix.jsx';
import ControlPanel from './ControlPanel.jsx';
import SaveForm from './SaveForm.jsx';
import SavedDesigns from './SavedDesigns.jsx';
import Login from './login.jsx';
import SignUp from './signUp.jsx';
import IP from './ip.jsx';
import Designs from './designs.jsx';
const axios = require('axios').default;



class App extends React.Component {
  constructor(props) {
    super(props);
    this.n = 12;
    this.handleDrag = this.handleDrag.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSubmitDesign = this.handleSubmitDesign.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.logout = this.logout.bind(this);
    this.keyFunction = this.keyFunction.bind(this);
    this.getDesigns = this.getDesigns.bind(this);
    this.emptySelectedSet = this.generateColorData(this.n, false);
    this.handleSelectSaved = this.handleSelectSaved.bind(this);
    this.handleFade = this.handleFade.bind(this);
    this.toggle = this.toggle.bind(this);
    this.state = {
      localIP: 'add local IP',
      signUp: false,
      login: false,
      designs: false,
      ip: false,
      color: '#337475',
      selected: this.emptySelectedSet,
      fadeColorsSelected: [false, false, false, false],
      setting: {
        balanced: false,
        direction: 'N',
        fadeColors: ['#ffffff', '#ffffff', null, null],
        name: null,
        colors: this.generateColorData(this.n, '#005565')
      },
      username: 'demo',
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
      let newColors = state.setting.colors.map((value, i) => {
        return state.selected[i] ? this.state.color : value;
      })
      let newFadeColors = state.setting.fadeColors.map((value, i) => {
        return state.fadeColorsSelected[i] ? this.state.color : value;
      })
      let setting = state.setting;
      setting.colors = newColors;
      setting.fadeColors = newFadeColors;
      if (state.selected.includes(true)) {
        this.postSetting(setting.colors);
      }
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

  handleSubmitDesign(e) {
    e.preventDefault();
    let user = '/' + this.state.username;
    axios.post(`/api/${this.state.username}/designs`, this.state.setting)
      .then(() => {
        return (this.getDesigns(this.state.username))
      })
      .catch(err => console.log(err));
  }

  handleSelectSaved(e, design) {
    this.setState((state) => {
      if (state.designs) {
        state.designs = false;
      }
      let setting = state.setting;
      setting.name = design.name;
      setting.colors = design.colors;
      this.postSetting(setting.colors);
      return { setting, designs: state.designs };
    })
  }

  handleFade(fadeFunction) {
    let newColors = fadeFunction(this.state.setting.colors, this.state.setting.balanced, this.state.setting.fadeColors);
    this.setState((state) => {
      let setting = state.setting;
      setting.colors = newColors;
      this.postSetting(setting.colors);
      return { setting };
    })
  }

  getDesigns(username) {
    return (axios(`/api/${username}/designs`))
      .then((res) => {
        this.setState({ savedDesigns: res.data })
      })
  }

  postSetting(setting) {
    if(this.state.localIP != 'add local IP' ){
      axios.post(this.state.localIP, setting);
    }
  }

  toggle(form) {
    this.setState({
      [form]: !this.state[form]
    })
  }

  handleSubmit(e, data, form) {
    e.preventDefault();
    axios.post(`/api/${form}`, data)
      .then(res => {
        console.log(form)
        this.toggle(form);
        if (res.data.username) {
          this.setState({ username: res.data.username, localIP: res.data.localIP || 'add local IP' });
          this.getDesigns(res.data.username);
        }
      })
      .catch(err => {
        window.alert(err.response.data);
      })
  }

  logout() {
    axios.post('/api/logout')
      .then(() => {
        this.setState({ username: 'demo' });
        this.getDesigns('demo');
      })
      .catch(err => {
        this.setState({ username: 'demo' });
        window.alert(err)
      })
  }

  keyFunction(event) {
    if (event.keyCode === 27) {
      if (this.state.login) {
        this.setState(() => { return { login: false } })
      } else if (this.state.signUp) {
        this.setState(() => { return { signUp: false } })
      } else if (this.state.designs) {
        this.setState(() => { return { designs: false } })
      } else if (this.state.ip) {
        this.setState(() => { return { ip: false } })
      }
    }
  }

  componentDidMount() {
    document.addEventListener("keydown", this.keyFunction, false);
    axios.get('/api/user')
      .then(user => {
        if (user.data.username) {
          this.setState({ username: user.data.username, localIP: user.data.localIP || 'add local IP' })
          this.getDesigns(user.data.username);
        } else {
          this.getDesigns('demo')
        }
      })
      .catch(() => {
        this.setState({ username: 'demo' });
        this.getDesigns('demo')
      });
  }

  render() {
    return (
      <ThemeProvider theme={theme}>
        <Win>
          <Header user={this.state.username} toggle={this.toggle} logout={this.logout} localIP={this.state.localIP} />
          <SignUp show={this.state.signUp} toggle={this.toggle} handleSubmit={this.handleSubmit} />
          <Login show={this.state.login} toggle={this.toggle} handleSubmit={this.handleSubmit} />
          <IP show={this.state.ip} toggle={this.toggle} handleSubmit={this.handleSubmit} />
          <Designs show={this.state.designs} toggle={this.toggle} designs={this.state.savedDesigns} handleSelectSaved={this.handleSelectSaved} />
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
                    handleSubmit={this.handleSubmitDesign}
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

ReactDOM.render(<App />, document.getElementById('app'))