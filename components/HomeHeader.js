//Home header
import React from 'react';
import { View, Text } from 'react-native';

const HomeHeader = () => {

    return (
        <View>
            <View className="flex-row items-center justify-between pt-12 px-4 py-2 rounded-b-lg bg-indigo-700">
                <Text className="text-3xl font-bold text-white">Study App</Text>
            </View>
        </View >
    );
};

export default HomeHeader;