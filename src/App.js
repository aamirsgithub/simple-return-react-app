import './App.css';
import React from 'react'
import NavbarComponent from './components/navbar/NavbarComponent';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Home from './pages/home/Home';


const App = () => {
  return (
    <div>
      <> 
      <NavbarComponent/>
      < Header />
      < Home />
      < Footer />


      </>

    </div>
  )
};

export default App;
