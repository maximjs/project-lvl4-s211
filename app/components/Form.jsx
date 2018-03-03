import React from 'react';
import cookies from 'js-cookie';
import { updateInputForm, updateMessage } from '../actions';

const userName = cookies.get('name') ? cookies.get('name') : 'new user';

class Form extends React.Component {
  handleInputChange = (e) => {
    this.props.dispatch(updateInputForm({ text: e.target.value }));
  };

  updateMessage = (e) => {
    e.preventDefault();
    this.props.dispatch(updateMessage(
      this.props.currentChannelId,
      { text: this.props.newMessageText, userName },
    ));
  };

  render() {
    return (
      <form action="" onSubmit={this.updateMessage}>
        <div className="row">
          <div className="col-md-1">
            <button type="submit" className="btn btn-primary btn-sm">Send</button>
          </div>
          <div className="col-md-11">
            <div className="form-group">
              <input type="text" onChange={this.handleInputChange} required value={this.props.newMessageText} className="form-control" placeholder="Write a message" />
            </div>
          </div>
        </div>
      </form>
    );
  }
}

export default Form;
