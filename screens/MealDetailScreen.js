import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const MealDetailScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text>meal detail screen</Text>
      <Button
        title='Go Back to categories'
        onPress={() => props.navigation.popToTop()}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default MealDetailScreen;
