import {expectSaga} from 'redux-saga-test-plan';
import {call} from 'redux-saga/effects';
import actions from '../../../actions';
import BusinessCardReducer from '../../../reducers/BusinessCardReducer';
import initialState from '../../../store/initialState';
import {watchBusinessCardSaga} from '..';

describe('Business Card Saga Test API', () => {
  it('Add call', () => {
    return expectSaga(watchBusinessCardSaga)
      .provide({
        select: ({selector}, next) => {
          if (!selector) {
            return next();
          }
          return selector({
            businessCards: {
              savedCards: [],
            },
          });
        },
      })
      .hasFinalState({
        ...initialState.businessCards,
        savedCards: [
          {
            name: 'Test',
            occupation: 'IT',
            company: 'Affinidi',
            email: 'aa@bb.com',
            phone: '98765437',
            linkedin: '',
          },
        ],
      })
      .withReducer(BusinessCardReducer, initialState.businessCards)
      .dispatch(
        actions.businessList.add({
          name: 'Test',
          occupation: 'IT',
          company: 'Affinidi',
          email: 'aa@bb.com',
          phone: '98765437',
          linkedin: '',
        }),
      )
      .run({silenceTimeout: true});
  });

  it('Delete call', () => {
    return expectSaga(watchBusinessCardSaga)
      .provide({
        select: ({selector}, next) => {
          if (!selector) {
            return next();
          }
          return selector({
            businessCards: {
              savedCards: [
                {
                  name: 'Test',
                  occupation: 'IT',
                  company: 'Affinidi',
                  email: 'aa@bb.com',
                  phone: '98765437',
                  linkedin: '',
                },
              ],
            },
          });
        },
      })
      .hasFinalState({
        ...initialState.businessCards,
        savedCards: [],
      })
      .withReducer(BusinessCardReducer, initialState.businessCards)
      .dispatch(actions.businessList.delete(0))
      .run({silenceTimeout: true});
  });
});
