import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Account from '../../screens/Account';
import Explore from '../../screens/Explore';

const BottomBar = createBottomTabNavigator();

const BottomBarNavigation = () => {
  return (
    <BottomBar.Navigator>
      <BottomBar.Screen
        name="Explore"
        component={Explore}
        options={{
          title: 'Explore',
        }}
      />

      <BottomBar.Screen
        name="Account"
        component={Account}
        options={{
          title: 'Account',
        }}
      />
    </BottomBar.Navigator>
  );
};

export default BottomBarNavigation;
