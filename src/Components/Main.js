import React from 'react';
import Balance from '../Components/Balance';
import Form from './Form';
import TransactionList from './TransactionList';

const Main = () => {
    return (
        <div className="main">
            <div className="container">
                <Balance/>
                <Form/>
                <TransactionList/>
            </div>
        </div>
    );
};

export default Main;