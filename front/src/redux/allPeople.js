import { createAction, createReducer } from "@reduxjs/toolkit";

export const setAllPeople = createAction('SET_ALL_PEOPLE')
const allPeopleReducer = createReducer([],{
    [setAllPeople]: (state, action) => action.payload
})

export default allPeopleReducer