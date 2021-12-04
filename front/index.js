import React from 'react';
import PropTypes from 'prop-types';
import {AppRegistry} from 'react-native';
import {Provider} from 'react-redux';
import store from './src/redux/store'
import App from './App';
import {name as appName} from './app.json';

const RNRedux = () => (
    <Provider store = { store }>
      <App />
    </Provider>
  )

AppRegistry.registerComponent(appName, () => RNRedux);

//adb reverse tcp:3001 tcp:3001

