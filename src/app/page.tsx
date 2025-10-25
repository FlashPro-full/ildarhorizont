'use client';

import Image from "next/image";
import ReviewsCarousel from "@/components/ReviewsCarousel";
import ContactForm from "@/components/ContactForm";
import { useState } from "react";

const faqs = [
  {
    question: "What are the most common signs of drywall damage?",
    answer: "Cracks, nail pops, dents, water stains, and holes are common signs. Bulging or sagging areas may also indicate hidden water damage or structural shifts."
  },
  {
    question: "Can small holes in drywall be repaired without replacing the entire sheet?",
    answer: "Yes, small holes can typically be patched and repaired without replacing the entire drywall sheet."
  },
  {
    question: "How long does a typical drywall repair take?",
    answer: "Most drywall repairs can be completed within a few hours to a day, depending on the extent of the damage."
  },
  {
    question: "What causes drywall damage?",
    answer: "Common causes include water damage, settling, impact damage, and normal wear and tear over time."
  },
  {
    question: "Can drywall be painted after repair?",
    answer: "Yes, once the repair is complete and properly sanded, the area can be primed and painted to match the surrounding wall."
  },
  {
    question: "How do I know if drywall needs to be replaced instead of repaired?",
    answer: "If the damage is extensive, involves structural issues, or affects a large area, replacement may be necessary."
  },
  {
    question: "Will drywall repairs be noticeable after painting?",
    answer: "With proper repair techniques and painting, the repaired area should blend seamlessly with the surrounding wall."
  }
]

export default function Home() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="h-full pt-16 lg:pt-20">
      {/* Hero Section */}
      <section className="relative h-[calc(100vh-4rem)] lg:h-[calc(100vh-5rem)] bg-gray-900 flex items-center justify-center">
        {/* Background Image Placeholder */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900">
          <div className="absolute inset-0 animate-fade-in">
            <Image src="/home.jpg" alt="home" fill className="object-cover" />
          </div>
          <div className="absolute inset-0 bg-[rgba(0,0,0,0.5)]"></div>
        </div>

        <div className="relative z-10 text-center text-white px-4">
          <p className="text-lg md:text-xl mb-4 font-medium animate-fade-in-peek-in">Fix It Fast with Ildar.</p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold mb-8 animate-split-horizontal-out">Ildar Horizont</h1>
        </div>
      </section>

      {/* Talk Tools with Us Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center md:text-left">Talk Tools with Us.</h2>
            <button className="bg-black text-white px-6 py-3 rounded-full hover:bg-gray-900 cursor-pointer transition-colors w-full md:w-auto">
              Contact Us Now
            </button>
          </div>
        </div>
      </section>

      {/* Contact Form and Map Section */}
      <section className="py-16 bg-orange-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-white mb-4">
                Need Drywall Repair Service in Vernon Hills?
              </h2>
              <p className="text-white mb-8">
                Do not hesitate to contact us with any Drywall repair or installation needs anywhere in Vernon Hills.
              </p>
              <ContactForm />
            </div>

            {/* Map */}
            <div>
              <div className="h-120 rounded overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2968.5!2d-87.8!3d42.1!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fbb0000000001%3A0x0!2s1256+Inverrary+Ln%2C+Deerfield%2C+IL+60015!5e0!3m2!1sen!2sus!4v1701999999999!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Ildar Horizont Location"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Services Section */}
      <section className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Professional Drywall Services Near Vernon Hills
            </h2>
            <h3 className="text-3xl font-bold text-gray-900">
              Best Local Drywall Repair Service Company
            </h3>
          </div>
        </div>
      </section>

      <section className="bg-orange-400">
        <div className="pt-8">
          <p className="text-gray-700 font-semibold text-lg mb-8 max-w-4xl mx-auto">
            We provide professional drywall repair and installation services in Vernon Hills and surrounding areas.
            Our experienced team ensures quality workmanship and customer satisfaction.
          </p>
        </div>
        <div className="flex flex-row justify-between items-center mx-auto mb-6 max-w-7xl h-[75px]">
          <div className="h-full">
            <Image src="/bbb-rating.png" alt="bbb" height={75} width={100} />
          </div>
          <div className="h-full">
            <Image src="/google-guaranteed.png" alt="google-guaranteed" height={75} width={200} />
          </div>
          <div className="h-full">
            <Image src="/yelp.png" alt="yelp" height={75} width={100} />
          </div>
          <div className="h-full">
            <Image src="/google-view.png" alt="google-view" height={66} width={150} />
          </div>
        </div>
        <div className="text-center">
          <h4 className="text-3xl font-semibold text-gray-900 mb-4">
            Need A Drywall Expert Near Vernon Hills, IL?
          </h4>
          <button onClick={scrollToTop} className="bg-gray-500 text-black px-6 py-2 rounded hover:bg-gray-400 cursor-pointer transition-colors">
            Call Us Now
          </button>
        </div>
      </section>

      {/* Quality Services Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-lg text-gray-700 mb-6">
                Professional Drywall Repair Service | Vernon Hills, IL
              </h3>
              <h2 className="text-3xl font-bold text-gray-900 mb-2 border-b-2 border-gray-900 pb-2">
                Quality Commercial & Residential Drywall Repair Services
              </h2>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Looking for a professional Drywall Repair service around Vernon Hills?
              </h3>
              <p className="text-gray-700 mb-4 font-semibold">
                Cracks in your drywall? Water damage spots? Holes or dents in the wall?
                No problem — just call our professional drywall repair team at
                <span className="font-bold text-orange-400">(312) 826-6764</span> for fast and reliable service.
              </p>
              <p className="text-gray-700 mb-6">
                We provide expert residential and commercial drywall repair and installation services not only in Northbrook,
                IL but also throughout the Northwest Suburbs of Chicago.
              </p>
              <p className="text-gray-700 mb-6">
                All our licensed technicians are fully trained, experienced,
                and equipped with the right tools to handle any drywall issue — whether it’s patching small holes,
                repairing large sections, or replacing entire panels—quickly and with professional results.
              </p>
              <h4 className="text-xl font-semibold text-gray-900 mb-4">
                Need a Drywall service near Vernon Hills, IL?
              </h4>
            </div>
            <div className="rounded flex items-center justify-center">
              <Image src="/horizont.png" alt="horizont" className="object-cover" width={1024} height={1024} />
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-16 bg-orange-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Our Local Service Reviews
          </h2>
          <ReviewsCarousel />
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Drywall Repair FAQs
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
                <button 
                  onClick={() => toggleFaq(index)}
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                >
                  <span className="font-semibold text-gray-900">{faq.question}</span>
                  <span className={`text-gray-500 transition-transform duration-300 ${openFaqIndex === index ? 'rotate-45' : ''}`}>
                    +
                  </span>
                </button>
                <div 
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    openFaqIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-6 pb-4 text-gray-700">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}