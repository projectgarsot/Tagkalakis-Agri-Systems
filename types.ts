export type MachineCategory = 
  | 'ΚΟΠΗ ΞΥΛΩΝ' 
  | 'ΧΛΟΟΚΟΠΤΙΚΑ - ΣΚΑΠΤΙΚΑ' 
  | 'ΕΛΑΙΟΡΑΒΔΙΣΤΙΚΑ' 
  | 'ΔΟΧΕΙΑ ΑΠΟΘΗΚΕΥΣΗΣ' 
  | 'ΚΑΘΑΡΙΣΤΙΚΑ' 
  | 'ΣΟΜΠΕΣ';

export interface Machine {
  id: string;
  name: string;
  category: MachineCategory;
  image: string;
  description: string;
  specs: {
    hp?: string;
    efficiency: string;
    feature: string;
  };
}

export interface SeasonalTip {
  title: string;
  monthRange: string;
  description: string;
  action: string;
  recommendedGear: string[];
}

export interface NavItem {
  label: string;
  path: string;
}

// Legal / Corporate Transparency Types
export interface CompanyDetail {
  label: string;
  value: string;
}

export type DocType = 'balance' | 'income';

export interface FinancialDoc {
  id: string;
  year: string;
  type: DocType;
  title: string;
  url: string;
}