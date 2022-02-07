import { createAction, createReducer } from "@reduxjs/toolkit";

export const setEmployee = createAction('SET_EMPLOYEE')
const employeeReducer = createReducer([],{
    [setEmployee]: (state, action) => action.payload
})

export default employeeReducer