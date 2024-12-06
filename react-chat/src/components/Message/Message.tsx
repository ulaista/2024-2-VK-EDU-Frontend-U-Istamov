import { Message } from "../../App";
import styles from './Message.module.scss'
import DoneIcon from '@mui/icons-material/Done';
import DoneAllIcon from '@mui/icons-material/DoneAll';

interface MessageItemProps {
    message: Message;
    isSentByCurrentUser: boolean;
}

const MessageItem: React.FC<MessageItemProps> = ({ message, isSentByCurrentUser }) => {

    return(
        <div
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
                <DoneAllIcon/>
              ) : (
                isSentByCurrentUser && <DoneIcon/>
              )}
            </div>
        </div>
    )
}

export default MessageItem;