import React, { useState } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { FaQuoteLeft, FaQuoteRight, FaSignature, FaStar, FaAward, FaHandshake } from 'react-icons/fa';
import chairmanImage from '../Assets/chairman.jpeg';

const Chairman = () => {
  const { language } = useLanguage();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const primaryColor = '#b03462';

  // Translations
  const translations = {
    en: {
      title: "Chairman's Message",
      message: `"Shivpratap Multistate is not just limited to financial transactions, but is a capable system built on the trust of its members and the values of cooperation. From its inception, providing secure savings, assured returns, and financial assistance as needed has been our primary objective.

Understanding the financial needs of various groups in rural and urban areas—farmers, women, small entrepreneurs, employed class, and senior citizens—the institution is continuously working to provide useful savings schemes, fixed deposits, loan facilities, and other modern services.

Through transparent transactions, disciplined financial management, and strict adherence to rules, the institution has earned the strong trust of its members in a short period. Working for the economic empowerment of society through cooperation and leading the institution towards long-term stability and progress is our role and commitment."`,
      chairmanName: "Shri. Pratapseth (Dada) Salunkhe",
      designation: "President",
      organization: "Shivpratap Multistate Urban Cooperative Credit Society Ltd.",
      yearsOfService: "Founding President (Established 2002)",
      achievements: [
        "22+ years of experience in cooperative sector",
        "First multistate institution in Western Maharashtra",
        "Trust of 1 lakh+ members",
        "Presence in hundreds of villages"
      ],
      subtitle: "Thoughts of the institution's inspiration and guides",
      notableContributions: "Notable Contributions",
      vision: "Vision",
      visionText: "Economic empowerment of society through cooperation and taking the institution to national level is our goal.",
      aboutFuture: "About the Institution's Future",
      cooperation: "Cooperation",
      cooperationDesc: "Collective efforts",
      trust: "Trust",
      trustDesc: "Members' trust",
      progress: "Progress",
      progressDesc: "Continuous development",
      keyMilestones: "Key Milestones",
      established: "2002",
      establishedDesc: "Institution established",
      multistateStatus: "2012",
      multistateStatusDesc: "Multistate status achieved",
      membersTrust: "2024",
      membersTrustDesc: "Trust of 1 lakh+ members",
      inspirationalQuote: "Cooperative heritage, social progress, members' trust",
      institutionCommitment: "Shivpratap Multistate's commitment"
    },
    mr: {
      title: "चेअरमन यांचे मनोगत",
      message: `"शिवप्रताप मल्टीस्टेट ही संस्था केवळ आर्थिक व्यवहारांपुरती मर्यादित नसून, ती सभासदांच्या विश्वासावर आणि सहकाराच्या मूल्यांवर उभी असलेली एक सक्षम व्यवस्था आहे. स्थापनेपासूनच सभासदांना सुरक्षित बचत, खात्रीशीर परतावा आणि गरजेनुसार आर्थिक सहाय्य देणे हे आमचे प्रमुख उद्दिष्ट राहिले आहे.

ग्रामीण व शहरी भागातील विविध घटक—शेतकरी, महिला, लघुउद्योजक, नोकरदार वर्ग तसेच ज्येष्ठ नागरिक—यांच्या आर्थिक गरजा समजून घेऊन त्यांना उपयुक्त अशा बचत योजना, मुदत ठेवी, कर्ज सुविधा व इतर आधुनिक सेवा उपलब्ध करून देण्यात संस्था सातत्याने कार्यरत आहे.

पारदर्शक व्यवहार, शिस्तबद्ध आर्थिक व्यवस्थापन आणि नियमांचे काटेकोर पालन यामुळे संस्थेने अल्पावधीतच सभासदांचा दृढ विश्वास संपादन केला आहे. सहकाराच्या माध्यमातून समाजाच्या आर्थिक सक्षमीकरणासाठी कार्य करत राहणे आणि संस्थेला दीर्घकालीन स्थैर्य व प्रगतीच्या दिशेने नेणे, हीच आमची भूमिका आणि बांधिलकी आहे."`,
      chairmanName: "श्री. प्रतापशेठ (दादा) साळुंखे",
      designation: "अध्यक्ष",
      organization: "शिवप्रताप मल्टीस्टेट नागरी सहकारी पतसंस्था लि.",
      yearsOfService: "संस्थापक अध्यक्ष (स्थापना २००२)",
      achievements: [
        "२२+ वर्षे सहकार क्षेत्रातील अनुभव",
        "पश्चिम महाराष्ट्रातील पहिली मल्टीस्टेट संस्था",
        "१ लाख+ सभासदांचा विश्वास",
        "शेकडो गावांमध्ये उपस्थिती"
      ],
      subtitle: "संस्थेच्या प्रेरणास्रोत आणि मार्गदर्शकांचे विचार",
      notableContributions: "उल्लेखनीय योगदान",
      vision: "दृष्टिकोन",
      visionText: "सहकार्याच्या बळावर समाजाचे आर्थिक सक्षमीकरण करणे आणि संस्थेला राष्ट्रीय स्तरावर नेणे हे आमचे ध्येय आहे.",
      aboutFuture: "संस्थेच्या भवितव्याबद्दल",
      cooperation: "सहकार",
      cooperationDesc: "सामूहिक प्रयत्न",
      trust: "विश्वास",
      trustDesc: "सदस्यांचा विश्वास",
      progress: "प्रगती",
      progressDesc: "सतत विकास",
      keyMilestones: "महत्वाचे टप्पे",
      established: "२००२",
      establishedDesc: "संस्थेची स्थापना",
      multistateStatus: "२०१२",
      multistateStatusDesc: "मल्टीस्टेट दर्जा प्राप्ती",
      membersTrust: "२०२४",
      membersTrustDesc: "१ लाख+ सदस्यांचा विश्वास",
      inspirationalQuote: "सहकार्याचा वारसा, समाजाची प्रगती, सदस्यांचा विश्वास",
      institutionCommitment: "शिवप्रताप मल्टीस्टेटचे संकल्प"
    }
  };

  const t = translations[language];

  return (
    <div className="min-h-screen py-12 px-4" style={{ 
      backgroundColor: '#f8f9fa',
      backgroundImage: 'linear-gradient(135deg, rgba(176, 52, 98, 0.03) 0%, rgba(248, 249, 250, 1) 100%)'
    }}>
      {/* Animated Background Pattern */}
      <div className="fixed inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(45deg, ${primaryColor} 0, ${primaryColor} 1px, transparent 1px, transparent 15px)`,
          backgroundSize: '20px 20px'
        }}></div>
      </div>

      {/* Main Container */}
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            <span style={{ 
              background: `linear-gradient(to right, ${primaryColor}, ${primaryColor}dd)`,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>
              {t.title}
            </span>
          </h1>
          <div className="h-1.5 w-32 mx-auto rounded-full mb-6" style={{ 
            background: `linear-gradient(to right, ${primaryColor}, ${primaryColor}88)`
          }}></div>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            {t.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Chairman Image & Info */}
          <div className="space-y-8">
            {/* Chairman Photo Card */}
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-200 transform transition-all duration-500 hover:shadow-3xl hover:-translate-y-1">
              <div className="relative">
                {/* Image Container */}
                <div className="h-96 relative overflow-hidden cursor-pointer" style={{ 
                  background: `linear-gradient(135deg, ${primaryColor}, ${primaryColor}dd)`
                }} onClick={() => setIsModalOpen(true)}>
                  {/* Decorative Elements */}
                  <div className="absolute -top-6 -left-6 w-24 h-24 bg-white/10 rounded-full animate-pulse"></div>
                  <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-white/10 rounded-full animate-pulse delay-1000"></div>
                  
                  {/* Chairman Image */}
                  <div className="relative w-full h-full flex items-center justify-center p-8">
                    <div className="relative w-64 h-64 mx-auto">
                      <img 
                        src={chairmanImage}
                        alt={t.chairmanName}
                        className="w-full h-full object-cover rounded-full shadow-2xl border-4 border-white/20"
                        onError={(e) => {
                          e.target.onerror = null
                          e.target.src = `https://ui-avatars.com/api/?name=${t.chairmanName}&background=3b82f6&color=fff&size=400&bold=true`
                        }}
                      />
                      
                      {/* Badge */}
                      <div className="absolute -top-2 -right-2 w-16 h-16 bg-gradient-to-br from-red-500 to-rose-600 rounded-full flex items-center justify-center shadow-xl animate-bounce">
                        <FaAward className="text-white text-2xl" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Chairman Details */}
                <div className="p-8">
                  <div className="text-center">
                    <h2 className="text-3xl font-bold text-gray-900 mb-2">
                      {t.chairmanName}
                    </h2>
                    <div className="flex items-center justify-center space-x-4 mb-4">
                      <span className="px-4 py-1 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-full text-sm font-medium">
                        {t.designation}
                      </span>
                      <span className="px-4 py-1 bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-full text-sm font-medium">
                        {t.yearsOfService}
                      </span>
                    </div>
                    <p className="text-lg text-gray-700 font-semibold">
                      {t.organization}
                    </p>
                  </div>

                  {/* Achievements */}
                  <div className="mt-8 pt-8 border-t border-gray-200">
                    <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                      <FaStar className="text-amber-500 mr-2" />
                      {t.notableContributions}
                    </h3>
                    <ul className="space-y-3">
                      {t.achievements.map((achievement, index) => (
                        <li key={index} className="flex items-center">
                          <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full mr-3"></div>
                          <span className="text-gray-700">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Vision Card */}
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-6 shadow-lg border border-amber-200">
              <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                <FaHandshake className="text-amber-600 mr-2" />
                {t.vision}
              </h3>
              <p className="text-gray-700">
                {t.visionText}
              </p>
            </div>
          </div>

          {/* Right Column - Message */}
          <div className="space-y-8">
            {/* Message Card */}
            <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-10 transform transition-all duration-500 hover:shadow-3xl">
              {/* Quote Icon */}
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center shadow-xl">
                  <FaQuoteLeft className="text-white text-3xl" />
                </div>
              </div>

              {/* Message Title */}
              <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">
                <span className="border-b-4 border-amber-500 pb-2">
                  {t.aboutFuture}
                </span>
              </h2>

              {/* Message Content */}
              <div className="space-y-6">
                {t.message.split('\n\n').map((paragraph, index) => (
                  <div 
                    key={index} 
                    className={`text-gray-700 text-lg leading-relaxed ${index === 0 ? 'text-xl font-medium' : ''}`}
                  >
                    {paragraph}
                  </div>
                ))}
              </div>

              {/* Closing Quote Icon */}
              <div className="flex justify-center mt-8">
                <FaQuoteRight className="text-gray-400 text-2xl" />
              </div>

              {/* Signature */}
              <div className="mt-12 pt-8 border-t border-gray-200">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-amber-100 to-orange-100 rounded-full mb-4">
                    <FaSignature className="text-amber-600 text-2xl" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900">
                    {t.chairmanName}
                  </h4>
                  <p className="text-gray-600">
                    {t.designation}
                  </p>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-blue-100 rounded-full -ml-16 -mb-16 opacity-30"></div>
              <div className="absolute top-0 right-0 w-24 h-24 bg-amber-100 rounded-full -mr-12 -mt-12 opacity-30"></div>
            </div>

            {/* Key Principles */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-5 rounded-xl shadow-sm border border-blue-200 text-center">
                <div className="text-3xl mb-3">🤝</div>
                <h4 className="font-bold text-gray-800">{t.cooperation}</h4>
                <p className="text-gray-600 text-sm mt-2">{t.cooperationDesc}</p>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-5 rounded-xl shadow-sm border border-green-200 text-center">
                <div className="text-3xl mb-3">🛡️</div>
                <h4 className="font-bold text-gray-800">{t.trust}</h4>
                <p className="text-gray-600 text-sm mt-2">{t.trustDesc}</p>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-5 rounded-xl shadow-sm border border-purple-200 text-center">
                <div className="text-3xl mb-3">📈</div>
                <h4 className="font-bold text-gray-800">{t.progress}</h4>
                <p className="text-gray-600 text-sm mt-2">{t.progressDesc}</p>
              </div>
            </div>

            {/* Milestone Timeline */}
            <div className="bg-gradient-to-r from-slate-50 to-gray-100 rounded-2xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-gray-800 mb-6">{t.keyMilestones}</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mr-4"></div>
                  <div>
                    <p className="font-semibold text-gray-800">{t.established}</p>
                    <p className="text-gray-600 text-sm">{t.establishedDesc}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full mr-4"></div>
                  <div>
                    <p className="font-semibold text-gray-800">{t.multistateStatus}</p>
                    <p className="text-gray-600 text-sm">{t.multistateStatusDesc}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full mr-4"></div>
                  <div>
                    <p className="font-semibold text-gray-800">{t.membersTrust}</p>
                    <p className="text-gray-600 text-sm">{t.membersTrustDesc}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Inspirational Quote */}
        <div className="mt-16 bg-gradient-to-r from-blue-900 to-indigo-900 rounded-3xl shadow-2xl p-8 md:p-10 text-white relative overflow-hidden">
          {/* Background Elements */}
          <div className="absolute top-0 left-0 w-32 h-32 bg-blue-700/30 rounded-full -ml-16 -mt-16"></div>
          <div className="absolute bottom-0 right-0 w-40 h-40 bg-indigo-700/30 rounded-full -mr-20 -mb-20"></div>
          
          <div className="relative z-10 text-center">
            <div className="text-5xl mb-6">🌟</div>
            <p className="text-2xl font-bold mb-6">
              {t.inspirationalQuote}
            </p>
            <p className="text-blue-200 text-lg">
              - {t.institutionCommitment}
            </p>
          </div>
        </div>
      </div>

      {/* Image Modal */}
      {isModalOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-90 backdrop-blur-sm"
          onClick={() => setIsModalOpen(false)}
        >
          <div className="relative max-w-4xl max-h-[90vh] w-full">
            {/* Close button */}
            <button
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors duration-200 z-10"
              onClick={(e) => {
                e.stopPropagation()
                setIsModalOpen(false)
              }}
              style={{ fontSize: '2rem' }}
            >
              ✕
            </button>
            
            {/* Modal content */}
            <div 
              className="relative rounded-lg overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <img 
                src={chairmanImage}
                alt={t.chairmanName}
                className="w-full h-full object-contain"
                style={{
                  maxHeight: '80vh',
                  borderRadius: '8px'
                }}
                onError={(e) => {
                  e.target.onerror = null
                  e.target.src = `https://ui-avatars.com/api/?name=${t.chairmanName}&background=3b82f6&color=fff&size=600&bold=true`
                }}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chairman;