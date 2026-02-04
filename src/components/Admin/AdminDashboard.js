import React, { useState, useEffect } from 'react';
import AdminNavbar from './AdminNavbar';
import AdminSidebar from './AdminSidebar';
import { 
  database, 
  ref as dbRef, 
  get,
} from '../../firebase';
import { FaImages, FaPhotoVideo, FaBullhorn } from 'react-icons/fa';

const AdminDashboard = () => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [marqueeText, setMarqueeText] = useState('');
  const [galleryCount, setGalleryCount] = useState(0);
  const [mediaCount, setMediaCount] = useState(0);
  const [loading, setLoading] = useState(true);

  const toggleSidebar = () => {
    setSidebarCollapsed(!sidebarCollapsed);
  };

  // Load data from Firebase on component mount
  useEffect(() => {
    loadDashboardData();
  }, []);

  // Inject marquee CSS into the document head (client-only)
  useEffect(() => {
    if (typeof document === 'undefined') return;
    if (document.getElementById('admin-marquee-styles')) return;

    const style = document.createElement('style');
    style.id = 'admin-marquee-styles';
    style.textContent = `
      @keyframes scroll {
        0% { transform: translateX(0%); }
        100% { transform: translateX(-50%); }
      }
      .animate-scroll { animation: scroll 25s linear infinite; }
    `;

    document.head.appendChild(style);
    return () => {
      if (style.parentNode) style.parentNode.removeChild(style);
    };
  }, []);

  const loadDashboardData = async () => {
    try {
      // Load marquee text
      const marqueeRef = dbRef(database, 'shivpratapmultistate/marquee');
      const marqueeSnapshot = await get(marqueeRef);
      
      if (marqueeSnapshot.exists()) {
        const marqueeData = marqueeSnapshot.val();
        setMarqueeText(marqueeData.text || 'No marquee text set');
      } else {
        setMarqueeText('No marquee text set');
      }

      // Load gallery count
      const galleryRef = dbRef(database, 'shivpratapmultistate/gallery');
      const gallerySnapshot = await get(galleryRef);
      
      if (gallerySnapshot.exists()) {
        const galleryData = gallerySnapshot.val();
        setGalleryCount(Object.keys(galleryData).length);
      }

      // Load media count
      const mediaRef = dbRef(database, 'shivpratapmultistate/media');
      const mediaSnapshot = await get(mediaRef);
      
      if (mediaSnapshot.exists()) {
        const mediaData = mediaSnapshot.val();
        setMediaCount(Object.keys(mediaData).length);
      }

    } catch (error) {
      console.error('Error loading dashboard data:', error);
    } finally {
      setLoading(false);
    }
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
        <div className="pt-16 lg:pt-20 p-4 lg:p-8">
          {/* Header */}
          <div className="mb-6 lg:mb-8">
            <h1 className="text-2xl lg:text-4xl font-bold text-gray-800 mb-2">Dashboard Overview</h1>
            <p className="text-sm lg:text-base text-gray-600">Content Management Statistics</p>
          </div>

          {/* Loading State */}
          {loading ? (
            <div className="flex items-center justify-center h-64">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
            </div>
          ) : (
            /* Stats Cards */
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
              {/* Gallery Photos Card */}
              <div className="bg-white rounded-xl lg:rounded-2xl shadow-lg lg:shadow-xl p-4 lg:p-6 border border-gray-100 transform transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
                <div className="flex items-center justify-between mb-3 lg:mb-4">
                  <div className="p-3 lg:p-4 rounded-xl bg-gradient-to-r from-blue-100 to-cyan-100">
                    <FaImages className="text-2xl lg:text-3xl text-blue-600" />
                  </div>
                  <span className="text-xs lg:text-sm font-medium px-2 lg:px-3 py-1 rounded-full bg-gradient-to-r from-blue-50 to-cyan-50 text-blue-600">
                    Photos
                  </span>
                </div>
                <h3 className="text-2xl lg:text-3xl font-bold text-gray-800">{galleryCount}</h3>
                <p className="text-gray-500 mt-1 text-sm lg:text-base">Gallery Photos</p>
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <div className="flex items-center text-sm text-gray-600">
                    <span className="text-blue-500 mr-2">📸</span>
                    <span>Images in gallery</span>
                  </div>
                </div>
              </div>

              {/* Media Photos Card */}
              <div className="bg-white rounded-xl lg:rounded-2xl shadow-lg lg:shadow-xl p-4 lg:p-6 border border-gray-100 transform transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
                <div className="flex items-center justify-between mb-3 lg:mb-4">
                  <div className="p-3 lg:p-4 rounded-xl bg-gradient-to-r from-purple-100 to-pink-100">
                    <FaPhotoVideo className="text-2xl lg:text-3xl text-purple-600" />
                  </div>
                  <span className="text-xs lg:text-sm font-medium px-2 lg:px-3 py-1 rounded-full bg-gradient-to-r from-purple-50 to-pink-50 text-purple-600">
                    Media
                  </span>
                </div>
                <h3 className="text-2xl lg:text-3xl font-bold text-gray-800">{mediaCount}</h3>
                <p className="text-gray-500 mt-1 text-sm lg:text-base">Media Files</p>
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <div className="flex items-center text-sm text-gray-600">
                    <span className="text-purple-500 mr-2">🎥</span>
                    <span>Files in media</span>
                  </div>
                </div>
              </div>

              {/* Marquee Text Card */}
              <div className="bg-white rounded-xl lg:rounded-2xl shadow-lg lg:shadow-xl p-4 lg:p-6 border border-gray-100 transform transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
                <div className="flex items-center justify-between mb-3 lg:mb-4">
                  <div className="p-3 lg:p-4 rounded-xl bg-gradient-to-r from-green-100 to-emerald-100">
                    <FaBullhorn className="text-2xl lg:text-3xl text-green-600" />
                  </div>
                  <span className="text-xs lg:text-sm font-medium px-2 lg:px-3 py-1 rounded-full bg-gradient-to-r from-green-50 to-emerald-50 text-green-600">
                    Active
                  </span>
                </div>
                <div className="h-12 lg:h-16 flex items-center">
                  <p className="text-xs lg:text-sm text-gray-700 font-medium line-clamp-2">
                    {marqueeText}
                  </p>
                </div>
                <p className="text-gray-500 mt-1 text-sm lg:text-base">Marquee Text</p>
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <div className="flex items-center text-sm text-gray-600">
                    <span className="text-green-500 mr-2">📢</span>
                    <span>Current announcement</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;