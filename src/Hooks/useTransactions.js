import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTransactions } from "../features/transaction/transactionSlice";


const useTransactions = () => {
    const dispatch = useDispatch();
    const allTransaction = useSelector(state => state.transaction);

    useEffect(() => {
        dispatch(fetchTransactions())
    }, [dispatch]);

    



    return allTransaction;
}


export default useTransactions;