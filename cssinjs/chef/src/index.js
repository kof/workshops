import * as React from 'react';
import ReactDOM from 'react-dom';
import {ThemeProvider} from 'react-jss';
import {RecipePlayer} from './screens/RecipePlayer';
import {theme} from './theme';
import recipe from './recipe.json';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <RecipePlayer recipe={recipe} />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
