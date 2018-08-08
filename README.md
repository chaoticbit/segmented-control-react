# Segmented Control React

Replica of iOS segmented control component done purely in React.

## Installation

`npm install segmented-control-react —-save`  
  
OR
  
`yarn add segmented-control-react`

## Usage

* ### For commonJS import syntax
    `const SegmentedControl = require('segmented-control-react');`

* ### For Es2016
    `import { SegmentedControl } from 'segmented-control-react';`

## Props

| Attribute       | Type          | Description |  
| ----------------|:-------------:|:-----------:|
| segments        | array         | Array containing list of segments
| selected        | number        | default selected segment index number
| onChangeSegment | event         | method to implement logic when segment is clicked.

## Example

```
…
import { SegmentedControl } from 'segmented-control-react';

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
            onChangeSegment={handleChange}           
        />
      </div>
    );
  }
}
…
```