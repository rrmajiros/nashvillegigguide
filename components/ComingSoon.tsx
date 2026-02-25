'use client'

import { useEffect } from 'react'
import { MusicalNoteIcon, CalendarIcon, MapPinIcon, BuildingLibraryIcon } from '@heroicons/react/24/outline'

export default function ComingSoon() {
  useEffect(() => {
    // Load Fillout script
    const script = document.createElement('script')
    script.src = 'https://server.fillout.com/embed/v1/'
    script.async = true
    document.body.appendChild(script)
    
    return () => {
      // Cleanup
      if (document.body.contains(script)) {
        document.body.removeChild(script)
      }
    }
  }, [])

  const features = [
    {
      icon: CalendarIcon,
      title: 'Comprehensive Show Listings',
      description: 'Every Nashville show in one place - from Broadway honky-tonks to East Nashville indie venues'
    },
    {
      icon: MapPinIcon,
      title: 'Venue & Neighborhood Guides',
      description: 'Detailed profiles of 100+ Nashville venues with booking info and neighborhood insights'
    },
    {
      icon: BuildingLibraryIcon,
      title: 'Studio & Industry Directory',
      description: 'Find recording studios, producers, engineers, and music industry professionals'
    },
    {
      icon: MusicalNoteIcon,
      title: 'Artist Discovery',
      description: 'Discover emerging Nashville artists getting radio play and building buzz'
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-nashville-red rounded-full"></div>
              <span className="text-2xl font-bold text-nashville-blue">NashvilleGigGuide.com</span>
            </div>
            <div className="text-sm text-gray-600">
              <span className="font-semibold text-nashville-red">COMING SPRING 2026</span>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Nashville's <span className="text-nashville-red">Music Scene</span>
            <br />
            <span className="text-nashville-blue">All In One Place</span>
          </h1>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
            We're building the most comprehensive database of Nashville music - 
            from show listings and venue guides to studio directories and industry connections.
            Be the first to know when we launch.
          </p>

          {/* Email Signup - Fillout Form */}
          <div className="max-w-2xl mx-auto mb-20">
            <div 
              style={{ width: '100%', height: '500px' }} 
              data-fillout-id="no1NpSyBbmus" 
              data-fillout-embed-type="standard" 
              data-fillout-inherit-parameters 
              data-fillout-dynamic-resize
            ></div>
            <p className="text-sm text-gray-500 text-center mt-4">
              No spam. Unsubscribe anytime. We respect your privacy.
            </p>
          </div>

          {/* Features */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                <div className="w-12 h-12 bg-nashville-blue/10 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-nashville-blue" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>

          {/* Stats Preview */}
          <div className="bg-nashville-blue text-white rounded-2xl p-8 md:p-12 mb-20">
            <h2 className="text-3xl font-bold mb-8 text-center">Powered By Real Nashville Data</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">100+</div>
                <div className="text-blue-200">Nashville Venues</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">50+</div>
                <div className="text-blue-200">Recording Studios</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">1,000+</div>
                <div className="text-blue-200">Monthly Shows</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">Live</div>
                <div className="text-blue-200">Radio Airplay Data</div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">For Venues, Artists & Industry Professionals</h2>
            <p className="text-gray-600 mb-8">
              NashvilleGigGuide.com will offer premium listings, artist promotion packages, 
              and industry directory access. Interested in being a launch partner?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary">
                Venue Partnership Info
              </button>
              <button className="btn-secondary">
                Artist Promotion Packages
              </button>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-200 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <div className="flex items-center space-x-2">
                <div className="w-6 h-6 bg-nashville-red rounded-full"></div>
                <span className="text-lg font-bold text-nashville-blue">NashvilleGigGuide.com</span>
              </div>
              <p className="text-gray-600 text-sm mt-2">The complete Nashville music scene database</p>
            </div>
            <div className="text-sm text-gray-600">
              <p>Email: info@nashvillegigguide.com</p>
              <p className="mt-1">© 2026 Nashville Gig Guide. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}