import { ThemeProvider } from '@emotion/react';
import './App.css';
import Sidenav from "./components/Sidenav"
import darkTheme from './themes/darkTheme';
function App() {
  return (
    <ThemeProvider theme= {darkTheme}>
<Sidenav />
    </ThemeProvider>

  );
}

export default App;
