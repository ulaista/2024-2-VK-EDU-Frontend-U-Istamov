import React from 'react';
import ChatHeader from '../../components/ChatHeader/ChatHeader';
import ChatMessages from '../../components/ChatMessages/ChatMessages';
import ChatInput from '../../components/ChatInput/ChatInput';
import styles from './Chat.module.scss';

interface Message {
  id: number;
  text: string;
  sender: string;
  time: string;
  read: boolean;
}

interface ChatProps {
  chatId: number;
  chat: {
    id: number;
    name: string;
    messages: Message[];
  };
  onBack: () => void;
  onSendMessage: (chatId: number, messageText: string) => void;
}

const Chat: React.FC<ChatProps> = ({ chatId, chat, onBack, onSendMessage }) => {
  return (
    <div className={styles['chat-container']}>
      <ChatHeader title={chat.name} avatar="" onBack={onBack} />
      <ChatMessages messages={chat.messages} />
      <ChatInput onMessageSubmit={(messageText) => onSendMessage(chatId, messageText)} />
    </div>
  );
};

export default Chat;
