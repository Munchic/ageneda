import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import Task from './Task/Task'

const Tasks = (props) => {
  return (
    <View>
      {props.tasks.map((task, id) => 
        <Task key={id} title={task.title} startTime={task.startTime} time={task.time} splitColor={task.splitColor} clicked={props.clicked} />
      )}
    </View>
  )
}

export default Tasks
