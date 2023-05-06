import { extendTheme } from '@chakra-ui/react';

// import "@fontsource/poppins";
// import "@fontsource/solway";
import "@fontsource/space-grotesk"
import "@fontsource/fira-sans"

const theme = extendTheme({
  breakpoints: {
    base: "0px",
    sm: "30em",
    md: "48em",
    lg: "62em",
    xl: "80em",
  },
  fonts: {
    heading: `"Cal Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`,	
  	body: `BlinkMacSystemFont, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif`,
  },
  colors: {
    primary: {
      50: '#ffffff',
      100: '#645CAA',
      200: '#4f4988',
      300: '#A084CA',
      400: '#BFACE0',
      500: '#EBC7E8',
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