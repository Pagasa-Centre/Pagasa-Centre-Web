import { Button } from '@/components/ui/button';

export function Hero() {
  return (
    <div className="relative min-h-screen flex items-center justify-center text-center">
      {/* Background image with dark overlay */}
      <div className="absolute inset-0 z-0">
        <img
            src="https://cdn.prod.website-files.com/6469d767492ea69c34c8827d/656e216d74f1629eb3f1bba7_WhatsApp%20Image%202023-12-03%20at%2022.03.31.jpeg"
            alt="Background"
            className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Foreground content */}
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
          Welcome to<br />Pag-Asa Centre
        </h1>
        <p className="text-xl text-white mb-8">
          We are thrilled to have you join us for worship and fellowship at our church.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" variant="default" className="bg-white text-black hover:bg-gray-100">
            GET INVOLVED
          </Button>
          <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
            ABOUT US
          </Button>
        </div>
      </div>
    </div>
  );
}