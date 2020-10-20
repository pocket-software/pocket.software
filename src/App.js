import {
  ColorModeProvider,
  CSSReset,
  theme,
  ThemeProvider,
} from '@chakra-ui/core';
import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Navbar from './components/navbar';
import Home from './pages/home';
import NotFound from './pages/notFound';
import Privacy from './pages/privacy';
import Report from './pages/report';

const customTheme = {
  ...theme,
  fonts: {
    body: 'Roboto, sans-serif',
    heading: 'Roboto, serif',
    mono: 'Roboto, monospace',
  },
  colors: {
    ...theme.colors,
    black: {
      100: '#F2EFF3',
      200: '#E5E0E7',
      300: '#B6B1BA',
      400: '#716D75',
      500: '#181719',
      600: '#121015',
      700: '#0E0B12',
      800: '#09070E',
      900: '#06040C',
    },
    white: {
      100: '#FEFDFE',
      200: '#FDFCFE',
      300: '#FBF9FC',
      400: '#F8F6FA',
      500: '#f4f2f7',
      600: '#BDB0D4',
      700: '#8B79B1',
      800: '#5F4D8F',
      900: '#3F2E76',
    },
    brand: {
      100: '#DBFCF9',
      200: '#B7FAF8',
      300: '#90ECF1',
      400: '#71D4E3',
      500: '#46b5d1',
      600: '#3390B3',
      700: '#236E96',
      800: '#164F79',
      900: '#0D3964',
    },
  },
};

function App() {
  return (
    <ThemeProvider theme={customTheme}>
      <CSSReset />
      <ColorModeProvider>
        <Router>
          <Navbar />
          <Switch>
            <Route path={'/report'}>
              <Report />
            </Route>
            <Route path={'/privacy'}>
              <Privacy />
            </Route>
            <Route exact path={'/'}>
              <Home />
            </Route>
            <Route path={'*'}>
              <NotFound />
            </Route>
          </Switch>
        </Router>
      </ColorModeProvider>
    </ThemeProvider>
  );
}

export default App;
