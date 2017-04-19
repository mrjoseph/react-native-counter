import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
} from 'react-native';

class TestComponent extends Component {
  constructor(props) {
    super(props)
  }
  render (){
    return (
      <View>
      <Text>{this.props.props}</Text>
      </View>
    )
  }
}

export default TestComponent;
