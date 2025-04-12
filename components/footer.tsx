import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const menuItems = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Schedule', href: '/schedule' },
  { label: 'Ministry', href: '/ministry' },
  { label: 'Events', href: '/events' },
  { label: 'Contact', href: '/contact' },
];

const locations = [
  {
    name: 'Bray, Ireland',
    address: 'Taylor Centre, Vevay Road, Bray Co. Wicklow A98 E220',
    image: 'https://images.unsplash.com/photo-1548092372-0d1bd40894a3'
  },
  {
    name: 'Pampanga, Philippines',
    address: '2nd Floor of Juliez Manukan Blds, San Matias Highway, Santo Tomas, Pampanga, Philippines.',
    image: 'https://images.unsplash.com/photo-1601995538676-a14d11c8d0f7'
  },
  {
    name: 'Bedfordshire, UK',
    address: 'Bunyan Road Christian Centre 30 Bunyan Road Kempston, Bedfordshire MK42 8HL',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64'
  }
];

export function Footer() {
  return (
    <footer className="bg-black text-white pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Newsletter Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
          <div className="flex items-start gap-6">
            <div className="relative w-20 h-20 flex-shrink-0">
              <Image
                src="/logo.png"
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
            <Button className="bg-[#65A30D] hover:bg-[#4d7c0f] text-white">
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

          {/* Locations */}
          <div className="lg:col-span-3">
            <h3 className="text-xl font-bold mb-6">Locations</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {locations.map((location) => (
                <div key={location.name} className="space-y-4">
                  <div className="relative w-full h-32 rounded-lg overflow-hidden">
                    <Image
                      src={location.image}
                      alt={location.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h4 className="font-semibold">{location.name}</h4>
                  <p className="text-sm text-gray-400">{location.address}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-sm text-gray-400">
          <p>© {new Date().getFullYear()} Pag-Asa Centre. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}