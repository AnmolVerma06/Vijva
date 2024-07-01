import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, ScrollView } from 'react-native';

const NeedHelpPage = () => {
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [helpNeeded, setHelpNeeded] = useState('');

  const handleSubmit = () => {
    Alert.alert('Help Request Sent', 'We will reach out to you as soon as possible.');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.heading}>Need Help?</Text>

      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={setName}
      />

      <TextInput
        style={styles.input}
        placeholder="Contact Details"
        value={contact}
        onChangeText={setContact}
        keyboardType="phone-pad"
      />

      <TextInput
        style={[styles.input, styles.textArea]}
        placeholder="Describe the help you need"
        value={helpNeeded}
        onChangeText={setHelpNeeded}
        multiline={true}
        numberOfLines={4}
      />

      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#FFB7B7', // background color from your color scheme
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#5A0000', // heading color from your color scheme
  },
  input: {
    width: '100%',
    padding: 10,
    borderWidth: 1,
    borderColor: '#B82828', // border color from your color scheme
    borderRadius: 5,
    marginBottom: 15,
    backgroundColor: '#FFFFFF', // white background for input fields
  },
  textArea: {
    height: 100,
    textAlignVertical: 'top',
  },
  button: {
    backgroundColor: '#E55151', // button color from your color scheme
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    width: '100%',
  },
  buttonText: {
    color: '#FFFFFF', // white text for the button
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default NeedHelpPage;
