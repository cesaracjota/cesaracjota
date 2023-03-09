import { extendTheme } from '@chakra-ui/react';
import "@fontsource/poppins";
import "@fontsource/solway";

const theme = extendTheme({
  fonts: {
    heading: `"Poppins", sans serif`,	
  	body: `"Solway", sans-serif`,
  },
  colors: {
    primary: {
      100: '#ff6334',
      200: '#f3f5f7',
      300: '#53565a',
      400: '#53565a',
      500: '#2196f3',
      600: '#1e88e5',
      700: '#ffffff1f',
      800: '#162936',
      900: '#162027',
      1000: '#141b21',
      1100: '#192229',
    },
  },
})

export default theme;
