import React, { useState, useEffect } from 'react';
import { seasonalData } from '../data';
import { Sun, CloudRain, Wind, Calendar } from 'lucide-react';

const SeasonalGuide: React.FC = () => {
  const [currentSeasonKey, setCurrentSeasonKey] = useState<string>('soil');
  
  // Determine season based on real month
  useEffect(() => {
    const month = new Date().getMonth(); // 0-11
    // Nov(10), Dec(11), Jan(0) -> Harvest
    if (month === 10 || month === 11 || month === 0) {
        setCurrentSeasonKey('harvest');
    } 
    // Feb(1), Mar(2) -> Pruning
    else if (month === 1 || month === 2) {
        setCurrentSeasonKey('pruning');
    } 
    // Apr(3) to Oct(9) -> Soil
    else {
        setCurrentSeasonKey('soil');
    }
  }, []);

  const activeSeason = seasonalData[currentSeasonKey];

  return (
    <div className="pt-20 min-h-screen bg-messinia text-white flex flex-col">
       <div className="flex-1 flex flex-col lg:flex-row">
            
            {/* Left Panel: Navigation & Date */}
            <div className="w-full lg:w-1/3 bg-slate p-12 flex flex-col justify-center relative overflow-hidden">
                <div className="absolute top-0 right-0 p-40 bg-gold rounded-full blur-[100px] opacity-10 translate-x-1/2 -translate-y-1/2"></div>
                
                <h1 className="font-serif text-4xl md:text-5xl font-bold mb-8 relative z-10">The Seasonal Guide</h1>
                <p className="text-gray-300 mb-12 relative z-10">
                    Agriculture is about timing. See what your grove needs right now.
                </p>

                <div className="space-y-4 relative z-10">
                    {Object.keys(seasonalData).map((key) => (
                        <button
                            key={key}
                            onClick={() => setCurrentSeasonKey(key)}
                            className={`w-full text-left p-4 border-l-4 transition-all ${
                                currentSeasonKey === key 
                                ? 'border-gold bg-white/5 text-white' 
                                : 'border-transparent text-gray-500 hover:text-gray-300'
                            }`}
                        >
                            <span className="block text-xs uppercase tracking-widest mb-1">{seasonalData[key].monthRange}</span>
                            <span className="font-serif text-xl">{seasonalData[key].title}</span>
                        </button>
                    ))}
                </div>
            </div>

            {/* Right Panel: Content */}
            <div className="w-full lg:w-2/3 p-12 lg:p-24 bg-messinia flex flex-col justify-center">
                <div className="max-w-2xl animate-fade-in">
                    <div className="flex items-center gap-4 text-gold mb-6">
                        <Calendar size={24} />
                        <span className="text-sm font-bold uppercase tracking-widest">{activeSeason.monthRange}</span>
                    </div>

                    <h2 className="font-serif text-5xl md:text-6xl font-bold mb-8 leading-tight">
                        {activeSeason.title}
                    </h2>

                    <p className="text-xl md:text-2xl text-gray-200 font-light leading-relaxed mb-12">
                        {activeSeason.description}
                    </p>

                    <div className="bg-white/10 p-8 rounded-lg border border-white/10 mb-8">
                        <h3 className="text-gold font-bold uppercase tracking-widest text-sm mb-4">Recommended Action</h3>
                        <p className="text-xl font-serif text-white">{activeSeason.action}</p>
                    </div>

                    <div>
                        <h3 className="text-gray-400 text-sm font-bold uppercase tracking-widest mb-4">Suggested Equipment</h3>
                        <div className="flex flex-wrap gap-3">
                            {activeSeason.recommendedGear.map((gear, idx) => (
                                <span key={idx} className="px-4 py-2 bg-slate text-white rounded-full text-sm border border-gray-600">
                                    {gear}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
       </div>
    </div>
  );
};

export default SeasonalGuide;