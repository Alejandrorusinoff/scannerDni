import React from 'react'
import { View } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import Employee from '../screens/employee';
import styles from '../styles/employeeStyles';

const EmployeeContainer = ({allPeople,}) => {
    const navigation = useNavigation()
    
    function navigationSingleEmployee(dataEmployee) {
        navigation.navigate('SingleEmployeeContainer', {data: dataEmployee})
    }

    return( 
        <View>  
            <Employee navigationSingleEmployee={navigationSingleEmployee} allPeople={allPeople}/>
        </View>
    )
}

export default EmployeeContainer