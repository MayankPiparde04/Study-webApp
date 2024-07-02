import { Text, TouchableOpacity, View } from 'react-native';
import React from 'react';

const TopicItems = ({ item, router, index }) => {
  // console.log('from topic Items : ', item)
  return (
    <TouchableOpacity onPress={() => router.push(`/topics/${item.id}`)}>
      <View className='p-4 bg-orange-200 mb-2 rounded'>
        <Text className='text-lg text-black'>{item}</Text>
        {/* <Text className='text-sm text-gray-700'>{item.description}</Text> */}
      </View>
    </TouchableOpacity>
  );
}

export default TopicItems;
