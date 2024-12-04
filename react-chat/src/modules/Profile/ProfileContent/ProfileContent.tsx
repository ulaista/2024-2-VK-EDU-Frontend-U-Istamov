import React, { useState } from 'react';
import styles from './ProfileContent.module.scss';

interface UserProfileData {
  fullName: string;
  username: string;
  bio: string;
}

interface ProfileContentProps {
  initialData: UserProfileData;
}

const ProfileContent: React.FC<ProfileContentProps> = ({ initialData }) => {
  const [fullName, setFullName] = useState<string>(initialData.fullName);
  const [username, setUsername] = useState<string>(initialData.username);
  const [bio, setBio] = useState<string>(initialData.bio);

  return (
    <div className={styles['profile-content']}>
      <div className={styles['profile-avatar']}>
        <div className={styles['avatar-circle']}>
          <span>📷</span>
        </div>
      </div>

      <div className={styles['profile-field']}>
        <label>Full name</label>
        <input
          type="text"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
        />
      </div>

      <div className={styles['profile-field']}>
        <label>Username</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Minimum length is 5 characters"
        />
      </div>

      <div className={styles['profile-field']}>
        <label>Bio</label>
        <textarea
          value={bio}
          onChange={(e) => setBio(e.target.value)}
          placeholder="Any details about you"
        />
      </div>
    </div>
  );
};

export default ProfileContent;
