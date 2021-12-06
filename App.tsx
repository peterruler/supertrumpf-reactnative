import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import List from './admin/components/List/List';
import Form from './admin/components/Form/Form'

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="List" component={List} />
        <Stack.Screen name="Formular" component={Form} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
