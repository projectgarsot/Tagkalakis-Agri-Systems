import { Machine, SeasonalTip } from './types';

export const machines: Machine[] = [
  {
    id: '1',
    name: 'Messinia-Vibro 3000',
    category: 'ΕΛΑΙΟΡΑΒΔΙΣΤΙΚΑ',
    image: 'https://picsum.photos/id/111/800/600',
    description: 'Παλμικό ελαιοραβδιστικό υψηλής συχνότητας, σχεδιασμένο για αιωνόβιους κορμούς χωρίς να τραυματίζει το δέντρο.',
    specs: {
      hp: '85 HP',
      efficiency: '120 δέντρα/ώρα',
      feature: 'Προστασία Φλοιού'
    }
  },
  {
    id: '2',
    name: 'Compact-Trac 440',
    category: 'ΧΛΟΟΚΟΠΤΙΚΑ - ΣΚΑΠΤΙΚΑ',
    image: 'https://picsum.photos/id/133/800/600',
    description: 'Στενό τρακτέρ ειδικά σχεδιασμένο για ελιγμούς σε πυκνούς παραδοσιακούς ελαιώνες.',
    specs: {
      hp: '75 HP',
      efficiency: '4.2L / ώρα',
      feature: 'Ακτίνα 1.8m'
    }
  },
  {
    id: '3',
    name: 'Pro-Saw 500',
    category: 'ΚΟΠΗ ΞΥΛΩΝ',
    image: 'https://picsum.photos/id/250/800/600',
    description: 'Επαγγελματικό αλυσοπρίονο για κλάδεμα μεγάλων κλαδιών ελιάς με σύστημα αντι-δόνησης.',
    specs: {
      efficiency: 'Υψηλές Στροφές',
      feature: 'Anti-Vibration'
    }
  },
  {
    id: '4',
    name: 'Terra-Tiller X',
    category: 'ΧΛΟΟΚΟΠΤΙΚΑ - ΣΚΑΠΤΙΚΑ',
    image: 'https://picsum.photos/id/402/800/600',
    description: 'Σκαπτικό βαρέως τύπου για την προετοιμασία του σκληρού και πετρώδους εδάφους της Μεσσηνίας.',
    specs: {
      hp: '110 HP',
      efficiency: 'Υψηλή Ροπή',
      feature: 'Θραύση Πέτρας'
    }
  },
  {
    id: '5',
    name: 'Inox-Tank 5T',
    category: 'ΔΟΧΕΙΑ ΑΠΟΘΗΚΕΥΣΗΣ',
    image: 'https://picsum.photos/id/77/800/600',
    description: 'Ανοξείδωτη δεξαμενή τροφίμων με κωνικό πυθμένα για άριστη συντήρηση του ελαιολάδου.',
    specs: {
      efficiency: 'Χωρ. 5 Τόνοι',
      feature: 'Σφράγιση Argon'
    }
  },
  {
    id: '6',
    name: 'Bio-Clean Pro',
    category: 'ΚΑΘΑΡΙΣΤΙΚΑ',
    image: 'https://picsum.photos/id/444/800/600',
    description: 'Βιομηχανικό καθαριστικό μηχανημάτων, ασφαλές για επιφάνειες που έρχονται σε επαφή με τρόφιμα.',
    specs: {
      efficiency: 'Συμπυκνωμένο',
      feature: 'Βιοδιασπώμενο'
    }
  },
  {
    id: '7',
    name: 'Vulcan Pellet Stove',
    category: 'ΣΟΜΠΕΣ',
    image: 'https://picsum.photos/id/555/800/600',
    description: 'Σόμπα πέλλετ υψηλής ενεργειακής απόδοσης για θέρμανση αποθήκης ή κατοικίας.',
    specs: {
      efficiency: 'Ισχύς 15kW',
      feature: 'Έλεγχος WiFi'
    }
  }
];

export const seasonalData: Record<string, SeasonalTip> = {
  harvest: {
    title: "Περίοδος Συγκομιδής",
    monthRange: "Νοέμβριος - Ιανουάριος",
    description: "Η περιεκτικότητα σε λάδι είναι στο αποκορύφωμά της. Βεβαιωθείτε ότι τα συστήματα συλλογής σας είναι ρυθμισμένα σωστά.",
    action: "Είναι έτοιμο το ραβδιστικό σας; Κλείστε service.",
    recommendedGear: ['Messinia-Vibro 3000', 'Olive-Catch Pro']
  },
  pruning: {
    title: "Περίοδος Κλαδέματος",
    monthRange: "Φεβρουάριος - Μάρτιος",
    description: "Διαμορφώστε τα δέντρα σας για την επόμενη σοδειά. Ανοίξτε την κόμη στον ελληνικό ήλιο.",
    action: "Δείτε τα κορυφαία αλυσοπρίονά μας.",
    recommendedGear: ['Compact-Trac 440']
  },
  soil: {
    title: "Προετοιμασία Εδάφους",
    monthRange: "Απρίλιος - Οκτώβριος",
    description: "Θρέψτε τις ρίζες. Η διαχείριση των ζιζανίων και της υγρασίας τώρα καθορίζει την ποιότητα του χρυσού της επόμενης χρονιάς.",
    action: "Δείτε τη νέα σειρά σκαπτικών.",
    recommendedGear: ['Terra-Tiller X', 'Eco-Spray drone']
  }
};