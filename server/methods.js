import { MessagesCol } from '../imports/api/messages.js'



Meteor.methods({
  addMessages(message){
    check(message, String)
    MessagesCol.insert({
        text: message,
        createdAt: new Date()
    })
  },
  removeMessage(message){
    check(message, Object)
    MessagesCol.remove(message._id)
  }
})
