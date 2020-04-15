import * as React from 'react';
import ReactDOM from 'react-dom';
import {ThemeProvider as ScThemeProvider} from 'styled-components';
import {RecipePlayer} from './screens/RecipePlayer';
import {theme} from './theme';
import pourover from './recipes/pourover.json';

ReactDOM.render(
  <React.StrictMode>
    <ScThemeProvider theme={theme}>
      <RecipePlayer recipe={pourover} />
    </ScThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
