import React, {Component} from 'react';
import TabNavigator from './navigation';

class App extends Component {
  state = {Loading: true};

  render() {
    return <TabNavigator />;
  }
}

export default App;
