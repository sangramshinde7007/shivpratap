import React, { useState } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { FaMapMarkerAlt, FaPhoneAlt, FaClock, FaEnvelope, FaDirections, FaSearch } from 'react-icons/fa';

const Branches = () => {
  const { language } = useLanguage();
  const isMarathi = language === 'mr';
  const [searchTerm, setSearchTerm] = useState('');

  const translations = {
    en: {
      title: 'Our Branches',
      subtitle: 'Find your nearest branch for personalized service',
      searchPlaceholder: 'Search by city or area...',
      findBranch: 'Find Branch',
      getDirections: 'Get Directions',
      callNow: 'Call Now',
      branchHours: 'Branch Hours',
      email: 'Email',
      services: 'Services Available',
      allServices: 'All loan services available',
      mondayToFriday: 'Monday - Friday',
      saturday: 'Saturday',
      sunday: 'Sunday',
      closed: 'Closed',
      noResultsFound: 'No branches found matching your search'
    },
    mr: {
      title: 'आमच्या शाखा',
      subtitle: 'वैयक्तिकृत सेवेसाठी तुमच्या जवळची शाखा शोधा',
      searchPlaceholder: 'शहर किंवा क्षेत्रानुसार शोधा...',
      findBranch: 'शाखा शोधा',
      getDirections: 'दिशा घ्या',
      callNow: 'आता कॉल करा',
      branchHours: 'शाखा वेळ',
      email: 'ईमेल',
      services: 'उपलब्ध सेवा',
      allServices: 'सर्व कर्ज सेवा उपलब्ध',
      mondayToFriday: 'सोमवार - शुक्रवार',
      saturday: 'शनिवार',
      sunday: 'रविवार',
      closed: 'बंद',
      noResultsFound: 'तुमच्या शोधाशी जुळणारे शाखा आढळल्या नाहीत'
    }
  };

  const t = translations[language];

  const branches = [
    {
      id: 1,
      name: isMarathi ? 'मुख्य शाखा - मुंबई' : 'Main Branch - Mumbai',
      address: isMarathi ? '१२३, नरीमन पॉइंट, मुंबई - ४०००५०' : '123, Nariman Point, Mumbai - 400050',
      phone: '+91-22-23456789',
      email: 'mumbai@bank.com',
      hours: {
        weekdays: '9:00 AM - 6:00 PM',
        saturday: '9:00 AM - 2:00 PM',
        sunday: 'Closed'
      },
      coordinates: '19.0760,72.8777',
      services: isMarathi ? ['सर्व प्रकारचे कर्ज', 'खाते उघडणे', 'विमा सेवा'] : ['All Loan Types', 'Account Opening', 'Insurance Services']
    },
    {
      id: 2,
      name: isMarathi ? 'पुणे शाखा' : 'Pune Branch',
      address: isMarathi ? '४५६, एमजी रोड, पुणे - ४११००१' : '456, MG Road, Pune - 411001',
      phone: '+91-20-23456789',
      email: 'pune@bank.com',
      hours: {
        weekdays: '9:00 AM - 6:00 PM',
        saturday: '9:00 AM - 2:00 PM',
        sunday: 'Closed'
      },
      coordinates: '18.5204,73.8567',
      services: isMarathi ? ['वैयक्तिक कर्ज', 'गृह कर्ज', 'वाहन कर्ज'] : ['Personal Loan', 'Home Loan', 'Vehicle Loan']
    },
    {
      id: 3,
      name: isMarathi ? 'नागपूर शाखा' : 'Nagpur Branch',
      address: isMarathi ? '७८९, सिविल लाइन्स, नागपूर - ४४०००१' : '789, Civil Lines, Nagpur - 440001',
      phone: '+91-712-23456789',
      email: 'nagpur@bank.com',
      hours: {
        weekdays: '9:00 AM - 6:00 PM',
        saturday: '9:00 AM - 2:00 PM',
        sunday: 'Closed'
      },
      coordinates: '21.1458,79.0882',
      services: isMarathi ? ['शेती कर्ज', 'व्यवसाय कर्ज', 'गोल्ड लोन'] : ['Agricultural Loan', 'Business Loan', 'Gold Loan']
    },
    {
      id: 4,
      name: isMarathi ? 'नाशिक शाखा' : 'Nashik Branch',
      address: isMarathi ? '३२१, मुंबई-आग्रा रोड, नाशिक - ४२२००१' : '321, Mumbai-Agra Road, Nashik - 422001',
      phone: '+91-253-23456789',
      email: 'nashik@bank.com',
      hours: {
        weekdays: '9:00 AM - 6:00 PM',
        saturday: '9:00 AM - 2:00 PM',
        sunday: 'Closed'
      },
      coordinates: '19.9975,73.7898',
      services: isMarathi ? ['शैक्षणिक कर्ज', 'महिला कर्ज', 'वैयक्तिक कर्ज'] : ['Education Loan', 'Women Loan', 'Personal Loan']
    },
    {
      id: 5,
      name: isMarathi ? 'औरंगाबाद शाखा' : 'Aurangabad Branch',
      address: isMarathi ? '६५४, जालना रोड, औरंगाबाद - ४३१००१' : '654, Jalna Road, Aurangabad - 431001',
      phone: '+91-240-23456789',
      email: 'aurangabad@bank.com',
      hours: {
        weekdays: '9:00 AM - 6:00 PM',
        saturday: '9:00 AM - 2:00 PM',
        sunday: 'Closed'
      },
      coordinates: '19.8762,75.3433',
      services: isMarathi ? ['गृह कर्ज', 'मालमत्ता कर्ज', 'वाहन कर्ज'] : ['Home Loan', 'Mortgage Loan', 'Vehicle Loan']
    }
  ];

  const filteredBranches = branches.filter(branch => 
    branch.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    branch.address.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getDirections = (coordinates) => {
    window.open(`https://maps.google.com/?q=${coordinates}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-800 to-indigo-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{t.title}</h1>
          <p className="text-xl text-blue-100">{t.subtitle}</p>
        </div>
      </div>

      {/* Search Bar */}
      <div className="max-w-4xl mx-auto px-4 -mt-8">
        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="flex gap-4">
            <div className="flex-1 relative">
              <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder={t.searchPlaceholder}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
              {t.findBranch}
            </button>
          </div>
        </div>
      </div>

      {/* Branches List */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        {filteredBranches.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">{t.noResultsFound}</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredBranches.map((branch) => (
              <div key={branch.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                {/* Branch Header */}
                <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-6">
                  <h3 className="text-xl font-bold mb-2">{branch.name}</h3>
                  <div className="flex items-center text-blue-100">
                    <FaMapMarkerAlt className="mr-2" />
                    <span className="text-sm">{branch.address}</span>
                  </div>
                </div>

                {/* Branch Details */}
                <div className="p-6">
                  {/* Contact Info */}
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center text-gray-700">
                      <FaPhoneAlt className="mr-3 text-blue-600" />
                      <span>{branch.phone}</span>
                    </div>
                    <div className="flex items-center text-gray-700">
                      <FaEnvelope className="mr-3 text-blue-600" />
                      <span className="text-sm">{branch.email}</span>
                    </div>
                  </div>

                  {/* Branch Hours */}
                  <div className="mb-6">
                    <div className="flex items-center mb-2">
                      <FaClock className="mr-2 text-blue-600" />
                      <span className="font-semibold text-gray-800">{t.branchHours}</span>
                    </div>
                    <div className="text-sm text-gray-600 space-y-1">
                      <div>{t.mondayToFriday}: {branch.hours.weekdays}</div>
                      <div>{t.saturday}: {branch.hours.saturday}</div>
                      <div>{t.sunday}: {branch.hours.sunday}</div>
                    </div>
                  </div>

                  {/* Services */}
                  <div className="mb-6">
                    <div className="font-semibold text-gray-800 mb-2">{t.services}:</div>
                    <div className="flex flex-wrap gap-2">
                      {branch.services.map((service, idx) => (
                        <span key={idx} className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                          {service}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <button
                      onClick={() => getDirections(branch.coordinates)}
                      className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center"
                    >
                      <FaDirections className="mr-2" />
                      {t.getDirections}
                    </button>
                    <button
                      onClick={() => window.open(`tel:${branch.phone}`)}
                      className="flex-1 bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition-colors flex items-center justify-center"
                    >
                      <FaPhoneAlt className="mr-2" />
                      {t.callNow}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Branches;
