import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { AudioEngine } from 'react-native-audio-engine';

export const App = () => {
    const [message, setMessage] = useState<string | undefined>();

    AudioEngine.sampleMethod('howdy!', 123, message => {
        setMessage(message);
    });

    return (
        <View style={styles.container}>
            <Text>{message ?? 'Waiting for NativeModule...'}</Text>
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
});
