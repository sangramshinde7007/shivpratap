import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { 
  FaFacebook, FaInstagram, FaTwitter, FaYoutube, 
  FaPhone, FaEnvelope, FaGlobe, FaMobileAlt, 
  FaCalculator, FaBars, FaTimes, FaChevronDown, 
  FaChevronRight, FaMapMarkerAlt
} from 'react-icons/fa';
import { 
  database, 
  ref as dbRef, 
  get
} from '../firebase';
import logo from '../components/Assets/SHIVPRATAP LOGO.png';

const Navbar = () => {
  const navigate = useNavigate();
  const { language, changeLanguage } = useLanguage();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('English');
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [activeSubDropdown, setActiveSubDropdown] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [screenSize, setScreenSize] = useState('desktop');
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);
  const [marqueeText, setMarqueeText] = useState('Welcome to Shivpratap Multistate Bank');

  useEffect(() => {
    setSelectedLanguage(language === 'en' ? 'English' : 'मराठी');
  }, [language]);

  // Fetch marquee text from Firebase
  useEffect(() => {
    const loadMarqueeText = async () => {
      try {
        const marqueeRef = dbRef(database, 'shivpratapmultistate/marquee');
        const snapshot = await get(marqueeRef);
        
        if (snapshot.exists()) {
          const marqueeData = snapshot.val();
          setMarqueeText(marqueeData.text || 'Welcome to Shivpratap Multistate Bank');
        }
      } catch (error) {
        console.error('Error loading marquee text:', error);
      }
    };

    loadMarqueeText();
  }, []);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 640) setScreenSize('mobile');
      else if (width < 1024) setScreenSize('tablet');
      else setScreenSize('desktop');
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const languages = [
    { code: 'en', name: 'English' },
    { code: 'mr', name: 'मराठी' }
  ];

  const translations = {
    en: {
      navItems: [
        { label: 'Organization', hasDropdown: false },
        { label: 'Director', hasDropdown: true, dropdownItems: ['Chairman', 'Executive Directors', 'Managing Director'] },
        { label: 'Plan', hasDropdown: true, dropdownItems: [
          { label: 'Deposit Schemes', hasSubDropdown: true, subItems: [
            'Pension Deposit Scheme', 'Recurring Deposit Scheme (RD)', 'Half Price Deposit Scheme', 
            'Subhmangal Deposit Scheme', 'Billionaire Deposit Scheme'
          ]},
          { label: 'Loan Schemes', hasSubDropdown: true, subItems: ['Personal Loan'] },
          { label: 'Gold Loan Schemes', hasSubDropdown: true, subItems: [
            'EMI Gold Loan', 'Regular Gold Loan', 'Easy Gold Loan', 
            'Gold Loan Overdraft (C.C.)', 'Bullet Gold Loan', 'Door Step (Home Reach) Gold Loan'
          ]}
        ]},
        { label: 'Account', hasDropdown: true, dropdownItems: ['Savings Account', 'Current Account', 'Mahila Savings Account'] },
        { label: 'Branch', hasDropdown: true, dropdownItems: ['Branch', 'Customer Service Center'] },
        { label: 'Loan', hasDropdown: true, dropdownItems: ['Gold Loan', 'Personal Loan', 'Mortgage Loan', 'Home Loan', 'Vehicle Loan', 'Women Loan'] },
        { label: 'Gallery', hasDropdown: false },
        { label: 'Media', hasDropdown: false },
        { label: 'Annual Report', hasDropdown: false },
        { label: 'Contact', hasDropdown: false }
      ],
      // ... rest remains same
      bankName: 'Shivpratap Multistate Bank',
      bankNameShort: 'Shivpratap Bank',
      trustedSince: 'Trusted Since 1985',
      calculator: 'Calculator',
      calc: 'Calc',
      mobileBanking: 'Mobile Banking',
      mobile: 'Mobile',
      announcements: 'Announcements:',
      menu: 'Menu',
      language: 'Language:',
      needAssistance: 'Need assistance?',
      announcementsList: [
        "🚀 New Digital Savings Account with 7% interest!",
        " Enhanced security features implemented for safe banking",
        "💼 Business Loan interest rates reduced by 0.5%",
        "🏦 New branch opening in Pune next month"
      ]
    },
    mr: {
      navItems: [
        { label: 'संस्था', hasDropdown: false },
        { label: 'संचालक', hasDropdown: true, dropdownItems: ['अध्यक्ष', 'व्यवस्थापकीय संचालक', 'कार्यकारी संचालक'] },
        { label: 'योजना', hasDropdown: true, dropdownItems: [
          { label: 'ठेव योजना', hasSubDropdown: true, subItems: [
            'पेन्शन ठेव योजना', 'आवर्ती ठेव योजना (आरडी)', 'अर्धवेळ ठेव योजना', 
            'शुभमंगल ठेव योजना', 'अब्जाधीश ठेव योजना'
          ]},
          { label: 'कर्ज योजना', hasSubDropdown: true, subItems: ['वैयक्तिक कर्ज'] },
          { label: 'सोने कर्ज योजना', hasSubDropdown: true, subItems: [
            'ईएमआय सोने कर्ज', 'नियमित सोने कर्ज', 'सोपे सोने कर्ज', 
            'सोने कर्ज ओव्हरड्राफ्ट (सी.सी.)', 'बुलेट सोने कर्ज', 'दारस्थ (होम रीच) सोने कर्ज'
          ]}
        ]},
        { label: 'खाते', hasDropdown: true, dropdownItems: ['बचत खाते', 'चालू खाते', 'महिला बचत खाते '] },
        { label: 'शाखा', hasDropdown: true, dropdownItems: ['शाखा', 'ग्राहक सेवा केंद्र'] },
        { label: 'कर्ज', hasDropdown: true, dropdownItems: ['सोन्याचे कर्ज प्रतिमा', 'वैयक्तिक कर्ज प्रतिमा', 'हायपोथेकेशन कर्ज प्रतिमा', 'घर कर्ज प्रतिमा', 'वाहन कर्ज प्रतिमा', 'महिला कर्ज प्रतिमा'] },
        { label: 'गॅलरी', hasDropdown: false },
        { label: 'मीडिया', hasDropdown: false },
        { label: 'वार्षिक अहवाल', hasDropdown: false },
        { label: 'संपर्क', hasDropdown: false }
      ],
      // ... rest remains same
      bankName: 'शिवप्रताप मल्टीस्टेट बँक',
      bankNameShort: 'शिवप्रताप बँक',
      trustedSince: '१९८५ पासून विश्वासार्ह',
      calculator: 'कॅल्क्युलेटर',
      calc: 'कॅल्क',
      mobileBanking: 'मोबाईल बँकिंग',
      mobile: 'मोबाईल',
      announcements: 'घोषणा:',
      menu: 'मेनू',
      language: 'भाषा:',
      needAssistance: 'मदतीची आवश्यकता आहे का?',
      announcementsList: [
        "🚀 ७% व्याज दरासह नवीन डिजिटल बचत खाते!",
        "📱 मोबाईल बँकिंग अॅप आता प्ले स्टोर आणि अॅप स्टोवर उपलब्ध",
        "🔐 सुरक्षित बँकिंगसाठी सुधारित सुरक्षा वैशिष्ट्ये लागू केली",
        "💼 व्यवसाय कर्जाचे व्याज दर ०.५% कमी केले",
        "🏦 पुढील महिन्यात पुण्यात नवीन शाखा सुरू होणार"
      ]
    }
  };

  const currentLang = selectedLanguage === 'English' ? 'en' : 'mr';
  const currentContent = translations[currentLang];

  const getNavigationPath = (mainItem, dropdownItem, subItem = null) => {
    const pathMap = {
      // English mappings
      'Organization': '/about',
      'Chairman': '/chairman',
      'Executive Directors': '/executive-director',
      'Managing Director': '/managing-director',
      'Pension Deposit Scheme': '/plan-pension',
      'Recurring Deposit Scheme (RD)': '/plan-recurring',
      'Half Price Deposit Scheme': '/plan-half-price',
      'Subhmangal Deposit Scheme': '/plan-subhmangal',
      'Billionaire Deposit Scheme': '/plan-billionaire',
      'Personal Loan': '/plan-personal',
      'EMI Gold Loan': '/plan-emi-gold',
      'Regular Gold Loan': '/plan-regular-gold',
      'Easy Gold Loan': '/plan-easy-gold',
      'Gold Loan Overdraft (C.C.)': '/plan-gold-overdraft',
      'Bullet Gold Loan': '/plan-bullet-gold',
      'Door Step (Home Reach) Gold Loan': '/plan-doorstep-gold',
      'Savings Account': '/savings-account',
      'Current Account': '/current-account',
      'Mahila Savings Account': '/premium-savings-account',
      'Branch': '/branch',
      'Customer Service Center': '/customer-service',
      'Gallery': '/gallery',
      'Media': '/media',
      'Annual Report': '/annual-report',
      'FAQ': '/faq',
      'Contact': '/contact',
      
      // Marathi mappings
      'संस्था': '/about',
      'अध्यक्ष': '/chairman',
      'व्यवस्थापकीय संचालक': '/executive-director',
      'कार्यकारी संचालक': '/managing-director',
      'पेन्शन ठेव योजना': '/plan-pension',
      'आवर्ती ठेव योजना (आरडी)': '/plan-recurring',
      'अर्धवेळ ठेव योजना': '/plan-half-price',
      'शुभमंगल ठेव योजना': '/plan-subhmangal',
      'अब्जाधीश ठेव योजना': '/plan-billionaire',
      'वैयक्तिक कर्ज': '/plan-personal',
      'ईएमआय सोने कर्ज': '/plan-emi-gold',
      'नियमित सोने कर्ज': '/plan-regular-gold',
      'सोपे सोने कर्ज': '/plan-easy-gold',
      'सोने कर्ज ओव्हरड्राफ्ट (सी.सी.)': '/plan-gold-overdraft',
      'बुलेट सोने कर्ज': '/plan-bullet-gold',
      'दारस्थ (होम रीच) सोने कर्ज': '/plan-doorstep-gold',
      'बचत खाते': '/savings-account',
      'चालू खाते': '/current-account',
      'महिला बचत खाते ': '/premium-savings-account',
      'शाखा': '/branch',
      'ग्राहक सेवा केंद्र': '/customer-service',
      'गॅलरी': '/gallery',
      'मीडिया': '/media',
      'वार्षिक अहवाल': '/annual-report',
      'वारंवार विचारले जाणारे प्रश्न': '/faq',
      'संपर्क': '/contact',
      'सोने कर्ज': '/loan#gold-loan',
      'हायपोथेकेशन कर्ज': '/loan#mortgage-loan',
      'घर कर्ज': '/loan#home-loan',
      'वाहन कर्ज': '/loan#vehicle-loan',
      'महिला कर्ज': '/loan#women-loan',
      'Gold Loan': '/loan#gold-loan',
      'Mortgage Loan': '/loan#mortgage-loan',
      'Home Loan': '/loan#home-loan',
      'Vehicle Loan': '/loan#vehicle-loan',
      'Women Loan': '/loan#women-loan',
    };

    const key = subItem || dropdownItem || mainItem;
    return pathMap[key] || '/';
  };

  const handleLanguageChange = (langName) => {
    setSelectedLanguage(langName);
    const langCode = langName === 'English' ? 'en' : 'mr';
    changeLanguage(langCode);
    setIsLanguageDropdownOpen(false);
  };

  const handleNavigation = (path) => {
    navigate(path);
    setActiveDropdown(null);
    setActiveSubDropdown(null);
    setIsMobileMenuOpen(false);
  };

  const handleMobileBankingClick = () => {
    window.open('https://play.google.com/store/apps/details?id=com.netwin.mobilebanking.shivp', '_blank');
  };

  const handleCalculatorClick = () => {
    navigate('/calculator');
  };

  const handleAddressClick = () => {
    window.open('https://www.google.com/maps/search/?api=1&query=Shivpratap+Gold+Tower%2C+Power+House+Rd%2C+Hanmant+Bazar%2C+Vita%2C+Maharashtra+415311', '_blank');
  };

  const handlePhoneClick = () => {
    window.open('tel:+9582837032', '_blank');
  };

  const handleEmailClick = () => {
    window.open('mailto:customercare@shivpratapmultistate.com', '_blank');
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMobileMenuOpen && !event.target.closest('.mobile-menu')) {
        setIsMobileMenuOpen(false);
      }
      if (isLanguageDropdownOpen && !event.target.closest('.language-dropdown')) {
        setIsLanguageDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMobileMenuOpen, isLanguageDropdownOpen]);

  return (
    <div className="w-full font-sans">
      {/* Top Bar - Responsive */}
      <div 
        className={`w-full flex items-center justify-between transition-all duration-300 ${
          screenSize === 'desktop' ? 'px-4 lg:px-6 py-2' : screenSize === 'tablet' ? 'px-3 py-1.5' : 'px-2 py-1.5'
        }`}
        style={{
          background: 'linear-gradient(135deg, #b03462 0%, #d946a6 30%, #ec4899 100%)',
          color: 'white',
        }}
      >
        {/* Address Section - Responsive */}
        <div className="flex items-center truncate cursor-pointer hover:text-pink-50 flex-1 min-w-0 mr-2" onClick={handleAddressClick}>
          <FaMapMarkerAlt className="mr-1 sm:mr-1.5 lg:mr-2 text-pink-200 flex-shrink-0" size={screenSize === 'mobile' ? 9 : screenSize === 'tablet' ? 11 : 14} />
          <span className="truncate text-[10px] xs:text-xs sm:text-sm lg:text-base">
            {screenSize === 'desktop' 
              ? 'Shivpratap Gold Tower, Power House Rd, Hanmant Bazar, Vita, Maharashtra 415311'
              : screenSize === 'tablet'
              ? 'Shivpratap Gold Tower, Vita, Maharashtra'
              : 'Vita, Maharashtra'
            }
          </span>
        </div>

        {/* Contact & Actions Section - Responsive */}
        <div className="flex items-center space-x-1 xs:space-x-1.5 sm:space-x-2 md:space-x-3 lg:space-x-4 flex-shrink-0">
          {/* Phone Number - Always visible with icon, text shows on xs and up */}
          <div className="flex items-center cursor-pointer hover:text-pink-100 transition-colors" onClick={handlePhoneClick}>
            <FaPhone className="mr-0.5 xs:mr-1 lg:mr-1.5 flex-shrink-0" size={screenSize === 'mobile' ? 9 : screenSize === 'tablet' ? 11 : 14} />
            <span className="text-[10px] xs:text-xs sm:text-sm lg:text-base whitespace-nowrap">+91 98765 43210</span>
          </div>

          {/* Email - Shows on medium screens and up */}
          <div className="hidden md:flex items-center cursor-pointer hover:text-pink-100 transition-colors" onClick={handleEmailClick}>
            <FaEnvelope className="mr-1 lg:mr-1.5 flex-shrink-0" size={screenSize === 'tablet' ? 11 : 14} />
            <span className="text-xs lg:text-sm xl:text-base truncate max-w-[180px] lg:max-w-[220px] xl:max-w-none">customercare@shivpratapmultistate.com</span>
          </div>

          {/* Social Media Icons - Desktop only */}
          <div className="hidden lg:flex items-center space-x-2 border-l border-pink-300 pl-3">
            <a href="https://facebook.com/shivpratapbank" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
              <FaFacebook size={13} className="hover:text-pink-100" />
            </a>
            <a href="https://instagram.com/shivpratapbank" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
              <FaInstagram size={13} className="hover:text-pink-100" />
            </a>
            <a href="https://twitter.com/shivpratapbank" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
              <FaTwitter size={13} className="hover:text-pink-100" />
            </a>
            <a href="https://youtube.com/@shivpratapbank" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
              <FaYoutube size={13} className="hover:text-pink-100" />
            </a>
          </div>

          {/* Language Dropdown - Responsive */}
          <div className="relative language-dropdown">
            <button 
              className={`flex items-center ${
                screenSize === 'mobile' ? 'px-1 py-0.5' : 'px-2 lg:px-3 py-1'
              } rounded hover:bg-pink-700 transition-colors`}
              onClick={() => setIsLanguageDropdownOpen(!isLanguageDropdownOpen)}
            >
              <FaGlobe className="flex-shrink-0" size={screenSize === 'mobile' ? 9 : screenSize === 'tablet' ? 11 : 14} />
              <span className="hidden xs:inline text-[10px] xs:text-xs sm:text-sm lg:text-base ml-0.5 xs:ml-1">{selectedLanguage}</span>
              <FaChevronDown size={7} className="ml-0.5 xs:ml-1 flex-shrink-0" />
            </button>
            {isLanguageDropdownOpen && (
              <div className="absolute right-0 mt-1 w-24 xs:w-28 sm:w-32 bg-white rounded shadow-lg z-50 overflow-hidden">
                {languages.map(lang => (
                  <button
                    key={lang.code}
                    onClick={() => handleLanguageChange(lang.name)}
                    className="block w-full text-left px-2 xs:px-3 py-1.5 text-[10px] xs:text-xs sm:text-sm lg:text-base text-gray-700 hover:bg-pink-600 hover:text-white transition-colors"
                  >
                    {lang.name}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

    {/* Main Navbar */}
    <div
      className={`w-full sticky top-0 z-40 transition-all duration-300 ${isScrolled ? 'shadow-xl' : 'shadow-lg'}`}
      style={{ background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)' }}
    >
      <div className="mx-auto px-3 sm:px-4 lg:px-6">
        <div className={`flex items-center justify-between ${
          screenSize === 'mobile' ? 'h-16' : 
          screenSize === 'tablet' ? 'h-20' : 
          'h-24'
        }`}>
          {/* Logo - Responsive - Full Width */}
          <div className="flex items-center cursor-pointer flex-1" onClick={() => navigate('/')}>
            <img
              src={logo}
              alt="Shivpratap Multistate Bank"
              className={`${
                screenSize === 'mobile' ? 'w-32 h-12' : 
                screenSize === 'tablet' ? 'w-44 h-16' : 
                'w-56 h-20'
              } rounded-lg shadow-lg object-contain transition-all duration-300 max-w-full`}
            />
          </div>

          {/* Navigation Items - Desktop and Tablet */}
          {screenSize !== 'mobile' && (
            <div className={`hidden ${
              screenSize === 'tablet' ? 'md:flex' : 'lg:flex'
            } items-center space-x-1`}>
              {currentContent.navItems.map((item, index) => (
                <div key={index} className="relative">
                  <button
                    className={`${
                      screenSize === 'tablet' ? 'px-2 py-2 text-xs' : 'px-3 py-2 text-sm'
                    } rounded-md font-semibold text-gray-700 hover:text-pink-600 hover:bg-pink-50 transition-colors`}
                    onClick={() => item.hasDropdown ? setActiveDropdown(activeDropdown === index ? null : index) : handleNavigation(getNavigationPath(item.label))}
                  >
                    {screenSize === 'tablet' && item.label.length > 8 
                      ? item.label.substring(0, 8) + '...' 
                      : item.label}
                    {item.hasDropdown && <FaChevronDown className="ml-1 inline" size={8} />}
                  </button>
                  {item.hasDropdown && activeDropdown === index && (
                    <div className={`${
                      screenSize === 'tablet' ? 'w-48' : 'w-56'
                    } absolute top-full left-0 mt-1 bg-white rounded-md shadow-lg z-50`}>
                      {item.dropdownItems.map((dropdownItem, dropdownIndex) => (
                        <div key={dropdownIndex} className="relative">
                          <button
                            className={`block w-full text-left ${
                              screenSize === 'tablet' ? 'px-3 py-2 text-xs' : 'px-3 py-2 text-sm'
                            } font-medium text-gray-700 hover:bg-pink-50 hover:text-pink-600 flex justify-between items-center`}
                            onClick={() => {
                              if (dropdownItem.hasSubDropdown) {
                                const dropdownLabel = typeof dropdownItem === 'string' ? dropdownItem : dropdownItem.label;
                                setActiveSubDropdown(activeSubDropdown === dropdownLabel ? null : dropdownLabel);
                              } else {
                                handleNavigation(getNavigationPath(item.label, dropdownItem));
                              }
                            }}
                          >
                            <span className="truncate">
                              {typeof dropdownItem === 'string' ? dropdownItem : dropdownItem.label}
                            </span>
                            {dropdownItem.hasSubDropdown && <FaChevronRight className="ml-2 inline flex-shrink-0" size={8} />}
                          </button>
                          
                          {/* Sub-dropdown */}
                          {dropdownItem.hasSubDropdown && (() => {
                            const dropdownLabel = typeof dropdownItem === 'string' ? dropdownItem : dropdownItem.label;
                            return activeSubDropdown === dropdownLabel;
                          })() && (
                            <div className="absolute left-full top-0 ml-1 w-64 bg-white rounded-md shadow-xl z-50 border border-gray-100">
                              {dropdownItem.subItems.map((subItem, subIndex) => (
                                <button
                                  key={subIndex}
                                  className={`block w-full text-left ${
                                    screenSize === 'tablet' ? 'px-3 py-2 text-xs' : 'px-3 py-2 text-sm'
                                  } font-medium text-gray-700 hover:bg-pink-50 hover:text-pink-600 truncate`}
                                  onClick={() => handleNavigation(getNavigationPath(item.label, dropdownItem, subItem))}
                                >
                                  {subItem}
                                </button>
                              ))}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}

          {/* Right Side Actions - Responsive */}
          <div className="flex items-center space-x-1.5 sm:space-x-2 lg:space-x-3">
            {/* Hide calculator and mobile banking buttons on mobile */}
            {screenSize !== 'mobile' && (
              <>
                <button
                  onClick={handleCalculatorClick}
                  className={`flex items-center ${
                    screenSize === 'tablet' ? 'px-1.5 py-1 text-xs' : 'px-2 lg:px-3 py-1.5 lg:py-2 text-xs sm:text-sm lg:text-base'
                  } rounded-md font-semibold text-white bg-pink-600 hover:bg-pink-700 transition-colors`}
                >
                  <FaCalculator className={`${
                    screenSize === 'tablet' ? 'mr-1' : 'mr-1.5'
                  }`} size={screenSize === 'tablet' ? 10 : 12} />
                  <span className="hidden sm:inline">{currentContent.calc}</span>
                </button>

                <button
                  onClick={handleMobileBankingClick}
                  className={`flex items-center ${
                    screenSize === 'tablet' ? 'px-1.5 py-1 text-xs' : 'px-2 lg:px-3 py-1.5 lg:py-2 text-xs sm:text-sm lg:text-base'
                  } rounded-md font-semibold text-white bg-green-600 hover:bg-green-700 transition-colors`}
                >
                  <FaMobileAlt className={`${
                    screenSize === 'tablet' ? 'mr-1' : 'mr-1.5'
                  }`} size={screenSize === 'tablet' ? 10 : 12} />
                  <span className="hidden sm:inline">{currentContent.mobile}</span>
                </button>
              </>
            )}

            {/* Mobile Menu Toggle */}
            {screenSize === 'mobile' && (
              <button
                className="p-1.5 rounded-md text-gray-700 hover:text-pink-600 hover:bg-pink-50 transition-colors"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? <FaTimes size={18} /> : <FaBars size={18} />}
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Menu - Full Navigation */}
      {screenSize === 'mobile' && isMobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white border-t shadow-lg mobile-menu">
          <div className="max-h-80 overflow-y-auto">
            {/* Navigation Items */}
            <div className="py-2">
              {currentContent.navItems.map((item, index) => (
                <div key={index} className="border-b border-gray-100">
                  <button
                    className="w-full text-left px-3 py-2.5 text-sm font-medium text-gray-700 hover:bg-pink-50 hover:text-pink-600 flex justify-between items-center"
                    onClick={() => item.hasDropdown ? setActiveDropdown(activeDropdown === index ? null : index) : handleNavigation(getNavigationPath(item.label))}
                  >
                    <span className="truncate">{item.label}</span>
                    {item.hasDropdown && <FaChevronDown className={`transition-transform ${activeDropdown === index ? 'rotate-180' : ''}`} size={10} />}
                  </button>
                  
                  {/* Mobile Dropdown */}
                  {item.hasDropdown && activeDropdown === index && (
                    <div className="bg-gray-50">
                      {item.dropdownItems.map((dropdownItem, dropdownIndex) => (
                        <div key={dropdownIndex} className="border-b border-gray-100 last:border-b-0">
                          <button
                            className="w-full text-left px-5 py-2 text-xs text-gray-600 hover:bg-pink-50 hover:text-pink-600 flex justify-between items-center"
                            onClick={() => {
                              if (dropdownItem.hasSubDropdown) {
                                const dropdownLabel = typeof dropdownItem === 'string' ? dropdownItem : dropdownItem.label;
                                setActiveSubDropdown(activeSubDropdown === dropdownLabel ? null : dropdownLabel);
                              } else {
                                handleNavigation(getNavigationPath(item.label, dropdownItem));
                              }
                            }}
                          >
                            <span className="truncate">
                              {typeof dropdownItem === 'string' ? dropdownItem : dropdownItem.label}
                            </span>
                            {dropdownItem.hasSubDropdown && <FaChevronRight className="flex-shrink-0" size={8} />}
                          </button>
                          
                          {/* Mobile Sub-dropdown */}
                          {dropdownItem.hasSubDropdown && (() => {
                            const dropdownLabel = typeof dropdownItem === 'string' ? dropdownItem : dropdownItem.label;
                            return activeSubDropdown === dropdownLabel;
                          })() && (
                            <div className="bg-gray-100 pl-4">
                              {dropdownItem.subItems.map((subItem, subIndex) => (
                                <button
                                  key={subIndex}
                                  className="w-full text-left px-3 py-1.5 text-xs text-gray-600 hover:bg-pink-50 hover:text-pink-600 truncate"
                                  onClick={() => handleNavigation(getNavigationPath(item.label, dropdownItem, subItem))}
                                >
                                  {subItem}
                                </button>
                              ))}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
            
            {/* Mobile Action Buttons */}
            <div className="p-3 border-t bg-gray-50">
              <div className="grid grid-cols-2 gap-2 mb-3">
                <button
                  onClick={handleCalculatorClick}
                  className="flex items-center justify-center px-2 py-2 rounded-md text-xs font-medium text-white bg-pink-600 hover:bg-pink-700"
                >
                  <FaCalculator className="mr-1.5" size={10} />
                  {currentContent.calc}
                </button>
                <button
                  onClick={handleMobileBankingClick}
                  className="flex items-center justify-center px-2 py-2 rounded-md text-xs font-medium text-white bg-green-600 hover:bg-green-700"
                >
                  <FaMobileAlt className="mr-1.5" size={10} />
                  {currentContent.mobile}
                </button>
              </div>
              
              <div className="text-center">
                <p className="text-xs text-gray-600 mb-2">{currentContent.needAssistance}</p>
                <button 
                  onClick={handlePhoneClick}
                  className="inline-flex items-center text-pink-600 font-bold hover:text-pink-700 text-xs"
                >
                  <FaPhone className="mr-1.5" size={12} />
                  +91 98765 43210
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>

    {/* Marquee Bar - Responsive */}
    <div className="w-full py-1 overflow-hidden text-white relative" style={{ background: 'linear-gradient(135deg, #b03462 0%, #d946a6 50%, #ec4899 100%)' }}>
      <div className="flex animate-marquee">
        <div className="flex whitespace-nowrap">
          <span className="mx-2 sm:mx-4 font-medium text-xs sm:text-sm">{marqueeText}</span>
          <span className="mx-1 sm:mx-2">•</span>
          <span className="mx-2 sm:mx-4 font-medium text-xs sm:text-sm">{marqueeText}</span>
          <span className="mx-1 sm:mx-2">•</span>
          <span className="mx-2 sm:mx-4 font-medium text-xs sm:text-sm">{marqueeText}</span>
          <span className="mx-1 sm:mx-2">•</span>
          <span className="mx-2 sm:mx-4 font-medium text-xs sm:text-sm">{marqueeText}</span>
          <span className="mx-1 sm:mx-2">•</span>
          <span className="mx-2 sm:mx-4 font-medium text-xs sm:text-sm">{marqueeText}</span>
          <span className="mx-1 sm:mx-2">•</span>
          <span className="mx-2 sm:mx-4 font-medium text-xs sm:text-sm">{marqueeText}</span>
        </div>
        <div className="flex whitespace-nowrap">
          <span className="mx-2 sm:mx-4 font-medium text-xs sm:text-sm">{marqueeText}</span>
          <span className="mx-1 sm:mx-2">•</span>
          <span className="mx-2 sm:mx-4 font-medium text-xs sm:text-sm">{marqueeText}</span>
          <span className="mx-1 sm:mx-2">•</span>
          <span className="mx-2 sm:mx-4 font-medium text-xs sm:text-sm">{marqueeText}</span>
          <span className="mx-1 sm:mx-2">•</span>
          <span className="mx-2 sm:mx-4 font-medium text-xs sm:text-sm">{marqueeText}</span>
          <span className="mx-1 sm:mx-2">•</span>
          <span className="mx-2 sm:mx-4 font-medium text-xs sm:text-sm">{marqueeText}</span>
          <span className="mx-1 sm:mx-2">•</span>
          <span className="mx-2 sm:mx-4 font-medium text-xs sm:text-sm">{marqueeText}</span>
        </div>
      </div>
    </div>

      <style jsx>{`
        /* ============================================
           CUSTOM TAILWIND BREAKPOINTS
           ============================================ */
        @media (min-width: 475px) {
          .xs:text-xs { font-size: 0.75rem; }
          .xs:text-sm { font-size: 0.875rem; }
          .xs:inline { display: inline; }
          .xs:mr-1 { margin-right: 0.25rem; }
          .xs:ml-1 { margin-left: 0.25rem; }
          .xs:space-x-1.5 > :not([hidden]) ~ :not([hidden]) { margin-left: 0.375rem; }
          .xs:px-3 { padding-left: 0.75rem; padding-right: 0.75rem; }
          .xs:w-28 { width: 7rem; }
        }
        
        /* ============================================
           MARQUEE ANIMATIONS - ALL SCREEN SIZES
           ============================================ */
        .animate-marquee {
          animation: marquee 15s linear infinite;
          display: flex;
          width: 200%;
        }
        
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        
        /* ============================================
           MOBILE MENU ANIMATIONS
           ============================================ */
        .mobile-menu {
          animation: slideDown 0.3s ease-out;
        }
        
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        /* ============================================
           DROPDOWN TRANSITIONS
           ============================================ */
        .dropdown-transition {
          transition: all 0.2s ease-in-out;
        }
        
        /* ============================================
           MEDIA QUERIES - EXTRA SMALL DEVICES (320px - 374px)
           ============================================ */
        @media (max-width: 374px) {
          /* Marquee animation */
          .animate-marquee {
            animation: marquee-xs 12s linear infinite;
          }
          
          @keyframes marquee-xs {
            0% { transform: translateX(0%); }
            100% { transform: translateX(-50%); }
          }
          
          /* Top bar adjustments */
          .w-full {
            max-width: 100vw;
            overflow-x: hidden;
          }
          
          /* Font size adjustments for very small screens */
          .text-[10px] {
            font-size: 9px !important;
          }
          
          /* Reduce icon sizes */
          svg {
            width: 8px !important;
            height: 8px !important;
          }
          
          /* Compact spacing */
          .space-x-1 > :not([hidden]) ~ :not([hidden]) {
            margin-left: 0.15rem !important;
          }
          
          /* Phone number always visible */
          .whitespace-nowrap {
            font-size: 9px !important;
          }
        }
        
        /* ============================================
           MEDIA QUERIES - SMALL MOBILE (375px - 474px)
           ============================================ */
        @media (min-width: 375px) and (max-width: 474px) {
          .animate-marquee {
            animation: marquee-sm 15s linear infinite;
          }
          
          @keyframes marquee-sm {
            0% { transform: translateX(0%); }
            100% { transform: translateX(-50%); }
          }
          
          /* Phone number styling */
          .whitespace-nowrap {
            font-size: 10px !important;
          }
          
          /* Ensure proper spacing */
          .flex-shrink-0 {
            flex-shrink: 0;
          }
          
          /* Sticky positioning support */
          .sticky {
            position: -webkit-sticky;
            position: sticky;
          }
        }
        
        /* ============================================
           MEDIA QUERIES - MOBILE XS+ (475px - 639px)
           ============================================ */
        @media (min-width: 475px) and (max-width: 639px) {
          .animate-marquee {
            animation: marquee-mobile 18s linear infinite;
          }
          
          @keyframes marquee-mobile {
            0% { transform: translateX(0%); }
            100% { transform: translateX(-50%); }
          }
          
          /* Phone number fully visible */
          .whitespace-nowrap {
            font-size: 11px !important;
          }
          
          /* Better touch targets */
          button {
            min-height: 40px;
          }
        }
        
        /* ============================================
           MEDIA QUERIES - MOBILE SM (640px - 767px)
           ============================================ */
        @media (min-width: 640px) and (max-width: 767px) {
          .animate-marquee {
            animation: marquee-mobile-lg 19s linear infinite;
          }
          
          @keyframes marquee-mobile-lg {
            0% { transform: translateX(0%); }
            100% { transform: translateX(-50%); }
          }
          
          /* Enhanced touch targets */
          button {
            min-height: 44px;
            min-width: 44px;
          }
          
          /* Phone number clear and readable */
          .whitespace-nowrap {
            font-size: 12px !important;
          }
        }
        
        /* ============================================
           MEDIA QUERIES - TABLET (768px - 1023px)
           ============================================ */
        @media (min-width: 768px) and (max-width: 1023px) {
          .animate-marquee {
            animation: marquee-tablet 20s linear infinite;
          }
          
          @keyframes marquee-tablet {
            0% { transform: translateX(0%); }
            100% { transform: translateX(-50%); }
          }
          
          /* Email starts showing */
          .md:flex {
            display: flex !important;
          }
          
          /* Balanced layout */
          .flex {
            flex-wrap: nowrap;
          }
          
          /* Phone and email both visible */
          .whitespace-nowrap {
            font-size: 13px !important;
          }
        }
        
        /* ============================================
           MEDIA QUERIES - TABLET LANDSCAPE (1024px - 1279px)
           ============================================ */
        @media (min-width: 1024px) and (max-width: 1279px) {
          .animate-marquee {
            animation: marquee-tablet-lg 22s linear infinite;
          }
          
          @keyframes marquee-tablet-lg {
            0% { transform: translateX(0%); }
            100% { transform: translateX(-50%); }
          }
          
          /* Social icons visible */
          .lg:flex {
            display: flex !important;
          }
          
          /* Full contact info */
          .whitespace-nowrap {
            font-size: 14px !important;
          }
        }
        
        /* ============================================
           MEDIA QUERIES - DESKTOP (1280px - 1439px)
           ============================================ */
        @media (min-width: 1280px) and (max-width: 1439px) {
          .animate-marquee {
            animation: marquee 25s linear infinite;
          }
          
          /* Full features enabled */
          .hover:scale-105:hover {
            transform: scale(1.05);
          }
          
          /* Optimal font sizes */
          .whitespace-nowrap {
            font-size: 14px !important;
          }
        }
        
        /* ============================================
           MEDIA QUERIES - DESKTOP XL (1440px - 1919px)
           ============================================ */
        @media (min-width: 1440px) and (max-width: 1919px) {
          .animate-marquee {
            animation: marquee-xl 28s linear infinite;
          }
          
          @keyframes marquee-xl {
            0% { transform: translateX(0%); }
            100% { transform: translateX(-50%); }
          }
          
          /* Enhanced spacing */
          .container {
            max-width: 1400px;
            margin: 0 auto;
          }
          
          /* Larger fonts */
          .xl:text-base {
            font-size: 1rem !important;
          }
        }
        
        /* ============================================
           MEDIA QUERIES - LARGE DESKTOP (1920px - 2559px)
           ============================================ */
        @media (min-width: 1920px) and (max-width: 2559px) {
          .animate-marquee {
            animation: marquee-2xl 30s linear infinite;
          }
          
          @keyframes marquee-2xl {
            0% { transform: translateX(0%); }
            100% { transform: translateX(-50%); }
          }
          
          /* Maximum width container */
          .container {
            max-width: 1600px;
            margin: 0 auto;
          }
        }
        
        /* ============================================
           MEDIA QUERIES - ULTRA WIDE (2560px+)
           ============================================ */
        @media (min-width: 2560px) {
          .animate-marquee {
            animation: marquee-ultra 35s linear infinite;
          }
          
          @keyframes marquee-ultra {
            0% { transform: translateX(0%); }
            100% { transform: translateX(-50%); }
          }
          
          /* Ultra-wide container */
          .container {
            max-width: 1920px;
            margin: 0 auto;
          }
        }
        
        /* ============================================
           CUSTOM SCROLLBAR - MOBILE MENU
           ============================================ */
        .mobile-menu .overflow-y-auto::-webkit-scrollbar {
          width: 4px;
        }
        
        .mobile-menu .overflow-y-auto::-webkit-scrollbar-track {
          background: #f1f1f1;
        }
        
        .mobile-menu .overflow-y-auto::-webkit-scrollbar-thumb {
          background: #b03462;
          border-radius: 2px;
        }
        
        .mobile-menu .overflow-y-auto::-webkit-scrollbar-thumb:hover {
          background: #8b2850;
        }
        
        /* ============================================
           RESPONSIVE UTILITIES - SPECIFIC ELEMENTS
           ============================================ */
        
        /* Phone number - Always visible on all screens */
        @media (max-width: 639px) {
          .whitespace-nowrap {
            display: inline !important;
            white-space: nowrap !important;
          }
        }
        
        /* Email truncation on medium screens */
        @media (min-width: 768px) and (max-width: 1023px) {
          .truncate.max-w-[180px] {
            max-width: 180px !important;
            overflow: hidden;
            text-overflow: ellipsis;
          }
        }
        
        /* Email full display on large screens */
        @media (min-width: 1280px) {
          .xl:max-w-none {
            max-width: none !important;
          }
        }
        
        /* ============================================
           ORIENTATION SPECIFIC STYLES
           ============================================ */
        
        /* Portrait Mode - All Devices */
        @media (orientation: portrait) {
          .mobile-menu {
            max-height: 70vh;
          }
        }
        
        /* Landscape Mode - Mobile Devices */
        @media (max-width: 768px) and (orientation: landscape) {
          .mobile-menu {
            max-height: 50vh;
          }
          
          .animate-marquee {
            animation-duration: 15s;
          }
          
          /* Compact top bar in landscape */
          .text-[10px] {
            font-size: 9px !important;
          }
        }
        
        /* Landscape Mode - Tablet */
        @media (min-width: 769px) and (max-width: 1024px) and (orientation: landscape) {
          .mobile-menu {
            max-height: 60vh;
          }
        }
        
        /* ============================================
           HIGH DPI DISPLAYS (RETINA)
           ============================================ */
        @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
          img {
            image-rendering: -webkit-optimize-contrast;
            image-rendering: crisp-edges;
          }
          
          /* Sharper text on retina */
          body {
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
          }
        }
        
        /* ============================================
           PRINT STYLES
           ============================================ */
        @media print {
          .mobile-menu,
          .animate-marquee,
          button {
            display: none !important;
          }
          
          /* Show contact info in print */
          .whitespace-nowrap,
          .truncate {
            display: inline !important;
          }
        }
        
        /* ============================================
           ACCESSIBILITY - REDUCED MOTION
           ============================================ */
        @media (prefers-reduced-motion: reduce) {
          .animate-marquee {
            animation: none;
          }
          
          .mobile-menu {
            animation: none;
          }
          
          * {
            transition: none !important;
          }
          
          .hover:scale-110:hover,
          .hover:scale-105:hover {
            transform: none !important;
          }
        }
        
        /* ============================================
           DARK MODE SUPPORT
           ============================================ */
        @media (prefers-color-scheme: dark) {
          .mobile-menu .overflow-y-auto::-webkit-scrollbar-track {
            background: #2d2d2d;
          }
        }
        
        /* ============================================
           SPECIFIC FIXES FOR COMMON DEVICES
           ============================================ */
        
        /* iPhone SE (320px) */
        @media (max-width: 320px) {
          .text-[10px] {
            font-size: 8px !important;
          }
          
          .space-x-1 > :not([hidden]) ~ :not([hidden]) {
            margin-left: 0.1rem !important;
          }
        }
        
        /* iPhone 12/13/14 (390px) */
        @media (min-width: 390px) and (max-width: 430px) {
          .whitespace-nowrap {
            font-size: 11px !important;
          }
        }
        
        /* iPad Mini (768px) */
        @media (min-width: 768px) and (max-width: 820px) {
          .md:flex {
            display: flex !important;
          }
        }
        
        /* iPad Pro (1024px) */
        @media (min-width: 1024px) and (max-width: 1080px) {
          .lg:flex {
            display: flex !important;
          }
        }
      `}</style>
    </div>
  );
};

export default Navbar;