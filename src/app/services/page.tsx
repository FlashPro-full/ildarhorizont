import Image from "next/image";
import { MdOutlineHighQuality } from "react-icons/md";
import { TbCalendarClock, TbTargetArrow, TbCertificate } from "react-icons/tb";
import { SiFreecad } from "react-icons/si";
import { IoColorPaletteOutline } from "react-icons/io5";

export default function Services() {
  return (
    <div className="min-h-screen pt-16 lg:pt-20">
      {/* Hero Section */}
      <section className="relative bg-gray-900 flex items-center justify-center">
        <div className="relative w-full animate-fade-in">
          <img
            src="/services.jpg"
            alt="services"
            className="w-full h-40 object-cover sm:h-50 md:h-60 lg:h-70 xl:h-80"
          />
          <div className="absolute inset-0 bg-[rgba(0,0,0,0.5)]"></div>
        </div>
        <div className="absolute inset-0 z-10 flex items-center justify-center text-center text-white">
          <div>
            <h1 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold mb-0 sm:mb-2 md:mb-4 lg:mb-6 xl:mb-8">Services</h1>
            <div className="w-6 h-6 mx-auto">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Flooring Services Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-orange-500 text-sm uppercase tracking-wide font-semibold mb-4">
              FLOORING SERVICES
            </p>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Choose the Best - Because Your Home Deserves It
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              We don't just install floors — we transform spaces. Our clients trust us for quality,
              reliability, and style. From expert design advice to flawless installation, we make your
              flooring experience smooth and stress-free.
            </p>
          </div>

          {/* Service Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {/* High-Quality Products */}
            <div className="text-center">
              <div className="w-24 h-24 mx-auto mb-4 flex items-center justify-center">
                <MdOutlineHighQuality className="w-24 h-24 text-gray-700" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">High-Quality Products</h3>
              <p className="text-gray-700">
                Premium materials that stand the test of time — durable, stylish, and built to last.
              </p>
            </div>

            {/* Individual Floor Samples */}
            <div className="text-center">
              <div className="w-24 h-24 mx-auto mb-4 flex items-center justify-center">
                <TbCalendarClock className="w-24 h-24 text-gray-700" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Individual Floor Samples</h3>
              <p className="text-gray-700">
                See it. Feel it. Choose it. We provide custom samples so you pick with confidence.
              </p>
            </div>

            {/* Room Design Ideas */}
            <div className="text-center">
              <div className="w-24 h-24 mx-auto mb-4 flex items-center justify-center">
                <TbTargetArrow className="w-24 h-24 text-gray-700" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Room Design Ideas</h3>
              <p className="text-gray-700">
                Get inspired with layout ideas tailored to your space and lifestyle.
              </p>
            </div>

            {/* Certified Eco Materials */}
            <div className="text-center">
              <div className="w-24 h-24 mx-auto mb-4 flex items-center justify-center">
                <TbCertificate className="w-24 h-24 text-gray-700" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Certified Eco Materials</h3>
              <p className="text-gray-700">
                Sustainable choices that are safe for your family — and the planet.
              </p>
            </div>

            {/* Free Installation Services */}
            <div className="text-center">
              <div className="w-24 h-24 mx-auto mb-4 flex items-center justify-center">
                <SiFreecad className="w-24 h-24 text-gray-700" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Free Installation Services</h3>
              <p className="text-gray-700">
                No hidden fees. Just fast, clean, and professional installation — always on schedule.
              </p>
            </div>

            {/* Perfect Style & Color */}
            <div className="text-center">
              <div className="w-24 h-24 mx-auto mb-4 flex items-center justify-center">
                <IoColorPaletteOutline className="w-24 h-24 text-gray-700" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Perfect Style & Color</h3>
              <p className="text-gray-700">
                Need help deciding? We'll guide you to the perfect look to match your home's vibe.
              </p>
            </div>
          </div>

          {/* Additional Services */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Home Fixes & Handy Help */}
            <div className="bg-orange-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Home Fixes & Handy Help</h3>
              <p className="text-gray-700">
                From door adjustments to furniture assembly — we handle the small jobs that make a big difference.
              </p>
            </div>

            {/* Drywall Repair & Finishing */}
            <div className="bg-orange-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Drywall Repair & Finishing</h3>
              <p className="text-gray-700">
                We patch holes, seal cracks, and leave your walls smooth, clean, and paint-ready — every time.
              </p>
            </div>

            {/* Light Fixture & Switch Upgrades */}
            <div className="bg-orange-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Light Fixture & Switch Upgrades</h3>
              <p className="text-gray-700">
                Replace outdated lights, upgrade dimmers, or fix that flickering switch — we brighten things up safely.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
