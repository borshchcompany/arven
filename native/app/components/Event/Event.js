import React from "react";
import PropTypes from "prop-types";
import { View, Text, Dimensions } from "react-native";

import styles from "./styles";

import {
	DEFAULT_GRAPH_COLOR,
	ALERT_GRAPH_COLOR,
	DANGER_GRAPH_COLOR
} from '../../configs/constants';

const { height, width } = Dimensions.get("window");

const todayDate = new Date();
const todayDay = todayDate.getDate();

const Event = ({ name, date }) => {
	return (
		<View style={styles.eventContainer}>
			<View style={styles.eventTitleContainer}>
				<Text>{name}</Text>
				<Text style={{ marginLeft: 5 }}>{date}</Text>
				<Text>{todayDay}</Text>
			</View>
			<View
				style={{
					width: date.substr(0, 2) * (width - 32) / 30,
					height: 20,
          backgroundColor: 
            (date.substr(0, 2) - todayDay) < 3 ? DANGER_GRAPH_COLOR :
              (date.substr(0, 2) - todayDay) < 7 ? ALERT_GRAPH_COLOR : DEFAULT_GRAPH_COLOR
				}}
			/>
		</View>
	);
};

Event.propTypes = {
	name: PropTypes.string,
  date: PropTypes.string,
  color: PropTypes.string
};

export default Event;
