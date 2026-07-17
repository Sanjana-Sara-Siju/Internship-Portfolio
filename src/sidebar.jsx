// NAVIGATION MENU 
// this file renders the task list


import React from 'react';

export default function Sidebar({ tasks, activeTaskId, setActiveTaskId }) {
  return (
    <div className = "w-80 bg-zinc-800 border-r border-slate-700 h-full flex flex-col shadow-xl z-10">
      <div className = "p-6 border-b border-slate-700">
        <h1 className = "text-xl font-bold text-white tracking-wide">FACTS Internship Portfolio</h1>
      </div>
      
      <nav className = "flex-1 overflow-y-auto p-4 space-y-2">

        {/* the CSS styling in the button checks if current button is the active task and highlights
            blue if so */}
        {tasks.map((task) => (
          <button
            key = {task.id}
            onClick = {() => setActiveTaskId(task.id)}
            className = {`w-full text-left px-4 py-3 rounded-lg transition-all duration-200 ${
              activeTaskId === task.id
                ? 'bg-rose-600 text-white shadow-md'
                : 'text-zinc-400 hover:bg-slate-700 hover:text-white'
            }`}
          >
            <span className = "block font-medium text-sm leading-snug">{task.title}</span>
          </button>
        ))}
      </nav>
    </div>
  );
}