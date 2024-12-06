import React from "react";
import styles from "./ChatList.module.scss";
import ChatListHeader from "../../modules/ChatList/ChatListHeader/ChatListHeader";
import AddButton from "../../components/AddButton/AddButton";
import ChatItem from "../../modules/ChatList/ChatItem/ChatItem";
import { Chat } from "../../App";

interface ChatListProps {
  chats: Chat[];
  onAddChat: (chatName: string) => void;
}

const ChatList: React.FC<ChatListProps> = ({ chats, onAddChat }) => {

  const handleAddChatClick = () => {
    const chatName = prompt("Введите название нового чата:");
    if (chatName) {
      onAddChat(chatName);
    }
  };

  return (
    <div className={styles["chat-list"]}>
      <ChatListHeader />
      {chats.map((chat) => {
        return (
            <ChatItem key={chat.id} chat={chat} />
        );
      })}
      <AddButton onClick={handleAddChatClick}/>
    </div>
  );
};

export default ChatList;
