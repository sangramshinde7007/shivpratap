import React, { useState } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { 
  FaHome, FaArrowRight,
  FaCheckCircle,
  FaPhoneAlt, FaMapMarkedAlt,
  FaHandHoldingUsd,
  FaChevronRight, FaInfoCircle, FaUniversity,
  FaMobileAlt, FaRupeeSign
} from 'react-icons/fa';

const SavingAccount = () => {
  const { language } = useLanguage();
  const [, setActiveSection] = useState('about');

  // Translations
  const translations = {
    en: {
      // Breadcrumb
      home: 'Home',
      account: 'Account',
      savingsAccount: 'Savings Account',
      
      // Hero Section
      pageTitle: 'Savings Account and Premium Savings Account',
      pageSubtitle: 'Secure your future with our trusted savings solutions. Enjoy attractive interest rates and complete banking freedom.',
      
      // Main Content
      mainHeading: 'Savings Account and Premium Savings Account',
      mainContent: 'A common man can sleep soundly when he wants his money in a safe and reliable hand following the motto of highest service and security. Shiv Pratap Multistate Society knows the importance of your savings, that\'s why we manage your savings responsibly and also offer a return of 6.50%. Not only this, it also provides checkbook, NEFT, RTGS, IMPS mobile banking, internet banking, SMS banking facilities along with savings account without charging any kind of value.So that you can get your money instantly at the time of need. Contact your nearest Shiv Pratap Multistate branch today for more information on savings accounts.',
      
      // About Section
      aboutTitle: 'About Our Savings Account',
      aboutSubtitle: 'Secure, flexible, and designed for your financial growth',
      aboutPara1: 'Our Savings Account is more than just a place to store your money - it\'s your financial partner in achieving your dreams. Designed with flexibility and security in mind, our account offers the perfect balance of growth potential and easy access to your funds.',
      aboutPara2: 'Whether you\'re a salaried individual planning for the future, a student starting your financial journey, or a family building wealth together, our savings account is tailored to meet your unique needs.',
      
      // Ideal For
      idealFor: 'Ideal For',
      salariedEmployees: 'Salaried Employees',
      studentsYouth: 'Students & Youth',
      seniorCitizens: 'Senior Citizens',
      familiesJoint: 'Families & Joint Accounts',
      
      // Key Benefits
      keyBenefits: 'Key Benefits',
      rbiInsured: 'RBI-insured up to ₹5 lakhs',
      digitalBanking: '24/7 Digital Banking Access',
      noHiddenCharges: 'No Hidden Charges',
      freeDebitCard: 'Free Debit Card & Cheque Book',
      
      // Quick Links
      quickLinks: 'Quick Links',
      currentAccount: 'Current Account',
      loanProducts: 'Loan Products',
      fixedDeposits: 'Fixed Deposits',
      mobileBanking: 'Mobile Banking',
      
      // Contact Section
      needHelp: 'Need Help?',
      customerCare: 'Customer Care',
      findBranch: 'Find Branch',
      locateBranch: 'Locate nearest branch',
      
      // CTA Section
      readyToStart: 'Ready to Start Your',
      financialJourney: 'Financial Journey?',
      ctaSubtitle: 'Join thousands of satisfied customers who trust Shivpratap Bank for their financial needs. Open your savings account in minutes and enjoy exclusive benefits.',
      applyOnlineNow: 'Apply Online Now',
      zeroPaperwork: 'Zero paperwork',
      instantApproval: 'Instant approval',
      dedicatedSupport: 'Dedicated support',
      freeDebitCardCta: 'Free debit card'
    },
    mr: {
      // Breadcrumb
      home: 'होम',
      account: 'खाते',
      savingsAccount: 'बचत खाते',
      
      // Hero Section
      pageTitle: 'बचत खाते आणि प्रीमियम बचत खाते',
      pageSubtitle: 'आमच्या विश्वसनीय बचत उपायांसह आपले भविष्य सुरक्षित करा. आकर्षक व्याज दर आणि पूर्ण बँकिंग स्वातंत्र्याचा आनंद घ्या.',
      
      // Main Content
      mainHeading: 'बचत खाते आणि प्रीमियम बचत खाते',
      mainContent: 'उच्चतम सेवा व सुरक्षा या ब्रीद वाक्यास अनुसरून आपली रक्कम एका सुरक्षित आणि विश्वासार्ह हाती हवी, तेव्हाच एका सर्वसामान्य माणसाला शांत झोप लागते. शिवप्रताप मल्टीस्टेट सोसायटी तुमच्या या बचतीचे महत्त्व जाणते, म्हणूनच तुमची बचत आम्ही जबाबदारीने सांभाळतो आणि त्यावर ६.५०% परतावा देखील देतो. इतकंच नाही तर बचत खात्यासोबत चेकबुक, NEFT, RTGS, IMPS मोबाईल बँकिंग, इंटरनेट बँकिंग, एसएमएस बँकिंग या सुविधादेखील देतो ते पण कोणत्याही प्रकारचे मूल्य न घेता, जेणेकरून गरजेच्या वेळी तुम्हाला तुमची रक्कम त्वरितमिळावी. बचत खात्यासंदर्भात अधिक माहितीसाठी आजच आपल्या नजीकच्या शिवप्रताप मल्टीस्टेट शाखेशी संपर्क साधा. ',
      
      // About Section
      aboutTitle: 'आमच्या बचत खात्याबद्दल',
      aboutSubtitle: 'सुरक्षित, लवचिक आणि आपल्या आर्थिक वाढीसाठी डिझाइन केलेले',
      aboutPara1: 'आमचे बचत खाते फक्त पैसे साठवण्याची जागा नाही - ते आपल्या स्वप्नां साध्यासाठी आपले आर्थिक साथी आहे. लवचिकता आणि सुरक्षितता लक्षात ठेवून डिझाइन केलेले, आमचे खाते वाढीच्या संभाव्यता आणि आपल्या निधीवर सोपा प्रवेश यांचा संतुलित संयोग देते.',
      aboutPara2: 'आपण भविष्याची योजना आखणारा वेतनभोगी व्यक्ती असाल, आपले आर्थिक प्रवास सुरू करणारा विद्यार्थी, किंवा एकत्र संपत्ती निर्माण करणारे कुटुंब, आमचे बचत खाते आपल्या अद्वितीय गरजांनुसार तयार केले आहे.',
      
      // Ideal For
      idealFor: 'योग्य',
      salariedEmployees: 'वेतनभोगी कर्मचारी',
      studentsYouth: 'विद्यार्थी आणि तरुण',
      seniorCitizens: 'वरिष्ठ नागरिक',
      familiesJoint: 'कुटुंब आणि संयुक्त खाती',
      
      // Key Benefits
      keyBenefits: 'मुख्य फायदे',
      rbiInsured: 'आरबीआय द्वारे ₹5 लाखपर्यंत विमित',
      digitalBanking: '२४/७ डिजिटल बँकिंग प्रवेश',
      noHiddenCharges: 'लपवलेले शुल्क नाही',
      freeDebitCard: 'मोफत डेबिट कार्ड आणि चेक बुक',
      
      // Quick Links
      quickLinks: 'जलद लिंक',
      currentAccount: 'चालू खाते',
      loanProducts: 'कर्ज उत्पादने',
      fixedDeposits: 'फिक्स्ड डिपॉझिट',
      mobileBanking: 'मोबाईल बँकिंग',
      
      // Contact Section
      needHelp: 'मदत हवी का?',
      customerCare: 'ग्राहक सेवा',
      findBranch: 'शाखा शोधा',
      locateBranch: 'जवळची शाखा शोधा',
      
      // CTA Section
      readyToStart: 'सुरू करण्यास तयार',
      financialJourney: 'आर्थिक प्रवास?',
      ctaSubtitle: 'आपल्या आर्थिक गरजांसाठी शिवप्रताप बँकेवर विश्वास ठेवणाऱ्या हजारो समाधानी ग्राहकांमध्ये सामील व्हा. फक्त काही मिनिटांमध्ये आपले बचत खाते उघडा आणि विशेष फायदे मिळवा.',
      applyOnlineNow: 'आता ऑनलाइन अर्ज करा',
      zeroPaperwork: 'शून्य कागदपत्र',
      instantApproval: 'तातडीची मंजुरी',
      dedicatedSupport: 'समर्पित समर्थन',
      freeDebitCardCta: 'मोफत डेबिट कार्ड'
    }
  };

  const t = translations[language];

  // Handle scroll to section
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  return (
    <div className="font-sans bg-gray-50">
      {/* 1. Hero Section with Breadcrumb */}
      <section 
        className="relative h-80 sm:h-96 overflow-hidden bg-gradient-to-br from-blue-600 to-blue-800"
      >
        <div className="absolute inset-0">
          {/* Decorative Pattern */}
          <div className="absolute inset-0 opacity-10" style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }}></div>
        </div>

        <div className="relative h-full flex flex-col justify-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Breadcrumb */}
            <nav className="flex items-center text-white text-sm mb-6">
              <a href="/" className="flex items-center hover:text-blue-200 transition-colors">
                <FaHome className="mr-2" />
                {t.home}
              </a>
              <FaChevronRight className="mx-2 opacity-50" />
              <a href="/account" className="hover:text-blue-200 transition-colors">{t.account}</a>
              <FaChevronRight className="mx-2 opacity-50" />
              <span className="font-semibold">{t.savingsAccount}</span>
            </nav>

            {/* Page Heading */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3 sm:mb-4">
              {t.pageTitle}
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-blue-100 max-w-3xl px-2">
              {t.pageSubtitle}
            </p>

            {/* Quick Stats */}
            {/* <div className="flex flex-wrap gap-6 mt-8">
              <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-xl px-6 py-3">
                <div className="text-white text-sm opacity-90">Interest Rate</div>
                <div className="text-2xl font-bold text-white">3.00% p.a.</div>
              </div>
              <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-xl px-6 py-3">
                <div className="text-white text-sm opacity-90">Min Balance</div>
                <div className="text-2xl font-bold text-white">₹1,000</div>
              </div>
              <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-xl px-6 py-3">
                <div className="text-white text-sm opacity-90">Free Services</div>
                <div className="text-2xl font-bold text-white">25+</div>
              </div>
            </div> */}
          </div>
        </div>

        {/* Wave Decoration */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-8 sm:h-12">
            <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" 
              opacity=".25" fill="white"></path>
            <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" 
              opacity=".5" fill="white"></path>
            <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" 
              fill="white"></path>
          </svg>
        </div>
      </section>

      {/* <section className="sticky top-0 z-40 bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex overflow-x-auto py-4 space-x-1 scrollbar-hide">
            <button 
              onClick={() => scrollToSection('about')}
              className={`py-3 px-4 rounded-lg ${activeSection === 'about' ? 'bg-blue-500 text-white' : 'bg-white text-blue-500'} hover:bg-blue-500 hover:text-white transition-colors`}
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('open')}
              className={`py-3 px-4 rounded-lg ${activeSection === 'open' ? 'bg-blue-500 text-white' : 'bg-white text-blue-500'} hover:bg-blue-500 hover:text-white transition-colors`}
            >
              Open Account
            </button>
          </div>
        </div>
      </section> */}

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
          {/* Left Column - Main Content */}
          <div className="lg:col-span-2 space-y-8 sm:space-y-12">
            {/* Main Content Section */}
            <section id="about" className="scroll-mt-20 sm:scroll-mt-24">
              <div className="bg-white rounded-2xl shadow-xl p-4 sm:p-6 md:p-8 border border-gray-100">
                <div className="flex flex-col sm:flex-row items-start sm:items-center mb-4 sm:mb-6">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center mr-3 sm:mr-4 mb-3 sm:mb-0 flex-shrink-0">
                    <FaInfoCircle className="text-white text-lg sm:text-xl" />
                  </div>
                  <div className="text-center sm:text-left">
                    <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">{t.mainHeading}</h2>
                  </div>
                </div>

                <div className="space-y-3 sm:space-y-4 text-gray-700 text-sm sm:text-base">
                  <p>
                    {t.mainContent}
                  </p>
                </div>
              </div>
            </section>

          </div>

          {/* Right Column - Sidebar */}
          <div className="space-y-6 sm:space-y-8">
            {/* Quick Links */}
            <div className="bg-white rounded-2xl shadow-xl p-4 sm:p-6 border border-gray-100">
              <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-3 sm:mb-4">{t.quickLinks}</h3>
              <div className="space-y-2 sm:space-y-3">
                <button className="w-full flex items-center p-3 rounded-lg hover:bg-gray-50 transition-colors text-left">
                  <FaRupeeSign className="text-blue-600 mr-3 text-sm sm:text-base" />
                  <span className="text-sm sm:text-base">{t.currentAccount}</span>
                </button>
                <button className="w-full flex items-center p-3 rounded-lg hover:bg-gray-50 transition-colors text-left">
                  <FaHandHoldingUsd className="text-green-600 mr-3 text-sm sm:text-base" />
                  <span className="text-sm sm:text-base">{t.loanProducts}</span>
                </button>
                <button className="w-full flex items-center p-3 rounded-lg hover:bg-gray-50 transition-colors text-left">
                  <FaUniversity className="text-purple-600 mr-3 text-sm sm:text-base" />
                  <span className="text-sm sm:text-base">{t.fixedDeposits}</span>
                </button>
                <button className="w-full flex items-center p-3 rounded-lg hover:bg-gray-50 transition-colors text-left">
                  <FaMobileAlt className="text-red-600 mr-3 text-sm sm:text-base" />
                  <span className="text-sm sm:text-base">{t.mobileBanking}</span>
                </button>
              </div>
            </div>

            {/* Contact Card */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl shadow-xl p-4 sm:p-6 border border-green-100">
              <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-3 sm:mb-4">{t.needHelp}</h3>
              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-center p-3 bg-white rounded-lg border border-green-200">
                  <FaPhoneAlt className="text-green-600 mr-3 text-sm sm:text-base flex-shrink-0" />
                  <div>
                    <div className="font-medium text-gray-800 text-sm sm:text-base">{t.customerCare}</div>
                    <div className="text-green-700 font-bold text-sm sm:text-base">9582837032 </div>
                  </div>
                </div>
                <div className="flex items-center p-3 bg-white rounded-lg border border-green-200">
                  <FaMapMarkedAlt className="text-green-600 mr-3 text-sm sm:text-base flex-shrink-0" />
                  <div>
                    <div className="font-medium text-gray-800 text-sm sm:text-base">{t.findBranch}</div>
                    <div className="text-gray-600 text-xs sm:text-sm">{t.locateBranch}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action Banner */}
        <section id="open" className="scroll-mt-20 sm:scroll-mt-24 mt-8 sm:mt-12">
          <div 
            className="rounded-2xl shadow-2xl overflow-hidden relative transform transition-all duration-500 hover:scale-[1.02]"
            style={{
              background: 'linear-gradient(135deg, #b03462 0%, #8a2c4d 50%, #6d233d 100%)',
              backgroundImage: 'radial-gradient(circle at 30% 40%, rgba(255,255,255,0.15) 0%, transparent 60%), linear-gradient(135deg, #b03462 0%, #8a2c4d 50%, #6d233d 100%)'
            }}
          >
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-32 sm:w-48 md:w-64 h-32 sm:h-48 md:h-64 opacity-20">
              <div className="absolute inset-0 rounded-full border-4 border-white transform rotate-45"></div>
            </div>
            <div className="absolute bottom-0 left-0 w-24 sm:w-36 md:w-48 h-24 sm:h-36 md:h-48 opacity-15">
              <div className="absolute inset-0 rounded-full border-4 border-white transform -rotate-12"></div>
            </div>
            
            <div className="p-8 sm:p-12 md:p-16 text-center text-white relative z-10">
              <div className="mb-4 sm:mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white bg-opacity-20 backdrop-blur-sm mb-3 sm:mb-4">
                  <FaHandHoldingUsd className="text-2xl sm:text-3xl md:text-4xl" />
                </div>
              </div>
              
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 leading-tight">
                {t.readyToStart}
                <span className="block text-yellow-300">{t.financialJourney}</span>
              </h2>
              
              <p className="text-base sm:text-lg md:text-xl text-white text-opacity-90 mb-6 sm:mb-8 md:mb-10 max-w-3xl mx-auto leading-relaxed px-4">
                {t.ctaSubtitle}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center mb-6 sm:mb-8">
                <button 
                  onClick={() => scrollToSection('open')}
                  className="bg-white text-[#b03462] px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 rounded-full font-bold text-sm sm:text-base md:text-lg hover:bg-yellow-50 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl border-2 border-transparent hover:border-yellow-300"
                >
                  <FaArrowRight className="inline mr-2" />
                  {t.applyOnlineNow}
                </button>
              </div>
              
              <div className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 text-white text-opacity-90">
                <div className="flex items-center">
                  <FaCheckCircle className="mr-2 text-green-300 text-sm sm:text-base" />
                  <span className="text-xs sm:text-sm">{t.zeroPaperwork}</span>
                </div>
                <div className="flex items-center">
                  <FaCheckCircle className="mr-2 text-green-300 text-sm sm:text-base" />
                  <span className="text-xs sm:text-sm">{t.instantApproval}</span>
                </div>
                <div className="flex items-center">
                  <FaCheckCircle className="mr-2 text-green-300 text-sm sm:text-base" />
                  <span className="text-xs sm:text-sm">{t.dedicatedSupport}</span>
                </div>
                <div className="flex items-center">
                  <FaCheckCircle className="mr-2 text-green-300 text-sm sm:text-base" />
                  <span className="text-xs sm:text-sm">{t.freeDebitCardCta}</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Custom CSS */}
        <style jsx>{`
          .scrollbar-hide {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
          .scrollbar-hide::-webkit-scrollbar {
            display: none;
          }
          
          @keyframes fade-in-up {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          
          .animate-fade-in-up {
            animation: fade-in-up 0.6s ease-out;
          }
        `}</style>
      </div>
    </div>
  );
};

export default SavingAccount;