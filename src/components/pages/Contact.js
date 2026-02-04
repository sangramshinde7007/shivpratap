import React, { useState } from 'react';
import { 
  FaHome, FaChevronRight, FaPhoneAlt, FaEnvelope, 
  FaMapMarkerAlt, FaClock, FaBuilding, FaUser,
  FaMobileAlt, FaRegEnvelope, FaRegComments, 
  FaPaperPlane, FaFacebook,
  FaInstagram, FaYoutube, FaCheckCircle, 
  FaArrowRight
} from 'react-icons/fa';
import { useLanguage } from '../../contexts/LanguageContext';

const Contact = () => {
  const { language } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: '',
    city: '',
    subject: '',
    message: ''
  });
  const [errors, setErrors] = useState({
    name: '',
    mobile: '',
    email: '',
    city: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  
  // Color constants
  const primaryColor = '#b03462';
  const secondaryColor = '#f8f9fa';
  const darkColor = '#1a1a2e';

  // (language comes directly from context; no local selectedLanguage needed)

  // Translations for contact page
  const translations = {
    en: {
      pageTitle: 'Contact Us',
      pageSubtitle: "We're here to assist you with all your banking needs",
      headOffice: 'Head Office',
      headOfficeSubtitle: 'Shivpratap Multistate Bank',
      address: 'Address',
      phone: 'Phone',
      email: 'Email',
      workingHours: 'Working Hours',
      followUs: 'Follow Us',
      sendInquiry: 'Send Us Inquiry',
      inquirySubtitle: "We'll get back to you soon",
      fullName: 'Full Name *',
      mobileNumber: 'Mobile Number *',
      emailAddress: 'Email Address *',
      city: 'City *',
      subject: 'Subject *',
      yourMessage: 'Your Message *',
      sendMessage: 'Send Message',
      quickContact: 'Quick Contact',
      helpline: 'Helpline',
      connectWithUs: 'Connect With Us',
      thankYou: 'Thank You!',
      messageSuccess: 'Your message has been sent successfully. We\'ll respond within 24 hours.',
      home: 'Home',
      inquirySubjects: [
        'Account Opening',
        'Loan Information',
        'Credit Card',
        'Internet Banking',
        'Mobile Banking',
        'Fixed Deposit',
        'Insurance',
        'General Inquiry'
      ],
      placeholders: {
        name: 'Your full name',
        mobile: '10-digit mobile number',
        email: 'your.email@example.com',
        city: 'Your city',
        message: 'How can we help you today?',
        selectSubject: 'Enter subject'
      },
      validationErrors: {
        name: 'Please enter your full name (minimum 3 characters)',
        nameInvalid: 'Name should only contain letters and spaces',
        mobile: 'Please enter your mobile number',
        mobileInvalid: 'Please enter a valid 10-digit mobile number',
        email: 'Please enter your email address',
        emailInvalid: 'Please enter a valid email address',
        city: 'Please enter your city name',
        cityInvalid: 'City should only contain letters and spaces',
        subject: 'Please enter a subject (minimum 5 characters)',
        message: 'Please enter your message (minimum 10 characters)'
      },
      addressDetails: 'Shivpratap Gold Tower\nPower House Rd, Hanmant Bazar\nVita, Maharashtra 415311, India',
      phoneNumber: '+91 95828 37032',
      emailAddressValue: 'customercare@shivpratapmultistate.com',
      workingHoursDetails: 'Monday – Saturday: 10:00 AM – 5:00 PM\nSunday: Closed',
      headOfficeLocation: 'Vita',
      responseTime: 'Within 24 hrs',
      getInTouch: 'Get In Touch',
      contactInfo: 'Contact Information',
      sendMessageNow: 'Send Message Now',
      branches: 'Branches',
      support24: '24/7 Support'
    },
    mr: {
      pageTitle: 'आमच्याशी संपर्क साधा',
      pageSubtitle: 'आपल्या सर्व बँकिंग गरजांसाठी आम्ही तत्पर आहोत',
      headOffice: 'मुख्य कार्यालय',
      headOfficeSubtitle: 'शिवप्रताप मल्टीस्टेट बँक',
      address: 'पत्ता',
      phone: 'फोन',
      email: 'ईमेल',
      workingHours: 'कार्यकाळ',
      followUs: 'आमचे अनुसरण करा',
      sendInquiry: 'आमच्याशी चौकशी पाठवा',
      inquirySubtitle: 'आम्ही लवकरच तुमच्याशी संपर्क साधू',
      fullName: 'पूर्ण नाव *',
      mobileNumber: 'मोबाईल नंबर *',
      emailAddress: 'ईमेल पत्ता *',
      city: 'शहर *',
      subject: 'विषय *',
      yourMessage: 'तुमचा संदेश *',
      sendMessage: 'संदेश पाठवा',
      quickContact: 'त्वरित संपर्क',
      helpline: 'हेल्पलाइन',
      connectWithUs: 'आमच्याशी जोडले जावे',
      thankYou: 'धन्यवाद!',
      messageSuccess: 'तुमचा संदेश यशस्वीरित्या पाठवला गेला आहे. आम्ही २४ तासांत उत्तर देऊ.',
      home: 'होम',
      inquirySubjects: [
        'खाते उघडणे',
        'कर्ज माहिती',
        'क्रेडिट कार्ड',
        'इंटरनेट बँकिंग',
        'मोबाईल बँकिंग',
        'फिक्स्ड डिपॉजिट',
        'विमा',
        'सामान्य चौकशी'
      ],
      placeholders: {
        name: 'तुमचे पूर्ण नाव',
        mobile: '१० अंकी मोबाईल नंबर',
        email: 'your.email@example.com',
        city: 'तुमचे शहर',
        message: 'आज आपल्याला कशी मदत करू शकतो?',
        selectSubject: 'विषय निवडा'
      },
      validationErrors: {
        name: 'कृपया तुमचे पूर्ण नाव प्रविष्ट करा (किमान ३ अक्षरे)',
        nameInvalid: 'नावात फक्त अक्षरे आणि जागा असावीत',
        mobile: 'कृपया तुमचा मोबाईल नंबर प्रविष्ट करा',
        mobileInvalid: 'कृपया वैध १० अंकी मोबाईल नंबर प्रविष्ट करा',
        email: 'कृपया तुमचा ईमेल पत्ता प्रविष्ट करा',
        emailInvalid: 'कृपया वैध ईमेल पत्ता प्रविष्ट करा',
        city: 'कृपया तुमचे शहराचे नाव प्रविष्ट करा',
        cityInvalid: 'शहराच्या नावात फक्त अक्षरे आणि जागा असावीत',
        subject: 'कृपया विषय प्रविष्ट करा (किमान ५ अक्षरे)',
        message: 'कृपया तुमचा संदेश प्रविष्ट करा (किमान १० अक्षरे)'
      },
      addressDetails: 'शिवप्रताप गोल्ड टॉवर\nपावर हाउस रोड, हनमंत बाजार\nविटा, महाराष्ट्र ४१५३११, भारत',
      phoneNumber: '+९१ ९५८२८ ३७०३२',
      emailAddressValue: 'customercare@shivpratapmultistate.com',
      workingHoursDetails: 'सोमवार – शनिवार: सकाळी १०:०० – संध्याकाळी ५:००\nरविवार: बंद',
      headOfficeLocation: 'विटा',
      responseTime: '२४ तासांत',
      getInTouch: 'संपर्कात रहा',
      contactInfo: 'संपर्क माहिती',
      sendMessageNow: 'आता संदेश पाठवा',
      branches: 'शाखा',
      support24: '२४/७ समर्थन'
    }
  };

  // Get current language content
  const currentLang = language;
  const currentContent = translations[currentLang];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    let processedValue = value;
    
    // Handle different input types
    if (name === 'name' || name === 'city') {
      // Only allow letters and spaces
      processedValue = value.replace(/[^a-zA-Z\s]/g, '');
    } else if (name === 'mobile') {
      // Only allow numbers
      processedValue = value.replace(/[^0-9]/g, '');
    }
    
    setFormData(prev => ({
      ...prev,
      [name]: processedValue
    }));
    
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = currentContent.validationErrors.name;
    } else if (formData.name.trim().length < 3) {
      newErrors.name = currentContent.validationErrors.name;
    } else if (!/^[a-zA-Z\s]+$/.test(formData.name.trim())) {
      newErrors.name = currentContent.validationErrors.nameInvalid;
    }
    
    // Mobile validation
    if (!formData.mobile.trim()) {
      newErrors.mobile = currentContent.validationErrors.mobile;
    } else if (!/^[6-9]\d{9}$/.test(formData.mobile.replace(/\s/g, ''))) {
      newErrors.mobile = currentContent.validationErrors.mobileInvalid;
    }
    
    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = currentContent.validationErrors.email;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = currentContent.validationErrors.emailInvalid;
    }
    
    // City validation
    if (!formData.city.trim()) {
      newErrors.city = currentContent.validationErrors.city;
    } else if (formData.city.trim().length < 2) {
      newErrors.city = currentContent.validationErrors.city;
    } else if (!/^[a-zA-Z\s]+$/.test(formData.city.trim())) {
      newErrors.city = currentContent.validationErrors.cityInvalid;
    }
    
    // Subject validation
    if (!formData.subject.trim()) {
      newErrors.subject = currentContent.validationErrors.subject;
    } else if (formData.subject.trim().length < 5) {
      newErrors.subject = currentContent.validationErrors.subject;
    }
    
    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = currentContent.validationErrors.message;
    } else if (formData.message.trim().length < 10) {
      newErrors.message = currentContent.validationErrors.message;
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmitInquiry = async (e) => {
    e.preventDefault();
    
    // Validate form before submission
    if (!validateForm()) {
      return;
    }
    
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      console.log('Inquiry submitted:', formData);
      setIsSubmitted(true);
      setIsLoading(false);
      
      // Reset form
      setFormData({
        name: '',
        mobile: '',
        email: '',
        city: '',
        subject: '',
        message: ''
      });
      
      // Clear errors
      setErrors({
        name: '',
        mobile: '',
        email: '',
        city: '',
        subject: '',
        message: ''
      });
      
      // Hide success message after 5 seconds
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 1500);
  };

  return (
    <div className="font-sans bg-gradient-to-b from-gray-50 to-white min-h-screen relative overflow-hidden">
      
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute -top-20 -right-20 w-96 h-96 rounded-full opacity-5"
          style={{ backgroundColor: primaryColor }}
        ></div>
        <div 
          className="absolute -bottom-32 -left-32 w-80 h-80 rounded-full opacity-5"
          style={{ backgroundColor: primaryColor }}
        ></div>
      </div>

      {/* Hero Banner */}
      <section className="relative h-[420px] md:h-[480px] overflow-hidden" 
        style={{
          background: `linear-gradient(135deg, ${darkColor} 0%, #16213e 50%, ${primaryColor} 100%)`
        }}>
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1551836026-d5c2c5af78e4?auto=format&fit=crop&w=1920")',
            backgroundBlendMode: 'overlay'
          }}
        />
        
        <div className="relative h-full flex flex-col justify-center">
          <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 w-full">
            <nav className="flex items-center text-white/80 text-sm mb-8">
              <a href="/" className="flex items-center hover:text-white transition-colors duration-300">
                <FaHome className="mr-2" /> {currentContent.home}
              </a>
              <FaChevronRight className="mx-3 opacity-60" />
              <span className="font-semibold text-white">{currentContent.pageTitle}</span>
            </nav>

            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
              <div className="flex-1">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
                  {currentContent.pageTitle.split(' ').map((word, index) => (
                    <span key={index} className="inline-block mr-3 last:mr-0">
                      {word}
                    </span>
                  ))}
                </h1>
              
                <p className="text-xl md:text-2xl text-white/90 max-w-3xl leading-relaxed">
                  {currentContent.pageSubtitle}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 py-16 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Left Column - Contact Form */}
          <div className="lg:col-span-2">
            {/* Send Inquiry Form */}
            <section className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100 hover:shadow-3xl transition-shadow duration-500">
              <div 
                className="p-10 text-white relative overflow-hidden"
                style={{
                  background: `linear-gradient(135deg, ${primaryColor} 0%, #9c2956 100%)`
                }}
              >
                <div className="absolute top-0 right-0 w-40 h-40 rounded-full bg-white/10 -translate-y-20 translate-x-20"></div>
                <div className="absolute bottom-0 left-0 w-32 h-32 rounded-full bg-white/10 translate-y-16 -translate-x-16"></div>
                
                <div className="relative flex items-center">
                  <div 
                    className="w-16 h-16 rounded-xl bg-white/20 flex items-center justify-center mr-6 backdrop-blur-sm"
                    style={{ border: '2px solid rgba(255,255,255,0.3)' }}
                  >
                    <FaEnvelope className="text-3xl text-white" />
                  </div>
                  <div>
                    <h2 className="text-3xl md:text-4xl font-bold">{currentContent.sendInquiry}</h2>
                    <p className="text-white/80 mt-2">{currentContent.inquirySubtitle}</p>
                  </div>
                </div>
              </div>

              <div className="p-8 md:p-10">
                {isSubmitted && (
                  <div 
                    className="mb-8 rounded-xl p-6 flex items-center animate-fade-in"
                    style={{ 
                      backgroundColor: `${primaryColor}10`,
                      border: `2px solid ${primaryColor}30`
                    }}
                  >
                    <FaCheckCircle 
                      className="text-3xl mr-4 flex-shrink-0" 
                      style={{ color: primaryColor }}
                    />
                    <div>
                      <h3 className="font-bold text-lg" style={{ color: darkColor }}>
                        {currentContent.thankYou}
                      </h3>
                      <p style={{ color: '#555' }}>{currentContent.messageSuccess}</p>
                    </div>
                  </div>
                )}

                <form onSubmit={handleSubmitInquiry} className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <label className="block font-medium mb-3" style={{ color: darkColor }}>
                        {currentContent.fullName}
                      </label>
                      <div className="relative">
                        <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
                          <FaUser style={{ color: `${primaryColor}60` }} />
                        </div>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className={`w-full pl-12 pr-4 py-4 border rounded-xl focus:outline-none focus:border-2 transition-all duration-300 ${
                            errors.name ? 'border-red-500' : 'border-gray-300'
                          }`}
                          style={{ 
                            backgroundColor: secondaryColor,
                            focusBorderColor: errors.name ? '#ef4444' : primaryColor
                          }}
                          placeholder={currentContent.placeholders.name}
                          onKeyPress={(e) => {
                            // Only allow letters, spaces, and backspace
                            const char = String.fromCharCode(e.which);
                            if (!/^[a-zA-Z\s]$/.test(char) && e.which !== 8) {
                              e.preventDefault();
                            }
                          }}
                        />
                        {errors.name && (
                          <p className="mt-2 text-sm text-red-500">{errors.name}</p>
                        )}
                      </div>
                    </div>

                    <div>
                      <label className="block font-medium mb-3" style={{ color: darkColor }}>
                        {currentContent.mobileNumber}
                      </label>
                      <div className="relative">
                        <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
                          <FaMobileAlt style={{ color: `${primaryColor}60` }} />
                        </div>
                        <input
                          type="tel"
                          name="mobile"
                          value={formData.mobile}
                          onChange={handleInputChange}
                          required
                          maxLength={10}
                          className={`w-full pl-12 pr-4 py-4 border rounded-xl focus:outline-none focus:border-2 transition-all duration-300 ${
                            errors.mobile ? 'border-red-500' : 'border-gray-300'
                          }`}
                          style={{ 
                            backgroundColor: secondaryColor,
                            focusBorderColor: errors.mobile ? '#ef4444' : primaryColor
                          }}
                          placeholder={currentContent.placeholders.mobile}
                          onKeyPress={(e) => {
                            // Only allow numbers and backspace
                            const char = String.fromCharCode(e.which);
                            if (!/^[0-9]$/.test(char) && e.which !== 8) {
                              e.preventDefault();
                            }
                          }}
                        />
                        {errors.mobile && (
                          <p className="mt-2 text-sm text-red-500">{errors.mobile}</p>
                        )}
                      </div>
                    </div>

                    <div>
                      <label className="block font-medium mb-3" style={{ color: darkColor }}>
                        {currentContent.emailAddress}
                      </label>
                      <div className="relative">
                        <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
                          <FaRegEnvelope style={{ color: `${primaryColor}60` }} />
                        </div>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className={`w-full pl-12 pr-4 py-4 border rounded-xl focus:outline-none focus:border-2 transition-all duration-300 ${
                            errors.email ? 'border-red-500' : 'border-gray-300'
                          }`}
                          style={{ 
                            backgroundColor: secondaryColor,
                            focusBorderColor: errors.email ? '#ef4444' : primaryColor
                          }}
                          placeholder={currentContent.placeholders.email}
                        />
                        {errors.email && (
                          <p className="mt-2 text-sm text-red-500">{errors.email}</p>
                        )}
                      </div>
                    </div>

                    <div>
                      <label className="block font-medium mb-3" style={{ color: darkColor }}>
                        {currentContent.city}
                      </label>
                      <div className="relative">
                        <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
                          <FaMapMarkerAlt style={{ color: `${primaryColor}60` }} />
                        </div>
                        <input
                          type="text"
                          name="city"
                          value={formData.city}
                          onChange={handleInputChange}
                          required
                          className={`w-full pl-12 pr-4 py-4 border rounded-xl focus:outline-none focus:border-2 transition-all duration-300 ${
                            errors.city ? 'border-red-500' : 'border-gray-300'
                          }`}
                          style={{ 
                            backgroundColor: secondaryColor,
                            focusBorderColor: errors.city ? '#ef4444' : primaryColor
                          }}
                          placeholder={currentContent.placeholders.city}
                          onKeyPress={(e) => {
                            // Only allow letters, spaces, and backspace
                            const char = String.fromCharCode(e.which);
                            if (!/^[a-zA-Z\s]$/.test(char) && e.which !== 8) {
                              e.preventDefault();
                            }
                          }}
                        />
                        {errors.city && (
                          <p className="mt-2 text-sm text-red-500">{errors.city}</p>
                        )}
                      </div>
                    </div>

                    <div className="md:col-span-2">
                      <label className="block font-medium mb-3" style={{ color: darkColor }}>
                        {currentContent.subject}
                      </label>
                      <div className="relative">
                        <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
                          <FaRegComments style={{ color: `${primaryColor}60` }} />
                        </div>
                        <input
                          type="text"
                          name="subject"
                          value={formData.subject}
                          onChange={handleInputChange}
                          required
                          className={`w-full pl-12 pr-4 py-4 border rounded-xl focus:outline-none focus:border-2 transition-all duration-300 ${
                            errors.subject ? 'border-red-500' : 'border-gray-300'
                          }`}
                          style={{ 
                            backgroundColor: secondaryColor,
                            focusBorderColor: errors.subject ? '#ef4444' : primaryColor
                          }}
                          placeholder={currentContent.placeholders.selectSubject}
                        />
                        {errors.subject && (
                          <p className="mt-2 text-sm text-red-500">{errors.subject}</p>
                        )}
                      </div>
                    </div>

                    <div className="md:col-span-2">
                      <label className="block font-medium mb-3" style={{ color: darkColor }}>
                        {currentContent.yourMessage}
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={6}
                        className={`w-full p-4 border rounded-xl focus:outline-none focus:border-2 transition-all duration-300 resize-y ${
                          errors.message ? 'border-red-500' : 'border-gray-300'
                        }`}
                        style={{ 
                          backgroundColor: secondaryColor,
                          focusBorderColor: errors.message ? '#ef4444' : primaryColor
                        }}
                        placeholder={currentContent.placeholders.message}
                      ></textarea>
                      {errors.message && (
                        <p className="mt-2 text-sm text-red-500">{errors.message}</p>
                      )}
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isLoading}
                    className={`w-full md:w-auto px-12 py-4 rounded-xl font-bold transition-all duration-300 flex items-center justify-center gap-3 ${
                      isLoading ? 'opacity-70 cursor-not-allowed' : 'hover:shadow-xl transform hover:-translate-y-1'
                    }`}
                    style={{ 
                      background: `linear-gradient(135deg, ${primaryColor} 0%, #9c2956 100%)`,
                      color: 'white'
                    }}
                  >
                    {isLoading ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <FaPaperPlane />
                        {currentContent.sendMessage}
                      </>
                    )}
                  </button>
                </form>
              </div>
            </section>

            {/* Head Office Section */}
            <section className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100 mt-10 hover:shadow-3xl transition-shadow duration-500">
              <div 
                className="p-10 text-white relative overflow-hidden"
                style={{
                  background: `linear-gradient(135deg, ${darkColor} 0%, #16213e 100%)`
                }}
              >
                <div className="absolute top-0 right-0 w-40 h-40 rounded-full bg-white/10 -translate-y-20 translate-x-20"></div>
                
                <div className="relative flex items-center">
                  <div 
                    className="w-16 h-16 rounded-xl bg-white/20 flex items-center justify-center mr-6 backdrop-blur-sm"
                    style={{ border: '2px solid rgba(255,255,255,0.3)' }}
                  >
                    <FaBuilding className="text-3xl text-white" />
                  </div>
                  <div>
                    <h2 className="text-3xl md:text-4xl font-bold">{currentContent.headOffice}</h2>
                    <p className="text-white/80 mt-2">{currentContent.headOfficeSubtitle}</p>
                  </div>
                </div>
              </div>

              <div className="p-8 md:p-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                  {/* Contact Details */}
                  <div className="space-y-10">
                    <div className="space-y-8">
                      <div className="flex items-start group cursor-pointer transition-all duration-300 hover:translate-x-2">
                        <div 
                          className="w-12 h-12 rounded-xl flex items-center justify-center mr-5 flex-shrink-0 group-hover:scale-110 transition-transform duration-300"
                          style={{ 
                            backgroundColor: `${primaryColor}15`,
                            border: `2px solid ${primaryColor}30`
                          }}
                        >
                          <FaMapMarkerAlt style={{ color: primaryColor }} className="text-xl" />
                        </div>
                        <div>
                          <div className="font-bold text-lg mb-2" style={{ color: darkColor }}>
                            {currentContent.address}
                          </div>
                          <div className="text-gray-600 leading-relaxed whitespace-pre-line">
                            {currentContent.addressDetails}
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center group cursor-pointer transition-all duration-300 hover:translate-x-2">
                        <div 
                          className="w-12 h-12 rounded-xl flex items-center justify-center mr-5 flex-shrink-0 group-hover:scale-110 transition-transform duration-300"
                          style={{ 
                            backgroundColor: `${primaryColor}15`,
                            border: `2px solid ${primaryColor}30`
                          }}
                        >
                          <FaPhoneAlt style={{ color: primaryColor }} className="text-xl" />
                        </div>
                        <div>
                          <div className="font-bold text-lg mb-2" style={{ color: darkColor }}>
                            {currentContent.phone}
                          </div>
                          <div className="text-gray-600">{currentContent.phoneNumber}</div>
                        </div>
                      </div>

                      <div className="flex items-center group cursor-pointer transition-all duration-300 hover:translate-x-2">
                        <div 
                          className="w-12 h-12 rounded-xl flex items-center justify-center mr-5 flex-shrink-0 group-hover:scale-110 transition-transform duration-300"
                          style={{ 
                            backgroundColor: `${primaryColor}15`,
                            border: `2px solid ${primaryColor}30`
                          }}
                        >
                          <FaEnvelope style={{ color: primaryColor }} className="text-xl" />
                        </div>
                        <div>
                          <div className="font-bold text-lg mb-2" style={{ color: darkColor }}>
                            {currentContent.email}
                          </div>
                          <div className="text-gray-600">{currentContent.emailAddressValue}</div>
                        </div>
                      </div>

                      <div className="flex items-center group cursor-pointer transition-all duration-300 hover:translate-x-2">
                        <div 
                          className="w-12 h-12 rounded-xl flex items-center justify-center mr-5 flex-shrink-0 group-hover:scale-110 transition-transform duration-300"
                          style={{ 
                            backgroundColor: `${primaryColor}15`,
                            border: `2px solid ${primaryColor}30`
                          }}
                        >
                          <FaClock style={{ color: primaryColor }} className="text-xl" />
                        </div>
                        <div>
                          <div className="font-bold text-lg mb-2" style={{ color: darkColor }}>
                            {currentContent.workingHours}
                          </div>
                          <div className="text-gray-600 whitespace-pre-line">
                            {currentContent.workingHoursDetails}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Social Links */}
                    <div className="pt-8 border-t border-gray-100">
                      <h4 className="font-bold text-xl mb-6" style={{ color: darkColor }}>
                        {currentContent.followUs}
                      </h4>
                      <div className="flex gap-4">
                        {[
                          { icon: <FaFacebook />, color: '#1877F2', href: 'https://www.facebook.com/share/1HwBD72Dr8/' },
                          { icon: <FaInstagram />, color: '#E4405F', href: 'https://www.instagram.com/shivpratapmultistate?igsh=MWxlb2szNDNnYzZ6cQ==' },
                          { icon: <FaYoutube />, color: '#FF0000', href: 'https://youtube.com/@shivpratapmultistatevita?si=ynsKf3N1Ic3DRXX-' }
                        ].map((social, index) => (
                          <a
                            key={index}
                            href={social.href}
                            className="w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:-translate-y-1"
                            style={{ 
                              backgroundColor: `${primaryColor}10`,
                              border: `2px solid ${primaryColor}20`,
                              color: social.color
                            }}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {social.icon}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Map */}
                  <div className="rounded-xl overflow-hidden shadow-lg border border-gray-200 h-fit">
                    <div className="relative">
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.265588856342!2d74.59674337501557!3d17.280462982539414!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c065144d8edf%3A0x3703b8095866c54b!2sShivpratap+Gold+Tower%2C+Power+House+Rd%2C+Hanmant+Bazar%2C+Vita%2C+Maharashtra+415311%2C+India!5e0!3m2!1sen!2sin!4v1649233452970!5m2!1sen!2sin"
                        width="100%"
                        height="400"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Shivpratap Multistate Bank Head Office Location"
                      ></iframe>
                      <div 
                        className="absolute bottom-4 left-4 px-4 py-2 rounded-lg text-white font-medium"
                        style={{ 
                          backgroundColor: primaryColor,
                          backdropFilter: 'blur(10px)'
                        }}
                      >
                        📍 {currentContent.headOfficeLocation}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* Right Column - Social Media */}
          <div className="space-y-8">
            {/* Social Media Card */}
            <div 
              className="rounded-2xl p-8 shadow-xl border relative overflow-hidden"
              style={{ 
                backgroundColor: 'white',
                borderColor: `${primaryColor}20`
              }}
            >
              <div className="absolute top-0 right-0 w-24 h-24 rounded-full"
                style={{ 
                  backgroundColor: `${primaryColor}10`,
                  transform: 'translate(40px, -40px)'
                }}
              ></div>
              
              <h3 className="text-2xl font-bold mb-6 relative z-10" style={{ color: darkColor }}>
                {currentContent.followUs}
              </h3>
              <div className="space-y-4 relative z-10">
                {[
                  { 
                    icon: <FaFacebook />, 
                    color: '#1877F2', 
                    href: 'https://www.facebook.com/share/1HwBD72Dr8/',
                    name: 'Facebook'
                  },
                  { 
                    icon: <FaInstagram />, 
                    color: '#E4405F', 
                    href: 'https://www.instagram.com/shivpratapmultistate?igsh=MWxlb2szNDNnYzZ6cQ==',
                    name: 'Instagram'
                  },
                  { 
                    icon: <FaYoutube />, 
                    color: '#FF0000', 
                    href: 'https://youtube.com/@shivpratapmultistatevita?si=ynsKf3N1Ic3DRXX-',
                    name: 'YouTube'
                  }
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="flex items-center justify-between p-4 rounded-xl hover:shadow-md transition-all duration-300 group"
                    style={{ 
                      backgroundColor: `${primaryColor}05`,
                      border: `1px solid ${primaryColor}10`
                    }}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="flex items-center">
                      <div 
                        className="w-10 h-10 rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300"
                        style={{ 
                          backgroundColor: `${social.color}15`,
                          color: social.color
                        }}
                      >
                        {social.icon}
                      </div>
                      <span className="font-medium" style={{ color: darkColor }}>
                        {social.name}
                      </span>
                    </div>
                    <FaArrowRight 
                      className="text-sm opacity-0 group-hover:opacity-100 transition-all duration-300"
                      style={{ color: primaryColor }}
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom CSS for focus states */}
      <style jsx>{`
        input:focus, textarea:focus, select:focus {
          border-color: ${primaryColor} !important;
          box-shadow: 0 0 0 3px ${primaryColor}20;
        }
        .animate-fade-in {
          animation: fadeIn 0.5s ease-in-out;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
};

export default Contact;