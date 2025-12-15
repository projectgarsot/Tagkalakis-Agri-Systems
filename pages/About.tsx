import React from 'react';

const About: React.FC = () => {
  return (
    <div className="pt-24 pb-20 bg-limestone min-h-screen">
      <div className="max-w-3xl mx-auto px-6">
        <h1 className="font-serif text-5xl font-bold text-slate mb-2">Our Roots</h1>
        <h2 className="font-sans text-messinia font-bold uppercase tracking-widest mb-12">Established 2020</h2>

        <div className="prose prose-lg text-gray-700">
            <p className="mb-6 first-letter:text-5xl first-letter:font-serif first-letter:font-bold first-letter:text-gold first-letter:mr-3 float-left">
                Established in 2020, Tagkalakis I.K.E. combines the agility of a modern Private Capital Company with the deep-rooted values of the Tagkalakis family. 
            </p>
            <p className="mb-6">
                Based in <strong>Athanasiou Kokkoni 74</strong>, we stand at the center of Greek olive production, dedicated to equipping the next generation of farmers.
            </p>
            <p className="mb-8">
                Gargalianoi is more than just our location; it is the heart of olive oil production. We understand the soil here. We know that the limestone requires sturdy tillers, and the centuries-old trees require gentle, yet effective harvesting technology.
            </p>

            <h3 className="font-serif text-2xl font-bold text-slate mt-12 mb-4">Cultivating Perfection / Καλλιεργώντας την Τελειότητα</h3>
            <p>
                Our mission is simple: To ensure that the farmers of Messinia have access to world-class technology without losing the connection to their traditions. We are your partners in the harvest.
            </p>
        </div>

        <div className="mt-16 border-t border-gray-300 pt-8 flex gap-8">
            <div className="flex-1">
                <div className="h-64 bg-gray-200 rounded-lg overflow-hidden relative">
                     <img src="https://picsum.photos/id/433/600/400" alt="Founder" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" />
                     <div className="absolute bottom-4 left-4 text-white">
                        <p className="font-bold font-serif">The Team</p>
                     </div>
                </div>
            </div>
             <div className="flex-1">
                <div className="h-64 bg-gray-200 rounded-lg overflow-hidden relative">
                     <img src="https://picsum.photos/id/192/600/400" alt="Showroom" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" />
                     <div className="absolute bottom-4 left-4 text-white">
                        <p className="font-bold font-serif">The HQ</p>
                     </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default About;