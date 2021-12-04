import React from 'react'
import {Text, View, TouchableOpacity, ScrollView} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import styles from '../styles/employeeStyles';

const Employee = ({allPeople,}) => {
    const navigation = useNavigation()
    
    function navigationSingleEmployee(dataEmployee) {
        navigation.navigate('SingleEmployee', {data: dataEmployee})
    }

    /* function search(idEmployee, organization) {
        const result = organization.employees.filter(employee => employee._id == idEmployee)
        console.log(result)
    } */

    return( 
        <View>  
            {allPeople.employees && allPeople.employees.map((employee, index) => 
            <View key={index}>
            <TouchableOpacity onPress={()=> {navigationSingleEmployee(employee)}} style={{flex: 3, flexDirection: 'row', marginTop: 5, borderRadius: 10, backgroundColor: '#87cefa'}}>
                <View>
                    <Icon name="person" size={80} style={styles.img1} ></Icon>
                </View>
                <View style={{justifyContent: 'space-around'}}>
                    <Text style={styles.title3}>{employee.name} {employee.lastName}</Text>
                    <Text style={styles.title3}>DNI: {employee.dni}</Text>
                    <Text style={styles.title3}>Empresa: {employee.organizationName}</Text>
                </View>
            </TouchableOpacity>
            </View>)} 
        </View>
    )
}

export default Employee