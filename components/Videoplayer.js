import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import VideoPlayer from 'react-native-video-player'
const Videoplayer = () => {
    return (
        <View>
            <VideoPlayer
                video={{ uri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4' }}
                videoWidth={1600}
                videoHeight={900}
                thumbnail={{ uri: 'https://i.picsum.photos/id/866/1600/900.jpg' }}
            />
        </View>
    )
}

export default Videoplayer

const styles = StyleSheet.create({})