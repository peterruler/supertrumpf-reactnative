import React, { useState, useEffect } from "react";
import { FlatList, StyleSheet, Text, View, ScrollView, TextInput } from 'react-native'
import { Input, Button } from 'react-native-elements';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Animal from '../../../shared/models/Animal';
import styles from './List.styles';

export default function List({ navigation }) {
  const [filter, setFilter] = useState('');
  const [animals, setAnimals] = useState<Animal[]>([]);
  useEffect(() => {
    async function fetchData() {
      const response = await fetch('https://ps007server.herokuapp.com/api/animals');
      const data = await response.json();
      setAnimals(data);
    }
    fetchData();
  }, []);
  return (<View>
    <TextInput
      autoCapitalize="none"
      value={filter}
      onChangeText={(text: string) => setFilter(text)}
      placeholder="Suche"
      style={styles.search}
    />
    <FlatList
      style={styles.list}
      ItemSeparatorComponent={() => <View style={styles.separator} />}
      data={animals.filter(animal =>
        animal.name.toLowerCase().includes(filter.toLowerCase())
      )}
      keyExtractor={item => item.id.toString()}
      renderItem={({ item }) => (
        <View style={styles.listItem}>
          <Text style={styles.headline}
            onPress={() => navigation.navigate('Super Trump - Formular', { id: item.id })}>{item.name} ></Text>
        </View>
      )}
    ></FlatList>
  </View>
  );
}