import Image from 'next/image';

export function PrayerChain() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6">Our 24Hr Prayer Chain</h2>
            <p className="text-gray-600">
              As part of our efforts as a Church to help out our community, we have started our very own 24-Hour Prayer Chain; with the intention of using continuous worldwide intercession to move mountains. Join us and together we can create a fortress of faith that can bring about abundant blessings, answered prayers and transformation in the lives of those in our community. To learn more about our prayer chain please ask your cell leader or the person that invited you!
            </p>
          </div>
          <div className="relative h-[600px]">
            <Image
                src="https://cdn.prod.website-files.com/6469d767492ea69c34c8827d/6737e829f54ebe0d02dfac5b_WhatsApp%20Image%202024-10-11%20at%2021.02.10.jpeg"
                alt="24 hour Prayer Chain"
                fill
                className="object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}