import { NextResponse } from 'next/server'
import { getShowListings } from '@/lib/database'

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const limit = parseInt(searchParams.get('limit') || '10')
    
    const shows = await getShowListings(limit)
    return NextResponse.json({ shows })
  } catch (error) {
    console.error('Error fetching shows:', error)
    return NextResponse.json(
      { error: 'Failed to fetch show listings' },
      { status: 500 }
    )
  }
}