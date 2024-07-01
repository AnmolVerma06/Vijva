import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Linking } from 'react-native';

const helplineData = {
  ngos: [
    { name: 'NGO A', contact: '123-456-7890', address: '123 NGO A Street, City, State, 12345' },
    { name: 'NGO B', contact: '234-567-8901', address: '456 NGO B Avenue, City, State, 23456' },
    { name: 'NGO C', contact: '345-678-9012', address: '789 NGO C Boulevard, City, State, 34567' },
  ],
  disasterManagement: [
    { name: 'Disaster Management Authority 1', contact: '101-102-1034', address: '1 Disaster Street, City, State, 45678' },
    { name: 'Disaster Management Authority 2', contact: '202-203-2045', address: '2 Relief Avenue, City, State, 56789' },
  ],
  vijvaHelplines: [
    { name: 'Vijva Helpline 1', contact: '911-912-9134' },
    { name: 'Vijva Helpline 2', contact: '911-914-9156' },
  ],
};

const HelplineInfo = () => {
  const makeCall = (phoneNumber) => {
    Linking.openURL(`tel:${phoneNumber}`);
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.heading}>Helpline Information</Text>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Partnered NGOs</Text>
        {helplineData.ngos.map((ngo, index) => (
          <View key={index} style={styles.card}>
            <Text style={styles.cardTitle}>{ngo.name}</Text>
            <TouchableOpacity onPress={() => makeCall(ngo.contact)}>
              <Text style={styles.cardContact}>Contact: {ngo.contact}</Text>
            </TouchableOpacity>
            <Text style={styles.cardAddress}>Address: {ngo.address}</Text>
          </View>
        ))}
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Disaster Management Authorities</Text>
        {helplineData.disasterManagement.map((authority, index) => (
          <View key={index} style={styles.card}>
            <Text style={styles.cardTitle}>{authority.name}</Text>
            <TouchableOpacity onPress={() => makeCall(authority.contact)}>
              <Text style={styles.cardContact}>Contact: {authority.contact}</Text>
            </TouchableOpacity>
            <Text style={styles.cardAddress}>Address: {authority.address}</Text>
          </View>
        ))}
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Vijva Helplines</Text>
        {helplineData.vijvaHelplines.map((helpline, index) => (
          <View key={index} style={styles.card}>
            <Text style={styles.cardTitle}>{helpline.name}</Text>
            <TouchableOpacity onPress={() => makeCall(helpline.contact)}>
              <Text style={styles.cardContact}>Contact: {helpline.contact}</Text>
            </TouchableOpacity>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffb7b7',
    padding: 16,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 16,
    color: '#000',
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#000',
  },
  card: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 8,
    marginBottom: 8,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  cardContact: {
    fontSize: 16,
    color: '#1E90FF',
    textDecorationLine: 'underline',
  },
  cardAddress: {
    fontSize: 16,
    color: '#000',
  },
});

export default HelplineInfo;