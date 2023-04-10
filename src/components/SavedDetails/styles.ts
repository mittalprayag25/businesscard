import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
  },
  card: {
    height: 200,
    width: '100%',
    backgroundColor: 'white',
    marginTop: 10,
  },
  sectionTitle: {
    paddingVertical: 5,
    fontSize: 14,
    color: '#000000',
  },
  tinyLogo: {
    height: 20,
    width: 20,
    marginHorizontal: 5,
  },
  imageContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
});

export default styles;
