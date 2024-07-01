//Home header
import React from 'react';
import { View, Text } from 'react-native';

const HomeHeader = () => {

    return (
        <View>
            <View className="flex-row items-center justify-between pt-10 px-6 py-4 rounded-b-lg bg-emerald-700">
                <Text className="text-3xl font-bold text-white">Study App</Text>
            </View>
        </View >
    );
};

export default HomeHeader;