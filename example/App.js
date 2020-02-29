import React, { Component, useState } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { AudioEngine } from 'react-native-audio-engine';

export const App = () => {
    const [message, setMessage] = useState();

    AudioEngine.sampleMethod('howdy!', 123, message => {
        setMessage(message);
    });

    return (
        <View style={styles.container}>
            <Text>{message || 'Waiting for NativeModule...'}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});
