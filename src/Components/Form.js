import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createTransaction, inActiveEditing, updateTransaction } from '../features/transaction/transactionSlice';

const Form = () => {

    const [name, setName] = useState('')
    const [type, setType] = useState('')
    const [amount, setAmount] = useState('');
    const [editMode, setEditMode] = useState(false);

    const resetForm = () => {
        setName('')
        setType('')
        setAmount('')
    }

    const dispatch = useDispatch();
    const { isLoading, isError, error } = useSelector(state => state.transaction)
    const { editng } = useSelector(state => state.transaction);

    useEffect(() => {
        if (editng.id) {
            const { name, type, amount } = editng;
            setEditMode(true);
            setName(name)
            setType(type)
            setAmount(amount)

        } else {
            setEditMode(false);
            resetForm();

        }
    }, [editng])


    const handleAdd = (e) => {
        e.preventDefault();
        const data = { name, type, amount }
        dispatch(createTransaction(data))
        if (!isLoading && !isError) resetForm();

    }

    const handleUpdate = (e) => {
        e.preventDefault();
        const data = { name, type, amount }
        dispatch(updateTransaction({id:editng.id,data}))
        if (!isLoading && !isError) resetForm();
        setEditMode(false);
        dispatch(inActiveEditing())
    }
    const handleCancelEdit = () => {
        setEditMode(false);
        dispatch(inActiveEditing())
        resetForm();
    }


    return (
        <div className="form">
            <h3>Add new transaction</h3>

            <form onSubmit={editMode ? handleUpdate : handleAdd}>
                <div className="form-group">
                    <label >Name</label>
                    <input
                        type="text"
                        name="name"
                        placeholder="My Salary"
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />
                </div>

                <div className="form-group radio">
                    <label >Type</label>
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

                <div className="form-group">
                    <label >Amount</label>
                    <input
                        type="number"
                        placeholder="300"
                        name="amount"
                        value={amount}
                        onChange={e => setAmount(e.target.value)}
                    />
                </div>

                <button disabled={isLoading} className="btn bg-[#4338ca]" type='submit'>{editMode ? 'Update' : 'Add'} Transaction</button>
                {!isLoading && isError && <p className='text-red-500'>{error}!</p>}
            </form>

            {editMode && <button onClick={handleCancelEdit} className="btn cancel_edit">Cancel Edit</button>}
        </div>
    );
};

export default Form;