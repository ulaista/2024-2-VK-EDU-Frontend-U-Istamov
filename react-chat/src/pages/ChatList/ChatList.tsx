import React from 'react';
import styles from './ChatList.module.scss';
import PersonIcon from '@mui/icons-material/Person';
import AddIcon from '@mui/icons-material/Add';
import DoneIcon from '@mui/icons-material/Done';
import DoneAllIcon from '@mui/icons-material/DoneAll';
import ChatListHeader from '../../components/ChatListHeader/ChatListHeader';

interface Message {
  text: string;
  time: string;
  sender: string;
  read: boolean;
}

interface Chat {
  id: number;
  name: string;
  messages: Message[];
}

interface ChatListProps {
  chats: Chat[];
  onSelectChat: (id: number) => void;
  onAddChat: (chatName: string) => void;
}

const ChatList: React.FC<ChatListProps> = ({ chats, onSelectChat, onAddChat }) => {
  const handleAddChatClick = () => {
    const chatName = prompt('Введите название нового чата:');
    if (chatName) {
      onAddChat(chatName);
    }
  };

  return (
    <div className={styles['chat-list']}>
      <ChatListHeader />
      {chats.map((chat) => {
        const lastMessage = chat.messages.length > 0 ? chat.messages[chat.messages.length - 1] : null;

        return (
          <div key={chat.id} className={styles['chat-item']} onClick={() => onSelectChat(chat.id)}>
            <div className={styles.avatar}>
              <PersonIcon sx={{ fontSize: 40, color: '#007bff' }} />
            </div>
            <div className={styles['chat-details']}>
              <div className={styles['chat-name']}>{chat.name}</div>
              <div className={styles['last-message']}>
                {lastMessage ? `${lastMessage.sender}: ${lastMessage.text}` : 'Нет сообщений'}
              </div>
            </div>
            {lastMessage && (
              <div className={styles['chat-time-status']}>
                <div className={styles['chat-time']}>{lastMessage.time}</div>
                <div className={styles['message-status']}>
                  {lastMessage.read ? (
                    <DoneAllIcon sx={{ fontSize: 16, color: '#007bff' }} />
                  ) : (
                    <DoneIcon sx={{ fontSize: 16, color: 'gray' }} />
                  )}
                </div>
              </div>
            )}
          </div>
        );
      })}
      <div className={styles['add-chat-button']} onClick={handleAddChatClick}>
        <AddIcon />
      </div>
    </div>
  );
};

export default ChatList;
