import React from 'react'
import {Text, TextInput, View, TouchableOpacity, ScrollView} from 'react-native'
import { useForm, Controller } from "react-hook-form";
import styles from '../styles/registerStyles';

const Register = ({sendRegister}) => {
    const { control, handleSubmit, formState: { errors } } = useForm();

    return(    
        <View>
            <ScrollView showsVerticalScrollIndicator={false}> 
                <Text style={styles.title}>Complete el formulario con los datos de la Empresa</Text>
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
                            placeholder= 'Ingrese el nombre de la empresa'
                        />
                        )}
                        name="companyName"
                    />
                    {errors.companyName && <Text style={styles.textRequired}>Este campo el requerido.</Text>}

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
                            placeholder= 'Ingrese la sede de la empresa'
                        />
                        )}
                        name="companyHeadquartes"
                    />
                    {errors.companyHeadquartes && <Text style={styles.textRequired}>Este campo el requerido.</Text>}

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
                            placeholder= 'Ingrese la provincia'
                        />
                        )}
                        name="province"
                    />
                    {errors.province && <Text style={styles.textRequired}>Este campo el requerido.</Text>}

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
                            placeholder= 'Ingrese la localidad'
                        />
                        )}
                        name="location"
                    />
                    {errors.location && <Text style={styles.textRequired}>Este campo el requerido.</Text>}

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
                            placeholder= 'Ingrese la dirección'
                        />
                        )}
                        name="diretion"
                    />
                    {errors.diretion && <Text style={styles.textRequired}>Este campo el requerido.</Text>}

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
                            placeholder= 'Ingrese descripción'
                        />
                        )}
                        name="description"
                    />
                    {errors.description && <Text style={styles.textRequired}>Este campo el requerido.</Text>}

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
                            placeholder= 'Ingrese correo electrónico'
                        />
                        )}
                        name="email"
                    />
                    {errors.province && <Text style={styles.textRequired}>Este campo el requerido.</Text>}

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
                            placeholder= 'Ingrese contraseña'
                        />
                        )}
                        name="password"
                    />
                    {errors.province && <Text style={styles.textRequired}>Este campo el requerido.</Text>}

                    <View style={styles.bottonAndText}>
                        <TouchableOpacity
                            style={styles.botton}
                            onPress={handleSubmit(sendRegister)}
                        >
                            <Text>Registrar Empresa</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

export default Register