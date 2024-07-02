import { Text, TouchableOpacity, View } from 'react-native';
import React from 'react';

const HomeItems = ({ item, router }) => {
  const openChapter = () => {
    router.push({ pathname: '/Content', params: { item: JSON.stringify(item) } });
  }

  return (
    <View className='flex-1 mx-2 my-2'>
      <TouchableOpacity onPress={openChapter}>
        <View className='bg-teal-400 h-20 justify-center items-center rounded-xl border-b-2 border-b-black'>
          <Text className='text-neutral-900 text-2xl font-semibold'>{item.title}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

export default HomeItems;
