import React from 'react';
import { View } from 'react-native';
import VideoPage from '../../components/VideoPage';
import { useRoute } from '@react-navigation/native';

const VideoBox = () => {
  const route = useRoute();
  const { item } = route.params;

  // console.log('from video box: ', item);

  return (
    <View sclassName='bg-gray-100 p-4 rounded-lg shadow-lg'>
      {/* <View className='aspect-w-16 aspect-h-9 bg-teal-400 h-36 flex justify-center items-center'> */}
        <VideoPage item={item} />
      {/* </View> */}
    </View>
  );
};

export default VideoBox;
