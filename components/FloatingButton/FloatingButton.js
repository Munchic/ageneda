import React from 'react';
import { TouchableOpacity, Text } from 'react-native'

const FloatingButton = (props) => {
  const style = {
    position: 'absolute',
    bottom: 20, right: 30,
    width: 50, height: 50,
    borderRadius: 25,
    backgroundColor: '#E9C874',
    alignItems: 'center',
    justifyContent: 'center',
    shadowOffset: { width: 3,  height: 4 },
    shadowColor: 'black',
    shadowOpacity: 0.3,
    zIndex: 2,
  }

  return (
    <TouchableOpacity style={style} onPress={props.clicked}>
      <Text style={{color: 'white', fontSize: 30, fontWeight: 'bold'}}>＋</Text>
    </TouchableOpacity>
  );
}

export default FloatingButton
