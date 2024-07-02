import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { useRouter } from 'expo-router';
import TopicItems from './TopicItems';

const TopicList = ({ items, title }) => {
  const router = useRouter();

  return (
    <View className='flex-1'>
      <View className='h-16 bg-fuchsia-400 justify-center rounded-full my-2 mx-2 border border-black items-center'>
        <Text className='text-black font-semibold text-3xl'>{title}</Text>
      </View>
      <View className='min-h-screen bg-gray-400'>
        <FlatList
          data={items}
          keyExtractor={(item, index) => index.toString()}
          contentContainerStyle={{ padding: 16 }}
          showsVerticalScrollIndicator={true}
          renderItem={({ item, index }) => (
            <TopicItems
              item={item}
              router={router}
              index={index}
            />
          )}
        />
      </View>
    </View>
  );
}

export default TopicList;
