import React from 'react';
import { useSelector } from 'react-redux';
import numberWithCommas from '../Utility/thousandSeperator';

const Balance = () => {
    const {transactions} = useSelector(state=>state.transaction)

    let amount=0;
     transactions.map(transaction=>{
        if(transaction.type==='income') amount +=transaction.amount;
        if(transaction.type==='expense') amount -=transaction.amount;

    })
    
    const total=numberWithCommas(amount)


    return (
        <div className="top_card">
            <p>Your Current Balance</p>
            <h3>
                <span>৳</span>
                <span> {total ? total :0}</span>
            </h3>
        </div>
    );
};

export default Balance;