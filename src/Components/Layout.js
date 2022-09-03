import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from '../Components/Footer'

const Layout = () => {
    return (
        <div className="App">
            <Header />
            <Main />
            <Footer />
        </div>
    );
};

export default Layout;