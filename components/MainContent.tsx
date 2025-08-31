
import React from 'react';
import { Role, UserProfile, InfoWindow } from '../types';
import ProfileList from './ProfileList';
import DeveloperTools from './DeveloperTools';
import InformationWindowDisplay from './InformationWindowDisplay';
import Dashboard from './Dashboard';
import CreateUserForm from './CreateUserForm';

interface MainContentProps {
  activeView: string;
  users: UserProfile[];
  infoWindows: InfoWindow[];
  onAddWindow: (newWindow: Omit<InfoWindow, 'id'>) => void;
  onCreateUser: (newUser: Omit<UserProfile, 'id' | 'avatar'>) => void;
  currentUser: UserProfile;
}

const MainContent: React.FC<MainContentProps> = ({ activeView, users, infoWindows, onAddWindow, onCreateUser, currentUser }) => {
  const renderContent = () => {
    switch (activeView) {
      case 'dashboard':
        return <Dashboard currentUser={currentUser} users={users} />;
      case 'teachers':
        return <ProfileList users={users} role={Role.TEACHER} />;
      case 'students':
        return <ProfileList users={users} role={Role.STUDENT} />;
      case 'staff':
        return <ProfileList users={users} role={Role.STAFF} />;
      case 'developer':
        return <DeveloperTools onAddWindow={onAddWindow} />;
      case 'createUser':
         return <CreateUserForm onCreateUser={onCreateUser} />;
      default:
        const window = infoWindows.find(w => w.id === activeView);
        if (window) {
          return <InformationWindowDisplay window={window} />;
        }
        return <Dashboard currentUser={currentUser} users={users} />;
    }
  };

  return <>{renderContent()}</>;
};

export default MainContent;
