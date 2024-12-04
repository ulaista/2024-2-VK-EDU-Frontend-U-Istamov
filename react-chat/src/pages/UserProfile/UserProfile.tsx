import React from 'react';
import ProfileHeader from '../../modules/Profile/ProfileHeader/ProfileHeader';
import ProfileContent from '../../modules/Profile/ProfileContent/ProfileContent';
import styles from './UserProfile.module.scss';

const UserProfile: React.FC = () => {
  const userProfileData = {
    fullName: 'Your Name',
    username: '@yourusername',
    bio: 'Your bio here...',
  };

  return (
    <div className={styles['user-profile-page']}>
      <ProfileHeader title="Edit Profile" />
      <ProfileContent initialData={userProfileData} />
    </div>
  );
};

export default UserProfile;
