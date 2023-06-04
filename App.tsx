import React, {Component} from 'react';
import {
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
} from 'react-native';

const image = {uri: 'https://wallpaperaccess.com/full/467343.png'};

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
      <ImageBackground
        source={image}
        resizeMode="cover"
        style={styles.container}>
        <View style={styles.content}>
          <View style={styles.textContainer}>
            <Text>Hello world : {this.state.count} times</Text>
          </View>
          <TouchableOpacity style={styles.button} onPress={this.onPress}>
            <Text>Click me</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.footer}>
          <Text>bhuwanjung115@icloud.com</Text>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  textContainer: {
    marginBottom: 50,
  },
  button: {
    alignItems: 'center',
    backgroundColor: 'green',
    padding: 10,
    marginBottom: 10,
  },
  footer: {
    marginBottom: 20,
  },
});

export default App;
