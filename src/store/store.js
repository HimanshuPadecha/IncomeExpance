import React from "react";
import { configureStore } from "@reduxjs/toolkit";
import loginSlice from "./loginSlice";
import dataSlice from "./dataSlice";


const store = configureStore({
    reducer:{
        auth : loginSlice,
        data : dataSlice
    }
})

export default store