import React, { useEffect, useRef } from 'react';
import styles from './ChatMessages.module.scss';
import DoneIcon from '@mui/icons-material/Done';
import DoneAllIcon from '@mui/icons-material/DoneAll';

interface Message {
  id: number;
  text: string;
  sender: string;
  time: string;
  read: boolean;
}

interface ChatMessagesProps {
  messages: Message[];
}

const ChatMessages: React.FC<ChatMessagesProps> = ({ messages }) => {
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  return (
    <div className={styles['message-list']}>
      {messages.map((message) => {
        const isSentByCurrentUser = message.sender === 'You';

        return (
          <div
            key={message.id}
            className={`${styles['message-item']} ${
              isSentByCurrentUser ? styles['message-sent'] : styles['message-received']
            }`}
          >
            <div className={styles['message-content']}>
              <span className={styles['message-text']}>{message.text}</span>
              <span className={styles['message-time']}>{message.time}</span>
            </div>
            <div className={styles['message-status']}>
              {message.read ? (
                <DoneAllIcon sx={{ fontSize: 16, color: 'green' }} />
              ) : (
                isSentByCurrentUser && <DoneIcon sx={{ fontSize: 16, color: 'gray' }} />
              )}
            </div>
          </div>
        );
      })}
      <div ref={messagesEndRef} />
    </div>
  );
};

export default ChatMessages;
