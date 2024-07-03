import React from 'react';
import Message from './Message';

function MessageList() {
  // 假设 messages 是从 Redux store 中获取的消息列表
  const messages = [
    { id: 1, text: "Hello, world!" },
    { id: 2, text: "Hi there!" },
  ];

  return (
    <div className="message-list">
      {messages.map((message) => (
        <Message key={message.id} text={message.text} />
      ))}
    </div>
  );
}

export default MessageList;