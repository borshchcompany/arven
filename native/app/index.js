import React from "react";
import { Provider } from "react-redux";
import { StyleSheet, Text, View } from "react-native";

import store from "./configs/store";
import RootNavigator from './configs/routes';

export default class App extends React.Component {
	render() {
		return (
			<Provider store={store}>
        <RootNavigator />
			</Provider>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center"
	}
});
