import Image from 'next/image';

export default function Portfolio() {
  return (
    <div className="min-h-screen pt-16 lg:pt-20">
      {/* Hero Section */}
      <section className="relative h-[30vh] flex items-center justify-center">
        <div className="absolute inset-0"></div>
        <div className="relative z-10 text-center">
          <h1 className="text-5xl font-bold mb-4">Portfolio</h1>
          <div className="w-12 h-12 mx-auto">
            <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
              <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"/>
            </svg>
          </div>
        </div>
      </section>

      {/* Project Images Section */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Before Image */}
            <div className="relative group cursor-pointer">
              <div className="aspect-[4/4] rounded-lg overflow-hidden">
                <Image 
                  src="/before.png" 
                  alt="Before renovation" 
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-[rgba(0,0,0,0)] group-hover:bg-[rgba(0,0,0,0.5)] transition-all duration-300 flex items-center justify-center">
                  <div className="transition-opacity duration-300 text-center text-white">
                    <h3 className="text-2xl font-bold mb-2">Before</h3>
                    <p className="text-lg">Destroyed ceil</p>
                  </div>
                </div>
              </div>
            </div>

            {/* After Image */}
            <div className="relative group cursor-pointer">
              <div className="aspect-[4/4] rounded-lg overflow-hidden">
                <Image 
                  src="/after.png" 
                  alt="After renovation" 
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-300"
                />
                <div className="absolute bg-[rgba(0,0,0,0)] group-hover:bg-[rgba(0,0,0,0.5)] inset-0 transition-all duration-300 flex items-center justify-center">
                  <div className="transition-opacity duration-300 text-center text-white">
                    <h3 className="text-2xl font-bold mb-2">After</h3>
                    <p className="text-lg">Transformed space</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
