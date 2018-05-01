import React, {Component} from 'react';
import ReactDOM, {Component} from 'reactDOM';

class App extends Component {
    render() {
      return (<div> Hello World! </div>);
    }
   }
   var rootdiv = document.getElementById('root');
   ReactDOM.render((<App/>), rootdiv);

   // We need to import the React and ReactDOM library to be able to use the components.
