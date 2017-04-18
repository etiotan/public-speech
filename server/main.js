import { Meteor } from 'meteor/meteor';
import { MessagesCol } from '../imports/api/messages.js'


Meteor.publish('messages', function(){
  return MessagesCol.find({});
})

Meteor.startup(() => {
  // code to run on server at startup
});
