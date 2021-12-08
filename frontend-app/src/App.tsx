import { ThemeProvider } from 'styled-components';

import { theme } from './styles/theme';
import GlobalStyle from './styles/globalStyles';
import Router from './routes';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router />
    </ThemeProvider>
  );
}

export default App;
