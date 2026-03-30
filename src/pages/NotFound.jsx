import React from 'react';
import { Link } from 'react-router-dom';
import { MoveLeft, Waves, Home, HelpCircle } from 'lucide-react';

const NotFound = () => {
  return (
    <div className="min-h-[80vh] flex items-center justify-center px-6">
      <div className="max-w-2xl text-center">
        {/* Visual Element: Water Waves Icon */}
        <div className="flex justify-center mb-8">
          <div className="p-6 bg-blue-50 rounded-full">
            <Waves className="w-16 h-16 text-blue-600 animate-pulse" />
          </div>
        </div>

        {/* Error Code & Title */}
        <span className="text-blue-600 font-bold tracking-widest uppercase text-sm">
          Error 404
        </span>
        <h1 className="mt-4 text-4xl font-extrabold text-slate-900 tracking-tight sm:text-5xl">
          Out of the Mainstream.
        </h1>
        
        {/* Themed Description */}
        <p className="mt-6 text-lg text-slate-600 leading-relaxed">
          It looks like this path has run dry. The page you're looking for isn't 
          in our current flow. Let's redirect you back to the powerhouse.
        </p>

        {/* Navigation Actions */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/"
            className="flex items-center gap-2 bg-blue-600 text-white px-8 py-3 rounded-sm font-semibold hover:bg-blue-700 transition-all shadow-lg shadow-blue-200"
          >
            <Home className="w-4 h-4" />
            Return Home
          </Link>
          
          <Link
            to="/contact"
            className="flex items-center gap-2 border border-slate-300 text-slate-700 px-8 py-3 rounded-sm font-semibold hover:bg-slate-50 transition-colors"
          >
            <HelpCircle className="w-4 h-4" />
            Report Issue
          </Link>
        </div>

        {/* Subtle Footer Link */}
        <button 
          onClick={() => window.history.back()}
          className="mt-8 text-sm font-medium text-blue-600 hover:text-blue-800 flex items-center justify-center gap-1 mx-auto"
        >
          <MoveLeft className="w-4 h-4" />
          Go back to previous page
        </button>
      </div>
    </div>
  );
};

export default NotFound;