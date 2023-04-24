import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import theme from './theme/theme';
import i18n from './helpers/i18n';
import { I18nextProvider } from 'react-i18next';
import { store } from './app/store';
import { Provider } from 'react-redux';
import { AppRouter } from './routers/AppRouter';

function App() {
  return (
    <Provider store={store}>
      <I18nextProvider i18n={i18n}>
        <ChakraProvider theme={theme}>
          <AppRouter />
        </ChakraProvider>
      </I18nextProvider>
    </Provider>
  );
}

export default App;