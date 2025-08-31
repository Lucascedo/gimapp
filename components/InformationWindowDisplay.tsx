
import React from 'react';
import { InfoWindow } from '../types';
import Icon from './Icon';

interface InformationWindowDisplayProps {
  window: InfoWindow;
}

const InformationWindowDisplay: React.FC<InformationWindowDisplayProps> = ({ window }) => {
  return (
    <div className="bg-gray-800 p-8 rounded-xl shadow-lg animate-fade-in">
        <div className="flex items-center space-x-4 mb-6">
            <div className="p-3 bg-blue-600 rounded-lg">
                <Icon name={window.iconName} className="w-8 h-8 text-white"/>
            </div>
            <h1 className="text-3xl font-bold text-white">{window.title}</h1>
        </div>
      <div className="text-gray-300 leading-relaxed prose prose-invert max-w-none">
        <p>
            {window.content}
        </p>
      </div>
    </div>
  );
};

export default InformationWindowDisplay;
