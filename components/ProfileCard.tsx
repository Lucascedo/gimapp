
import React from 'react';
import { UserProfile, Role } from '../types';

interface ProfileCardProps {
  user: UserProfile;
}

const roleBorderColors: Record<Role, string> = {
  [Role.STUDENT]: 'border-green-500',
  [Role.TEACHER]: 'border-blue-500',
  [Role.STAFF]: 'border-yellow-500',
  [Role.DEVELOPER]: 'border-purple-500',
};

const ProfileCard: React.FC<ProfileCardProps> = ({ user }) => {
  return (
    <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-1 transition-transform duration-300">
      <div className="p-5 flex flex-col items-center">
        <img
          className={`w-28 h-28 rounded-full object-cover border-4 ${roleBorderColors[user.role]}`}
          src={user.avatar}
          alt={user.name}
        />
        <h3 className="mt-4 text-xl font-bold text-white text-center">{user.name}</h3>
        <p className="text-sm text-blue-400">{user.role}</p>
        <p className="mt-1 text-xs text-gray-400">{user.email}</p>
      </div>
      <div className="bg-gray-700/50 p-4 border-t border-gray-700">
        <h4 className="text-xs font-semibold text-gray-400 uppercase mb-2">Detalles</h4>
        <div className="space-y-1 text-sm">
          {Object.entries(user.details).map(([key, value]) => (
            <div key={key} className="flex justify-between">
              <span className="text-gray-400">{key}:</span>
              <span className="font-medium text-white text-right">{value}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="p-3 bg-gray-800">
        <button className="w-full bg-blue-600 text-white py-2 rounded-md text-sm font-semibold hover:bg-blue-700 transition-colors">
          Ver Perfil Completo
        </button>
      </div>
    </div>
  );
};

export default ProfileCard;
