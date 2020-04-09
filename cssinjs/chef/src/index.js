import * as React from 'react';
import ReactDOM from 'react-dom';
import {ThemeProvider} from 'react-jss';
import {Player} from './screens/Player';
import {theme} from './theme';
import recipe from './recipe.json';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Player recipe={recipe} />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
