import React from 'react';
import { useNavigate } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import DoneIcon from '@mui/icons-material/Done';
import styles from './ProfileHeader.module.scss';

interface ProfileHeaderProps {
  title: string;
}

const ProfileHeader: React.FC<ProfileHeaderProps> = ({ title }) => {
  const navigate = useNavigate();

  return (
    <header className={styles['profile-header']}>
      <button className={styles['header-tool']} onClick={() => navigate(-1)}>
        <ArrowBackIcon sx={{ fontSize: 24, color: 'white' }} />
      </button>
      <div className={styles['header-title']}>{title}</div>
      <button className={styles['header-tool']}>
        <DoneIcon sx={{ fontSize: 24, color: 'white' }} />
      </button>
    </header>
  );
};

export default ProfileHeader;
