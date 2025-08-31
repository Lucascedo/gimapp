
import React from 'react';
import { Role, UserProfile } from '../types';
import Icon from './Icon';

interface DashboardProps {
  currentUser: UserProfile;
  users: UserProfile[];
}

interface StatCardProps {
    iconName: React.ComponentProps<typeof Icon>['name'];
    label: string;
    value: number | string;
    colorClass: string;
}

const StatCard: React.FC<StatCardProps> = ({ iconName, label, value, colorClass }) => (
    <div className="bg-gray-800 p-6 rounded-xl shadow-lg flex items-center space-x-4">
        <div className={`p-3 rounded-full ${colorClass}`}>
            <Icon name={iconName} className="w-8 h-8 text-white" />
        </div>
        <div>
            <p className="text-3xl font-bold text-white">{value}</p>
            <p className="text-gray-400">{label}</p>
        </div>
    </div>
);

const Dashboard: React.FC<DashboardProps> = ({ currentUser, users }) => {
  const teacherCount = users.filter(u => u.role === Role.TEACHER).length;
  const studentCount = users.filter(u => u.role === Role.STUDENT).length;
  const staffCount = users.filter(u => u.role === Role.STAFF).length;
    
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-white">Dashboard</h1>
        <p className="text-gray-400 mt-1">Un resumen de la actividad del gimnasio.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <StatCard iconName="AcademicCap" label="Profesores Activos" value={teacherCount} colorClass="bg-blue-500" />
          <StatCard iconName="UserGroup" label="Estudiantes Inscritos" value={studentCount} colorClass="bg-green-500" />
          <StatCard iconName="Identification" label="Miembros del Personal" value={staffCount} colorClass="bg-yellow-500" />
      </div>

      <div className="bg-gray-800 p-6 rounded-xl shadow-lg">
          <h2 className="text-xl font-bold text-white mb-4">Tu Perfil</h2>
          <div className="flex flex-col items-start space-y-4 sm:flex-row sm:items-center sm:space-y-0 sm:space-x-6">
              <img src={currentUser.avatar} alt={currentUser.name} className="w-24 h-24 rounded-full object-cover border-4 border-blue-500" />
              <div>
                  <h3 className="text-2xl font-bold text-white">{currentUser.name}</h3>
                  <p className="text-blue-400 font-semibold">{currentUser.role}</p>
                  <p className="text-gray-400">{currentUser.email}</p>
              </div>
          </div>
      </div>
       <div className="bg-gray-800 p-6 rounded-xl shadow-lg">
          <h2 className="text-xl font-bold text-white mb-4">Notificaciones Recientes</h2>
          <ul className="space-y-3">
              <li className="text-gray-300">› Nueva clase de Spinning programada para el viernes a las 6 PM.</li>
              <li className="text-gray-300">› Mantenimiento de equipo en el área de pesas el próximo lunes.</li>
              <li className="text-gray-300">› ¡Promoción de membresía anual con 20% de descuento!</li>
          </ul>
      </div>

    </div>
  );
};

export default Dashboard;