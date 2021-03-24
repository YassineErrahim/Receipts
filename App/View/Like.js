import {View, Text} from 'react-native';
import Home from './Home';
import Search from './Search';
import * as React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
function HomeScreen() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Home!</Text>
      </View>
    );
  }
  
  function SettingsScreen() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Settings!</Text>
      </View>
    );
  }
  
  const Tab = createMaterialTopTabNavigator();

const Like = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Settings" component={SettingsScreen} />
        </Tab.Navigator>
      );
}
const TATA = () => {
    return (
        <View style ={{flex:1,justifyContent:'center',alignItems:'center'}}>
            <Text>TATA</Text>
        </View>
    );
}
export default Like;