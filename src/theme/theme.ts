import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'light', // or 'dark'
    primary: {
      main: '#1976d2', // You can customize this
    },
    secondary: {
      main: '#dc004e',
    },
  },
});

export default theme;