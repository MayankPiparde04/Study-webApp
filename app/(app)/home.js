import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
// import data from '../../db.json';
import HomeList from '../../components/HomeList';

const Home = () => {
  // const { chapters } = data;

  return (
    <View  className='flex-1'>
      <HomeList />
    </View>
  );
}

export default Home;
