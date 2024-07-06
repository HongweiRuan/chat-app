// import logo from './logo.svg';
import React from 'react';
import './App.css';
import { Sidebar } from "./containers/SideBar"
import { MessagesList } from "./containers/MessagesList"
import { AddMessage } from "./containers/AddMessage"

const App = () => (
  <div id="container">
    <Sidebar />
    <section id="main">
      <MessagesList />
      <AddMessage />
    </section>
  </div>
)

export default App;
