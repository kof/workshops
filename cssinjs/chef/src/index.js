import * as React from 'react';
import ReactDOM from 'react-dom';
import {ThemeProvider} from 'react-jss';
import {RecipePlayer} from './screens/RecipePlayer';
import {theme} from './theme';
import pourover from './recipes/pourover.json';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <RecipePlayer recipe={pourover} />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
