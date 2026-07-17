// DYNAMICALLY READS THE CATEGORIES UNDER EACH TASK IN TASKS.JS AND RENDERS THEM AUTOMATICALLY 

import React from 'react';

export default function TaskViewer({ task }) {

  // eg: turns "computervision" into "Computervision"
  const formatCategoryName = (key) => {
    if (key === 'toolserver') return 'Tool Server';
    if (key === 'HTMLparsing') return 'HTML Parsing';
    if (key === 'docparsing') return 'Document Parsing';
    if (key === 'datahandling') return 'Data Handling';
    if (key === 'computervision') return 'Computer Vision';
    if (key === 'pythonlibraries') return 'Python Libraries';
    if (key === 'datavalidation') return 'Data Validation';
    if (key === 'devenvlibrary') return 'Dev Environment';
    if (key === 'commandlineparsing') return 'Command Line Parsing';

    // if it's a single word like 'frontend', just capitalizing the 1st letter
    return key.charAt(0).toUpperCase() + key.slice(1);
  };

  return (
    <div className = "max-w-4xl mx-auto space-y-8 animate-fadeIn">
      {/* Header section */}
      <div className = "border-b border-zinc-700 pb-6">
        <h2 className = "text-3xl lg:text-4xl font-extrabold text-white mb-4">{task.title}</h2>
        <p className = "text-lg text-zinc-300 leading-relaxed">{task.description}</p>
      </div>

      {/* Action buttons */}
      <div className = "flex gap-4">
        <a 
          href = {task.github} 
          target = "_blank" 
          rel = "noopener noreferrer"
          className = "px-6 py-2 bg-zinc-700 hover:bg-slate-600 text-white font-semibold rounded-lg flex items-center gap-2 transition-colors"
        >
          {/* GitHub SVG Icon */}
          <svg className = "w-5 h-5" fill = "currentColor" viewBox = "0 0 24 24"><path fillRule = "evenodd" clipRule = "evenodd" d = "M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" /></svg>
          View on GitHub
        </a>
      </div>

      {/* Tech Stack section (dynamic grid) */}
      <div className = "bg-zinc-800/50 p-6 rounded-xl border border-zinc-700">
        <h3 className = "text-2xl font-semibold mb-6 text-white">Tech Stack</h3>
        <div className = "grid grid-cols-1 md:grid-cols-2 gap-8">
          {Object.entries(task.techStack).map(([category, technologies]) => (
            <div key = {category}>
              <h4 className = "text-xs font-bold text-zinc-500 uppercase tracking-widest mb-3">
                {formatCategoryName(category)}
              </h4>
              <div className = "flex flex-wrap gap-2">
                {technologies.map((tech, index) => (
                  <span 
                    key = {index} 
                    className = "px-3 py-1 bg-zinc-900 text-rose-200 text-sm font-medium rounded-full border border-zinc-600 shadow-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Video placeholder */}
      <div className = "bg-zinc-900 rounded-xl overflow-hidden border border-zinc-800 aspect-video flex items-center justify-center relative shadow-inner">
        {task.videoUrl && task.videoUrl !== "......................................." ? (
            <video controls className = "w-full h-full object-cover">
              <source src = {task.videoUrl} type = "video/mp4" />
              Your browser does not support the video tag.
            </video>
        ) : (
          <div className = "text-zinc-500 flex flex-col items-center">
            {/* Video camera SVG */}
            <span className = "font-medium tracking-wide">Video Demo Coming Soon</span>
          </div>
        )}
      </div>
    </div>
  );
}