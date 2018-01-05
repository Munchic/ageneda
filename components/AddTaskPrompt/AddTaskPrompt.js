import React from 'react'
import { View, Text, TextInput, TouchableOpacity, Slider, DatePickerIOS } from 'react-native'

const AddTaskPrompt = (props) => {
  styles = {
    overlay: {
      position: 'absolute',
      top: 0,
      width: '100%',
      height: '100%',
      backgroundColor: 'rgba(50, 50, 50, 0.5)',
      zIndex: 4
    },

    prompt: {
      position: 'absolute',
      bottom: 280, alignSelf: 'center',
      width: 300, height: 350,
      backgroundColor: 'rgba(252, 191, 191, 0.8)',
      borderRadius: 25,
      shadowOffset: { position: 'absolute', width: 3, height: 4, zIndex: 5 },
      shadowColor: 'black',
      shadowOpacity: 0.3,
      alignItems: 'center',
      zIndex: 5,
      overflow: 'hidden',
    },

    title: {
      fontFamily: 'Helvetica',
      fontSize: 20,
      fontWeight: 'bold',
      color: 'white',
      top: 20,
    },

    input: {
      height: 30,
      width: 250,
      margin: 5,
      paddingLeft: 10,
      backgroundColor: 'white',
      borderRadius: 10
    },

    difficultySlider: {
      backgroundColor: 'black',
      top: 50
    },

    button: {
      position: 'absolute',
      bottom: 0,
      alignSelf: 'center',
      width: 300, height: 60,
      backgroundColor: '#fe8d8d',
      alignItems: 'center',
      justifyContent: 'center',
    },

    buttonTitle: {
      fontFamily: 'Helvetica',
      fontSize: 20,
      fontWeight: 'bold',
      color: 'white',
    }
  }

  let value;

  return (
    <View style={styles.overlay}> 
    <View style={styles.prompt}>
      <Text style={styles.title}>Add an event</Text>

      <View style={{top: 30}}>
        <TextInput style={styles.input} onChangeText={value} placeholder="Description" />
        <TextInput style={styles.input} onChangeText={value} placeholder="Type (e.g. computer)"/>
        <TextInput style={styles.input} onChangeText={value} placeholder="Difficulty (0-5)" />
        <TextInput style={styles.input} onChangeText={value} placeholder="Duration (h:mm)"/>
        <TextInput style={styles.input} onChangeText={value} placeholder="Timeframe (h:mm-h:mm)"/>
      </View>

      <TouchableOpacity style={styles.button} onPress={props.clicked}>
        <Text style={styles.buttonTitle}>Done</Text>
      </TouchableOpacity>
    </View>
  </View>
  )
}

export default AddTaskPrompt