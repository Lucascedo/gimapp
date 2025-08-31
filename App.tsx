
import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import MainContent from './components/MainContent';
import { Role, UserProfile, InfoWindow } from './types';
import { USERS, INITIAL_INFO_WINDOWS } from './constants';

const App: React.FC = () => {
  const [currentUser, setCurrentUser] = useState<UserProfile>(USERS.find(u => u.role === Role.DEVELOPER)!); // Default to developer
  const [users, setUsers] = useState<UserProfile[]>(USERS);
  const [activeView, setActiveView] = useState<string>('dashboard');
  const [infoWindows, setInfoWindows] = useState<InfoWindow[]>(INITIAL_INFO_WINDOWS);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleUserChange = (userId: number) => {
    const user = users.find(u => u.id === userId);
    if (user) {
      setCurrentUser(user);
      setActiveView('dashboard'); // Reset view on user change
    }
  };

  const handleAddWindow = (newWindow: Omit<InfoWindow, 'id'>) => {
    const windowWithId: InfoWindow = {
        ...newWindow,
        id: newWindow.title.toLowerCase().replace(/\s+/g, '-') + '-' + Date.now(),
    };
    setInfoWindows(prev => [...prev, windowWithId]);
    setActiveView(windowWithId.id); // Switch to the newly created window
  };

  const handleCreateUser = (newUser: Omit<UserProfile, 'id' | 'avatar'>) => {
    const newId = Math.max(...users.map(u => u.id), 0) + 1;
    const userWithId: UserProfile = {
      ...newUser,
      id: newId,
      avatar: `https://picsum.photos/seed/${newId}/200`,
    };
    setUsers(prevUsers => [...prevUsers, userWithId]);

    // Navigate to the list of the created user's role
    switch(newUser.role) {
        case Role.TEACHER:
            setActiveView('teachers');
            break;
        case Role.STUDENT:
            setActiveView('students');
            break;
        case Role.STAFF:
            setActiveView('staff');
            break;
        default:
            setActiveView('dashboard');
            break;
    }
  };

  const handleSetActiveView = (view: string) => {
    setActiveView(view);
    setIsSidebarOpen(false); // Close sidebar on navigation
  };


  return (
    <div className="flex h-screen bg-gray-900 text-gray-100 font-sans">
       <Sidebar
        currentUser={currentUser}
        activeView={activeView}
        setActiveView={handleSetActiveView}
        infoWindows={infoWindows}
        isOpen={isSidebarOpen}
        setIsOpen={setIsSidebarOpen}
      />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header
          currentUser={currentUser}
          allUsers={users}
          onUserChange={handleUserChange}
          onMenuClick={() => setIsSidebarOpen(true)}
        />
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-900 p-4 sm:p-6 md:p-8 lg:p-10">
          <MainContent
            activeView={activeView}
            users={users}
            infoWindows={infoWindows}
            onAddWindow={handleAddWindow}
            onCreateUser={handleCreateUser}
            currentUser={currentUser}
          />
        </main>
      </div>
       {isSidebarOpen && <div className="fixed inset-0 bg-black/60 z-20 md:hidden" onClick={() => setIsSidebarOpen(false)}></div>}
    </div>
  );
};

export default App;