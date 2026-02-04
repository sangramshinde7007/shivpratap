import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth, database, createUserWithEmailAndPassword, ref, set } from '../../firebase';
import { toast } from 'react-toastify';
import { 
  FaUserShield, 
  FaEnvelope, 
  FaLock, 
  FaPhone, 
  FaUserPlus, 
  FaEye, 
  FaEyeSlash,
  FaArrowLeft,
  FaCheck,
  FaShieldAlt
} from 'react-icons/fa';

const AdminRegister = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    mobileNumber: '',
    password: '',
    confirmPassword: ''
  });
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [errors, setErrors] = useState({});

  // Password strength indicators
  const [passwordStrength, setPasswordStrength] = useState({
    hasMinLength: false,
    hasUpperCase: false,
    hasLowerCase: false,
    hasNumber: false,
    hasSpecialChar: false
  });

  const validateForm = () => {
    const newErrors = {};

    // Email validation
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    // Mobile validation
    if (!formData.mobileNumber) {
      newErrors.mobileNumber = 'Mobile number is required';
    } else if (!/^[0-9]{10}$/.test(formData.mobileNumber)) {
      newErrors.mobileNumber = 'Please enter a valid 10-digit mobile number';
    }

    // Password validation
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters';
    } else {
      // Update password strength
      const hasMinLength = formData.password.length >= 8;
      const hasUpperCase = /[A-Z]/.test(formData.password);
      const hasLowerCase = /[a-z]/.test(formData.password);
      const hasNumber = /[0-9]/.test(formData.password);
      const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(formData.password);

      setPasswordStrength({
        hasMinLength,
        hasUpperCase,
        hasLowerCase,
        hasNumber,
        hasSpecialChar
      });

      if (!(hasUpperCase && hasLowerCase && hasNumber && hasSpecialChar)) {
        newErrors.password = 'Password must include uppercase, lowercase, number & special character';
      }
    }

    // Confirm password validation
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Clear error for this field
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }

    // Update password strength if password field changed
    if (name === 'password') {
      const hasMinLength = value.length >= 8;
      const hasUpperCase = /[A-Z]/.test(value);
      const hasLowerCase = /[a-z]/.test(value);
      const hasNumber = /[0-9]/.test(value);
      const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(value);

      setPasswordStrength({
        hasMinLength,
        hasUpperCase,
        hasLowerCase,
        hasNumber,
        hasSpecialChar
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      toast.error('Please fix the errors in the form');
      return;
    }

    setLoading(true);
    
    try {
      // Create user in Firebase Authentication
      const userCredential = await createUserWithEmailAndPassword(
        auth, 
        formData.email, 
        formData.password
      );
      
      const user = userCredential.user;
      
      // Store user data in Firebase Realtime Database
      const userData = {
        email: formData.email,
        mobileNumber: formData.mobileNumber,
        role: 'admin',
        createdAt: new Date().toISOString(),
        uid: user.uid,
        lastLogin: null,
        status: 'active'
      };
      
      // Store under shivpratapmultistate/Admin node
      await set(
        ref(database, `shivpratapmultistate/Admin/${user.uid}`), 
        userData
      );
      
      // Also store in users list for easy querying
      await set(
        ref(database, `shivpratapmultistate/AdminList/${user.uid}`), 
        {
          email: formData.email,
          role: 'admin'
        }
      );
      
      toast.success('Admin registered successfully!');
      
      // Reset form
      setFormData({
        email: '',
        mobileNumber: '',
        password: '',
        confirmPassword: ''
      });
      
      // Redirect to login or dashboard
      setTimeout(() => {
        navigate('/login');
      }, 2000);
      
    } catch (error) {
      console.error('Registration error:', error);
      
      // Handle specific Firebase errors
      let errorMessage = 'Registration failed. Please try again.';
      
      switch (error.code) {
        case 'auth/email-already-in-use':
          errorMessage = 'Email is already registered. Please use a different email.';
          break;
        case 'auth/invalid-email':
          errorMessage = 'Invalid email address. Please enter a valid email.';
          break;
        case 'auth/weak-password':
          errorMessage = 'Password is too weak. Please choose a stronger password.';
          break;
        case 'auth/operation-not-allowed':
          errorMessage = 'Email/Password authentication is not enabled. Please contact administrator.';
          break;
        case 'auth/network-request-failed':
          errorMessage = 'Network error. Please check your internet connection.';
          break;
        case 'auth/too-many-requests':
          errorMessage = 'Too many attempts. Please try again later.';
          break;
        case 'auth/user-disabled':
          errorMessage = 'This account has been disabled. Please contact support.';
          break;
        default:
          errorMessage = `Registration failed: ${error.message}`;
      }
      
      toast.error(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  const calculatePasswordStrength = () => {
    const checks = Object.values(passwordStrength);
    const passedChecks = checks.filter(Boolean).length;
    return (passedChecks / checks.length) * 100;
  };

  const getStrengthColor = () => {
    const strength = calculatePasswordStrength();
    if (strength <= 40) return 'bg-red-500';
    if (strength <= 70) return 'bg-yellow-500';
    return 'bg-green-500';
  };

  const backgroundStyle = {
    background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 25%, #0f3460 50%, #16213e 75%, #1a1a2e 100%)',
    minHeight: '100vh'
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4" style={backgroundStyle}>
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        @keyframes pulse-glow {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.7; }
        }
        
        .float-animation {
          animation: float 3s ease-in-out infinite;
        }
        
        .pulse-glow {
          animation: pulse-glow 2s ease-in-out infinite;
        }
      `}</style>

      <div className="w-full max-w-4xl">
        <button
          onClick={() => navigate(-1)}
          className="mb-6 flex items-center text-white/70 hover:text-white transition-colors"
        >
          <FaArrowLeft className="mr-2" />
          Back to Login
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column - Illustration/Info */}
          <div className="flex flex-col justify-center">
            <div className="text-center lg:text-left mb-8">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl mb-6 float-animation">
                <FaUserShield className="w-10 h-10 text-white" />
              </div>
              <h1 className="text-4xl font-bold text-white mb-4">
                Create Admin Account
              </h1>
              <p className="text-white/70 text-lg">
                Register new administrators with secure access to the Shiv Pratap Multistate dashboard
              </p>
            </div>

            <div className="space-y-4">
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                <h3 className="text-white font-semibold mb-3 flex items-center">
                  <FaShieldAlt className="mr-2 text-blue-400" />
                  Security Features
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-center text-white/70">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                    End-to-end encrypted communication
                  </li>
                  <li className="flex items-center text-white/70">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                    Secure password requirements
                  </li>
                  <li className="flex items-center text-white/70">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                    Role-based access control
                  </li>
                  <li className="flex items-center text-white/70">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                    Activity logging & monitoring
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-r from-blue-500/20 to-purple-600/20 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                <h3 className="text-white font-semibold mb-3">Privileges</h3>
                <p className="text-white/70">
                  Admin users can manage users, view analytics, update content, and monitor system activities with full administrative privileges.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Registration Form */}
          <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10 shadow-2xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Email */}
              <div>
                <label className="block text-white/90 mb-2 text-sm font-medium flex items-center">
                  <FaEnvelope className="mr-2" />
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="admin@shivpratapmultistate.com"
                  className={`w-full px-4 py-3 bg-white/10 backdrop-blur-sm border ${
                    errors.email ? 'border-red-500/50' : 'border-white/20'
                  } rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-blue-400 transition-all duration-300`}
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-400">{errors.email}</p>
                )}
              </div>

              {/* Mobile Number */}
              <div>
                <label className="block text-white/90 mb-2 text-sm font-medium flex items-center">
                  <FaPhone className="mr-2" />
                  Mobile Number
                </label>
                <div className="flex">
                  <div className="flex items-center px-4 bg-white/10 backdrop-blur-sm border border-white/20 border-r-0 rounded-l-lg">
                    <span className="text-white/70">+91</span>
                  </div>
                  <input
                    type="tel"
                    name="mobileNumber"
                    value={formData.mobileNumber}
                    onChange={handleInputChange}
                    placeholder="9876543210"
                    maxLength="10"
                    className={`flex-1 px-4 py-3 bg-white/10 backdrop-blur-sm border ${
                      errors.mobileNumber ? 'border-red-500/50' : 'border-white/20'
                    } rounded-r-lg text-white placeholder-white/50 focus:outline-none focus:border-blue-400 transition-all duration-300`}
                  />
                </div>
                {errors.mobileNumber && (
                  <p className="mt-1 text-sm text-red-400">{errors.mobileNumber}</p>
                )}
              </div>

              {/* Password */}
              <div>
                <label className="block text-white/90 mb-2 text-sm font-medium flex items-center">
                  <FaLock className="mr-2" />
                  Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    placeholder="Create a strong password"
                    className={`w-full px-4 py-3 pr-12 bg-white/10 backdrop-blur-sm border ${
                      errors.password ? 'border-red-500/50' : 'border-white/20'
                    } rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-blue-400 transition-all duration-300`}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2"
                  >
                    {showPassword ? (
                      <FaEyeSlash className="text-white/60 hover:text-white transition-colors" />
                    ) : (
                      <FaEye className="text-white/60 hover:text-white transition-colors" />
                    )}
                  </button>
                </div>
                
                {/* Password Strength Meter */}
                {formData.password && (
                  <div className="mt-3">
                    <div className="flex justify-between mb-1">
                      <span className="text-xs text-white/70">Password Strength</span>
                      <span className="text-xs text-white/70">{Math.round(calculatePasswordStrength())}%</span>
                    </div>
                    <div className="h-1 bg-white/10 rounded-full overflow-hidden">
                      <div 
                        className={`h-full ${getStrengthColor()} transition-all duration-500`}
                        style={{ width: `${calculatePasswordStrength()}%` }}
                      ></div>
                    </div>
                    
                    {/* Password Requirements */}
                    <div className="grid grid-cols-2 gap-2 mt-3">
                      {Object.entries(passwordStrength).map(([key, value]) => (
                        <div key={key} className="flex items-center">
                          <div className={`w-4 h-4 rounded-full flex items-center justify-center mr-2 ${
                            value ? 'bg-green-500' : 'bg-white/20'
                          }`}>
                            {value && <FaCheck className="w-2 h-2 text-white" />}
                          </div>
                          <span className={`text-xs ${
                            value ? 'text-green-400' : 'text-white/50'
                          }`}>
                            {key.replace('has', '').replace(/([A-Z])/g, ' $1').trim()}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                
                {errors.password && (
                  <p className="mt-1 text-sm text-red-400">{errors.password}</p>
                )}
              </div>

              {/* Confirm Password */}
              <div>
                <label className="block text-white/90 mb-2 text-sm font-medium">
                  Confirm Password
                </label>
                <div className="relative">
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    placeholder="Re-enter your password"
                    className={`w-full px-4 py-3 pr-12 bg-white/10 backdrop-blur-sm border ${
                      errors.confirmPassword ? 'border-red-500/50' : 'border-white/20'
                    } rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-blue-400 transition-all duration-300`}
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2"
                  >
                    {showConfirmPassword ? (
                      <FaEyeSlash className="text-white/60 hover:text-white transition-colors" />
                    ) : (
                      <FaEye className="text-white/60 hover:text-white transition-colors" />
                    )}
                  </button>
                </div>
                {errors.confirmPassword && (
                  <p className="mt-1 text-sm text-red-400">{errors.confirmPassword}</p>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full py-4 px-6 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold rounded-xl shadow-xl transition-all duration-300 transform hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:transform-none flex items-center justify-center pulse-glow"
              >
                {loading ? (
                  <div className="flex items-center">
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-3"></div>
                    Creating Admin Account...
                  </div>
                ) : (
                  <>
                    <FaUserPlus className="mr-3" />
                    Register Admin Account
                  </>
                )}
              </button>

              {/* Terms & Conditions */}
              <div className="text-center pt-4 border-t border-white/10">
                <p className="text-white/50 text-sm">
                  By registering, you agree to our{' '}
                  <button type="button" className="text-blue-400 hover:text-blue-300 transition-colors">
                    Terms of Service
                  </button>{' '}
                  and{' '}
                  <button type="button" className="text-blue-400 hover:text-blue-300 transition-colors">
                    Privacy Policy
                  </button>
                </p>
              </div>
            </form>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-8 text-center">
          <p className="text-white/30 text-sm">
            Shiv Pratap Multistate Admin Portal v1.0 • Secure Registration System
          </p>
        </div>
      </div>
    </div>
  );
};

export default AdminRegister;