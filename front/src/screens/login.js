import React from 'react'
import {Text, TextInput, StyleSheet, View, TouchableOpacity, ScrollView} from 'react-native'
import { useForm, Controller } from "react-hook-form";
import axios from 'axios'
import {setUser} from '../redux/user'
import { useDispatch, useSelector } from 'react-redux';
import styles from '../styles/loginStyles';

const Login = ({navigation}) => {
    const { control, handleSubmit, formState: { errors } } = useForm();
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
            <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.logo} >
                <Text style={{fontSize: 120, color: 'rgba(0, 0, 121, 0.89)'}}>LOGO</Text>
            </View>
            <View style={{flex: 3}}>
                <Controller
                    control={control}
                    rules={{
                        required: true,
                    }}
                    render={({ field: { onChange, onBlur, value } }) => (
                    <TextInput
                        style={styles.input}
                        onBlur={onBlur}
                        onChangeText={onChange}
                        value={value}
                        placeholder= 'Ingrese Correo electrónico'
                        keyboardType="email-address"
                    />
                    )}
                    name="email"
                />
                {errors.email && <Text style={styles.textRequired}>Este campo el requerido.</Text>}

                <Controller
                    control={control}
                    rules={{
                    required: true,
                    }}
                    render={({ field: { onChange, onBlur, value } }) => (
                    <TextInput
                        style={styles.input}
                        onBlur={onBlur}
                        onChangeText={onChange}
                        value={value}
                        placeholder= 'Ingrese Contraseña'
                        secureTextEntry={true}
                    />
                    )}
                    name="password"
                />
                {errors.password && <Text style={styles.textRequired}>Este campo el requerido.</Text>}

                <View style={styles.bottonAndText}>
                    <Text style={{color: 'rgba(0, 0, 121, 0.89)'}} onPress={()=> console.log('cambiar contraseña')}>¿Olvidaste tu contraseña?</Text>
                    <TouchableOpacity
                        style={styles.botton}
                        onPress={handleSubmit(sendLogin)}
                    >
                        <Text>Iniciar Sesión</Text>
                    </TouchableOpacity>
                </View>
            </View>
            </ScrollView>
        </View>
    )
}

export default Login