import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import LoginForm from './components/LoginForm';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Auth function
  const handleLogin = (email, password) => {
    if (email === 'rawal.iftikhar@gmail.com' && password === 'rawal') {
      setIsLoggedIn(true);
    } else {
      alert('Invalid Credentials');
    }
  };

  return (
    <div className="App">
      {!isLoggedIn ? (
        <>
          <Header />
          <LoginForm onLogin={handleLogin} />
          <Footer />
        </>
      ) : (
        <>
          <Navbar />
          <ProductList />
        </>
      )}
    </div>
  );
}

export default App;
