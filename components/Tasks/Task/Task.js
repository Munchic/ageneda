import React from 'react'
import { TouchableOpacity, Text, Image } from 'react-native'

const Task = (props) => {
  const styles = {
    taskStyle: {
      width: 300,
      height: props.time * 67,
      position: 'absolute',
      top: props.startTime * 67 - 108.25,
      marginLeft: '15%',
      marginTop: 50,
      padding: 10,
      backgroundColor: props.splitColor == null ? '#fe8d8d' : props.splitColor,
      borderRadius: 10,
      shadowOffset: { width: 2,  height: 3 },
      shadowColor: 'black',
      shadowOpacity: 0.3,
    },
    
    font: {
      color: 'white',
      fontSize: 16,
      fontWeight: 'bold',
      margin: 'auto'
    }
  }

  return (
    <TouchableOpacity style={styles.taskStyle} onLongPress={props.clicked}>
      <Text style={styles.font}>{props.title}</Text>
    </TouchableOpacity>
  )
}

export default Task
