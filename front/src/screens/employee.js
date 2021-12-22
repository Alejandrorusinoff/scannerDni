import { array } from 'prop-types';
import React from 'react'
import {Text, View, TouchableOpacity, ScrollView, Image} from 'react-native'
import { firstNameUp } from '../generalFunctions/generalFunctions';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from '../styles/employeeStyles';

const Employee = ({employees, navigationSingleEmployee}) => {
    
    return( 
        <View>  
            {employees && employees.map((employee, index) => 
            <View key={index}>
            <TouchableOpacity onPress={()=> {navigationSingleEmployee(employee)}} style={styles.containerButton}>
                <View style={styles.container1}>
                    {employee.photo?
                    <Image
                    style={styles.imgEmployee}
                    source={{
                    uri: employee.photo,
                    }}
                />
                :
                <Icon name="person" size={80} style={styles.img1}></Icon>
                    }  
                </View>
                <View style={{justifyContent: 'space-around',}}>
                    <Text style={styles.title3}>{firstNameUp(employee.name)} {firstNameUp(employee.lastName)}</Text>
                    <Text style={styles.title3}>DNI: {employee.dni}</Text>
                    <Text style={styles.title3}>Empresa: {firstNameUp(employee.organizationName)}</Text>
                </View>
            </TouchableOpacity>
            </View>)} 
        </View>
    )
}

export default Employee