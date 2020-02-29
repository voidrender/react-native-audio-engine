import React from 'react';
import { Text } from 'react-native';
import { greeting } from '../dist';

const App = () => {
    return <Text>{greeting()}</Text>;
};

export default App;
