import React, { useState } from 'react'

const timelineEvents = [
  {
    date: 'Feb 6',
    events: [
      { time: '09:00 AM', title: 'Opening Ceremony', speaker: 'Dr. Aisha Patel' },
      { time: '11:00 AM', title: 'AI in Entrepreneurship', speaker: 'Michael Rodriguez' },
      { time: '02:00 PM', title: 'Startup Funding Strategies', speaker: 'James Park' },
    ]
  },
  {
    date: 'Feb 7',
    events: [
      { time: '10:00 AM', title: 'Innovation in Healthcare', speaker: 'Dr. Emily Watson' },
      { time: '01:00 PM', title: 'Tech Entrepreneurship Panel', speaker: 'Multiple Speakers' },
      { time: '04:00 PM', title: 'Networking Session', speaker: null },
    ]
  },
  {
    date: 'Feb 8',
    events: [
      { time: '09:30 AM', title: 'Future of Work', speaker: 'Dr. Aisha Patel' },
      { time: '11:30 AM', title: 'Pitch Competition', speaker: null },
      { time: '03:00 PM', title: 'Closing Ceremony', speaker: 'Michael Rodriguez' },
    ]
  },
]

export default function Timeline() {
  const [hoveredDate, setHoveredDate] = useState('Feb 6')

  return (
    <div className="w-full overflow-hidden py-16 bg-gradient-to-b from-[#0a0f1c] to-[#1a1f2e]">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-[#22d3ee] to-purple-400">
          Event Schedule
        </h2>
        
        <div className="relative">
          {/* Timeline */}
          <div className="flex justify-between mb-8">
            {timelineEvents.map((day, index) => (
              <div
                key={day.date}
                className="flex flex-col items-center"
                onMouseEnter={() => setHoveredDate(day.date)}
              >
                <div
                  className={`w-16 h-16 rounded-full flex items-center justify-center text-lg font-bold mb-2 transition-all duration-300 ${
                    hoveredDate === day.date
                      ? 'bg-gradient-to-r from-[#22d3ee] to-purple-400 text-white shadow-lg shadow-[#22d3ee]/50 scale-110'
                      : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
                  }`}
                >
                  {day.date}
                </div>
                <div className="w-1 h-8 bg-gradient-to-b from-[#22d3ee] to-purple-400" />
              </div>
            ))}
          </div>

          {/* Event details */}
          <div className="bg-navy-900/50 backdrop-blur-xl rounded-lg p-6 mt-8 border border-[#22d3ee]/20 shadow-2xl">
            <h3 className="text-3xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-[#22d3ee] to-purple-400">
              {hoveredDate} Schedule
            </h3>
            <div className="space-y-6">
              {timelineEvents.find(day => day.date === hoveredDate)?.events.map((event, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-4"
                >
                  <div className="w-24 flex-shrink-0">
                    <div className="text-lg font-semibold text-[#22d3ee]">{event.time}</div>
                  </div>
                  <div className="flex-grow bg-white/5 p-4 rounded-lg hover:bg-white/10 transition-colors">
                    <h4 className="text-xl font-semibold text-white mb-2">{event.title}</h4>
                    {event.speaker && (
                      <p className="text-purple-400">Speaker: {event.speaker}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
