import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Login from '../../screens/Login';
import Signup from '../../screens/SignUp';
import Onboarding from '../../screens/Onboarding';

const LoginStack = createStackNavigator();

const LoginNavigation = () => {
  return (
    <LoginStack.Navigator>
      <LoginStack.Screen
        name="Onboarding"
        component={Onboarding}
        options={{
          header: () => null,
        }}
      />

      <LoginStack.Screen
        name="Login"
        component={Login}
        options={{
          header: () => null,
        }}
      />

      <LoginStack.Screen
        name="Signup"
        component={Signup}
        options={{
          header: () => null,
        }}
      />
    </LoginStack.Navigator>
  );
};

export default LoginNavigation;
