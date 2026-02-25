import { NextRequest, NextResponse } from 'next/server';
import { Database } from '@/lib/database';

const db = new Database();

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, name } = body;

    // Basic validation
    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { error: 'Valid email is required' },
        { status: 400 }
      );
    }

    // Insert into database
    const result = await db.run(
      `INSERT INTO email_subscribers (email, name, source, subscribed_at) 
       VALUES (?, ?, 'nashvillegigguide', ?)`,
      [email, name || null, new Date().toISOString()]
    );

    if (result.changes === 0) {
      // Email already exists
      return NextResponse.json(
        { message: 'Email already subscribed', email },
        { status: 200 }
      );
    }

    return NextResponse.json(
      { 
        message: 'Successfully subscribed!', 
        email,
        id: result.lastInsertRowid 
      },
      { status: 201 }
    );

  } catch (error) {
    console.error('Subscription error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function GET(request: NextRequest) {
  try {
    // Simple health check - don't try to query database in production
    return NextResponse.json(
      { 
        message: 'Nashville Gig Guide Email Subscribers API',
        status: 'active',
        note: 'Use POST to subscribe emails'
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Subscription API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}