
import React from 'react';
import { Role, UserProfile } from '../types';
import ProfileCard from './ProfileCard';

interface ProfileListProps {
  users: UserProfile[];
  role: Role;
}

const roleTitles: Record<Role, string> = {
    [Role.TEACHER]: "Profesores",
    [Role.STUDENT]: "Estudiantes",
    [Role.STAFF]: "Personal",
    [Role.DEVELOPER]: "Desarrolladores"
}

const ProfileList: React.FC<ProfileListProps> = ({ users, role }) => {
  const filteredUsers = users.filter(user => user.role === role);

  return (
    <div>
      <h1 className="text-3xl font-bold text-white mb-6">Gestión de {roleTitles[role]}</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredUsers.map(user => (
          <ProfileCard key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
};

export default ProfileList;
