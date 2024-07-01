import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useRoute } from '@react-navigation/native';

 // Default to 'Unknown City' if city is undefined

const SOS = () => {
  const route = useRoute();
  const { location } = route.params || {};

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>{location}</Text>
      {/* Other SOS related content */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default SOS;
