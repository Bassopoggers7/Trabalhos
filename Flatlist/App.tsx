import React from 'react';
import { View, FlatList, Text, StyleSheet } from 'react-native';

const ListaNomes = () => {
  const nomes = [
    'Ana Maria',
    'Bruno Alves',
    'Carlos José',
    'Daniel Martins',
    'Efraim Gomes',
    'Francisco Junior',
  ];

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text>{item}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={nomes}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  item: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});

export default ListaNomes;
