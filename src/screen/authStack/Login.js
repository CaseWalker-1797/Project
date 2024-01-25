import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Button, TextInput} from 'react-native-paper';
import auth from '@react-native-firebase/auth';

const Login = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const reset = () => {
    setEmail('');
    setPassword('');
  };

  const userLogin = () => {
    auth()
    .signInWithEmailAndPassword(email, password) .then(() => {
      navigation.navigate('Home');
      console.log('User logged in successfully!');
    })
    .catch(error => {
      if (error.code === 'auth/invalid-email') {
        console.log('That email address is invalid!');
      }
      if (error.code === 'auth/wrong-p') {
        console.log('Password does not match');
      }
      console.error(error);
    });
    navigation.navigate('DrawerNav');
  };

  return (
    <SafeAreaView style={styles.backgroundContainer}>
      <View style={styles.inputContainer}>
        <Text style={textStyles.heading}>Log in</Text>
        <TextInput
          style={styles.inputContainer}
          label="Enter email-id"
          value={email}
          onChangeText={setEmail}
          mode="outlined"
        />
        <TextInput
          style={styles.inputContainer}
          label="Enter password"
          value={password}
          onChangeText={setPassword}
          mode="outlined"
        />
        <Button
          style={styles.forgotPasswordContainer}
          onPress={() => navigation.navigate('ForgotPassword')}>
          Forgot Passwrod?
        </Button>
        <Button
          style={styles.buttonContainer}
          mode="contained"
          onPress={() => {
            userLogin();
            reset();
          }}>
          Login
        </Button>
        <Text style={{alignSelf: 'center', padding: 8}}>OR</Text>
        <Button
          style={styles.buttonContainer}
          icon="google"
          mode="elevated"
          buttonColor="white">
          Login with Google
        </Button>
      </View>
      <View style={styles.go2RegisterContainer}>
        <Text>Don't have an account?</Text>
        <Button onPress={() => navigation.navigate('Register')}>
          Register
        </Button>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  backgroundContainer: {
    flex: 1,
    margin: 16,
    justifyContent: 'center',
  },
  inputContainer: {
    margin: 8,
  },
  forgotPasswordContainer: {
    alignSelf: 'flex-end',
    padding: 8,
  },
  go2RegisterContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 2,
  },
  buttonContainer: {
    alignSelf: 'center',
    width: '90%',
    margin: 8,
    padding: 8,
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

export default Login;
