import React, {Component} from 'react';
import AppContainer from './navigation';

class App extends Component {
  state = {Loading: true};

  render() {
    return <AppContainer />;
  }
}

export default App;
