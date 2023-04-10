import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

import rootReducer from '../reducers';
import rootSaga from '../sagas';

// dependency injection of services in saga using context
const sagaMiddleware = createSagaMiddleware();
const middleWares = [sagaMiddleware];

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['businessCards'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(
  persistedReducer,
  composeWithDevTools(applyMiddleware(...middleWares)),
);

export const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);
