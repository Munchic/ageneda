import React from 'react'
import { View, Text, StatusBar } from 'react-native'

const FunctionBar = (props) => {
  const styles = {
    container: {
      width: '100%',
      height: 70
    },

    statusBar: {
      width: '100%',
      height: 20,
      backgroundColor: '#e46565'
    },

    functionBar: {
      width: '100%',
      height: 50,
      backgroundColor: '#fe7171',
      justifyContent: 'center',
      shadowOffset: { position: 'absolute', height: 4, zIndex: 2 },
      shadowColor: 'black',
      shadowOpacity: 0.3,
      zIndex: 3
    },

    title: {
      left: 50,
      fontFamily: 'Helvetica',
      fontSize: 20,
      fontWeight: 'bold',
      color: 'white',
    }
  };

  const date = new Date().toDateString();
  
  return (
    <View>
      {StatusBar.setBarStyle('light-content', true)}
      <View style={styles.statusBar} />
      <View style={styles.functionBar}>
        <Text style={styles.title}>{date.slice(0, 3)}, {date.slice(4, 10)}</Text>
      </View>
    </View>
  )
}

export default FunctionBar
