import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

const ListScreen = () => {
    const friends = [
        { name: 'Friend #1', age: '17' },
        { name: 'Friend #2', age: '21' },
        { name: 'Friend #3', age: '32' },
        { name: 'Friend #4', age: '40' },
        { name: 'Friend #5', age: '25' },
        { name: 'Friend #6', age: '16' },
        { name: 'Friend #7', age: '71' },
        { name: 'Friend #8', age: '38' },
        { name: 'Friend #9', age: '29' }
    ];

    return (
        <FlatList
            showsVerticalScrollIndicator={false}
            keyExtractor={friend => friend.name }
            data={friends}
            renderItem={({ item }) => {
                return <Text style={styles.textStyle}>{item.name} - Age {item.age}</Text>
            }}
        />
    );
};

const styles = StyleSheet.create({
    textStyle: {
        marginVertical: 10 
    }
});

export default ListScreen;