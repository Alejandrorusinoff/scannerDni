import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoginContainer from '../containers/loginContainer';
import RecoverPassword from '../screens/recoverPassword'
  
const LoginStack = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator
      initialRouteName="LoginContainer"
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
        name="LoginContainer"
        component={LoginContainer}
      />

      <Stack.Screen
        name="RecoverPassword"
        component={RecoverPassword}
      />
      
    </Stack.Navigator>
  );
}

export default LoginStack
