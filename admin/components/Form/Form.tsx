import React, { useState, useEffect } from 'react';
import { ScrollView, Text, StyleSheet } from 'react-native';
import { Input, Button } from 'react-native-elements';
import Animal from '../../../shared/models/Animal';
import styles from './Form.styles';

export default function Form ({ route, navigation }) {
  const width = 250;
  const marginTop = 20;
  const marginLeft = -10;
  const [animal, setAnimal] = useState<Animal>({
    name: '',
    image: '',
    size: '',
    weight: '',
    age: '',
    offspring: '',
    speed: '',
  });

  /* 2. Get the param */
  const { id } = route.params;

  const goBack = () => {
    navigation.navigate('Super Trumpf - Liste');
  }

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        `https://ps-hello-server.onrender.com/api/animals/${id}`
      );
      const data = await response.json();
      setAnimal(data);
    }
    fetchData();
  }, [id]);

  async function save() {
    await fetch(`https://ps-hello-server.onrender.com/api/animals/${animal.id}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(animal),
    });
    goBack();
  }

  const createChangeHandler = name => text =>
    setAnimal(prevAnimal => ({
      ...prevAnimal,
      [name]: name !== name ? parseFloat(text) : text,
    }));

  return (
    <ScrollView>
      <Input
        label="Name"
        placeholder="Name"
        value={animal.name}
        containerStyle={{ width, marginTop, marginLeft }}
        onChangeText={createChangeHandler('name')}
      />
      <Input
        label="Größe"
        placeholder="Größe"
        containerStyle={{ width, marginTop, marginLeft }}
        value={animal.size.toString()}
        onChangeText={createChangeHandler('size')}
      />
      <Input
        label="Gewicht"
        placeholder="Gewicht"
        containerStyle={{ width, marginTop, marginLeft }}
        value={animal.weight.toString()}
        onChangeText={createChangeHandler('weight')}
      />
      <Input
        label="Alter"
        placeholder="Alter"
        containerStyle={{ width, marginTop, marginLeft }}
        value={animal.age.toString()}
        onChangeText={createChangeHandler('age')}
      />
      <Input
        label="Nachkommen"
        placeholder="Nachkommen"
        containerStyle={{ width, marginTop, marginLeft }}
        value={animal.offspring.toString()}
        onChangeText={createChangeHandler('offspring')}
      />
      <Input
        label="Geschwindigkeit"
        placeholder="Geschwindigkeit"
        containerStyle={{ width, marginTop, marginLeft }}
        value={animal.speed.toString()}
        onChangeText={createChangeHandler('speed')}
      />
      
      <Button
        onPress={save}
        title="Speichern und Zurück"
      ></Button>
    </ScrollView>
  );
};
