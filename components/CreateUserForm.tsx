
import React, { useState } from 'react';
import { Role, UserProfile } from '../types';
import Icon from './Icon';

interface CreateUserFormProps {
    onCreateUser: (user: Omit<UserProfile, 'id' | 'avatar'>) => void;
}

const roleOptions = [Role.STUDENT, Role.TEACHER, Role.STAFF];

const detailFields: Record<Role, string[]> = {
    [Role.TEACHER]: ['Especialidad', 'Experiencia', 'Certificación'],
    [Role.STUDENT]: ['Miembro desde', 'Objetivo', 'Plan Activo'],
    [Role.STAFF]: ['Posición', 'Antigüedad', 'Turno'],
    [Role.DEVELOPER]: [], // Not creatable from form
};

const CreateUserForm: React.FC<CreateUserFormProps> = ({ onCreateUser }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [role, setRole] = useState<Role>(Role.STUDENT);
    const [details, setDetails] = useState<{[key: string]: string}>({});

    const handleDetailChange = (key: string, value: string) => {
        setDetails(prev => ({...prev, [key]: value}));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if(!name.trim() || !email.trim()) {
            alert('Nombre y Email son requeridos.');
            return;
        }
        
        const finalDetails = detailFields[role].reduce((acc, key) => {
            acc[key] = details[key] || 'N/A';
            return acc;
        }, {} as {[key: string]: string});

        onCreateUser({ name, email, role, details: finalDetails });

        // Reset form
        setName('');
        setEmail('');
        setRole(Role.STUDENT);
        setDetails({});
    };

    return (
        <div className="max-w-2xl mx-auto">
            <div className="bg-gray-800 p-8 rounded-xl shadow-2xl border border-blue-500/30">
                <div className="flex items-center space-x-3 mb-6">
                    <Icon name="UserPlus" className="w-8 h-8 text-blue-400" />
                    <h1 className="text-3xl font-bold text-white">Crear Nuevo Usuario</h1>
                </div>
                <p className="text-gray-400 mb-8">
                    Complete el formulario para agregar un nuevo miembro al sistema. Los campos de detalles cambiarán según el rol seleccionado.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label htmlFor="user-name" className="block text-sm font-medium text-gray-300 mb-2">
                            Nombre Completo
                        </label>
                        <input
                            id="user-name"
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Ej: Jane Doe"
                            className="w-full bg-gray-700 border border-gray-600 text-white rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all"
                            required
                        />
                    </div>

                     <div>
                        <label htmlFor="user-email" className="block text-sm font-medium text-gray-300 mb-2">
                            Email
                        </label>
                        <input
                            id="user-email"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Ej: jane.doe@email.com"
                            className="w-full bg-gray-700 border border-gray-600 text-white rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all"
                            required
                        />
                    </div>
                    
                    <div>
                        <label htmlFor="user-role" className="block text-sm font-medium text-gray-300 mb-2">
                            Rol
                        </label>
                        <select
                            id="user-role"
                            value={role}
                            onChange={(e) => {
                                setRole(e.target.value as Role);
                                setDetails({}); // Reset details on role change
                            }}
                            className="w-full bg-gray-700 border border-gray-600 text-white rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all"
                        >
                            {roleOptions.map(r => <option key={r} value={r}>{r}</option>)}
                        </select>
                    </div>

                    <hr className="border-gray-600" />
                    
                    <h3 className="text-lg font-semibold text-white">Detalles Específicos del Rol</h3>
                    
                    <div className="space-y-4">
                        {detailFields[role].map(field => (
                            <div key={field}>
                                <label htmlFor={`detail-${field}`} className="block text-sm font-medium text-gray-300 mb-2">
                                    {field}
                                </label>
                                <input
                                    id={`detail-${field}`}
                                    type="text"
                                    value={details[field] || ''}
                                    onChange={(e) => handleDetailChange(field, e.target.value)}
                                    placeholder={`Ingrese ${field.toLowerCase()}`}
                                    className="w-full bg-gray-700 border border-gray-600 text-white rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all"
                                />
                            </div>
                        ))}
                    </div>

                    <div className="flex justify-end pt-4">
                        <button
                            type="submit"
                            className="flex items-center justify-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-blue-500 transition-all shadow-lg"
                        >
                            <Icon name="PlusCircle" className="w-5 h-5 mr-2"/>
                            Crear Usuario
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CreateUserForm;
