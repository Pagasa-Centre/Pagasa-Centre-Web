import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Instagram } from 'lucide-react';

const instagramPosts = [
  {
    id: 1,
    imageUrl: "https://images.unsplash.com/photo-1516280440614-37939bbacd81",
    filter: "bg-green-500/20"
  },
  {
    id: 2,
    imageUrl: "https://images.unsplash.com/photo-1515187029135-18ee286d815b",
    filter: "bg-red-500/20"
  },
  {
    id: 3,
    imageUrl: "https://images.unsplash.com/photo-1529070538774-1843cb3265df",
    filter: "bg-yellow-500/20"
  },
  {
    id: 4,
    imageUrl: "https://images.unsplash.com/photo-1542596594-649edbc13630",
    filter: "bg-blue-500/20"
  },
  {
    id: 5,
    imageUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
    filter: "bg-purple-500/20"
  },
  {
    id: 6,
    imageUrl: "https://images.unsplash.com/photo-1557425493-6f90ae4659fc",
    filter: "bg-orange-500/20"
  }
];

export function SocialMediaSection() {
  return (
    <section className="py-24 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <div>
            <div className="w-12 h-1 bg-white mb-8" />
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Follow us on social<br />media to stay connected
            </h2>
          </div>
          <Button 
            size="lg"
            variant="outline"
            className="mt-6 md:mt-0 border-white text-white hover:bg-white hover:text-black"
          >
            <Instagram className="mr-2 h-5 w-5" />
            OUR INSTAGRAM
          </Button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {instagramPosts.map((post) => (
            <div key={post.id} className="relative aspect-square overflow-hidden rounded-lg group">
              <Image
                src={post.imageUrl}
                alt="Instagram post"
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className={`absolute inset-0 ${post.filter} transition-opacity duration-300 opacity-0 group-hover:opacity-100`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}