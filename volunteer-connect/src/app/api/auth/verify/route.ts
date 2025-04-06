import { NextResponse } from 'next/server';
import { adminAuth } from '@/lib/firebase-admin';
import { cookies } from 'next/headers';

export async function GET() {
  try {
    const cookieStore = await cookies();
    const session = cookieStore.get('session')?.value;

    if (!session) {
      return NextResponse.json({ error: 'No session found' }, { status: 401 });
    }

    // Verify the session
    const decodedToken = await adminAuth.verifySessionCookie(session, true);
    
    return NextResponse.json({ 
      uid: decodedToken.uid,
      email: decodedToken.email,
      role: decodedToken.role
    });
  } catch (error) {
    return NextResponse.json({ error: 'Invalid session' }, { status: 401 });
  }
} 