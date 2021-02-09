import React from 'react';
import MainStack from './navigation/MainStack';
import {Provider} from 'react-redux';
import store from './redux/store';
import {Platform, StatusBar} from 'react-native';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      {Platform.OS === 'android' && (
        <StatusBar backgroundColor="white" barStyle="dark-content" />
      )}
      <MainStack />
    </Provider>
  );
};
export default App;
