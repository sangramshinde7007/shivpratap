import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { 
  FiImage, FiVideo, FiLogOut, 
  FiMenu, FiX, FiChevronRight, FiGrid,
  FiEdit3
} from 'react-icons/fi';
import { 
  database, 
  ref as dbRef, 
  set, 
  get
} from '../../firebase';

const AdminSidebar = ({ collapsed, toggleSidebar }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [hoveredItem, setHoveredItem] = useState(null);
  const [marqueeText, setMarqueeText] = useState('');
  const [isEditingMarquee, setIsEditingMarquee] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Load marquee text from Firebase on component mount
  useEffect(() => {
    loadMarqueeText();
    
    // Check if mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
      if (window.innerWidth >= 1024) {
        setMobileMenuOpen(false);
      }
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const loadMarqueeText = async () => {
    try {
      const marqueeRef = dbRef(database, 'shivpratapmultistate/marquee');
      const snapshot = await get(marqueeRef);
      
      if (snapshot.exists()) {
        const marqueeData = snapshot.val();
        setMarqueeText(marqueeData.text || '');
      }
    } catch (error) {
      console.error('Error loading marquee text:', error);
    }
  };

  const saveMarqueeText = async () => {
    if (!marqueeText.trim()) return;
    
    setLoading(true);
    try {
      const marqueeRef = dbRef(database, 'shivpratapmultistate/marquee');
      await set(marqueeRef, {
        text: marqueeText.trim(),
        updatedAt: new Date().toISOString(),
        updatedBy: localStorage.getItem('adminEmail') || 'admin'
      });
      
      // Show success feedback
      const button = document.getElementById('save-marquee-btn');
      if (button) {
        button.textContent = 'Saved!';
        button.classList.add('bg-green-600');
        setTimeout(() => {
          button.textContent = 'Save';
          button.classList.remove('bg-green-600');
        }, 2000);
      }
    } catch (error) {
      console.error('Error saving marquee text:', error);
    } finally {
      setLoading(false);
    }
  };

  // Only Gallery and Media sections
  const menuSections = [
    {
      title: 'Media Management',
      items: [
        { 
          icon: FiGrid, 
          label: 'Dashboard', 
          path: '/admin-dashboard',
          gradient: 'from-blue-500 to-cyan-400'
        },
        { 
          icon: FiImage, 
          label: 'Gallery', 
          path: '/admin-gallery',
          gradient: 'from-purple-500 to-pink-500'
        },
        { 
          icon: FiVideo, 
          label: 'Media Library', 
          path: '/admin-media',
          gradient: 'from-green-500 to-emerald-400'
        },
        { 
          icon: FiEdit3, 
          label: 'Marquee Management', 
          path: '/admin-marquee',
          gradient: 'from-orange-500 to-red-400'
        },
      ]
    },
  ];

  const handleLogout = () => {
    // Clear authentication data
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('adminEmail');
    localStorage.removeItem('adminName');
    navigate('/');
  };

  const handleMobileMenuToggle = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <>
      {/* Mobile Menu Button */}
      {isMobile && (
        <button
          onClick={handleMobileMenuToggle}
          className="fixed top-4 left-4 z-50 w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center shadow-lg hover:scale-105 transition-transform lg:hidden"
        >
          <FiMenu className="text-white text-xl" />
        </button>
      )}

      {/* Mobile Overlay */}
      {isMobile && mobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={handleMobileMenuToggle}
        />
      )}

      {/* Sidebar */}
      <div 
        className={`fixed top-0 left-0 h-screen z-50 flex flex-col transition-all duration-300 ease-in-out ${
          collapsed ? 'w-20' : 'w-64'
        } ${
          isMobile 
            ? mobileMenuOpen ? 'translate-x-0' : '-translate-x-full' 
            : 'translate-x-0'
        } lg:translate-x-0`}
        style={{
          background: 'linear-gradient(180deg, #1a1a2e 0%, #16213e 100%)',
          boxShadow: isMobile ? '4px 0 20px rgba(0, 0, 0, 0.5)' : '4px 0 20px rgba(0, 0, 0, 0.3)'
        }}
      >
        {/* Header */}
        <div 
          className="px-4 py-6 border-b border-blue-800/50"
          style={{
            background: 'linear-gradient(90deg, rgba(26, 26, 46, 0.9) 0%, rgba(22, 33, 62, 0.9) 100%)',
            backdropFilter: 'blur(10px)'
          }}
        >
          <div className={`flex items-center justify-between ${collapsed ? 'justify-center' : ''}`}>
            {!collapsed && (
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-lg animate-pulse">
                  <FiImage className="text-white text-xl" />
                </div>
                <div>
                  <h2 className="text-white font-bold text-lg bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent">
                    Media Admin
                  </h2>
                  <p className="text-blue-300 text-xs">Shiv Pratap Multistate</p>
                </div>
              </div>
            )}
            
            {collapsed && (
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-lg">
                <FiImage className="text-white text-xl" />
              </div>
            )}
            
            <button
              onClick={isMobile ? handleMobileMenuToggle : toggleSidebar}
              className="w-9 h-9 rounded-lg bg-blue-800/30 hover:bg-blue-700/50 flex items-center justify-center text-blue-300 hover:text-white transition-all duration-200 hover:scale-105 active:scale-95 border border-blue-700/30"
              style={{
                backdropFilter: 'blur(10px)'
              }}
            >
              {collapsed ? <FiMenu size={18} /> : <FiX size={18} />}
            </button>
          </div>
        </div>

        {/* Menu Items */}
        <div className="flex-1 overflow-y-auto py-4 px-3 scrollbar-thin scrollbar-thumb-blue-700 scrollbar-track-transparent">
          {menuSections.map((section, sectionIndex) => (
            <div key={sectionIndex} className="mb-6">
              {!collapsed && (
                <div className="px-3 mb-3">
                  <h3 className="text-xs font-semibold text-blue-300 uppercase tracking-wider bg-blue-900/30 inline-block px-3 py-1 rounded-full">
                    {section.title}
                  </h3>
                </div>
              )}
              
              <div className="space-y-1">
                {section.items.map((item, itemIndex) => {
                  const Icon = item.icon;
                  const isActive = location.pathname === item.path;
                  const isHovered = hoveredItem === `${sectionIndex}-${itemIndex}`;
                  
                  return (
                    <div
                      key={itemIndex}
                      className={`relative group ${collapsed ? 'flex justify-center' : ''}`}
                      onMouseEnter={() => setHoveredItem(`${sectionIndex}-${itemIndex}`)}
                      onMouseLeave={() => setHoveredItem(null)}
                    >
                      {/* Active Indicator */}
                      {isActive && !collapsed && (
                        <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-blue-400 to-purple-400 rounded-r-full"></div>
                      )}
                      
                      {/* Menu Item */}
                      <button
                        onClick={() => {
                          navigate(item.path);
                          if (isMobile) {
                            setMobileMenuOpen(false);
                          }
                        }}
                        className={`w-full flex items-center transition-all duration-200 ${
                          collapsed 
                            ? 'justify-center p-3 rounded-xl' 
                            : 'px-4 py-3 rounded-lg mx-2'
                        } ${
                          isActive 
                            ? 'bg-gradient-to-r from-blue-900/40 to-purple-900/30 shadow-inner border border-blue-700/30' 
                            : 'hover:bg-blue-900/20 border border-transparent hover:border-blue-800/30'
                        }`}
                        style={{
                          backdropFilter: 'blur(10px)',
                          transform: isHovered && !isActive ? 'translateX(4px)' : 'translateX(0)'
                        }}
                      >
                        {/* Icon with gradient background */}
                        <div 
                          className={`flex-shrink-0 w-9 h-9 rounded-lg flex items-center justify-center shadow-md transition-all duration-300 ${
                            isActive 
                              ? `bg-gradient-to-br ${item.gradient} shadow-lg scale-110 ring-2 ring-white/20` 
                              : 'bg-blue-800/30 group-hover:scale-110 group-hover:bg-gradient-to-br group-hover:from-blue-700/50 group-hover:to-purple-700/50'
                          }`}
                        >
                          <Icon 
                            className={`transition-colors duration-200 ${
                              isActive ? 'text-white' : 'text-blue-300 group-hover:text-white'
                            }`} 
                            size={18} 
                          />
                        </div>
                        
                        {/* Label */}
                        {!collapsed && (
                          <div className="ml-3 flex-1 text-left">
                            <span className={`font-medium transition-colors duration-200 ${
                              isActive 
                                ? 'text-white' 
                                : 'text-blue-200 group-hover:text-white'
                            }`}>
                              {item.label}
                            </span>
                          </div>
                        )}
                        
                        {/* Active/Expand Indicator */}
                        {!collapsed && (
                          <div className={`transition-all duration-300 ${
                            isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                          }`}>
                            <FiChevronRight className="text-blue-300" size={16} />
                          </div>
                        )}
                      </button>
                      
                      {/* Tooltip for collapsed state */}
                      {collapsed && (
                        <div className="absolute left-full ml-2 px-3 py-2 bg-blue-900 text-white text-sm rounded-lg shadow-xl opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-50 border border-blue-700">
                          {item.label}
                          <div className="absolute -left-1 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-blue-900 rotate-45 border-l border-b border-blue-700"></div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Quick Actions & Logout */}
        <div 
          className="px-4 py-4 border-t border-blue-800/50"
          style={{
            background: 'linear-gradient(90deg, rgba(26, 26, 46, 0.9) 0%, rgba(22, 33, 62, 0.9) 100%)',
            backdropFilter: 'blur(10px)'
          }}
        >
          {/* Marquee Text Editor */}
          {!collapsed && (
            <div className="mb-4">
              <div className="bg-blue-900/30 rounded-lg p-3 border border-blue-700/30">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-semibold text-blue-300 uppercase tracking-wider">
                    📢 Announcement
                  </span>
                  <button
                    onClick={() => setIsEditingMarquee(!isEditingMarquee)}
                    className="text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    <FiEdit3 size={14} />
                  </button>
                </div>
                
                {isEditingMarquee ? (
                  <div className="space-y-2">
                    <textarea
                      value={marqueeText}
                      onChange={(e) => setMarqueeText(e.target.value)}
                      placeholder="Enter announcement text..."
                      className="w-full px-2 py-1 text-xs bg-blue-800/50 border border-blue-600/30 rounded text-white placeholder-blue-400 focus:outline-none focus:border-blue-500 resize-none"
                      rows="2"
                      maxLength="200"
                    />
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-blue-400">
                        {marqueeText.length}/200
                      </span>
                      <div className="flex space-x-1">
                        <button
                          onClick={() => {
                            setMarqueeText('');
                          }}
                          className="px-2 py-1 text-xs bg-blue-700/50 hover:bg-blue-700/70 text-blue-300 rounded transition-colors"
                        >
                          Reset
                        </button>
                        <button
                          id="save-marquee-btn"
                          onClick={saveMarqueeText}
                          disabled={loading}
                          className="px-2 py-1 text-xs bg-blue-600 hover:bg-blue-700 text-white rounded transition-colors disabled:opacity-50"
                        >
                          {loading ? '...' : 'Save'}
                        </button>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="text-xs text-blue-200 truncate">
                    {marqueeText || 'Click edit to add announcement'}
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Logout Button */}
          <div className={`${collapsed ? 'flex justify-center' : ''}`}>
            <button
              onClick={() => {
                handleLogout();
                if (isMobile) {
                  setMobileMenuOpen(false);
                }
              }}
              className={`group flex items-center justify-center transition-all duration-200 ${
                collapsed 
                  ? 'w-12 h-12 rounded-xl' 
                  : 'w-full px-4 py-3 rounded-lg space-x-3'
              } bg-gradient-to-r from-red-600/20 to-pink-600/20 hover:from-red-600/30 hover:to-pink-600/30 border border-red-700/30 hover:border-red-600/50`}
              style={{ backdropFilter: 'blur(10px)' }}
            >
              <div className={`flex items-center justify-center transition-all duration-300 ${
                collapsed ? '' : 'group-hover:rotate-12'
              }`}>
                <FiLogOut 
                  className={`transition-colors duration-200 ${
                    collapsed ? 'text-red-400' : 'text-red-400 group-hover:text-red-300'
                  }`} 
                  size={collapsed ? 20 : 18} 
                />
              </div>
              
              {!collapsed && (
                <span className="text-red-400 group-hover:text-red-300 font-medium flex-1 text-left">
                  Logout
                </span>
              )}
              
              {collapsed && (
                <div className="absolute left-full ml-2 px-3 py-2 bg-blue-900 text-white text-sm rounded-lg shadow-xl opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap border border-blue-700">
                  Logout
                  <div className="absolute -left-1 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-blue-900 rotate-45 border-l border-b border-blue-700"></div>
                </div>
              )}
            </button>
          </div>
        </div>

        {/* Custom scrollbar styles */}
        <style jsx>{`
          .scrollbar-thin::-webkit-scrollbar {
            width: 4px;
          }
          .scrollbar-thin::-webkit-scrollbar-track {
            background: transparent;
          }
          .scrollbar-thin::-webkit-scrollbar-thumb {
            background-color: rgba(59, 130, 246, 0.5);
            border-radius: 20px;
          }
          .scrollbar-thin::-webkit-scrollbar-thumb:hover {
            background-color: rgba(96, 165, 250, 0.8);
          }
          
          /* Custom animations */
          @keyframes float {
            0% { transform: translateY(0px); }
            50% { transform: translateY(-5px); }
            100% { transform: translateY(0px); }
          }
          
          .animate-float {
            animation: float 3s ease-in-out infinite;
          }
        `}</style>
      </div>
    </>
  );
};

export default AdminSidebar;