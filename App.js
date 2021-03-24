import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {DeliveryScreen, Order, Tabs} from './App/View';
import TabsController from './App/Controller/TabsController';
import OrderController from './App/Controller/OrderController';


const Stack = createStackNavigator();



const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator 
          screenOptions={{
            headerShown:false,
          }}
          initialRouteName={'Tabs'}
        >
          <Stack.Screen name='Tabs' component={TabsController}/>
          <Stack.Screen name='Delivery' component={DeliveryScreen}/> 
          <Stack.Screen name='Order' component={OrderController}/>

      </Stack.Navigator>
    </NavigationContainer>
  );
}


export default App;