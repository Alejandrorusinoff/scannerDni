import React, {useEffect, useState} from 'react'
import {Text, TextInput, StyleSheet, View, TouchableOpacity, ScrollView} from 'react-native'
import { useForm, Controller } from "react-hook-form";
import { setEmployee } from '../redux/employee';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios'


const EmployeeData = ({navigation, route}) => {
    const user = useSelector(state => state.user)
    const dni = route.params.data.BuscarEmpleado
    const dataScannerDni = route.params.data.arrDNI
    const { control, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            dni: dni
        }
    })

    const dispatch = useDispatch()
    console.log(dni)
    

    /* console.log("employee data dni ---> ", route.params.data) */
    /*console.log("dataScannerDni.arrDNI ---> ", dataScannerDni.arrDNI) */

    function saveEmployee({name, lastName, dni, age, diretion, organizationName, organizationId = user.company._id}) {
        /* console.log("dnisaveEmployee  -----> ") */
        
        axios.post('http://localhost:3001/api/employee/add',
        {
            name, 
            lastName, 
            dni, 
            age, 
            diretion, 
            organizationName,
            organizationId,
        },
        {headers: {authorization: `Bearer ${user.token}`}})
        .then(({data}) => {dispatch(setEmployee(data)), navigation.navigate('CovidEmployeeData1')})
        .catch(err => console.log(err))
    }

    return(    
        <View style={styles.container}>
            <View>
                <ScrollView showsVerticalScrollIndicator={false}> 
                    <View style={{flex: 3}}>
                        {/* <Text style={styles.title}>Complete el formulario con los datos del empleado</Text> */}
                        <Controller
                            control={control}
                            /* rules={{
                                required: true,
                            }} */
                            render={({ field: { onChange, onBlur, value } }) => (
                            <TextInput
                                style={styles.input}
                                onBlur={onBlur}
                                onChangeText={onChange}
                                //value={dataScannerDni[2]? dataScannerDni[2] : value} //dataScannerDni[2]
                                value={value}
                                placeholder= 'Nombre'
                            />
                            )}
                            name="name"
                        />
                        {errors.name && <Text style={styles.textRequired}>Este campo el requerido.</Text>}

                        <Controller
                            control={control}
                            /* rules={{
                            required: true,
                            }} */
                            render={({ field: { onChange, onBlur, value, } }) => (
                            <TextInput
                                style={styles.input}
                                onBlur={onBlur}
                                onChangeText={onChange}
                                value={value} //dataScannerDni[1]
                                placeholder= 'Apellido'
                            />
                            )}
                            name="lastName"
                        />
                        {errors.lastName && <Text style={styles.textRequired}>Este campo el requerido.</Text>}

                        <Controller
                            control={control}
                            /* rules={{
                            required: true,
                            }} */
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
                            /* rules={{
                            required: true,
                            }} */
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
                            /* rules={{
                            required: true,
                            }} */
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
                            /* rules={{
                            required: true,
                            }} */
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
                                /* onPress={() => navigation.navigate('CovidEmployeeData1')} */
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
        backgroundColor: '#87cefa'
    },
    logo: {
        flex: 3, 
        borderWidth: 1, 
        justifyContent: 'center', 
        alignItems: 'center', 
        borderRadius: 150,
    },
    textRequired: {
        paddingLeft: 15,
        color: 'red'
    },
    title: {
        color: 'rgba(0, 0, 121, 0.89)', 
        fontSize: 20, textAlign: 'center'
    }
});

export default EmployeeData