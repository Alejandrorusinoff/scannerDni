import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit'
import logger from 'redux-logger'
import userReducer from './user'
import employeeReducer from './employee'
import allPeopleReducer from './allPeople'
import titleReducer from './title'
import imgEmployeeReducer from './imgEmployee'

const store = configureStore({
    middleware:(getDefaultMiddleware)=> getDefaultMiddleware().concat(logger),
    reducer: {
        user: userReducer,
        employee: employeeReducer,
        allPeople: allPeopleReducer,
        title: titleReducer,
        imgEmployee: imgEmployeeReducer,
    }
})

export default store