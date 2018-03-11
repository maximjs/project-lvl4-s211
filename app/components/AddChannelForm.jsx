/* eslint max-len: ["error", { "code": 200 }] */
import React from 'react';
import { Field, reduxForm } from 'redux-form';

class AddChannelForm extends React.Component {
  state = { showForm: false };

  handleClick = () => {
    const showForm = this.state.showForm === false;
    this.setState({ showForm });
    if (this.state.showForm === false) {
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
    const buttonText = this.state.showForm === true ? 'Chancel' : 'Add channel';
    return (
      <div>
        <button type="button" onClick={this.handleClick} className="btn btn-primary btn-sm">{buttonText}</button>
        {this.state.showForm === true ? this.showInputForm() : null}
      </div>
    );
  }
}

export default reduxForm({
  form: 'addChannel',
})(AddChannelForm);
