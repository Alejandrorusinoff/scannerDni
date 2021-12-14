import React from 'react'
import { View } from 'react-native'
import {setUser} from '../redux/user'
import { useDispatch, useSelector } from 'react-redux';
import { postEmail } from '../axiosRequests/request'
import RecoverPassword from '../screens/recoverPassword'
import { msjFlash } from '../alertMessage/message';
import { lowerValidation } from '../generalFunctions/functions';
import { useNavigation } from '@react-navigation/core';

const RecoverPasswordContainer = ({navigation}) => {
    const user = useSelector(state => state.user)
    const dispatch = useDispatch()
    const navigate = useNavigation()

    function sendEmail({email}) {
        console.log(email)
        /* postEmail(lowerValidation(email))
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
        .catch(err => console.log(err)) */
    }

    return(     
        <View>
            <RecoverPassword sendEmail={sendEmail}/>
        </View>
    )
}

export default RecoverPasswordContainer