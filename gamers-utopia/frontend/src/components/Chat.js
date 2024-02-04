import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [username, setUsername] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    // Fetch messages when the component mounts
    fetchMessages();
  }, []);

  const fetchMessages = () => {
    // Make a GET request to your Django backend API endpoint
    axios.get('http://localhost:8000/api/messages')
      .then(response => {
        // Update the state with the received messages
        setMessages(response.data);
      })
      .catch(error => {
        console.error('Error fetching messages:', error);
      });
  };

  const sendMessage = (e) => {
    e.preventDefault();

    // Make a POST request to your Django backend API endpoint
    axios.post('http://localhost:8000/api/messages', {
      username: username,
      message: message,
    })
    .then(response => {
      // Update the state with the new message
      setMessages([...messages, response.data]);

      // Clear the input fields
      setUsername('');
      setMessage('');
    })
    .catch(error => {
      console.error('Error sending message:', error);
    });
  };

  return (
    <div>
      <h1>Chat Messages</h1>
      <ul>
        {messages.map((msg, index) => (
          <li key={index}>
            <strong>{msg.username}:</strong> {msg.message}
          </li>
        ))}
      </ul>
      
      <form onSubmit={sendMessage}>
        <label>
          Username:
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </label>
        <br />
        <label>
          Message:
          <input type="text" value={message} onChange={(e) => setMessage(e.target.value)} />
        </label>
        <br />
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default Chat;
