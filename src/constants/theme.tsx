// constants/theme.tsx

import { createMuiTheme } from '@material-ui/core/styles';

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#6772E5'
    },
    secondary: {
      main: '#87BBFD' // omitting light and dark will calculate from main
    }
  },
  typography: {
    fontFamily: 'Roboto'
  }
});

export default theme;
