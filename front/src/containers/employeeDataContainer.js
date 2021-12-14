import React from 'react'
import { View } from 'react-native'
import { setEmployee } from '../redux/employee';
import { useDispatch, useSelector } from 'react-redux';
import { postEmployeeAdd } from '../axiosRequests/request'
import { lowerValidation } from '../generalFunctions/functions';
import EmployeeData from '../screens/employeeData';
import styles from '../styles/employeeDataStyles';

const EmployeeDataContainer = ({navigation, route}) => {
    const user = useSelector(state => state.user)
    const dni = route.params.data.BuscarEmpleado
    const dispatch = useDispatch()

    function saveEmployee({name, lastName, dni, age, diretion, organizationName, organizationId = user.company._id}) {
        postEmployeeAdd(
            lowerValidation(name), 
            lowerValidation(lastName), 
            dni, 
            age, 
            lowerValidation(diretion), 
            lowerValidation(organizationName), 
            organizationId, 
            user)
        .then(({data}) => {
            dispatch(setEmployee(data)), 
            navigation.navigate('CovidEmployeeData1Container')
        })
        .catch(err => console.log(err))
    }

    return(    
        <View style={styles.container}>
            <EmployeeData saveEmployee={saveEmployee} dni={dni}/>
        </View>
    )
}

export default EmployeeDataContainer