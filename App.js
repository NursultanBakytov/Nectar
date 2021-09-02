import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import LoginNavigation from './src/navigation/LoginNavigation';
import {createStackNavigator} from '@react-navigation/stack';
import BottomBarNavigation from './src/navigation/BottomBarNavigation';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="LoginNavigation"
          component={LoginNavigation}
          options={{
            header: () => null,
          }}
        />

        <Stack.Screen
          name="BottomBarNavigation"
          component={BottomBarNavigation}
          options={{
            header: () => null,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
