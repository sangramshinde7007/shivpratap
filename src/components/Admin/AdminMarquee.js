import React, { useState, useEffect } from 'react';
import AdminNavbar from './AdminNavbar';
import AdminSidebar from './AdminSidebar';
import { 
  database, 
  ref as dbRef, 
  set, 
  get
} from '../../firebase';

const AdminMarquee = () => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [marqueeText, setMarqueeText] = useState('🚀 New Digital Savings Account with 7% interest!');
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const toggleSidebar = () => {
    setSidebarCollapsed(!sidebarCollapsed);
  };

  // Load marquee text from Firebase on component mount
  useEffect(() => {
    loadMarqueeText();
  }, []);

  const loadMarqueeText = async () => {
    try {
      const marqueeRef = dbRef(database, 'shivpratapmultistate/marquee');
      const snapshot = await get(marqueeRef);
      
      if (snapshot.exists()) {
        const marqueeData = snapshot.val();
        setMarqueeText(marqueeData.text || '🚀 New Digital Savings Account with 7% interest!');
      }
    } catch (error) {
      console.error('Error loading marquee text:', error);
      setErrorMessage('Error loading marquee text');
    }
  };

  const saveMarqueeText = async () => {
    if (!marqueeText.trim()) {
      setErrorMessage('Please enter some text for the announcement');
      return;
    }

    setLoading(true);
    setErrorMessage('');
    setSuccessMessage('');

    try {
      const marqueeRef = dbRef(database, 'shivpratapmultistate/marquee');
      await set(marqueeRef, {
        text: marqueeText.trim(),
        updatedAt: new Date().toISOString(),
        updatedBy: localStorage.getItem('adminEmail') || 'admin'
      });
      
      setSuccessMessage('Marquee text saved successfully!');
      
      // Clear success message after 3 seconds
      setTimeout(() => {
        setSuccessMessage('');
      }, 3000);
    } catch (error) {
      console.error('Error saving marquee text:', error);
      setErrorMessage('Error saving marquee text. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleClearText = () => {
    setMarqueeText('');
    setErrorMessage('');
    setSuccessMessage('');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-1000"></div>
      </div>

      {/* Admin Sidebar */}
      <AdminSidebar 
        collapsed={sidebarCollapsed} 
        toggleSidebar={toggleSidebar} 
      />

      {/* Admin Navbar */}
      <AdminNavbar 
        sidebarCollapsed={sidebarCollapsed}
        toggleSidebar={toggleSidebar}
      />

      {/* Main Content */}
      <div 
        className={`transition-all duration-300 ease-in-out ${
          sidebarCollapsed 
            ? 'lg:ml-20 ml-0' 
            : 'lg:ml-64 ml-0'
        }`}
      >
        {/* Content Area */}
        <div className="pt-16 lg:pt-20">
          <div className="p-4 lg:p-8">
            {/* Page Header */}
            <div className="mb-6 lg:mb-8">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h1 className="text-2xl lg:text-4xl font-bold text-gray-800 mb-2">
                    Marquee Text Management
                  </h1>
                  <p className="text-gray-600 text-sm lg:text-lg">
                    Manage scrolling announcement text that appears on the website
                  </p>
                </div>
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 px-3 lg:px-4 py-2 rounded-full">
                  <span className="text-xs lg:text-sm font-medium text-blue-600">Live Preview Available</span>
                </div>
              </div>
            </div>

            {/* Main Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
              {/* Text Editor Section */}
              <div className="space-y-6">
                {/* Text Input Card */}
                <div className="bg-white rounded-xl lg:rounded-2xl shadow-lg lg:shadow-xl p-4 lg:p-6 border border-gray-100">
                  <div className="flex items-center mb-4 lg:mb-6">
                    <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-xl bg-gradient-to-r from-indigo-100 to-purple-100 flex items-center justify-center mr-3 lg:mr-4">
                      <span className="text-xl lg:text-2xl">📝</span>
                    </div>
                    <div>
                      <h2 className="text-lg lg:text-xl font-bold text-gray-800">Edit Announcement Text</h2>
                      <p className="text-gray-600 text-xs lg:text-sm">Type your message for the scrolling announcement</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Announcement Text
                      </label>
                      <textarea
                        value={marqueeText}
                        onChange={(e) => {
                          setMarqueeText(e.target.value);
                          setErrorMessage('');
                          setSuccessMessage('');
                        }}
                        placeholder="Enter your announcement text here... This will appear as scrolling text on the website."
                        className="w-full px-3 lg:px-4 py-2 lg:py-3 border border-gray-300 rounded-lg lg:rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 resize-none transition-all duration-200 text-sm lg:text-base"
                        rows="4 lg:rows-6"
                        maxLength="500"
                      />
                      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mt-2 gap-2">
                        <span className="text-xs lg:text-sm text-gray-500">
                          {marqueeText.length}/500 characters
                        </span>
                        <div className="flex items-center space-x-2">
                          <span className="text-xs lg:text-sm text-gray-400">
                            {marqueeText.length > 450 && 'Almost at limit!'}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-3">
                      <button
                        onClick={handleClearText}
                        className="px-4 lg:px-6 py-2 lg:py-3 text-gray-600 bg-gray-100 rounded-lg lg:rounded-xl hover:bg-gray-200 transition-colors duration-200 font-medium text-sm lg:text-base"
                      >
                        Clear Text
                      </button>
                      <button
                        onClick={saveMarqueeText}
                        disabled={loading}
                        className="px-4 lg:px-6 py-2 lg:py-3 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-lg lg:rounded-xl hover:from-indigo-600 hover:to-purple-600 transition-all duration-200 font-medium shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed text-sm lg:text-base"
                      >
                        {loading ? 'Saving...' : 'Save to Database'}
                      </button>
                    </div>

                    {/* Messages */}
                    {successMessage && (
                      <div className="bg-green-50 border border-green-200 rounded-lg lg:rounded-xl p-3 lg:p-4">
                        <div className="flex items-center">
                          <span className="text-green-600 mr-2 text-sm lg:text-base">✓</span>
                          <span className="text-green-800 font-medium text-sm lg:text-base">{successMessage}</span>
                        </div>
                      </div>
                    )}

                    {errorMessage && (
                      <div className="bg-red-50 border border-red-200 rounded-lg lg:rounded-xl p-3 lg:p-4">
                        <div className="flex items-center">
                          <span className="text-red-600 mr-2 text-sm lg:text-base">⚠</span>
                          <span className="text-red-800 font-medium text-sm lg:text-base">{errorMessage}</span>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Instructions Card */}
                <div className="bg-white rounded-xl lg:rounded-2xl shadow-lg lg:shadow-xl p-4 lg:p-6 border border-gray-100">
                  <div className="flex items-center mb-3 lg:mb-4">
                    <div className="w-8 h-8 lg:w-10 lg:h-10 rounded-xl bg-gradient-to-r from-yellow-100 to-orange-100 flex items-center justify-center mr-2 lg:mr-3">
                      <span className="text-lg lg:text-xl">💡</span>
                    </div>
                    <h3 className="text-base lg:text-lg font-bold text-gray-800">Instructions</h3>
                  </div>
                  <ul className="space-y-2 text-xs lg:text-sm text-gray-600">
                    <li className="flex items-start">
                      <span className="text-indigo-500 mr-2">•</span>
                      Type your announcement text in the text area above
                    </li>
                    <li className="flex items-start">
                      <span className="text-indigo-500 mr-2">•</span>
                      Maximum 500 characters allowed for optimal display
                    </li>
                    <li className="flex items-start">
                      <span className="text-indigo-500 mr-2">•</span>
                      Click "Save to Database" to update the live website
                    </li>
                    <li className="flex items-start">
                      <span className="text-indigo-500 mr-2">•</span>
                      The text will appear as scrolling marquee on all pages
                    </li>
                    <li className="flex items-start">
                      <span className="text-indigo-500 mr-2">•</span>
                      Use emojis and formatting to make announcements more engaging
                    </li>
                  </ul>
                </div>
              </div>

              {/* Preview Section */}
              <div className="space-y-6">
                {/* Live Preview Card */}
                <div className="bg-white rounded-xl lg:rounded-2xl shadow-lg lg:shadow-xl p-4 lg:p-6 border border-gray-100">
                  <div className="flex items-center mb-4 lg:mb-6">
                    <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-xl bg-gradient-to-r from-green-100 to-emerald-100 flex items-center justify-center mr-3 lg:mr-4">
                      <span className="text-xl lg:text-2xl">👁️</span>
                    </div>
                    <div>
                      <h2 className="text-lg lg:text-xl font-bold text-gray-800">Live Preview</h2>
                      <p className="text-gray-600 text-xs lg:text-sm">See how your announcement will appear</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    {/* Marquee Preview */}
                    <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-2 lg:py-3 rounded-lg lg:rounded-xl overflow-hidden">
                      <div className="relative">
                        <div className="flex whitespace-nowrap animate-scroll">
                          <span className="mx-6 lg:mx-8 font-medium text-sm lg:text-base">
                            {marqueeText || 'Your announcement text will appear here...'}
                          </span>
                          <span className="mx-6 lg:mx-8">•</span>
                          <span className="mx-6 lg:mx-8 font-medium text-sm lg:text-base">
                            {marqueeText || 'Your announcement text will appear here...'}
                          </span>
                          <span className="mx-6 lg:mx-8">•</span>
                          <span className="mx-6 lg:mx-8 font-medium text-sm lg:text-base">
                            {marqueeText || 'Your announcement text will appear here...'}
                          </span>
                          <span className="mx-6 lg:mx-8">•</span>
                          <span className="mx-6 lg:mx-8 font-medium text-sm lg:text-base">
                            {marqueeText || 'Your announcement text will appear here...'}
                          </span>
                          <span className="mx-6 lg:mx-8">•</span>
                          <span className="mx-6 lg:mx-8 font-medium text-sm lg:text-base">
                            {marqueeText || 'Your announcement text will appear here...'}
                          </span>
                          <span className="mx-6 lg:mx-8">•</span>
                          <span className="mx-6 lg:mx-8 font-medium text-sm lg:text-base">
                            {marqueeText || 'Your announcement text will appear here...'}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Current Status */}
                    <div className="bg-gray-50 rounded-lg lg:rounded-xl p-3 lg:p-4">
                      <h4 className="font-medium text-gray-800 mb-2 text-sm lg:text-base">Current Status</h4>
                      <div className="space-y-2 text-xs lg:text-sm">
                        <div className="flex justify-between">
                          <span className="text-gray-600">Character Count:</span>
                          <span className="font-medium text-gray-800">{marqueeText.length}/500</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Status:</span>
                          <span className="font-medium text-green-600">Ready to Save</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Preview:</span>
                          <span className="font-medium text-blue-600">Active</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Tips Card */}
                <div className="bg-white rounded-xl lg:rounded-2xl shadow-lg lg:shadow-xl p-4 lg:p-6 border border-gray-100">
                  <div className="flex items-center mb-3 lg:mb-4">
                    <div className="w-8 h-8 lg:w-10 lg:h-10 rounded-xl bg-gradient-to-r from-purple-100 to-pink-100 flex items-center justify-center mr-2 lg:mr-3">
                      <span className="text-lg lg:text-xl">🎯</span>
                    </div>
                    <h3 className="text-base lg:text-lg font-bold text-gray-800">Pro Tips</h3>
                  </div>
                  <ul className="space-y-2 text-xs lg:text-sm text-gray-600">
                    <li className="flex items-start">
                      <span className="text-purple-500 mr-2">•</span>
                      Use emojis to grab attention: 🚀, 💰, 🎉, 📢
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-500 mr-2">•</span>
                      Keep messages short and impactful
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-500 mr-2">•</span>
                      Include call-to-action phrases like "Apply Now!" or "Visit Today!"
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-500 mr-2">•</span>
                      Update regularly to keep content fresh
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CSS Animation */}
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .animate-scroll {
          animation: scroll 25s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default AdminMarquee;
