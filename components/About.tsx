import React from 'react';
import { User, Brain, Stethoscope } from './Icons';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-dark-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Image Placeholder */}
          <div className="relative group">
             <div className="absolute inset-0 bg-gradient-to-tr from-med-blue to-bet-green rounded-2xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity"></div>
             <div className="relative aspect-[3/4] w-full max-w-md mx-auto rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-card-bg flex items-center justify-center">
                <img 
                  src="https://res.cloudinary.com/dbyxbkhsz/image/upload/v1763800701/photo_2025-11-22_00-36-43_qgvqds.jpg" 
                  alt="Raphael Melese"
                  className="object-cover w-full h-full opacity-80 group-hover:opacity-100 transition-opacity duration-500" 
                />
                <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/90 to-transparent">
                   <h3 className="text-2xl font-bold text-white">Raphael Melese</h3>
                   <p className="text-med-blue">Doctor in Training & Analyst</p>
                </div>
             </div>
          </div>

          {/* Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-sm font-bold tracking-widest text-med-blue uppercase mb-2">About Me</h2>
              <h3 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
                The Intersection of Clinical Discipline and Statistical Analysis
              </h3>
              <p className="text-gray-400 text-lg leading-relaxed">
                I am currently a 5th-year medical student at <span className="text-white font-semibold">Haramaya University</span>. 
                My journey in medicine has taught me the importance of detail, research, and evidence-based decision-making.
              </p>
              <p className="text-gray-400 text-lg leading-relaxed mt-4">
                Surprisingly, these same skills apply to sports betting. I treat every match analysis like a patient diagnosis—looking at the history, current symptoms (form), and environmental factors to predict the outcome with high precision.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="p-6 rounded-xl bg-card-bg border border-white/5 hover:border-med-blue/30 transition-colors">
                <Stethoscope className="w-8 h-8 text-med-blue mb-4" />
                <h4 className="text-xl font-bold text-white mb-2">Medical Student</h4>
                <p className="text-sm text-gray-400">Specializing in clinical diagnostics and patient care at Haramaya University.</p>
              </div>
              <div className="p-6 rounded-xl bg-card-bg border border-white/5 hover:border-bet-green/30 transition-colors">
                <Brain className="w-8 h-8 text-bet-green mb-4" />
                <h4 className="text-xl font-bold text-white mb-2">Strategic Analyst</h4>
                <p className="text-sm text-gray-400">Leveraging data models to provide high-yield sports predictions.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;