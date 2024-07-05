// import {connect} from 'react-redux'
// import MessagesListComponent from '../components/MessagesList'

// export const MessagesList = connect(state => ({
//   messages: state.messages
// }), {}) (MessagesListComponent)


import { connect } from 'react-redux';
import MessagesListComponent from '../components/MessagesList';

const mapStateToProps = state => ({
  messages: state.messages
});

export const MessagesList = connect(mapStateToProps)(MessagesListComponent);

// const mapStateToProps = state => ({
//   messages: state.messages
// });

// export const MessageList = connect(mapStateToProps)(MessagesListComponent);
