import React from 'react';
import { useParams } from 'react-router-dom';
import ChatHeader from '../../modules/Chat/ChatHeader/ChatHeader';
import ChatMessages from '../../modules/Chat/ChatMessages/ChatMessages';
import ChatInput from '../../modules/Chat/ChatInput/ChatInput';
import styles from './Chat.module.scss';
import { Chat } from '../../App';

interface ChatProps {
  chats: Chat[];
  onSendMessage: (chatId: number, messageText: string) => void;
}

const ChatPage: React.FC<ChatProps> = ({ chats, onSendMessage }) => {
  const { chatId } = useParams<{ chatId: string }>();
  const chat = chats.find((c) => c.id === Number(chatId));

  if (!chat) {
    return <div>Чат не найден</div>;
  }

  return (
    <div className={styles['chat-container']}>
      <ChatHeader title={chat.name} avatar="" onBack={() => window.history.back()} />
      <ChatMessages messages={chat.messages} />
      <ChatInput onMessageSubmit={(messageText) => onSendMessage(Number(chatId), messageText)} />
    </div>
  );
};

export default ChatPage;
