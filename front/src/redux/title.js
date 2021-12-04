import { createAction, createReducer } from "@reduxjs/toolkit";

const fullName = {
    name: '',
    lastName: ''
}

export const setTitle = createAction('SET_TITLE')
const titleReducer = createReducer(fullName,{
    [setTitle]: (state, action) => action.payload
})

export default titleReducer