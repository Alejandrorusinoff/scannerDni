import React from "react";
import { showAlert, closeAlert } from "react-native-customisable-alert";
import { useNavigation } from '@react-navigation/native';

const navigation = useNavigation()

export function createEmployeeMessage(params) {
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