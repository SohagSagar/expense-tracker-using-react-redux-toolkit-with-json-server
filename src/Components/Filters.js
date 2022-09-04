import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filterByRadio, filterBySearch, resetFilter } from '../features/transaction/transactionSlice';

const Filters = () => {

    const disPatch = useDispatch()
    const { searched,radioType } = useSelector((state) => state.transaction)
    const [input, setInput] = useState(searched);
    const [type, setType] = useState(radioType)

    function debounce(fn, delay) {
        let timer;
        return (() => {
            clearTimeout(timer);
            timer = setTimeout(() => fn(), delay);
        })();

    };

    useEffect(() => {
        debounce(searchedText, 1000);
    }, [input])

    // dispatch actions
    function searchedText() {
        disPatch(filterBySearch(input))
    };

    useEffect(()=>{
        disPatch(filterByRadio(type))
    },[type,disPatch])

    const handleReset = () =>{
        disPatch(resetFilter())
        setInput('');
        setType('');
    }


    return (
        <div className='grid  justify-items-center'>

            {/* filter by radio btn */}
            <div className="flex gap-5">

                <div className="radio_group">
                    <input
                        type="radio"
                        value="income"
                        name="type"
                        checked={type === 'income'}
                        onChange={e => setType('income')}
                    />
                    <label >Income</label>
                </div>
                <div className="radio_group">
                    <input
                        type="radio"
                        value="expense"
                        placeholder="Expense"
                        name="type"
                        checked={type === 'expense'}
                        onChange={e => setType('expense')}
                    />
                    <label >Expense</label>
                </div>
            </div>

            {/* filter by search field */}
            <div>
                <input
                    className="outline-none border p-1 px-2 mt-2"
                    type="search"
                    name="search"
                    placeholder="Search"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                />
                <button onClick={handleReset} className='border p-1 ml-2 expense px-2 text-white'>Clear Filters</button>
            </div>
        </div>
    );
};

export default Filters;