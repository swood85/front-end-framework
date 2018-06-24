import React from 'react';
import { render } from 'react-dom';
import { Button } from '../src/lib/Button';
import Hello from '../src/lib/Hello';

require('babel-polyfill');
require('./scss/main.scss');
require('./index.html');

class App extends React.Component {
  render() {
    return ( 
      <div>
        <h1>'Hello world from React!'</h1>
        <h2>Imported from UI lib</h2>
        <p>Here's an example of button.</p> 
        <p>This is a React component</p> 
        <Button text="Click me!" />
        
        <Hello hello={'Hello, world! And the people of the world!'} />
      </div>
    );
  }
}
render(<App />, document.getElementById('app'));

/* Testing Ecmascript 2016 */
var a = async args => {
  const {
    a, b
  } = args;
  await console.log('Hello from the future!', a, b);
  console.log('Done');
};

a ({
  a: 1, b: 2
});