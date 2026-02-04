import React, { useState } from 'react';
import { 
  FaHome, FaChevronRight, FaHeadset, FaMapMarkerAlt,
 FaSearch, FaDirections, FaTimes
} from 'react-icons/fa';
import { useLanguage } from '../../contexts/LanguageContext';

const CustomerServiceCenter = () => {
  const { language } = useLanguage();
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  // (language comes from context; no local selectedLanguage needed)

  // Translations for customer service center page
  const translations = {
    en: {
      pageTitle: 'Customer Service Center',
      pageSubtitle: 'Reliable Service, Convenient Locations',
      breadcrumbHome: 'Home',
      totalCenters: 'Total Centers',
      districts: 'Districts',
      customerSupport: 'Customer Support',
      searchPlaceholder: 'Search customer service centers...',
      ourCenters: 'Our Customer Service Centers',
      ourCentersDesc: 'Our customer service centers at convenient locations across Maharashtra',
      totalCentersInfo: '{count} customer service centers in Maharashtra',
      noResults: 'No service centers found',
      noResultsDesc: 'Please change your search',
      showAllCenters: 'Show All Centers',
      moreInfo: 'More Info',
      directions: 'Directions',
      contactInfo: 'Contact Information',
      address: 'Address',
      details: 'Details',
      location: 'Location',
      quickActions: 'Quick Actions',
      getDirections: 'Get Directions',
      additionalHelp: 'Additional Help',
      additionalHelpDesc: 'Contact us if you need more assistance',
      customerService: 'Customer Service',
      customerServiceDesc: 'Visit our service centers',
      serviceCenters: 'Service Centers',
      locationsInMaharashtra: 'Various locations in Maharashtra',
      visitNearbyCenter: 'Visit Nearby',
      customerServiceCenter: 'Customer Service Center',
      findNearbyCenter: 'Find Nearby Center',
      personalizedAssistance: 'Get personalized assistance at our {count} convenient customer service center locations',
      thisCenterDedicated: 'This service center is dedicated to providing various customer services.',
      responseTime: 'Within 24 hrs'
    },
    mr: {
      pageTitle: 'ग्राहक सेवा केंद्र',
      pageSubtitle: 'विश्वासार्ह सेवा, सोयीस्कर स्थान',
      breadcrumbHome: 'होम',
      totalCenters: 'एकूण केंद्रे',
      districts: 'जिल्हे',
      customerSupport: 'ग्राहक सहाय्य',
      searchPlaceholder: 'ग्राहक सेवा केंद्र शोधा...',
      ourCenters: 'आमची ग्राहक सेवा केंद्रे',
      ourCentersDesc: 'महाराष्ट्रातील विविध जिल्ह्यांमध्ये सोयीस्कर स्थानांवर आमची ग्राहक सेवा केंद्रे',
      totalCentersInfo: 'महाराष्ट्रातील {count} ग्राहक सेवा केंद्रे',
      noResults: 'कोणतेही सेवा केंद्र सापडले नाही',
      noResultsDesc: 'कृपया आपला शोध बदलून पहा',
      showAllCenters: 'सर्व केंद्रे दाखवा',
      moreInfo: 'अधिक माहिती',
      directions: 'मार्ग',
      contactInfo: 'संपर्क माहिती',
      address: 'पत्ता',
      details: 'तपशील',
      location: 'स्थान',
      quickActions: 'त्वरित क्रिया',
      getDirections: 'मार्ग शोधा',
      additionalHelp: 'अतिरिक्त सहाय्य',
      additionalHelpDesc: 'अधिक मदत हवी असल्यास आमच्याशी संपर्क साधा',
      customerService: 'ग्राहक सेवा',
      customerServiceDesc: 'आमच्या सेवा केंद्रांवर भेट द्या',
      serviceCenters: 'ग्राहक सेवा केंद्रे',
      locationsInMaharashtra: 'महाराष्ट्रातील विविध स्थानांवर',
      visitNearbyCenter: 'जवळच्या',
      customerServiceCenter: 'ग्राहक सेवा केंद्र',
      findNearbyCenter: 'जवळचे केंद्र शोधा',
      personalizedAssistance: 'आमच्या {count} सोयीस्कर स्थानांवर ग्राहक सेवा केंद्रांवर व्यक्तिगत सहाय्य मिळवा',
      thisCenterDedicated: 'हे सेवा केंद्र विविध ग्राहक सेवा पुरविण्यासाठी समर्पित आहे.',
      responseTime: '२४ तासांत'
    }
  };

  // Get current language content
  const currentLang = language;
  const currentContent = translations[currentLang];

  // Service Centers Data
  const serviceCenters = [
    {
      id: 1,
      name: 'नागेवाडी ग्राहक सेवा केंद्र',
      englishName: 'Nagewadi Customer Service Center',
      address: 'नागेवाडी, ता. सांगोला, जि. सोलापूर',
      description: 'सोलापूर जिल्ह्यातील प्रमुख ग्राहक सेवा केंद्र'
    },
    {
      id: 2,
      name: 'कळंबोली (रा.) ग्राहक सेवा केंद्र',
      englishName: 'Kalamboli (Raigad) Customer Service Center',
      address: 'कळंबोली, रायगड जिल्हा, महाराष्ट्र',
      description: 'रायगड जिल्ह्यातील सुविधाजनक सेवा केंद्र'
    },
    {
      id: 3,
      name: 'पारें ग्राहक सेवा केंद्र',
      englishName: 'Paren Customer Service Center',
      address: 'पारें, ता. शिराळा, जि. सांगली',
      description: 'सांगली जिल्ह्यातील प्रमुख सेवा केंद्र'
    },
    {
      id: 4,
      name: 'वेणगाव ग्राहक सेवा केंद्र',
      englishName: 'Vengav Customer Service Center',
      address: 'वेणगाव, ता. खानापूर, जि. सांगली',
      description: 'सोलापूर जिल्ह्यातील ग्राहक सेवा केंद्र'
    },
    {
      id: 5,
      name: 'कराड ग्राहक सेवा केंद्र',
      englishName: 'Karad Customer Service Center',
      address: 'कराड, सातारा जिल्हा, महाराष्ट्र',
      description: 'सातारा जिल्ह्यातील प्रमुख सेवा केंद्र'
    },
    {
      id: 6,
      name: 'बलवडी (खा.) ग्राहक सेवा केंद्र',
      englishName: 'Balwadi (Kha.) Customer Service Center',
      address: 'बलवडी, ता. खानापूर, जि. सांगली',
      description: 'खानापूर तालुक्यातील ग्राहक सेवा केंद्र'
    }
  ];

  // Filter service centers based on search
  const filteredCenters = searchQuery === '' 
    ? serviceCenters 
    : serviceCenters.filter(center => 
        center.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        center.englishName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        center.address.toLowerCase().includes(searchQuery.toLowerCase())
      );

  // Handle location selection
  const handleLocationSelect = (center) => {
    setSelectedLocation(center);
    setTimeout(() => {
      const element = document.getElementById('center-details');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  // Handle get directions
  const handleGetDirections = (center) => {
    const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(center.address)}`;
    window.open(mapsUrl, '_blank');
  };

  return (
    <div className="font-sans bg-gradient-to-b from-rose-50 to-white">
      {/* 1. Hero Banner Section */}
      <section 
        className="relative h-[400px] overflow-hidden"
        style={{
          background: 'linear-gradient(rgba(176, 52, 98, 0.9), rgba(220, 53, 69, 0.85))',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0">
          {/* Pattern Overlay */}
          <div className="absolute inset-0 opacity-10" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23ffffff' fill-opacity='0.4' fill-rule='evenodd'/%3E%3C/svg%3E")`,
            backgroundSize: '300px'
          }}></div>
        </div>

        <div className="relative h-full flex flex-col justify-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Breadcrumb */}
            <nav className="flex items-center text-rose-100 text-sm mb-6">
              <a href="/" className="flex items-center hover:text-white transition-colors">
                <FaHome className="mr-2" />
                {currentContent.breadcrumbHome}
              </a>
              <FaChevronRight className="mx-2 opacity-50" />
              <span className="font-semibold text-white">{currentContent.pageTitle}</span>
            </nav>

            {/* Page Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              {currentLang === 'en' ? (
                <>
                  {currentContent.pageTitle.split(' ').map((word, index) => (
                    <span key={index} className="inline-block mr-3 last:mr-0">
                      {word}
                    </span>
                  ))}
                </>
              ) : (
                <>
                  ग्राहक <span className="bg-gradient-to-r from-rose-300 to-pink-300 bg-clip-text text-transparent">सेवा केंद्र</span>
                </>
              )}
            </h1>
            <p className="text-xl md:text-2xl text-rose-100 max-w-3xl mb-8">
              {currentContent.pageSubtitle}
            </p>

            {/* Stats */}
            <div className="flex flex-wrap gap-6 mt-8">
              <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-xl px-6 py-3 border border-rose-300 border-opacity-30">
                <div className="text-rose-100 text-sm opacity-90">{currentContent.totalCenters}</div>
                <div className="text-2xl font-bold text-white">{serviceCenters.length}</div>
              </div>
              <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-xl px-6 py-3 border border-rose-300 border-opacity-30">
                <div className="text-rose-100 text-sm opacity-90">{currentContent.districts}</div>
                <div className="text-2xl font-bold text-white">3+</div>
              </div>
              <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-xl px-6 py-3 border border-rose-300 border-opacity-30">
                <div className="text-rose-100 text-sm opacity-90">{currentContent.customerSupport}</div>
                <div className="text-2xl font-bold text-white">24/7</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Filter & Search Section */}
      <section className="sticky top-0 z-40 bg-white shadow-lg border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="flex-1">
                <div className="relative">
                  <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    placeholder={currentContent.searchPlaceholder}
                    className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-300 focus:border-rose-500 focus:ring-2 focus:ring-rose-200 outline-none transition-all"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                  {searchQuery && (
                    <button
                      onClick={() => setSearchQuery('')}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                    >
                      <FaTimes />
                    </button>
                  )}
                </div>
              </div>
            </div>

            {/* Quick Info */}
            <div className="mt-4 text-sm text-gray-600">
              {currentContent.totalCentersInfo.replace('{count}', serviceCenters.length)}
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-10">
          <h2 className="text-3xl font-bold text-gray-800 mb-3">{currentContent.ourCenters}</h2>
          <p className="text-gray-600">
            {currentContent.ourCentersDesc}
          </p>
        </div>

        {/* Service Centers Listing */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredCenters.map(center => (
            <div 
              key={center.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 hover:border-rose-300 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="p-6">
                {/* Center Name */}
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{center.name}</h3>
                  <p className="text-rose-600 text-sm font-medium">{center.englishName}</p>
                </div>

                {/* Address */}
                <div className="mb-6">
                  <div className="flex items-start">
                    <FaMapMarkerAlt className="text-gray-400 mt-1 mr-3 flex-shrink-0" />
                    <div className="text-gray-600 text-sm">{center.address}</div>
                  </div>
                </div>

                {/* Description */}
                <div className="mb-6">
                  <p className="text-sm text-gray-500">{center.description}</p>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <button
                    onClick={() => handleLocationSelect(center)}
                    className="flex-1 bg-gradient-to-r from-rose-600 to-rose-800 text-white px-4 py-2 rounded-lg font-medium hover:shadow-lg transition-all duration-300"
                  >
                    {currentContent.moreInfo}
                  </button>
                  <button
                    onClick={() => handleGetDirections(center)}
                    className="flex items-center px-4 py-2 rounded-lg border border-rose-600 text-rose-600 hover:bg-rose-50 transition-colors"
                  >
                    <FaDirections className="mr-2" />
                    {currentContent.directions}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No Results Message */}
        {filteredCenters.length === 0 && (
          <div className="text-center py-16 bg-gray-50 rounded-2xl">
            <FaMapMarkerAlt className="text-gray-400 text-5xl mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-800 mb-2">{currentContent.noResults}</h3>
            <p className="text-gray-600 mb-6">{currentContent.noResultsDesc}</p>
            <button
              onClick={() => setSearchQuery('')}
              className="bg-gradient-to-r from-rose-600 to-rose-800 text-white px-6 py-3 rounded-lg font-medium hover:shadow-lg transition-all"
            >
              {currentContent.showAllCenters}
            </button>
          </div>
        )}

        {/* Center Details Section */}
        {selectedLocation && (
          <section id="center-details" className="scroll-mt-24 mt-12">
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200">
              <div className="relative h-48 bg-gradient-to-r from-rose-600 to-rose-800">
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <div className="flex items-center justify-between">
                    <div>
                      <h2 className="text-4xl font-bold text-white">{selectedLocation.name}</h2>
                      <p className="text-rose-100 text-lg">{selectedLocation.englishName}</p>
                    </div>
                    <button
                      onClick={() => setSelectedLocation(null)}
                      className="bg-white text-gray-800 p-2 rounded-full hover:bg-gray-100 transition-colors"
                    >
                      <FaTimes size={20} />
                    </button>
                  </div>
                </div>
              </div>

              <div className="p-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  {/* Contact Details */}
                  <div className="lg:col-span-2">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-800 mb-6">{currentContent.contactInfo}</h3>
                        <div className="space-y-4">
                          <div className="flex items-start">
                            <FaMapMarkerAlt className="text-rose-600 mt-1 mr-4 flex-shrink-0" />
                            <div>
                              <div className="font-bold text-gray-800">{currentContent.address}</div>
                              <div className="text-gray-700">{selectedLocation.address}</div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Description */}
                      <div>
                        <h3 className="text-2xl font-bold text-gray-800 mb-6">{currentContent.details}</h3>
                        <div className="text-gray-700 leading-relaxed">
                          <p>{selectedLocation.description}</p>
                          <div className="mt-6 p-4 bg-rose-50 rounded-lg">
                            <p className="text-sm text-gray-600">
                              {currentContent.thisCenterDedicated}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Map */}
                    <div className="mt-8 pt-8 border-t border-gray-200">
                      <h3 className="text-2xl font-bold text-gray-800 mb-4">{currentContent.location}</h3>
                      <div className="bg-gray-100 rounded-xl h-64 overflow-hidden">
                        <iframe
                          src={`https://maps.google.com/maps?q=${encodeURIComponent(selectedLocation.address)}&output=embed`}
                          width="100%"
                          height="100%"
                          style={{ border: 0 }}
                          allowFullScreen
                          loading="lazy"
                          referrerPolicy="no-referrer-when-downgrade"
                          title="Service Center Location Map"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Quick Actions */}
                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">{currentContent.quickActions}</h3>
                    <button
                      onClick={() => handleGetDirections(selectedLocation)}
                      className="w-full bg-gradient-to-r from-rose-600 to-rose-800 text-white py-4 rounded-xl font-bold text-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center"
                    >
                      <FaDirections className="mr-3" />
                      {currentContent.getDirections}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Contact Support Section */}
        <section className="mt-12">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-200">
            <div className="flex items-center mb-8">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-rose-500 to-pink-500 flex items-center justify-center mr-6">
                <FaHeadset className="text-white text-2xl" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-gray-800">{currentContent.additionalHelp}</h2>
                <p className="text-gray-600">{currentContent.additionalHelpDesc}</p>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-6">
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6 border border-blue-200">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                    <FaHeadset className="text-blue-600 text-xl" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800">{currentContent.customerService}</h3>
                    <p className="text-sm text-gray-600">{currentContent.customerServiceDesc}</p>
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-bold text-blue-700">{currentContent.serviceCenters}</div>
                  <p className="text-sm text-gray-600 mt-1">{currentContent.locationsInMaharashtra}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call-to-Action Section */}
        <section className="mt-12">
          <div 
            className="relative overflow-hidden rounded-2xl shadow-2xl"
            style={{
              background: 'linear-gradient(135deg, #b03462 0%, #d63384 50%, #e83e8c 100%)'
            }}
          >
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
              }}></div>
            </div>

            <div className="relative p-12 text-center text-white z-10">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  {currentLang === 'en' ? (
                    <>
                      {currentContent.visitNearbyCenter} <span className="bg-gradient-to-r from-rose-200 to-white bg-clip-text text-transparent">{currentContent.customerServiceCenter}</span>
                    </>
                  ) : (
                    <>
                      जवळच्या <span className="bg-gradient-to-r from-rose-200 to-white bg-clip-text text-transparent">ग्राहक सेवा केंद्र</span> ला भेट द्या
                    </>
                  )}
                </h2>
                <p className="text-xl text-rose-100 mb-10 max-w-2xl mx-auto">
                  {currentContent.personalizedAssistance.replace('{count}', serviceCenters.length)}
                </p>
                
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <button className="bg-white text-rose-700 px-10 py-5 rounded-full font-bold text-xl hover:bg-rose-50 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                    {currentContent.findNearbyCenter}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default CustomerServiceCenter;