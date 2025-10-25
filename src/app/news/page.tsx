import Image from 'next/image';
import Link from 'next/link';

export default function News() {
  const articles = [
    {
      id: 1,
      title: "Everything You Need to Know About Laminate",
      description: "Q Proin faucibus nec mauris a sodales, sed elementum mi tincidunt. Sed eget....",
      image: "/services.jpg",
      category: "RENOVATION",
      date: "April 21, 2020",
      comments: "0 Comments"
    },
    {
      id: 2,
      title: "How to Choose the Best Flooring for Winter?",
      description: "Q Proin faucibus nec mauris a sodales, sed elementum mi tincidunt. Sed eget....",
      image: "/contact.jpg",
      category: "RENOVATION",
      date: "April 21, 2020",
      comments: "0 Comments"
    },
    {
      id: 3,
      title: "Cleaning Your Carpet from the Pine Needles",
      description: "Q Proin faucibus nec mauris a sodales, sed elementum mi tincidunt. Sed eget....",
      image: "/home.jpg",
      category: "RENOVATION",
      date: "April 21, 2020",
      comments: "0 Comments"
    },
    {
      id: 4,
      title: "The Best Way to Remove Stains from Carpet",
      description: "Q Proin faucibus nec mauris a sodales, sed elementum mi tincidunt. Sed eget....",
      image: "/services.jpg",
      category: "RENOVATION",
      date: "April 21, 2020",
      comments: "0 Comments"
    }
  ];

  const recentPosts = [
    {
      id: 1,
      title: "Latest Trends in Country Style Design",
      image: "/home.jpg",
      category: "STANDARD",
      date: "May 14, 2020"
    },
    {
      id: 2,
      title: "How to Clean Your Hardwood Properly?",
      image: "/contact.jpg",
      category: "STANDARD",
      date: "May 14, 2020"
    },
    {
      id: 3,
      title: "Modern Interior Design Ideas",
      image: "/services.jpg",
      category: "STANDARD",
      date: "May 14, 2020"
    }
  ];

  return (
    <div className="min-h-screen pt-16 lg:pt-20">
      {/* Hero Section */}
      <section className="relative h-[30vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <Image
            src="/services.jpg"
            alt="Projects background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-[rgba(0,0,0,0.5)]"></div>
        </div>
        <div className="relative z-10 text-center text-white">
          <h1 className="text-5xl font-bold mb-4">News</h1>
          <div className="w-6 h-6 mx-auto">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"/>
            </svg>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - Articles */}
            <div className="lg:col-span-2">
              <div className="space-y-8">
                {articles.map((article) => (
                  <article key={article.id} className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="relative">
                      <Image
                        src={article.image}
                        alt={article.title}
                        width={800}
                        height={400}
                        className="w-full h-64 object-cover"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="bg-black text-white px-3 py-1 text-xs font-semibold uppercase">
                          {article.category}
                        </span>
                      </div>
                    </div>
                    <div className="p-6">
                      <h2 className="text-2xl font-bold text-gray-900 mb-3 hover:text-gray-700 transition-colors">
                        <Link href={`/news/${article.id}`}>
                          {article.title}
                        </Link>
                      </h2>
                      <p className="text-gray-600 mb-4 leading-relaxed">
                        {article.description}
                      </p>
                      <div className="flex items-center justify-between text-sm text-gray-500">
                        <span>{article.date}</span>
                        <span>{article.comments}</span>
                      </div>
                    </div>
                  </article>
                ))}
              </div>

              {/* Pagination */}
              <div className="flex justify-center items-center space-x-2 mt-12">
                <button className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center text-sm font-medium">
                  1
                </button>
                <button className="w-8 h-8 bg-white text-black border border-gray-300 rounded-full flex items-center justify-center text-sm font-medium hover:bg-gray-50">
                  2
                </button>
                <button className="w-8 h-8 bg-white text-black border border-gray-300 rounded-full flex items-center justify-center text-sm font-medium hover:bg-gray-50">
                  3
                </button>
                <button className="w-8 h-8 bg-white text-black border border-gray-300 rounded-full flex items-center justify-center text-sm font-medium hover:bg-gray-50">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Right Sidebar */}
            <div className="lg:col-span-1">
              <div className="space-y-8">
                {/* Search */}
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Search</h3>
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Q Search..."
                      className="w-full px-4 py-3 pl-10 bg-gray-100 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                </div>

                {/* Recent Posts */}
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Recent Posts</h3>
                  <div className="space-y-4">
                    {recentPosts.map((post) => (
                      <div key={post.id} className="flex space-x-3">
                        <div className="flex-shrink-0">
                          <Image
                            src={post.image}
                            alt={post.title}
                            width={80}
                            height={80}
                            className="w-20 h-20 object-cover rounded"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center space-x-2 text-xs text-gray-500 mb-1">
                            <span className="bg-gray-200 px-2 py-1 rounded">{post.category}</span>
                            <span>{post.date}</span>
                          </div>
                          <h4 className="text-sm font-medium text-gray-900 hover:text-gray-700 transition-colors">
                            <Link href={`/news/${post.id}`}>
                              {post.title}
                            </Link>
                          </h4>
                        </div>
                      </div>
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