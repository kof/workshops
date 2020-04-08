import * as React from 'react';
import {ThemeProvider} from 'styled-components';
import {Player} from './Player';
import {theme} from './design-system/theme';

export const App = () => (
  <ThemeProvider theme={theme}>
    <Player />
  </ThemeProvider>
);
