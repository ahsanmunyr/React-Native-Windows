import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {persistor, store} from './store/index';
import {Provider} from 'react-redux';
import AppStack from './navigation/AppStack';
import {PersistGate} from 'redux-persist/integration/react';
const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <AppStack />
        {/* <LazyLoader />
      <Toast /> */}
      </PersistGate>
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({});
