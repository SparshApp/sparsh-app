import axios from 'axios';
import { Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';

const BASE_URL = 'http://localhost:5001';

const api = axios.create({
    baseURL: BASE_URL
});

export const getUsers = async () => {
    const response = await api.get('/users');
    return response.data;
};

const Header = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const result = await getUsers();
      setData(result);
    };
    fetchData();
  }, []);

  return (
    <View>
      <Text>Here is some data fetched from the API:</Text>
      <Text>{JSON.stringify(data, null, 2)}</Text>
    </View>
  );
};

export default Header;
