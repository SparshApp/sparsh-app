// ProfileScreen.tsx

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface ProfileScreenProps {
  name: string;
  email: string;
  investments: number;
}

const ProfileScreen: React.FC<ProfileScreenProps> = ({ name, email, investments }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>My Profile</Text>
      <Text style={styles.label}>Name:</Text>
      <Text style={styles.info}>{name}</Text>
      <Text style={styles.label}>Email:</Text>
      <Text style={styles.info}>{email}</Text>
      <Text style={styles.label}>Investments:</Text>
      <Text style={styles.info}>{investments}</Text>
      <Text style={styles.footer}>Settings</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 5,
  },
  info: {
    fontSize: 16,
    marginBottom: 10,
  },
  footer: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
  },
  event: {
    fontSize: 16,
    marginBottom: 5,
  },
});

export default ProfileScreen;
