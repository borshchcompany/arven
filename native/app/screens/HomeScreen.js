import React, { Component } from "react";
import { View, Text } from "react-native";

class HomeScreen extends Component {
  static navigationOptions = {
    title: 'Home'
  };

	render() {
		return (
			<View>
				<Text>Arven Home Screen</Text>
			</View>
		);
	}
}

export default HomeScreen;
