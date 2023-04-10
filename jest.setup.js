import {createElement} from 'react';
import {NativeModules} from 'react-native';
import 'react-native-gesture-handler/jestSetup.js';

jest.mock('react-native-reanimated', () => {
  const Reanimated = require('react-native-reanimated/mock');

  // The mock for `call` immediately calls the callback which is incorrect
  // So we override it with a no-op
  Reanimated.default.call = () => {};

  return Reanimated;
});
jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');

jest.mock('react-native/Libraries/Utilities/BackHandler', () => {
  const backHandler = require('react-native/Libraries/Utilities/__mocks__/BackHandler');
  return backHandler;
});

jest.mock('react-native/Libraries/EventEmitter/NativeEventEmitter.js', () => {
  const NativeEventEmitter = require('react-native/Libraries/EventEmitter/__mocks__/NativeEventEmitter');
  return NativeEventEmitter;
});

jest.mock('react-native-reanimated', () =>
  require('react-native-reanimated/mock'),
);

jest.mock('react-navigation', () => {
  return {
    createAppContainer: jest
      .fn()
      .mockReturnValue(function NavigationContainer(props) {
        return null;
      }),
    createDrawerNavigator: jest.fn(),
    createMaterialTopTabNavigator: jest.fn(),
    createStackNavigator: jest.fn(),
    StackActions: {
      push: jest
        .fn()
        .mockImplementation(x => ({...x, type: 'Navigation/PUSH'})),
      replace: jest
        .fn()
        .mockImplementation(x => ({...x, type: 'Navigation/REPLACE'})),
    },
    NavigationActions: {
      navigate: jest.fn().mockImplementation(x => x),
    },
  };
});
