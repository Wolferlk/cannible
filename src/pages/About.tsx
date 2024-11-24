import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <div className="pt-16">
      <div className="relative h-[60vh] overflow-hidden">
        <img
          src="https://scontent.fcmb1-2.fna.fbcdn.net/v/t39.30808-6/458308746_122115299408433279_2979501028993800266_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeHozp7t3JsxkEWeGheYLArhfhCF5yjjw8x-EIXnKOPDzHm-uRqjlfKKsrtOwkYntZ16lGSuwh9wudHxKJ4A3e2I&_nc_ohc=xc5prh-td-0Q7kNvgHuHrpt&_nc_zt=23&_nc_ht=scontent.fcmb1-2.fna&_nc_gid=Asnir8fSGH4a6rtJcO-jzzo&oh=00_AYDN9rfHif0MoVAkcLH_PRyViJruOuI7DM0kclGZ3x2HUg&oe=6748AC35"
          alt="Fashion Studio"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-center justify-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight">Our Story</h1>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="space-y-12">
          <section>
            <h2 className="text-3xl font-bold mb-4">Who We Are</h2>
            <p className="text-gray-600 leading-relaxed">
              CANNIBLE.CO was born from a passion for minimalist design and urban culture. 
              Founded in 2024, we set out to create clothing that embodies both style and 
              substance, challenging the conventional boundaries of streetwear.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-4">Our Philosophy</h2>
            <p className="text-gray-600 leading-relaxed">
              We believe in the power of simplicity. Each piece in our collection is 
              thoughtfully designed to be timeless, versatile, and built to last. Our 
              commitment to quality means we work with only the finest materials and 
              ethical manufacturing partners.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-4">Sustainability</h2>
            <p className="text-gray-600 leading-relaxed">
              Environmental responsibility is at the core of everything we do. From 
              sourcing sustainable materials to minimizing our carbon footprint in 
              production and shipping, we're committed to protecting our planet while 
              delivering exceptional fashion.
            </p>
          </section>

          <div className="pt-8 text-center">
            <Link
              to="/store"
              className="inline-flex items-center gap-2 bg-black text-white px-8 py-3 
                rounded-full hover:bg-gray-800 transition-colors"
            >
              Shop Collection <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>

      <div className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <h3 className="text-4xl font-bold mb-2">100+</h3>
              <p className="text-gray-600">Unique Designs</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold mb-2">50K+</h3>
              <p className="text-gray-600">Happy Customers</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold mb-2">15+</h3>
              <p className="text-gray-600">Countries Shipped</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}