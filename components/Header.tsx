
import React, { useState } from 'react';
import { UserProfile, Role } from '../types';
import Icon from './Icon';

interface HeaderProps {
  currentUser: UserProfile;
  allUsers: UserProfile[];
  onUserChange: (userId: number) => void;
  onMenuClick: () => void;
}

const roleColors: Record<Role, string> = {
  [Role.STUDENT]: 'bg-green-500',
  [Role.TEACHER]: 'bg-blue-500',
  [Role.STAFF]: 'bg-yellow-500',
  [Role.DEVELOPER]: 'bg-purple-500',
};

const Header: React.FC<HeaderProps> = ({ currentUser, allUsers, onUserChange, onMenuClick }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  
  const handleSelectUser = (id: number) => {
      onUserChange(id);
      setDropdownOpen(false);
  }

  return (
    <header className="bg-gray-800/50 backdrop-blur-sm border-b border-gray-700 p-4 flex justify-between items-center flex-shrink-0 z-10">
      <div className="flex items-center space-x-4">
        <button onClick={onMenuClick} className="md:hidden text-gray-400 hover:text-white">
            <Icon name="Bars3" className="w-6 h-6" />
        </button>
        <h2 className="text-xl sm:text-2xl font-bold text-white hidden sm:block">Bienvenido, {currentUser.name.split(' ')[0]}</h2>
      </div>
      <div className="relative">
        <button onClick={() => setDropdownOpen(!dropdownOpen)} className="flex items-center space-x-3 bg-gray-700 p-2 rounded-lg hover:bg-gray-600 transition-colors">
          <img src={currentUser.avatar} alt={currentUser.name} className="w-8 h-8 sm:w-10 sm:h-10 rounded-full object-cover border-2 border-gray-600" />
          <div className="text-left hidden sm:block">
              <p className="font-semibold text-white text-sm">{currentUser.name}</p>
              <p className={`text-xs px-2 py-0.5 rounded-full inline-block text-white ${roleColors[currentUser.role]}`}>{currentUser.role}</p>
          </div>
           <svg className={`w-5 h-5 text-gray-400 transition-transform ${dropdownOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
        </button>
        {dropdownOpen && (
          <div className="absolute right-0 mt-2 w-64 bg-gray-700 rounded-lg shadow-xl z-20 overflow-hidden">
            <div className="p-2 text-xs text-gray-400 border-b border-gray-600">Cambiar de usuario (Demo)</div>
            <ul className="max-h-80 overflow-y-auto">
              {allUsers.map(user => (
                <li key={user.id}>
                  <button onClick={() => handleSelectUser(user.id)} className="flex items-center w-full px-4 py-2 text-left hover:bg-gray-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed" disabled={user.id === currentUser.id}>
                    <img src={user.avatar} alt={user.name} className="w-8 h-8 rounded-full object-cover mr-3" />
                    <div>
                        <p className="font-medium text-white text-sm">{user.name}</p>
                        <p className="text-xs text-gray-400">{user.role}</p>
                    </div>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;