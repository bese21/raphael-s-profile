import React from 'react';
import { Stethoscope, TrendingUp } from './Icons';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-med-blue/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-bet-green/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center px-4 py-2 rounded-full border border-white/10 bg-white/5 mb-8">
          <span className="flex h-2 w-2 rounded-full bg-green-500 mr-2 animate-ping"></span>
          <span className="text-sm text-gray-300 uppercase tracking-widest">Accepting New Premium Members</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-6 leading-tight">
          Precision in <span className="text-transparent bg-clip-text bg-gradient-to-r from-med-blue to-blue-400">Medicine</span>. <br />
          Strategy in <span className="text-transparent bg-clip-text bg-gradient-to-r from-bet-green to-emerald-300">Prediction</span>.
        </h1>

        <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-400">
          I am Raphael Melese. 5th Year Medical Student at Haramaya University and a professional sports analyst helping you win smarter.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="#predictions" 
            className="px-8 py-4 rounded-lg bg-bet-green hover:bg-emerald-500 text-white font-bold text-lg transition-all transform hover:scale-105 flex items-center justify-center shadow-lg shadow-emerald-500/20"
          >
            <TrendingUp className="w-5 h-5 mr-2" />
            Get Premium Tips
          </a>
          <a 
            href="#about" 
            className="px-8 py-4 rounded-lg bg-white/10 hover:bg-white/20 border border-white/10 text-white font-bold text-lg transition-all flex items-center justify-center backdrop-blur-sm"
          >
            <Stethoscope className="w-5 h-5 mr-2" />
            About My Journey
          </a>
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-gray-400">
          <div className="flex flex-col items-center">
            <span className="text-3xl font-bold text-white">85%</span>
            <span className="text-sm uppercase">Prediction Accuracy</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-3xl font-bold text-white">5th</span>
            <span className="text-sm uppercase">Year Med Student</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-3xl font-bold text-white">500+</span>
            <span className="text-sm uppercase">Premium Members</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-3xl font-bold text-white">24/7</span>
            <span className="text-sm uppercase">Support</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;