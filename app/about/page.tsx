import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Facebook, Dribbble as Bible, Cross, Sun, Users } from 'lucide-react';
import { LocationsSection } from '@/components/locations-section';
import { SocialMediaSection } from '@/components/social-media-section';

export default function AboutPage() {
  return (
    <main>
      <section className="relative min-h-screen flex items-center">
        {/* Background image with overlay */}
        <div className="absolute inset-0 z-0">
          <img
              src="https://cdn.prod.website-files.com/6469d767492ea69c34c8827d/6529661488ab1e34aae7057a_WhatsApp%20Image%202023-10-05%20at%2015.31.38.jpeg"
              alt="Background"
              className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>


        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-6xl md:text-7xl font-bold text-white mb-8">
            About us
          </h1>
          <p className="text-xl text-white mb-12 max-w-2xl">
            Join us on our journey as we help one another and make a difference in our local communities. Come as you are, and let us help you discover your purpose and experience the transformative power of faith.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" variant="default" className="bg-white text-black hover:bg-gray-100">
              GET INVOLVED
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
              OUR PASTORS
            </Button>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-[600px] rounded-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1516280440614-37939bbacd81"
                alt="People worshipping"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <div className="w-12 h-1 bg-black mb-8" />
              <h2 className="text-4xl font-bold mb-8">Our Story</h2>
              <div className="space-y-6 text-gray-600">
                <p>
                  Pag-Asa Centre is a non-denominational church, established by God in the year 2007. As a church, we are passionate about God&apos;s presence, possess sincere integrity and a deep craving to reach the lost, walk in a spirit-filled faith, grounded in humility and brokenness. We are a registered charity institution by the Charity Commission of the United Kingdom.
                </p>
                <p>
                  Pag-Asa Centre has a God-ordained mandate to present the Gospel of Christ Jesus to the lost, share the love of God, give hope to the hopeless, provide humanitarian aid to the hurting peoples, bring them to membership in His church, help them grow to Christ-like maturity, equip them for the ministry and send them in their life missions.
                </p>
                <p className="text-sm">
                  (Matthew 28:18-20, John 10:10, Isaiah 1:17)
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* G12 Vision Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="w-12 h-1 bg-black mb-8" />
              <h2 className="text-4xl font-bold mb-8">ABOUT THE G12 VISION</h2>
              <div className="space-y-6 text-gray-600">
                <p>
                  G12 is a vision, set to see the fulfilment of the Great Commission found in Matthew 28:16-20. It is founded upon the idea that every Christian can mentor and lead 12 people in their faith, following the example set by our Lord, Jesus Christ and His own disciples.
                </p>
                <p>
                  G12 was conceived by Pastor César Castellanos in 1983, after receiving a vision from God instructing him to implement this structure of small groups of 12.
                </p>
                <p>
                  It was first modelled in his church - MCI in Bogotá, Colombia - which he started in his living room with just eight people and now, through the goodness and grace of God, has grown to over 150,000 members. G12, which stands for Government of 12, represents each disciple accepting Jesus Christ as the Lord of their life. It is focused on Jesus&apos; command to the church to &apos;go and make disciples of all nations.&apos;
                </p>
              </div>
            </div>
            <div className="relative h-[600px] rounded-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1529070538774-1843cb3265df"
                alt="G12 Vision Illustration"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Meet Our Pastors Section */}
      <section className="py-24 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="w-12 h-1 bg-white mx-auto mb-8" />
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Meet Dr. Ambat & Pstr. Shay,<br />our beloved pastors
            </h2>
            <p className="text-xl text-gray-300">
              Guiding our congregation with faith, wisdom, and love.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Dr. Godofredo Ambat */}
            <div className="flex flex-col items-center">
              <div className="relative w-full h-[400px] mb-6 rounded-lg overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1542596594-649edbc13630"
                  alt="Dr. Godofredo Ambat"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-2xl font-bold mb-1">Dr. Godofredo Ambat</h3>
              <p className="text-gray-400 uppercase tracking-wider text-sm mb-3">BISHOP - SENIOR PASTOR</p>
              <p className="text-gray-300 text-center mb-4">
                Guiding our spiritual journey with his wisdom and compassion.
              </p>
              <a href="#" className="text-white hover:text-gray-300 transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
            </div>

            {/* Pstr. Shay Ambat */}
            <div className="flex flex-col items-center">
              <div className="relative w-full h-[400px] mb-6 rounded-lg overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1544005313-94ddf0286df2"
                  alt="Pstr. Shay Ambat"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-2xl font-bold mb-1">Pstr. Shay Ambat</h3>
              <p className="text-gray-400 uppercase tracking-wider text-sm mb-3">PASTORA</p>
              <p className="text-gray-300 text-center mb-4">
                Leading with grace and nurturing our community&apos;s faith.
              </p>
              <a href="#" className="text-white hover:text-gray-300 transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Statement of Faith Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="w-12 h-1 bg-black mx-auto mb-8" />
            <h2 className="text-4xl md:text-5xl font-bold">
              Statement of Faith
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Statement 1 */}
            <div className="bg-white p-8 rounded-lg border">
              <div className="bg-black rounded-full w-12 h-12 flex items-center justify-center mb-6">
                <Cross className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">1. WE BELIEVE IN GOD! &quot;ELOHIM&quot;</h3>
              <p className="text-gray-600 mb-4">
                We believe that there is only one GOD eternally existent in three persons – Father, Son and Holy Spirit. He is the Creator of Heaven and Earth.
              </p>
              <p className="text-sm text-gray-500">GENESIS 1:1,26</p>
            </div>

            {/* Statement 2 */}
            <div className="bg-white p-8 rounded-lg border">
              <div className="bg-black rounded-full w-12 h-12 flex items-center justify-center mb-6">
                <Cross className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">2. WE BELIEVE IN THE TRIUNE GOD</h3>
              <p className="text-gray-600 mb-4">
                God the Father, God the Son and God the Holy Spirit.
              </p>
              <p className="text-sm text-gray-500">GENESIS 1:1; Matthew 3:16-17, 28-19; John 14-16</p>
            </div>

            {/* Statement 3 */}
            <div className="bg-white p-8 rounded-lg border">
              <div className="bg-black rounded-full w-12 h-12 flex items-center justify-center mb-6">
                <Sun className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">3. WE BELIEVE IN THE INFALLIABILITY & IMMUTABILITY OF THE SCRIPTURE</h3>
              <p className="text-gray-600 mb-4">
                We believe that the Holy Scriptures are the inspired Word of God. They are the supreme and final authority for faith and practice.
              </p>
              <p className="text-sm text-gray-500">NUMBERS 23:19; 2 MALACHI 3:6; PSALMS 19:7, PROVERBS 19:21; 2 TIMOTHY 3:16; 2 PETER 1:19-21</p>
            </div>

            {/* Statement 4 */}
            <div className="bg-white p-8 rounded-lg border">
              <div className="bg-black rounded-full w-12 h-12 flex items-center justify-center mb-6">
                <Users className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">4. WE BELIEVE IN THE SINFULNESS OF MAN</h3>
              <p className="text-gray-600 mb-4">
                We believe that although all people are sinners and separated from God, through faith in Jesus Christ they can be saved and reconciled back to God.
              </p>
              <p className="text-sm text-gray-500">ROMANS 3:23, 5:12; EPHESIANS 2:1</p>
            </div>
          </div>
        </div>
      </section>

      {/* Locations Section */}
      <LocationsSection />

      {/* Social Media Section */}
      <SocialMediaSection />
    </main>
  );
}