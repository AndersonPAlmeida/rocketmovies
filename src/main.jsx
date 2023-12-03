import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './pages/styles/global.js';
import theme from './pages/styles/theme.js';

import { SigIn } from './pages/SigIn';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <SigIn />
    </ThemeProvider>
  </React.StrictMode>,
)
