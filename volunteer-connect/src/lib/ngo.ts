import { db } from './firebase';
import {
  doc,
  getDoc,
  updateDoc,
  collection,
  query,
  where,
  getDocs,
  addDoc,
  Timestamp,
  arrayUnion,
  QueryConstraint
} from 'firebase/firestore';

export interface NGOProfile {
  name: string;
  email: string;
  phone?: string;
  location?: string;
  description?: string;
  website?: string;
  foundedYear?: number;
  logo?: string;
  categories: string[];
  updatedAt: string;
}

export interface Opportunity {
  title: string;
  description: string;
  organizationId: string;
  organizationName: string;
  location: string;
  category: string;
  requiredSkills: string[];
  schedule: {
    frequency: string;
    duration: string;
    startDate: string;
    endDate?: string;
  };
  requirements: string[];
  benefits: string[];
  status: 'active' | 'completed' | 'cancelled';
  volunteers: {
    userId: string;
    status: 'pending' | 'approved' | 'rejected' | 'completed';
    appliedAt: string;
    updatedAt: string;
  }[];
  createdAt: string;
  updatedAt: string;
}

export const getNGOProfile = async (userId: string): Promise<NGOProfile | null> => {
  try {
    const docRef = doc(db, 'ngos', userId);
    const docSnap = await getDoc(docRef);
    return docSnap.exists() ? (docSnap.data() as NGOProfile) : null;
  } catch (error) {
    throw error;
  }
};

export const updateNGOProfile = async (userId: string, profile: Partial<NGOProfile>) => {
  try {
    const docRef = doc(db, 'ngos', userId);
    await updateDoc(docRef, {
      ...profile,
      updatedAt: new Date().toISOString()
    });
  } catch (error) {
    throw error;
  }
};

export const createOpportunity = async (opportunity: Omit<Opportunity, 'createdAt' | 'updatedAt' | 'volunteers'>) => {
  try {
    const docRef = await addDoc(collection(db, 'opportunities'), {
      ...opportunity,
      volunteers: [],
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    });
    return docRef.id;
  } catch (error) {
    throw error;
  }
};

export const updateOpportunity = async (opportunityId: string, updates: Partial<Opportunity>) => {
  try {
    const docRef = doc(db, 'opportunities', opportunityId);
    await updateDoc(docRef, {
      ...updates,
      updatedAt: new Date().toISOString()
    });
  } catch (error) {
    throw error;
  }
};

export const getOpportunity = async (opportunityId: string): Promise<Opportunity | null> => {
  try {
    const docRef = doc(db, 'opportunities', opportunityId);
    const docSnap = await getDoc(docRef);
    return docSnap.exists() ? (docSnap.data() as Opportunity) : null;
  } catch (error) {
    throw error;
  }
};

export const getNGOOpportunities = async (organizationId: string): Promise<Opportunity[]> => {
  try {
    const q = query(
      collection(db, 'opportunities'),
      where('organizationId', '==', organizationId)
    );
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    })) as Opportunity[];
  } catch (error) {
    throw error;
  }
};

export const searchOpportunities = async (criteria: {
  category?: string;
  location?: string;
  skills?: string[];
  status?: 'active' | 'completed' | 'cancelled';
}) => {
  try {
    const constraints: QueryConstraint[] = [];
    
    if (criteria.category) {
      constraints.push(where('category', '==', criteria.category));
    }
    
    if (criteria.location) {
      constraints.push(where('location', '==', criteria.location));
    }
    
    if (criteria.skills?.length) {
      constraints.push(where('requiredSkills', 'array-contains-any', criteria.skills));
    }
    
    if (criteria.status) {
      constraints.push(where('status', '==', criteria.status));
    }
    
    const q = query(collection(db, 'opportunities'), ...constraints);
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    })) as Opportunity[];
  } catch (error) {
    throw error;
  }
};

export const applyForOpportunity = async (opportunityId: string, userId: string) => {
  try {
    const docRef = doc(db, 'opportunities', opportunityId);
    const volunteer = {
      userId,
      status: 'pending',
      appliedAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };
    
    await updateDoc(docRef, {
      volunteers: arrayUnion(volunteer),
      updatedAt: new Date().toISOString()
    });
  } catch (error) {
    throw error;
  }
};

export const updateVolunteerStatus = async (
  opportunityId: string,
  userId: string,
  status: 'approved' | 'rejected' | 'completed'
) => {
  try {
    const docRef = doc(db, 'opportunities', opportunityId);
    const opportunity = await getOpportunity(opportunityId);
    
    if (!opportunity) {
      throw new Error('Opportunity not found');
    }
    
    const updatedVolunteers = opportunity.volunteers.map(v => 
      v.userId === userId
        ? { ...v, status, updatedAt: new Date().toISOString() }
        : v
    );
    
    await updateDoc(docRef, {
      volunteers: updatedVolunteers,
      updatedAt: new Date().toISOString()
    });
  } catch (error) {
    throw error;
  }
}; 