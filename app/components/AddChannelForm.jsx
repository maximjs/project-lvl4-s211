/* eslint max-len: ["error", { "code": 200 }] */
import React from 'react';
import { Field, reduxForm } from 'redux-form';

class AddChannelForm extends React.Component {
  state = { buttonText: 'Add channel', showForm: false };

  handleClick = () => {
    const buttonText = this.state.buttonText === 'Add channel' ? 'Chancel' : 'Add channel';
    const showForm = this.state.showForm === false;
    this.setState({
      buttonText,
      showForm,
    });
    if (this.state.buttonText === 'Chancel') {
      this.props.reset();
    }
  };

  updateChannels = (values) => {
    this.props.updateChannels({ name: values.text });
    this.props.reset();
    this.handleClick();
  };

  showInputForm() {
    const disabled = this.props.сhannelCreatingState === 'requested';
    return (
      <form action="" onSubmit={this.props.handleSubmit(this.updateChannels)}>
        <div className="input-group mb-3">
          <Field name="text" required component="input" type="text" className="form-control" placeholder="channel name" />
          <div className="input-group-append">
            <button className="btn btn-outline-primary btn-sm" disabled={disabled} type="submit">Add</button>
          </div>
        </div>
      </form>
    );
  }

  render() {
    return (
      <div>
        <button type="button" onClick={this.handleClick} className="btn btn-primary btn-sm">{this.state.buttonText}</button>
        {this.state.showForm === true ? this.showInputForm() : null}
      </div>
    );
  }
}

export default reduxForm({
  form: 'addChannel',
})(AddChannelForm);
