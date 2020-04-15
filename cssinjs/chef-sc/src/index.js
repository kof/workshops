import * as React from 'react';
import ReactDOM from 'react-dom';
import {ThemeProvider as JssThemeProvider} from 'react-jss';
import {ThemeProvider as ScThemeProvider} from 'styled-components';
import {RecipePlayer} from './screens/RecipePlayer';
import {theme} from './theme';
import pourover from './recipes/pourover.json';

ReactDOM.render(
  <React.StrictMode>
    <ScThemeProvider theme={theme}>
      <JssThemeProvider theme={theme}>
        <RecipePlayer recipe={pourover} />
      </JssThemeProvider>
    </ScThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
