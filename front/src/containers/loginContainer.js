import React from 'react'
import { View } from 'react-native'
import {setUser} from '../redux/user'
import { useDispatch, useSelector } from 'react-redux';
import { postLogin } from '../axiosRequests/request'
import Login from '../screens/login'
import { msjFlash } from '../alertMessage/message';
import { lowerValidation } from '../generalFunctions/generalFunctions';
import { useNavigation } from '@react-navigation/core';
import styles from '../styles/loginStyles';

const LoginContainer = ({navigation}) => {
    const user = useSelector(state => state.user)
    const dispatch = useDispatch()
    const navigate = useNavigation()

    function sendLogin({email,password}) {
        postLogin(lowerValidation(email), password)
        .then(({data}) => {
            console.log('data ---> ', data)
            if (data === 'Usuario no encontrado') msjFlash(data, 'danger', 'danger')
            else {data.token ? dispatch(setUser({...data})) : msjFlash(data, 'danger', 'danger')}
        })
        .catch(err => console.log(err))
    }

    return(     
        <View style={styles.container}>
            <Login sendLogin={sendLogin}/>
        </View>
    )
}

export default LoginContainer