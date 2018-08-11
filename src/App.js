import React, { Component } from 'react';
import { SegmentedControl } from './components';

const segments = ['All', 'Unread', 'Drafts', 'Trash', 'Pins'];

function handleChange(index) {
    console.log(`selected index : ${index}`);
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <SegmentedControl            
            segments={segments}
            selected={0} 
            variant="base"    
            onChangeSegment={handleChange}           
        />
      </div>
    );
  }
}

export default App;
