/* eslint max-len: ["error", { "code": 200 }] */
import React from 'react';
import { Field, reduxForm } from 'redux-form';

class RenameChannelModal extends React.Component {
  // state = { modalClass: false };
  renameChannel = (values) => {
    this.props.requestRenameChannel(this.props.currentChannelId, { name: values.text });
    this.props.reset();
  };

  // close = () => this.setState({ modalClass: 'modal fade' });

  render() {
    // const modalClass = this.state.visible ? 'modal fade in' : 'modal fade';
    return (
      <div className="modal fade" id="renameChannelModal" tabIndex="-1" role="dialog" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Renaming channel</h5>
            </div>
            <form action="" onSubmit={this.props.handleSubmit(this.renameChannel)}>
              <div className="input-group mb-3">
                <Field name="text" required component="input" type="text" className="form-control" placeholder="channel name" />
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                <button type="submit" className="btn btn-primary">Rename</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default reduxForm({
  form: 'renameChannel',
})(RenameChannelModal);
