import React from 'react';
import './App.css';
import Navbar from './component/Navbar';
import { BrowserRouter as Router } from 'react-router-dom';
import {Routes , Route} from 'react-router-dom'

import Services from  './component/pages/Services'
import Product from  './component/pages/Product'
import Consulting from  './component/pages/Consulting'
import ContactUs from  './component/pages/ContactUs'
import Marketing from  './component/pages/Marketing'
import SignUp from  './component/pages/SignUp'
import Home from  './component/pages/Home'
import Design from './component/pages/Design';
import Development from './component/pages/Development';

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/services'  element={<Services/>} />
        <Route path='/design' element={<Design/>} />
        <Route path='/development'  element={<Development/>} />
        <Route path='/product'  element={<Product/>} />
        <Route path='/contact-us'  element={<ContactUs/>} />
        <Route path='/marketing'  element={<Marketing/>} />
        <Route path='/sign-up'  element={<SignUp/>} />
        <Route path='/consulting'  element={<Consulting/>} />
        <Route path='/'  element={<Home/>} />
      </Routes>
    </Router>
  );
}

export default App;
