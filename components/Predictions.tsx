import React from 'react';
import { Lock, Unlock, CheckCircle, AlertCircle, Trophy, Activity } from './Icons';

interface Match {
  id: number;
  league: string;
  teams: string;
  time: string;
  prediction: string;
  odds: string;
  status: 'Won' | 'Lost' | 'Pending';
  isPremium: boolean;
}

const Predictions: React.FC = () => {
  const matches: Match[] = [
    { id: 1, league: 'Premier League', teams: 'Arsenal vs Liverpool', time: 'Ended', prediction: 'Both Teams to Score', odds: '1.65', status: 'Won', isPremium: false },
    { id: 2, league: 'La Liga', teams: 'Real Madrid vs Barcelona', time: 'Ended', prediction: 'Real Madrid Win', odds: '2.10', status: 'Won', isPremium: true },
    { id: 3, league: 'Serie A', teams: 'Juventus vs Milan', time: 'Today 20:45', prediction: 'Under 2.5 Goals', odds: '1.85', status: 'Pending', isPremium: false },
    { id: 4, league: 'Champions League', teams: 'Man City vs Bayern', time: 'Tomorrow 20:00', prediction: 'Hidden', odds: '2.45', status: 'Pending', isPremium: true },
    { id: 5, league: 'NBA', teams: 'Lakers vs Warriors', time: 'Tomorrow 04:00', prediction: 'Hidden', odds: '1.90', status: 'Pending', isPremium: true },
  ];

  return (
    <section id="predictions" className="py-20 bg-dark-bg relative">
       <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-bet-green/5 to-transparent pointer-events-none"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold tracking-widest text-bet-green uppercase mb-2">Daily Picks</h2>
          <h3 className="text-3xl md:text-4xl font-display font-bold text-white">Latest Predictions</h3>
          <p className="mt-4 text-gray-400">A mix of free community tips and high-value premium selections.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Subscription Card - CTA */}
          <div className="lg:col-span-3 mb-8 bg-gradient-to-r from-emerald-900/40 to-slate-900 border border-emerald-500/30 rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0 text-center md:text-left">
              <h4 className="text-2xl font-bold text-white flex items-center justify-center md:justify-start">
                <Trophy className="text-yellow-500 mr-3 w-8 h-8" /> 
                Join the Premium Circle
              </h4>
              <p className="text-gray-300 mt-2 max-w-2xl">
                Get access to 5-10 high confidence slips daily, live in-play signals, and direct support from Raphael.
              </p>
            </div>
            <button className="px-8 py-3 bg-bet-green hover:bg-emerald-500 text-white font-bold rounded-lg shadow-lg shadow-emerald-500/20 transition-all whitespace-nowrap">
              Join for $20/Month
            </button>
          </div>

          {matches.map((match) => (
            <div 
              key={match.id} 
              className={`relative rounded-xl p-6 border transition-all duration-300 hover:-translate-y-1 ${
                match.isPremium 
                  ? 'bg-slate-800/50 border-yellow-500/20 hover:border-yellow-500/40' 
                  : 'bg-card-bg border-white/5 hover:border-white/20'
              }`}
            >
              <div className="flex justify-between items-start mb-4">
                <span className="text-xs font-semibold uppercase tracking-wider text-gray-500">{match.league}</span>
                {match.isPremium && (
                  <span className="px-2 py-1 rounded bg-yellow-500/10 text-yellow-500 text-xs font-bold flex items-center">
                    <Lock className="w-3 h-3 mr-1" /> PREMIUM
                  </span>
                )}
                {!match.isPremium && (
                  <span className="px-2 py-1 rounded bg-blue-500/10 text-blue-400 text-xs font-bold flex items-center">
                    <Unlock className="w-3 h-3 mr-1" /> FREE
                  </span>
                )}
              </div>

              <h4 className="text-lg font-bold text-white mb-2">{match.teams}</h4>
              <p className="text-sm text-gray-400 mb-4">{match.time}</p>

              <div className="flex items-center justify-between p-3 bg-black/20 rounded-lg">
                <div>
                  <p className="text-xs text-gray-500">Prediction</p>
                  <p className={`font-mono font-bold ${match.isPremium && match.status === 'Pending' ? 'text-gray-500 blur-sm select-none' : 'text-bet-green'}`}>
                    {match.isPremium && match.status === 'Pending' ? 'PREMIUM PICK' : match.prediction}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-xs text-gray-500">Odds</p>
                  <p className="font-mono font-bold text-white">{match.odds}</p>
                </div>
              </div>

              <div className="mt-4 flex items-center justify-end">
                {match.status === 'Won' && (
                  <span className="text-bet-green text-sm font-bold flex items-center">
                    <CheckCircle className="w-4 h-4 mr-1" /> WON
                  </span>
                )}
                {match.status === 'Lost' && (
                  <span className="text-red-500 text-sm font-bold flex items-center">
                    <AlertCircle className="w-4 h-4 mr-1" /> LOST
                  </span>
                )}
                 {match.status === 'Pending' && (
                  <span className="text-gray-500 text-sm font-bold flex items-center">
                    <Activity className="w-4 h-4 mr-1" /> PENDING
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Predictions;