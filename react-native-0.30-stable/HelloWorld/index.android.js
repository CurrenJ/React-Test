import React, { Component } from 'react';
import { AppRegistry, StyleSheet, TextInput, Text, View } from 'react-native';

class HelloWorld extends Component {
  constructor(props) {
    super(props);
    this.state = {text: ''};
  }
	
  render() {
    return (
			//<View>
			//  <Text style={styles.red}>Hello world!</Text>
			//  <Text style={styles.bigblue}>Hello world!</Text>
			//</View>
			
			<View style={{flex: 1, backgroundColor: 'powderblue',}}>
				<View style={{flex: 1}}>
			 <View style={{padding: 10}}>
				<TextInput
				style={{flex: 1}}
				placeholder="Type here to translate!"
				onChangeText={(text) => this.setState({text})}
			/>
			<Text style={{padding: 10, fontSize: 42}}>
				{this.state.text.split('e').map((word) => word && word + '').join('ə')}
			</Text>
		</View>
				<View style={styles.medium} />
				<View style={styles.large} />
			</View>
		</View>
    );
  }
}

const styles = StyleSheet.create({
  small: {
	  flex: 1,
	  backgroundColor: 'powderblue',
  },
  medium: {
	  flex: 1,
	  backgroundColor: 'skyblue',
  },
  large: {
	  flex: 1,
	  backgroundColor: 'steelblue',
  },

  bigblue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  },
  red: {
    color: 'red',
  },
});

AppRegistry.registerComponent('HelloWorld', () => HelloWorld);