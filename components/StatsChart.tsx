import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

const StatsChart: React.FC = () => {
  const monthlyData = [
    { name: 'Jan', profit: 240 },
    { name: 'Feb', profit: 139 },
    { name: 'Mar', profit: 980 },
    { name: 'Apr', profit: 390 },
    { name: 'May', profit: 480 },
    { name: 'Jun', profit: 380 },
    { name: 'Jul', profit: 430 },
  ];

  const pieData = [
    { name: 'Won', value: 85 },
    { name: 'Lost', value: 10 },
    { name: 'Void', value: 5 },
  ];

  const COLORS = ['#10b981', '#ef4444', '#94a3b8'];

  return (
    <section className="py-20 bg-dark-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Profit Chart */}
          <div className="lg:col-span-2 bg-card-bg p-6 rounded-2xl border border-white/5">
            <h3 className="text-xl font-bold text-white mb-6">Profit History (Units)</h3>
            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={monthlyData}>
                  <defs>
                    <linearGradient id="colorProfit" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#10b981" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#334155" vertical={false} />
                  <XAxis dataKey="name" stroke="#94a3b8" tick={{fill: '#94a3b8'}} />
                  <YAxis stroke="#94a3b8" tick={{fill: '#94a3b8'}} />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#1e293b', borderColor: '#334155', color: '#fff' }}
                    itemStyle={{ color: '#10b981' }}
                  />
                  <Area type="monotone" dataKey="profit" stroke="#10b981" strokeWidth={3} fillOpacity={1} fill="url(#colorProfit)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Win Rate */}
          <div className="bg-card-bg p-6 rounded-2xl border border-white/5 flex flex-col items-center justify-center">
            <h3 className="text-xl font-bold text-white mb-2">Win Rate</h3>
            <div className="h-[250px] w-full relative">
               <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={pieData}
                    innerRadius={60}
                    outerRadius={80}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {pieData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
              {/* Center Text */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                 <span className="text-3xl font-bold text-white">85%</span>
              </div>
            </div>
            <div className="flex gap-4 text-sm">
                <div className="flex items-center"><div className="w-3 h-3 rounded-full bg-emerald-500 mr-2"></div> <span className="text-gray-400">Won</span></div>
                <div className="flex items-center"><div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div> <span className="text-gray-400">Lost</span></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsChart;