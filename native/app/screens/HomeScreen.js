import React, { Component } from "react";
import { View, Text, FlatList } from "react-native";
import { connect } from 'react-redux';

import { Container } from '../components/Container';
import { Event } from '../components/Event';
import {
	DEFAULT_GRAPH_COLOR,
	ALERT_GRAPH_COLOR,
	DANGER_GRAPH_COLOR
} from '../configs/constants';

import {
	fetchEventListByUserId,
	selectEvent
} from '../actions'

class HomeScreen extends Component {
  static navigationOptions = {
    title: 'Налоговый календарь'
	};

	componentDidMount() {
    this._loadData();
  }

  _loadData = () => {
    this.props.fetchEventListByUserId('userId');
  };	

	_onEventListItemPressed = async event => {
    await this.props.selectEvent(event);
    this.props.navigation.navigate("event_description");
  };

	_renderEventListItem = ({ item }) => {
    return (
      <Event
				name={item.name}
				date={item.date}
        onPress={this._onEventListItemPressed.bind(this, item)}
      />
    );
  };

  // _renderItemSeparator = () => (
  //   <View style={{ height: 1, backgroundColor: "#CECECE" }} />
  // );
	
	_renderEventList = () => {
    if (this.props.eventListLoading) {
      return (
        <Container>
          <ActivityIndicator />
        </Container>
      );
    } else if (this.props.eventListError) {
      return (
        <Container>
          <Text>{this.props.eventListError}</Text>
        </Container>
      );
    } else if (this.props.eventList.length > 0) {
      return (
        <FlatList
          keyExtractor={item => item.id}
          data={this.props.eventList}
          renderItem={this._renderEventListItem}
          // ItemSeparatorComponent={this._renderItemSeparator}
          extraData={this.state}
        />
      );
    } else {
      return (
        <Container>
          <Text>Nothing to show</Text>
        </Container>
      );
    }
  };

	render() {
		return (
			<Container>
			{this._renderEventList()}
			</Container>
		);
	}
}

const mapStateToProps = state => {
	return {
		eventList: state.event.eventList,
		eventListError: state.event.eventListError,
		eventListLoading: state.event.eventListLoading
	}
}

export default connect(mapStateToProps, { fetchEventListByUserId, selectEvent })(HomeScreen);
