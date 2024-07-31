import React, { useState } from 'react';

const Layout = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className={`h-screen bg-gray-800 text-white w-64 ${isSidebarOpen ? 'block' : 'hidden'} md:block`}>
        <div className="p-4">
          <h2 className="text-2xl font-semibold">Admin Dashboard</h2>
        </div>
        <nav>
          <ul>
            <li className="p-4 hover:bg-gray-700">Dashboard</li>
            <li className="p-4 hover:bg-gray-700">Users</li>
            <li className="p-4 hover:bg-gray-700">Settings</li>
          </ul>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex flex-col flex-1">
        {/* Header */}
        <header className="bg-white shadow p-4 flex justify-between items-center">
          <button className="md:hidden" onClick={toggleSidebar}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
          <h1 className="text-xl font-semibold">Admin Dashboard</h1>
          <div>
            <button className="bg-blue-500 text-white px-4 py-2 rounded">Log Out</button>
          </div>
        </header>

        {/* Main Content Area */}
        <main className="flex-1 p-4">
         
        </main>
      </div>
    </div>
  );
};

export default Layout;
