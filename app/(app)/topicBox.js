import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import data from '../../db.json';

import TopicList from '../../components/TopicList'
import { useLocalSearchParams } from 'expo-router'

const topicBox = () => {
  // const data = useLocalSearchParams();
  const topics = data;
  // console.log('from topic box : ',topics)

  return (
    <View>
      <TopicList items={topics} />
    </View>
  )
}

export default topicBox

const styles = StyleSheet.create({})