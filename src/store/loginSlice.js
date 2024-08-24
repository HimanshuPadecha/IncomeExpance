import React from "react";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    authenticated:false,
    userData:null
}

const loginSlice = createSlice({
    name:"authSlice",
    initialState,
    reducers:{
        login:(state,action)=>{
            state.authenticated = true;
            state.userData = action.payload
        },
        logout:(state,action)=>{
            state.authenticated = false;
            state.userData = null
        }
    }
})


export const {login,logout} = loginSlice.actions

export default loginSlice.reducer