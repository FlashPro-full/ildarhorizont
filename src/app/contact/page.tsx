import ContactForm from '@/components/ContactForm';
import Link from 'next/link';
import Image from 'next/image';

export default function Contact() {
  return (
    <div className="pt-16">
      {/* Contact Details and Form Section */}
      <section className="py-8 sm:py-12 lg:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Contact Details */}
            <div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-6 sm:mb-8">Contact Details</h2>

              <div className="space-y-4 sm:space-y-6">
                <div>
                  <p className="text-base sm:text-lg font-bold text-gray-900 mb-2">Email</p>
                  <a
                    href="mailto:Ildarhorizont@gmail.com"
                    className="text-sm sm:text-base text-gray-700 hover:text-gray-900 transition-colors"
                  >
                    Ildarhorizont@gmail.com
                  </a>
                </div>

                <div>
                  <p className="text-base sm:text-lg font-bold text-gray-900 mb-2">Phone</p>
                  <a
                    href="tel:+13128266764"
                    className="text-sm sm:text-base text-gray-700 hover:text-gray-900 transition-colors"
                  >
                    +1 (312) 826-6764
                  </a>
                </div>

              </div>
            </div>

            {/* Contact Form */}
            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Banner Section */}
      <section className="relative py-16 sm:py-20 lg:py-32 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image 
            src="/contact.jpg" 
            alt="contact background" 
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-[rgba(0,0,0,0.5)]"></div>
        </div>
        
        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-wrap justify-between items-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3 sm:mb-4">
            We provide only quality for you.
          </h2>
          <Link href="/services" className="bg-orange-500 text-white px-6 py-2 sm:px-8 sm:py-3 text-sm sm:text-base rounded hover:bg-orange-600 transition-colors">
            About Us
          </Link>
        </div>
      </section>
    </div>
  );
}
