import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Clock, Calendar } from 'lucide-react';

interface MinistryCardProps {
  title: string;
  time: string;
  day: string;
  description: string;
  imageUrl: string;
}

export function MinistryCard({ title, time, day, description, imageUrl }: MinistryCardProps) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105">
      <div className="relative h-64">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-6">
        <div className="flex items-center gap-4 mb-4">
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4" />
            <span className="text-sm">{day}</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4" />
            <span className="text-sm">{time}</span>
          </div>
        </div>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <Button variant="outline" className="w-full">
          MORE INFORMATION
        </Button>
      </div>
    </div>
  );
}