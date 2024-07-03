import React from 'react';
import { Text, View } from 'react-native';
// import Videoplayer from './Videoplayer';

const VideoPage = ({ item }) => {
  return (
    <View style={{ padding: 16, backgroundColor: 'white' }}>
      <Text style={{ color: '#1f2937', fontSize: 24, marginBottom: 8 }}>{item.title}</Text>
      <Text style={{ color: '#6b7280', marginBottom: 16 }}>VideoPage Content</Text>
      {/* <Videoplayer /> */}
    </View>
  );
}

export default VideoPage;
