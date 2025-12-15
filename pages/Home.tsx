import React from 'react';
import { ArrowRight, Activity, Tractor, Axe, Flame, Sparkles, Database } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import LegalInfo from '../components/LegalInfo';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col">
      
      {/* Hero Section */}
      <section className="relative h-screen w-full overflow-hidden">
        {/* Simulated Video Background using Image with Ken Burns effect */}
        <div className="absolute inset-0 bg-slate">
            <motion.div 
                initial={{ scale: 1 }}
                animate={{ scale: 1.1 }}
                transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }}
                className="w-full h-full"
            >
                <img 
                    src="images/tagkalakis.png" 
                    alt="Olive Harvest" 
                    className="w-full h-full object-cover opacity-60"
                />
            </motion.div>
        </div>
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-messinia/90 via-messinia/40 to-transparent">
            <div className="max-w-7xl mx-auto px-6 h-full flex flex-col justify-center">
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-2xl text-white"
                >
                    <h2 className="text-gold font-sans font-bold tracking-[0.2em] uppercase mb-4 text-sm">Tagkalakis Agri-Systems</h2>
                    <h1 className="font-serif text-5xl md:text-7xl font-bold leading-tight mb-6">
                        Το Μέλλον της <br/> Συγκομιδής.
                    </h1>
                    <p className="font-sans text-lg md:text-xl text-gray-200 mb-10 leading-relaxed max-w-lg">
                        Προηγμένα γεωργικά μηχανήματα για τον σύγχρονο αγρότη της Μεσσηνίας. Ρίζες στην παράδοση, δύναμη στην τεχνολογία.
                    </p>
                </motion.div>
            </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-24 bg-limestone text-slate relative">
        <div className="max-w-4xl mx-auto px-6 text-center">
            <span className="text-messinia font-bold tracking-widest uppercase text-sm mb-4 block">Η Φιλοσοφία μας</span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-8">Από Πατέρα σε Γιο.</h2>
            <p className="text-xl leading-relaxed text-gray-600 font-light">
                "Στους Γαργαλιάνους, η καλλιέργεια της ελιάς δεν είναι απλώς μια δουλειά, είναι κληρονομιά. Στην Tagkalakis Agri-Systems, κατανοούμε ότι η γη απαιτεί σεβασμό, αλλά η συγκομιδή απαιτεί αποτελεσματικότητα. Σας παρέχουμε τα εργαλεία για να τιμήσετε το παρελθόν εξασφαλίζοντας το μέλλον σας."
            </p>
            <div className="mt-12 w-24 h-1 bg-gold mx-auto"></div>
        </div>
      </section>

      {/* Featured Technology (Smart Grove) - UPDATED */}
      <section className="py-24 bg-messinia text-white">
        <div className="max-w-7xl mx-auto px-6">
            <div className="flex justify-between items-end mb-16">
                <div>
                    <h2 className="font-serif text-4xl font-bold">Ο Έξυπνος Ελαιώνας</h2>
                    <p className="text-gold mt-2">Απαραίτητος εξοπλισμός για κάθε στάδιο της καλλιέργειας.</p>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* 1. Wood Cutting */}
                <div className="bg-white/5 border border-white/10 p-8 hover:bg-white/10 transition-colors group cursor-pointer flex flex-col items-center text-center">
                    <div className="bg-slate/50 p-4 rounded-full mb-6 group-hover:bg-gold group-hover:text-slate transition-colors">
                        <Axe size={32} />
                    </div>
                    <h3 className="font-serif text-xl font-bold mb-2">ΚΟΠΗ ΞΥΛΩΝ</h3>
                    <p className="text-xs text-gold uppercase tracking-wider mb-4">Wood Cutting</p>
                    <p className="text-gray-300 text-sm leading-relaxed">
                        Αλυσοπρίονα, σχίστες ξύλων και εξοπλισμός κλαδέματος για τη συντήρηση του ελαιώνα.
                    </p>
                </div>

                {/* 2. Mowers & Tillers */}
                <div className="bg-white/5 border border-white/10 p-8 hover:bg-white/10 transition-colors group cursor-pointer flex flex-col items-center text-center">
                    <div className="bg-slate/50 p-4 rounded-full mb-6 group-hover:bg-gold group-hover:text-slate transition-colors">
                        <Tractor size={32} />
                    </div>
                    <h3 className="font-serif text-xl font-bold mb-2">ΧΛΟΟΚΟΠΤΙΚΑ - ΣΚΑΠΤΙΚΑ</h3>
                    <p className="text-xs text-gold uppercase tracking-wider mb-4">Mowers & Tillers</p>
                    <p className="text-gray-300 text-sm leading-relaxed">
                        Ισχυρά σκαπτικά και χλοοκοπτικά για την προετοιμασία του εδάφους και τον έλεγχο των ζιζανίων.
                    </p>
                </div>
                
                {/* 3. Olive Harvesters */}
                <div className="bg-white/5 border border-white/10 p-8 hover:bg-white/10 transition-colors group cursor-pointer flex flex-col items-center text-center">
                    <div className="bg-slate/50 p-4 rounded-full mb-6 group-hover:bg-gold group-hover:text-slate transition-colors">
                        <Activity size={32} />
                    </div>
                    <h3 className="font-serif text-xl font-bold mb-2">ΕΛΑΙΟΡΑΒΔΙΣΤΙΚΑ</h3>
                    <p className="text-xs text-gold uppercase tracking-wider mb-4">Olive Harvesters</p>
                    <p className="text-gray-300 text-sm leading-relaxed">
                        Γεννήτριες και ραβδιστικά συστήματα σχεδιασμένα για μέγιστη απόδοση με ελάχιστη ζημιά στο δέντρο.
                    </p>
                </div>

                {/* 4. Oil Storage */}
                <div className="bg-white/5 border border-white/10 p-8 hover:bg-white/10 transition-colors group cursor-pointer flex flex-col items-center text-center">
                    <div className="bg-slate/50 p-4 rounded-full mb-6 group-hover:bg-gold group-hover:text-slate transition-colors">
                        <Database size={32} />
                    </div>
                    <h3 className="font-serif text-xl font-bold mb-2">ΔΟΧΕΙΑ ΑΠΟΘΗΚΕΥΣΗΣ</h3>
                    <p className="text-xs text-gold uppercase tracking-wider mb-4">Oil Storage</p>
                    <p className="text-gray-300 text-sm leading-relaxed">
                        Ανοξείδωτες δεξαμενές και δοχεία τροφίμων για την ασφαλή συντήρηση του ελαιολάδου.
                    </p>
                </div>

                {/* 5. Cleaning Agents */}
                <div className="bg-white/5 border border-white/10 p-8 hover:bg-white/10 transition-colors group cursor-pointer flex flex-col items-center text-center">
                    <div className="bg-slate/50 p-4 rounded-full mb-6 group-hover:bg-gold group-hover:text-slate transition-colors">
                        <Sparkles size={32} />
                    </div>
                    <h3 className="font-serif text-xl font-bold mb-2">ΚΑΘΑΡΙΣΤΙΚΑ</h3>
                    <p className="text-xs text-gold uppercase tracking-wider mb-4">Cleaning Agents</p>
                    <p className="text-gray-300 text-sm leading-relaxed">
                        Εξειδικευμένα απορρυπαντικά για τη συντήρηση μηχανημάτων και την υγιεινή των εγκαταστάσεων.
                    </p>
                </div>

                {/* 6. Stoves */}
                <div className="bg-white/5 border border-white/10 p-8 hover:bg-white/10 transition-colors group cursor-pointer flex flex-col items-center text-center">
                    <div className="bg-slate/50 p-4 rounded-full mb-6 group-hover:bg-gold group-hover:text-slate transition-colors">
                        <Flame size={32} />
                    </div>
                    <h3 className="font-serif text-xl font-bold mb-2">ΣΟΜΠΕΣ</h3>
                    <p className="text-xs text-gold uppercase tracking-wider mb-4">Heating Solutions</p>
                    <p className="text-gray-300 text-sm leading-relaxed">
                        Αποδοτικές σόμπες ξύλου και πέλλετ για τους χειμερινούς μήνες.
                    </p>
                </div>
            </div>
        </div>
      </section>

      {/* Legal Info / Corporate Transparency */}
      <LegalInfo />
    </div>
  );
};

export default Home;