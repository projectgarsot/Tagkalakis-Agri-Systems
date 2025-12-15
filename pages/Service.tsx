import React from 'react';
import { Wrench, PhoneCall, Clock, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const Service: React.FC = () => {
  return (
    <div className="pt-24 bg-limestone min-h-screen">
      
      {/* Hero Header */}
      <div className="max-w-4xl mx-auto px-6 text-center mb-16">
        <h1 className="font-serif text-4xl md:text-6xl font-bold text-slate mb-6">
          We Don't Stop When <br/> <span className="text-messinia">The Sun Goes Down.</span>
        </h1>
        <p className="text-xl text-gray-600 font-light max-w-2xl mx-auto">
          Your machinery is the heartbeat of your farm. We keep it beating. From routine maintenance to emergency field repairs.
        </p>
      </div>

      {/* English / Greek Copy Block */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
        <div className="bg-white p-8 shadow-lg border-l-4 border-gold">
            <p className="font-serif italic text-2xl text-slate mb-4">"Your machinery is the heartbeat of your farm. We keep it beating."</p>
        </div>
        <div className="bg-slate p-8 shadow-lg border-l-4 border-messinia text-white">
            <p className="font-serif italic text-2xl">"Το μηχάνημά σου είναι η καρδιά του κτήματος. Εμείς φροντίζουμε να χτυπάει δυνατά."</p>
        </div>
      </div>

      {/* Services Grid */}
      <div className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center p-6">
                    <div className="w-16 h-16 bg-limestone rounded-full flex items-center justify-center mx-auto mb-6 text-messinia">
                        <Wrench size={32} />
                    </div>
                    <h3 className="font-serif text-2xl font-bold text-slate mb-4">Preventative Maintenance</h3>
                    <p className="text-gray-600">Scheduled checks before the harvest season begins. Fluid analysis, belt replacements, and calibration.</p>
                </div>
                <div className="text-center p-6 relative">
                    <div className="absolute top-0 right-0 bg-red-600 text-white text-xs font-bold px-2 py-1 uppercase tracking-wider rounded">Critical</div>
                    <div className="w-16 h-16 bg-limestone rounded-full flex items-center justify-center mx-auto mb-6 text-red-600">
                        <PhoneCall size={32} />
                    </div>
                    <h3 className="font-serif text-2xl font-bold text-slate mb-4">Emergency Harvest Support</h3>
                    <p className="text-gray-600">A dedicated hotline for breakdowns during peak harvest season. We come to the grove.</p>
                </div>
                <div className="text-center p-6">
                    <div className="w-16 h-16 bg-limestone rounded-full flex items-center justify-center mx-auto mb-6 text-messinia">
                        <Clock size={32} />
                    </div>
                    <h3 className="font-serif text-2xl font-bold text-slate mb-4">Rapid Parts Delivery</h3>
                    <p className="text-gray-600">Stocked warehouse in Gargalianoi. If we don't have it, we get it within 24 hours.</p>
                </div>
            </div>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-slate py-16 text-center text-white">
        <h2 className="font-serif text-3xl mb-4">Need immediate assistance?</h2>
        <p className="mb-8 text-gray-400">Our support team is standing by.</p>
        <button className="px-8 py-3 bg-gold text-slate font-bold uppercase rounded hover:bg-white transition-colors">
            Call Support: +30 27630 XXXXX
        </button>
      </div>
    </div>
  );
};

export default Service;