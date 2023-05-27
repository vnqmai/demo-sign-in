import { red } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

// A custom theme for this app
const theme = createTheme({
  palette: {
    primary: {
      main: '#222222',
    },
    secondary: {
      main: '#eff2f5',
    },
    error: {
      main: red.A400,
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        'body': {
          backgroundColor: '#eff2f5'
        }
      }
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: '0px',
          boxShadow: 'none',
        }
      }
    },
    MuiCardContent: {
      styleOverrides: {
        root: {
          '&:last-child': {
            paddingBottom: '16px',
          }
        }
      }
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: '0px',
          backgroundColor: '#eff2f5',
          border: 'none',
          '& fieldset': {
            borderColor: 'transparent'
          },
          '&:hover fieldset': {
            borderColor: 'transparent',
          }
        },
      }
    }
  },
});

export default theme;
