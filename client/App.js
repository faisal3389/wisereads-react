
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

import AppNavigation from './src/omniwyse/screens/appNavigation';
import {createStore,applyMiddleware} from 'redux';
import { Root } from "native-base";
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga'
import SplashScreen from 'react-native-splash-screen'

import  rootSaga  from "./src/omniwyse/sagas/index";
import  rootReducer  from "./src/omniwyse/reducers";

/* import configureStore from './src/omniwyse/configureStore'

const store = configureStore(); */  


const sagaMiddleware = createSagaMiddleware()
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware))
sagaMiddleware.run(rootSaga)


export default class App extends Component {

  componentDidMount() {
    // do stuff while splash screen is shown
      // After having done stuff (such as async tasks) hide the splash screen
     if(SplashScreen) SplashScreen.hide();
  }

  render() {
    return (
      <Provider store={store}>
      <Root>
      <AppNavigation></AppNavigation>  
      </Root>
        
      </Provider>
    );
  }
}

