import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { 
  FaCrown, FaShieldAlt, 
  FaEnvelope,FaUserTie, FaChevronRight, FaHome,
 FaHeadset
} from 'react-icons/fa';

const MahilaSavingsAccount = () => {
  const { language } = useLanguage();

  // Translations
  const translations = {
    en: {
      // Breadcrumb
      home: 'Home',
      account: 'Account',
      mahilaSavingsAccount: 'Mahila Savings Account',
      
      // Hero Section
      womenBanking: 'WOMEN BANKING',
      pageTitle: 'Mahila Savings',
      pageSubtitle: 'Empowering women financially. Secure savings with special benefits.',
      
      // Stats
      interestRate: 'Interest Rate',
      minBalance: 'Min Balance',
      womenServices: 'Women Services',
      
      // About Section
      aboutTitle: 'About Mahila Savings Account',
      aboutSubtitle: 'Special banking solutions designed for women',
      aboutPara1: 'If the Mahila in the family are financially empowered then every family will be safe, prosperous and happy and that\'s why Shiv Pratap Multistate Society is introducing Mahila Sahat Group Account Scheme for Mahila! This innovative initiative launched for the empowerment and empowerment of Mahila is getting a spontaneous response from the Mahila community. In which they are allotted loans up to 40 thousand rupees, they are guided to get into the habit of saving as well as guided for business growth and access to the market. Make a decision today for an empowered future. Contact the nearest Shiv Pratap Multistate branch to open a Mahila\'s Savings Account.',
      
      // Ideal For
      idealFor: 'Ideal For',
      workingWomen: 'Working Women',
      homemakers: 'Homemakers',
      womenEntrepreneurs: 'Women Entrepreneurs',
      womenStudents: 'Women Students',
      
      // Special Benefits
      specialBenefits: 'Special Benefits',
      higherInterestRates: 'Higher Interest Rates',
      flexibleBanking: 'Flexible Banking Hours',
      financialLiteracy: 'Financial Literacy Programs',
      specialOffers: 'Special Offers & Discounts',
      
      // Women Services
      womenServicesTitle: 'Women Services',
      educationLoans: 'Education Loans',
      businessLoans: 'Business Loans',
      goldLoans: 'Gold Loans',
      womenCards: 'Women Privilege Cards',
      
      // Contact Section
      womenSupport: 'Women Support',
      womenHelpline: 'Customer Care',
      womenCell: 'Women Cell',
      visitCell: 'Visit our women cell',
      emailSupport: 'Email Support',
      
      // CTA Section
      openYour: 'Open Your',
      mahilaAccount: 'Mahila Account',
      today: 'Today',
      ctaSubtitle: 'Join thousands of empowered women who have taken control of their financial future with our special savings account',
      scheduleBranchVisit: 'Schedule Branch Visit'
    },
    mr: {
      // Breadcrumb
      home: 'होम',
      account: 'खाते',
      mahilaSavingsAccount: 'महिला बचत खाते',
      
      // Hero Section
      womenBanking: 'महिला बँकिंग',
      pageTitle: 'महिला बचत',
      pageSubtitle: '',
      
      // Stats
      interestRate: 'व्याज दर',
      minBalance: 'किमान शिल्लक',
      womenServices: 'महिला सेवा',
      
      // About Section
      aboutTitle: 'महिला बचत खात्याबद्दल',
      aboutSubtitle: 'महिलांसाठी विशेष बँकिंग उपाय',
      aboutPara1: 'जर कुटुंबातील महिला आर्थिकरित्या सशक्त असतील तर प्रत्येक कुटुंब सुरक्षित, समृद्ध आणि आनंदी राहील आणि म्हणूनच शिवप्रताप मल्टीस्टेट सोसायटी महिलांसाठी महिला सहाय ग्रुप खाते योजना सुरू करत आहे! महिलांच्या सक्षमीकरण आणि सशक्तीकरणासाठी सुरू केलेली ही नावीन उपक्रम महिला समुदायाकडून स्वतःस्फूर्त प्रतिसाद मिळत आहे. ज्यामध्ये त्यांना ४० हजार रुपयांपर्यंत कर्ज वाटप केले जातात, त्यांना बचतीची सवयत निर्माण करण्यासाठी मार्गदर्शन केले जाते तसेच व्यवसाय वाढीसाठी आणि बाजारपेठेपर्यंत प्रवेशासाठी मार्गदर्शन केले जाते. सशक्त भविष्यासाठी आजच निर्णण घ्या. महिलांचे बचत खाते उघडण्यासाठी जवळच्या शिवप्रताप मल्टीस्टेट शाखेशी संपर्क साधा.',
      
      // Ideal For
      idealFor: 'योग्य',
      workingWomen: 'काम करणाऱ्या महिला',
      homemakers: 'गृहिणी',
      womenEntrepreneurs: 'महिला उद्योजक',
      womenStudents: 'महिला विद्यार्थिनी',
      
      // Special Benefits
      specialBenefits: 'विशेष फायदे',
      higherInterestRates: 'अधिक व्याज दर',
      flexibleBanking: 'लवचिक बँकिंग तास',
      financialLiteracy: 'आर्थिक साक्षरता कार्यक्रम',
      specialOffers: 'विशेष ऑफर आणि सूट',
      
      // Women Services
      womenServicesTitle: 'महिला सेवा',
      educationLoans: 'शिक्षण कर्ज',
      businessLoans: 'व्यवसाय कर्ज',
      goldLoans: 'सोने कर्ज',
      womenCards: 'महिला विशेषाधिकार कार्ड',
      
      // Contact Section
      womenSupport: 'महिला समर्थन',
      womenHelpline: 'ग्राहक सेवा',
      womenCell: 'महिला सेल',
      visitCell: 'आमचे महिला सेल भेट द्या',
      emailSupport: 'ईमेल समर्थन',
      
      // CTA Section
      openYour: 'उघडा तुमचे',
      mahilaAccount: 'महिला खाते',
      today: 'आज',
      ctaSubtitle: 'आमच्या विशेष बचत खात्यासह आपला आर्थिक भविष्य नियंत्रित करणाऱ्या हजारो सशक्त महिलांमध्ये सामील व्हा',
      scheduleBranchVisit: 'शाखा भेट नियोजित करा'
    }
  };

  const t = translations[language];

  return (
    <div className="font-sans bg-gradient-to-b from-gray-50 to-white">
      {/* 1. Mahila Hero Banner */}
      <section 
        className="relative h-[500px] overflow-hidden bg-gradient-to-br from-pink-600 via-rose-500 to-purple-600"
      >
        {/* Feminine Pattern Overlay */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-.895-3-2-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-.895-3-2-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-.895-3-2-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-.895-3-2-3-3 1.343-3 3 1.343 3 3 3zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23FFB6C1' fill-opacity='0.4' fill-rule='evenodd'/%3E%3C/svg%3E")`,
            backgroundSize: '300px'
          }}></div>
        </div>

        <div className="relative h-full flex flex-col justify-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Women Banking Badge */}
            <div className="flex items-center mb-6">
              <div className="bg-gradient-to-r from-pink-400 to-rose-400 text-white px-4 py-2 rounded-full font-bold flex items-center">
                <FaCrown className="mr-2" />
                {t.womenBanking}
              </div>
            </div>

            {/* Breadcrumb */}
            <nav className="flex items-center text-pink-100 text-sm mb-8">
              <a href="/" className="flex items-center hover:text-white transition-colors">
                <FaHome className="mr-2" />
                {t.home}
              </a>
              <FaChevronRight className="mx-2 opacity-50" />
              <a href="/account" className="hover:text-white transition-colors">{t.account}</a>
              <FaChevronRight className="mx-2 opacity-50" />
              <span className="font-semibold text-white">{t.mahilaSavingsAccount}</span>
            </nav>

            {/* Main Heading */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4">
              <span className="bg-gradient-to-r from-pink-200 to-rose-200 bg-clip-text text-transparent">{t.mahilaSavingsAccount}</span>
            </h1>
            <p className="text-xl md:text-2xl text-pink-100 max-w-3xl mb-8">
              {t.pageSubtitle}
            </p>
          </div>
        </div>

        {/* Shiny Border Bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-transparent via-pink-400 to-transparent"></div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* 3. About Mahila Account */}
            <section id="overview" className="scroll-mt-24">
              <div className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-3xl shadow-2xl p-8 border border-pink-200">
                <div className="flex items-center mb-8">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-pink-500 to-rose-500 flex items-center justify-center mr-6">
                    <FaCrown className="text-white text-2xl" />
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-gray-800">{t.aboutTitle}</h2>
                    <p className="text-gray-600">{t.aboutSubtitle}</p>
                  </div>
                </div>

                <div className="space-y-6 text-gray-700">
                  <p className="text-lg">
                    {t.aboutPara1}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
                  <div className="bg-gradient-to-br from-pink-100 to-rose-100 rounded-2xl p-6 border border-pink-300">
                    <h4 className="font-bold text-gray-800 mb-4 flex items-center">
                      <FaUserTie className="text-pink-500 mr-3" />
                      {t.idealFor}
                    </h4>
                    <ul className="space-y-3">
                      {[t.workingWomen, t.homemakers, t.womenEntrepreneurs, t.womenStudents].map((item, idx) => (
                        <li key={idx} className="flex items-center text-gray-700">
                          <div className="w-2 h-2 bg-pink-500 rounded-full mr-3"></div>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl p-6 border border-purple-300">
                    <h4 className="font-bold text-gray-800 mb-4 flex items-center">
                      <FaShieldAlt className="text-purple-500 mr-3" />
                      {t.specialBenefits}
                    </h4>
                    <ul className="space-y-3">
                      {[t.higherInterestRates, t.flexibleBanking, t.financialLiteracy, t.specialOffers].map((item, idx) => (
                        <li key={idx} className="flex items-center text-gray-700">
                          <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </section>

          </div>

          {/* Right Column - Sidebar */}
          <div className="space-y-8">



            {/* Women Contact Card */}
            <div className="bg-gradient-to-br from-pink-600 to-rose-600 rounded-3xl shadow-xl p-6 border border-pink-500">
              <h3 className="text-xl font-bold text-white mb-6">{t.womenSupport}</h3>
              <div className="space-y-4">
                <div className="flex items-center p-4 bg-pink-500/30 rounded-xl border border-pink-400">
                  <FaHeadset className="text-pink-200 text-2xl mr-4" />
                  <div>
                    <div className="font-medium text-white">{t.womenHelpline}</div>
                    <div className="text-pink-100 font-bold text-lg">9582837032 </div>
                  </div>
                </div>

                <div className="flex items-center p-4 bg-pink-500/30 rounded-xl border border-pink-400">
                  <FaEnvelope className="text-pink-200 text-2xl mr-4" />
                  <div>
                    <div className="font-medium text-white">{t.emailSupport}</div>
                    <div className="text-pink-100">customercare@shivpratapmultistate.com </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>


      </div>

      {/* Custom CSS */}
      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        
        @keyframes pulse {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 0.8; }
        }
        
        .animate-pulse {
          animation: pulse 2s infinite;
        }
        
        /* Custom slider thumb */
        input[type="range"]::-webkit-slider-thumb {
          appearance: none;
          height: 24px;
          width: 24px;
          border-radius: 50%;
          background: #1f2937;
          border: 4px solid white;
          cursor: pointer;
          box-shadow: 0 0 10px rgba(0,0,0,0.3);
        }
        
        input[type="range"]::-moz-range-thumb {
          height: 24px;
          width: 24px;
          border-radius: 50%;
          background: #1f2937;
          border: 4px solid white;
          cursor: pointer;
          box-shadow: 0 0 10px rgba(0,0,0,0.3);
        }
      `}</style>
    </div>
  );
};

export default MahilaSavingsAccount;
