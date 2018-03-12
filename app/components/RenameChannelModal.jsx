/* eslint max-len: ["error", { "code": 200 }] */
import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Modal, Button } from 'react-bootstrap';

class RenameChannelModal extends React.Component {
  renameChannel = (values) => {
    this.props.requestRenameChannel(this.props.currentChannelId, { name: values.text });
    this.props.reset();
  };

  render() {
    return (
      <Modal backdrop={false} show={this.props.show}>
        <Modal.Header>
          <Modal.Title>
            Renaming channel
          </Modal.Title>
        </Modal.Header>
        <form action="" onSubmit={this.props.handleSubmit(this.renameChannel)}>
          <div className="input-group mb-3">
            <Field name="text" required component="input" type="text" className="form-control" placeholder="channel name" />
          </div>
          <Modal.Footer>
            <Button onClick={this.props.handleCloseModalRename} bsStyle="primary">Close</Button>
            <Button onClick={this.props.handleCloseModalRename} type="submit" bsStyle="success">Rename</Button>
          </Modal.Footer>
        </form>
      </Modal>
    );
  }
}

export default reduxForm({
  form: 'renameChannel',
})(RenameChannelModal);
