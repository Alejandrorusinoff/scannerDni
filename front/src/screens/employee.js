import React from 'react'
import {Text, View, TouchableOpacity, ScrollView} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
import styles from '../styles/employeeStyles';

const Employee = ({allPeople, navigationSingleEmployee}) => {
    /* console.log(allPeople) */

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