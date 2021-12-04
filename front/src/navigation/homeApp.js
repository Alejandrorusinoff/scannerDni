import React, { useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/home';
import SingleEmployee from '../screens/singleEmployee'
import Employee from '../screens/employee';
import EmployeeData from '../screens/employeeData'
import CovidEmployeeData1 from '../screens/covidEmployeeData1';
import CovidEmployeeData2 from '../screens/covidEmployeeData2';
import QRCodeScanner from '../screens/scanner';
import { useSelector } from 'react-redux';



  
const HomeStack = () => {
  const fullName = useSelector(state => state.title)
  const Stack = createStackNavigator();
  /* console.log('title ', fullName) */
  return (
    <Stack.Navigator
      initialRouteName="Home"
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
        name="Home"
        component={Home}
      />
      
      <Stack.Screen
        name="Employee"
        component={Employee}
      />

      <Stack.Screen
        name="SingleEmployee"
        component={SingleEmployee}
        /* options={{ title: `${fullName.name} ${fullName.lastName}`}} */
        options={{ title: 'Detalle del Empleado'}}
      />

      <Stack.Screen
        name="EmployeeData"
        component={EmployeeData}
        options={{ title: 'Complete el formulario'}}
      />

      <Stack.Screen
        name="CovidEmployeeData1"
        component={CovidEmployeeData1}
        options={{ title: 'Complete el formulario'}}
      />

      <Stack.Screen
        name="CovidEmployeeData2"
        component={CovidEmployeeData2}
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

