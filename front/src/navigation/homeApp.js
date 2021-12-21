import React, { useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeContainer from '../containers/homeContainer';
import CamaraContainer from '../containers/camaraContainer';
import EmployeeDataContainer from '../containers/employeeDataContainer';
import CovidEmployeeData1Container from '../containers/covidEmployeeData1Container';
import CovidEmployeeData2Container from '../containers/covidEmployeeData2Container';
import QRCodeScanner from '../screens/scanner';
import EmployeeDataScannerContainer from '../containers/employeeDataScannerContainer'
import SingleEmployeeContainer from '../containers/singleEmployeeContainer';
import LoginContainer from '../containers/loginContainer';
import RecoverPassword from '../screens/ recoverPassword'
import { useSelector } from 'react-redux';
import EmployeeContainer from '../containers/employeeContainer';
  
const HomeStack = () => {
  const fullName = useSelector(state => state.title)
  const Stack = createStackNavigator();
  /* console.log('title ', fullName) */
  return (
    <Stack.Navigator
      initialRouteName="HomeContainer"
      options={{ title: 'My home' }}
      screenOptions={{
        headerStyle: { backgroundColor: '#87cefa' },
        headerTintColor: 'rgba(0, 0, 121, 0.89)',
        headerTitleAlign: 'center',
      }}
    >
      <Stack.Screen
        name="HomeContainer"
        component={HomeContainer}
        options={{ title: 'Bienvenido a la Home' }}
      />
      
      <Stack.Screen
        name="EmployeeContainer"
        component={EmployeeContainer}
      />

      <Stack.Screen
        name="SingleEmployeeContainer"
        component={SingleEmployeeContainer}
        /* options={{ title: `${fullName.name} ${fullName.lastName}`}} */
        options={{ title: 'Detalle del Empleado'}}
      />

      <Stack.Screen
        name="EmployeeDataContainer"
        component={EmployeeDataContainer}
        options={{ title: 'Complete el formulario'}}
      />

      <Stack.Screen
        name="EmployeeDataScannerContainer"
        component={EmployeeDataScannerContainer}
        options={{ title: 'Complete el formulario'}}
      />

      <Stack.Screen
        name="CovidEmployeeData1Container"
        component={CovidEmployeeData1Container}
        options={{ title: 'Complete el formulario'}}
      />

      <Stack.Screen
        name="CovidEmployeeData2Container"
        component={CovidEmployeeData2Container}
        options={{ title: 'Complete el formulario'}}
      />

      <Stack.Screen
        name="QRCodeScanner"
        component={QRCodeScanner}
        options={{ 
          title: 'Escaneando DNI',
          headerShown: false
        }}
      />

      <Stack.Screen
        name="LoginContainer"
        component={LoginContainer}
      />

      <Stack.Screen
        name="RecoverPassword"
        component={RecoverPassword}
      />

      <Stack.Screen
        name="CamaraContainer"
        component={CamaraContainer}
        options={{ 
          title: 'Camara',
          headerShown: false
        }}
      />
    </Stack.Navigator>
  );
}

export default HomeStack

