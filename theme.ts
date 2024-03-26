// theme.ts
import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  styles: {
    global: {
      // Global style overrides
      'html, body': {
        backgroundColor: '#0A1937', // Dark blue
        color: '#BB8A04', // Gold
        fontFamily: 'Inter, sans-serif',
        margin: 0,
        padding: 0,
      },
    },
  },
  components: {
    card: {
      // The styles all `Box` components will use
      baseStyle: {
        backgroundColor: '#0A1937', // Here you can put any color from the theme or any new color
        cardShadow: 'base', // Example of adding a shadow
        padding: 35, // Example of adding padding
        // Add any other styles you want for the Box component
      },
    },
    // Other components can also be styled here
  },
});

export default theme;
