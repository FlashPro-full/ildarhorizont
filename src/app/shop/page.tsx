import Image from 'next/image';

export default function Shop() {
  const categories = [
    { name: "Carpet", count: 4 },
    { name: "Hardwood", count: 2 },
    { name: "Laminate", count: 2 },
    { name: "Tile", count: 1 },
    { name: "Uncategorized", count: 0 }
  ];

  const tags = [
    "Carpet", "Design", "Flooring", "Hardwood", "Laminate", "Modern", "Sale", "Style"
  ];

  return (
    <div className="min-h-screen pt-16 lg:pt-20">
      {/* Hero Section */}
      <section className="relative h-[30vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <Image
            src="/services.jpg"
            alt="Shop background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-[rgba(0,0,0,0.5)]"></div>
        </div>
        <div className="relative z-10 text-center text-white">
          <h1 className="text-5xl font-bold mb-4">Shop</h1>
          <div className="w-6 h-6 mx-auto">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"/>
            </svg>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Section - Coming Soon Message */}
            <div className="lg:col-span-2 flex items-center justify-center">
              <div className="text-center max-w-2xl">
                <h2 className="text-6xl font-serif text-gray-900 mb-8 leading-tight">
                  Great things are on the horizon
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Something big is brewing! Our store is in the works and will be launching soon!
                </p>
              </div>
            </div>

            {/* Right Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-lg p-6 space-y-8">
                {/* Cart */}
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Cart</h3>
                  <div className="text-gray-500 text-sm">
                    Your cart is empty
                  </div>
                </div>

                {/* Search */}
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Search</h3>
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Search for products..."
                      className="w-full px-4 py-3 pl-10 bg-gray-100 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                </div>

                {/* Categories */}
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Categories</h3>
                  <ul className="space-y-2">
                    {categories.map((category, index) => (
                      <li key={index} className="flex items-center justify-between text-sm text-gray-600 hover:text-gray-900 cursor-pointer transition-colors">
                        <span>{category.name}</span>
                        <span className="text-gray-400">({category.count})</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Filter */}
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Filter</h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm text-gray-600 mb-2">Price Range</label>
                      <div className="relative">
                        <div className="w-full h-2 bg-gray-200 rounded-lg">
                          <div className="h-2 bg-gray-400 rounded-lg" style={{ width: '70%' }}></div>
                        </div>
                        <div className="flex justify-between text-xs text-gray-500 mt-1">
                          <span>$30</span>
                          <span>$260</span>
                        </div>
                      </div>
                    </div>
                    <button className="w-full bg-orange-500 text-white px-4 py-2 rounded-lg flex items-center justify-center space-x-2 hover:bg-orange-600 transition-colors">
                      <span>Filter</span>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                </div>

                {/* Tags */}
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Tags</h3>
                  <div className="flex flex-wrap gap-2">
                    {tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full hover:bg-gray-200 cursor-pointer transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
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