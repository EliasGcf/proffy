import React from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';

import ligthTheme from './styles/themes/light';
import GlobalStyles from './styles/global';
import Routes from './routes';
import AppProvider from './hooks';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={ligthTheme}>
      <BrowserRouter>
        <AppProvider>
          <Routes />
        </AppProvider>
        <GlobalStyles />
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
