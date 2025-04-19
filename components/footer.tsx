"use client"

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useEffect, useState } from 'react';
import { Outreach } from '@/types/outreaches';
import { apiUrl } from '@/lib/api';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const menuItems = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Schedule', href: '/schedule' },
  { label: 'Ministry', href: '/ministry' },
  { label: 'Events', href: '/events' },
  { label: 'Contact', href: '/contact' },
];

export function Footer() {
  const [outreaches, setOutreaches] = useState<Outreach[]>([]);
  const [error, setError] = useState<string>('');
  const [currentIndex, setCurrentIndex] = useState(0);

  const itemsPerPage = 3;

  useEffect(() => {
    const fetchOutreaches = async () => {
      try {
        const res = await fetch(apiUrl('/outreach'));
        const data = await res.json();

        if (data && Array.isArray(data.outreaches)) {
          const sorted = [
            ...data.outreaches.filter((o: Outreach) => o.name.includes('Dagenham')),
            ...data.outreaches.filter((o: Outreach) => !o.name.includes('Dagenham')),
          ];
          setOutreaches(sorted);
        }
      } catch (err) {
        setError('Failed to load locations');
      }
    };

    fetchOutreaches();
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, Math.ceil(outreaches.length / itemsPerPage) - 1));
  };

  const visibleOutreaches = outreaches.slice(currentIndex * itemsPerPage, (currentIndex + 1) * itemsPerPage);

  return (
      <footer className="bg-black text-white pt-24 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Newsletter Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
            <div className="flex items-start gap-6">
              <div className="relative w-20 h-20 flex-shrink-0">
                <Image
                    src="https://cdn.prod.website-files.com/6469d767492ea69c34c8827d/65299a0164ab20fa4a09210f_pagasa_logo.png"
                    alt="Pag-Asa Centre Logo"
                    width={80}
                    height={80}
                    className="rounded-full"
                    priority
                />
              </div>
              <p className="text-lg">
                Subscribe for monthly updates about our upcoming church events and more!
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Input
                  type="text"
                  placeholder="First name"
                  className="bg-transparent border-white/20 text-white placeholder:text-gray-400"
              />
              <Input
                  type="text"
                  placeholder="Surname"
                  className="bg-transparent border-white/20 text-white placeholder:text-gray-400"
              />
              <Input
                  type="email"
                  placeholder="Email"
                  className="bg-transparent border-white/20 text-white placeholder:text-gray-400"
              />
              <Button className="bg-green-600 text-white hover:text-black hover:bg-green-600">
                SUBSCRIBE
              </Button>
            </div>
          </div>

          <hr className="border-white/10 mb-16" />

          {/* Menu and Locations */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            {/* Menu */}
            <div>
              <h3 className="text-xl font-bold mb-6">Menu</h3>
              <nav className="space-y-4">
                {menuItems.map((item) => (
                    <Link
                        key={item.href}
                        href={item.href}
                        className="block text-gray-400 hover:text-white transition-colors"
                    >
                      {item.label}
                    </Link>
                ))}
              </nav>
            </div>

            {/* Locations Carousel */}
            <div className="lg:col-span-3">
              <h3 className="text-xl font-bold mb-6 flex items-center justify-between">
                Locations
                <span className="flex gap-2">
                <button onClick={handlePrev} disabled={currentIndex === 0}>
                  <ChevronLeft className="w-6 h-6 text-white/60 hover:text-white transition" />
                </button>
                <button
                    onClick={handleNext}
                    disabled={(currentIndex + 1) * itemsPerPage >= outreaches.length}
                >
                  <ChevronRight className="w-6 h-6 text-white/60 hover:text-white transition" />
                </button>
              </span>
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {visibleOutreaches.map((outreach) => (
                    <div key={outreach.name} className="space-y-4">
                      <div className="relative w-full h-32 rounded-lg overflow-hidden">
                        <Image
                            src={outreach.thumbnail_url}
                            alt={outreach.name}
                            fill
                            className="object-cover"
                        />
                      </div>
                      <h4 className="font-semibold">{outreach.name}</h4>
                      <p className="text-sm text-gray-400">
                        {outreach.address_line_1} {outreach.address_line_2} {outreach.postcode} {outreach.city} {outreach.country}
                      </p>
                    </div>
                ))}
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="text-center text-sm text-gray-400">
            <p>© {new Date().getFullYear()} Pag-Asa Centre. All rights reserved.</p>
            <p>Designed & Developed by
              <a
                  href="https://goldliontechnologies.webflow.io/"
                  className=" text-yellow-400"
                  target="_blank"
                  rel="noopener noreferrer"
              > Goldlion Technologies</a>
            </p>
          </div>
        </div>
      </footer>
  );
}
