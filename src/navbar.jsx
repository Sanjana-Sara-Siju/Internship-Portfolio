// ACCEPTS CURRENT VIEW STATE AND DISPLAYS BUTTONS TO SWITCH BETWEEN PAGES

import React from 'react';

export default function Navbar({ currentView, setCurrentView }) {
  return (
    <nav className = "bg-zinc-900 border-b border-zinc-800 px-6 py-4 flex justify-between items-center shadow-md z-20 relative">
      <div className = "text-xl font-extrabold text-white tracking-wide">
        Sanjana Sara Siju
      </div>
      <div className="flex space-x-2 md:space-x-4">
        <button
          onClick={() => setCurrentView('home')}
          className={`px-4 py-2 rounded-md font-medium transition-all ${
            currentView === 'home' 
              ? 'bg-zinc-800 text-rose-400 shadow-inner' 
              : 'text-zinc-400 hover:text-white hover:bg-zinc-800/50'
          }`}
        >
          Home
        </button>
        <button
          onClick = {() => setCurrentView('tasks')}
          className = {`px-4 py-2 rounded-md font-medium transition-all ${
            currentView === 'tasks' 
              ? 'bg-zinc-800 text-rose-400 shadow-inner' 
              : 'text-zinc-400 hover:text-white hover:bg-zinc-800/50'
          }`}
        >
          Tasks and Projects
        </button>
      </div>
    </nav>
  );
}