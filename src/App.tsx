import React from 'react';
import { Provider } from 'react-redux';
import 'react-native-gesture-handler';
import BusinessDetails from './containers/BusinessDetails';
import SavedDetails from './containers/SavedDetails';
import BusinessCardList from './containers/BusinessCardList';
import { createStackNavigator } from '@react-navigation/stack';
import { RootStackParamList } from './screens/RootStackPrams';
import { NavigationContainer } from '@react-navigation/native';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './redux/store';

const Stack = createStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <NavigationContainer>
            <Stack.Navigator>
              <Stack.Screen name="BusinessCard" component={BusinessCardList} />
              <Stack.Screen name="SavedDetails" component={SavedDetails} />
              <Stack.Screen
                name="BusinessDetails"
                component={BusinessDetails}
              />
            </Stack.Navigator>
          </NavigationContainer>
        </PersistGate>
      </Provider>
    </>
  );
}
