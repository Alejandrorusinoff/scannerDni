import React from 'react'
import { View } from 'react-native'
import { setEmployee } from '../redux/employee';
import { useDispatch, useSelector } from 'react-redux';
import { postEmployeeAdd } from '../axiosRequests/request'
import EmployeeDataScanner from '../screens/employeeDataScanner'
import styles from '../styles/employeeDataStyles';

const EmployeeDataScannerContainer = ({navigation, route}) => {
    const user = useSelector(state => state.user)
    const dni = route.params.data.BuscarEmpleado
    const dataScannerDni = route.params.data.arrDNI
    const dispatch = useDispatch()

    function saveEmployee({name, lastName, dni, age, diretion, organizationName, organizationId = user.company._id}) {
        postEmployeeAdd(name, lastName, dni, age, diretion, organizationName, organizationId, user)
        .then(({data}) => {
            dispatch(setEmployee(data)), 
            navigation.navigate('CovidEmployeeData1Container')
        })
        .catch(err => console.log(err))
    }

    return(    
        <View  style={styles.container}>
            <EmployeeDataScanner saveEmployee={saveEmployee} dni={dni} dataScannerDni={dataScannerDni}/>
        </View>
    )
}

export default EmployeeDataScannerContainer