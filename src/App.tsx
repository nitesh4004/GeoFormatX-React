import React, { useState } from 'react';
import './index.css';
import AdminBoundaries from './components/AdminBoundaries';
import PostalCodes from './components/PostalCodes';
import ParliamentBoundaries from './components/ParliamentBoundaries';
import RiverAnalysis from './components/RiverAnalysis';
import FormatConverter from './components/FormatConverter';
import VectorCalculator from './components/VectorCalculator';

type NavItem = 'admin' | 'postal' | 'parliament' | 'rivers' | 'converter' | 'calculator';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<NavItem>('admin');

  const navItems: { id: NavItem; label: string; icon: string }[] = [
    { id: 'admin', label: 'Admin Data', icon: '🏢' },
    { id: 'postal', label: 'Postal Codes', icon: '📬' },
    { id: 'parliament', label: 'Parliament', icon: '🏛️' },
    { id: 'rivers', label: 'Rivers', icon: '💧' },
    { id: 'converter', label: 'Converter', icon: '🔄' },
    { id: 'calculator', label: 'Calculator', icon: '📐' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-600 to-cyan-600 shadow-lg">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="text-4xl">🌍</div>
            <div>
              <h1 className="text-3xl font-bold text-white">GeoFormatX Pro</h1>
              <p className="text-cyan-100 text-sm">React + Vercel Edition</p>
            </div>
          </div>
          <p className="text-white text-opacity-90">Geographic data format conversion and vector analysis tool</p>
        </div>
      </header>

      {/* Navigation Sidebar */}
      <div className="max-w-7xl mx-auto flex gap-0">
        <aside className="w-56 bg-slate-800 border-r border-slate-700 min-h-[calc(100vh-120px)]">
          <nav className="p-4 space-y-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`w-full text-left px-4 py-3 rounded-lg font-medium transition-all ${
                  activeTab === item.id
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'text-slate-300 hover:bg-slate-700'
                }`}
              >
                <span className="mr-2">{item.icon}</span>
                {item.label}
              </button>
            ))}
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-8 bg-slate-850 overflow-auto min-h-[calc(100vh-120px)]">
          <div className="max-w-6xl mx-auto">
            {activeTab === 'admin' && <AdminBoundaries />}
            {activeTab === 'postal' && <PostalCodes />}
            {activeTab === 'parliament' && <ParliamentBoundaries />}
            {activeTab === 'rivers' && <RiverAnalysis />}
            {activeTab === 'converter' && <FormatConverter />}
            {activeTab === 'calculator' && <VectorCalculator />}
          </div>
        </main>
      </div>

      {/* Footer */}
      <footer className="bg-slate-800 border-t border-slate-700 py-4 text-center text-slate-400 text-sm">
        <p>GeoFormatX Pro © 2026 - Geographic Data Format Conversion & Vector Analysis</p>
        <p className="mt-2">Developed by Nitesh Kumar | Deployed on Vercel</p>
      </footer>
    </div>
  );
};

export default App;
