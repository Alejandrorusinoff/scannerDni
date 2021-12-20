import { createAction, createReducer } from "@reduxjs/toolkit";

export const setImgEmployee = createAction('SET_IMG_EMPLOYEE')
const imgEmployeeReducer = createReducer('',{
    [setImgEmployee]: (state, action) => action.payload
})

export default imgEmployeeReducer