import React from 'react'
import { View } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import Employee from '../screens/employee';

const EmployeeContainer = ({allPeople,}) => {
    const navigation = useNavigation()
    
    function navigationSingleEmployee(dataEmployee) {
        navigation.navigate('SingleEmployee', {data: dataEmployee})
    }

    return( 
        <View>  
            <Employee/>
        </View>
    )
}

export default EmployeeContainer