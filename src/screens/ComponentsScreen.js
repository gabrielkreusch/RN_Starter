import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const ComponentsScreen = () => {
    const myName = 'Gabriel';

    return <View>
        <Text style={styles.title}>Getting started with React Native!</Text>
        <Text>My name is {myName}</Text>
    </View>;
};

const styles = StyleSheet.create({
    title: {
        fontSize: 45
    },
    subtitle: {
        fontSize: 20
    }
});

export default ComponentsScreen;