import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useEffect } from 'react';
import data from '../db.json';
import HomeItems from './HomeItems';
import { useRouter } from 'expo-router';

const HomeList = () => {
  const {chapters} = data;
  const router = useRouter();
  // console.log(topics);

  return (
    <View className='flex-1'>
      <FlatList
        data={chapters}
        contentContainerStyle={{ paddingVertical: 10 }}
        keyExtractor={item => Math.random()}
        showsVerticalScrollIndicator={false}
        renderItem={({ item, index }) =>
          <HomeItems item={item}
            router={router}
            noBorder={index + 1 == chapters.length}
            index={index} />}
      />
    </View>
  )
}

export default HomeList;
