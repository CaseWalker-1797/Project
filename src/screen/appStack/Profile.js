import {StyleSheet, View, Alert} from 'react-native';
import React, {useState} from 'react';
import {Text, Button, Avatar, Modal} from 'react-native-paper';
import {SafeAreaView} from 'react-native-safe-area-context';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

const Profile = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [imgUrl, setImagUrl] = useState('');

  const openCamera = () => {
    launchCamera(
      {
        mediaType: 'photo',
        includeBase64: false,
        maxHeight: 200,
        maxWidth: 200,
      },
      response => {
        setImagUrl(response?.assets[0].uri);
      },
    );
  };

  const openGallery = () => {
    launchImageLibrary(
      {
        mediaType: 'photo',
        includeBase64: false,
        maxHeight: 200,
        maxWidth: 200,
      },
      response => {
        setImagUrl(response.assets[0].uri);
      },
    );
  };

  const modalChoose = () => {
    Alert.alert(
      'Choose Profile Picture',
      'Upload from gallery or take a picture',
      [
        {
          text: 'Camera',
          onPress: () => openCamera(),
        },
        {
          text: 'Gallery',
          onPress: () => openGallery(),
        },
      ],
      {cancelable: true},
    );
  };

  return (
    <SafeAreaView style={styles.backgroundContainer}>
      <Avatar.Image
        style={styles.avatarContaier}
        size={96}
        source={
          imgUrl ? {uri: imgUrl} : require('../../assets/image/avatar.png')
        }
      />
      <Button mode="text" onPress={modalChoose} style={styles.buttonContainer}>
        Change Profile
      </Button>
      <View style={styles.textContainer}>
        <Text>Name </Text>
        <Text> {name}</Text>
      </View>
      <View style={styles.textContainer}>
        <Text>E-mail </Text>
        <Text>{email} </Text>
      </View>
      <Button mode="contained" style={styles.buttonContainer}>
        Log out
      </Button>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  backgroundContainer: {
    flex: 1,
    margin: 6,
  },
  avatarContaier: {
    alignSelf: 'center',
    margin: 4,
  },
  textContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 18,
  },
  buttonContainer: {
    alignSelf: 'center',
    width: '50%',
    margin: 8,
    padding: 4,
  },
});

const textStyles = StyleSheet.create({});

export default Profile;
