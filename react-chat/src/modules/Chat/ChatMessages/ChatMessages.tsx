import React, { useEffect, useRef } from 'react';
import styles from './ChatMessages.module.scss';
import { Message } from '../../../App';
import MessageItem from '../../../components/Message/Message';

interface ChatMessagesProps {
  messages: Message[];
}

const ChatMessages: React.FC<ChatMessagesProps> = ({ messages }) => {
  const messagesContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (messagesContainerRef.current) {
      messagesContainerRef.current.scrollTop = messagesContainerRef.current.scrollHeight;
    }
  }, [messages])

  return (
    <div className={styles['message-list']}>
      {messages.slice().reverse().map((message) => {
        const isSentByCurrentUser = message.sender === 'You';

        return (
          <MessageItem key={message.id} isSentByCurrentUser={isSentByCurrentUser} message={message}/>
        );
      })}
    </div>
  );
};

export default ChatMessages;
