/* eslint max-len: ["error", { "code": 200 }] */
import React from 'react';

const RemoveChannelModal = props =>
  (
    <div className="modal fade" id="removeChannelModal" tabIndex="-1" role="dialog" aria-hidden="true">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Removing channel</h5>
          </div>
          <div className="modal-body">
            {props.removable
              ? 'Are you sure you want to remove this channel?'
              : 'You can`t remove this channel'}
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
            {props.removable
              ? <button type="button" onClick={props.handleRemoveChannel} className="btn btn-primary" data-dismiss="modal">Remove</button>
              : null}
          </div>
        </div>
      </div>
    </div>
  );

export default RemoveChannelModal;
