import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { Calendar, Clock, MapPin, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { getMinistryBySlug, getRelatedMinistries, getAllMinistries } from '@/lib/ministries';

export async function generateStaticParams() {
  const ministries = getAllMinistries();
  return ministries.map((ministry) => ({
    slug: ministry.slug,
  }));
}

interface MinistryPageProps {
  params: {
    slug: string;
  };
}

export default function MinistryPage({ params }: MinistryPageProps) {
  const ministry = getMinistryBySlug(params.slug);
  
  if (!ministry) {
    notFound();
  }

  const relatedMinistries = getRelatedMinistries(params.slug);
  const IconComponent = ministry.icon;

  return (
    <main>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src={ministry.image}
            alt={ministry.title}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-6xl md:text-7xl font-bold text-white mb-6">{ministry.title}</h1>
          <p className="text-xl text-white mb-8 max-w-2xl">
            {ministry.shortDescription}
          </p>
          <Button size="lg" variant="default" className="bg-white text-black hover:bg-gray-100">
            GET INVOLVED
          </Button>
        </div>

        {/* Ministry Info Card */}
        <div className="absolute right-8 top-1/2 -translate-y-1/2 bg-white p-8 rounded-lg shadow-lg max-w-sm w-full space-y-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">MINISTRY INFO</h3>
          
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Calendar className="h-5 w-5 text-gray-500" />
              <div>
                <div className="text-sm text-gray-500">MINISTRY DAY</div>
                <div className="font-medium">{ministry.day}</div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Clock className="h-5 w-5 text-gray-500" />
              <div>
                <div className="text-sm text-gray-500">MINISTRY HOUR</div>
                <div className="font-medium">{ministry.time}</div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <MapPin className="h-5 w-5 text-gray-500" />
              <div>
                <div className="text-sm text-gray-500">MINISTRY LOCATION</div>
                <div className="font-medium">{ministry.location}</div>
              </div>
            </div>

            <div className="flex items-center gap-3 pt-2">
              <div className="w-10 h-10 relative rounded-full overflow-hidden flex-shrink-0">
                <Image
                  src={ministry.leader.image}
                  alt={ministry.leader.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <div className="text-sm text-gray-500">MINISTRY LEADER</div>
                <div className="font-medium">{ministry.leader.name}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-8">About the ministry</h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 text-lg leading-relaxed">
              {ministry.fullDescription}
            </p>
          </div>
        </div>
      </section>

      {/* Activities Section */}
      {ministry.activities && (
        <section className="py-24 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold mb-12">Ministry activities and schedule</h2>
            <p className="text-lg text-gray-600 mb-8">
              {ministry.title} serves every {ministry.day} from {ministry.time}. Activities involve:
            </p>
            <ul className="space-y-4">
              {ministry.activities.map((activity) => (
                <li key={activity} className="flex items-center gap-2 text-lg">
                  <div className="w-2 h-2 bg-black rounded-full" />
                  {activity}
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* Related Ministries */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl font-bold">Browse more ministries</h2>
            <div className="flex gap-2">
              <button className="p-4 rounded-full bg-gray-100 hover:bg-gray-200">
                <ChevronLeft className="h-6 w-6" />
              </button>
              <button className="p-4 rounded-full bg-gray-100 hover:bg-gray-200">
                <ChevronRight className="h-6 w-6" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {relatedMinistries.map((ministry) => (
              <Link href={`/ministries/${ministry.slug}`} key={ministry.slug} className="group">
                <div className="relative h-64 mb-4 overflow-hidden rounded-lg">
                  <Image
                    src={ministry.image}
                    alt={ministry.title}
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <div className="flex items-center gap-4 mb-2 text-sm text-gray-600">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    <span>{ministry.day}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    <span>{ministry.time}</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2">{ministry.title}</h3>
                <p className="text-gray-600">{ministry.shortDescription}</p>
                <div className="mt-4 inline-block text-sm font-semibold">
                  MORE INFORMATION
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}