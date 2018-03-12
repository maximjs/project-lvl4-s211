/* eslint max-len: ["error", { "code": 200 }] */
import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const RemoveChannelModal = props =>
  (
    <Modal backdrop={false} show={props.show}>
      <Modal.Header>
        <Modal.Title>
          Removing channel
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {props.removable
          ? 'Are you sure you want to remove this channel?'
          : 'You can`t remove this channel'}
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.handleCloseModalRemove} bsStyle="primary">Close</Button>
        {props.removable
          ? <Button onClick={props.handleRemoveChannel} bsStyle="success">Remove</Button>
          : null}
      </Modal.Footer>
    </Modal>
  );

export default RemoveChannelModal;
