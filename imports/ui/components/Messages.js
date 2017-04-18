import React from 'react'


export default class Messages extends React.Component{

removeMessage(){
  Meteor.call('removeMessage', this.props.messages)
}

  render(){

    return(

      <li  onClick={this.removeMessage.bind(this)}  className="list-group-item">
    <small><em>{this.props.messages.createdAt.toLocaleTimeString()}</em></small> - <strong>{this.props.messages.text}</strong>

      </li>



    )
  }

}
