import React from 'react';
import styles from './ChatHeader.module.scss';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import PersonIcon from '@mui/icons-material/Person';
import SearchIcon from '@mui/icons-material/Search';
import PhoneIcon from '@mui/icons-material/Phone';
import MoreVertIcon from '@mui/icons-material/MoreVert';

interface ChatHeaderProps {
  title: string;
  avatar?: string;
  onBack: () => void;
}

const ChatHeader: React.FC<ChatHeaderProps> = ({ title, avatar = 'face', onBack }) => {
  return (
    <header className={styles['middle-header']}>
      <div className={styles['contact-chat-wrapper']}>
        <button className={`${styles['header-tool']} ${styles['back-button']}`} onClick={onBack}>
          <ArrowBackIcon sx={{ fontSize: 24, color: 'white' }} />
        </button>
        <div className={styles.avatar}>
          {avatar === '' ? (
            <PersonIcon sx={{ fontSize: 40, color: '#ffffff' }} />
          ) : (
            <span className="">{avatar}</span>
          )}
        </div>
        <div className={styles['info-chat-contact']}>{title}</div>
      </div>
      <div className={styles['header-tools']}>
        <SearchIcon sx={{ fontSize: 24, color: 'white' }} />
        <PhoneIcon sx={{ fontSize: 24, color: 'white', marginLeft: '15px' }} />
        <MoreVertIcon sx={{ fontSize: 24, color: 'white', marginLeft: '15px' }} />
      </div>
    </header>
  );
};

export default ChatHeader;