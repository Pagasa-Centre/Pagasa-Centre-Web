import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { MinistryCard } from '@/components/ministry-card';
import { Hero } from '@/components/hero';
import { OurStory } from '@/components/our-story';
import { PastorsSection } from '@/components/pastors-section';
import { PrayerChain } from '@/components/prayer-chain';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-12">Get involved in our movement</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <MinistryCard
            title="PRODUCTION TEAM"
            time="2:00 PM"
            day="SUNDAY"
            description="The Production ministry is responsible for transporting, assembling and storing the church's assets"
            imageUrl="https://images.unsplash.com/photo-1516280440614-37939bbacd81"
          />
          <MinistryCard
            title="CHILDREN'S MINISTRY"
            time="3:00 PM"
            day="SUNDAY"
            description="Nurturing the spiritual growth and helping the next generation discover the love of Jesus Christ."
            imageUrl="https://images.unsplash.com/photo-1544749458-8d1d781c6b90"
          />
          <MinistryCard
            title="MEDIA MINISTRY"
            time="2:00 PM"
            day="SUNDAY"
            description="We focus on using media to spread the Gospel of Jesus Christ."
            imageUrl="https://images.unsplash.com/photo-1522071820081-009f0129c71c"
          />
        </div>
      </section>

      <OurStory />
      <PastorsSection />
      <PrayerChain />
    </main>
  );
}