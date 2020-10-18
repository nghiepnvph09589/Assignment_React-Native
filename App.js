import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ListPhoto from './Screen/ListPhoto';
import DetailPhoto from './Screen/DetailPhoto'
import Info from './Screen/Info';
import Contact from './Screen/Contact';

export const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{ title: 'Danh sách ảnh' }} name='ListPhoto' component={ListPhoto} />
        <Stack.Screen options={{ title: 'Chi tiết ảnh' }} name='DetailPhoto' component={DetailPhoto} />
        <Stack.Screen options={{ title: 'Info' }} name='Info' component={Info} />
        <Stack.Screen options={{ title: 'Liên hệ' }} name='Contact' component={Contact} />
        {/* <Stack.Screen options={{title: 'Xem Ảnh'}} name='anh' component={anh} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
