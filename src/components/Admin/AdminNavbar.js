import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiUser, FiLogOut } from 'react-icons/fi';
import { FaCrown } from 'react-icons/fa';

const AdminNavbar = ({ toggleSidebar, sidebarCollapsed }) => {
  const navigate = useNavigate();
  const [adminEmail, setAdminEmail] = useState('');
  const [adminName, setAdminName] = useState('');
  
  useEffect(() => {
    // Get admin data from localStorage
    const email = localStorage.getItem('adminEmail');
    const name = localStorage.getItem('adminName');
    
    if (email) {
      setAdminEmail(email);
    }
    if (name) {
      setAdminName(name);
    } else if (email) {
      // If no name, use email prefix
      setAdminName(email.split('@')[0]);
    }
  }, []);
  
  const handleLogout = () => {
    // Clear localStorage
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('adminEmail');
    localStorage.removeItem('adminName');
    localStorage.removeItem('adminUid');
    
    navigate('/login');
  };

  const handleProfileClick = () => {
    navigate('/admin-profile');
  };

  return (
    <nav 
      className={`fixed top-0 right-0 h-16 z-40 transition-all duration-300 flex items-center justify-end px-3 lg:px-6`}
      style={{
        left: sidebarCollapsed ? '80px' : '256px',
        background: 'linear-gradient(90deg, #ffffff 0%, #f8fafc 100%)',
        backdropFilter: 'blur(10px)',
        boxShadow: '0 1px 15px rgba(0, 0, 0, 0.1)',
        borderBottom: '1px solid rgba(226, 232, 240, 0.8)'
      }}
    >
      {/* User Profile */}
      <div className="relative group">
        <button className="flex items-center gap-2 lg:gap-3 px-3 lg:px-4 py-2 rounded-xl lg:rounded-2xl bg-gradient-to-r from-gray-50 to-gray-100 hover:from-gray-100 hover:to-gray-200 border border-gray-200 transition-all hover:scale-105 active:scale-95">
          <div className="relative">
            <div className="w-8 lg:w-10 h-8 lg:h-10 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center shadow-lg">
              <FiUser className="text-white text-sm lg:text-base" />
            </div>
            <div className="absolute -bottom-1 -right-1 w-3 lg:w-4 h-3 lg:h-4 bg-green-500 rounded-full border-2 border-white"></div>
            <div className="absolute -top-1 -right-1">
              <FaCrown className="text-amber-500" size={10} />
            </div>
          </div>
          <div className="hidden md:block text-left">
            <p className="font-bold text-gray-800 leading-tight text-sm lg:text-base">{adminName || 'Admin'}</p>
            <p className="text-xs text-gray-500 truncate max-w-32 lg:max-w-none">{adminEmail || 'Loading...'}</p>
          </div>
        </button>

        {/* Dropdown */}
        <div className="absolute right-0 top-full mt-2 w-64 lg:w-72 bg-white rounded-xl lg:rounded-2xl shadow-2xl border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0 z-50">
          {/* Header */}
          <div className="p-3 lg:p-4 border-b border-gray-100">
            <div className="flex items-center gap-3">
              <div className="w-10 lg:w-12 h-10 lg:h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center shadow-lg">
                <FiUser className="text-white text-lg lg:text-xl" />
              </div>
              <div>
                <h4 className="font-bold text-gray-800 text-sm lg:text-base">{adminName || 'Admin'}</h4>
                <p className="text-xs lg:text-sm text-gray-500">Administrator</p>
              </div>
            </div>
          </div>

          {/* Menu Items */}
          <div className="p-2">
            {[
              { icon: FiUser, label: 'My Profile', color: 'text-blue-600', onClick: handleProfileClick },
            ].map((item, index) => (
              <button
                key={index}
                onClick={item.onClick}
                className="w-full flex items-center gap-3 px-3 lg:px-4 py-2 lg:py-3 rounded-lg lg:rounded-xl hover:bg-gray-50 transition-colors text-left"
              >
                <div className={`w-7 lg:w-8 h-7 lg:h-8 rounded-lg ${item.color.replace('text-', 'bg-')}/10 flex items-center justify-center`}>
                  <item.icon className={`${item.color} text-sm lg:text-base`} />
                </div>
                <span className="font-medium text-gray-700 text-sm lg:text-base">{item.label}</span>
              </button>
            ))}
          </div>

          {/* Logout */}
          <div className="p-2 border-t border-gray-100">
            <button
              onClick={handleLogout}
              className="w-full flex items-center gap-3 px-3 lg:px-4 py-2 lg:py-3 rounded-lg lg:rounded-xl hover:bg-red-50 transition-colors text-left group"
            >
              <div className="w-7 lg:w-8 h-7 lg:h-8 rounded-lg bg-red-500/10 flex items-center justify-center group-hover:bg-red-500/20">
                <FiLogOut className="text-red-600 group-hover:text-red-700 text-sm lg:text-base" />
              </div>
              <span className="font-medium text-red-600 group-hover:text-red-700 text-sm lg:text-base">Logout</span>
            </button>
          </div>

          {/* Status */}
          <div className="p-2 lg:p-3 bg-gradient-to-r from-gray-50 to-gray-100 rounded-b-xl lg:rounded-b-2xl">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-xs text-gray-600">Online</span>
              </div>
              <span className="text-xs text-gray-500 hidden sm:inline">Last login: Today 09:42 AM</span>
            </div>
          </div>
        </div>
      </div>

      {/* Background blur effect */}
      <div 
        className="absolute inset-0 -z-10"
        style={{
          background: 'linear-gradient(90deg, rgba(255,255,255,0.95) 0%, rgba(248,250,252,0.95) 100%)',
          backdropFilter: 'blur(10px)'
        }}
      ></div>
    </nav>
  );
};

export default AdminNavbar;