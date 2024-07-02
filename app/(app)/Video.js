import React from 'react';
import { Text, View } from 'react-native';
import { useRoute } from '@react-navigation/native';
import VideoPlayer from 'react-native-video';

const Video = () => {
  const route = useRoute();
  const { item } = route.params;

  return (
    <View style={{ padding: 16, backgroundColor: '#ADD8E6', borderRadius: 8 }}>
      <Text style={{ fontSize: 20, color: 'black' }}>{item.title}</Text>
      <Text>Video Content Goes Here</Text>
      {/* <VideoPlayer
        source={require('../../assets/videos/1st_render.mp4')}
        style={{ width: '100%', height: 300 }}
        controls={true}
        resizeMode="contain"
      /> */}
    </View>
  );
}

export default Video;
