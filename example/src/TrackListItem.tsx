import React from 'react';
import { Button, StyleSheet, TextInput, View } from 'react-native';

interface Props {
    uri: string;
    onSubmitEditing: (text: string) => void;
    onDelete: () => void;
}

export const TrackListItem = ({ uri, onSubmitEditing, onDelete }: Props) => {
    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                defaultValue={uri}
                onSubmitEditing={e => onSubmitEditing(e.nativeEvent.text)}
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
