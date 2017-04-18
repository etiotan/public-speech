import React from 'react'


export default class InputField extends React.Component {

  addMessage(event){
    let text = this.refs.message.value.trim()
    event.preventDefault();
    Meteor.call('addMessages', text)
    this.refs.message.value = "";
  }


  render() {

    return (

      <div>

        <form onSubmit={this.addMessage.bind(this)}>
          <input className="form-control" type="text" ref="message" placeholder="Insert Message Here"></input>
        </form>

      </div>

    )
  }

}
