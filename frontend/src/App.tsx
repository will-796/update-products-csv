
import Import from "./pages/import";

import FileContextProvider from "./context/fileContextProvider";

function App() {
  return (
    <FileContextProvider>
      <Import />
    </FileContextProvider>
  );
}

export default App;
