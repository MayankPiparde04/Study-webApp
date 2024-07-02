import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { useRouter } from 'expo-router';
import TopicItems from './TopicItems'; // Ensure this is the correct path to your TopicItems component
import data from '../db.json'; // Ensure the data path is correct

const TopicList = (items) => {

  const router = useRouter();
  let data0 = items;

  console.log('from topic list : ', items);

  // let topicTitles = items.map(topic => topic.title);

  // console.log(topicTitles);

  return (
    <View className='flex-1'>
      <View className='h-20 bg-fuchsia-400 justify-center rounded-full my-2 mx-2 border border-black items-center'>
        <Text className='text-black font-semibold text-2xl'>{items.title}</Text>
      </View>
      <TouchableOpacity>
        <View className='min-h-screen bg-gray-400'>
          <FlatList
            data={data0}
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
      </TouchableOpacity>
    </View>
  );
}

export default TopicList;
