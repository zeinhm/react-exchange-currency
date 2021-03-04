import React from 'react';
import pages from './pages'
import AppContextProvider from './contexts'

function App() {
  return (
    <AppContextProvider>
      <pages.Home />
    </AppContextProvider>
  );
}

export default App;
