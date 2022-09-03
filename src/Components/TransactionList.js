import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTransactions } from '../features/transaction/transactionAPI';
import SingleTransaction from './SingleTransaction';


const TransactionList = () => {
    const dispatch = useDispatch();
    // const {transactions,isLoading,isError} = useSelector(state=>state.transactions);

    // useEffect(() => {
    //     dispatch(getTransactions())
    // }, [dispatch])
    return (
        <>
            <p className="second_heading">Your Transactions:</p>
            <div className="conatiner_of_list_of_transactions">
                <ul>
                    <SingleTransaction />
                </ul>
            </div>
        </>
    );
};

export default TransactionList;