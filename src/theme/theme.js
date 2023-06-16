import { extendTheme } from '@chakra-ui/react';

// import "@fontsource/poppins";
// import "@fontsource/solway";
import "@fontsource/space-grotesk"
import "@fontsource/fira-sans"
import '@fontsource-variable/raleway';
// Supports weights 300-900
import '@fontsource-variable/rubik';
// Supports weights 100-900
import '@fontsource-variable/public-sans';
// Supports weights 100-900
import '@fontsource/roboto';
import '@fontsource/ibm-plex-mono';
// Supports weights 100-800
import '@fontsource-variable/jetbrains-mono';
import '@fontsource/poppins';

const theme = extendTheme({
  fonts: {
    heading: `'Public Sans Variable', sans-serif`,
    body: `'Poppins', sans-serif`,
  },
  colors: {
    primary: {
      50: '#e0defe',
      100: '#625bf8',
      200: '#514af7',
      300: '#423af6',
      400: '#332af5',
      500: '#2319f5',
      600: '#1e88e5',
      700: '#ffffff1f',
      800: '#ffffff33',
      900: '#242424',
      1000: '#282828',
      1100: '#1f1f1f',
      1200: '#1a1a1a',
      1300: '#121212',
      1400: '#0c0c0c',
    },
  },
})


export default theme;