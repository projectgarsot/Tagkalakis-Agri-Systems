import React from 'react';
import { Machine } from '../types';
import { Settings, Gauge, Move } from 'lucide-react';

interface Props {
  machine: Machine;
}

const MachineCard: React.FC<Props> = ({ machine }) => {
  return (
    <div className="group relative w-full h-96 overflow-hidden rounded-lg shadow-lg cursor-pointer bg-white">
      {/* Background Image */}
      <img 
        src={machine.image} 
        alt={machine.name} 
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />
      
      {/* Default Overlay (Bottom Title) */}
      <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-slate/90 to-transparent transition-opacity duration-300 group-hover:opacity-0">
        <h3 className="text-white font-serif text-2xl font-bold">{machine.name}</h3>
        <p className="text-gray-200 text-sm font-sans uppercase tracking-wider">{machine.category}</p>
      </div>

      {/* Holographic Tech-Spec Overlay (On Hover) */}
      <div className="absolute inset-0 bg-slate/90 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-center items-center p-8 border-[1px] border-gold/30">
        <div className="border border-gold/50 p-6 w-full h-full flex flex-col justify-between relative">
            {/* Decorative corners */}
            <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-gold"></div>
            <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-gold"></div>
            <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-gold"></div>
            <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-gold"></div>

            <div className="text-center">
                <h3 className="text-gold font-serif text-2xl mb-2">{machine.name}</h3>
                <div className="w-16 h-0.5 bg-white/20 mx-auto mb-4"></div>
                <p className="text-white text-sm leading-relaxed mb-6">{machine.description}</p>
            </div>

            <div className="space-y-4">
                {machine.specs.hp && (
                    <div className="flex items-center justify-between text-gray-300 border-b border-white/10 pb-2">
                        <div className="flex items-center gap-2"><Gauge size={16} /> <span>Ισχύς</span></div>
                        <span className="text-white font-bold font-mono">{machine.specs.hp}</span>
                    </div>
                )}
                <div className="flex items-center justify-between text-gray-300 border-b border-white/10 pb-2">
                     <div className="flex items-center gap-2"><Settings size={16} /> <span>Απόδοση</span></div>
                     <span className="text-white font-bold font-mono">{machine.specs.efficiency}</span>
                </div>
                <div className="flex items-center justify-between text-gray-300 border-b border-white/10 pb-2">
                     <div className="flex items-center gap-2"><Move size={16} /> <span>Τεχνολογία</span></div>
                     <span className="text-white font-bold font-mono">{machine.specs.feature}</span>
                </div>
            </div>
            
            <button className="mt-4 w-full py-2 bg-gold text-slate font-bold uppercase text-xs tracking-widest hover:bg-white transition-colors">
                ΖΗΤΗΣΤΕ ΠΡΟΣΦΟΡΑ
            </button>
        </div>
      </div>
    </div>
  );
};

export default MachineCard;