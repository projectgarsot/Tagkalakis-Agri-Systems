import React from 'react';
import { Facebook, Instagram, Phone, MapPin, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate text-white pt-16 pb-8 border-t-4 border-gold">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12">
        
        {/* Brand */}
        <div>
          <h2 className="font-serif text-2xl font-bold mb-4">Tagkalakis <span className="text-gold">I.K.E.</span></h2>
          <p className="text-gray-400 font-sans text-sm leading-relaxed mb-6">
            Ρίζες στη Μεσσηνία. Δύναμη στην Τεχνολογία.<br/>
            Γεφυρώνοντας την παράδοση με τη σύγχρονη αγροτική καινοτομία από το 2020.
          </p>
          <div className="flex gap-4">
            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-gray-400 cursor-default">
              <Facebook size={20} />
            </div>
            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-gray-400 cursor-default">
              <Instagram size={20} />
            </div>
          </div>
        </div>

        {/* Contact */}
        <div className="md:text-right">
          <h3 className="font-serif text-xl font-bold mb-6">Επικοινωνία</h3>
          <ul className="space-y-4 text-sm text-gray-300 inline-block text-left">
            <li className="flex items-start gap-3">
              <MapPin className="text-gold mt-1" size={18} />
              <span>Αθανασίου Κοκκώνη 74<br/>Γαργαλιάνοι, Μεσσηνία</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="text-gold" size={18} />
              <span>+30 27630 XXXXX</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="text-gold" size={18} />
              <span>info@tagkalakis-agri.gr</span>
            </li>
          </ul>
        </div>

      </div>

      <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
        <p>&copy; {new Date().getFullYear()} Tagkalakis Agri-Systems. Με επιφύλαξη παντός δικαιώματος.</p>
        <p className="mt-2 md:mt-0">Design Concept</p>
      </div>
    </footer>
  );
};

export default Footer;