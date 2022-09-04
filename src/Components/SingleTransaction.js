import React from 'react';
import editImg from '../Resourses/edit.svg';
import deleteImg from '../Resourses/delete.svg';
import { useDispatch } from 'react-redux';
import { activeEditing, removeTransaction } from '../features/transaction/transactionSlice';
import { Navigate, useLocation, useMatch, useNavigate } from 'react-router-dom';
import numberWithCommas from '../Utility/thousandSeperator';

const SingleTransaction = ({ transaction }) => {
    const {id, name,type,amount} = transaction;
    const dispatch =useDispatch();
    const navigate =useNavigate()
    let location = useLocation();
    //find current route
    const match = Boolean(useMatch('/'));

    const handleEdit = () =>{
        dispatch(activeEditing(transaction));
        if(!match) navigate('/')
        // <Navigate to='/' state={{ from: location }} replace />;

    }

    const handleDelete = () =>{
        dispatch(removeTransaction(id))
    }
    return (
        <li className={`transaction ${type==='income' ? 'income' : 'expense'}`}>
            <p>{name}</p>
            <div className="right">
                <p>৳ {numberWithCommas(amount)}</p>
                <button className="link" onClick={handleEdit}>
                    <img alt=''
                        className="icon"
                        src={editImg}
                    />
                </button>
                <button className="link" onClick={handleDelete}>
                    <img alt=''
                        className="icon"
                        src={deleteImg}
                    />
                </button>
            </div>
        </li>
    );
};

export default SingleTransaction;