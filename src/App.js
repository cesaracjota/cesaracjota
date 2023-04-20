import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { AppRouter } from './routers/AppRouter';
import theme from './theme/theme';
import i18n from './helpers/i18n';
import { I18nextProvider } from 'react-i18next';

function App() {
  return (
      <I18nextProvider i18n={i18n}>
        <ChakraProvider theme={theme}>
            <AppRouter />
        </ChakraProvider>
      </I18nextProvider>
  );
}

export default App;