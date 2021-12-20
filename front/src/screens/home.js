import React from 'react';
import {
  Text,
  TextInput,
  View,
  TouchableOpacity,
  ScrollView,
  RefreshControl,
} from 'react-native';
import {useForm, Controller} from 'react-hook-form';
import { useNavigation } from '@react-navigation/native';
import {setUser} from '../redux/user';
import Icon from 'react-native-vector-icons/Ionicons';
import EmployeeContainer from '../containers/employeeContainer';
import styles from '../styles/homeStyles';
import { useDispatch } from 'react-redux';

const Home = ({user, refreshing, onRefresh, searchEmployeeDNI, close, resetear}) => {
    const {control, handleSubmit, reset, formState: {errors}} = useForm({
        defaultValues: {
            BuscarEmpleado: '',
        }
    });
    const navigation = useNavigation()
    const dispatch = useDispatch()
    
    return (
        <View>
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
            <View style={{height: 410}}>
                <ScrollView showsVerticalScrollIndicator={false}
                    refreshControl={
                        <RefreshControl
                        refreshing={refreshing}
                        onRefresh={onRefresh}
                        />
                    }
                >
                    <View>
                        {user.company.employees.length ? <EmployeeContainer/>: null}
                    </View>
                </ScrollView>
            </View>
            <View style={styles.bottonAndText}>
                <TouchableOpacity style={styles.botton} onPress={() => close(dispatch, setUser)}>
                    <Text>Cerrar sesión</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default Home;

