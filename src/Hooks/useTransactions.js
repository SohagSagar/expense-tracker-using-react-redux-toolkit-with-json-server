import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTransactions } from "../features/transaction/transactionSlice";


const useTransactions = () => {
    const dispatch = useDispatch();
    const allTransaction = useSelector(state => state.transaction);
    const {radioType,searched} =useSelector(state => state.transaction)
    
    

    useEffect(() => {
        dispatch(fetchTransactions({radioType,searched}));
        
    }, [dispatch,radioType,searched]);


    return allTransaction;
}


export default useTransactions;