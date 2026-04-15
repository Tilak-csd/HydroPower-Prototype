import React, { useState, useEffect } from 'react';
import { AlertCircle, X, Info } from 'lucide-react';

const PrototypeDisclaimer = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Automatically show the popup after a short delay
  useEffect(() => {
    const timer = setTimeout(() => setIsOpen(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="bg-white w-full max-w-md shadow-2xl border border-gray-200 overflow-hidden">
        
        {/* Header */}
        <div className="bg-amber-50 border-b border-amber-100 p-4 flex items-center justify-between">
          <div className="flex items-center gap-2 text-amber-700">
            <AlertCircle size={20} />
            <span className="font-bold uppercase tracking-wider text-xs">Prototype Notice</span>
          </div>
          <button 
            onClick={() => setIsOpen(false)}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          <h3 className="text-lg font-bold text-gray-900 mb-2">
            Demo & Resource Disclaimer
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed mb-4">
            This site is currently a <strong>functional prototype</strong> developed for demonstration purposes. 
          </p>
          
          <ul className="space-y-3 mb-6">
            <li className="flex gap-3 text-sm text-gray-600">
              <div className="mt-1 text-blue-600"><Info size={16} /></div>
              <span><strong>Resources:</strong> Images and icons are sourced from open-source libraries (Unsplash/Lucide) for visual representation.</span>
            </li>
            <li className="flex gap-3 text-sm text-gray-600">
              <div className="mt-1 text-blue-600"><Info size={16} /></div>
              <span><strong>Content:</strong> All text, news titles, and reports are placeholder data.</span>
            </li>
            <li className="flex gap-3 text-sm text-gray-600">
              <div className="mt-1 text-blue-600"><Info size={16} /></div>
              <span><strong>Future Updates:</strong> Actual project details, official documents, and final branding will be updated in the production phase.</span>
            </li>
          </ul>

          {/* Action */}
          <button 
            onClick={() => setIsOpen(false)}
            className="w-full py-3 bg-gray-900 text-white font-semibold text-sm hover:bg-gray-800 transition-colors"
          >
            I Understand
          </button>
        </div>
      </div>
    </div>
  );
};

export default PrototypeDisclaimer;