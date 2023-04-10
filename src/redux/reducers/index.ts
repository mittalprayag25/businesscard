import {combineReducers} from 'redux';

import BusinessCardReducer from './BusinessCardReducer';

const rootReducer = combineReducers({
  businessCards: BusinessCardReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
