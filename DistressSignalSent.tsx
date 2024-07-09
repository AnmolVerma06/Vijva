import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation, StackActions } from '@react-navigation/native';

const DistressSignalSent = () => {
  const navigation = useNavigation();

  const handleChatWithVolunteer = () => {
    navigation.navigate('ChatWithVolunteer');
  };

  const handleGoBackToProfile = () => {
    // Replace the current screen with the 'Profile' screen using StackActions
    navigation.dispatch(StackActions.replace('Profile'));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Distress Signal Sent</Text>
      <Text style={styles.quoteText}>"We will reach out to you as soon as possible from Team Vijva"</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Resources')}
      >
        <Text style={styles.buttonText}>Resources</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.button, styles.chatButton]} onPress={handleChatWithVolunteer}>
        <Text style={styles.buttonText}>Chat with a Volunteer nearby</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('GetHelplineInformation')}>
        <Text style={styles.buttonText}>Get Helpline Information</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.helpButton} onPress={() => navigation.navigate('NeedHelp')}>
        <Text style={styles.buttonText}>Need Help?</Text>
      </TouchableOpacity>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFB7B7', // Background color
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#DD2727',
  },
  quoteText: {
    fontSize: 18,
    fontStyle: 'italic',
    marginBottom: 20,
    textAlign: 'center',
    paddingHorizontal: 20,
    color: '#5A0000',
  },
  button: {
    width: '70%',
    backgroundColor: '#EA7373',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    marginBottom: 10,
    alignSelf: 'center', // Center horizontally
  },
  buttonText: {
    color: '#5A0000',
    fontSize: 18,
    fontWeight: 'bold',
  },
  helpButton: {
    width: '60%',
    backgroundColor: '#FFB7B7', // Adjust color as needed
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    alignSelf: 'center', // Center horizontally
  },
});

export default DistressSignalSent;
