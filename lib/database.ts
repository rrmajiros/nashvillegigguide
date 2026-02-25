// Database connection will be added after initial deployment
// For now, return sample data

export async function getShowListings(limit = 10) {
  // Sample data for initial deployment
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
  ]
}

export async function getVenuesByNeighborhood(neighborhood?: string) {
  return []
}

export async function getNeighborhoods() {
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
  ]
}

export async function getRadioActiveArtists() {
  return [
    { name: 'Ariel Bui', genre: 'Indie Rock', play_count: 48 },
    { name: 'Anna Wescoat', genre: 'Country', play_count: 48 }
  ]
}