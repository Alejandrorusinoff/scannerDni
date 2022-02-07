import { createAction, createReducer } from "@reduxjs/toolkit";

const company = {
    companyName: null,
    companyHeadquartes: null,
    province: null,
    location: null,
    diretion: null,
    description: null,
    email: null,
    isAdmin: null,
    employees: []
}

export const setUser = createAction('SET_USER')
const userReducer = createReducer(company, {
    [setUser]: (state, action) => action.payload
})

export default userReducer