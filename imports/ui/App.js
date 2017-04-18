import React from 'react'
import InputField from './components/InputField'
import Messages from './components/Messages'

import { createContainer } from 'meteor/react-meteor-data';
import { MessagesCol } from '../api/messages.js'


class App extends React.Component{



  render(){
    let messagesCollection = this.props.messages

    return(
      <div className="jumbotron jumbotron-fluid">
      <h1 className="text-center">Public Message</h1>

      <InputField />
      <ul className="list-group">
      {messagesCollection.map((messages)=>{
        return <Messages key={messages._id} messages={messages} />
      })}
      </ul>
      <footer className='text-muted credit text-center'>
        <a href='https://github.com/etiotan'>
          <i className="fa fa-github fa-3x" aria-hidden="true"></i>
        </a>

      </footer>
      </div>




    )
  }

}

export default createContainer(() => {
  //to get the resolutions that have been  published on server
  Meteor.subscribe("messages")
  return {
    messages: MessagesCol.find().fetch(),
  };
}, App);
