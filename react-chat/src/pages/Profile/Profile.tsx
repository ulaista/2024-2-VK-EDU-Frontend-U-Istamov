import React from 'react';
import { useParams } from 'react-router-dom';
import ProfileHeader from '../../modules/Profile/ProfileHeader/ProfileHeader';
import ProfileContent from '../../modules/Profile/ProfileContent/ProfileContent';
import styles from './Profile.module.scss';

const contacts = [
  { id: 1, fullName: 'Alice Smith', username: '@alice', bio: 'Loves music and cats' },
  { id: 2, fullName: 'Bob Johnson', username: '@bob', bio: 'Enjoys hiking and photography' },
];

const Profile: React.FC = () => {
  const { userId } = useParams<{ userId: string }>();
  const contact = contacts.find((c) => c.id === Number(userId));

  if (!contact) {
    return <div>Пользователь не найден</div>;
  }

  return (
    <div className={styles['profile-page']}>
      <ProfileHeader title={`Contact ${contact.fullName}`} />
      <ProfileContent initialData={contact} />
    </div>
  );
};

export default Profile;
