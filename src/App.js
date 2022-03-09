import React from 'react';

//Styles
import { GlobalStyle } from './GlobalStyle';

import Home from './components/Home';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Header />
      <Home />
    </div>
  );
}

export default App;
