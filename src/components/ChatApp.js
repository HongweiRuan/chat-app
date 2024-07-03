import React from 'react';
import UserList from './UserList';
import MessageList from './MessageList';
import MessageInput from './MessageInput';

function ChatApp() {
  return (
    <div className="chat-app">
      <UserList />
      <div className="main-section">
        <MessageList />
        <MessageInput />
      </div>
    </div>
  );
}

export default ChatApp;
