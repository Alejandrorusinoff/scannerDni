import React, {useState, useEffect, useCallback} from 'react';
import {
  Text,
  TextInput,
  StyleSheet,
  View,
  TouchableOpacity,
  ScrollView,
  RefreshControl,
  ImageBackground,
} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {useForm, Controller} from 'react-hook-form';
import {useDispatch, useSelector} from 'react-redux';
import {setUser} from '../redux/user';
import {setAllPeople} from '../redux/allPeople';
import { useNavigation } from '@react-navigation/native';
import { showAlert, closeAlert } from "react-native-customisable-alert";
import Icon from 'react-native-vector-icons/Ionicons';
import axios from 'axios';
import Employee from './employee';


const Tab = createBottomTabNavigator();

const Home = () => {
    const {control, handleSubmit, reset, formState: {errors}} = useForm({
        defaultValues: {
            BuscarEmpleado: '',
        }
    });

    const {user, employee, allPeople} = useSelector(state => state);
    const [refreshing, setRefreshing] = useState(false);
    const [getScannerDNI, setGetScannerDNI] = useState([])
    const dispatch = useDispatch();

    const wait = (timeout) => {
        return new Promise(resolve => setTimeout(resolve, timeout));
    }
    const navigation = useNavigation()
    //
    const onRefresh = useCallback(() => {
        axios.post(`http://localhost:3001/api/employee/organizationEmployee`,
        {organizationId: user.company._id}, 
        {headers: {authorization: `Bearer ${user.token}`},
        }).then(({data}) => dispatch(setAllPeople(data)));
    }, []);

    console.log(allPeople)

    function searchEmployeeDNI(dni) {
        console.log("searchEmployeeDNI ---> ", dni.BuscarEmpleado)
        //busca al empleado por dni
        axios.post('http://localhost:3001/api/employee/searchEmployeeByDNI',
            {
                dni: dni.BuscarEmpleado,
                organizationId: user.company._id
            },
            {headers: {authorization: `Bearer ${user.token}`}},
        )
        .then(({data}) => {
            console.log("dni empleado no existe ---> ", dni)
            // si el empleado no existe, te envia a la vista para q se cree apretando aceptar en el msj
            if(!data._id){
                showAlert({
                title:"El empleado no existe",
                message: "Desea agregar el empleado a la organización?",
                alertType: 'warning',
                onPress: () => {
                    navigation.navigate('EmployeeData', {data:dni})
                    closeAlert()
                    }
                }
            )}
            // si el empleado existe hay 2 casos.
            // 1do caso- el empleado esta vinculado a la organizacion
            // 2er caso- el empleado no esta vinculado a la organizacion
            else {
                for (let i = 0; i < data.organizationId.length; i++) {
                    if (data.organizationId[i] == user.company._id) {
                        showAlert({
                            title:"El empleado existe",
                            message: "Desea agregar datos de covid",
                            alertType: 'warning',
                            onPress: () => {
                                navigation.navigate('CovidEmployeeData1',{dni, data}),
                                closeAlert()
                            }
                        }) 
                    }
                    else{
                        // el empleado no esta vinculado a la organizacion
                        showAlert({
                            title:"El empleado existe",
                            message: "Desea vincular el empleado a la organización?",
                            alertType: 'warning',
                            onPress: () => {
                                axios.post('http://localhost:3001/api/employee/associateEmployee', 
                                    {dni: dni.BuscarEmpleado, organizationId: user.company._id, idEmployee: data._id}, 
                                    {headers: {authorization: `Bearer ${user.token}`}},
                                )
                                .then(() => { 
                                    showAlert({
                                        title:"El empleado existe",
                                        message: "Desea agregar datos de covid",
                                        alertType: 'warning',
                                        onPress: () => {
                                            navigation.navigate('CovidEmployeeData1'),
                                            closeAlert()
                                        }
                                    }) 
                                })
                                .catch(err => console.log(err))
                            }
                        }) 
                    }
                } 
            }
        })
        .then(() => reset({BuscarEmpleado: ''})) 
    }

    function close() {
        dispatch(setUser(''));
    }

    useEffect(() => {
        axios.post(`http://localhost:3001/api/employee/organizationEmployee`,
        {organizationId: user.company._id}, 
        {headers: {authorization: `Bearer ${user.token}`},
    }).then(({data}) => dispatch(setAllPeople(data)));
    },[user.company.employees.length])

    return (
        <View style={styles.container}>
            <View>
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
                    <Icon
                        name="barcode-outline"
                        size={30}
                        color="rgba(0, 0, 121, 0.89)"
                        style={{alignSelf: 'center'}}
                        onPress={() => navigation.navigate('QRCodeScanner',{searchEmployeeDNI})}
                    />
                    <Icon name="search-outline"
                        size={30}
                        color="rgba(0, 0, 121, 0.89)"
                        style={{alignSelf: 'center', marginLeft: 10}}
                        onPress={handleSubmit(searchEmployeeDNI)}
                    />
                </View>
            </View>
            <View style={{height: 380}}>
                <ScrollView showsVerticalScrollIndicator={false}
                    refreshControl={
                        <RefreshControl
                        refreshing={refreshing}
                        onRefresh={onRefresh}
                        />
                    }
                >
                    <View>
                        {user.company.employees.length ? <Employee allPeople={allPeople}/>: null}
                    </View>
                </ScrollView>
            </View>
            <View style={styles.bottonAndText}>
                <TouchableOpacity
                    style={styles.botton}
                    onPress={handleSubmit(searchEmployeeDNI)}>
                    <Text>Registrar Empleado</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.botton} onPress={() => close()}>
                    <Text>Cerrar sesión</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};


         
          

const styles = StyleSheet.create({
    input: {
        height: 50,
        width: '75%',
        margin: 0,
        /* borderWidth: 1, */
        /* borderRadius: 10, */
        padding: 10,
        borderColor: 'rgba(0, 0, 121, 0.89)',
    },
    container: {
        /* flex: 1, */
        /* justifyContent: 'center', */
        marginHorizontal: 16,
        padding: 10,
        height: '100%',
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
        marginBottom: 5,
    },
    logo: {
        flex: 3,
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height: 200,
        borderRadius: 150,
    },
    textRequired: {
        paddingLeft: 15,
        color: 'red',
    },
    title1: {
        color: 'rgba(0, 0, 121, 0.89)',
        fontSize: 30,
        textAlign: 'center',
    },
    search: {
        borderWidth: 1,
        flexDirection: 'row',
        borderColor: 'rgba(0, 0, 121, 0.89)',
        borderRadius: 50,
        marginTop: '3%',
    },
    img: {
        flex: 3,
        marginTop: '18%',
        marginBottom: '18%',
    },
    image: {
        height: 425,
        justifyContent: "center",
        color: 'red'
    },
});

export default Home;

