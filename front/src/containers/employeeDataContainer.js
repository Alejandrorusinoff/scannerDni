import React from 'react'
import { View } from 'react-native'
import { useForm } from "react-hook-form";
import { setEmployee } from '../redux/employee';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios'
import EmployeeData from '../screens/employeeData';
import styles from '../styles/employeeDataStyles';

const EmployeeDataContainer = ({navigation, route}) => {
    const user = useSelector(state => state.user)
    const dni = route.params.data.BuscarEmpleado
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
            <EmployeeData saveEmployee={saveEmployee} dni={dni}/>
        </View>
    )
}

export default EmployeeDataContainer