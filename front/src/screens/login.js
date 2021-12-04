import React, { useState } from 'react'
import {Text, TextInput, StyleSheet, View, TouchableOpacity, ScrollView} from 'react-native'
import { useForm, Controller } from "react-hook-form";
import axios from 'axios'
import {setUser} from '../redux/user'
import { useDispatch, useSelector } from 'react-redux';



const Login = ({navigation}) => {
    /* const [user, setUser] = useState({}) */
    const { control, handleSubmit, formState: { errors } } = useForm();
    
    const dispatch = useDispatch()
    const user = useSelector(state => state.user)

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

const styles = StyleSheet.create({
    input: {
        height: 50,
        margin: 12,
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,
        borderColor: 'rgba(0, 0, 121, 0.89)',
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        marginHorizontal: 16,
        padding: 10,
    },
    bottonAndText: {
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 20,
    },
    botton: {
        padding: 10,
        borderRadius: 10,
        alignItems: 'center',
        backgroundColor: '#87cefa',
        marginTop: '4%'
    },
    logo: {
        flex: 3, 
        borderWidth: 1, 
        justifyContent: 'center', 
        alignItems: 'center', 
        height: 300,
        borderRadius: 150,
    },
    textRequired: {
        paddingLeft: 15,
        color: 'red'
    }
});

export default Login