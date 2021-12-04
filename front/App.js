import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useSelector } from 'react-redux';
import Login from './src/screens/login';
import HomeApp from './src/navigation/homeApp';
import CustomisableAlert from "react-native-customisable-alert";


const App = () => {
  const Stack = createNativeStackNavigator()
  const {token} = useSelector(state => state.user)
  return (
    <>
      <NavigationContainer>
        {token? <HomeApp/>: <Login/>}
        <CustomisableAlert titleStyle={{fontSize: 18,fontWeight: "bold"}}/>
        
        {/* <Stack.Screen name='Login' component={Login} headerShown={false}/>
        <Stack.Screen name='Home' component={Home}/>
        <Stack.Screen name='SingleEmployee' component={SingleEmployee}/>
        <Stack.Screen name='CovidEmployeeData1' component={CovidEmployeeData1}/>
        <Stack.Screen name='CovidEmployeeData2' component={CovidEmployeeData2}/> */}
        
      </NavigationContainer>
    </>
  );
};

export default App;
//adb reverse tcp:3001 tcp:3001
