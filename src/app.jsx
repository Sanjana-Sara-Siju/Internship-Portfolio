// MAIN LAYOUT 
//  this file holds the state, and keeps the sidebar fixed on the left and the scrollable task viewer 
// on the right

import React, { useState } from 'react';
import { tasks } from './tasks';
import Sidebar from './sidebar';
import TaskViewer from './taskViewer';
import Navbar from './navbar'
import Home from './home'


function App() {
  // state to manage which page is currently visible
  const [currentView, setCurrentView] = useState('home'); // defaults to 'home'
  
  // existing state for the task viewer
  const [activeTaskId, setActiveTaskId] = useState(tasks[0]?.id);
  const activeTask = tasks.find(task => task.id === activeTaskId);

  return (
    // flex-col to stack the Navbar on top of the main content
    <div className = "flex flex-col h-screen bg-zinc-950 text-zinc-100 font-sans overflow-hidden">
      
      {/* Top navigation bar */}
      <Navbar currentView = {currentView} setCurrentView = {setCurrentView} />

      {/* Main content area */}
      <div className = "flex-1 flex overflow-hidden">
        
        {/* CONDITIONAL RENDERING: If view is 'home', showing Home. Otherwise, showing Sidebar+TaskViewer */}
        {currentView === 'home' ? (
          <div className = "w-full h-full overflow-y-auto">
            <Home setCurrentView = {setCurrentView} />
          </div>
        ) : (
          <>
            <Sidebar 
              tasks = {tasks} 
              activeTaskId = {activeTaskId} 
              setActiveTaskId = {setActiveTaskId} 
            />
            <main className = "flex-1 overflow-y-auto p-8 lg:p-12">
              {activeTask ? (
                <TaskViewer task = {activeTask} />
              ) : (
                <div className = "text-center mt-20 text-zinc-500">Select a task to view.</div>
              )}
            </main>
          </>
        )}
        
      </div>
    </div>
  );
}

export default App;
