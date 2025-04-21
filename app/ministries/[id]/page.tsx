
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { Calendar, Clock, MapPin, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {apiUrl} from "@/lib/api";
import Link from "next/link";

export async function generateStaticParams() {
  const res = await fetch(apiUrl('/ministry'), { cache: 'no-store' });
  const data = await res.json();

  return (data.ministries || []).map((ministry: any) => ({
    id: ministry.id,
  }));
}

interface MinistryPageProps {
  params: Promise<{
    id: string; // This is ministry ID
  }>;
}

export default async function MinistryPage(props: MinistryPageProps) {
  const params = await props.params;
  const res = await fetch(apiUrl('/ministry'), { cache: 'no-store' });
  const data = await res.json();

  const ministry = (data.ministries || []).find((m: any) => m.id === params.id);
  if (!ministry) notFound();

  return (
      <main>
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center">
          <div className="absolute inset-0 z-0">
            <Image
                src={ministry.thumbnail_url || '/placeholder.jpg'}
                alt={ministry.name}
                fill
                className="object-cover"
            />
            <div className="absolute inset-0 bg-black/60" />
          </div>

          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-6xl md:text-7xl font-bold text-white mb-6">{ministry.name}</h1>
            <p className="text-xl text-white mb-8 max-w-2xl">{ministry.short_description}</p>
            <Button size="lg" variant="default" className="bg-white text-black hover:bg-gray-100">
              GET INVOLVED
            </Button>
          </div>

          {/* Info Card */}
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
                  <div className="font-medium">{ministry.start_time}</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-gray-500" />
                <div>
                  <div className="text-sm text-gray-500">MINISTRY LOCATION</div>
                  <div className="font-medium">{ministry.meeting_location}</div>
                </div>
              </div>
              {ministry.ministry_leaders?.[0] && (
                  <div className="flex items-center gap-3 pt-2">
                    <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center text-white font-bold">
                      {ministry.ministry_leaders[0][0]}
                    </div>
                    <div>
                      <div className="text-sm text-gray-500">MINISTRY LEADER</div>
                      <div className="font-medium">{ministry.ministry_leaders[0]}</div>
                    </div>
                  </div>
              )}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold mb-8">About the ministry</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-600 text-lg leading-relaxed">
                {ministry.long_description}
              </p>
            </div>
            {/* Apply Button */}
            <div className="mt-12 flex justify-center">
              <Link href={`/ministries/${params.id}/apply`}>
              <Button
                  size="lg"
                  className="bg-black text-white hover:bg-green-600"
              >
                APPLY
              </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Activities Section */}
        {ministry.activities?.length > 0 && (
            <section className="py-24 bg-gray-50">
              <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-4xl font-bold mb-12">Ministry activities and schedule</h2>
                <p className="text-lg text-gray-600 mb-8">
                  {ministry.name} serves every {ministry.day} from {ministry.start_time}. Activities involve:
                </p>
                <ul className="space-y-4">
                  {ministry.activities.map((activity: string) => (
                      <li key={activity} className="flex items-center gap-2 text-lg">
                        <div className="w-2 h-2 bg-black rounded-full" />
                        {activity}
                      </li>
                  ))}
                </ul>
              </div>
            </section>
        )}
      </main>
  );
}