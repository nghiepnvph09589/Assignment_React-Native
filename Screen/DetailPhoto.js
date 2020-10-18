import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function DetailPhoto({ navigation, route }) {
    const { urlpt } = route.params;
    return (
        <View style={styles.container}>
            <Text>{urlpt}</Text>
            <Image style={{ height:300, width: '100%', }} source={{ uri: urlpt }} />
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});