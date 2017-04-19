
import React, { Component, PropTypes } from 'react';
import { Provider, connect } from 'react-redux';
import { nativeHistory, Route, NativeRouter } from 'react-router-native';
import store from './redux/configureStore';
import ConnectedApp from './views/todoList/TodoList';
// Routing...
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <NativeRouter history={nativeHistory}>
          <Route path="/" component={ConnectedApp} />
        </NativeRouter>
      </Provider>
    );
  }
}

export default App;
