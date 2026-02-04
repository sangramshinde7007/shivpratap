import React, { useState, useEffect } from 'react'
import { 
  FaFacebook, FaInstagram, FaTwitter, FaYoutube, 
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
      tagline: 'Your trusted financial partner since 1985',
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
        deposits: 'Deposits',
        digitalBanking: 'Digital Banking',
        insurance: 'Insurance'
      },
      contact: {
        phone: '+91 9582837032',
        email: 'customercare@shivpratapmultistate.com',
        address: 'Shivpratap Plaza, Pune, Maharashtra'
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
      tagline: '१९८५ पासून तुमचा विश्वासू आर्थिक भागीदार',
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
        deposits: 'ठेवी',
        digitalBanking: 'डिजिटल बँकिंग',
        insurance: 'विमा'
      },
      contact: {
        phone: '+91 9582837032',
        email: 'customercare@shivpratapmultistate.com',
        address: 'शिवप्रताप प्लाझा, पुणे, महाराष्ट्र'
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
      url: 'https://facebook.com/ShivpratapBank', 
      color: 'hover:bg-blue-600',
      name: 'Facebook'
    },
    { 
      icon: FaInstagram, 
      url: 'https://instagram.com/ShivpratapBank', 
      color: 'hover:bg-pink-600',
      name: 'Instagram'
    },
    { 
      icon: FaTwitter, 
      url: 'https://twitter.com/ShivpratapBank', 
      color: 'hover:bg-blue-400',
      name: 'Twitter'
    },
    { 
      icon: FaYoutube, 
      url: 'https://youtube.com/c/ShivpratapBank', 
      color: 'hover:bg-red-600',
      name: 'YouTube'
    }
  ]

  // Quick Links with actual paths
  const quickLinks = [
    { name: currentContent.links.home, path: '/' },
    { name: currentContent.links.aboutUs, path: '/about' },
    { name: currentContent.links.services, path: '/services' },
    { name: currentContent.links.schemes, path: '/schemes' },
    { name: currentContent.links.contactUs, path: '/contact' }
  ]

  // Services links
  const services = [
    { name: currentContent.servicesList.savingsAccount, path: '/services/savings' },
    { name: currentContent.servicesList.loans, path: '/services/loans' },
    { name: currentContent.servicesList.deposits, path: '/services/deposits' },
    { name: currentContent.servicesList.digitalBanking, path: '/services/digital-banking' },
    { name: currentContent.servicesList.insurance, path: '/services/insurance' }
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
    <footer className="bg-gradient-to-b from-gray-900 to-gray-800 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Login Button */}
        <div className="flex justify-end mb-6 md:mb-8">
          <button
            onClick={handleLoginClick}
            className="group flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full font-bold text-white hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 hover:scale-105 active:scale-95 text-sm sm:text-base"
          >
            <FaUserCircle className="text-lg sm:text-xl" />
            <span className="hidden sm:inline">{currentContent.loginRegister}</span>
            <span className="sm:hidden">{currentContent.loginRegister.split(' / ')[0]}</span>
            <FaSignInAlt className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* Bank Info & Social Media */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center justify-center mb-4">
              <img
                src={logo}
                alt="Shivpratap Multistate Bank"
                className="w-24 h-24 sm:w-32 sm:h-32 rounded-xl shadow-lg object-contain"
              />
            </div>
            <p className="text-gray-400 mb-4 sm:mb-6 text-center sm:text-left text-sm sm:text-base">
              {currentContent.tagline}
            </p>
            
            {/* Social Media Links */}
            <div className="mb-4 sm:mb-6">
              <h4 className="font-bold text-base sm:text-lg mb-3 sm:mb-4 text-center sm:text-left">{currentContent.followUs}</h4>
              <div className="flex justify-center sm:justify-start space-x-3">
                {socialLinks.map((social, index) => (
                  <button
                    key={index}
                    onClick={() => handleSocialClick(social.url)}
                    className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-gray-700 ${social.color} flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 group relative`}
                    aria-label={`Follow us on ${social.name}`}
                    title={`Follow us on ${social.name}`}
                  >
                    <social.icon className="text-sm sm:text-base" />
                    <span className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                      {social.name}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Mobile Banking Badge */}
            <div className="bg-gray-800/50 rounded-lg p-3 sm:p-4 border border-gray-700">
              <p className="text-xs sm:text-sm text-gray-300 mb-2 text-center sm:text-left">{currentContent.bankingOnTheGo}</p>
              <div className="flex justify-center sm:justify-start gap-2">
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" 
                  alt="Get it on Google Play"
                  className="h-6 sm:h-8 cursor-pointer hover:opacity-80 transition-opacity"
                  onClick={() => window.open('https://play.google.com/store/apps/details?id=com.shivpratapbank', '_blank')}
                />
                <img 
                  src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" 
                  alt="Download on the App Store"
                  className="h-6 sm:h-8 cursor-pointer hover:opacity-80 transition-opacity"
                  onClick={() => window.open('https://apps.apple.com/in/app/shivpratap-bank/id123456789', '_blank')}
                />
              </div>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-base sm:text-lg mb-3 sm:mb-4 text-center sm:text-left">{currentContent.quickLinks}</h4>
            <ul className="space-y-1 sm:space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => handleLinkClick(link.path)}
                    className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 group text-sm sm:text-base"
                  >
                    <span className="w-1 h-1 bg-gray-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h4 className="font-bold text-base sm:text-lg mb-3 sm:mb-4 text-center sm:text-left">{currentContent.ourServices}</h4>
            <ul className="space-y-1 sm:space-y-2">
              {services.map((service, index) => (
                <li key={index}>
                  <button
                    onClick={() => handleLinkClick(service.path)}
                    className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 group text-sm sm:text-base"
                  >
                    <span className="w-1 h-1 bg-gray-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {service.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact Information */}
          <div className="sm:col-span-2 lg:col-span-1">
            <h4 className="font-bold text-base sm:text-lg mb-3 sm:mb-4 text-center sm:text-left">{currentContent.contactInformation}</h4>
            <ul className="space-y-2 sm:space-y-3">
              {contactInfo.map((contact, index) => (
                <li key={index}>
                  <button
                    onClick={() => handleContactClick(contact.type, contact.text)}
                    className="text-gray-400 hover:text-white transition-colors flex items-start gap-3 group w-full text-left text-sm sm:text-base"
                  >
                    <contact.icon className="mt-1 flex-shrink-0 text-sm sm:text-base" />
                    <span className="group-hover:underline break-words">{contact.text}</span>
                  </button>
                </li>
              ))}
            </ul>

            {/* Business Hours */}
            <div className="mt-4 sm:mt-6 p-3 sm:p-4 bg-gray-800/30 rounded-lg border border-gray-700">
              <h5 className="font-bold text-gray-300 mb-2 text-center sm:text-left text-sm sm:text-base">{currentContent.businessHours}</h5>
              <div className="text-xs sm:text-sm text-gray-400 space-y-1">
                <div className="flex justify-between">
                  <span>{currentContent.hours.monFri}</span>
                  <span>{currentContent.hours.monFriTime}</span>
                </div>
                <div className="flex justify-between">
                  <span>{currentContent.hours.saturday}</span>
                  <span>{currentContent.hours.saturdayTime}</span>
                </div>
                <div className="flex justify-between">
                  <span>{currentContent.hours.sunday}</span>
                  <span className="text-red-400">{currentContent.hours.closed}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Footer Bottom */}
        <div className="border-t border-gray-700 mt-6 sm:mt-8 pt-6 sm:pt-8 text-center text-gray-500 text-xs sm:text-sm">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
            <p className="text-center lg:text-left"> {new Date().getFullYear()} {currentContent.bankName}. {currentContent.allRightsReserved}</p>
            <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
              <span className="bg-green-800/30 text-green-400 px-2 sm:px-3 py-1 rounded-full text-xs">
                {currentContent.rbiLicensed}
              </span>
              <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-4">
                <button 
                  onClick={() => navigate('/privacy')}
                  className="hover:text-white transition-colors text-xs sm:text-base"
                >
                  {currentContent.privacyPolicy}
                </button>
                <button 
                  onClick={() => navigate('/terms')}
                  className="hover:text-white transition-colors text-xs sm:text-base"
                >
                  {currentContent.termsConditions}
                </button>
                <button 
                  onClick={() => navigate('/disclaimer')}
                  className="hover:text-white transition-colors text-xs sm:text-base"
                >
                  {currentContent.disclaimer}
                </button>
              </div>
            </div>
          </div>
          
          {/* Regulatory Info */}
          <div className="mt-3 sm:mt-4 text-xs text-gray-600 max-w-4xl mx-auto">
            <p className="text-center leading-relaxed">
              {currentContent.regulatoryInfo}
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
};

export default Footer