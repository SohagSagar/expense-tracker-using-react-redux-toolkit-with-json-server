import React from 'react';
import editImg from '../Resourses/edit.svg';
import deleteImg from '../Resourses/delete.svg';

const SingleTransaction = ({ transaction }) => {
    const { name,type,amount} = transaction;
    return (
        <li className={`transaction ${type==='income' ? 'income' : 'expense'}`}>
            <p>{name}</p>
            <div className="right">
                <p>৳ {amount}</p>
                <button className="link">
                    <img alt=''
                        className="icon"
                        src={editImg}
                    />
                </button>
                <button className="link">
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