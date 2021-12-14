import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useSelector } from 'react-redux';
import LoginContainer from './src/containers/loginContainer';
import LoginStack from './src/navigation/loginStack';
import HomeApp from './src/navigation/homeApp';
import RecoverPasswordContainer from './src/screens/recoverPassword';
import linking from './src/deepLinks/linking';
import CustomisableAlert from "react-native-customisable-alert";
import FlashMessage from "react-native-flash-message";


const App = () => {
  const Stack = createNativeStackNavigator()
  const {token} = useSelector(state => state.user)
  return (
    <>
      <NavigationContainer /* linking={linking} */>
        {token? <HomeApp/>: <LoginStack/>}
        <CustomisableAlert titleStyle={{fontSize: 18,fontWeight: "bold"}}/>
        <FlashMessage position="top" />
      </NavigationContainer>
    </>
  );
};

export default App;
//adb reverse tcp:3001 tcp:3001
