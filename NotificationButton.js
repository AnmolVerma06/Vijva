import React, { useState, useEffect } from 'react';
import { TouchableOpacity, Animated, Image, StyleSheet, Text, View, FlatList } from 'react-native';

const NotificationButton = ({ onPress }) => {
  const [showNotifications, setShowNotifications] = useState(false);
  const fadeAnim = useState(new Animated.Value(0))[0];

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: showNotifications ? 1 : 0,
      duration: 300,
      useNativeDriver: true,
    }).start();
  }, [showNotifications, fadeAnim]);

  const toggleNotifications = () => {
    setShowNotifications(!showNotifications);
  };

  const disasterAlerts = [
    { id: 1, text: 'Flood warning issued for Mumbai. Take precautions.' },
    { id: 2, text: 'Earthquake of magnitude 5.0 reported in Delhi region.' },
    { id: 3, text: 'Cyclone alert for coastal areas of Tamil Nadu and Andhra Pradesh.' },
    { id: 4, text: 'Heavy rainfall expected in Kerala. Stay indoors.' },
    { id: 5, text: 'Wildfire reported in Uttarakhand. Avoid forest areas.' },
    { id: 6, text: 'Heatwave alert for Rajasthan. Stay hydrated.' },
    { id: 7, text: 'Snowfall expected in Himachal Pradesh. Drive safely.' },
  ];

  const renderNotification = ({ item }) => (
    <View style={styles.notification}>
      <Text style={styles.notificationText}>{item.text}</Text>
    </View>
  );

  return (
    <TouchableOpacity onPress={() => {
        toggleNotifications();
        onPress();
      }}
      style={styles.container2}
    >
      <Image
        source={require('./bell.jpg')}
        style={styles.bellIcon}
      />
      {showNotifications && (
        <Animated.View style={[styles.notificationsPanel, { opacity: fadeAnim, zIndex: 1000 }]}>
          <FlatList
            data={disasterAlerts}
            renderItem={renderNotification}
            keyExtractor={item => item.id.toString()}
            contentContainerStyle={{ flexGrow: 1 }}
          />
        </Animated.View>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container2: {
    position: 'relative',
    padding: 10,
    zIndex: 1000,
  },
  bellIcon: {
    width: 24,
    height: 24,
  },
  notificationsPanel: {
    position: 'absolute',
    top: 40,
    left: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
    elevation: 5,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
    maxHeight: 500, // Increase the max height as needed
    width: 300, // Increase the width as needed
    zIndex: 1000,
  },
  notification: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  notificationText: {
    fontSize: 14,
    color: '#333',
  },
});

export default NotificationButton;
