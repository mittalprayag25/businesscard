import React, { useEffect, memo } from 'react';
import { SafeAreaView, Image, View, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { UserDetail } from '../BusinessCardDetails';
import EmptyDetails from '../../components/EmptyDetails';
import SavedDetails from '../../components/SavedDetails';
import { useNavigation } from '@react-navigation/native';
import actions from '../../redux/actions';
import { ScrollView } from 'react-native-gesture-handler';
import { RootState } from '../../redux/reducers';
import { Routes } from './../../constants/NavigationUtils';
import styles from './styles';

const BusinessCardList = (): JSX.Element => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const { savedCards }: any = useSelector((s: RootState) => s.businessCards);

  const onPresshandler = () => {
    navigation.navigate(Routes.BUSINESSCARDDETAILS, {});
  };

  const onDelete = (index: number) => {
    dispatch(actions.businessList.delete(index));
  };

  const openDetails = data => {
    navigation.navigate(Routes.BUSINESSCARDDETAILS, { card: data });
  };

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity onPress={onPresshandler} testID="addUser">
          <Image
            source={require('../../assets/add-user.png')}
            style={styles.menuItem}
          />
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  return (
    <>
      <SafeAreaView style={styles.container}>
        {savedCards === undefined || savedCards.length === 0 ? (
          <View style={styles.container}>
            <EmptyDetails isListEmpty={savedCards.length === 0} />
          </View>
        ) : (
          <ScrollView style={styles.list}>
            {savedCards &&
              savedCards.map(
                (savedCard: UserDetail, index: number) =>
                  savedCard && (
                    <SavedDetails
                      key={index}
                      index={index}
                      onDeleteHandler={onDelete}
                      userDetails={savedCard}
                      onOpen={openDetails}
                    />
                  ),
              )}
          </ScrollView>
        )}
      </SafeAreaView>
    </>
  );
};

export default memo(BusinessCardList);
