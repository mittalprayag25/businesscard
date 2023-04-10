import {handleActions} from 'redux-actions';

import initialState from '../store/initialState';

const BusinessCardReducer = handleActions(
  {
    BUSINESS_LIST: {
      UPDATE_LIST: (state, {payload}: any) => {
        return {
          ...state,
          savedCards: payload,
        };
      },
    },
  },
  initialState.businessCards,
);

export default BusinessCardReducer;
