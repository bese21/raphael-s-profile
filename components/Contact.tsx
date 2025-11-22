import React from 'react';
import { Mail, Instagram, Twitter, Linkedin, Send } from './Icons';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-dark-bg border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-display font-bold text-white">Get In Touch</h2>
          <p className="mt-4 text-gray-400">
            Whether you have a medical inquiry or want to discuss premium betting strategies, I'm here to help.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-card-bg p-8 rounded-2xl border border-white/5">
                <h3 className="text-xl font-bold text-white mb-6">Send a Message</h3>
                <form className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-400 mb-1">Name</label>
                        <input type="text" className="w-full bg-black/30 border border-white/10 rounded-lg p-3 text-white focus:border-med-blue focus:outline-none" placeholder="Your Name" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-400 mb-1">Email</label>
                        <input type="email" className="w-full bg-black/30 border border-white/10 rounded-lg p-3 text-white focus:border-med-blue focus:outline-none" placeholder="john@example.com" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-400 mb-1">Message</label>
                        <textarea rows={4} className="w-full bg-black/30 border border-white/10 rounded-lg p-3 text-white focus:border-med-blue focus:outline-none" placeholder="How can I help you?"></textarea>
                    </div>
                    <button type="button" className="w-full bg-med-blue hover:bg-blue-600 text-white font-bold py-3 rounded-lg transition-colors flex items-center justify-center">
                        <Send className="w-4 h-4 mr-2" /> Send Message
                    </button>
                </form>
            </div>

            <div className="flex flex-col justify-center space-y-8">
                <div className="flex items-start space-x-4 p-4 rounded-xl hover:bg-white/5 transition-colors">
                    <div className="bg-blue-500/20 p-3 rounded-full">
                        <Mail className="w-6 h-6 text-med-blue" />
                    </div>
                    <div>
                        <h4 className="text-white font-bold">Email Me</h4>
                        <p className="text-gray-400">raphael.melese@haramaya.edu.et</p>
                        <p className="text-gray-500 text-xs mt-1">Response time: 24 hours</p>
                    </div>
                </div>
                
                <div className="flex items-start space-x-4 p-4 rounded-xl hover:bg-white/5 transition-colors">
                    <div className="bg-pink-500/20 p-3 rounded-full">
                        <Instagram className="w-6 h-6 text-pink-500" />
                    </div>
                    <div>
                        <h4 className="text-white font-bold">Instagram</h4>
                        <p className="text-gray-400">@DrRaphaelBets</p>
                        <p className="text-gray-500 text-xs mt-1">Daily stories & wins</p>
                    </div>
                </div>

                <div className="flex items-start space-x-4 p-4 rounded-xl hover:bg-white/5 transition-colors">
                    <div className="bg-sky-500/20 p-3 rounded-full">
                        <Twitter className="w-6 h-6 text-sky-500" />
                    </div>
                    <div>
                        <h4 className="text-white font-bold">Twitter / X</h4>
                        <p className="text-gray-400">@RaphaelAnalyst</p>
                        <p className="text-gray-500 text-xs mt-1">Live commentary</p>
                    </div>
                </div>

                 <div className="flex items-start space-x-4 p-4 rounded-xl hover:bg-white/5 transition-colors">
                    <div className="bg-blue-700/20 p-3 rounded-full">
                        <Linkedin className="w-6 h-6 text-blue-700" />
                    </div>
                    <div>
                        <h4 className="text-white font-bold">LinkedIn</h4>
                        <p className="text-gray-400">Raphael Melese</p>
                        <p className="text-gray-500 text-xs mt-1">Professional network</p>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;