import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  FaSignInAlt, 
  FaEnvelope, 
  FaLock, 
  FaEye, 
  FaEyeSlash,
  FaShieldAlt,
  FaUserPlus,
  FaCheckCircle,
  FaArrowLeft
} from 'react-icons/fa';
import { database, ref, get, set, push } from '../firebase';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [isRegisterMode, setIsRegisterMode] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    
    setLoading(true);
    setError('');

    try {
      if (!email || !password) {
        throw new Error('Please enter both email and password');
      }

      const adminRef = ref(database, 'shivpratapmultistate/Admin');
      const snapshot = await get(adminRef);

      if (!snapshot.exists()) {
        throw new Error('Account not found');
      }

      const adminData = snapshot.val();
      let foundUser = null;
      let foundUserId = null;

      for (const userId in adminData) {
        const row = adminData?.[userId];
        const rowEmail = row?.email;
        const rowPassword = row?.password;

        const emailMatches =
          typeof rowEmail === 'string' && rowEmail.toLowerCase() === email.toLowerCase();
        const passwordMatches = typeof rowPassword === 'string' && rowPassword === password;

        if (emailMatches && passwordMatches) {
          foundUser = row;
          foundUserId = userId;
          break;
        }
      }

      if (!foundUser) {
        throw new Error('Invalid email or password');
      }

      const updateData = {
        ...foundUser,
        lastLogin: new Date().toISOString()
      };
      await set(ref(database, `shivpratapmultistate/Admin/${foundUserId}`), updateData);

      // Store login state
      localStorage.setItem('isLoggedIn', 'true');
      localStorage.setItem('adminEmail', foundUser.email || email);
      localStorage.setItem('adminName', foundUser.email?.split('@')[0] || 'Administrator');
      localStorage.setItem('adminUid', foundUserId);

      if (rememberMe) {
        localStorage.setItem('rememberedEmail', email);
      }

      // Add success animation before navigation
      setSuccessMessage('Login successful! Redirecting...');
      setTimeout(() => {
        navigate('/admin-dashboard');
      }, 1500);
      
    } catch (err) {
      let errorMessage = 'Login failed. Please try again.';
      
      if (err.message === 'Account not found') {
        errorMessage = 'Account not found';
      } else if (err.message === 'Invalid email or password') {
        errorMessage = 'Invalid email or password';
      } else if (err.message) {
        errorMessage = err.message;
      }
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccessMessage('');

    try {
      if (!email || !password) {
        throw new Error('Please enter both email and password');
      }

      if (!email.includes('@') || !email.includes('.')) {
        throw new Error('Please enter a valid email address');
      }

      if (password.length < 6) {
        throw new Error('Password must be at least 6 characters long');
      }

      const adminRef = ref(database, 'shivpratapmultistate/Admin');
      const snapshot = await get(adminRef);

      if (snapshot.exists()) {
        const adminData = snapshot.val();
        for (const userId in adminData) {
          if (adminData[userId] && adminData[userId].email && 
              adminData[userId].email.toLowerCase() === email.toLowerCase()) {
            throw new Error('Email already registered. Please use a different email.');
          }
        }
      }

      const userData = {
        email: email,
        password: password,
        createdAt: new Date().toISOString(),
        lastLogin: null,
        status: 'active'
      };

      const newRef = await push(ref(database, 'shivpratapmultistate/Admin'));
      await set(newRef, { ...userData, uid: newRef.key });

      setSuccessMessage('Registration successful! You can now login.');
      
      setTimeout(() => {
        setEmail('');
        setPassword('');
        setIsRegisterMode(false);
        setSuccessMessage('');
      }, 2000);

    } catch (err) {
      let errorMessage = 'Registration failed. Please try again.';
      
      if (err.message) {
        errorMessage = err.message;
      }
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  const containerStyle = {
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)',
    minHeight: '100vh',
    position: 'relative',
    // Removed overflow: hidden to allow scrolling on mobile if needed
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row relative overflow-x-hidden overflow-y-auto md:overflow-hidden" style={containerStyle}>
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-48 h-48 md:w-72 md:h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute top-0 right-1/4 w-48 h-48 md:w-72 md:h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-1/3 w-48 h-48 md:w-72 md:h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      {/* Main Content - Centered */}
      <div className="w-full flex items-center justify-center p-4 md:p-8 relative z-10 flex-grow">
        <div className="w-full max-w-md">
          {/* Header & Logo - REMOVED */}
          {/* <div className="text-center mb-6 md:mb-8 mt-4 md:mt-0">
            <div className="flex items-center justify-center mb-4 md:mb-6">
              <div className="relative">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-white/30 to-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center mr-3 md:mr-4 shadow-lg border border-white/20">
                  <FaBuilding className="text-2xl md:text-3xl" />
                </div>
                <div className="absolute -top-2 -right-2 w-5 h-5 md:w-6 md:h-6 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                  <FaKey className="w-2.5 h-2.5 md:w-3 md:h-3" />
                </div>
              </div>
            </div>
          </div> */}

          {/* Login Card */}
          <div className="bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-xl rounded-2xl md:rounded-3xl p-6 md:p-8 shadow-2xl border border-white/20">
            {/* Header */}
            <div className="text-center mb-6 md:mb-8 relative">
              {isRegisterMode && (
                <button
                  onClick={() => {
                    setIsRegisterMode(false);
                    setError('');
                    setSuccessMessage('');
                  }}
                  className="absolute left-0 top-1/2 transform -translate-y-1/2 text-white/70 hover:text-white transition-colors p-2 rounded-full hover:bg-white/10"
                >
                  <FaArrowLeft />
                </button>
              )}
              
              <div className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-xl md:rounded-2xl mb-4 shadow-lg animate-float">
                {isRegisterMode ? (
                  <FaUserPlus className="w-6 h-6 md:w-8 md:h-8 text-white" />
                ) : (
                  <FaShieldAlt className="w-6 h-6 md:w-8 md:h-8 text-white" />
                )}
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                {isRegisterMode ? 'Create Account' : 'Welcome Back'}
              </h2>
              <p className="text-white/70 text-sm md:text-base">
                {isRegisterMode ? 'Register new admin account' : 'Sign in to continue to dashboard'}
              </p>
            </div>

            {/* Messages */}
            {error && (
              <div className="mb-6 p-3 md:p-4 bg-gradient-to-r from-red-500/20 to-red-600/20 border border-red-500/30 rounded-xl backdrop-blur-sm animate-fadeIn">
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-red-500/30 flex items-center justify-center mr-3 flex-shrink-0">
                    <span className="text-red-200">!</span>
                  </div>
                  <p className="text-red-200 text-sm">{error}</p>
                </div>
              </div>
            )}

            {successMessage && (
              <div className="mb-6 p-3 md:p-4 bg-gradient-to-r from-green-500/20 to-green-600/20 border border-green-500/30 rounded-xl backdrop-blur-sm animate-fadeIn">
                <div className="flex items-center">
                  <FaCheckCircle className="text-green-300 mr-3 flex-shrink-0" />
                  <p className="text-green-200 text-sm">{successMessage}</p>
                </div>
              </div>
            )}

            {/* Form */}
            <form onSubmit={isRegisterMode ? handleRegister : handleLogin}>
              <div className="space-y-4 md:space-y-6">
                {/* Email Field */}
                <div className="group">
                  <label className="block text-white/90 mb-2 text-sm font-semibold tracking-wide">
                    <div className="flex items-center">
                      <FaEnvelope className="mr-2 text-blue-300" />
                      Email Address
                    </div>
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="admin@shivpratap.com"
                      className="w-full px-4 py-3 md:px-5 md:py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-blue-400 focus:ring-4 focus:ring-blue-500/20 transition-all duration-300 group-hover:border-white/30 text-sm md:text-base"
                      required
                      autoComplete="email"
                    />
                  </div>
                </div>

                {/* Password Field */}
                <div className="group">
                  <label className="block text-white/90 mb-2 text-sm font-semibold tracking-wide">
                    <div className="flex items-center">
                      <FaLock className="mr-2 text-purple-300" />
                      Password
                    </div>
                  </label>
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Enter your password"
                      className="w-full px-4 py-3 md:px-5 md:py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-blue-400 focus:ring-4 focus:ring-blue-500/20 transition-all duration-300 group-hover:border-white/30 text-sm md:text-base"
                      required
                      autoComplete="current-password"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 p-2 text-white/60 hover:text-white transition-colors hover:bg-white/10 rounded-lg"
                    >
                      {showPassword ? <FaEyeSlash /> : <FaEye />}
                    </button>
                  </div>
                </div>

                {/* Remember Me & Forgot Password */}
                <div className="flex justify-between items-center text-sm">
                  <label className="flex items-center cursor-pointer group">
                    <div className="relative">
                      <input
                        type="checkbox"
                        checked={rememberMe}
                        onChange={(e) => setRememberMe(e.target.checked)}
                        className="sr-only"
                      />
                      <div className={`w-5 h-5 rounded border-2 ${rememberMe ? 'bg-blue-500 border-blue-500' : 'border-white/30 group-hover:border-white/50'} transition-all duration-300 flex items-center justify-center`}>
                        {rememberMe && (
                          <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        )}
                      </div>
                    </div>
                    <span className="ml-2 text-white/70 group-hover:text-white transition-colors">
                      Remember me
                    </span>
                  </label>
                  <button
                    type="button"
                    className="text-blue-300 hover:text-blue-200 transition-colors font-medium hover:underline"
                    onClick={() => {/* Add forgot password logic */}}
                  >
                    Forgot Password?
                  </button>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3 md:py-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:from-blue-700 hover:via-purple-700 hover:to-pink-700 text-white font-bold rounded-xl shadow-lg transition-all duration-300 transform hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:transform-none flex items-center justify-center group relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                  {loading ? (
                    <div className="flex items-center">
                      <div className="w-6 h-6 border-3 border-white border-t-transparent rounded-full animate-spin mr-3"></div>
                      <span>{isRegisterMode ? 'Creating Account...' : 'Signing In...'}</span>
                    </div>
                  ) : (
                    <>
                      {isRegisterMode ? (
                        <>
                          <FaUserPlus className="mr-3 text-lg" />
                          <span className="text-lg">Create Account</span>
                        </>
                      ) : (
                        <>
                          <FaSignInAlt className="mr-3 text-lg" />
                          <span className="text-lg">Sign In to Dashboard</span>
                        </>
                      )}
                    </>
                  )}
                </button>
              </div>
            </form>

            {/* Security Badge */}
            <div className="mt-6 md:mt-8 pt-6 border-t border-white/10">
              <div className="flex items-center justify-center text-white/50 text-xs md:text-sm">
                <FaShieldAlt className="mr-2 text-green-400" />
                <span className="font-medium">256-bit SSL Encryption</span>
                {/* <div className="mx-3 w-1 h-1 bg-white/30 rounded-full"></div>
                <span>GDPR Compliant</span> */}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Inline Styles */}
      <style jsx>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
          100% { transform: translateY(0px); }
        }
        
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-blob {
          animation: blob 7s infinite;
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        
        input::placeholder {
          transition: opacity 0.3s ease;
        }
        
        input:focus::placeholder {
          opacity: 0.5;
        }
        
        /* Custom scrollbar */
        ::-webkit-scrollbar {
          width: 8px;
        }
        
        ::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 4px;
        }
        
        ::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.3);
          border-radius: 4px;
        }
        
        ::-webkit-scrollbar-thumb:hover {
          background: rgba(255, 255, 255, 0.5);
        }
      `}</style>
    </div>
  );
};

export default Login;