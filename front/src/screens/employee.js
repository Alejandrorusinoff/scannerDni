import React from 'react'
import {Text, TextInput, StyleSheet, View, TouchableOpacity, ScrollView} from 'react-native'
import { useForm, Controller } from "react-hook-form";
import Icon from 'react-native-vector-icons/Ionicons';
import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

const Employee = ({allPeople,}) => {
    /* const {user, employee, allPeople} = useSelector(state => state); */
    const navigation = useNavigation()
    
    function navigationSingleEmployee(dataEmployee) {
        navigation.navigate('SingleEmployee', {data: dataEmployee})
    }

    function search(idEmployee, organization) {
        const result = organization.employees.filter(employee => employee._id == idEmployee)
        console.log(result)
    }

    console.log('allPeople -------->', allPeople)

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


const styles = StyleSheet.create({
    input: {
        height: 50,
        margin: 12,
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,
        borderColor: 'rgba(0, 0, 121, 0.89)',
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        marginHorizontal: 16,
        padding: 10,
    },
    bottonAndText: {
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 20,
    },
    botton: {
        padding: 10,
        borderRadius: 10,
        alignItems: 'center',
        backgroundColor: '#87cefa',
        marginTop: '4%'
    },
    logo: {
        flex: 3, 
        borderWidth: 1, 
        justifyContent: 'center', 
        alignItems: 'center', 
        borderRadius: 150,
    },
    textRequired: {
        paddingLeft: 15,
        color: 'red'
    },
    title: {
        color: 'rgba(0, 0, 121, 0.89)', 
        fontSize: 20, textAlign: 'center'
    },
    title1: {
        color: 'rgba(0, 0, 121, 0.89)', 
        fontSize: 30, 
        textAlign: 'center',
        marginBottom: '5%',
    },
    title3: {
        color: 'rgba(0, 0, 121, 0.89)', 
        fontSize: 15, 
        padding: 0,
    },
    img: {
        flex: 3, 
        marginTop: '18%', 
        marginBottom: '18%'
    },
    img1: {
        color: '#6495ed', 
        textAlign: 'left',
        alignSelf: 'baseline'
    }
});

export default Employee