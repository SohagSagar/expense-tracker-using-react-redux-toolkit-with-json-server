import React from 'react';
import editImg from '../Resourses/edit.svg';
import deleteImg from '../Resourses/delete.svg';

const SingleTransaction = () => {
    return (
        <li className="transaction income">
            <p>Earned this month</p>
            <div className="right">
                <p>৳ 100</p>
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