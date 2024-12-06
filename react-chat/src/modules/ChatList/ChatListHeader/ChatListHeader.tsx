import React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import styles from './ChatListHeader.module.scss';
import { useNavigate } from 'react-router-dom';

const ChatListHeader: React.FC = () => {
  const navigate = useNavigate();

  const handleViewProfile = () => {
    navigate(`/profile`);
  };

  return (
    <header className={styles['list-header']}>
      <button className={styles['header-tool']}>
        <MenuIcon onClick={handleViewProfile}/>
      </button>
      <div className={styles['header-title']}>Messenger</div>
      <button className={styles['header-tool']}>
        <SearchIcon/>
      </button>
    </header>
  );
};

export default ChatListHeader;
