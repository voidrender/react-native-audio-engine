import React, { useState } from 'react';
import { Button, FlatList, SafeAreaView, StyleSheet, View } from 'react-native';
import { TrackListItem } from './src';

type TrackDetails = {
    uri: string;
};

export const App = () => {
    const [tracks, setTracks] = useState<TrackDetails[]>([
        { uri: 'track 1' },
        { uri: 'track 2' },
    ]);

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <FlatList
                data={tracks}
                renderItem={itemInfo => (
                    <TrackListItem
                        uri={itemInfo.item.uri}
                        onSubmitEditing={text => {
                            tracks[itemInfo.index].uri = text;
                        }}
                        onDelete={() => {
                            tracks.splice(itemInfo.index, 1);
                            setTracks([...tracks]);
                        }}
                    />
                )}
                keyExtractor={(item, index) => `${index}-${item}`}
                style={styles.flatList}
            />
            <View style={styles.addTrackContainer}>
                <Button
                    title='Add Track'
                    onPress={() => {
                        tracks.push({ uri: '' });
                        setTracks([...tracks]);
                    }}
                />
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    flatList: {
        flex: 1,
    },
    addTrackContainer: {
        flexShrink: 1,
        paddingTop: 20,
        borderTopWidth: 1,
        borderTopColor: '#ccc',
    },
});
