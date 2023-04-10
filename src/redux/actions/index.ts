import {createActions} from 'redux-actions';
import BusinessList from './BusinessList';

const actions: any = createActions({
  BUSINESS_LIST: BusinessList,
});

export default actions;
