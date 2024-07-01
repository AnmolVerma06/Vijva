import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Alert } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const ResourceForm = () => {
  const [category, setCategory] = useState('');
  const [item, setItem] = useState('');
  const [requirements, setRequirements] = useState('');
  const [forSelf, setForSelf] = useState('Yes');
  const [address, setAddress] = useState('');

  const items = {
    food: ['Rice', 'Bread', 'Milk'],
    pharma: ['Medicines', 'Vitamins', 'First Aid Kit'],
    funds: ['Donation', 'Crowdfunding', 'Sponsorship']
  };

  const handleCategoryChange = (value) => {
    setCategory(value);
    setItem('');
    setRequirements('');
  };

  const handleSubmit = () => {
    // Perform submit actions here
    Alert.alert('Thank you!', 'We will reach out to you as soon as possible.');
  };

  return (
    <View style={[styles.container, { backgroundColor: '#ffb7b7' }]}>
      <Text style={[styles.heading, { fontFamily: 'Montserrat', color: '#5A0000' }]}>Resources </Text>

      <Text style={[styles.label, category === '' && { fontWeight: 'bold' }]}>Select Category:</Text>
      <View style={[styles.pickerContainer, { borderColor: '#B82828', borderWidth: 1, borderRadius: 5 }]}>
        <Picker
          selectedValue={category}
          style={styles.picker}
          onValueChange={(itemValue) => handleCategoryChange(itemValue)}
        >
          <Picker.Item label="Select Category" value="" />
          <Picker.Item label="Food Items" value="food" />
          <Picker.Item label="Pharma Requirements" value="pharma" />
          <Picker.Item label="Funds Required" value="funds" />
        </Picker>
      </View>

      {category !== '' && (
        <>
          <Text style={[styles.label, { fontWeight: 'bold' }]}>Enter Requirements:</Text>
          <TextInput
            style={[styles.input, { height: 100 }]}
            placeholder="Enter your requirements..."
            multiline
            numberOfLines={4}
            value={requirements}
            onChangeText={(text) => setRequirements(text)}
          />
        </>
      )}

      {category === '' && (
        <>
          <Text style={[styles.label, { fontWeight: 'bold' }]}>Enter Requirements:</Text>
          <TextInput
            style={[styles.input, { height: 100 }]}
            placeholder="Enter your requirements..."
            multiline
            numberOfLines={4}
            value={requirements}
            onChangeText={(text) => setRequirements(text)}
          />
        </>
      )}

      <Text style={[styles.label, { fontWeight: 'bold' }]}>Do you need this for yourself?</Text>
      <View style={[styles.pickerContainer, { borderColor: '#B82828', borderWidth: 1, borderRadius: 5 }]}>
        <Picker
          selectedValue={forSelf}
          style={styles.picker}
          onValueChange={(itemValue) => setForSelf(itemValue)}
        >
          <Picker.Item label="Yes" value="Yes" />
          <Picker.Item label="No" value="No" />
        </Picker>
      </View>

      {forSelf === 'No' && (
        <>
          <Text style={[styles.label, { fontWeight: 'bold' }]}>New Address:</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your new address..."
            value={address}
            onChangeText={(text) => setAddress(text)}
          />
        </>
      )}

      <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
        <Text style={styles.submitButtonText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#ffb7b7',
    alignItems: 'center',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  label: {
    fontSize: 18,
    marginBottom: 10,
    color: '#333',
  },
  pickerContainer: {
    width: '100%',
    marginBottom: 20,
    paddingHorizontal: 10,
    borderColor: '#B82828',
    borderWidth: 1,
    borderRadius: 5,
  },
  picker: {
    height: 50,
    width: '100%',
    color: '#333', // Adjust color as needed
  },
  input: {
    height: 50,
    width: '100%',
    borderWidth: 1,
    borderColor: '#B82828',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  submitButton: {
    backgroundColor: '#E55151',
    padding: 15,
    alignItems: 'center',
    borderRadius: 5,
    marginTop: 20,
  },
  submitButtonText: {
    color: '#fff',
    fontSize: 18,
  },
});

export default ResourceForm;
