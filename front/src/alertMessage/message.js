import React from "react";
import { showAlert, closeAlert } from "react-native-customisable-alert";
import { useNavigation } from '@react-navigation/native';
import {useDispatch} from 'react-redux';

const navigation = useNavigation()
const dispatch = useDispatch()

export function Message(title, message, alertType, route, value) {
    showAlert({
        title,
        message,
        alertType,
        onPress: () => {
            navigation.navigate(route, {data:value})
            closeAlert()
            }
        }
    )
}

export function requireOptionMessage() {
    return showAlert({
        title:"Error",
        message: "Debe elegir una opción",
        alertType: 'error',
        onPress: () => {
          closeAlert()
        }
    })
}

export function dataSuccessfullyMessage(route) {
    return showAlert({
        title:"Exelente",
        message: "Datos cargados exitosamente",
        alertType: 'success',
        onPress: () => {
            navigation.navigate(route)
          closeAlert()
        }
    })
}

/* showAlert({
    title:"El empleado no existe",
    message: "Desea agregar el empleado a la organización?",
    alertType: 'warning',
    onPress: () => {
        navigation.navigate('EmployeeDataScannerContainer', {data:dni})
        closeAlert()
        }
    }
)

showAlert({
    title:"El empleado no existe",
    message: "Desea agregar el empleado a la organización?",
    alertType: 'warning',
    onPress: () => {
        navigation.navigate('EmployeeDataContainer', {data:dni})
        closeAlert()
        }
    }
) */

export function name(title, message, alertType, data, dni, route) {
    return showAlert({
        title,
        message,
        alertType,
        onPress: () => {
            dispatch(setEmployee({employee: data})), 
            navigation.navigate('CovidEmployeeData1Container',{dni, data}),
            closeAlert()
        }
    }) 
}


/* showAlert({
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
}) */