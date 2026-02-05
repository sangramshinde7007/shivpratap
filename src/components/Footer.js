import React, { useState, useEffect } from 'react'
import { 
  FaFacebook, FaInstagram, FaYoutube, 
  FaPhone, FaEnvelope, FaBuilding, FaUserCircle,
  FaSignInAlt
} from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import { useLanguage } from '../contexts/LanguageContext'
import logo from '../components/Assets/SHIVPRATAP LOGO.png'

const Footer = () => {
  const navigate = useNavigate()
  const { language } = useLanguage()
  const [selectedLanguage, setSelectedLanguage] = useState('English')

  // Sync selectedLanguage with context language
  useEffect(() => {
    setSelectedLanguage(language === 'en' ? 'English' : 'मराठी')
  }, [language])

  // Translations for footer content
  const translations = {
    en: {
      bankName: 'Shivpratap Bank',
      tagline: 'Transact financial transactions through mobile banking now without visiting an institution. More work in less time. Shiv Pratap Multistate Mobile Banking is providing the facility to make customer transactions more dynamic and cashless. Through this, the customer can make payments, pay bills, check account balance, etc. from his mobile phone.',
      followUs: 'Follow Us',
      bankingOnTheGo: 'Banking on the go',
      quickLinks: 'Quick Links',
      ourServices: 'Our Services',
      contactInformation: 'Contact Information',
      businessHours: 'Business Hours',
      loginRegister: 'Login / Register',
      privacyPolicy: 'Privacy Policy',
      termsConditions: 'Terms & Conditions',
      disclaimer: 'Disclaimer',
      allRightsReserved: 'All rights reserved.',
      rbiLicensed: 'RBI Licensed',
      regulatoryInfo: 'Shivpratap Multistate Bank is regulated by the Reserve Bank of India under License No. RBI/BANK/12345/2024. Deposits are insured up to ₹5,00,000 by DICGC.',
      links: {
        home: 'Home',
        aboutUs: 'About Us',
        services: 'Services',
        schemes: 'Schemes',
        contactUs: 'Contact Us'
      },
      servicesList: {
        savingsAccount: 'Savings Account',
        loans: 'Loans',
        currentAccount: 'Current Account',
        mahilaAccount: 'Mahila Bank Account',
        insurance: 'Insurance'
      },
      contact: {
        phone: '+91 9582837032',
        email: 'customercare@shivpratapmultistate.com',
        address: 'Shivpratap Nagari Co-op. Credit Society Ltd. Vita (Multistate) Shiv Pratap Gold Tower, Vita h Khanapur, Dist. Sangli (Maharashtra)'

      },
      hours: {
        monFri: 'Mon - Fri:',
        saturday: 'Saturday:',
        sunday: 'Sunday:',
        monFriTime: '9:00 AM - 5:00 PM',
        saturdayTime: '9:00 AM - 1:00 PM',
        closed: 'Closed'
      }
    },
    mr: {
      bankName: 'शिवप्रताप बँक',
      tagline: 'आर्थिक व्यवहारांसाठी आता संस्थेमध्ये न जात मोबाईल बँकिंगद्वारे व्यवहार करा. कमी वेळेत अधिक कामे. ग्राहकांचे व्यवहार अधिक गतिमान व कॅशलेस व्हावे यासाठी शिवप्रताप मल्टिस्टेट मोबाईल बँकिंग हि सुविधा देत आहे. याद्वारे ग्राहक त्याच्या मोबाईल फोन वरून पैसे देणे-घेणे, बिल भरणे, खात्यातील शिल्लक तपासणे इ. कामे करू शकतो.',
      followUs: 'आमचे अनुसरण करा',
      bankingOnTheGo: 'चालता-फिरता बँकिंग',
      quickLinks: 'द्रुत दुवे',
      ourServices: 'आमच्या सेवा',
      contactInformation: 'संपर्क माहिती',
      businessHours: 'व्यवसाय वेळ',
      loginRegister: 'लॉगिन / नोंदणी',
      privacyPolicy: 'गोपनीयता धोरण',
      termsConditions: 'अटी व शर्ती',
      disclaimer: 'अस्वीकरण',
      allRightsReserved: 'सर्व हक्क राखीव.',
      rbiLicensed: 'आरबीआय परवानाधारक',
      regulatoryInfo: 'शिवप्रताप मल्टीस्टेट बँक भारतीय रिझर्व्ह बँकेद्वारे परवाना क्र. RBI/BANK/12345/2024 अंतर्गत नियमन केली जाते. ठेवी DICGC द्वारे ₹५,००,००० पर्यंत विमा केलेल्या आहेत.',
      links: {
        home: 'होम',
        aboutUs: 'आमच्याबद्दल',
        services: 'सेवा',
        schemes: 'योजना',
        contactUs: 'आमच्याशी संपर्क साधा'
      },
      servicesList: {
        savingsAccount: 'बचत खाते',
        loans: 'कर्ज',
        currentAccount: 'चालू खाते',
        mahilaAccount: 'महिला बँक खाते',
        insurance: 'विमा'
      },
      contact: {
        phone: '+91 9582837032',
        email: 'customercare@shivpratapmultistate.com',
        address: 'शिवप्रताप नागरी सहकारी पतसंस्था मर्यादित विटा (मल्टीस्टेट) शिवप्रताप गोल्ड टॉवर, विटा ता. खानापूर, जि. सांगली (महाराष्ट्र)'

      },
      hours: {
        monFri: 'सोम - शुक्र:',
        saturday: 'शनिवार:',
        sunday: 'रविवार:',
        monFriTime: 'सकाळी ९:०० - संध्याकाळी ५:००',
        saturdayTime: 'सकाळी ९:०० - दुपारी १:००',
        closed: 'बंद'
      }
    }
  }

  // Get current language content
  const currentLang = selectedLanguage === 'English' ? 'en' : 'mr'
  const currentContent = translations[currentLang]

  // Social media links with actual URLs
  const socialLinks = [
    { 
      icon: FaFacebook, 
      url: 'https://www.facebook.com/share/1HwBD72Dr8/', 
      color: 'hover:bg-blue-600',
      name: 'Facebook'
    },
    { 
      icon: FaInstagram, 
      url: 'https://www.instagram.com/shivpratapmultistate?igsh=MWxlb2szNDNnYzZ6cQ==', 
      color: 'hover:bg-pink-600',
      name: 'Instagram'
    },
    { 
      icon: FaYoutube, 
      url: 'https://youtube.com/@shivpratapmultistatevita?si=ynsKf3N1Ic3DRXX-', 
      color: 'hover:bg-red-600',
      name: 'YouTube'
    }
  ]

  // Quick Links with actual paths
  const quickLinks = [
    { name: currentContent.links.home, path: '/' },
    { name: currentContent.links.aboutUs, path: '/about' },
    { name: currentContent.links.services, path: '/plan' },
    { name: currentContent.links.schemes, path: '/loan' },
    { name: currentContent.links.contactUs, path: '/contact' }
  ]

  // Services links
  const services = [
    { name: currentContent.servicesList.savingsAccount, path: '/savings-account' },
    { name: currentContent.servicesList.loans, path: '/loan' },
    { name: currentContent.servicesList.currentAccount, path: '/current-account' },
    { name: currentContent.servicesList.mahilaAccount, path: '/premium-savings-account' },
    { name: currentContent.servicesList.insurance, path: '/plan' }
  ]

  // Contact details
  const contactInfo = [
    { icon: FaPhone, text: currentContent.contact.phone, type: 'phone' },
    { icon: FaEnvelope, text: currentContent.contact.email, type: 'email' },
    { icon: FaBuilding, text: currentContent.contact.address, type: 'address' }
  ]

  const handleLoginClick = () => {
    navigate('/login')
  }

  const handleSocialClick = (url) => {
    window.open(url, '_blank', 'noopener noreferrer')
  }

  const handleLinkClick = (path) => {
    navigate(path)
  }

  const handleContactClick = (type, value) => {
    switch(type) {
      case 'phone':
        window.location.href = `tel:${value}`
        break
      case 'email':
        window.location.href = `mailto:${value}`
        break
      default:
        // For address, could open maps
        const mapsUrl = `https://maps.google.com/?q=${encodeURIComponent(value)}`
        window.open(mapsUrl, '_blank', 'noopener noreferrer')
    }
  }

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-gray-800 text-white py-5 sm:py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Login Button */}
        <div className="flex justify-center sm:justify-end mb-3 sm:mb-4">
          <button
            onClick={handleLoginClick}
            className="group flex items-center gap-2 px-4 py-1.5 sm:px-5 sm:py-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full font-bold text-white hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 hover:scale-105 active:scale-95 text-xs sm:text-sm w-full sm:w-auto justify-center sm:justify-start"
          >
            <FaUserCircle className="text-base sm:text-lg" />
            <span>{currentContent.loginRegister}</span>
            <FaSignInAlt className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 lg:gap-6">
          {/* Bank Info & Social Media */}
          <div className="sm:col-span-2 lg:col-span-1 flex flex-col items-center sm:items-start">
            <div className="mb-2">
              <img
                src={logo}
                alt="Shivpratap Multistate Bank"
                className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl shadow-lg object-contain"
              />
            </div>
            <p className="text-gray-400 mb-3 text-center sm:text-left text-[10px] sm:text-xs leading-relaxed max-w-sm sm:max-w-none">
              {currentContent.tagline}
            </p>
            
            {/* Social Media Links */}
            <div className="mb-3 w-full flex flex-col items-center sm:items-start">
              <h4 className="font-bold text-xs sm:text-sm mb-2 text-gray-200">{currentContent.followUs}</h4>
              <div className="flex space-x-2">
                {socialLinks.map((social, index) => (
                  <button
                    key={index}
                    onClick={() => handleSocialClick(social.url)}
                    className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-gray-700 ${social.color} flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 group relative`}
                    aria-label={`Follow us on ${social.name}`}
                    title={`Follow us on ${social.name}`}
                  >
                    <social.icon className="text-xs sm:text-sm" />
                  </button>
                ))}
              </div>
            </div>

            {/* Mobile Banking Badge */}
            <div className="bg-gray-800/50 rounded-lg p-2 sm:p-3 border border-gray-700 w-full max-w-sm sm:max-w-none">
              <p className="text-[10px] sm:text-xs text-gray-300 mb-1.5 text-center sm:text-left font-medium">{currentContent.bankingOnTheGo}</p>
              <div className="flex justify-center sm:justify-start gap-2">
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" 
                  alt="Get it on Google Play"
                  className="h-5 sm:h-6 cursor-pointer hover:opacity-80 transition-opacity"
                  onClick={() => window.open('https://play.google.com/store/apps/details?id=com.shivpratapbank', '_blank')}
                />
                <img 
                  src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" 
                  alt="Download on the App Store"
                  className="h-5 sm:h-6 cursor-pointer hover:opacity-80 transition-opacity"
                  onClick={() => window.open('https://apps.apple.com/in/app/shivpratap-bank/id123456789', '_blank')}
                />
              </div>
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
            <h4 className="font-bold text-sm sm:text-base mb-2 text-gray-100">{currentContent.quickLinks}</h4>
            <ul className="space-y-1 w-full max-w-xs sm:max-w-none">
              {quickLinks.map((link, index) => (
                <li key={index} className="w-full">
                  <button
                    onClick={() => handleLinkClick(link.path)}
                    className="text-gray-400 hover:text-white transition-colors flex items-center justify-center sm:justify-start gap-1.5 group w-full py-0.5"
                  >
                    <span className="hidden sm:block w-1 h-1 bg-purple-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    <span className="text-xs sm:text-sm">{link.name}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Services */}
          <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
            <h4 className="font-bold text-sm sm:text-base mb-2 text-gray-100">{currentContent.ourServices}</h4>
            <ul className="space-y-1 w-full max-w-xs sm:max-w-none">
              {services.map((service, index) => (
                <li key={index} className="w-full">
                  <button
                    onClick={() => handleLinkClick(service.path)}
                    className="text-gray-400 hover:text-white transition-colors flex items-center justify-center sm:justify-start gap-1.5 group w-full py-0.5"
                  >
                    <span className="hidden sm:block w-1 h-1 bg-purple-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    <span className="text-xs sm:text-sm">{service.name}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact Information */}
          <div className="sm:col-span-2 lg:col-span-1 flex flex-col items-center sm:items-start">
            <h4 className="font-bold text-sm sm:text-base mb-2 text-gray-100">{currentContent.contactInformation}</h4>
            <ul className="space-y-2 w-full max-w-xs sm:max-w-none mb-4">
              {contactInfo.map((contact, index) => (
                <li key={index}>
                  <button
                    onClick={() => handleContactClick(contact.type, contact.text)}
                    className="text-gray-400 hover:text-white transition-colors flex flex-col sm:flex-row items-center sm:items-start gap-1.5 sm:gap-2 group w-full text-center sm:text-left"
                  >
                    <div className="p-1.5 bg-gray-800 rounded-full group-hover:bg-gray-700 transition-colors">
                      <contact.icon className="text-xs text-purple-400" />
                    </div>
                    <span className="text-xs leading-relaxed group-hover:text-purple-300 transition-colors break-words w-full">{contact.text}</span>
                  </button>
                </li>
              ))}
            </ul>

            {/* Business Hours */}
            <div className="w-full max-w-xs sm:max-w-none p-2.5 bg-gray-800/40 rounded-xl border border-gray-700/50 backdrop-blur-sm">
              <h5 className="font-bold text-gray-200 mb-1.5 text-center sm:text-left text-[10px] sm:text-xs uppercase tracking-wider">{currentContent.businessHours}</h5>
              <div className="text-[10px] sm:text-xs text-gray-400 space-y-1">
                <div className="flex justify-between border-b border-gray-700/50 pb-0.5">
                  <span>{currentContent.hours.monFri}</span>
                  <span className="font-medium text-gray-300">{currentContent.hours.monFriTime}</span>
                </div>
                <div className="flex justify-between border-b border-gray-700/50 pb-0.5">
                  <span>{currentContent.hours.saturday}</span>
                  <span className="font-medium text-gray-300">{currentContent.hours.saturdayTime}</span>
                </div>
                <div className="flex justify-between pt-0.5">
                  <span>{currentContent.hours.sunday}</span>
                  <span className="text-red-400 font-medium bg-red-400/10 px-1.5 rounded">{currentContent.hours.closed}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Footer Bottom */}
        <div className="border-t border-gray-700 mt-6 pt-4 text-center text-gray-500 text-[10px] sm:text-xs">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-3">
            <p className="text-center lg:text-left font-medium"> 
              &copy; {new Date().getFullYear()} {currentContent.bankName}. {currentContent.allRightsReserved}
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
              <span className="bg-green-900/40 text-green-400 px-3 py-1 rounded-full text-[10px] font-semibold border border-green-800/50">
                {currentContent.rbiLicensed}
              </span>
              <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-4 mt-1 sm:mt-0">
                <button 
                  onClick={() => navigate('/privacy')}
                  className="hover:text-purple-400 transition-colors relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-purple-400 after:transition-all hover:after:w-full"
                >
                  {currentContent.privacyPolicy}
                </button>
                <button 
                  onClick={() => navigate('/terms')}
                  className="hover:text-purple-400 transition-colors relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-purple-400 after:transition-all hover:after:w-full"
                >
                  {currentContent.termsConditions}
                </button>
                <button 
                  onClick={() => navigate('/disclaimer')}
                  className="hover:text-purple-400 transition-colors relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-purple-400 after:transition-all hover:after:w-full"
                >
                  {currentContent.disclaimer}
                </button>
              </div>
            </div>
          </div>
          
          {/* Regulatory Info */}
          <div className="mt-3 text-[10px] text-gray-600 max-w-4xl mx-auto border-t border-gray-800 pt-3">
            <p className="text-center leading-relaxed opacity-75 hover:opacity-100 transition-opacity">
              {currentContent.regulatoryInfo}
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
};

export default Footer