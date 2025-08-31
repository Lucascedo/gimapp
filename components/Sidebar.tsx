
import React from 'react';
import { Role, UserProfile, InfoWindow } from '../types';
import Icon from './Icon';

interface SidebarProps {
  currentUser: UserProfile;
  activeView: string;
  setActiveView: (view: string) => void;
  infoWindows: InfoWindow[];
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

interface NavItemProps {
  iconName: React.ComponentProps<typeof Icon>['name'];
  label: string;
  view: string;
  activeView: string;
  onClick: () => void;
}

const NavItem: React.FC<NavItemProps> = ({ iconName, label, view, activeView, onClick }) => {
  const isActive = activeView === view;
  return (
    <button
      onClick={onClick}
      className={`flex items-center w-full px-4 py-3 text-sm font-medium rounded-lg transition-all duration-200 ${
        isActive
          ? 'bg-blue-600 text-white shadow-lg'
          : 'text-gray-400 hover:bg-gray-700 hover:text-white'
      }`}
    >
      <Icon name={iconName} className="w-5 h-5 mr-4" />
      <span className="truncate">{label}</span>
    </button>
  );
};

const Sidebar: React.FC<SidebarProps> = ({ currentUser, activeView, setActiveView, infoWindows, isOpen, setIsOpen }) => {
  const canManageUsers = currentUser.role === Role.STAFF || currentUser.role === Role.DEVELOPER;

  return (
    <aside className={`fixed inset-y-0 left-0 z-30 w-64 bg-gray-800 p-4 flex-shrink-0 flex flex-col h-full border-r border-gray-700 shadow-2xl transform transition-transform duration-300 ease-in-out md:relative md:translate-x-0 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
      <div className="flex items-center justify-between mb-8 px-2">
        <div className="flex items-center">
            <div className="p-2 bg-blue-600 rounded-lg">
               <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
            </div>
            <h1 className="text-xl font-bold text-white ml-3">GymPro</h1>
        </div>
        <button onClick={() => setIsOpen(false)} className="md:hidden text-gray-400 hover:text-white">
            <Icon name="XMark" className="w-6 h-6" />
        </button>
      </div>
      <nav className="flex-1 space-y-2 overflow-y-auto">
        <p className="px-4 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">Principal</p>
        <NavItem iconName="Squares2X2" label="Dashboard" view="dashboard" activeView={activeView} onClick={() => setActiveView('dashboard')} />
        <NavItem iconName="AcademicCap" label="Profesores" view="teachers" activeView={activeView} onClick={() => setActiveView('teachers')} />
        <NavItem iconName="UserGroup" label="Estudiantes" view="students" activeView={activeView} onClick={() => setActiveView('students')} />
        <NavItem iconName="Identification" label="Personal" view="staff" activeView={activeView} onClick={() => setActiveView('staff')} />
        
        {canManageUsers && (
            <NavItem iconName="UserPlus" label="Crear Usuario" view="createUser" activeView={activeView} onClick={() => setActiveView('createUser')} />
        )}

        {infoWindows.length > 0 && (
            <p className="px-4 pt-6 pb-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">Información</p>
        )}
        {infoWindows.map(window => (
             <NavItem 
                key={window.id}
                iconName={window.iconName}
                label={window.title} 
                view={window.id} 
                activeView={activeView} 
                onClick={() => setActiveView(window.id)} />
        ))}
        
        {currentUser.role === Role.DEVELOPER && (
          <>
            <p className="px-4 pt-6 pb-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">Herramientas</p>
            <NavItem iconName="WrenchScrewdriver" label="Developer" view="developer" activeView={activeView} onClick={() => setActiveView('developer')} />
          </>
        )}
      </nav>
    </aside>
  );
};

export default Sidebar;