import React from 'react'
import {Text, TextInput, StyleSheet, View, TouchableOpacity, ScrollView} from 'react-native'
import { useForm, Controller } from "react-hook-form";
import axios from 'axios'
import {setUser} from '../redux/user'
import { useDispatch, useSelector } from 'react-redux';
import Login from '../screens/login'
import styles from '../styles/loginStyles';

const LoginContainer = ({navigation}) => {
    const user = useSelector(state => state.user)
    const dispatch = useDispatch()

    function sendLogin({email,password}) {
        axios.post('http://localhost:3001/api/organization/login', {
            email,
            password
        })
        .then(({data}) => dispatch(setUser(data)))
        .catch(err => console.log(err))
    }

    return(     
        <View style={styles.container}>
            <Login sendLogin={sendLogin} user={user}/>
        </View>
    )
}

export default LoginContainer