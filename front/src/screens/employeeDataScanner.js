import React from 'react'
import {Text, TextInput, View, TouchableOpacity, ScrollView} from 'react-native'
import { useForm, Controller } from "react-hook-form";
import { setEmployee } from '../redux/employee';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios'
import styles from '../styles/employeeDataStyles';


const EmployeeDataScanner = ({navigation, route}) => {
    const user = useSelector(state => state.user)
    const dni = route.params.data.BuscarEmpleado
    const dataScannerDni = route.params.data.arrDNI
    const { control, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            name: dataScannerDni[2],
            lastName: dataScannerDni[1],
            dni: dni
        }
    })

    const dispatch = useDispatch()

    function saveEmployee({name, lastName, dni, age, diretion, organizationName, organizationId = user.company._id}) {
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

export default EmployeeDataScanner