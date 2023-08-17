import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { persistor, store } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@emotion/react';
import { theme } from 'theme';
import { App } from './components';
import './index.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  // <React.StrictMode>
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <ThemeProvider theme={theme}>
        <BrowserRouter basename="/">
          <App />
        </BrowserRouter>
      </ThemeProvider>
    </PersistGate>
  </Provider>
  // </React.StrictMode>
);
