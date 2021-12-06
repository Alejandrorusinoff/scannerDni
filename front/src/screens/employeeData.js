import React from 'react'
import {Text, TextInput, View, TouchableOpacity, ScrollView} from 'react-native'
import { useForm, Controller } from "react-hook-form";
import styles from '../styles/employeeDataStyles';

const EmployeeData = ({saveEmployee, dni}) => {
    const { control, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            dni: dni
        }
    })

    return(    
        <View>
            <View>
                <ScrollView showsVerticalScrollIndicator={false}> 
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
                                placeholder= 'Nombre'
                            />
                            )}
                            name="name"
                        />
                        {errors.name && <Text style={styles.textRequired}>Este campo el requerido.</Text>}

                        <Controller
                            control={control}
                            rules={{
                            required: true,
                            }}
                            render={({ field: { onChange, onBlur, value, } }) => (
                            <TextInput
                                style={styles.input}
                                onBlur={onBlur}
                                onChangeText={onChange}
                                value={value}
                                placeholder= 'Apellido'
                            />
                            )}
                            name="lastName"
                        />
                        {errors.lastName && <Text style={styles.textRequired}>Este campo el requerido.</Text>}

                        <Controller
                            control={control}
                            rules={{
                            required: true,
                            }}
                            render={({ field: { onChange, onBlur, value} }) => (
                            <TextInput
                                style={styles.input}
                                onBlur={onBlur}
                                onChangeText={onChange}
                                value={value}
                                placeholder= 'N° de documento'
                                keyboardType="numeric"
                            />
                            )}
                            name="dni"
                        />
                        {errors.dni && <Text style={styles.textRequired}>Este campo el requerido.</Text>}

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
                                placeholder= 'Edad'
                                keyboardType="numeric"
                            />
                            )}
                            name="age"
                        />
                        {errors.age && <Text style={styles.textRequired}>Este campo el requerido.</Text>}

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
                                placeholder= 'Domicilio'
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
                                placeholder= 'Empresa a la que pertenece'
                            />
                            )}
                            name="organizationName"
                        />
                        {errors.organizationName && <Text style={styles.textRequired}>Este campo el requerido.</Text>}

                        <View style={styles.bottonAndText}>
                            <TouchableOpacity
                                style={styles.botton}
                                onPress={handleSubmit(saveEmployee)}
                            >
                                <Text>Registrar Empleado</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>
            </View>
        </View>
    )
}

export default EmployeeData