import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Calendar, Clock } from 'lucide-react';

export default function EventsPage() {


  return (
    <main>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center bg-black text-white">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/60" />
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-6xl md:text-7xl font-bold mb-6">Events</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Stay connected and informed about our vibrant community. 
            Explore upcoming events that bring us together in joy and worship.
          </p>
        </div>
      </section>

      {/* Events List Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12">
            {/* G12 UK Conference Event */}
            <div className="bg-white rounded-xl overflow-hidden shadow-lg">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="relative h-[400px] lg:h-full">
                  <Image
                    src="https://images.unsplash.com/photo-1527529482837-4698179dc6ce"
                    alt="G12 UK Conference 2025"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-8 lg:p-12">
                  <div className="flex flex-wrap gap-6 mb-6">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-5 w-5 text-green-600" />
                      <span>June 13-14th, 2025</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-5 w-5 text-green-600" />
                      <span>Friday, TBC<br/>Saturday, 9:15AM-8:15PM</span>
                    </div>
                  </div>

                  <h2 className="text-3xl font-bold mb-4 text-green-600">G12 UK CONFERENCE 2025</h2>
                  
                  <div className="space-y-4 text-gray-600 mb-8">
                    <p>
                      You are invited to join us the G12 UK Conference 2025: LEGACY.
                    </p>
                    <p>
                      This conference will empower, inspire, and transform your life, family, and ministry. 
                      Through its emphasis on the discipleship model of Jesus, the G12 vision equips believers 
                      to become effective leaders and make a lasting impact in their communities and nations.
                    </p>
                    <p>
                      G12 conferences are an opportunity for people all over the UK to gather together for worship, 
                      teaching, inspiring interviews and much more as we see lives transformed by the love and power 
                      of Jesus Christ.
                    </p>
                    
                    <div className="pt-4">
                      <p className="font-semibold">Location:</p>
                      <p>Westminster Chapel, Buckingham Gate, London SW1E 6BS</p>
                    </div>

                    <div className="text-sm text-gray-500">
                      <p>*All leaders who are booked onto the Saturday Conference are also invited to register for a special leaders event on Friday 13 June 2025.</p>
                      <p className="mt-2">Bookings will open soon via G12UK.com</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <Button className="w-full bg-green-600 hover:bg-green-700">
                      RSVP TO YOUR CELL OR NETWORK LEADER
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}