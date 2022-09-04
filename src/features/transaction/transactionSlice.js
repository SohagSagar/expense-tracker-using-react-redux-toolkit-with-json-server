import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { addTransactions, deleteTransactions, editTransactions, getTransactions } from "./transactionAPI";


const initialState = {
    transactions: [],
    isLoading: false,
    isError: false,
    error: '',
    editng: {}

}

//create async thunks
export const fetchTransactions = createAsyncThunk('transaction/fetchTransactions', async () => {
    const transaction = await getTransactions();
    return transaction;
})

export const createTransaction = createAsyncThunk('transaction/createTransaction', async (data) => {
    const transaction = await addTransactions(data);
    return transaction;
})


export const updateTransaction = createAsyncThunk('transaction/updateTransaction', async ( id, data ) => {
    const transaction = await editTransactions(id, data);
    return transaction;
})

export const removeTransaction = createAsyncThunk('transaction/removeTransaction', async (id) => {
    const transaction = await deleteTransactions(id);
    return transaction;
})



//create slice

const transactionSlice = createSlice({
    name: 'transaction',
    initialState,
    reducers: {
        activeEditing: (state, action) => {
            state.editng = action.payload;
        },
        inActiveEditing: (state, action) => {
            state.editng = {};
        }
    },
    extraReducers: (builder) => {
        builder
            //for getting transactions
            .addCase(fetchTransactions.pending, (state) => {
                state.isError = false;
                state.isLoading = true
            })
            .addCase(fetchTransactions.fulfilled, (state, action) => {
                state.isError = false;
                state.isLoading = false
                state.transactions = action.payload;
            })
            .addCase(fetchTransactions.rejected, (state, action) => {
                state.isError = true;
                state.error = action.error?.message;
                state.isLoading = false
                state.transactions = [];
            })


            //for creating transactions
            .addCase(createTransaction.pending, (state) => {
                state.isError = false;
                state.isLoading = true
            })
            .addCase(createTransaction.fulfilled, (state, action) => {
                state.isError = false;
                state.isLoading = false
                state.transactions.push(action.payload);
            })
            .addCase(createTransaction.rejected, (state, action) => {
                state.isError = true;
                state.error = action.error?.message;
                state.isLoading = false

            })


            //for updating transactions
            .addCase(updateTransaction.pending, (state) => {
                state.isError = false;
                state.isLoading = true
            })
            .addCase(updateTransaction.fulfilled, (state, action) => {
                state.isError = false;
                state.isLoading = false
                const indexToUpdate = state.transactions.findIndex(t => t.id === action.payload.id);
                state.transactions[indexToUpdate] = action.payload;
            })
            .addCase(updateTransaction.rejected, (state, action) => {
                state.isError = true;
                state.error = action.error?.message;
                state.isLoading = false

            })


            //for removing transactions
            .addCase(removeTransaction.pending, (state) => {
                state.isError = false;
                state.isLoading = true
            })
            .addCase(removeTransaction.fulfilled, (state, action) => {
                state.isError = false;
                state.isLoading = false
                state.transactions = state.transactions.filter(t => t.id !== action.payload.id);
            })
            .addCase(removeTransaction.rejected, (state, action) => {
                state.isError = true;
                state.error = action.error?.message;
                state.isLoading = false

            })
    }
})

export default transactionSlice.reducer;
export const {activeEditing,inActiveEditing} =transactionSlice.actions;