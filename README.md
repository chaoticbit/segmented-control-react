# Segmented Control React

Replica of iOS segmented control component done purely in React. Fully Responsive for all device types.

## Preview

![Segmented-Control](https://media.giphy.com/media/4QEGxn32HWLpEoj7mx/giphy.gif)

### Variants

| Variant | preview|
|---------|--------|
| Base    | ![Base](https://placehold.it/20/007aff/ffffff?text=+)|
| Dark    | ![Dark](https://placehold.it/20/333333/ffffff?text=+)|
| Success    | ![Success](https://placehold.it/20/5cb85c/ffffff?text=+)|
| Error    | ![Error](https://placehold.it/20/d9534f/ffffff?text=+)|
| Light    | White fg|

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

  | Attribute       | Type   | Description                                |              |
  |-----------------|--------|--------------------------------------------|--------------|
  | segments        | array  | List of segments                           | required     |
  | selected        | number | segment index to be selected               | default **0**    |
  | variant         | string | variant name                               | default **base** |
  | onChangeSegment | event  | method to implement logic on click segment | optional     |

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
            variant="base"
            onChangeSegment={handleChange}           
        />
      </div>
    );
  }
}
…
```