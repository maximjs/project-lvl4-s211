import React from 'react';
import { Field, reduxForm } from 'redux-form';

class AddMessageForm extends React.Component {
  updateMessage = (values) => {
    this.props.updateMessage(
      this.props.currentChannelId,
      { text: values.text, userName: this.props.userName },
    );
    this.props.reset();
  };

  render() {
    const disabled = this.props.messageCreatingState === 'requested';
    return (
      <form action="" onSubmit={this.props.handleSubmit(this.updateMessage)}>
        <div className="row">
          <div className="col-md-1">
            <button disabled={disabled} type="submit" className="btn btn-primary">Send</button>
          </div>
          <div className="col-md-11">
            <div className="form-group">
              <Field name="text" required component="input" type="text" className="form-control" placeholder="write a message" />
            </div>
          </div>
        </div>
      </form>
    );
  }
}

export default reduxForm({
  form: 'addMessage',
})(AddMessageForm);
