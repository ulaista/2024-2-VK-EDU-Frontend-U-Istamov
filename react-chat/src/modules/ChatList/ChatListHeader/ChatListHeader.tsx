import React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import styles from './ChatListHeader.module.scss';

const ChatListHeader: React.FC = () => {
  return (
    <header className={styles['list-header']}>
      <button className={styles['header-tool']}>
        <MenuIcon sx={{ fontSize: 32, color: 'white' }} />
      </button>
      <div className={styles['header-title']}>Messenger</div>
      <button className={styles['header-tool']}>
        <SearchIcon sx={{ fontSize: 28, color: 'white' }} />
      </button>
    </header>
  );
};

export default ChatListHeader;
