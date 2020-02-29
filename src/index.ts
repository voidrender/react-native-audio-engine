import { NativeModules } from 'react-native';

type AudioEngine = {
    sampleMethod: (
        stringArgument: string,
        numberParameter: number,
        callback: (callback: string) => void,
    ) => void;
};

export const AudioEngine: AudioEngine = NativeModules.AudioEngine;
