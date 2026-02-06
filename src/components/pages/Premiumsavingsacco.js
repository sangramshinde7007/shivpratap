import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { 
  FaCrown, FaGem, FaShieldAlt, 
  FaEnvelope, FaUserTie,
 FaChevronRight, FaHome,
  FaHeadset
} from 'react-icons/fa';

const Premiumsavingsacco = () => {
  const { language } = useLanguage();

  // Translations
  const translations = {
    en: {
      // Breadcrumb
      home: 'Home',
      account: 'Account',
      premiumSavingsAccount: 'Premium Savings Account',
      
      // Hero Section
      premiumBanking: 'PREMIUM BANKING',
      pageTitle: 'Premium Savings',
      pageSubtitle: 'Exclusive banking experience with premium benefits and higher returns.',
      
      // About Section
      aboutTitle: 'About Premium Savings Account',
      aboutSubtitle: 'Elite banking solutions for distinguished customers',
      aboutPara1: 'A common man can sleep soundly when he wants his money in a safe and reliable hand following the motto of highest service and security. Shiv Pratap Multistate Society knows the importance of your savings, thats why we manage your savings responsibly and also offer a return of 6.50%. Not only this, it also provides checkbook, NEFT, RTGS, IMPS mobile banking, internet banking, SMS banking facilities along with savings account without charging any kind of value.So that you can get your money instantly at the time of need. Contact your nearest Shiv Pratap Multistate branch today for more information on savings accounts. ',
      aboutPara2: 'Whether you\'re a high-net-worth individual, a successful professional, or someone who appreciates premium service, our Premium Savings Account is tailored to meet your sophisticated banking needs with unmatched benefits and privileges.',
      
      // Ideal For
      idealFor: 'Ideal For',
      highNetWorth: 'High Net Worth Individuals',
      professionals: 'Senior Professionals',
      businessOwners: 'Business Owners',
      investors: 'Investors',
      
      // Premium Benefits
      premiumBenefits: 'Premium Benefits',
      higherInterestRates: 'Higher Interest Rates',
      priorityService: 'Priority Customer Service',
      exclusiveOffers: 'Exclusive Offers & Rewards',
      premiumCards: 'Premium Debit/Credit Cards',
      
      // Premium Services
      premiumServicesTitle: 'Premium Services',
      wealthManagement: 'Wealth Management',
      investmentAdvisory: 'Investment Advisory',
      insuranceServices: 'Insurance Services',
      priorityLoans: 'Priority Loan Processing',
      
      // Contact Section
      premiumSupport: 'Premium Support',
      dedicatedRM: 'Dedicated Relationship Manager',
      premiumHelpline: 'Customer Care',
      visitBranch: 'Visit premium banking lounge',
      emailSupport: 'Email Support',
      
      // CTA Section
      upgradeYour: 'Upgrade Your',
      bankingExperience: 'Banking Experience',
      today: 'Today',
      ctaSubtitle: 'Join the elite circle of premium customers and enjoy exclusive benefits designed for your success',
      applyForPremium: 'Apply for Premium Account'
    },
    mr: {
      // Breadcrumb
      home: 'होम',
      account: 'खाते',
      premiumSavingsAccount: 'प्रीमियम बचत खाते',
      
      // Hero Section
      premiumBanking: 'प्रीमियम बँकिंग',
      pageTitle: 'प्रीमियम बचत',
      pageSubtitle: '',
      
      // About Section
      aboutTitle: 'प्रीमियम बचत खात्याबद्दल',
      aboutSubtitle: 'प्रतिष्ठित ग्राहकांसाठी उच्च दर्जाचे बँकिंग उपाय',
      aboutPara1: 'उच्चतम सेवा व सुरक्षा या ब्रीद वाक्यास अनुसरून आपली रक्कम एका सुरक्षित आणि विश्वासार्ह हाती हवी, तेव्हाच एका सर्वसामान्य माणसाला शांत झोप लागते. शिवप्रताप मल्टीस्टेट सोसायटी तुमच्या या बचतीचे महत्त्व जाणते, म्हणूनच तुमची बचत आम्ही जबाबदारीने सांभाळतो आणि त्यावर ६.५०% परतावा देखील देतो. इतकंच नाही तर बचत खात्यासोबत चेकबुक, NEFT, RTGS, IMPS मोबाईल बँकिंग, इंटरनेट बँकिंग, एसएमएस बँकिंग या सुविधादेखील देतो ते पण कोणत्याही प्रकारचे मूल्य न घेता, जेणेकरून गरजेच्या वेळी तुम्हाला तुमची रक्कम त्वरितमिळावी. बचत खात्यासंदर्भात अधिक माहितीसाठी आजच आपल्या नजीकच्या शिवप्रताप मल्टीस्टेट शाखेशी संपर्क साधा. ',
      aboutPara2: 'तुम्ही उच्च-निव्वळ-मूल्य व्यक्ती असाल, यशस्वी व्यावसायिक असाल किंवा प्रीमियम सेवेची प्रशंसा करणारे कोणीही असाल, आमचे प्रीमियम बचत खाते तुमच्या अत्याधुनिक बँकिंग गरजा पूर्ण करण्यासाठी अतुलनीय फायदे आणि विशेषाधिकारांसह तयार केले आहे.',
      
      // Ideal For
      idealFor: 'योग्य',
      highNetWorth: 'उच्च निव्वळ मूल्य व्यक्ती',
      professionals: 'वरिष्ठ व्यावसायिक',
      businessOwners: 'व्यवसाय मालक',
      investors: 'गुंतवणूकदार',
      
      // Premium Benefits
      premiumBenefits: 'प्रीमियम फायदे',
      higherInterestRates: 'उच्च व्याज दर',
      priorityService: 'प्राधान्य ग्राहक सेवा',
      exclusiveOffers: 'विशेष ऑफर आणि बक्षिसे',
      premiumCards: 'प्रीमियम डेबिट/क्रेडिट कार्ड',
      
      // Premium Services
      premiumServicesTitle: 'प्रीमियम सेवा',
      wealthManagement: 'संपत्ती व्यवस्थापन',
      investmentAdvisory: 'गुंतवणूक सल्लागार',
      insuranceServices: 'विमा सेवा',
      priorityLoans: 'प्राधान्य कर्ज प्रक्रिया',
      
      // Contact Section
      premiumSupport: 'प्रीमियम समर्थन',
      dedicatedRM: 'समर्पित संबंध व्यवस्थापक',
      premiumHelpline: 'ग्राहक सेवा',
      visitBranch: 'प्रीमियम बँकिंग लाउंज भेट द्या',
      emailSupport: 'ईमेल समर्थन',
      
      // CTA Section
      upgradeYour: 'अपग्रेड करा तुमचा',
      bankingExperience: 'बँकिंग अनुभव',
      today: 'आज',
      ctaSubtitle: 'प्रीमियम ग्राहकांच्या उच्चभ्रू वर्तुळात सामील व्हा आणि तुमच्या यशासाठी डिझाइन केलेले विशेष फायदे घ्या',
      applyForPremium: 'प्रीमियम खात्यासाठी अर्ज करा'
    }
  };

  const t = translations[language];

  return (
    <div className="font-sans bg-gradient-to-b from-gray-50 to-white">
      {/* 1. Premium Hero Banner */}
      <section 
        className="relative h-[500px] overflow-hidden bg-gradient-to-br from-purple-900 via-indigo-800 to-blue-900"
      >
        {/* Premium Pattern Overlay */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffd700' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '300px'
          }}></div>
        </div>

        <div className="relative h-full flex flex-col justify-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Premium Banking Badge */}
            <div className="flex items-center mb-6">
              <div className="bg-gradient-to-r from-yellow-400 to-amber-500 text-gray-900 px-4 py-2 rounded-full font-bold flex items-center">
                <FaGem className="mr-2" />
                {t.premiumBanking}
              </div>
            </div>

            {/* Breadcrumb */}
            <nav className="flex items-center text-purple-100 text-sm mb-8">
              <a href="/" className="flex items-center hover:text-white transition-colors">
                <FaHome className="mr-2" />
                {t.home}
              </a>
              <FaChevronRight className="mx-2 opacity-50" />
              <a href="/account" className="hover:text-white transition-colors">{t.account}</a>
              <FaChevronRight className="mx-2 opacity-50" />
              <span className="font-semibold text-white">{t.premiumSavingsAccount}</span>
            </nav>

            {/* Main Heading */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4">
              <span className="bg-gradient-to-r from-yellow-200 to-amber-200 bg-clip-text text-transparent">{t.premiumSavingsAccount}</span>
            </h1>
            <p className="text-xl md:text-2xl text-purple-100 max-w-3xl mb-8">
              {t.pageSubtitle}
            </p>
          </div>
        </div>

        {/* Shiny Border Bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-transparent via-yellow-400 to-transparent"></div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* About Premium Account */}
            <section id="overview" className="scroll-mt-24">
              <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-3xl shadow-2xl p-8 border border-purple-200">
                <div className="flex items-center mb-8">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-purple-600 to-indigo-600 flex items-center justify-center mr-6">
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
                  <div className="bg-gradient-to-br from-purple-100 to-indigo-100 rounded-2xl p-6 border border-purple-300">
                    <h4 className="font-bold text-gray-800 mb-4 flex items-center">
                      <FaUserTie className="text-purple-600 mr-3" />
                      {t.idealFor}
                    </h4>
                    <ul className="space-y-3">
                      {[t.highNetWorth, t.professionals, t.businessOwners, t.investors].map((item, idx) => (
                        <li key={idx} className="flex items-center text-gray-700">
                          <div className="w-2 h-2 bg-purple-600 rounded-full mr-3"></div>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-gradient-to-br from-amber-100 to-yellow-100 rounded-2xl p-6 border border-amber-300">
                    <h4 className="font-bold text-gray-800 mb-4 flex items-center">
                      <FaShieldAlt className="text-amber-600 mr-3" />
                      {t.premiumBenefits}
                    </h4>
                    <ul className="space-y-3">
                      {[t.higherInterestRates, t.priorityService, t.exclusiveOffers, t.premiumCards].map((item, idx) => (
                        <li key={idx} className="flex items-center text-gray-700">
                          <div className="w-2 h-2 bg-amber-600 rounded-full mr-3"></div>
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



            {/* Premium Contact Card */}
            <div className="bg-gradient-to-br from-purple-900 to-indigo-900 rounded-3xl shadow-xl p-6 border border-purple-700">
              <h3 className="text-xl font-bold text-white mb-6">{t.premiumSupport}</h3>
              <div className="space-y-4">
                <div className="flex items-center p-4 bg-purple-800/30 rounded-xl border border-purple-600">
                  <FaHeadset className="text-purple-200 text-2xl mr-4" />
                  <div>
                    <div className="font-medium text-white">{t.premiumHelpline}</div>
                    <div className="text-purple-100 font-bold text-lg">9582837032</div>
                  </div>
                </div>

                <div className="flex items-center p-4 bg-purple-800/30 rounded-xl border border-purple-600">
                  <FaEnvelope className="text-purple-200 text-2xl mr-4" />
                  <div>
                    <div className="font-medium text-white">{t.emailSupport}</div>
                    <div className="text-purple-100">customercare@shivpratapmultistate.com</div>
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
      `}</style>
    </div>
  );
};

export default Premiumsavingsacco;