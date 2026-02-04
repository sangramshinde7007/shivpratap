import React, { useState } from 'react';
import { FaQuestionCircle, FaEnvelope, FaChevronDown, FaGlobe } from 'react-icons/fa';
import { useLanguage } from '../../contexts/LanguageContext';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const { language, changeLanguage } = useLanguage();
  const [selectedLanguage, setSelectedLanguage] = useState('English');

  // Sync selectedLanguage with context language
  React.useEffect(() => {
    setSelectedLanguage(language === 'en' ? 'English' : 'मराठी');
  }, [language]);

  // Language options
  const languages = [
    { code: 'en', name: 'English' },
    { code: 'mr', name: 'मराठी' }
  ];

  // Translations for FAQ content
  const translations = {
    en: {
      title: 'Frequently Asked Questions (FAQs)',
      subtitle: 'Find answers to common questions about Shivpratap Multistate Bank\'s services and account management.',
      categories: 'FAQ Categories',
      needHelp: 'Need more help? Contact us at info@shivpratapbank.com',
      answer: 'Answer:',
      categoryLabels: {
        'General': 'General',
        'Accounts': 'Accounts',
        'Digital Banking': 'Digital Banking',
        'Security': 'Security'
      },
      faqs: [
        {
          question: "Can I access my account from more than one computer?",
          answer: "Yes. You can access your account from any computer that has internet access and a secure web browser (128-bit security). This allows you to view your account, pay bills, and perform banking activities from home, office, or while traveling.",
          category: "Digital Banking"
        },
        {
          question: "Tips for Choosing a Password",
          answer: "To keep your account secure, follow these password guidelines:\n\n• Avoid using personal information that can be easily guessed\n• Do not use dictionary words from any language\n• Create a password that is easy for you to remember but hard for others to guess\n• Consider using a passphrase instead of a single word\n\nPassphrases:\nLonger passwords or passphrases are more secure. Avoid using names, common phrases, famous quotes, or song lyrics.",
          category: "Security"
        },
        {
          question: "Password Protection Tips",
          answer: "For maximum security, follow these precautions:\n\n• Do not share your password via phone or email\n• Do not reuse old passwords\n• Never use your User ID as your password\n• Do not discuss your password in front of others\n• Avoid giving hints about your password\n• Do not write passwords on paper or store them digitally without encryption\n• Avoid using 'Remember Password' features on public or shared devices",
          category: "Security"
        },
        {
          question: "How can I change or update my mobile number?",
          answer: "To update your registered mobile number, kindly submit a request at your nearest Shivpratap Multistate Bank branch.",
          category: "Accounts"
        },
        {
          question: "How can I change or update my mailing address?",
          answer: "Please visit the nearest Shivpratap Multistate Bank branch and submit a request to update your mailing address.",
          category: "Accounts"
        },
        {
          question: "How do I check if my Shivpratap Multistate account is closed?",
          answer: "You can check your account status by:\n\n• Contacting Shivpratap Multistate Bank customer service\n• Visiting the official bank website for contact details\n• Visiting your nearest branch if you prefer offline assistance",
          category: "Accounts"
        },
        {
          question: "Whom should I contact for account-related queries?",
          answer: "For any account-related queries, customers are requested to contact their nearest Shivpratap Multistate Bank branch or the customer service department.",
          category: "General"
        }
      ]
    },
    mr: {
      title: 'वारंवार विचारले जाणारे प्रश्न (एफएक्यू)',
      subtitle: 'शिवप्रताप मल्टीस्टेट बँकेच्या सेवा आणि खाते व्यवस्थापनाबद्दल सामान्य प्रश्नांची उत्तरे शोधा.',
      categories: 'एफएक्यू श्रेण्या',
      needHelp: 'अधिक मदतीची आवश्यकता आहे का? आम्हाला info@shivpratapbank.com वर संपर्क साधा',
      answer: 'उत्तर:',
      categoryLabels: {
        'General': 'सामान्य',
        'Accounts': 'खाती',
        'Digital Banking': 'डिजिटल बँकिंग',
        'Security': 'सुरक्षा'
      },
      faqs: [
        {
          question: "मी एकापेक्षा अधिक संगणकावरून माझे खाते ऍक्सेस करू शकतो का?",
          answer: "होय. तुम्ही इंटरनेट ऍक्सेस आणि सुरक्षित वेब ब्राउझर (१२८-बिट सुरक्षा) असलेल्या कोणत्याही संगणकावरून तुमचे खाते ऍक्सेस करू शकता. यामुळे तुम्ही घरी, कार्यालयात किंवा प्रवास करताना तुमचे खाते पाहू शकता, बिले भरू शकता आणि बँकिंग क्रियाकलाप करू शकता.",
          category: "Digital Banking"
        },
        {
          question: "पासवर्ड निवडण्यासाठी टिप्स",
          answer: "तुमचे खाते सुरक्षित ठेवण्यासाठी, या पासवर्ड मार्गदर्शक तत्त्वांचे पालन करा:\n\n• सहज अंदाज लावता येईल अशी वैयक्तिक माहिती वापरणे टाळा\n• कोणत्याही भाषेतील शब्दकोशातील शब्द वापरू नका\n• तुम्हाला लक्षात ठेवणे सोपे पण इतरांना अंदाज लावणे कठीण असे पासवर्ड तयार करा\n• एका शब्दाऐवजी पासफ्रेज वापरण्याचा विचार करा\n\nपासफ्रेज:\nअधिक लांब पासवर्ड किंवा पासफ्रेज अधिक सुरक्षित असतात. नावे, सामान्य वाक्यांश, प्रसिद्ध भाषणे किंवा गीतलेखन वापरणे टाळा.",
          category: "Security"
        },
        {
          question: "पासवर्ड संरक्षण टिप्स",
          answer: "कमाल सुरक्षेसाठी, या खबरदार्या पाळा:\n\n• फोन किंवा ईमेलद्वारे तुमचा पासवर्ड शेअर करू नका\n• जुने पासवर्ड पुन्हा वापरू नका\n• कधीही तुमचा वापरकर्ता आयडी पासवर्ड म्हणून वापरू नका\n• इतरांसमोर तुमचा पासवर्ड चर्चा करू नका\n• तुमच्या पासवर्डबद्दल संकेत देऊ नका\n• कागदावर पासवर्ड लिहू नका किंवा एनक्रिप्शनशिवाय डिजिटली संग्रहित करू नका\n• सार्वजनिक किंवा सामायिक डिव्हाइसेसवर 'पासवर्ड लक्षात ठेवा' वैशिष्ट्ये वापरणे टाळा",
          category: "Security"
        },
        {
          question: "मी माझा मोबाईल नंबर कसा बदलू किंवा अपडेट करू शकतो?",
          answer: "तुमचा नोंदणीकृत मोबाईल नंबर अपडेट करण्यासाठी, कृपया तुमच्या सर्वात जवळच्या शिवप्रताप मल्टीस्टेट बँक शाखेत विनंती सादर करा.",
          category: "Accounts"
        },
        {
          question: "मी माझा पत्ता कसा बदलू किंवा अपडेट करू शकतो?",
          answer: "कृपया सर्वात जवळच्या शिवप्रताप मल्टीस्टेट बँक शाखेला भेट द्या आणि तुमचा पत्ता अपडेट करण्यासाठी विनंती सादर करा.",
          category: "Accounts"
        },
        {
          question: "मी माझे शिवप्रताप मल्टीस्टेट खाते बंद आहे का हे कसे तपासू शकतो?",
          answer: "तुम्ही तुमचे खाते स्थिती या प्रमाणे तपासू शकता:\n\n• शिवप्रताप मल्टीस्टेट बँक ग्राहक सेवेशी संपर्क साधा\n• संपर्क तपशीलांसाठी अधिकृत बँक वेबसाइट भेट करा\n• तुम्हाला ऑफलाइन सहाय्य पसंती असल्यास सर्वात जवळच्या शाखेला भेट द्या",
          category: "Accounts"
        },
        {
          question: "खाते-संबंधित प्रश्नांसाठी मला कोणाशी संपर्क साधावा?",
          answer: "कोणत्याही खाते-संबंधित प्रश्नांसाठी, ग्राहकांनी त्यांच्या सर्वात जवळच्या शिवप्रताप मल्टीस्टेट बँक शाखेशी किंवा ग्राहक सेवा विभागाशी संपर्क साधण्याचे विनंती केले आहे.",
          category: "General"
        }
      ]
    }
  };

  // Get current language content
  const currentLang = selectedLanguage === 'English' ? 'en' : 'mr';
  const currentContent = translations[currentLang];

  // Handle language change
  const handleLanguageChange = (lang) => {
    setSelectedLanguage(lang);
    const langCode = lang === 'English' ? 'en' : 'mr';
    changeLanguage(langCode);
  };

  const faqs = currentContent.faqs;

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const categories = Object.keys(currentContent.categoryLabels);

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          {/* Language Switcher */}
          <div className="flex justify-center mb-6">
            <div className="relative group">
              <button className="flex items-center px-4 py-2 rounded-lg bg-white border border-gray-300 hover:border-pink-400 transition-colors shadow-sm">
                <FaGlobe className="mr-2 text-pink-600" />
                <span className="font-medium">{selectedLanguage}</span>
                <FaChevronDown className="ml-2 text-gray-500" size={12} />
              </button>
              <div className="absolute right-0 mt-1 w-32 bg-white rounded-md shadow-lg overflow-hidden hidden group-hover:block z-50">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => handleLanguageChange(lang.name)}
                    className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-pink-50 hover:text-pink-600 transition-colors"
                  >
                    {lang.name}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">{currentContent.title}</h1>
          <p className="text-gray-600 max-w-3xl mx-auto">
            {currentContent.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* FAQ Categories */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-lg p-6 sticky top-6">
              <h2 className="text-xl font-bold text-gray-800 mb-6">{currentContent.categories}</h2>
              <div className="space-y-3">
                {categories.map((category, index) => (
                  <button
                    key={index}
                    className="w-full text-left p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200 text-gray-700 hover:text-blue-600"
                  >
                    <div className="flex items-center">
                      <FaQuestionCircle className="mr-3 text-blue-600" />
                      <span className="font-medium">{currentContent.categoryLabels[category]}</span>
                    </div>
                  </button>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-gray-200">
                <div className="flex items-start">
                  <FaEnvelope className="mt-1 mr-3 text-blue-600 flex-shrink-0" />
                  <div>
                    <p className="text-sm text-gray-600">
                      {currentContent.needHelp}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* FAQ Content */}
          <div className="lg:col-span-3">
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className={`bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 ${
                    activeIndex === index ? 'ring-2 ring-blue-500' : ''
                  }`}
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                  >
                    <div className="flex items-start">
                      <span className="text-lg font-semibold text-gray-800">
                        {index + 1}. {faq.question}
                      </span>
                    </div>
                    <div className={`ml-4 transform transition-transform duration-300 flex-shrink-0 ${
                      activeIndex === index ? 'rotate-180' : 'rotate-0'
                    }`}>
                      <FaChevronDown className="text-blue-600" />
                    </div>
                  </button>
                  
                  <div className={`px-6 transition-all duration-300 overflow-hidden ${
                    activeIndex === index ? 'pb-6 max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                  }`}>
                    <div className="prose max-w-none">
                      <h3 className="text-lg font-semibold text-gray-800 mb-3">{currentContent.answer}</h3>
                      <div className="text-gray-600 leading-relaxed whitespace-pre-line">
                        {faq.answer}
                      </div>
                      <div className="mt-4 pt-4 border-t border-gray-200">
                        <div className="flex items-center text-sm text-gray-500">
                          <span className="inline-flex items-center px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-medium">
                            {currentContent.categoryLabels[faq.category]}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;