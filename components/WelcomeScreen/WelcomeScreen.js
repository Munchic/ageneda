import React from 'react';
import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native'

const WelcomeScreen = (props) => {
  styles = {
    container: {
      height: '100%',
      width: '100%',
      alignItems: 'center',
      zIndex: 6
    },

    background: {
      position: 'absolute',
      top: 0,
      alignSelf: 'center',
      width: 400,
      height: 600,
      zIndex: 6
    },

    input: {
      position: 'absolute',
      top: 240, 
      height: 30,
      width: 250,
      margin: 'auto',
      paddingLeft: 10,
      backgroundColor: 'white',
      borderRadius: 10,
      zIndex: 7
    },
  }

  const touchHandler = () => {
    props.done;
  }

  return (
    <TouchableOpacity style={styles.container} onPress={props.done} onLongPress={props.hold}>
      <Image style={styles.background} source={require('./background.png')}/>
      <Text>Login and password</Text>
      <TextInput
        style={styles.input}
        autoCapitalize='none'
        autoCorrect={false}
        placeholder="Username" />
      <TextInput
        secureTextEntry={true}
        style={{
          position: 'absolute',
          top: 280, 
          height: 30,
          width: 250,
          margin: 'auto',
          paddingLeft: 10,
          backgroundColor: 'white',
          borderRadius: 10,
          zIndex: 7}}
        autoCapitalize='none'
        autoCorrect={false}
        returnKeyType="done"
        placeholder="Password"
      />
    </TouchableOpacity>
  );
}

export default WelcomeScreen
