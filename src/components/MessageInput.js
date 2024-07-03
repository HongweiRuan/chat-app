import React, { useState } from 'react';

function MessageInput() {
  const [message, setMessage] = useState('');

  const handleSendMessage = () => {
    // 发送消息的逻辑
    console.log("Message sent: ", message);
    setMessage('');
  };

  return (
    <div className="message-input">
      <input 
        type="text" 
        value={message} 
        onChange={(e) => setMessage(e.target.value)} 
      />
      <button onClick={handleSendMessage}>Send</button>
    </div>
  );
}

export default MessageInput;
