import * as React from 'react';
import {ThemeProvider as ScThemeProvider} from 'styled-components';
import {ThemeProvider as JssThemeProvider} from 'react-jss';
import {Player} from './Player';
import {theme} from './design-system/theme';

export const App = () => (
  <ScThemeProvider theme={theme}>
    <JssThemeProvider theme={theme}>
      <Player />
    </JssThemeProvider>
  </ScThemeProvider>
);
