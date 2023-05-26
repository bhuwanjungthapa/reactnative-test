import React, {Component} from 'react';
import {StyleSheet, TouchableOpacity, Text, View} from 'react-native';

class App extends Component {
  state = {
    count: 0,
  };

  onPress = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.content}>
          <View style={styles.textContainer}>
            <Text>You clicked = {this.state.count} times</Text>
          </View>
          <TouchableOpacity style={styles.button} onPress={this.onPress}>
            <Text>Click me</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.footer}>
          <Text>bhuwanjung115@icloud.com</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textContainer: {
    marginBottom: 50,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    padding: 10,
    marginBottom: 10,
  },
  footer: {
    marginBottom: 20,
  },
});
export default App;
