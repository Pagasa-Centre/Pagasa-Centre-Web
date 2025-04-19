import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Instagram } from 'lucide-react';

const instagramPosts = [
  {
    id: 1,
    imageUrl: "https://cdn.prod.website-files.com/6469d767492ea69c34c8827d/64e678078091e95a25ae3c26_LC.png",
    filter: "bg-green-500/20"
  },
  {
    id: 2,
    imageUrl: "https://cdn.prod.website-files.com/6469d767492ea69c34c8827d/64e67817cf780e8c335be314_SOL%201.png",
    filter: "bg-red-500/20"
  },
  {
    id: 3,
    imageUrl: "https://cdn.prod.website-files.com/6469d767492ea69c34c8827d/64e678220afe0aee80c2cb81_SOL%202.png",
    filter: "bg-yellow-500/20"
  },
  {
    id: 4,
    imageUrl: "https://cdn.prod.website-files.com/6469d767492ea69c34c8827d/64e67848738e787c71ed31e4_SOL%203.png",
    filter: "bg-blue-500/20"
  },
  {
    id: 5,
    imageUrl: "https://cdn.prod.website-files.com/6469d767492ea69c34c8827d/652971123d77b40dc2e20763_square%20image%201.jpg",
    filter: "bg-purple-500/20"
  },
  {
    id: 6,
    imageUrl: "https://cdn.prod.website-files.com/6469d767492ea69c34c8827d/652971c68c43b381016cd07e_square%202.jpg",
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
          <a
              href="https://www.instagram.com/pagasacentre/" // replace with your actual Instagram URL
              target="_blank"
              rel="noopener noreferrer"
          >
          <Button 
            size="lg"
            variant="outline"
            className="mt-6 md:mt-0 border-black text-black hover:bg-green-600 hover:text-black"
          >
            <Instagram className="mr-2 h-5 w-5" />
            OUR INSTAGRAM
          </Button>
          </a>
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