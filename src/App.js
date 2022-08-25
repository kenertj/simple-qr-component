
import QrComponent from './components/QrComponent';
import { ThemeProvider, createTheme } from '@mui/material/styles';
const theme = createTheme({
  typography: {
    fontFamily: "Outfit, Roboto, sans-serif"
  }
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <QrComponent />
    </ThemeProvider>
  );
}

export default App;
