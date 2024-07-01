import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  Modal,
  ScrollView,
  Animated,
} from 'react-native';

const VijvaHomeScreen = ({ navigation }) => {
  const [language, setLanguage] = useState('English');
  const [showNotifications, setShowNotifications] = useState(false);
  const [showLanguageModal, setShowLanguageModal] = useState(false);
  const fadeAnim = useState(new Animated.Value(0))[0];

  const toggleNotifications = () => {
    setShowNotifications(!showNotifications);
    Animated.timing(fadeAnim, {
      toValue: showNotifications ? 0 : 1,
      duration: 500,
      useNativeDriver: true,
    }).start();
  };

  const openLanguageModal = () => {
    setShowLanguageModal(true);
  };

  const closeLanguageModal = () => {
    setShowLanguageModal(false);
  };

  const selectLanguage = (lang) => {
    setLanguage(lang);
    setShowLanguageModal(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={toggleNotifications} style={styles.iconButton}>
          <Image
            source={require('./bell.jpg')} // Replace with your bell icon image path
            style={styles.bellIcon}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={openLanguageModal} style={styles.languageButton}>
          <Text style={styles.languageButtonText}>{language} ▼</Text>
        </TouchableOpacity>
      </View>

      {showNotifications && (
        <Animated.View style={[styles.notificationsPanel, { opacity: fadeAnim }]}>
          <ScrollView>
            <Text style={styles.notificationText}>No new notifications</Text>
            {/* Display notifications here */}
          </ScrollView>
        </Animated.View>
      )}

      <View style={styles.mainContent}>
        <Text style={[styles.letsConnectVolunteer, styles.text1Typo]}>
          {`Let’s\nConnect, Volunteer and Help`}
        </Text>
        <TouchableOpacity
          style={styles.exploreButton}
          onPress={() => navigation.navigate('Profile')}
        >
          <Text style={styles.exploreButtonText}>Explore Vijva</Text>
        </TouchableOpacity>
        <View style={styles.additionalTextContainer}>
          <Text style={styles.additionalText}>Login or Sign up for continuing</Text>
          <Text style={styles.additionalText}>
            By continuing you agree to the terms and conditions of the application
          </Text>
           <Text style={styles.copyrightsReservedTo}>
               Copyrights Reserved to the Creators of this application
           </Text>
        </View>
      </View>

      <Modal visible={showLanguageModal} transparent animationType="slide">
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Select Language</Text>
            <TouchableOpacity onPress={() => selectLanguage('English')} style={styles.modalButton}>
              <Text style={styles.modalButtonText}>English</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => selectLanguage('Hindi')} style={styles.modalButton}>
              <Text style={styles.modalButtonText}>Hindi</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => selectLanguage('Tamil')} style={styles.modalButton}>
              <Text style={styles.modalButtonText}>Tamil</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => selectLanguage('Telugu')} style={styles.modalButton}>
              <Text style={styles.modalButtonText}>Telugu</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => selectLanguage('Malayalam')} style={styles.modalButton}>
              <Text style={styles.modalButtonText}>Malayalam</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={closeLanguageModal} style={styles.closeButton}>
              <Text style={styles.closeButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#ffb7b7',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  iconButton: {
    padding: 10,
  },
  bellIcon: {
    width: 24,
    height: 24,
  },
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
  notificationsPanel: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
  },
  notificationText: {
    fontSize: 16,
    color: '#333',
  },
  mainContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text1Typo: {
    fontFamily: 'Montserrat-Black',
    fontWeight: '900',
  },
  letsConnectVolunteer: {
    top: 42,
    left: 15,
    fontSize: 48,
    lineHeight: 46,
    textAlign: 'left',
    width: 269,
    height: 226,

    textShadowOffset: {
      width: 0,
      height: 4,
    },
    color: '#5A0000',
    textShadowRadius: 4,
    position: 'absolute',
  },
  copyrightsReservedTo: {
      top: 279,
      left: 77,
      fontSize: 11,
      color: '#5A0000',
      width: 235,
      height: 43,
      fontFamily: 'Inter-Regular',
      textAlign: 'center',
      position: 'absolute',
    },

  exploreButton: {
    backgroundColor: '#fff',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 25,
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
    marginTop: 70,
    top: 60,
  },
  exploreButtonText: {
    color: '#5A0000',
    fontSize: 18,
    fontWeight: 'bold',
  },
  additionalTextContainer: {
    marginTop: 20,
    alignItems: 'center',
    top: 100,
  },
  additionalText: {
    fontSize: 14,
    color: '#B82828',
    textAlign: 'center',
    marginVertical: 5,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: 300,
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  modalButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#5A0000',
    borderRadius: 25,
    marginVertical: 5,
  },
  modalButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  closeButton: {
    marginTop: 20,
  },
  closeButtonText: {
    fontSize: 16,
    color: '#5A0000',
    fontWeight: 'bold',
  },
});

export default VijvaHomeScreen;
