import React, {useState} from 'react';
import {
  Text,
  TextInput,
  View,
  TouchableOpacity,
  ScrollView,
  RefreshControl,
  StatusBar,
} from 'react-native';
import {useForm, Controller} from 'react-hook-form';
import { useNavigation } from '@react-navigation/native';
import {setUser} from '../redux/user';
import { useDispatch } from 'react-redux';
import { setEmployee } from '../redux/employee';
import { setAllPeople } from '../redux/allPeople';
import Icon from 'react-native-vector-icons/Ionicons';
import EmployeeContainer from '../containers/employeeContainer';
import styles from '../styles/homeStyles';

const Home = ({user, refreshing, onRefresh, searchEmployeeDNI, close, control, handleSubmit, allPeople, reset, formState }) => {
    const navigation = useNavigation()
    const dispatch = useDispatch()

    return (
        <View style={[styles.container1, {flexDirection: "column"}]}>
            <StatusBar backgroundColor="black"/>
            <View style={{paddingBottom: 10}}>
                <View style={styles.search}>
                <Controller
                    control={control}
                    rules={{
                    required: true,
                    }}
                    render={({field: {onChange, onBlur, value}}) => (
                    <TextInput
                        style={styles.input}
                        onBlur={onBlur}
                        onChangeText={onChange}
                        value={value}
                        placeholder="Buscar Empleado"
                        keyboardType="numeric"
                    />
                    )}
                    name="BuscarEmpleado"
                />
                <TouchableOpacity style={styles.bottonSearch} onPress={() => navigation.navigate('QRCodeScanner',{searchEmployeeDNI})}>
                    <Icon
                        name="barcode-outline"
                        size={30}
                        color="rgba(0, 0, 121, 0.89)"
                        style={{alignSelf: 'center'}}
                    />
                </TouchableOpacity>

                <TouchableOpacity style={styles.bottonSearch} onPress={handleSubmit(searchEmployeeDNI)}>
                    <Icon name="search-outline"
                        size={30}
                        color="rgba(0, 0, 121, 0.89)"
                        style={{alignSelf: 'center'}}
                    />
                </TouchableOpacity>
                </View>
            </View>
            <View style={{height: '77%'}}>
                <ScrollView showsVerticalScrollIndicator={false}
                    refreshControl={
                        <RefreshControl
                        refreshing={refreshing}
                        onRefresh={onRefresh}
                        />
                    }
                >
                    <View>
                        {allPeople.employees && allPeople.employees.length ? <EmployeeContainer allPeople={allPeople}/>: null}
                    </View>
                </ScrollView>
            </View>
            <View style={[styles.bottonAndText,]}>
                <TouchableOpacity style={styles.botton} onPress={() => close(dispatch, setUser, setEmployee, setAllPeople)}>
                    <Text>Cerrar sesión</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default Home;
