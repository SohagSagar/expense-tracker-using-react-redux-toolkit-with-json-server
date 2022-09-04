import { axiosInstance } from "../../Utility/axiosInstance"


export const getTransactions = async ({ radioType, searched }) => {

    let queryString='';
    queryString += radioType && `&type=${radioType}`
    queryString += searched && `&q=${searched}`

    const response = await axiosInstance.get(`/transactions?${queryString}`);
    return response.data;
}


export const addTransactions = async (data) => {
    const response = await axiosInstance.post('/transactions', data);
    return response.data;
}


export const editTransactions = async ({ id, data }) => {
    const response = await axiosInstance.put(`/transactions/${id}`, data);
    return response.data;
}


export const deleteTransactions = async (id) => {
    console.log(id);
    const response = await axiosInstance.delete(`/transactions/${id}`);
    return response.data;
}

