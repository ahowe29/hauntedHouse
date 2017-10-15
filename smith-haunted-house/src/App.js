import React, { Component } from 'react';
import './App.css';
import AnimationExample from './AnimationExample.js';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { blue600, red500 } from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: blue600,
    accent1Color: red500,
  }
});

class App extends Component {
  render() {
    let theme = (this.props.theme) ? getMuiTheme(darkBaseTheme): muiTheme;
    return (
      <MuiThemeProvider muiTheme={theme}>
      <div>
        <AnimationExample/>
      </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
