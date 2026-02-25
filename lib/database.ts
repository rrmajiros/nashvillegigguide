// Database utilities for Nashville Gig Guide
// Note: SQLite doesn't work on Vercel serverless functions
// This is development-only. For production, we need a different database solution.

export class Database {
  // Simple in-memory store for development
  private static subscribers: any[] = [];

  async query(sql: string, params: any[] = []) {
    console.log('Database query (development):', sql, params);
    
    // Mock responses for development
    if (sql.includes('SELECT * FROM nashville_show_listings')) {
      return [
        {
          id: 1,
          show_date: '2026-02-25',
          venue_name: 'The Basement East',
          headliner_name: 'Ariel Bui',
          genre_tags: '["Indie Rock", "Alternative"]',
          ticket_price: '$15'
        },
        {
          id: 2,
          show_date: '2026-02-26',
          venue_name: 'The 5 Spot',
          headliner_name: 'Anna Wescoat',
          genre_tags: '["Singer-Songwriter", "Folk"]',
          ticket_price: '$10'
        },
        {
          id: 3,
          show_date: '2026-02-27',
          venue_name: 'Station Inn',
          headliner_name: 'Bluegrass Collective',
          genre_tags: '["Bluegrass", "Americana"]',
          ticket_price: '$20'
        }
      ];
    }
    
    if (sql.includes('SELECT * FROM nashville_neighborhoods')) {
      return [
        {
          neighborhood_name: 'East Nashville',
          music_venue_count: 25,
          studio_count: 18,
          walkability_score: 85
        },
        {
          neighborhood_name: 'The Gulch',
          music_venue_count: 8,
          studio_count: 12,
          walkability_score: 90
        }
      ];
    }
    
    if (sql.includes('SELECT COUNT(*) as count FROM email_subscribers')) {
      return [{ count: Database.subscribers.length }];
    }
    
    return [];
  }

  async run(sql: string, params: any[] = []) {
    console.log('Database run (development):', sql, params);
    
    if (sql.includes('INSERT INTO email_subscribers')) {
      const email = params[0];
      const name = params[1];
      
      // Check if email already exists
      const exists = Database.subscribers.some(sub => sub.email === email);
      if (!exists) {
        Database.subscribers.push({
          email,
          name,
          subscribed_at: new Date().toISOString(),
          source: 'nashvillegigguide'
        });
        return { changes: 1, lastInsertRowid: Database.subscribers.length };
      }
      return { changes: 0 };
    }
    
    return { changes: 0 };
  }

  async get(sql: string, params: any[] = []) {
    console.log('Database get (development):', sql, params);
    return null;
  }
}

// For backward compatibility
export async function getShowListings(limit = 10) {
  const db = new Database();
  return db.query(
    `SELECT * FROM nashville_show_listings 
     WHERE show_date >= date('now') 
     ORDER BY show_date ASC 
     LIMIT ?`,
    [limit]
  );
}

export async function getVenuesByNeighborhood(neighborhood?: string) {
  return [];
}

export async function getNeighborhoods() {
  const db = new Database();
  return db.query('SELECT * FROM nashville_neighborhoods ORDER BY neighborhood_name');
}

export async function getRadioActiveArtists() {
  return [
    { name: 'Ariel Bui', genre: 'Indire Rock', play_count: 51 },
    { name: 'Anna Wescoat', genre: 'Singer-Songwriter', play_count: 51 }
  ];
}