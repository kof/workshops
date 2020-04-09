import * as React from 'react';
import {ThemeProvider} from 'react-jss';
import {Player} from './Player';
import {theme} from './design-system/theme';

export const App = () => (
  <ThemeProvider theme={theme}>
    <Player />
  </ThemeProvider>
);
