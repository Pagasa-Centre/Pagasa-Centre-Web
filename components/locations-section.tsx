import Image from 'next/image';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

export function LocationsSection() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="w-12 h-1 bg-black mx-auto mb-8" />
          <h2 className="text-4xl md:text-5xl font-bold">
            More locations
          </h2>
        </div>

        {/* Main Location */}
        <div className="mb-16">
          <div className="bg-white rounded-xl overflow-hidden shadow-lg">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="relative h-[400px] lg:h-full">
                <Image
                  src="https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3"
                  alt="Jo Richardson Community School"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-8 lg:p-12">
                <h3 className="text-3xl font-bold mb-4">Jo Richardson Community School, Dagenham</h3>
                <p className="text-gray-600 mb-8">
                  Located in London, bringing our community together through faith, hope, and love.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-gray-400" />
                    <span>+44 79 8494 8682</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-gray-400" />
                    <span>pagasa_media@hotmail.co.uk</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="h-5 w-5 text-gray-400" />
                    <span>Castle Green, Gale St, Dagenham RM9 4UN</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="h-5 w-5 text-gray-400" />
                    <span>Sunday | 02:00PM - 05:00PM</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Other Locations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Bray, Ireland */}
          <div className="bg-white rounded-xl overflow-hidden shadow-lg">
            <div className="relative h-48">
              <Image
                src="https://images.unsplash.com/photo-1548092372-0d1bd40894a3"
                alt="Bray, Ireland"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-4">Bray, Ireland</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-gray-400" />
                  <span className="text-sm">Taylor Centre, Vevay Road, Bray Co. Wicklow A98 E220</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-gray-400" />
                  <span className="text-sm">Sunday | 11:00AM - 01:30PM</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-gray-400" />
                  <span className="text-sm">+353 87 186 4957</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-gray-400" />
                  <span className="text-sm">pagasacentreirl@gmail.com</span>
                </div>
              </div>
            </div>
          </div>

          {/* Pampanga, Philippines */}
          <div className="bg-white rounded-xl overflow-hidden shadow-lg">
            <div className="relative h-48">
              <Image
                src="https://images.unsplash.com/photo-1601995538676-a14d11c8d0f7"
                alt="Pampanga, Philippines"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-4">Pampanga, Philippines</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-2">
                  <MapPin className="h-4 w-4 text-gray-400 mt-1 flex-shrink-0" />
                  <span className="text-sm">2nd Floor of Juliez Manukan Blds, San Matias Highway, Santo Tomas, Pampanga, Philippines.</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-gray-400" />
                  <span className="text-sm">Sunday | 8:30AM - 10:30AM</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bedfordshire, UK */}
          <div className="bg-white rounded-xl overflow-hidden shadow-lg">
            <div className="relative h-48">
              <Image
                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64"
                alt="Bedfordshire, UK"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-4">Bedfordshire, UK</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-2">
                  <MapPin className="h-4 w-4 text-gray-400 mt-1 flex-shrink-0" />
                  <span className="text-sm">Bunyan Road Christian Centre 30 Bunyan Road Kempston, Bedfordshire MK42 8HL</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-gray-400" />
                  <span className="text-sm">Saturday | 3:00PM - 06:00PM (Every other week)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}