import { extendTheme } from '@chakra-ui/react';

// import "@fontsource/poppins";
// import "@fontsource/solway";
import "@fontsource/space-grotesk"
import "@fontsource/fira-sans"

const theme = extendTheme({
  fonts: {
    heading: `"Cal Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`,	
  	body: `Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"`,
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
      1000: '#1a1a1a',
      1100: '#0f0f0f',
      1200: '#0a0a0a',
    },
  },

  styles: {
    global: (props) => ({
      body: {
        bg: props.colorMode === "purple"
            ? "purple.500"
            : props.colorMode === "dark"
            ? "gray.800"
            : "white",
        color: props.colorMode === "dark" ? "white" : "gray.800",
      },
    }),
  },
})

export default theme;