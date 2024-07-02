import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation hook

const TopicItems = ({ item }) => {
  const navigation = useNavigation();

  const openVideo = () => {
    navigation.navigate('Video', { item });
  }

  return (
    <TouchableOpacity onPress={openVideo}>
      <View className="p-4 bg-orange-300 mb-2 rounded">
        <Text className="text-2xl text-black">{item.title}</Text>
      </View>
    </TouchableOpacity>
  );
}

export default TopicItems;
