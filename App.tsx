import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import AppNavigator from './src/navigation/AppNavigator';
import {NavigationContainer} from '@react-navigation/native';

function App(): React.JSX.Element {
  return (

    // <SafeAreaView>
<AppNavigator />
    // </SafeAreaView>
  
);
}

export default App;