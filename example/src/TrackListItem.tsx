import React from 'react';
import { Button, StyleSheet, TextInput, View } from 'react-native';

interface Props {
    uri: string;
    onEndEditing: (text: string) => void;
    onDelete: () => void;
}

export const TrackListItem = ({ uri, onEndEditing, onDelete }: Props) => {
    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                defaultValue={uri}
                onEndEditing={e => onEndEditing(e.nativeEvent.text)}
                autoCapitalize='none'
            />
            <Button title='Delete' onPress={onDelete} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        margin: 10,
    },
    input: {
        borderWidth: 1,
        borderColor: '#cccccc',
        borderRadius: 4,
        padding: 10,
    },
});
