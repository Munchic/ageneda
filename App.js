import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ScrollView,
  StatusBar,
  TouchableOpacity,
  Image
} from 'react-native';
import Tasks from './components/Tasks/Tasks'
import FloatingButton from './components/FloatingButton/FloatingButton'
import FunctionBar from './components/FunctionBar/FunctionBar'
import AddTaskPrompt from './components/AddTaskPrompt/AddTaskPrompt'
import WelcomeScreen from './components/WelcomeScreen/WelcomeScreen'

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component {
  state = {
    showMenu: true, 
    addTask: null,

    tasks: [
      {title: 'Meeting with a client from Chase', startTime: 1, time: 0.5},
      {title: 'Program this app for the genome hackathon', startTime: 1.6, time: 2, splitColor: '#ed4842'},
      {title: 'Go swimming', startTime: 5, time: 1},
      {title: 'Visit grandma', startTime: 6.5, time: 1.5},
    ]
  }

  closeWelcomeScreenHandler = () => {
    alert('Sync with Google Calendar account khoi.u.pham@gmail.com?');
    this.setState({
      showMenu: false
    })
  }

  addTaskPromptHandler = () => {
    this.setState({
      addTask: <AddTaskPrompt clicked={this.addTaskPromptCloseHandler} />
    })
  }

  addTaskPromptCloseHandler = () => {
    this.setState({
      addTask: null,

      tasks: [
        {title: 'Meeting with a client from Chase', startTime: 1, time: 0.5},
        {title: 'Program this app for the genome hackathon', startTime: 1.6, time: 1, splitColor: '#7f965e'},
        {title: 'Go swimming', startTime: 5, time: 1},
        {title: 'Visit grandma', startTime: 6.5, time: 1.5},
        {title: 'Program this app for the genome hackathon', startTime: 3, time: 1, splitColor: '#7f965e'},
        {title: 'Read 7 Habits', startTime: 4, time: 0.5, splitColor: '#669ff9'}, 
        {title: 'Read 7 Habits', startTime: 8.5, time: 0.5, splitColor: '#669ff9'}, 
      ]
    })
  }

  welcomeScreen = <WelcomeScreen done={this.closeWelcomeScreenHandler} />;
  tasks = <Tasks tasks={this.state.tasks} clicked={this.splitTaskHandler}/>;

  splitTaskHandler = () => {
    this.setState({
      addTask: null,

      tasks: [
        {title: 'Meeting with a client from Chase', startTime: 1, time: 0.5},
        {title: 'Program this app for the genome hackathon', startTime: 1.6, time: 1, splitColor: '#7f965e'},
        {title: 'Go swimming', startTime: 5, time: 1},
        {title: 'Visit grandma', startTime: 6.5, time: 1.5},
        {title: 'Program this app for the genome hackathon', startTime: 3, time: 1, splitColor: '#7f965e'},
      ]
    })
  }

  render() {

    return (
      <View style={styles.container}>
        <FunctionBar />

        <ScrollView style={styles.mainActivity}>
          <Image
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: 200,
              height: 1581,
             
            }}
            source={require('./assets/MainActivity/Timeline.png')}
          />

          <Tasks tasks={this.state.tasks} clicked={this.splitTaskHandler}/>
        </ScrollView>

        <FloatingButton clicked={this.addTaskPromptHandler} count={this.state.count} />

        {this.state.addTask}
        {this.state.showMenu ? this.welcomeScreen : null}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: '#F5FCFF',
  },

  mainActivity: {
    height: '100%',
    zIndex: 1
  },

  timeline: {
    resizeMode: 'cover',
    backgroundColor: 'transparent'
  }
});
