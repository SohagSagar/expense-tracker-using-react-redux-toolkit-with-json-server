import React, { useState } from 'react';
import { Link, useMatch, useNavigate } from 'react-router-dom';
import useTransactions from '../Hooks/useTransactions';
import Filters from './Filters';
import Pagination from './Pagination';
import SingleTransaction from './SingleTransaction';


const TransactionList = () => {
    const allTransaction = useTransactions();
    const { transactions, isLoading, isError, error } = allTransaction;
    const navigate = useNavigate()

    //find current route
    const match = Boolean(useMatch('/'));

    // data for pagination
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(10);


    // Get current posts
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = transactions?.length > 0 ? transactions?.slice(indexOfFirstPost, indexOfLastPost) : [];

    // get total page
    const totalPage = Math.ceil(transactions?.length / postsPerPage);


    //decide what to render
    let content = null;

    if (isLoading) content = <p>Loading..</p>
    if (!isLoading && isError) content = <p className='text-red-400'>{error}</p>
    if (!isLoading && !isError && transactions.length === 0) content = <p>No transaction found</p>
    if (!isLoading && !isError && transactions.length > 0 && !match) content = [...currentPosts].reverse().map(transaction => <SingleTransaction
        key={transaction.id} transaction={transaction}
    />)
    if (!isLoading && !isError && transactions.length > 0 && match) content = [...transactions].reverse().slice(0, 5).map(transaction => <SingleTransaction
        key={transaction.id} transaction={transaction}
    />)


    return (
        <>
            
            {!match && <Link to={'/'}><button className='text-semibold btn w-36'>« Back Home</button></Link>}
            <p className="second_heading font-semibold">{match ? 'Your' : 'All'} Transactions:</p>
            {!match && <Filters/>}
            <div className="conatiner_of_list_of_transactions">
                <ul>
                    {content}
                    {transactions.length > 5 && match ? <p className='text-center'><Link to={'/all-transactions'}>View More</Link></p> : !match && <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} totalPage={totalPage} />
                    }
                </ul>

            </div>
        </>
    );
};

export default TransactionList;