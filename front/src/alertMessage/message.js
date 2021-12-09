import React from "react";
import { showAlert, closeAlert } from "react-native-customisable-alert";
import { showMessage } from "react-native-flash-message";

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

export function mensaje(nav1, nav2) {
    console.log(nav1.nav2)

     showAlert({
        title:"El empleado no existe",
        message: "Desea agregar el empleado a la organización?",
        alertType: 'warning',
        onPress: () => {
            nav1+'.'+nav2('EmployeeDataScannerContainer')
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

export function msjFlash(data, type, icon) {
    showMessage({
        message: data,
        type: type,
        icon: icon
    })
}