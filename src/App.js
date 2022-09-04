import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AllTransactions from './Components/AllTransactions';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Layout from './Components/Layout';
import Main from './Components/Main';


function App() {
  return (
    <div className="App">
      <Header />
      
      <Routes>
        <Route path='/' element={<Main />}></Route>
        <Route path='/all-transactions' element={<AllTransactions />}></Route>
      </Routes>

      <Footer />


    </div>
  );
}

export default App;
