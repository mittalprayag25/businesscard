import React from 'react';
import { StyleSheet, View, ViewStyle } from 'react-native';

interface ICardProps {
  cardStyle: ViewStyle;
  children: JSX.Element;
}
const Card: React.FC<ICardProps> = ({ cardStyle, children }) => {
  return <View style={[style.card, cardStyle]}>{children}</View>;
};

const style = StyleSheet.create({
  card: {
    shadowColor: 'white',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.1,
    elevation: 8,
    paddingHorizontal: 20,
    paddingTop: 10,
    borderRadius: 10,
  },
});

export default Card;
