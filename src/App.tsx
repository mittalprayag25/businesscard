import React from 'react';
import { Provider } from 'react-redux';
import 'react-native-gesture-handler';
import BusinessCardDetails from './containers/BusinessCardDetails';
import SavedDetails from './components/SavedDetails';
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
              <Stack.Screen name="BusinessCard" component={BusinessCardList} options={{ title: 'Business Card' }} />
              <Stack.Screen name="SavedDetails" component={SavedDetails} />
              <Stack.Screen
                name="BusinessCardDetails"
                component={BusinessCardDetails}
                options={{ title: 'Add/View' }}
              />
            </Stack.Navigator>
          </NavigationContainer>
        </PersistGate>
      </Provider>
    </>
  );
}
