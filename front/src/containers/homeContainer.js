import React, {useState, useEffect, useCallback} from 'react';
import { View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {useForm} from 'react-hook-form';
import {useDispatch, useSelector} from 'react-redux';
import {setAllPeople} from '../redux/allPeople';
import { setEmployee } from '../redux/employee';
import { useNavigation } from '@react-navigation/native';
import { showAlert, closeAlert } from "react-native-customisable-alert";
import { postSearchEmployeeByDNI, postAssociateEmployee, postOrganizationEmployee } from '../axiosRequests/request'
import { close } from '../generalFunctions/generalFunctions'
import Home from '../screens/home';
import styles from '../styles/homeStyles';

const Tab = createBottomTabNavigator();

const HomeContainer = () => {
    const {control, handleSubmit, reset, formState: {errors}} = useForm();
    const {user, imgEmployee, employee} = useSelector(state => state);
    const employees = useSelector(state => state.employee)
    const [refreshing, setRefreshing] = useState(false);
    const dispatch = useDispatch();

    const navigation = useNavigation()
    
    const onRefresh = useCallback(() => {
        postOrganizationEmployee(user)
        .then(({data}) => {dispatch(setAllPeople(data.employees))});
    }, [user.company.employees.length, imgEmployee, employee]);


    function searchEmployeeDNI(dni) {
        //busca al empleado por dni
        postSearchEmployeeByDNI(dni,user)
        .then(({data}) => {
            // si el empleado no existe, te envia a la vista para q se cree apretando aceptar en el msj A
            if(!data._id){
                if (Array.isArray(dni.arrDNI)) {
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
                                dispatch(setEmployee({employee: data})), 
                                navigation.navigate('CovidEmployeeData1Container',{dni, data}),
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
                                postAssociateEmployee(dni, user, data)
                                .then(() => { 
                                    showAlert({
                                        title:"El empleado existe",
                                        message: "Desea agregar datos de covid",
                                        alertType: 'warning',
                                        onPress: () => {
                                            dispatch(setEmployee({employee: data})), 
                                            navigation.navigate('CovidEmployeeData1Container'),
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
        .catch(err => console.log(err))
    }

    useEffect(() => {
        postOrganizationEmployee(user)
        .then(({data}) => {dispatch(setAllPeople(data))});
    },[user.company.employees.length, imgEmployee, employee])

    return (
        <View style={styles.container}>
            <Home user={user} refreshing={refreshing} onRefresh={onRefresh} searchEmployeeDNI={searchEmployeeDNI} close={close} control={control} handleSubmit={handleSubmit} reset={reset}/>
        </View>
    );
};

export default HomeContainer;

