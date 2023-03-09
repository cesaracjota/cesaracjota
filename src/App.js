import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { AppRouter } from './routers/AppRouter';
import theme from './theme/theme';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <AppRouter />
    </ChakraProvider>
  );
}

export default App;