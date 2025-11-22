import React, { useState } from 'react';
import { Brain, Activity, Send } from './Icons';
import { analyzeMatch, askMedicalQuestion, AnalysisResult } from '../services/geminiService';

const AiTools: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'betting' | 'medical'>('betting');
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  
  // State for Betting Analysis
  const [analysisResult, setAnalysisResult] = useState<AnalysisResult | null>(null);
  
  // State for Medical Chat
  const [medicalResponse, setMedicalResponse] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    setIsLoading(true);

    if (activeTab === 'betting') {
      setAnalysisResult(null);
      const result = await analyzeMatch(input);
      setAnalysisResult(result);
    } else {
      setMedicalResponse('');
      const result = await askMedicalQuestion(input);
      setMedicalResponse(result);
    }

    setIsLoading(false);
  };

  return (
    <section id="ai-tools" className="py-20 bg-slate-900 relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute -left-20 top-1/2 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl -translate-y-1/2"></div>
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-sm font-bold tracking-widest text-blue-400 uppercase mb-2">Powered by Gemini AI</h2>
          <h3 className="text-3xl md:text-4xl font-display font-bold text-white">Raphael's Digital Assistant</h3>
          <p className="mt-4 text-gray-400">Leverage AI to analyze a match or ask me a medical student question.</p>
        </div>

        <div className="bg-card-bg border border-white/10 rounded-2xl overflow-hidden shadow-2xl">
          {/* Tabs */}
          <div className="flex border-b border-white/10">
            <button 
              onClick={() => setActiveTab('betting')}
              className={`flex-1 py-4 text-center font-bold transition-colors flex items-center justify-center ${activeTab === 'betting' ? 'bg-emerald-900/20 text-emerald-400 border-b-2 border-emerald-400' : 'text-gray-400 hover:text-white hover:bg-white/5'}`}
            >
              <Brain className="w-5 h-5 mr-2" />
              Match Analyzer
            </button>
            <button 
              onClick={() => setActiveTab('medical')}
              className={`flex-1 py-4 text-center font-bold transition-colors flex items-center justify-center ${activeTab === 'medical' ? 'bg-blue-900/20 text-blue-400 border-b-2 border-blue-400' : 'text-gray-400 hover:text-white hover:bg-white/5'}`}
            >
              <Activity className="w-5 h-5 mr-2" />
              Ask Med Student
            </button>
          </div>

          {/* Content Area */}
          <div className="p-6 md:p-8 min-h-[400px] flex flex-col">
            <div className="flex-1 mb-6">
               {activeTab === 'betting' ? (
                 <div className="space-y-4">
                   <p className="text-gray-300 mb-4">Enter match details (e.g., "Chelsea vs Arsenal, Chelsea home form is bad"). The AI will mimic my analytical style.</p>
                   {analysisResult ? (
                     <div className="bg-black/30 rounded-lg p-6 border border-white/5 animate-fadeIn">
                        <div className="flex justify-between items-center mb-4">
                          <h4 className="text-xl font-bold text-white">Prediction: <span className="text-emerald-400">{analysisResult.prediction}</span></h4>
                          <span className={`px-3 py-1 rounded-full text-xs font-bold ${analysisResult.riskLevel === 'Low' ? 'bg-green-500/20 text-green-400' : analysisResult.riskLevel === 'Medium' ? 'bg-yellow-500/20 text-yellow-400' : 'bg-red-500/20 text-red-400'}`}>
                            {analysisResult.riskLevel} Risk
                          </span>
                        </div>
                        <p className="text-gray-300 leading-relaxed mb-4">{analysisResult.reasoning}</p>
                        <div>
                          <div className="flex justify-between text-xs text-gray-500 mb-1">
                            <span>Confidence</span>
                            <span>{analysisResult.confidence}%</span>
                          </div>
                          <div className="w-full bg-gray-700 rounded-full h-2">
                            <div className="bg-emerald-500 h-2 rounded-full transition-all duration-1000" style={{ width: `${analysisResult.confidence}%` }}></div>
                          </div>
                        </div>
                     </div>
                   ) : (
                     <div className="flex items-center justify-center h-48 text-gray-600 border-2 border-dashed border-gray-700 rounded-lg">
                       {isLoading ? 'Analyzing stats...' : 'No analysis yet. Enter match details below.'}
                     </div>
                   )}
                 </div>
               ) : (
                 <div className="space-y-4">
                    <p className="text-gray-300 mb-4">Ask me about anatomy, physiology, or general health topics. (Demo mode)</p>
                    {medicalResponse ? (
                      <div className="bg-blue-900/10 border border-blue-500/20 p-6 rounded-lg animate-fadeIn">
                        <div className="prose prose-invert max-w-none">
                          <p className="whitespace-pre-wrap text-gray-200">{medicalResponse}</p>
                        </div>
                      </div>
                    ) : (
                      <div className="flex items-center justify-center h-48 text-gray-600 border-2 border-dashed border-gray-700 rounded-lg">
                         {isLoading ? 'Consulting medical database...' : 'Ask a question below.'}
                      </div>
                    )}
                 </div>
               )}
            </div>

            {/* Input Area */}
            <form onSubmit={handleSubmit} className="relative">
              <input 
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder={activeTab === 'betting' ? "e.g., Man Utd vs Man City, injuries?" : "e.g., What causes hypertension?"}
                className="w-full bg-black/40 border border-white/10 rounded-xl py-4 px-6 pr-14 text-white placeholder-gray-500 focus:outline-none focus:border-med-blue transition-colors"
                disabled={isLoading}
              />
              <button 
                type="submit"
                disabled={isLoading || !input.trim()}
                className="absolute right-2 top-2 bottom-2 px-4 bg-white/10 hover:bg-white/20 text-white rounded-lg disabled:opacity-50 transition-colors flex items-center justify-center"
              >
                <Send className="w-5 h-5" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AiTools;