import React from "react";
import PropTypes from 'prop-types'
import AddMessage from "./AddMessage";

const Message = ({message, author}) => (
  <p>
    <i>{author}</i>: {message}

  </p>
)

AddMessage.propTypes = {
  message: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired
}

export default Message