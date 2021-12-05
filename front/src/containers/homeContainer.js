import React, {useState, useEffect, useCallback} from 'react';
import { View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {useForm} from 'react-hook-form';
import {useDispatch, useSelector} from 'react-redux';
import {setUser} from '../redux/user';
import {setAllPeople} from '../redux/allPeople';
import { useNavigation } from '@react-navigation/native';
import { showAlert, closeAlert } from "react-native-customisable-alert";
import axios from 'axios';
import Home from '../screens/home';


const Tab = createBottomTabNavigator();

const HomeContainer = () => {
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
                            navigation.navigate('EmployeeDataScanner', {data:dni})
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
                            navigation.navigate('EmployeeData', {data:dni})
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
        <View>
            <Home/>
        </View>
    );
};

export default HomeContainer;

