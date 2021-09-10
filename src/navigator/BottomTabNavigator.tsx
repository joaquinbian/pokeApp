import React from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';

import StackNavigator from './StackNavigator';
import SearchScreen from '../screens/SearchScreen';

const TabNavigator = createMaterialBottomTabNavigator();
const BottomTabNavigator = () => {
  return (
    <TabNavigator.Navigator>
      <TabNavigator.Screen name="home" component={StackNavigator} />
      <TabNavigator.Screen name="search" component={SearchScreen} />
    </TabNavigator.Navigator>
  );
};

export default BottomTabNavigator;
