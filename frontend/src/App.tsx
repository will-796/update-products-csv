import Import from "./pages/import";

import FileContextProvider from "./context/fileContextProvider";
import { ToastContainer } from "react-toastify";
import { GlobalStyle } from "./theme/globalStyle";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme/theme";

function App() {
  return (
    <FileContextProvider>
      <ThemeProvider theme={theme}>

      <GlobalStyle/ >

        <Import />
        <ToastContainer />
      </ThemeProvider>
    </FileContextProvider>
  );
}

export default App;
