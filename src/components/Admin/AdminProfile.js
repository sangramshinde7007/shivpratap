import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiMail, FiEdit2, FiSave, FiX, FiArrowLeft, FiShield, FiLock } from 'react-icons/fi';
import { FaCrown } from 'react-icons/fa';
import { database, ref, get, set } from '../../firebase';

const AdminProfile = () => {
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState('');
  const [adminUid, setAdminUid] = useState('');
  
  const [profileData, setProfileData] = useState({
    email: '',
    password: ''
  });

  const [tempData, setTempData] = useState({ ...profileData });

  useEffect(() => {
    const fetchAdminData = async () => {
      try {
        const adminEmail = localStorage.getItem('adminEmail');
        const adminUid = localStorage.getItem('adminUid');
        
        if (adminEmail && adminUid) {
          setAdminUid(adminUid);
          
          // Fetch admin data from Realtime Database
          const adminRef = ref(database, `shivpratapmultistate/Admin/${adminUid}`);
          const snapshot = await get(adminRef);
          
          if (snapshot.exists()) {
            const adminData = snapshot.val();
            setProfileData({
              email: adminData.email || '',
              password: adminData.password || ''
            });
            setTempData({
              email: adminData.email || '',
              password: adminData.password || ''
            });
          }
        } else {
          // If no admin data in localStorage, redirect to login
          navigate('/login');
        }
      } catch (error) {
        console.error('Error fetching admin data:', error);
        setMessage('Error loading profile data');
        setMessageType('error');
      }
    };

    fetchAdminData();
  }, [navigate]);

  const handleEdit = () => {
    setTempData({ ...profileData });
    setIsEditing(true);
    setMessage('');
  };

  const handleSave = async () => {
    setLoading(true);
    setMessage('');
    
    try {
      if (!adminUid) {
        setMessage('Admin user not found');
        setMessageType('error');
        setLoading(false);
        return;
      }

      // Validate email
      if (!tempData.email || !tempData.email.includes('@')) {
        setMessage('Please enter a valid email address');
        setMessageType('error');
        setLoading(false);
        return;
      }

      // Validate password
      if (!tempData.password || tempData.password.length < 6) {
        setMessage('Password must be at least 6 characters long');
        setMessageType('error');
        setLoading(false);
        return;
      }

      // Update admin data in Realtime Database
      const adminRef = ref(database, `shivpratapmultistate/Admin/${adminUid}`);
      
      // First, get current data to preserve other fields
      const snapshot = await get(adminRef);
      if (snapshot.exists()) {
        const currentData = snapshot.val();
        const updatedData = {
          ...currentData,
          email: tempData.email,
          password: tempData.password,
          updatedAt: new Date().toISOString()
        };
        
        await set(adminRef, updatedData);
        
        // Update localStorage
        localStorage.setItem('adminEmail', tempData.email);
        
        // Update state
        setProfileData({ 
          email: tempData.email,
          password: tempData.password
        });
        setTempData({ 
          email: tempData.email,
          password: tempData.password
        });
        
        setIsEditing(false);
        setMessage('Profile updated successfully!');
        setMessageType('success');
      } else {
        setMessage('Admin user not found in database');
        setMessageType('error');
      }
    } catch (error) {
      setMessage(`Error updating profile: ${error.message}`);
      setMessageType('error');
    } finally {
      setLoading(false);
    }
  };

  const handleCancel = () => {
    setTempData({ ...profileData });
    setIsEditing(false);
    setMessage('');
  };

  const handleInputChange = (field, value) => {
    setTempData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleLogout = () => {
    // Clear localStorage
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('adminEmail');
    localStorage.removeItem('adminName');
    localStorage.removeItem('adminUid');
    
    // Navigate to login
    navigate('/login');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-4 lg:p-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-xl lg:rounded-2xl shadow-lg p-4 lg:p-6 mb-4 lg:mb-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3 lg:gap-4">
              <button
                onClick={() => navigate('/admin-dashboard')}
                className="w-10 h-10 rounded-xl bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
              >
                <FiArrowLeft className="text-gray-600" />
              </button>
              <div>
                <h1 className="text-xl lg:text-2xl font-bold text-gray-800">Profile Settings</h1>
                <p className="text-gray-500 text-sm lg:text-base">Manage your account information</p>
              </div>
            </div>
            <div className="flex items-center gap-2 lg:gap-3">
              {!isEditing ? (
                <button
                  onClick={handleEdit}
                  className="flex items-center gap-2 px-3 lg:px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl transition-colors text-sm lg:text-base"
                >
                  <FiEdit2 />
                  <span className="hidden sm:inline">Edit Profile</span>
                  <span className="sm:hidden">Edit</span>
                </button>
              ) : (
                <>
                  <button
                    onClick={handleSave}
                    disabled={loading}
                    className="flex items-center gap-2 px-3 lg:px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-xl transition-colors disabled:opacity-50 disabled:cursor-not-allowed text-sm lg:text-base"
                  >
                    <FiSave />
                    <span>{loading ? 'Saving...' : 'Save'}</span>
                  </button>
                  <button
                    onClick={handleCancel}
                    className="flex items-center gap-2 px-3 lg:px-4 py-2 bg-gray-600 hover:bg-gray-700 text-white rounded-xl transition-colors text-sm lg:text-base"
                  >
                    <FiX />
                    <span>Cancel</span>
                  </button>
                </>
              )}
            </div>
          </div>
        </div>

        {/* Message Display */}
        {message && (
          <div className={`mb-4 lg:mb-6 p-3 lg:p-4 rounded-xl ${messageType === 'success' ? 'bg-green-100 text-green-800 border border-green-200' : 'bg-red-100 text-red-800 border border-red-200'}`}>
            {message}
          </div>
        )}

        {/* Profile Card */}
        <div className="bg-white rounded-xl lg:rounded-2xl shadow-lg overflow-hidden">
          {/* Profile Header */}
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-6 lg:p-8">
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 lg:gap-6">
              <div className="relative">
                <div className="w-20 h-20 lg:w-24 lg:h-24 rounded-xl lg:rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center border-4 border-white/30">
                  <FiMail className="text-white text-3xl lg:text-4xl" />
                </div>
                <div className="absolute -bottom-2 -right-2 w-6 h-6 lg:w-8 lg:h-8 bg-green-500 rounded-full border-4 border-white flex items-center justify-center">
                  <div className="w-2 h-2 lg:w-3 lg:h-3 bg-white rounded-full"></div>
                </div>
                <div className="absolute -top-2 -right-2">
                  <FaCrown className="text-amber-400" size={16} />
                </div>
              </div>
              <div className="text-white text-center sm:text-left">
                <h2 className="text-2xl lg:text-3xl font-bold">Admin Profile</h2>
                <p className="text-white/80 text-sm lg:text-base">Administrator</p>
                <div className="flex items-center justify-center sm:justify-start gap-2 mt-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-sm text-white/80">Online</span>
                </div>
              </div>
            </div>
          </div>

          {/* Profile Content */}
          <div className="p-6 lg:p-8">
            <div className="max-w-2xl mx-auto">
              {/* Account Information */}
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-4 lg:mb-6 flex items-center gap-2">
                  <FiShield className="text-green-600" />
                  Account Information
                </h3>
                <div className="space-y-4 lg:space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-600 mb-2">Email Address</label>
                    {isEditing ? (
                      <input
                        type="email"
                        value={tempData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        className="w-full px-3 lg:px-4 py-2 lg:py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-sm lg:text-base"
                        placeholder="Enter your email"
                      />
                    ) : (
                      <div className="px-3 lg:px-4 py-2 lg:py-3 bg-gray-50 rounded-xl text-gray-800 text-sm lg:text-base">
                        {profileData.email}
                      </div>
                    )}
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-600 mb-2">Password</label>
                    {isEditing ? (
                      <input
                        type="password"
                        value={tempData.password}
                        onChange={(e) => handleInputChange('password', e.target.value)}
                        className="w-full px-3 lg:px-4 py-2 lg:py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-sm lg:text-base"
                        placeholder="Enter new password (leave blank to keep current)"
                      />
                    ) : (
                      <div className="px-3 lg:px-4 py-2 lg:py-3 bg-gray-50 rounded-xl text-gray-800 text-sm lg:text-base">
                        {profileData.password}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Logout Button */}
            <div className="mt-6 lg:mt-8 pt-6 lg:pt-8 border-t border-gray-200">
              <button
                onClick={handleLogout}
                className="w-full sm:w-auto flex items-center justify-center gap-3 px-4 lg:px-6 py-2 lg:py-3 bg-red-600 hover:bg-red-700 text-white rounded-xl transition-colors text-sm lg:text-base"
              >
                <FiX />
                <span>Logout</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminProfile;
