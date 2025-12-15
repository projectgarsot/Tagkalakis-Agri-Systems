import React, { useState } from 'react';
import { machines } from '../data';
import MachineCard from '../components/MachineCard';
import { Filter } from 'lucide-react';
import { MachineCategory } from '../types';

const Machinery: React.FC = () => {
  const [filter, setFilter] = useState<'All' | MachineCategory>('All');

  const categories: MachineCategory[] = [
    'ΚΟΠΗ ΞΥΛΩΝ',
    'ΧΛΟΟΚΟΠΤΙΚΑ - ΣΚΑΠΤΙΚΑ',
    'ΕΛΑΙΟΡΑΒΔΙΣΤΙΚΑ',
    'ΔΟΧΕΙΑ ΑΠΟΘΗΚΕΥΣΗΣ',
    'ΚΑΘΑΡΙΣΤΙΚΑ',
    'ΣΟΜΠΕΣ'
  ];

  const filteredMachines = filter === 'All' 
    ? machines 
    : machines.filter(m => m.category === filter);

  return (
    <div className="pt-24 min-h-screen bg-limestone">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 mb-12">
        <h1 className="font-serif text-5xl font-bold text-slate mb-4">Τα Μηχανήματά μας</h1>
        <p className="text-gray-600 max-w-2xl">
          Σχεδιασμένα για το μοναδικό τοπίο της Μεσσηνίας. Περάστε το ποντίκι πάνω από κάθε μοντέλο για να δείτε τεχνικά χαρακτηριστικά.
        </p>
      </div>

      {/* Filter Bar */}
      <div className="sticky top-20 z-30 bg-limestone/90 backdrop-blur-md border-b border-gray-200 mb-12">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row gap-4 items-center overflow-x-auto">
          <div className="flex items-center gap-2 text-slate font-bold mr-4 flex-shrink-0">
            <Filter size={20} />
            <span className="uppercase tracking-wide text-sm">ΦΙΛΤΡΟ:</span>
          </div>
          <div className="flex gap-2 overflow-x-auto w-full pb-2 md:pb-0 hide-scrollbar">
            <button
                onClick={() => setFilter('All')}
                className={`px-4 py-2 rounded-full text-sm font-bold uppercase tracking-wider transition-all whitespace-nowrap
                  ${filter === 'All' 
                    ? 'bg-messinia text-gold shadow-md' 
                    : 'bg-white text-gray-500 hover:text-slate hover:bg-gray-100'
                  }`}
              >
                ΟΛΑ
            </button>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-full text-sm font-bold uppercase tracking-wider transition-all whitespace-nowrap
                  ${filter === cat 
                    ? 'bg-messinia text-gold shadow-md' 
                    : 'bg-white text-gray-500 hover:text-slate hover:bg-gray-100'
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Grid */}
      <div className="max-w-7xl mx-auto px-6 mb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredMachines.map(machine => (
            <MachineCard key={machine.id} machine={machine} />
          ))}
        </div>
        
        {filteredMachines.length === 0 && (
            <div className="text-center py-20">
                <p className="text-gray-500">Δεν βρέθηκαν μηχανήματα σε αυτή την κατηγορία.</p>
            </div>
        )}
      </div>
    </div>
  );
};

export default Machinery;