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
          <div className="grid grid-cols-2 gap-4">
            {/* Replace with actual prayer chain participant images */}
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="relative h-48 rounded-lg overflow-hidden">
                <Image
                  src={`https://images.unsplash.com/photo-${i}`}
                  alt={`Prayer chain participant ${i}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}