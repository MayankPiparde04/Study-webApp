import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const home = () => {
  return (
    <View>
      <TouchableOpacity>
        <View className='h-24 mt-2 mx-2 justify-center items-center border bg-gradient-to-r bg-'
          style={[styles.lightGreen]}>
          <Text className='font-semibold text-2xl'>Chapter 1</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View className='h-24 mt-2 mx-2 justify-center items-center border bg-gradient-to-r bg-'
          style={[styles.lightOrange]}>
          <Text className='font-semibold text-2xl'>Chapter 2</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View className='h-24 mt-2 mx-2 justify-center items-center border bg-gradient-to-r bg-'
          style={[styles.lightGreen]}>
          <Text className='font-semibold text-2xl'>Chapter 3</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View className='h-24 mt-2 mx-2 justify-center items-center border bg-gradient-to-r bg-'
          style={[styles.lightOrange]}>
          <Text className='font-semibold text-2xl'>Chapter 4</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View className='h-24 mt-2 mx-2 justify-center items-center border bg-gradient-to-r bg-'
          style={[styles.lightGreen]}>
          <Text className='font-semibold text-2xl'>Chapter 5</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View className='h-24 mt-2 mx-2 justify-center items-center border bg-gradient-to-r bg-'
          style={[styles.lightOrange]}>
          <Text className='font-semibold text-2xl'>Chapter 6</Text>
        </View>
      </TouchableOpacity>
    </View>
  )
}

export default home

const styles = StyleSheet.create({
  lightGreen: {
    backgroundColor: '#2a9d8f',
  },
  lightOrange: {
    backgroundColor: '#e76f51',
  },
})