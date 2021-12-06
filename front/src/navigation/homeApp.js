import React, { useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/home';
import HomeContainer from '../containers/homeContainer';
import Employee from '../screens/employee';
import EmployeeDataContainer from '../containers/employeeDataContainer';
import CovidEmployeeData1Container from '../containers/covidEmployeeData1Container';
import CovidEmployeeData2Container from '../containers/covidEmployeeData2Container';
import QRCodeScanner from '../screens/scanner';
import EmployeeDataScannerContainer from '../containers/employeeDataScannerContainer'
import SingleEmployeeContainer from '../containers/singleEmployeeContainer';
import { useSelector } from 'react-redux';
  
const HomeStack = () => {
  const fullName = useSelector(state => state.title)
  const Stack = createStackNavigator();
  /* console.log('title ', fullName) */
  return (
    <Stack.Navigator
      initialRouteName="HomeContainer"
      /* screenOptions={{
        headerStyle: { backgroundColor: '#BFD732' },
        headerTintColor: '#F5F6F7',
        headerTitleAlign: 'center',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }} */
    >
      <Stack.Screen
        name="HomeContainer"
        component={HomeContainer}
      />
      
      <Stack.Screen
        name="Employee"
        component={Employee}
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
        options={{ title: 'Escaneando DNI'}}
      />
      
    </Stack.Navigator>
  );
}

export default HomeStack

