import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Button, TextInput, Snackbar} from 'react-native-paper';

const ForgotPassword = ({navigation}) => {
  const [visible, isVisible] = useState(false);
  const onToggleState = () => isVisible(!visible);
  const onDismissState = () => isVisible(false);

  return (
    <SafeAreaView style={styles.backgroundContainer}>
      <View style={styles.inputContainer}>
        <Text style={textStyles.heading}>
          Did someone forget their password?
        </Text>
        <Text style={textStyles.subHeading}>
          Just enter your email-id you've used to registr with us and we will
          send you a reset link!
        </Text>
        <TextInput
          style={styles.inputContainer}
          label="Email-id"
          mode="outlined"
        />
        <Button
          style={styles.buttonContainer}
          mode="contained"
          onPress={onToggleState}>
          {visible} Submit
        </Button>
      </View>
      <Snackbar
        visible={visible}
        onDismiss={onDismissState}
        action={{
          label: 'Ok',
          onPress: () => {
            navigation.navigate('Login');
          },
        }}>
        Please check your email for reset link!
      </Snackbar>
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
    alignSelf: 'center',
    textAlign: 'center',
  },
  subHeading: {
    fontSize: 18,
    paddingBottom: 18,
    textAlign: 'center',
  },
});

export default ForgotPassword;
