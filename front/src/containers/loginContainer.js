import React from 'react'
import { View } from 'react-native'
import {setUser} from '../redux/user'
import { useDispatch, useSelector } from 'react-redux';
import { postLogin } from '../axiosRequests/request'
import Login from '../screens/login'
import { msjFlash } from '../alertMessage/message';
import { lowerValidation } from '../ generalFunctions/generalFunctions';
import styles from '../styles/loginStyles';

const LoginContainer = ({navigation}) => {
    const user = useSelector(state => state.user)
    const dispatch = useDispatch()

    function sendLogin({email,password}) {
        postLogin(lowerValidation(email), password)
        .then(({data}) => {
            if (data === 'Usuario no encontrado') {
                msjFlash(data, 'danger', 'danger')
            }
            else {
                if (data.token) {
                    dispatch(setUser(data)) 
                }
                else {
                    msjFlash(data, 'danger', 'danger')
                }
            }
        })
        .catch(err => console.log(err))
    }

    return(     
        <View style={styles.container}>
            <Login sendLogin={sendLogin} user={user}/>
        </View>
    )
}

export default LoginContainer