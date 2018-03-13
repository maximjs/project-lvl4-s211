/* eslint max-len: ["error", { "code": 200 }] */
import React from 'react';
import { Field, reduxForm } from 'redux-form';

class AddChannelForm extends React.Component {
  handleClick = () => {
    this.props.switchShowAddChannelForm();
    if (this.props.isShowAddChannelForm === true) {
      this.props.reset();
    }
  };

  updateChannels = (values) => {
    this.props.sendUpdateChannels({ name: values.text });
    this.props.reset();
  };

  showInputForm() {
    const disabled = this.props.сhannelCreatingState === 'requested';
    return (
      <form action="" onSubmit={this.props.handleSubmit(this.updateChannels)}>
        <div className="input-group mb-3">
          <Field name="text" required component="input" type="text" className="form-control" placeholder="channel name" />
          <div className="input-group-append">
            <input className="form-control btn btn-outline-primary btn-sm" value="Add" disabled={disabled} type="submit" />
          </div>
        </div>
      </form>
    );
  }

  render() {
    const buttonText = this.props.isShowAddChannelForm ? 'Chancel' : 'Add channel';
    return (
      <div>
        <button type="button" onClick={this.handleClick} className="btn btn-primary btn-sm">{buttonText}</button>
        {this.props.isShowAddChannelForm === true ? this.showInputForm() : null}
      </div>
    );
  }
}

export default reduxForm({
  form: 'addChannel',
})(AddChannelForm);
