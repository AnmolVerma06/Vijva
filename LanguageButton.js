// LanguageButton.js

import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const LanguageButton = ({ language, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.languageButton}>
      <Text style={styles.languageButtonText}>{language} ▼</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  languageButton: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: '#5A0000',
    borderRadius: 25,
  },
  languageButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default LanguageButton;
