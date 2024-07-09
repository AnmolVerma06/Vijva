import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

const SOS = () => {
  const navigation = useNavigation(); // Access navigation object
  const route = useRoute();
  const { location } = route.params;

  const handleDistressSignal = () => {
    navigation.navigate('SendingDistressSignal'); // Navigate to SendingDistressSignal screen
  };

  const handleChatWithVolunteer = () => {
   navigation.navigate('ChatwithVolunteer');
  };

  return (
    <View style={styles.container}>
      <View style={styles.headingContainer}>
        <Text style={styles.headingText}>{location}</Text>
        <Image
          source={{ uri: 'https://www.mapsofindia.com/maps/rajasthan/jaipur-city-map.jpg' }}
          style={styles.mapImage}
        />
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={[styles.button, styles.distressButton]} onPress={handleDistressSignal}>
            <Text style={styles.buttonText}>Send Distress Signal</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button, styles.chatButton]} onPress={handleChatWithVolunteer}>
            <Text style={styles.buttonText}>Chat with a Volunteer nearby</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFB7B7',
  },
  headingContainer: {
    backgroundColor: '#5A0000',
    padding: 20,
    alignItems: 'flex-start',
    width: '80%',
    marginBottom: 20,
    marginTop: -100, // Moves the box slightly up
  },
  headingText: {
    color: 'white',
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  mapImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    marginBottom: 10,
  },
  buttonContainer: {
    width: '100%',
    marginTop: 20,
  },
  button: {
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 10,
  },
  distressButton: {
    backgroundColor: '#DD2727', // Red color
  },
  chatButton: {
    backgroundColor: '#EA7373',
    marginTop: 10,
    marginBottom: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default SOS;
