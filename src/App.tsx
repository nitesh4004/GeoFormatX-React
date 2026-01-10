import React from 'react';
import './index.css';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center">
      <div className="text-center text-white">
        <h1 className="text-6xl font-bold mb-4">GeoFormatX Pro</h1>
        <p className="text-2xl mb-8">React + Vercel Edition</p>
        <p className="text-lg mb-12 max-w-2xl">Geographic data format conversion and vector analysis tool</p>
        <div className="bg-white bg-opacity-20 p-8 rounded-lg backdrop-blur-md">
          <p className="text-xl font-semibold mb-4">✨ Welcome to GeoFormatX Pro!</p>
          <p className="text-lg mb-4">This is a modern web application for geographic data format conversion and vector analysis.</p>
          <p className="text-base">Built with React, TypeScript, and Vite • Deployed on Vercel</p>
        </div>
      </div>
    </div>
  );
};

export default App;
