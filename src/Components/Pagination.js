import React from 'react';


const Pagination = ({ currentPage, setCurrentPage, totalPage }) => {
    return (
        <section className="pt-6">
            <div className=" flex justify-center">
                <div className='flex justify center item-center '>
                    <button onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage < 2} ><span className='text-2xl'>«</span></button>
                    <button className=" font-semibold mt-2 px-3 text-sm">Page {currentPage}/{totalPage}</button>
                    <button onClick={() => setCurrentPage(currentPage + 1)} disabled={currentPage === totalPage} ><span className='text-2xl'>»</span></button>

                </div>
            </div>
        </section>
    );
};

export default Pagination;