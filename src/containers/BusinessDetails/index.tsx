import React, { useEffect, memo } from 'react';
import { Alert, Button, ScrollView, Text, TextInput } from 'react-native';
import Card from './../../components/Card';
import { useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';

import actions from '../../redux/actions';

export interface UserDetail {
  businessDetail?: any;
  name: string;
  occupation: string;
  company: string;
  email: string;
  phone: string;
  linkedin?: string;
}

const BusinessDetails = ({ route }): JSX.Element => {
  const navigation = useNavigation();
  const { card } = route.params;
  useEffect(() => {
    if (card) {
      setUserData(card);
    }
  });

  const dispatch = useDispatch();
  const [user, setUserData] = React.useState<UserDetail>({
    name: '',
    occupation: '',
    company: '',
    email: '',
    phone: '',
    linkedin: '',
  });

  const isEmailValid = (email: string) => {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return reg.test(email);
  };

  const isLinkedinValid = (email: string) => {
    let reg =
      /^(http(s)?:\/\/)?([\w]+\.)?linkedin\.com\/(pub|in|profile)\/([-a-zA-Z0-9]+)\/*/gm;
    return reg.test(email);
  };

  const showAlert = (title: string, message: string) => {
    Alert.alert(title, message, [
      { text: 'OK', onPress: () => console.log('OK Pressed') },
    ]);
  };

  const handleClick = () => {
    if (
      !user.company ||
      !user.email ||
      !user.name ||
      !user.occupation ||
      !user.phone
    ) {
      showAlert('Error', 'Please enter all details');
    } else if (user.email && !isEmailValid(user.email)) {
      showAlert('Error', 'Invalid Email ID');
    } else if (user.linkedin && !isLinkedinValid(user.linkedin)) {
      showAlert('Error', 'Invalid linkedin profile');
    } else {
      dispatch(actions.businessList.add(user as any));
      showAlert('', 'Information has been saved');
      setUserData({
        name: '',
        occupation: '',
        company: '',
        email: '',
        phone: '',
        linkedin: '',
      });
      navigation.goBack();
    }
  };
  return (
    <>
      <Card cardStyle={styles.card}>
        <ScrollView>
          {!card ? (
            <Text style={styles.sectionTitle}>Enter person's contact info</Text>
          ) : (
            <Text style={styles.sectionTitle}>Details</Text>
          )}
          <TextInput
            editable={!card}
            onChangeText={text => setUserData({ ...user, name: text })}
            value={user.name}
            style={styles.input}
            placeholder="Name"
          />
          <TextInput
            editable={!card}
            onChangeText={text => setUserData({ ...user, occupation: text })}
            value={user.occupation}
            style={styles.input}
            placeholder="Occupation / Title"
          />
          <TextInput
            editable={!card}
            onChangeText={text => setUserData({ ...user, company: text })}
            value={user.company}
            style={styles.input}
            placeholder="Company"
          />
          <TextInput
            editable={!card}
            onChangeText={text => setUserData({ ...user, email: text })}
            value={user.email}
            style={styles.input}
            placeholder="Email Address"
          />
          <TextInput
            editable={!card}
            onChangeText={text => setUserData({ ...user, phone: text })}
            value={user.phone}
            style={styles.input}
            placeholder="Phone Number"
          />
          <TextInput
            editable={!card}
            onChangeText={text => setUserData({ ...user, linkedin: text })}
            value={user.linkedin}
            style={styles.input}
            placeholder="LinkedIn URL (optional)"
          />
          {!card && <Button onPress={handleClick} title="Save" />}
        </ScrollView>
      </Card>
    </>
  );
};

export default memo(BusinessDetails);
