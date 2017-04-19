import React, { Component, PropTypes } from 'react';
import { Provider, connect } from 'react-redux';
import { AppRegistry, StyleSheet, Text, View, TouchableHighlight } from 'react-native';
import { nativeHistory, Route, NativeRouter } from 'react-router-native';

import { increment, decrement } from '../../redux/actions/counterAction/counterAction';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  button: {
    fontSize: 40,
    borderWidth: 1,
    borderColor: '#000000',
    borderStyle: 'solid',
    width: 60,
    height: 60,
    textAlign: 'center',
  },
  buttonContainer: {
    textAlign: 'center',
  },
});

class MyButton extends Component {
  static propTypes = {
    func: PropTypes.func.isRequired,
    title: PropTypes.string.isRequired,
  }
  onPressButton = () => {
    this.props.func();
  }
  render() {
    return (
      <View>
        <TouchableHighlight onPress={this.onPressButton}>
          <Text style={styles.button}>{this.props.title}</Text>
        </TouchableHighlight>
      </View>
    );
  }
}
// Component
class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: '',
    };
  }
  static propTypes = {
    count: PropTypes.number.isRequired,
    decrement: PropTypes.func.isRequired,
    increment: PropTypes.func.isRequired,
  }
  componentDidMount() {
    this.setState({ count: this.props.count });
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ count: nextProps.count });
  }
  render() {
    return (
      <View style={styles.container}>
        <MyButton title="-" func={() => this.props.decrement(this.state.count)} />
        <Text style={styles.welcome}>
          {this.state.count}
        </Text>
        <MyButton title="+" func={() => this.props.increment(this.state.count)} />
      </View>
    );
  }
}
export default ConnectedApp = connect(state => ({ ...state.count }), { increment, decrement })(Counter);
