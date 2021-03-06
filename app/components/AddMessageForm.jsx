/* eslint max-len: ["error", { "code": 200 }] */
import React from 'react';
import { Field, reduxForm } from 'redux-form';

class AddMessageForm extends React.Component {
  updateMessage = (values) => {
    this.props.sendUpdateMessages(
      this.props.currentChannelId,
      { text: values.text, userName: this.props.userName },
    );
    this.props.reset();
  };

  render() {
    const disabled = this.props.messageCreatingState === 'requested';
    return (
      <form action="" onSubmit={this.props.handleSubmit(this.updateMessage)}>
        <div className="input-group mb-3">
          <Field name="text" required component="input" type="text" className="form-control" placeholder="write a message" />
          <div className="input-group-append">
            <input className="form-control btn btn-outline-primary" value="Send" disabled={disabled} type="submit" />
          </div>
        </div>
      </form>
    );
  }
}

export default reduxForm({
  form: 'addMessage',
})(AddMessageForm);
