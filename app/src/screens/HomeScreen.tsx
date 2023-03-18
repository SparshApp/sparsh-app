// HomeScreen.tsx

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface HomeScreenProps {
  username: string;
  recommendedCompanies: string[];
}

const HomeScreen: React.FC<HomeScreenProps> = ({ username, recommendedCompanies }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Welcome back, {username}!</Text>
      <Text style={styles.subheader}>Recommended Companies:</Text>
      <View style={styles.list}>
        {recommendedCompanies.map((company) => (
          <Text style={styles.company}>{company}</Text>
        ))}
      </View>
      <Text style={styles.footer}>Upcoming events:</Text>
      <Text style={styles.event}>Webinar on AI and ML, 3/22 at 2PM</Text>
      <Text style={styles.event}>VC Pitch Day, 4/1 at 9AM</Text>
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
    marginBottom: 10,
  },
  subheader: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
  },
  list: {
    marginLeft: 20,
  },
  company: {
    fontSize: 16,
    marginBottom: 5,
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

export default HomeScreen;