"use client"
import { useEffect, useState } from 'react';
import Image from 'next/image';
import {Outreach, OutreachResponse} from "@/types/outreaches";
import {apiUrl} from "@/lib/api";
import {Clock, Mail, MapPin, Phone} from "lucide-react";
import {format} from "date-fns";

export function LocationsSection() {
  const [outreaches, setOutreaches] = useState<Outreach[]>([]);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    const fetchOutreaches = async () => {
      try {
        const res = await fetch(apiUrl('/outreach'));
        const data:OutreachResponse = await res.json();

        if (!res.ok) {
          throw new Error(data.message);
        }

        if (data && Array.isArray(data.outreaches)) {
          const sorted = [
            ...data.outreaches.filter((o: Outreach) => o.name.includes('Dagenham')),
            ...data.outreaches.filter((o: Outreach) => !o.name.includes('Dagenham')),
          ];
          setOutreaches(sorted);
        }
      } catch (err) {
        console.error('Failed to fetch locations:', err);
        setError('Failed to load locations: '+err);
      }
    };

    fetchOutreaches();
  }, []);

  if (error) return <div className="text-red-500">{error}</div>;
  if (!outreaches.length) return null;

  const mainOutreach = outreaches[0];
  const otherOutreaches = outreaches.slice(1);

  return (
      <section className="py-24 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="w-12 h-1 bg-black mx-auto mb-8" />
            <h2 className="text-4xl md:text-5xl font-bold">Our Locations</h2>
          </div>

          {/* Main Location */}
          <div className="mb-16">
            <div className="bg-white rounded-xl overflow-hidden shadow-lg">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="relative h-[400px] lg:h-full">
                  <Image
                      src={mainOutreach.thumbnail_url}
                      alt={mainOutreach.name}
                      fill
                      className="object-cover"
                  />
                </div>
                <div className="p-8 lg:p-12">
                  <h3 className="text-3xl font-bold mb-4">{mainOutreach.name}</h3>
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
                      <span>connect@pagasacentre.com</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <MapPin className="h-5 w-5 text-gray-400" />
                      <span>{mainOutreach.address_line_1} {mainOutreach.address_line_2} {mainOutreach.city} {mainOutreach.country}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Clock className="h-5 w-5 text-gray-400" />
                      <span>
                      {mainOutreach.services && mainOutreach.services.length > 0 ? (
                          <>
                            {mainOutreach.services[0].day} |{' '}
                            {mainOutreach.services[0].start_time} -{' '}
                            {mainOutreach.services[0].end_time}
                          </>
                      ) : (
                          'Sunday | 14:00 - 17:00'
                      )}
                    </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Other Locations */}
          <h3 className="text-2xl font-semibold mb-6 text-center">Other Locations</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {otherOutreaches.map((outreach) => (
                <div
                    key={outreach.id}
                    className="bg-white rounded-lg shadow-lg overflow-hidden"
                >
                  <div className="relative h-48">
                    <Image
                        src={outreach.thumbnail_url}
                        alt={outreach.name}
                        fill
                        className="object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h4 className="text-lg font-bold mb-2">{outreach.name}</h4>
                    <p className="text-gray-600 text-sm mb-1">{outreach.address_line_1}</p>
                    <p className="text-gray-600 text-sm mb-1">{outreach.address_line_2}</p>
                    <p className="text-gray-600 text-sm mb-1">{outreach.postcode}</p>
                    <p className="text-gray-600 text-sm mb-1">{outreach.city}, {outreach.country}</p>
                  </div>
                </div>
            ))}
          </div>
        </div>
      </section>
  );
}
