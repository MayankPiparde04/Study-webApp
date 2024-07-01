import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import data from '../../db.json';

const Home = () => {
  const { chapters } = data;

  return (
    <View className='flex-1 mx-2 my-2'>
      {chapters.map((chapter) => (
        <TouchableOpacity>
          <View key={chapter.id} 
          className=' bg-sky-400 h-20 py-2 my-2 justify-center items-center rounded-lg'>
            <Text className='text-2xl'>{chapter.title}</Text>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
}

export default Home;
