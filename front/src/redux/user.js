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



// export const setUser = createAction('SET_USER')
/* const userReducer = createReducer({}, {
    [setUser]: (state, action) => action.payload
}) */
// export const sendLoginRequest = () => (dispatch) => {
//     return axios.post("/api/login").then(({ data }) => {
//         dispatch(setUser(data));
//         return data
//     })
// }
/* 
export const postLogin = (email, password) => (dispatch) => {
    return axios.post('http://localhost:3001/api/organization/login', {
        email,
        password
    })
}
*/

export default userReducer

