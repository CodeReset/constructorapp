import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {Config} from './config_app';
import ErrorBoundary from './src/components/ErrorBoundary/ErrorBoundary';

import Navigator from './src/navigator/Navigator';
import {persistor, store} from './src/store/store';
import {Theme} from './src/styles';

const App = () => {
  return (
    <Provider store={store}>
      <ErrorBoundary>
        <SafeAreaView style={{flex: 1}}>
          <StatusBar
            backgroundColor={Theme[Config.theme].mainColor}
            barStyle={
              Config.theme === 'dark' ? 'light-content' : 'dark-content'
            }
          />
          <PersistGate persistor={persistor}>
            <Navigator />
          </PersistGate>
        </SafeAreaView>
      </ErrorBoundary>
    </Provider>
  );
};

export default App;
