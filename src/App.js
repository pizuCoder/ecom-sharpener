import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import StorePage from './components/Store';
import NavBar from './components/Navbar';
import Header from './components/Header';

function App() {
  return(
    <div>
      <NavBar />
      <Header />
      <StorePage />
    </div>
  )
}
export default App