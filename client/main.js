import React from 'react'
import ReactDOM from 'react-dom'
import { Meteor } from 'meteor/meteor';
import App from '../imports/ui/App'
import { MessagesCol } from '../imports/api/messages.js'



Meteor.startup(() => {
  ReactDOM.render(<App />, document.getElementById('root'));
});



hiddenConsole = console;
console = {
  log() {
    // Do nothing!
  }
};

console.log('Nothing happens!');
hiddenConsole.log('Hello how are you?');
