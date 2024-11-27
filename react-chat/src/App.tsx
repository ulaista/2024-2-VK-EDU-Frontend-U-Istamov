import React, { useState, useEffect } from 'react';
import Chat from './pages/Chat/Chat';
import ChatList from './pages/ChatList/ChatList';
import './App.scss';

interface Message {
  id: number;
  text: string;
  sender: string;
  time: string;
  read: boolean;
}

interface Chat {
  id: number;
  name: string;
  messages: Message[];
}

const defaultChats: Chat[] = [
  {
    id: 1,
    name: 'Alice',
    messages: [
      { id: 1, text: 'Привет! Как дела?', sender: 'Alice', time: '10:15', read: true },
      { id: 2, text: 'Все хорошо, спасибо!', sender: 'You', time: '10:17', read: true },
    ],
  },
  {
    id: 2,
    name: 'Bob',
    messages: [
      { id: 1, text: 'Привет, ты уже на месте?', sender: 'Bob', time: '11:05', read: false },
    ],
  },
];

const App: React.FC = () => {
  const [currentChatId, setCurrentChatId] = useState<number | null>(null);
  const [chats, setChats] = useState<Chat[]>(() => {
    const savedChats = localStorage.getItem('chats');
    return savedChats ? JSON.parse(savedChats) : defaultChats;
  });

  useEffect(() => {
    localStorage.setItem('chats', JSON.stringify(chats));
  }, [chats]);

  const handleAddChat = (chatName: string) => {
    const newChat: Chat = {
      id: Date.now(),
      name: chatName,
      messages: [],
    };
    setChats((prevChats: Chat[]) => [...prevChats, newChat]);
  };

  const handleSendMessage = (chatId: number, messageText: string) => {
    const currentTime = new Date();
    const formattedTime = `${String(currentTime.getHours()).padStart(2, '0')}:${String(currentTime.getMinutes()).padStart(2, '0')}`;

    setChats((prevChats: Chat[]) =>
      prevChats.map((chat: Chat) =>
        chat.id === chatId
          ? {
              ...chat,
              messages: [
                ...chat.messages,
                {
                  id: chat.messages.length + 1,
                  text: messageText,
                  sender: 'You',
                  time: formattedTime,
                  read: false,
                },
              ],
            }
          : chat
      )
    );
  };

  return (
    <div>
      {currentChatId === null ? (
        <ChatList
          chats={chats}
          onSelectChat={setCurrentChatId}
          onAddChat={handleAddChat}
        />
      ) : (
        <Chat
          chatId={currentChatId}
          chat={chats.find((chat) => chat.id === currentChatId)!}
          onBack={() => setCurrentChatId(null)}
          onSendMessage={handleSendMessage}
        />
      )}
    </div>
  );
};

export default App;
