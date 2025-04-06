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
  Query,
  QueryConstraint
} from 'firebase/firestore';

export interface VolunteerProfile {
  name: string;
  email: string;
  phone?: string;
  location?: string;
  bio?: string;
  skills: string[];
  interests: string[];
  languages: string[];
  education: {
    school: string;
    degree: string;
    year: string;
  }[];
  volunteeringHistory: {
    organization: string;
    role: string;
    duration: string;
    hours: number;
    description: string;
  }[];
  certificates: {
    name: string;
    issuer: string;
    date: string;
  }[];
  updatedAt: string;
}

export const getVolunteerProfile = async (userId: string): Promise<VolunteerProfile | null> => {
  try {
    const docRef = doc(db, 'volunteers', userId);
    const docSnap = await getDoc(docRef);
    return docSnap.exists() ? (docSnap.data() as VolunteerProfile) : null;
  } catch (error) {
    throw error;
  }
};

export const updateVolunteerProfile = async (userId: string, profile: Partial<VolunteerProfile>) => {
  try {
    const docRef = doc(db, 'volunteers', userId);
    await updateDoc(docRef, {
      ...profile,
      updatedAt: new Date().toISOString()
    });
  } catch (error) {
    throw error;
  }
};

export const addVolunteeringHistory = async (
  userId: string,
  history: Omit<VolunteerProfile['volunteeringHistory'][0], 'createdAt'>
) => {
  try {
    const docRef = doc(db, 'volunteers', userId);
    const volunteeringHistory = {
      ...history,
      createdAt: Timestamp.now()
    };
    
    await updateDoc(docRef, {
      volunteeringHistory: arrayUnion(volunteeringHistory),
      updatedAt: new Date().toISOString()
    });
  } catch (error) {
    throw error;
  }
};

export const addCertificate = async (
  userId: string,
  certificate: Omit<VolunteerProfile['certificates'][0], 'createdAt'>
) => {
  try {
    const docRef = doc(db, 'volunteers', userId);
    const newCertificate = {
      ...certificate,
      createdAt: Timestamp.now()
    };
    
    await updateDoc(docRef, {
      certificates: arrayUnion(newCertificate),
      updatedAt: new Date().toISOString()
    });
  } catch (error) {
    throw error;
  }
};

export const searchVolunteers = async (criteria: {
  skills?: string[];
  location?: string;
  interests?: string[];
}) => {
  try {
    const constraints: QueryConstraint[] = [];
    
    if (criteria.skills?.length) {
      constraints.push(where('skills', 'array-contains-any', criteria.skills));
    }
    
    if (criteria.location) {
      constraints.push(where('location', '==', criteria.location));
    }
    
    if (criteria.interests?.length) {
      constraints.push(where('interests', 'array-contains-any', criteria.interests));
    }
    
    const q = query(collection(db, 'volunteers'), ...constraints);
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
  } catch (error) {
    throw error;
  }
}; 