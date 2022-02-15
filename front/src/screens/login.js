import React from 'react'
import {Text, TextInput, View, TouchableOpacity, ScrollView, Image, StatusBar } from 'react-native'
import { useForm, Controller } from "react-hook-form";
import styles from '../styles/loginStyles';
import logo from '../assets/static/ic_launcher_round.png'

const Login = ({navigation, sendLogin, }) => {
    const { control, handleSubmit, formState: { errors } } = useForm();

    return(     
        <View>
            <StatusBar backgroundColor="white" barStyle='dark-content'/>
            <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.logo} >
                {<Image
                    style={styles.tinyLogo}
                    source={
                    logo
                    }
                />}
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
                    <Text style={{color: 'rgba(0, 0, 121, 0.89)'}} onPress={()=> console.log('RecoverPassword')}>¿Olvidaste tu contraseña?</Text>
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

