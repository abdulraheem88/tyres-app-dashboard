import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';

function App() {
  return (
    <div className="App">
      <Navbar />
      <ProductList />
      {/* You can add more components here, like sidebar or product list */}
    </div>
  );
}

export default App;
