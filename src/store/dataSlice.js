import { createSlice } from "@reduxjs/toolkit";
import { ID } from "appwrite";

const initialState = {
    Transactions:[
    ]
}

const dataSlice = createSlice({
    name:"dataSlice",
    initialState,
    reducers:{
        addTransaction:(state,action)=>{
            state.Transactions.push(action.payload)
        },
        deleteTransaction:(state,action)=>{
            state.Transactions = state.Transactions.filter(transaction=> transaction.id !== action.payload)
        },
        setFetchedTransaction:(state,action)=>{
            state.Transactions = action.payload
        },
        deleteFromDOM: (state,action)=>{
            state.Transactions = []
        }
    }
})

export const {addTransaction,deleteTransaction,setFetchedTransaction,deleteFromDOM} = dataSlice.actions

export default dataSlice.reducer