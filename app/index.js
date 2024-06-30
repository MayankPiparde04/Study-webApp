import { ActivityIndicator, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const StartPage = () => {
    return (
        <View className='flex-1'>
            <ActivityIndicator size={'large'} color={'#93f'} />
        </View>
    )
}

export default StartPage

const styles = StyleSheet.create({})