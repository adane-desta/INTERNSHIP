// src/pages/Notification.js

import React, { useState } from 'react';
import '../styles/notification.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faTimesCircle, faTrashAlt } from '@fortawesome/free-solid-svg-icons';

const Notification = () => {
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      title: 'New Property Alert',
      message: 'A new apartment has been listed in Addis Ababa.',
      read: false,
    },
    {
      id: 2,
      title: 'Price Drop',
      message: 'The price of your saved property just dropped!',
      read: false,
    },
    {
      id: 3,
      title: 'Message from Agent',
      message: 'An agent replied to your inquiry.',
      read: true,
    },
  ]);

  const toggleRead = (id) => {
    setNotifications((prev) =>
      prev.map((n) =>
        n.id === id ? { ...n, read: !n.read } : n
      )
    );
  };

  const deleteNotification = (id) => {
    setNotifications((prev) => prev.filter((n) => n.id !== id));
  };

  const clearAll = () => {
    setNotifications([]);
  };

  return (
    <div className="notification-container">
      <div className="notification-header">
        <h2>Notifications</h2>
        {notifications.length > 0 && (
          <button className="clear-btn" onClick={clearAll}>
            Clear All
          </button>
        )}
      </div>

      {notifications.length === 0 ? (
        <p className="empty-msg">No notifications right now.</p>
      ) : (
        <ul className="notification-list">
          {notifications.map((note) => (
            <li key={note.id} className={`notification-item ${note.read ? 'read' : ''}`}>
              <div className="notification-info">
                <h4>{note.title}</h4>
                <p>{note.message}</p>
              </div>
              <div className="notification-actions">
                <button
                  title={note.read ? 'Mark as unread' : 'Mark as read'}
                  onClick={() => toggleRead(note.id)}
                >
                  <FontAwesomeIcon
                    icon={note.read ? faCheckCircle : faTimesCircle}
                    color={note.read ? 'green' : 'gray'}
                  />
                </button>
                <button
                  title="Delete"
                  onClick={() => deleteNotification(note.id)}
                >
                  <FontAwesomeIcon icon={faTrashAlt} color="red" />
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Notification;
