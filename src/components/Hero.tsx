import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <div className="relative h-screen">
      <video
        autoPlay
        muted
        loop
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source
          src="https://cdn.coverr.co/videos/coverr-fashion-show-in-black-and-white-2633/1080p.mp4"
          type="video/mp4"
        />
      </video>
      
      <div className="absolute inset-0 bg-black/50" />
      
      <div className="relative h-full flex items-center justify-center text-white">
        <div className="text-center space-y-8">
          <h1 className="text-6xl md:text-8xl font-bold tracking-tighter">
            CANNIBLE.CO
          </h1>
          <p className="text-xl md:text-2xl tracking-wide">
            Redefining Urban Fashion
          </p>
          <Link
            to="/store"
            className="inline-flex items-center gap-2 bg-white text-black px-8 py-3 rounded-full
              hover:bg-gray-100 transition-colors duration-300"
          >
            Shop Now <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  );
}