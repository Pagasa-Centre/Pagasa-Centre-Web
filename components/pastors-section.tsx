import Image from 'next/image';

export function PastorsSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative h-[600px]">
            <Image
              src="https://images.unsplash.com/photo-1544005313-94ddf0286df2"
              alt="Dr. Ambat & Pstr. Shirley"
              fill
              className="object-cover rounded-lg"
            />
          </div>
          <div>
            <h2 className="text-4xl font-bold mb-6">
              Meet Dr. Ambat & Pstr. Shirley, our beloved pastors
            </h2>
            <p className="text-gray-600">
              Dr. Godofredo Ambat & Pstr. Shirley Ambat are our pastors and leaders in Pag-Asa Centre. Under their leadership, the church has grown both spiritually and exponentially through the working hand of the Holy Spirit. They are dedicated, compassionate and they love to serve the Lord, making a significant impact in the ministry.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}