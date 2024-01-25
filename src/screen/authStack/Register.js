import {StyleSheet, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import React from 'react';
import {useState} from 'react';
import {Button, TextInput} from 'react-native-paper';
import auth from '@react-native-firebase/auth';

const Register = ({navigation}) => {
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const reset = () => {
    setUserName('');
    setEmail('');
    setPassword('');
    setConfirmPassword('');
  };

  const userRegister = () => {
    auth()
      .createUserWithEmailAndPassword(email, confirmPassword)
      .then(() => {
        navigation.navigate('Login');
        console.log('User account created & signed in!');
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          console.log('That email address is already in use!');
        }
        if (error.code === 'auth/invalid-email') {
          console.log('That email address is invalid!');
        }
        if (confirmPassword !== password) {
          console.log('Password does not match');
        }
        console.error(error);
      });
  };

  return (
    <SafeAreaView style={styles.backgroundContainer}>
      <View style={styles.inputContainer}>
        <Text style={textStyles.heading}>WELCOME TO FIREBASE DEMO</Text>
        <TextInput
          style={styles.inputContainer}
          value={userName}
          onChangeText={setUserName}
          label="Enter your name"
          mode="outlined"
        />
        <TextInput
          style={styles.inputContainer}
          label="Enter your email-id"
          value={email}
          onChangeText={setEmail}
          mode="outlined"
        />
        <TextInput
          style={styles.inputContainer}
          label="Enter password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          right={<TextInput.Icon icon="eye" />}
          mode="outlined"
        />
        <TextInput
          style={styles.inputContainer}
          label="Confirm password"
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          secureTextEntry
          right={<TextInput.Icon icon="eye" />}
          mode="outlined"
        />
        <Button
          style={styles.buttonContainer}
          mode="contained"
          onPress={() => {
            userRegister();
            reset();
          }}>
          Register
        </Button>
        <Text style={{alignSelf: 'center', padding: 8}}>OR</Text>
        <Button
          style={styles.buttonContainer}
          icon="google"
          mode="elevated"
          buttonColor="white">
          Continue with Google
        </Button>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  backgroundContainer: {
    flex: 1,
    justifyContent: 'center',
    margin: 16,
  },
  inputContainer: {
    margin: 8,
  },
  button: {
    flexDirection: 'row',
    justifyContent: 'center',
  },

  buttonContainer: {
    marginHorizontal: 8,
    marginVertical: 8,
  },
  go2LoginContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 2,
  },
});

const textStyles = StyleSheet.create({
  heading: {
    fontSize: 36,
    fontWeight: 'bold',
    paddingBottom: 18,
    alignSelf: 'flex-start',
  },
});

export default Register;
