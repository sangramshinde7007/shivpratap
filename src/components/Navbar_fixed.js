// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { useLanguage } from '../contexts/LanguageContext';
// import { 
//   FaFacebook, FaInstagram, FaTwitter, FaYoutube, 
//   FaPhone, FaEnvelope, FaGlobe, FaMobileAlt, 
//   FaCalculator, FaBars, FaTimes, FaChevronDown, 
//   FaChevronRight, FaMapMarkerAlt, FaBell
// } from 'react-icons/fa';
// import logo from '../components/Assets/SHIVPRATAP LOGO.png';

// const Navbar = () => {
//   const navigate = useNavigate();
//   const { language, changeLanguage } = useLanguage();
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const [selectedLanguage, setSelectedLanguage] = useState('English');
//   const [activeDropdown, setActiveDropdown] = useState(null);
//   const [activeSubDropdown, setActiveSubDropdown] = useState(null);
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [screenSize, setScreenSize] = useState('desktop');
//   const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);

//   useEffect(() => {
//     setSelectedLanguage(language === 'en' ? 'English' : 'मराठी');
//   }, [language]);

//   useEffect(() => {
//     const handleResize = () => {
//       const width = window.innerWidth;
//       if (width < 640) setScreenSize('mobile');
//       else if (width < 1024) setScreenSize('tablet');
//       else setScreenSize('desktop');
//     };

//     handleResize();
//     window.addEventListener('resize', handleResize);
//     return () => window.removeEventListener('resize', handleResize);
//   }, []);

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 10);
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const languages = [
//     { code: 'en', name: 'English' },
//     { code: 'mr', name: 'मराठी' }
//   ];

//   const translations = {
//     en: {
//       navItems: [
//         { label: 'Organization', hasDropdown: false },
//         { label: 'Director', hasDropdown: true, dropdownItems: ['Chairman', 'Executive Directors', 'Managing Director'] },
//         { label: 'Plan', hasDropdown: true, dropdownItems: [
//           { label: 'Deposit Schemes', hasSubDropdown: true, subItems: [
//             'Pension Deposit Scheme', 'Recurring Deposit Scheme (RD)', 'Half Price Deposit Scheme', 
//             'Subhmangal Deposit Scheme', 'Billionaire Deposit Scheme'
//           ]},
//           { label: 'Loan Schemes', hasSubDropdown: true, subItems: ['Personal Loan'] },
//           { label: 'Gold Loan Schemes', hasSubDropdown: true, subItems: [
//             'EMI Gold Loan', 'Regular Gold Loan', 'Easy Gold Loan', 
//             'Gold Loan Overdraft (C.C.)', 'Bullet Gold Loan', 'Door Step (Home Reach) Gold Loan'
//           ]}
//         ]},
//         { label: 'Account', hasDropdown: true, dropdownItems: ['Savings Account', 'Current Account', 'premium savings account'] },
//         { label: 'Branch', hasDropdown: true, dropdownItems: ['Branch', 'Customer Service Center'] },
//         { label: 'Loan', hasDropdown: true, dropdownItems: ['Gold Loan images', 'Personal Loan images', 'Mortgage Loan images', 'Home Loan images', 'Vehicle Loan images', 'Women Loan images', 'Education Loan images'] },
//         { label: 'Gallery', hasDropdown: false },
//         { label: 'Media', hasDropdown: false },
//         { label: 'Annual Report', hasDropdown: false },
//         { label: 'FAQ', hasDropdown: false },
//         { label: 'Contact', hasDropdown: false }
//       ],
//       bankName: 'Shivpratap Multistate Bank',
//       bankNameShort: 'Shivpratap Bank',
//       trustedSince: 'Trusted Since 1985',
//       calculator: 'Calculator',
//       calc: 'Calc',
//       mobileBanking: 'Mobile Banking',
//       mobile: 'Mobile',
//       announcements: 'Announcements:',
//       menu: 'Menu',
//       language: 'Language:',
//       needAssistance: 'Need assistance?',
//       announcementsList: [
//         "🚀 New Digital Savings Account with 7% interest!",
//         "📱 Mobile Banking App now available on Play Store & App Store",
//         "🔐 Enhanced security features implemented for safe banking",
//         "💼 Business Loan interest rates reduced by 0.5%",
//         "🏦 New branch opening in Pune next month"
//       ]
//     },
//     mr: {
//       navItems: [
//         { label: 'संस्था', hasDropdown: false },
//         { label: 'संचालक', hasDropdown: true, dropdownItems: ['अध्यक्ष', 'व्यवस्थापकीय संचालक', 'कार्यकारी संचालक'] },
//         { label: 'योजना', hasDropdown: true, dropdownItems: [
//           { label: 'ठेव योजना', hasSubDropdown: true, subItems: [
//             'पेन्शन ठेव योजना', 'आवर्ती ठेव योजना (आरडी)', 'अर्धवेळ ठेव योजना', 
//             'शुभमंगल ठेव योजना', 'अब्जाधीश ठेव योजना'
//           ]},
//           { label: 'कर्ज योजना', hasSubDropdown: true, subItems: ['वैयक्तिक कर्ज'] },
//           { label: 'सोने कर्ज योजना', hasSubDropdown: true, subItems: [
//             'ईएमआय सोने कर्ज', 'नियमित सोने कर्ज', 'सोपे सोने कर्ज', 
//             'सोने कर्ज ओव्हरड्राफ्ट (सी.सी.)', 'बुलेट सोने कर्ज', 'दारस्थ (होम रीच) सोने कर्ज'
//           ]}
//         ]},
//         { label: 'खाते', hasDropdown: true, dropdownItems: ['बचत खाते', 'चालू खाते', 'प्रीमियम बचत खाते'] },
//         { label: 'शाखा', hasDropdown: true, dropdownItems: ['शाखा', 'ग्राहक सेवा केंद्र'] },
//         { label: 'कर्ज', hasDropdown: true, dropdownItems: ['सोन्याचे कर्ज प्रतिमा', 'वैयक्तिक कर्ज प्रतिमा', 'हायपोथेकेशन कर्ज प्रतिमा', 'घर कर्ज प्रतिमा', 'वाहन कर्ज प्रतिमा', 'महिला कर्ज प्रतिमा', 'शिक्षण कर्ज प्रतिमा'] },
//         { label: 'गॅलरी', hasDropdown: false },
//         { label: 'मीडिया', hasDropdown: false },
//         { label: 'वार्षिक अहवाल', hasDropdown: false },
//         { label: 'वारंवार विचारले जाणारे प्रश्न', hasDropdown: false },
//         { label: 'संपर्क', hasDropdown: false }
//       ],
//       bankName: 'शिवप्रताप मल्टीस्टेट बँक',
//       bankNameShort: 'शिवप्रताप बँक',
//       trustedSince: '१९८५ पासून विश्वासार्ह',
//       calculator: 'कॅल्क्युलेटर',
//       calc: 'कॅल्क',
//       mobileBanking: 'मोबाईल बँकिंग',
//       mobile: 'मोबाईल',
//       announcements: 'घोषणा:',
//       menu: 'मेनू',
//       language: 'भाषा:',
//       needAssistance: 'मदतीची आवश्यकता आहे का?',
//       announcementsList: [
//         "🚀 ७% व्याज दरासह नवीन डिजिटल बचत खाते!",
//         "📱 मोबाईल बँकिंग अॅप आता प्ले स्टोर आणि अॅप स्टोवर उपलब्ध",
//         "🔐 सुरक्षित बँकिंगसाठी सुधारित सुरक्षा वैशिष्ट्ये लागू केली",
//         "💼 व्यवसाय कर्जाचे व्याज दर ०.५% कमी केले",
//         "🏦 पुढील महिन्यात पुण्यात नवीन शाखा सुरू होणार"
//       ]
//     }
//   };

//   const currentLang = selectedLanguage === 'English' ? 'en' : 'mr';
//   const currentContent = translations[currentLang];

//   const getNavigationPath = (mainItem, dropdownItem, subItem = null) => {
//     const langSuffix = currentLang === 'mr' ? '/mr' : '';

//     const pathMap = {
//       'Organization': `/about${langSuffix}`,
//       'Chairman': `/chairman${langSuffix}`,
//       'Executive Directors': `/executive-director${langSuffix}`,
//       'Managing Director': `/managing-director${langSuffix}`,
//       'Pension Deposit Scheme': `/plan-pension${langSuffix}`,
//       'Recurring Deposit Scheme (RD)': `/plan-recurring${langSuffix}`,
//       'Half Price Deposit Scheme': `/plan-half-price${langSuffix}`,
//       'Subhmangal Deposit Scheme': `/plan-subhmangal${langSuffix}`,
//       'Billionaire Deposit Scheme': `/plan-billionaire${langSuffix}`,
//       'Personal Loan': `/plan-personal${langSuffix}`,
//       'EMI Gold Loan': `/plan-emi-gold${langSuffix}`,
//       'Regular Gold Loan': `/plan-regular-gold${langSuffix}`,
//       'Easy Gold Loan': `/plan-easy-gold${langSuffix}`,
//       'Gold Loan Overdraft (C.C.)': `/plan-gold-overdraft${langSuffix}`,
//       'Bullet Gold Loan': `/plan-bullet-gold${langSuffix}`,
//       'Door Step (Home Reach) Gold Loan': `/plan-doorstep-gold${langSuffix}`,
//       'Savings Account': `/savings-account${langSuffix}`,
//       'Current Account': `/current-account${langSuffix}`,
//       'premium savings account': `/premium-savings-account${langSuffix}`,
//       'Branch': `/branch${langSuffix}`,
//       'Customer Service Center': `/customer-service${langSuffix}`,
//       'Gallery': `/gallery${langSuffix}`,
//       'Media': `/media${langSuffix}`,
//       'Annual Report': `/annual-report${langSuffix}`,
//       'FAQ': `/faq${langSuffix}`,
//       'Contact': `/contact${langSuffix}`,
//     };

//     const key = subItem || dropdownItem || mainItem;
//     return pathMap[key] || '/';
//   };

//   const handleLanguageChange = (langName) => {
//     setSelectedLanguage(langName);
//     const langCode = langName === 'English' ? 'en' : 'mr';
//     changeLanguage(langCode);
//     setIsLanguageDropdownOpen(false);
//   };

//   const handleNavigation = (path) => {
//     navigate(path);
//     setActiveDropdown(null);
//     setActiveSubDropdown(null);
//     setIsMobileMenuOpen(false);
//   };

//   const handleMobileBankingClick = () => {
//     window.open('https://play.google.com/store/apps/details?id=com.your.bank.app', '_blank');
//   };

//   const handleCalculatorClick = () => {
//     navigate('/calculator');
//   };

//   const handleAddressClick = () => {
//     window.open('https://www.google.com/maps/search/?api=1&query=Shivpratap+Gold+Tower%2C+Power+House+Rd%2C+Hanmant+Bazar%2C+Vita%2C+Maharashtra+415311', '_blank');
//   };

//   const handlePhoneClick = () => {
//     window.open('tel:+919876543210', '_blank');
//   };

//   const handleEmailClick = () => {
//     window.open('mailto:info@shivpratapbank.com', '_blank');
//   };

//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (isMobileMenuOpen && !event.target.closest('.mobile-menu')) {
//         setIsMobileMenuOpen(false);
//       }
//       if (isLanguageDropdownOpen && !event.target.closest('.language-dropdown')) {
//         setIsLanguageDropdownOpen(false);
//       }
//     };
//     document.addEventListener('mousedown', handleClickOutside);
//     return () => document.removeEventListener('mousedown', handleClickOutside);
//   }, [isMobileMenuOpen, isLanguageDropdownOpen]);

//   return (
//     <div className="w-full font-sans">
//       {/* Top Bar */}
//       <div 
//         className={`w-full hidden sm:flex items-center justify-between transition-all duration-300 ${
//           screenSize === 'desktop' ? 'px-8 py-3' : 'px-4 py-2'
//         }`}
//         style={{
//           background: 'linear-gradient(135deg, #b03462 0%, #d946a6 30%, #ec4899 100%)',
//           color: 'white',
//         }}
//       >
//         <div className="flex items-center truncate cursor-pointer hover:text-pink-50" onClick={handleAddressClick}>
//           <FaMapMarkerAlt className="mr-2 text-pink-200" size={14} />
//           <span className="truncate">
//             {screenSize === 'desktop' 
//               ? 'Shivpratap Gold Tower, Power House Rd, Hanmant Bazar, Vita, Maharashtra 415311'
//               : 'Shivpratap Tower, Vita'}
//           </span>
//         </div>

//         <div className="flex items-center space-x-6">
//           <div className="flex items-center cursor-pointer hover:text-pink-100" onClick={handlePhoneClick}>
//             <FaPhone className="mr-2" size={14} />
//             <span>+91 98765 43210</span>
//           </div>

//           <div className="flex items-center cursor-pointer hover:text-pink-100" onClick={handleEmailClick}>
//             <FaEnvelope className="mr-2" size={14} />
//             <span className="hidden md:inline">info@shivpratapbank.com</span>
//           </div>

//           <div className="hidden md:flex items-center space-x-3 border-l border-pink-300 pl-4">
//             <a href="https://facebook.com/shivpratapbank" target="_blank" rel="noopener noreferrer">
//               <FaFacebook size={16} className="hover:text-pink-100" />
//             </a>
//             <a href="https://instagram.com/shivpratapbank" target="_blank" rel="noopener noreferrer">
//               <FaInstagram size={16} className="hover:text-pink-100" />
//             </a>
//             <a href="https://twitter.com/shivpratapbank" target="_blank" rel="noopener noreferrer">
//               <FaTwitter size={16} className="hover:text-pink-100" />
//             </a>
//             <a href="https://youtube.com/@shivpratapbank" target="_blank" rel="noopener noreferrer">
//               <FaYoutube size={16} className="hover:text-pink-100" />
//             </a>
//           </div>

//           {/* Language Dropdown - Fixed */}
//           <div className="relative language-dropdown">
//             <button 
//               className="flex items-center px-3 py-1 rounded hover:bg-pink-700"
//               onClick={() => setIsLanguageDropdownOpen(!isLanguageDropdownOpen)}
//             >
//               <FaGlobe className="mr-1" size={14} />
//               <span className="hidden sm:inline">{selectedLanguage}</span>
//               <FaChevronDown size={10} className="ml-1" />
//             </button>
//             {isLanguageDropdownOpen && (
//               <div className="absolute right-0 mt-1 w-32 bg-white rounded shadow-lg z-50">
//                 {languages.map(lang => (
//                   <button
//                     key={lang.code}
//                     onClick={() => handleLanguageChange(lang.name)}
//                     className="block w-full text-left px-4 py-2 hover:bg-pink-50 hover:text-pink-600"
//                   >
//                     {lang.name}
//                   </button>
//                 ))}
//               </div>
//             )}
//           </div>
//         </div>
//       </div>

//       {/* Main Navbar */}
//       <div className={`w-full sticky top-0 z-40 transition-all duration-300 ${isScrolled ? 'shadow-xl' : 'shadow-lg'}`}
//         style={{ background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)' }}
//       >
//         <div className="mx-auto px-4 sm:px-6 lg:px-8">
//           <div className={`flex items-center justify-between ${screenSize === 'mobile' ? 'h-14' : 'h-16'}`}>
//             {/* Logo */}
//             <div className="flex items-center cursor-pointer" onClick={() => navigate('/')}>
//               <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg`}
//                 style={{ background: 'linear-gradient(135deg, #b03462 0%, #ec4899 100%)' }}>
//                 SPB
//               </div>
//               <div className="ml-3 sm:ml-4">
//                 <h1 className={`font-bold ${screenSize === 'mobile' ? 'text-base' : 'text-xl'}`} style={{ color: '#b03462' }}>
//                   {screenSize === 'mobile' ? currentContent.bankNameShort : currentContent.bankName}
//                 </h1>
//                 <p className="text-xs text-gray-600">{currentContent.trustedSince}</p>
//               </div>
//             </div>

//             {/* Desktop Menu */}
//             <div className="hidden lg:flex items-center space-x-1">
//               {currentContent.navItems.map((item, i) => (
//                 <div key={i} className="relative group">
//                   <button
//                     className={`px-3 py-2 rounded hover:bg-pink-50 transition-colors whitespace-nowrap ${activeDropdown === item.label ? 'text-pink-600 font-semibold' : 'text-gray-700'}`}
//                     onMouseEnter={() => setActiveDropdown(item.label)}
//                     onMouseLeave={() => setActiveDropdown(null)}
//                     onClick={() => !item.hasDropdown && handleNavigation(getNavigationPath(item.label))}
//                   >
//                     {item.label}
//                     {item.hasDropdown && <FaChevronDown className="ml-1 inline text-xs" />}
//                   </button>

//                   {item.hasDropdown && activeDropdown === item.label && (
//                     <div className="absolute left-0 top-full mt-1 w-64 bg-white rounded-lg shadow-xl py-2 z-50 border border-gray-100"
//                       onMouseEnter={() => setActiveDropdown(item.label)}
//                       onMouseLeave={() => setActiveDropdown(null)}
//                     >
//                       {item.dropdownItems.map((drop, idx) => (
//                         <div key={idx} className="relative">
//                           {drop.hasSubDropdown ? (
//                             <>
//                               <div
//                                 className="px-4 py-2.5 text-sm text-gray-800 hover:bg-pink-50 hover:text-pink-600 cursor-pointer flex justify-between items-center"
//                                 onMouseEnter={() => setActiveSubDropdown(drop.label)}
//                               >
//                                 <span>{drop.label}</span>
//                                 <FaChevronRight size={10} />
//                               </div>

//                               {activeSubDropdown === drop.label && (
//                                 <div className="absolute left-full top-0 w-64 bg-white rounded-lg shadow-xl py-2 ml-1 border border-gray-100">
//                                   {drop.subItems.map((sub, sIdx) => (
//                                     <button
//                                       key={sIdx}
//                                       className="block w-full text-left px-5 py-2 text-sm text-gray-700 hover:bg-pink-50 hover:text-pink-600"
//                                       onClick={() => handleNavigation(getNavigationPath(item.label, drop.label, sub))}
//                                     >
//                                       {sub}
//                                     </button>
//                                   ))}
//                                 </div>
//                               )}
//                             </>
//                           ) : (
//                             <button
//                               className="block w-full text-left px-5 py-2.5 text-sm text-gray-700 hover:bg-pink-50 hover:text-pink-600"
//                               onClick={() => handleNavigation(getNavigationPath(item.label, drop))}
//                             >
//                               {drop}
//                             </button>
//                           )}
//                         </div>
//                       ))}
//                     </div>
//                   )}
//                 </div>
//               ))}
//             </div>

//             {/* Action Buttons */}
//             <div className="hidden md:flex items-center space-x-3">
//               <button
//                 onClick={handleCalculatorClick}
//                 className="flex items-center px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200 text-gray-800"
//               >
//                 <FaCalculator className="mr-2" />
//                 {screenSize === 'tablet' ? 'Calc' : 'Calculator'}
//               </button>

//               <button
//                 onClick={handleMobileBankingClick}
//                 className="flex items-center px-5 py-2.5 bg-gradient-to-r from-pink-600 to-pink-700 text-white rounded-lg font-medium hover:shadow-lg"
//               >
//                 <FaMobileAlt className="mr-2" />
//                 Mobile Banking
//               </button>
//             </div>

//             {/* Mobile Toggle */}
//             <div className="lg:hidden flex items-center space-x-3">
//               <button onClick={handleMobileBankingClick} className="p-2 bg-gradient-to-r from-pink-600 to-pink-700 text-white rounded-lg">
//                 <FaMobileAlt size={18} />
//               </button>
//               <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="p-2 text-pink-600">
//                 {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* Announcements */}
//         <div className="bg-gradient-to-r from-pink-600 via-pink-500 to-pink-700 text-white py-2 overflow-hidden">
//           <div className="flex items-center whitespace-nowrap animate-marquee">
//             <span className="font-semibold mx-6">
//               <FaBell className="inline mr-2" />
//               {currentContent.announcements}
//             </span>
//             {currentContent.announcementsList.map((msg, i) => (
//               <span key={i} className="mx-8">
//                 {msg} •
//               </span>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {isMobileMenuOpen && (
//         <div className="fixed inset-0 z-50 lg:hidden">
//           <div className="absolute inset-0 bg-black/50" onClick={() => setIsMobileMenuOpen(false)} />
          
//           <div className="absolute right-0 top-0 h-full w-4/5 max-w-sm bg-white shadow-2xl transform transition-transform">
//             <div className="p-5 border-b">
//               <div className="flex justify-between items-center mb-6">
//                 <div className="flex items-center">
//                   <div className="w-10 h-10 rounded-full bg-gradient-to-br from-pink-600 to-pink-700 flex items-center justify-center text-white font-bold">
//                     SPB
//                   </div>
//                   <div className="ml-3">
//                     <h3 className="font-bold">{currentContent.bankNameShort}</h3>
//                     <p className="text-sm text-gray-500">{currentContent.menu}</p>
//                   </div>
//                 </div>
//                 <button onClick={() => setIsMobileMenuOpen(false)}>
//                   <FaTimes size={24} className="text-gray-600" />
//                 </button>
//               </div>

//               {/* Language in mobile */}
//               <div className="mb-6">
//                 <label className="block text-sm font-medium mb-2">{currentContent.language}</label>
//                 <div className="flex gap-2">
//                   {languages.map(lang => (
//                     <button
//                       key={lang.code}
//                       onClick={() => handleLanguageChange(lang.name)}
//                       className={`flex-1 py-2 px-4 rounded-lg text-sm font-medium ${
//                         selectedLanguage === lang.name 
//                           ? 'bg-pink-100 text-pink-700 border-2 border-pink-300' 
//                           : 'bg-gray-100 text-gray-700'
//                       }`}
//                     >
//                       {lang.name}
//                     </button>
//                   ))}
//                 </div>
//               </div>

//               {/* Quick actions */}
//               <div className="grid grid-cols-2 gap-3 mb-6">
//                 <button onClick={handleMobileBankingClick} className="col-span-2 py-3 bg-gradient-to-r from-pink-600 to-pink-700 text-white rounded-lg font-medium">
//                   Mobile Banking
//                 </button>
//                 <button onClick={handleCalculatorClick} className="py-3 border border-gray-300 rounded-lg hover:bg-gray-50">
//                   Calculator
//                 </button>
//               </div>
//             </div>

//             {/* Mobile Navigation Items */}
//             <div className="overflow-y-auto h-[calc(100%-260px)] px-2">
//               {currentContent.navItems.map((item, i) => (
//                 <div key={i} className="border-b border-gray-100">
//                   <button
//                     className="flex justify-between items-center w-full px-4 py-3.5 text-left font-medium hover:bg-gray-50"
//                     onClick={() => {
//                       if (!item.hasDropdown) {
//                         handleNavigation(getNavigationPath(item.label));
//                       } else {
//                         setActiveDropdown(activeDropdown === item.label ? null : item.label);
//                       }
//                     }}
//                   >
//                     {item.label}
//                     {item.hasDropdown && (
//                       <FaChevronRight className={`transition-transform ${activeDropdown === item.label ? 'rotate-90' : ''}`} />
//                     )}
//                   </button>

//                   {item.hasDropdown && activeDropdown === item.label && (
//                     <div className="bg-gray-50 px-4 py-2">
//                       {item.dropdownItems.map((drop, dIdx) => (
//                         <div key={dIdx}>
//                           {drop.hasSubDropdown ? (
//                             <>
//                               <div className="py-2.5 px-3 font-medium text-gray-800 bg-gray-100 rounded mb-1">
//                                 {drop.label}
//                               </div>
//                               {drop.subItems.map((sub, sIdx) => (
//                                 <button
//                                   key={sIdx}
//                                   className="block w-full text-left py-2.5 px-6 text-sm text-gray-700 hover:text-pink-600 hover:bg-pink-50 rounded"
//                                   onClick={() => handleNavigation(getNavigationPath(item.label, drop.label, sub))}
//                                 >
//                                   {sub}
//                                 </button>
//                               ))}
//                             </>
//                           ) : (
//                             <button
//                               className="block w-full text-left py-2.5 px-3 text-gray-700 hover:text-pink-600 hover:bg-pink-50 rounded"
//                               onClick={() => handleNavigation(getNavigationPath(item.label, drop))}
//                             >
//                               {drop}
//                             </button>
//                           )}
//                         </div>
//                       ))}
//                     </div>
//                   )}
//                 </div>
//               ))}
//             </div>

//             {/* Bottom Help */}
//             <div className="absolute bottom-0 left-0 right-0 p-5 border-t bg-gray-50 text-center">
//               <p className="text-sm text-gray-600 mb-3">{currentContent.needAssistance}</p>
//               <button 
//                 onClick={handlePhoneClick}
//                 className="inline-flex items-center text-pink-600 font-bold hover:text-pink-700"
//               >
//                 <FaPhone className="mr-2" />
//                 +91 98765 43210
//               </button>
//             </div>
//           </div>
//         </div>
//       )}

//       <style jsx>{`
//         .animate-marquee {
//           animation: marquee 35s linear infinite;
//         }
//         @keyframes marquee {
//           0% { transform: translateX(100%); }
//           100% { transform: translateX(-100%); }
//         }
//       `}</style>
//     </div>
//   );
// };

// export default Navbar;
