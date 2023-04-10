import React from 'react';
import Card from '../../components/Card';
import { Image, View, ScrollView, Text, TouchableOpacity } from 'react-native';
import { UserDetail } from '../BusinessDetails';
import Contacts from 'react-native-contacts';
import styles from './styles';

interface ISavedDetails {
  userDetails: UserDetail;
  onDeleteHandler: (index: number) => void;
  onOpen: (payload: object) => void;
  index: number;
}

const SavedDetails: React.FC<ISavedDetails> = (props: ISavedDetails) => {
  const saveToContactsHandler = () => {
    var newPerson = {
      phoneNumbers: [
        {
          label: 'mobile',
          number: props.userDetails.phone,
        },
      ],
      emailAddresses: [
        {
          label: 'work',
          email: props.userDetails.email,
        },
      ],
      displayName: props.userDetails.name,
    };
    Contacts.openContactForm(newPerson).then(contact => {
      alert('contact has been saved');
    });
  };
  return (
    <Card key={Math.random()} cardStyle={styles.card} {...props}>
      <ScrollView>
        {props.userDetails && (
          <>
            <View style={styles.imageContainer}>
              <TouchableOpacity onPress={() => props.onOpen(props.userDetails)}>
                <Image
                  style={styles.tinyLogo}
                  source={require('../../assets/view.png')}
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => props.onDeleteHandler(props.index)}
              >
                <Image
                  style={styles.tinyLogo}
                  source={require('../../assets/delete.png')}
                />
              </TouchableOpacity>
              <TouchableOpacity onPress={saveToContactsHandler}>
                <Image
                  style={styles.tinyLogo}
                  source={require('../../assets/diskette.png')}
                />
              </TouchableOpacity>
            </View>
            <Text style={styles.sectionTitle}>{props.userDetails.name}</Text>
            <Text style={styles.sectionTitle}>
              {props.userDetails.occupation}
            </Text>
            <Text style={styles.sectionTitle}>{props.userDetails.company}</Text>
            <Text style={styles.sectionTitle}>{props.userDetails.email}</Text>
            <Text style={styles.sectionTitle}>{props.userDetails.phone}</Text>
            <Text style={styles.sectionTitle}>
              {props.userDetails.linkedin ?? ''}
            </Text>
          </>
        )}
      </ScrollView>
    </Card>
  );
};

export default SavedDetails;
