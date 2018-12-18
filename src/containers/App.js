import React, { Component } from 'react';
import Headline from '../components/Headline/Headline';
import TextEntry from '../components/TextEntry/TextEntry';
import UserComments from '../components/UserComments/UserComments';
class App extends Component {
  render() {
    return (
      <div>
        <Headline isColor={true} />
        <p>This is some basic content.</p>
        <TextEntry />
        <UserComments />
      </div>
    );
  }
}
export default App;