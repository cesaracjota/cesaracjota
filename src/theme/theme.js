import { extendTheme } from '@chakra-ui/react';

// import "@fontsource/poppins";
// import "@fontsource/solway";
import "@fontsource/space-grotesk"
import "@fontsource/fira-sans"

const theme = extendTheme({
  fonts: {
    heading: `"Space Grotesk", "Inter var experimental", "Inter var", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif`,	
  	body: `"Space Grotesk", "Inter var experimental", "Inter var", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif`,
  },
  colors: {
    primary: {
      100: '#8612fa',
      200: '#ffffff',
      300: '#53565a',
      400: '#53565a',
      500: '#2196f3',
      600: '#1e88e5',
      700: '#ffffff1f',
      800: '#162936',
      900: '#242424',
      1000: '#1a1a1a',
      1100: '#192229',
    },
  },
})

export default theme;