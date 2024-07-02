import React from 'react';
import { Text, View } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import TopicList from '../../components/TopicList';

const Content = () => {
  const { item } = useLocalSearchParams();
  const parsedItem = JSON.parse(item);

  return (
    <View>
      <TopicList items={parsedItem.topic} title={parsedItem.title} />
    </View>
  );
}

export default Content;
