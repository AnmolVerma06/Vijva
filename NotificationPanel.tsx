// NotificationPanel.tsx

import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { NotificationContext } from './NotificationContext';

const NotificationPanel = () => {
  const { notifications } = useContext(NotificationContext);

  if (!notifications.length) return null;

  return (
    <View style={styles.notificationsPanel}>
      {notifications.map((notification, index) => (
        <Text key={index} style={styles.notificationText}>
          {notification}
        </Text>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
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
});

export default NotificationPanel;
