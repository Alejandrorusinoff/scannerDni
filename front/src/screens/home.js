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
import Icon from 'react-native-vector-icons/Ionicons';
import EmployeeContainer from '../containers/employeeContainer';
import styles from '../styles/homeStyles';

const Home = ({user, allPeople, refreshing, onRefresh, searchEmployeeDNI, close}) => {
    const {control, handleSubmit, reset, formState: {errors}} = useForm({
        defaultValues: {
            BuscarEmpleado: '',
        }
    });
    const navigation = useNavigation()
    
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
                        {user.company.employees.length ? <EmployeeContainer allPeople={allPeople}/>: null}
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

export default Home;

