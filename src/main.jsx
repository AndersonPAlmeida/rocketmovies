import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './pages/styles/global.js';
import theme from './pages/styles/theme.js';

import { CreateMovie } from './pages/CreateMovie';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <CreateMovie />
    </ThemeProvider>
  </React.StrictMode>,
)
