import React from 'react';

function UserList() {
  const users = ['User1', 'User2', 'User3']; // 示例用户列表

  return (
    <div className="user-list">
      <h2>Users</h2>
      <ul>
        {users.map((user, index) => (
          <li key={index}>{user}</li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;

