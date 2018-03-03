import React from 'react';

const Messages = (props) => {
  const { messages } = props;
  const messagesRender = messages.map(message =>
    (
      <li key={message.id} className="list-group-item">
        <b>{`${message.userName}: `}</b>
        {message.text}
      </li>
    ));
  return (
    <ul className="list-group">
      {messagesRender}
    </ul>
  );
};

export default Messages;
