import React from 'react';
import { StyleSheet, Text } from 'react-native';

interface IEmptyDetails {
  isListEmpty: boolean;
}

const EmptyDetails: React.FC<IEmptyDetails> = (props: IEmptyDetails) => {
  return <>{props.isListEmpty && <Text>{'List is empty'}</Text>}</>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerNoFlex: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default EmptyDetails;
