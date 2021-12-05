import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useSelector } from 'react-redux';
import Login from './src/screens/login';
import LoginContainer from './src/containers/loginContainer';
import HomeApp from './src/navigation/homeApp';
import CustomisableAlert from "react-native-customisable-alert";


const App = () => {
  const Stack = createNativeStackNavigator()
  const {token} = useSelector(state => state.user)
  return (
    <>
      <NavigationContainer>
        {token? <HomeApp/>: <LoginContainer/>}
        <CustomisableAlert titleStyle={{fontSize: 18,fontWeight: "bold"}}/>
      </NavigationContainer>
    </>
  );
};

export default App;
//adb reverse tcp:3001 tcp:3001
