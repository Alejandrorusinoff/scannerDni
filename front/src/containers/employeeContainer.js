import React from 'react'
import { View } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import Employee from '../screens/employee';
import { useSelector } from 'react-redux';

const EmployeeContainer = () => {
    const {employees} = useSelector(state => state.allPeople)
    const navigation = useNavigation()
    
    function navigationSingleEmployee(dataEmployee) {
        navigation.navigate('SingleEmployeeContainer', {data: dataEmployee})
    }

    return( 
        <View>  
            <Employee navigationSingleEmployee={navigationSingleEmployee} employees={employees}/>
        </View>
    )
}

export default EmployeeContainer