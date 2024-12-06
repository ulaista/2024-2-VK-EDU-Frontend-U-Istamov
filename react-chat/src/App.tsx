import React, { useState, useEffect } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import ChatPage from './pages/Chat/Chat';
import ChatList from './pages/ChatList/ChatList';
import Profile from './pages/Profile/Profile';
import UserProfile from './pages/UserProfile/UserProfile';
import './App.scss';

export interface Message {
  id: number;
  text: string;
  sender: string;
  time: string;
  read?: boolean;
}

export interface Chat {
  id: number;
  name: string;
  messages: Message[];
}

const defaultChats: Chat[] = [
  {
    id: 1,
    name: 'Alice',
    messages: [
      { id: 1, text: 'Привет! Как дела?', sender: 'Alice', time: '10:15' },
      { id: 2, text: 'Все хорошо, спасибо!', sender: 'You', time: '10:17', read: true },
    ],
  },
  {
    id: 2,
    name: 'Bob',
    messages: [
      { id: 1, text: 'Привет, ты уже на месте?', sender: 'Bob', time: '11:05' },
    ],
  },
];

const App: React.FC = () => {
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
    setChats((prevChats) => [...prevChats, newChat]);
  };

  const handleSendMessage = (chatId: number, messageText: string) => {
    const currentTime = new Date();
    const formattedTime = `${String(currentTime.getHours()).padStart(2, '0')}:${String(currentTime.getMinutes()).padStart(2, '0')}`;

    setChats((prevChats) =>
      prevChats.map((chat) =>
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
    <HashRouter>
      <Routes>
        <Route path="/" element={<ChatList chats={chats} onAddChat={handleAddChat} />} />
        <Route
          path="/chat/:chatId"
          element={
            <ChatPage
              chats={chats}
              onSendMessage={handleSendMessage}
            />
          }
        />
        <Route path="/profile" element={<UserProfile />} />
        <Route path="/profile/:userId" element={<Profile />} />
      </Routes>
    </HashRouter>
  );
};

export default App;
