import React, { Component } from 'react';
import { SegmentedControl } from 'segmented-control-react';
import logo from './logo.svg';
import './App.css';

const segments = ['All','Unread','Drafts','Pins'];

class App extends Component {
  render() {
    return (
      <div className="App">
        <SegmentedControl 
            segments={segments}
            selected={0}
        />
      </div>
    );
  }
}

export default App;
