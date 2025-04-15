import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Clock, Users } from 'lucide-react';
import { ministries } from '@/lib/ministries';

export default function MinistriesPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center bg-black text-white">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://cdn.prod.website-files.com/6469d76a492ea69c34c883f8/652968191c8b282069dce559_WhatsApp%20Image%202023-10-05%20at%2015.31.40%20(1).jpeg"
            alt="Ministries Hero"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-6xl md:text-7xl font-bold mb-6">Our Ministries</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Discover your place in our church community. Each ministry offers unique opportunities 
            to serve God and others while growing in your faith journey.
          </p>
        </div>
      </section>

      {/* Ministries Grid Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ministries.map((ministry) => {
              const IconComponent = ministry.icon;
              return (
                <Link 
                  key={ministry.slug}
                  href={`/ministries/${ministry.slug}`}
                  className="bg-white rounded-xl overflow-hidden shadow-lg transition-transform hover:scale-[1.02]"
                >
                  <div className="relative h-64">
                    <Image
                      src={ministry.image}
                      alt={ministry.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center mb-4">
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">{ministry.title}</h3>
                    <p className="text-gray-600 mb-4">{ministry.shortDescription}</p>
                    <div className="space-y-2 mb-6">
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <Clock className="h-4 w-4" />
                        <span>{ministry.time}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <Users className="h-4 w-4" />
                        <span>Led by {ministry.leader.name}</span>
                      </div>
                    </div>
                    <Button className="w-full bg-black text-white hover:bg-gray-800">
                      MORE INFORMATION
                    </Button>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-24 bg-black text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Serve?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Not sure which ministry is right for you? Let us help you discover your gifts and find your perfect fit in our church community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="default" className="bg-white text-black hover:bg-gray-100">
              SCHEDULE A CONSULTATION
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
              CONTACT US
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}