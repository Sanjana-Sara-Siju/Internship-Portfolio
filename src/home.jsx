// LANDING PAGE 
// PROFESSIONAL INTRO FOCUSING ON ACADEMIC AND PROFESSIONAL BACKGROUND, AND A BUTTON LINKING TO 
// TASK VIEW


import React from 'react';

export default function Home({ setCurrentView }) {
  return (
    <div className = "flex flex-col items-center justify-center min-h-[80vh] text-center space-y-6 p-8 animate-fadeIn">
      
      {/* Introduction */}
      <h1 className = "text-5xl md:text-6xl font-extrabold text-white tracking-tight">
        Hello! I'm Sanjana.
      </h1>
      <h2 className = "text-2xl text-rose-500 font-medium max-w-2xl">
        Computer Science Undergraduate @ American University of Sharjah
      </h2>
      
      {/* Summary */}
      <p className = "max-w-2xl text-zinc-400 text-lg leading-relaxed mt-4">
        Welcome to my portfolio!! This space showcases a collection of my technical deliverables developed during my internship at FACTS. My recent work focuses on building full-stack web applications, integrating AI workflows, and engineering automated data pipelines.
      </p>

      {/* Button */}
      <button
        onClick = {() => setCurrentView('tasks')}
        className = "mt-10 px-8 py-3 bg-rose-600 hover:bg-rose-500 text-white font-semibold rounded-full shadow-lg transition-all hover:scale-105 flex items-center gap-2"
      >
        View My Tasks
        <svg className = "w-5 h-5" fill = "none" stroke = "currentColor" viewBox = "0 0 24 24"><path strokeLinecap = "round" strokeLinejoin = "round" strokeWidth = "2" d = "M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
      </button>
    </div>
  );
}