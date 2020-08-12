import React from 'react';
import { ThemeProvider } from 'styled-components';

import ligthTheme from './styles/themes/light';
import GlobalStyles from './styles/global';

import Routes from './routes';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={ligthTheme}>
      <Routes />
      <GlobalStyles />
    </ThemeProvider>
  );
};

export default App;
