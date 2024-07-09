import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ChatWithVolunteer = () => {
  const navigation = useNavigation();

  // Function to navigate back to the previous screen
  const goBack = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Chat with a Volunteer Nearby</Text>
      <Text style={styles.description}>
        Connect with a nearby volunteer to get assistance.
      </Text>
      {/* Placeholder for chat functionality */}
      <TouchableOpacity style={styles.button} onPress={goBack}>
        <Text style={styles.buttonText}>Back</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#DD2727',
  },
  description: {
    fontSize: 18,
    marginBottom: 20,
    paddingHorizontal: 20,
    textAlign: 'center',
    color: '#5A0000',
  },
  button: {
    backgroundColor: '#EA7373',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
});

export default ChatWithVolunteer;
