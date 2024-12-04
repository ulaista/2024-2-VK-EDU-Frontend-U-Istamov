import React, { useState } from 'react';
import styles from './ChatInput.module.scss';
import SendIcon from '@mui/icons-material/Send';

interface ChatInputProps {
  onMessageSubmit: (message: string) => void;
}

const ChatInput: React.FC<ChatInputProps> = ({ onMessageSubmit }) => {
  const [message, setMessage] = useState<string>('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value);
  };

  const handleSend = () => {
    if (message.trim()) {
      onMessageSubmit(message);
      setMessage('');
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };

  return (
    <div className={styles['input-container']}>
      <input
        className={styles['form-input']}
        type="text"
        placeholder="Message"
        value={message}
        onChange={handleInputChange}
        onKeyPress={handleKeyPress}
      />
        <SendIcon sx={{ fontSize: 24, color: 'blue' }} onClick={handleSend}/>
    </div>
  );
};

export default ChatInput;