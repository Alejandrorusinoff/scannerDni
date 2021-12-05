import React, {useState, useEffect, useCallback} from 'react';
import {
  Text,
  TextInput,
  View,
  TouchableOpacity,
  ScrollView,
  RefreshControl,
} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {useForm, Controller} from 'react-hook-form';
import {useDispatch, useSelector} from 'react-redux';
import {setUser} from '../redux/user';
import {setAllPeople} from '../redux/allPeople';
import { useNavigation } from '@react-navigation/native';
import { showAlert, closeAlert } from "react-native-customisable-alert";
import Icon from 'react-native-vector-icons/Ionicons';
import axios from 'axios';
import Employee from './employee';
import styles from '../styles/homeStyles';

const Tab = createBottomTabNavigator();

const Home = () => {
    const {user, employee, allPeople} = useSelector(state => state);
    const [refreshing, setRefreshing] = useState(false);
    const [getScannerDNI, setGetScannerDNI] = useState([])
    const dispatch = useDispatch();
    const {control, handleSubmit, reset, formState: {errors}} = useForm({
        defaultValues: {
            BuscarEmpleado: '',
        }
    });


    /* const wait = (timeout) => {
        return new Promise(resolve => setTimeout(resolve, timeout));
    } */
    const navigation = useNavigation()
    
    const onRefresh = useCallback(() => {
        axios.post(`http://localhost:3001/api/employee/organizationEmployee`,
        {organizationId: user.company._id}, 
        {headers: {authorization: `Bearer ${user.token}`},
        }).then(({data}) => dispatch(setAllPeople(data)));
    }, []);


    function searchEmployeeDNI(dni) {
        //busca al empleado por dni
        axios.post('http://localhost:3001/api/employee/searchEmployeeByDNI',
            {
                dni: dni.BuscarEmpleado,
                organizationId: user.company._id
            },
            {headers: {authorization: `Bearer ${user.token}`}},
        )
        .then(({data}) => {
            // si el empleado no existe, te envia a la vista para q se cree apretando aceptar en el msj
            if(!data._id){
                if (!!dni.arrDNI.length) {
                    showAlert({
                        title:"El empleado no existe",
                        message: "Desea agregar el empleado a la organización?",
                        alertType: 'warning',
                        onPress: () => {
                            navigation.navigate('EmployeeDataScannerContainer', {data:dni})
                            closeAlert()
                            }
                        }
                    )
                }
                else {
                    showAlert({
                        title:"El empleado no existe",
                        message: "Desea agregar el empleado a la organización?",
                        alertType: 'warning',
                        onPress: () => {
                            navigation.navigate('EmployeeDataContainer', {data:dni})
                            closeAlert()
                            }
                        }
                    )
                }
            }
            // si el empleado existe hay 2 casos.
            // 1do caso- el empleado esta vinculado a la organizacion
            // 2er caso- el empleado no esta vinculado a la organizacion
            else {
                for (let i = 0; i < data.organizationId.length; i++) {
                    if (data.organizationId[i] == user.company._id) {
                        showAlert({
                            title:"El empleado existe",
                            message: "Desea agregar datos de covid",
                            alertType: 'warning',
                            onPress: () => {
                                navigation.navigate('CovidEmployeeData1',{dni, data}),
                                closeAlert()
                            }
                        }) 
                    }
                    else{
                        // el empleado no esta vinculado a la organizacion
                        showAlert({
                            title:"El empleado existe",
                            message: "Desea vincular el empleado a la organización?",
                            alertType: 'warning',
                            onPress: () => {
                                axios.post('http://localhost:3001/api/employee/associateEmployee', 
                                    {dni: dni.BuscarEmpleado, organizationId: user.company._id, idEmployee: data._id}, 
                                    {headers: {authorization: `Bearer ${user.token}`}},
                                )
                                .then(() => { 
                                    showAlert({
                                        title:"El empleado existe",
                                        message: "Desea agregar datos de covid",
                                        alertType: 'warning',
                                        onPress: () => {
                                            navigation.navigate('CovidEmployeeData1'),
                                            closeAlert()
                                        }
                                    }) 
                                })
                                .catch(err => console.log(err))
                            }
                        }) 
                    }
                } 
            }
        })
        .then(() => reset({BuscarEmpleado: ''})) 
    }

    function close() {
        dispatch(setUser(''));
    }

    useEffect(() => {
        axios.post(`http://localhost:3001/api/employee/organizationEmployee`,
        {organizationId: user.company._id}, 
        {headers: {authorization: `Bearer ${user.token}`},
    }).then(({data}) => dispatch(setAllPeople(data)));
    },[user.company.employees.length])

    return (
        <View style={styles.container}>
            <View>
                <View style={styles.search}>
                <Controller
                    control={control}
                    rules={{
                    required: true,
                    }}
                    render={({field: {onChange, onBlur, value}}) => (
                    <TextInput
                        style={styles.input}
                        onBlur={onBlur}
                        onChangeText={onChange}
                        value={value}
                        placeholder="Buscar Empleado"
                        keyboardType="numeric"
                    />
                    )}
                    name="BuscarEmpleado"
                />
                    <Icon
                        name="barcode-outline"
                        size={30}
                        color="rgba(0, 0, 121, 0.89)"
                        style={{alignSelf: 'center'}}
                        onPress={() => navigation.navigate('QRCodeScanner',{searchEmployeeDNI})}
                    />
                    <Icon name="search-outline"
                        size={30}
                        color="rgba(0, 0, 121, 0.89)"
                        style={{alignSelf: 'center', marginLeft: 10}}
                        onPress={handleSubmit(searchEmployeeDNI)}
                    />
                </View>
            </View>
            <View style={{height: 380}}>
                <ScrollView showsVerticalScrollIndicator={false}
                    refreshControl={
                        <RefreshControl
                        refreshing={refreshing}
                        onRefresh={onRefresh}
                        />
                    }
                >
                    <View>
                        {user.company.employees.length ? <Employee allPeople={allPeople}/>: null}
                    </View>
                </ScrollView>
            </View>
            <View style={styles.bottonAndText}>
                <TouchableOpacity
                    style={styles.botton}
                    onPress={handleSubmit(searchEmployeeDNI)}>
                    <Text>Registrar Empleado</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.botton} onPress={() => close()}>
                    <Text>Cerrar sesión</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default Home;

