import { render } from '@testing-library/react-native';
import React from 'react';
import * as reactRedux from 'react-redux';
import { Provider } from 'react-redux';

import { createMockStore } from '../../../__mocks__/index';
import BusinessCardList from '../index';
import initialState from './../../../redux/store/initialState';

const mockedDispatch = jest.fn();
jest.mock('@react-navigation/native', () => {
  const actualNav = jest.requireActual('@react-navigation/native');
  return {
    ...actualNav,
    useFocusEffect: () => jest.fn(),
    useNavigation: () => ({
      navigate: jest.fn(),
      setOptions: jest.fn(),
    }),
  };
});

describe('Business Card List', () => {
  const changeState = {
    ...initialState,
  };
  it('should match snapshot', () => {
    const wrapper = render(
      <Provider store={createMockStore(changeState)}>
        <BusinessCardList />
      </Provider>,
    );
    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});

describe('Business Card List with saved Cards', () => {
  const useSelectorSpy = jest.spyOn(reactRedux, 'useSelector');
  const useDispatchSpy = jest.spyOn(reactRedux, 'useDispatch');

  beforeEach(() => {
    useDispatchSpy.mockReturnValue(mockedDispatch);
    useSelectorSpy.mockReturnValue({
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
    });
    jest.setTimeout(10000);
  });
  const changeState = {
    ...initialState,
  };
  it('should match snapshot', () => {
    const wrapper = render(
      <Provider store={createMockStore(changeState)}>
        <BusinessCardList />
      </Provider>,
    );
    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});
