
import React, { useState } from 'react';
import { InfoWindow } from '../types';
import Icon from './Icon';

interface DeveloperToolsProps {
  onAddWindow: (newWindow: Omit<InfoWindow, 'id'>) => void;
}

const iconOptions: InfoWindow['iconName'][] = ['DocumentChartBar', 'ClipboardDocumentList', 'CalendarDays'];


const DeveloperTools: React.FC<DeveloperToolsProps> = ({ onAddWindow }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [icon, setIcon] = useState<InfoWindow['iconName']>(iconOptions[0]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim() || !content.trim()) {
        alert('El título y el contenido no pueden estar vacíos.');
        return;
    };
    
    onAddWindow({ title, content, iconName: icon });
    setTitle('');
    setContent('');
    setIcon(iconOptions[0]);
  };

  return (
    <div className="max-w-2xl mx-auto">
      <div className="bg-gray-800 p-8 rounded-xl shadow-2xl border border-purple-500/30">
        <div className="flex items-center space-x-3 mb-6">
            <Icon name="WrenchScrewdriver" className="w-8 h-8 text-purple-400" />
            <h1 className="text-3xl font-bold text-white">Herramientas de Desarrollador</h1>
        </div>
        <p className="text-gray-400 mb-8">
            Utilice este panel para agregar dinámicamente nuevas ventanas de información a la aplicación. 
            Estas ventanas serán visibles para todos los roles de usuario.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="window-title" className="block text-sm font-medium text-gray-300 mb-2">
              Título de la Ventana
            </label>
            <input
              id="window-title"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Ej: Reglas del Gimnasio"
              className="w-full bg-gray-700 border border-gray-600 text-white rounded-lg px-4 py-2 focus:ring-2 focus:ring-purple-500 focus:outline-none transition-all"
              required
            />
          </div>

          <div>
            <label htmlFor="window-icon" className="block text-sm font-medium text-gray-300 mb-2">
                Ícono
            </label>
            <div className="grid grid-cols-3 gap-3">
                {iconOptions.map(iconName => (
                    <button type="button" key={iconName} onClick={() => setIcon(iconName)} className={`flex flex-col items-center justify-center p-3 rounded-lg border-2 transition-colors ${icon === iconName ? 'bg-purple-600 border-purple-400' : 'bg-gray-700 border-gray-600 hover:border-gray-500'}`}>
                       <Icon name={iconName} className="w-6 h-6 mb-1"/>
                       <span className="text-xs">{iconName.replace(/([A-Z])/g, ' $1').trim()}</span>
                    </button>
                ))}
            </div>
          </div>
          
          <div>
            <label htmlFor="window-content" className="block text-sm font-medium text-gray-300 mb-2">
              Contenido
            </label>
            <textarea
              id="window-content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              rows={6}
              placeholder="Escriba el contenido aquí (soporta texto plano)..."
              className="w-full bg-gray-700 border border-gray-600 text-white rounded-lg px-4 py-2 focus:ring-2 focus:ring-purple-500 focus:outline-none transition-all"
              required
            />
          </div>
          
          <div className="flex justify-end">
            <button
              type="submit"
              className="flex items-center justify-center px-6 py-3 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-purple-500 transition-all shadow-lg"
            >
              <Icon name="PlusCircle" className="w-5 h-5 mr-2"/>
              Crear Ventana
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default DeveloperTools;
