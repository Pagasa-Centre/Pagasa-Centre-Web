import Image from 'next/image';

export function OurStory() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6">Our Story</h2>
            <div className="space-y-6">
              <p className="text-gray-600">
                Pag-Asa Centre is a non-denominational church, established by God in the year 2007. As a church, we are passionate about God&apos;s presence, possess sincere integrity and a deep craving to reach the lost, walk in a spirit-filled faith, grounded in humility and brokenness. We are a registered charity institution by the Charity Commission of the United Kingdom.
              </p>
              <p className="text-gray-600">
                Pag-Asa Centre has a God-ordained mandate to present the Gospel of Christ Jesus to the lost, share the love of God, give hope to the hopeless, provide humanitarian aid to the hurting people, bring them to membership in His church, help them grow to Christ-like maturity, equip them for the ministry and send them in their life missions. (Matthew 28:28-20, John 10:10, Isaiah 1:17)
              </p>
            </div>
          </div>
          <div className="relative h-[600px]">
            <Image
              src="https://images.unsplash.com/photo-1523803326055-13445f07d885"
              alt="Church congregation"
              fill
              className="object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}