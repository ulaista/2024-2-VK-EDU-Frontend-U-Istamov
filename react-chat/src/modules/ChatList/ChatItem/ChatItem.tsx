import { useNavigate } from 'react-router-dom';
import { Chat } from '../../../App';
import styles from './ChatItem.module.scss';
import PersonIcon from "@mui/icons-material/Person";
import DoneIcon from "@mui/icons-material/Done";
import DoneAllIcon from "@mui/icons-material/DoneAll";

interface ChatItemProps {
    chat: Chat;
}

const ChatItem: React.FC<ChatItemProps> = ({ chat }) => {
    const navigate = useNavigate();

    const handleViewProfile = (id: number) => {
        navigate(`/profile/${id}`);
    };

    const handleSelectChat = (id: number) => {
        navigate(`/chat/${id}`);
    };

    const lastMessage =
        chat.messages.length > 0
        ? chat.messages[chat.messages.length - 1]
        : null;

    return (
        <div className={styles["chat-item"]}>
        <div
            className={styles.avatar}
            onClick={() => handleViewProfile(chat.id)}
        >
            <PersonIcon/>
        </div>
        <div
            className={styles["chat-details"]}
            onClick={() => handleSelectChat(chat.id)}
        >
            <div className={styles["chat-name"]}>{chat.name}</div>
            <div className={styles["last-message"]}>
            {lastMessage
                ? `${lastMessage.sender}: ${lastMessage.text}`
                : "Нет сообщений"}
            </div>
        </div>
        {lastMessage && (
            <div className={styles["chat-time-status"]}>
            <div className={styles["chat-time"]}>{lastMessage.time}</div>
            {lastMessage.sender == 'You' && (
                <div className={styles["message-status"]}>
                {lastMessage.read ? (
                    <DoneAllIcon sx={{ fontSize: 16, color: "#007bff" }} />
                ) : (
                    <DoneIcon/>
                )}
                </div>
            )}
            </div>
        )}
        </div>
    );
}
export default ChatItem;