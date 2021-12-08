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
        <Stack.Screen name="Super Trumpf - Liste" component={List} />
        <Stack.Screen name="Super Trumpf - Formular" component={Form} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
