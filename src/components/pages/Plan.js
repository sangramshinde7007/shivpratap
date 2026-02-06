import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext';
import { 
  FaPiggyBank,
  FaChartLine, FaHandHoldingUsd, FaShieldAlt,
  FaCalendarAlt, FaRupeeSign, FaPercent,
  FaBuilding,
  FaArrowRight, FaCheckCircle, FaStar, FaUserTie, FaRing, FaPhoneAlt
} from 'react-icons/fa';

const Plan = () => {
  const { language } = useLanguage();
  const location = useLocation();
  const isMarathi = language === 'mr';

  // Color constants
  const primaryColor = '#b03462';
  const secondaryColor = '#ffd166';
  const accentColor = '#06d6a0';
  const darkColor = '#1a1a2e';
  const lightColor = '#f8f9fa';

  // Translations
  const translations = {
    en: {
      pageTitle: 'Financial Plans & Schemes',
      pageSubtitle: 'Explore our comprehensive range of deposit and loan schemes designed to meet all your financial needs',
      recurringSchemes: 'Recurring Deposits',
      fixedDepositSchemes: 'Fixed Deposits',
      unfixedDepositSchemes: 'Unfixed Deposits',
      recurringDesc: 'Build wealth systematically with our recurring deposit schemes offering regular savings and attractive returns.',
      fixedDepositDesc: 'Secure your future with our fixed deposit schemes designed for every life stage and financial goal.',
      unfixedDepositDesc: 'Flexible deposit options with easy withdrawal facilities for your short-term financial needs.',
      keyFeatures: 'Key Features',
      schemeHighlights: 'Scheme Highlights',
      interestRate: 'Interest Rate',
      maxAmountLabel: 'Max Amount',
      tenureLabel: 'Tenure',
      keyFeatureLabel: 'Key Feature',
      goldLoanComparison: 'Gold Loan Schemes Comparison',
      whyChooseDeposits: 'Why Choose Our Deposit Schemes?',
      needHelp: 'Need Help Choosing the Right Scheme?',
      needHelpDesc: 'Our financial advisors are here to help you select the perfect scheme based on your goals and requirements.',
      callNow: 'Call Now: 9582837032',
      visitBranch: 'Visit Nearest Branch',
      // Deposit Schemes
      pensionTitle: 'Pension Deposit Scheme',
      pensionTagline: 'Old age financial security scheme',
      pensionDesc: 'A tree planted today provides shade along with fruits in the future. But the seeds for that future comfortable life must be sown today. So that one can enjoy a carefree life in old age and this is why Shiv Pratap Multistate Pension Deposit Scheme is the best. ',
      pensionFeatures: ['Regular monthly income', 'Worry-free retirement', 'Safe & secure', 'Ideal for seniors', 'Long-term investment'],
      rdTitle: 'Recurring Deposit Scheme (RD)',
      rdTagline: 'Small monthly savings plan',
      rdDesc: 'Small savings should be made from today to fulfill big needs and dreams of tomorrow. But often we do not know exactly how to save. Be it a professional or an employee, discipline yourself to save, fulfill todays dreams for tomorrow. ',
      rdFeatures: ['Monthly savings', 'Disciplined habit', 'Future goals', 'Assured returns', 'Flexible tenure'],
      halfPriceTitle: 'Half Price Deposit Scheme',
      halfPriceTagline: 'Special 150% return scheme',
      halfPriceDesc: 'When small needs are fulfilled, big dreams become dreams. But not now! Every dream of yours will come true with Shiv Pratap Multistate Societys 150% Deposit Scheme, In which you will get 1.5 times profit on your investment, so every dream of yours will come true instantly! ',
      halfPriceFeatures: ['150% returns', 'Short-term goals', 'High ROI', 'One-time deposit', 'Trusted scheme'],
      subhmangalTitle: 'Subhmangal Deposit Scheme',
      subhmangalTagline: 'Designed for children\'s wedding expenses',
      subhmangalDesc: 'Childrens wedding is an important, joyful and memorable moment in the life of parents and children. There should not be any deficiency in it. No ones wishes should be broken, this ceremony should be an unforgettable ceremony forever. ',
      subhmangalFeatures: ['Wedding planning', 'Family dreams', 'Assured maturity', 'Emotional savings', 'Long-term plan'],
      billionaireTitle: 'Billionaire Deposit Scheme',
      billionaireTagline: 'High-return long-term deposit plan',
      billionaireDesc: 'If you invest your savings in the right place, you can get a lot of benefits from it. Such as the Shiv Pratap Multistate Millionaire Deposit Scheme; Where your monthly investment of 21000 will get you Rs 1 crore after 18 years! ',
      billionaireFeatures: ['₹1 Crore target', '18 years tenure', 'Wealth creation', 'Monthly investment', 'High returns'],
      // Loan Schemes
      personalTitle: 'Personal Loan',
      personalTagline: 'Quick solution for short-term financial needs',
      personalDesc: 'In this practical world, small financial problems lead to big losses. Often we need money for a short period of time for some personal reason. But due to not getting the money on time, one has to bear a huge loss. But not now! ',
      personalFeatures: ['Quick approval', 'Minimal docs', 'Flexible EMI', 'Emergency use', 'Fast disbursal'],
      personalHighlights: ['Processing Fee: 1% of loan amount', 'Tenure: 12-60 months', 'Interest: 10.5% - 15% p.a.'],
      // Gold Loan Schemes
      emiGoldTitle: 'EMI (Equated Monthly Installment) Gold Loan',
      regularGoldTitle: 'Regular Gold Loan',
      easyGoldTitle: 'Easy Gold Loan',
      goldOverdraftTitle: 'Gold Loan Overdraft (C.C.)',
      bulletGoldTitle: 'Bullet Gold Loan',
      doorstepGoldTitle: 'Door Step (Home Reach) Gold Loan',
      // Benefits
      safeSecure: 'Safe & Secure',
      safeSecureDesc: 'RBI insured deposits with guaranteed returns',
      highReturns: 'High Returns',
      highReturnsDesc: 'Competitive interest rates for better growth',
      flexibleTenure: 'Flexible Tenure',
      flexibleTenureDesc: 'Choose tenure from 1 month to 10 years',
      easyWithdrawal: 'Easy Withdrawal',
      easyWithdrawalDesc: 'Premature withdrawal options available'
    },
    mr: {
      pageTitle: 'आर्थिक योजना आणि योजना',
      pageSubtitle: 'आपल्या सर्व आर्थिक गरजा पूर्ण करण्यासाठी डिपॉझिट आणि कर्ज योजनांची आमची व्यापक श्रेणी शोधा',
      recurringSchemes: 'आवर्ती ठेवी',
      fixedDepositSchemes: 'मुदत ठेवी',
      unfixedDepositSchemes: 'अनिश्चित मुदत ठेवी',
      recurringDesc: 'नियमित बचत आणि आकर्षक परताव्यासह आमच्या आवर्ती ठेव योजनांसह पद्धतशीरपणे संपत्ती तयार करा.',
      fixedDepositDesc: 'प्रत्येक जीवन श्रेणी आणि आर्थिक लक्ष्यांसाठी डिझाइन केलेल्या आमच्या मुदत ठेव योजनांसह आपले भविष्य सुरक्षित करा.',
      unfixedDepositDesc: 'आपल्या अल्पकालीन आर्थिक गरजांसाठी सोप्या काढण्याच्या सुविधांसह लवचिक ठेव पर्याय.',
      keyFeatures: 'मुख्य वैशिष्ट्ये',
      schemeHighlights: 'योजना मुख्य गुणविशेष',
      interestRate: 'व्याज दर',
      maxAmountLabel: 'कमाल रक्कम',
      tenureLabel: 'कालावधी',
      keyFeatureLabel: 'मुख्य वैशिष्ट्य',
      goldLoanComparison: 'सोने कर्ज योजना तुलना',
      whyChooseDeposits: 'आमच्या ठेव योजना का निवडाव्यात?',
      needHelp: 'योग्य योजना निवडण्यासाठी मदत हवी आहे का?',
      needHelpDesc: 'तुमच्या उद्दिष्टे आणि गरजांनुसार योग्य योजना निवडण्यासाठी आमचे आर्थिक सल्लागार तुमच्या मदतीसाठी सदैव तयार आहेत.',
      callNow: 'आता कॉल करा: 9582837032',
      visitBranch: 'जवळच्या शाखेला भेट द्या.',
      // Deposit Schemes
      pensionTitle: 'पेन्शन ठेव योजना',
      pensionTagline: 'वृद्धापकाळीची आर्थिक सुरक्षा योजना',
      pensionDesc: 'आज लावलेले झाड भविष्यात फळांसह सावलीही देते. पण त्या भविष्यातील आरामदायी जीवनासाठीचे बीज आजच पेरायला हवे, जेणेकरून वृद्धापकाळात निश्चिंत जीवनाचा आनंद घेता येईल आणि यासाठीच शिवप्रताप मल्टीस्टेट पेन्शन ठेव योजना सर्वोत्तम ठरते. ',
      pensionFeatures: ['नियमित मासिक उत्पन्न', 'चिंतामुक्त निवृत्ती', 'सुरक्षित आणि सुरक्षित', 'वरिष्ठांसाठी उत्तम', 'दीर्घकालीन गुंतवणूक'],
      rdTitle: 'रिकरींग ठेव योजना (RD)',
      rdTagline: 'लहान मासिक बचत योजना',
      rdDesc: 'उद्याच्या मोठ्या गरजा आणि स्वप्न पूर्ण करण्यासाठी आजपासूनच छोटी-छोटी बचत करायला हवी. पण अनेकदा बचत नक्की करायची कशी हेच कळत नाही.व्यावसायिक असो वा नोकरदार, स्वतःला शिस्त लावा बचतीची, आजच पूर्ण करा स्वप्नं उद्याची. ',
      rdFeatures: ['मासिक बचत', 'अनुशासित सवय', 'भविष्यातील लक्ष्ये', 'आश्वासित परतावा', 'लवचिक कालावधी'],
      halfPriceTitle: 'दाम दीडपट ठेव योजना',
      halfPriceTagline: 'विशेष 150% परतावा योजना',
      halfPriceDesc: 'लहानसहान गरजा पूर्ण करता करता मोठी स्वप्नं स्वप्नंच राहून जातात. पण आता नाही! तुमचं प्रत्येक स्वप्न होईल पूर्ण, शिवप्रताप मल्टीस्टेट सोसायटीच्या दाम दीडपट ठेव योजनेसह, ज्यात तुमच्या गुंतवणुकीवर फायदा मिळेल दीडपट , म्हणजे तुमचं प्रत्येक स्वप्न पूर्ण होईल झटपट! ',
      halfPriceFeatures: ['150% परतावा', 'अल्पकालीन लक्ष्ये', 'उच्च आरओआय', 'एकदा ठेव', 'विश्वसनीय योजना'],
      subhmangalTitle: 'शुभमंगल ठेव योजना',
      subhmangalTagline: 'मुलांच्या लग्न खर्चांसाठी डिझाइन केलेली',
      subhmangalDesc: 'मुलांचं लग्न हे आई-वडिलांच्या आणि मुलांच्या आयुष्यातील एक महत्वाचा, अत्यानंदाचा व कायम लक्षात राहणारा क्षण असतो. त्यात कुठल्याही प्रकारची कमी राहू नये, कुणाच्याही इच्छा-आकांक्षांना तडा जाऊ नये, हा सोहळा कायम एक अविस्मरणीय सोहळा व्हावा. ',
      subhmangalFeatures: ['लग्न नियोजन', 'कुटुंबाची स्वप्ने', 'आश्वासित परिपक्वता', 'भावनात्मक बचत', 'दीर्घकालीन योजना'],
      billionaireTitle: 'कोट्याधीश ठेव योजना ',
      billionaireTagline: 'उच्च-परतावा दीर्घकालीन ठेव योजना',
      billionaireDesc: 'तुम्ही जमवत असलेली बचत जर योग्य ठिकाणी गुंतवली तर त्यातून तुम्हाला भरपूर फायदा मिळू शकतो, जशी की शिवप्रताप मल्टीस्टेट कोट्याधीश ठेव योजना; जिथे आपल्या मासिक २१००० गुंतवणुकीवर १८ वर्षांनंतर मिळतील चक्क १ कोटी रुपये! ',
      billionaireFeatures: ['₹1 कोटी लक्ष्य', '18 वर्षांचा कालावधी', 'संपत्ती निर्मिती', 'मासिक गुंतवणूक', 'उच्च परतावा'],
      // Loan Schemes
      personalTitle: 'वैयक्तिक कर्ज',
      personalTagline: 'अल्पकालीन आर्थिक गरजांसाठी जलद उपाय',
      personalDesc: 'या व्यवहारी जगात लहानसहान आर्थिक अडचणींमुळे मोठं नुकसान सोसावं लागतं. अनेकदा आपल्याला काही वैयक्तिक कारणास्तव अल्पावधीसाठी पैशांची गरज असते. मात्र वेळीच पैसे न मिळाल्याने मोठे नुकसान सोसावे लागते. पण आता नाही! ',
      personalFeatures: ['जलद मंजुरी', 'किमान दस्तऐवज', 'लवचिक ईएमआय', 'आपत्कालीन वापर', 'जलद वितरण'],
      personalHighlights: ['प्रक्रिया शुल्क: कर्ज रक्कमीचे 1%', 'कालावधी: 12-60 महिने', 'व्याज: 10.5% - 15% वार्षिक'],
      // Gold Loan Schemes
      emiGoldTitle: 'ई. एम. आय. (EMI) गोल्ड लोन ',
      regularGoldTitle: 'रेग्युलर गोल्ड लोन ',
      easyGoldTitle: 'ईझी गोल्ड लोन लोन ',
      goldOverdraftTitle: 'गोल्ड लोन ओव्हर ड्राफ्ट(C.C.) ',
      bulletGoldTitle: 'बुलेट गोल्ड लोन ',
      doorstepGoldTitle: 'डोअर स्टेप (घर पोहच) गोल्ड लोन ',
      // Benefits
      safeSecure: 'सुरक्षित आणि सुरक्षित',
      safeSecureDesc: 'आरबीआय विमा केलेल्या ठेवींसह आश्वासित परतावा',
      highReturns: 'उच्च परतावा',
      highReturnsDesc: 'चांगल्या वाढीसाठी स्पर्धात्मक व्याज दर',
      flexibleTenure: 'लवचिक कालावधी',
      flexibleTenureDesc: '1 महिन्यापासून 10 वर्षापर्यंत कालावधी निवडा',
      easyWithdrawal: 'सोपी काढणी',
      easyWithdrawalDesc: 'समयपूर्व काढण्याचे पर्याय उपलब्ध'
    }
  };

  const t = translations[language];

  // State for active category
  const [activeCategory, setActiveCategory] = useState('recurring');
  const [, setSelectedPlan] = useState(null);

  // Handle path-based navigation
  useEffect(() => {
    const pathname = location.pathname;
    
    // Extract scheme ID from pathname
    const schemeMatch = pathname.match(/plan-(.+)$/);
    if (schemeMatch) {
      const schemeId = schemeMatch[1];
      
      // Set active category based on scheme ID
      if (schemeId.includes('recurring') || schemeId.includes('billionaire')) {
        setActiveCategory('recurring');
      } else if (schemeId.includes('pension') || schemeId.includes('half-price') || schemeId.includes('subhmangal')) {
        setActiveCategory('fixed');
      } else if (schemeId.includes('unfixed')) {
        setActiveCategory('unfixed');
      }

      // Scroll to the specific section after a short delay
      setTimeout(() => {
        const element = document.getElementById(schemeId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'center' });
          // Add highlight effect
          element.classList.add('ring-4', 'ring-yellow-400', 'ring-opacity-75');
          setTimeout(() => {
            element.classList.remove('ring-4', 'ring-yellow-400', 'ring-opacity-75');
          }, 2000);
        }
      }, 100);
    }
  }, [location.pathname]);

  // Recurring Deposit Schemes Data
  const recurringSchemes = [
    {
      id: 'billionaire',
      title: t.billionaireTitle,
      icon: <FaChartLine />,
      tagline: t.billionaireTagline,
      description: t.billionaireDesc,
      features: t.billionaireFeatures,
      color: 'from-yellow-500 to-yellow-700'
    },
    {
      id: 'recurring',
      title: t.rdTitle,
      icon: <FaPiggyBank />,
      tagline: t.rdTagline,
      description: t.rdDesc,
      features: t.rdFeatures,
      color: 'from-green-500 to-green-700'
    }
  ];

  // Fixed Deposit Schemes Data
  const fixedDepositSchemes = [
    {
      id: 'pension',
      title: t.pensionTitle,
      icon: <FaUserTie />,
      tagline: t.pensionTagline,
      description: t.pensionDesc,
      features: t.pensionFeatures,
      color: 'from-blue-500 to-blue-700'
    },
    {
      id: 'half-price',
      title: t.halfPriceTitle,
      icon: <FaStar />,
      tagline: t.halfPriceTagline,
      description: t.halfPriceDesc,
      features: t.halfPriceFeatures,
      color: 'from-purple-500 to-purple-700'
    },
    {
      id: 'subhmangal',
      title: t.subhmangalTitle,
      icon: <FaRing />,
      tagline: t.subhmangalTagline,
      description: t.subhmangalDesc,
      features: t.subhmangalFeatures,
      color: 'from-pink-500 to-pink-700'
    }
  ];

  // Unfixed Deposit Schemes Data (empty for now)
  const unfixedDepositSchemes = [];

  // Get schemes based on active category
  const getActiveSchemes = () => {
    switch(activeCategory) {
      case 'recurring': return recurringSchemes;
      case 'fixed': return fixedDepositSchemes;
      case 'unfixed': return unfixedDepositSchemes;
      default: return recurringSchemes;
    }
  };

  // Get category title
  const getCategoryTitle = () => {
    switch(activeCategory) {
      case 'recurring': return t.recurringSchemes;
      case 'fixed': return t.fixedDepositSchemes;
      case 'unfixed': return t.unfixedDepositSchemes;
      default: return t.recurringSchemes;
    }
  };

  // Get category icon
  const getCategoryIcon = () => {
    switch(activeCategory) {
      case 'recurring': return <FaPiggyBank />;
      case 'fixed': return <FaBuilding />;
      case 'unfixed': return <FaHandHoldingUsd />;
      default: return <FaPiggyBank />;
    }
  };

  return (
    <div 
      className="font-sans min-h-screen relative overflow-hidden"
      style={{
        background: `linear-gradient(135deg, ${lightColor} 0%, white 100%)`
      }}
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute -top-20 -right-20 w-96 h-96 rounded-full opacity-5"
          style={{ backgroundColor: primaryColor }}
        ></div>
        <div 
          className="absolute -bottom-32 -left-32 w-80 h-80 rounded-full opacity-5"
          style={{ backgroundColor: secondaryColor }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 md:py-12">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <h1 
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6"
            style={{
              background: `linear-gradient(135deg, ${primaryColor} 0%, #d15679 100%)`,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}
          >
            {t.pageTitle}
          </h1>
          <p className="text-gray-600 text-base sm:text-lg max-w-3xl mx-auto px-4">
            {t.pageSubtitle}
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-8 sm:mb-10 md:mb-12">
          <button
            onClick={() => setActiveCategory('recurring')}
            className={`px-4 sm:px-6 md:px-8 py-3 sm:py-4 rounded-xl font-semibold transition-all duration-300 transform hover:-translate-y-1 flex items-center gap-2 sm:gap-3 text-sm sm:text-base ${
              activeCategory === 'recurring' ? 'shadow-xl scale-105' : 'hover:shadow-lg'
            }`}
            style={{
              background: activeCategory === 'recurring' 
                ? `linear-gradient(135deg, ${primaryColor} 0%, #d15679 100%)`
                : 'white',
              color: activeCategory === 'recurring' ? 'white' : primaryColor,
              border: `2px solid ${activeCategory === 'recurring' ? 'transparent' : `${primaryColor}30`}`
            }}
          >
            <FaPiggyBank className="text-sm sm:text-base" />
            <span className="hidden sm:inline">{t.recurringSchemes}</span>
            <span className="sm:hidden">{t.recurringSchemes.split(' ')[0]}</span>
          </button>

          <button
            onClick={() => setActiveCategory('fixed')}
            className={`px-4 sm:px-6 md:px-8 py-3 sm:py-4 rounded-xl font-semibold transition-all duration-300 transform hover:-translate-y-1 flex items-center gap-2 sm:gap-3 text-sm sm:text-base ${
              activeCategory === 'fixed' ? 'shadow-xl scale-105' : 'hover:shadow-lg'
            }`}
            style={{
              background: activeCategory === 'fixed' 
                ? `linear-gradient(135deg, ${primaryColor} 0%, #d15679 100%)`
                : 'white',
              color: activeCategory === 'fixed' ? 'white' : primaryColor,
              border: `2px solid ${activeCategory === 'fixed' ? 'transparent' : `${primaryColor}30`}`
            }}
          >
            <FaBuilding className="text-sm sm:text-base" />
            <span className="hidden sm:inline">{t.fixedDepositSchemes}</span>
            <span className="sm:hidden">{t.fixedDepositSchemes.split(' ')[0]}</span>
          </button>

          <button
            onClick={() => setActiveCategory('unfixed')}
            className={`px-4 sm:px-6 md:px-8 py-3 sm:py-4 rounded-xl font-semibold transition-all duration-300 transform hover:-translate-y-1 flex items-center gap-2 sm:gap-3 text-sm sm:text-base ${
              activeCategory === 'unfixed' ? 'shadow-xl scale-105' : 'hover:shadow-lg'
            }`}
            style={{
              background: activeCategory === 'unfixed' 
                ? `linear-gradient(135deg, ${primaryColor} 0%, #d15679 100%)`
                : 'white',
              color: activeCategory === 'unfixed' ? 'white' : primaryColor,
              border: `2px solid ${activeCategory === 'unfixed' ? 'transparent' : `${primaryColor}30`}`
            }}
          >
            <FaHandHoldingUsd className="text-sm sm:text-base" />
            <span className="hidden sm:inline">{t.unfixedDepositSchemes}</span>
            <span className="sm:hidden">{t.unfixedDepositSchemes.split(' ')[0]}</span>
          </button>
        </div>

        {/* Category Header */}
        <div 
          className="rounded-2xl shadow-xl p-4 sm:p-6 md:p-8 mb-8 sm:mb-10 md:mb-12 border relative overflow-hidden"
          style={{
            backgroundColor: 'white',
            borderColor: `${primaryColor}20`
          }}
        >
          <div 
            className="absolute top-0 right-0 w-24 sm:w-32 md:w-40 h-24 sm:h-32 md:h-40 rounded-full opacity-10"
            style={{ backgroundColor: primaryColor }}
          ></div>
          
          <div className="relative z-10 flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
            <div 
              className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl flex items-center justify-center text-xl sm:text-2xl md:text-3xl flex-shrink-0"
              style={{
                background: `linear-gradient(135deg, ${primaryColor} 0%, #d15679 100%)`,
                color: 'white'
              }}
            >
              {getCategoryIcon()}
            </div>
            <div className="text-center sm:text-left">
              <h2 className="text-2xl sm:text-2xl md:text-3xl font-bold mb-2" style={{ color: darkColor }}>
                {getCategoryTitle()}
              </h2>
              <p className="text-gray-600 max-w-3xl text-sm sm:text-base">
                {activeCategory === 'recurring' && t.recurringDesc}
                {activeCategory === 'fixed' && t.fixedDepositDesc}
                {activeCategory === 'unfixed' && t.unfixedDepositDesc}
              </p>
            </div>
          </div>
        </div>

        {/* Schemes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {getActiveSchemes().map((scheme) => (
            <div 
              key={scheme.id}
              id={scheme.id}
              onClick={() => setSelectedPlan(scheme)}
              className="bg-white rounded-2xl shadow-xl overflow-hidden border transform transition-all duration-500 hover:-translate-y-4 hover:shadow-2xl cursor-pointer"
              style={{ borderColor: `${primaryColor}20` }}
            >
              {/* Scheme Header */}
              <div 
                className="p-6 text-white relative overflow-hidden"
                style={{
                  background: `linear-gradient(135deg, ${primaryColor} 0%, #9c2956 100%)`
                }}
              >
                <div className="absolute top-0 right-0 w-24 h-24 rounded-full bg-white/10 -translate-y-8 translate-x-8"></div>
                
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 rounded-xl bg-white/20 flex items-center justify-center">
                    <div className="text-2xl">
                      {scheme.icon}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">{scheme.title}</h3>
                    <p className="text-white/80 text-sm mt-1">{scheme.tagline}</p>
                  </div>
                </div>

                {/* Interest Rate Badge for Gold Loans */}
                {(activeCategory === 'gold' || activeCategory === 'loan') && scheme.interestRate && (
                  <div className="flex items-center gap-2 mt-4">
                    <FaPercent />
                    <span className="font-bold">{t.interestRate}: {scheme.interestRate}</span>
                  </div>
                )}
              </div>

              {/* Scheme Content */}
              <div className="p-6">
                {/* Description */}
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {scheme.description}
                </p>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="font-bold mb-3 flex items-center gap-2" style={{ color: primaryColor }}>
                    <FaCheckCircle /> {t.keyFeatures}
                  </h4>
                  <div className="space-y-2">
                    {scheme.features.map((feature, index) => (
                      <div 
                        key={index}
                        className="flex items-center gap-3 p-3 rounded-lg"
                        style={{ backgroundColor: `${primaryColor}08` }}
                      >
                        <FaArrowRight className="flex-shrink-0" style={{ color: primaryColor }} />
                        <span className="text-sm" style={{ color: darkColor }}>
                          {typeof feature === 'string' ? feature : feature?.label || JSON.stringify(feature)}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Scheme Specific Details */}
                {scheme.maxAmount && (
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div 
                      className="p-4 rounded-xl text-center"
                      style={{ backgroundColor: `${secondaryColor}15` }}
                    >
                      <div className="text-sm text-gray-600 mb-1">{t.maxAmount}</div>
                      <div className="font-bold text-lg" style={{ color: darkColor }}>
                        {scheme.maxAmount}
                      </div>
                    </div>
                    {scheme.tenure && (
                      <div 
                        className="p-4 rounded-xl text-center"
                        style={{ backgroundColor: `${accentColor}15` }}
                      >
                        <div className="text-sm text-gray-600 mb-1">{t.tenure}</div>
                        <div className="font-bold text-lg" style={{ color: darkColor }}>
                          {scheme.tenure}
                        </div>
                      </div>
                    )}
                  </div>
                )}

                {/* Highlights for Personal Loan */}
                {scheme.highlights && (
                  <div className="mb-6">
                    <h4 className="font-bold mb-3" style={{ color: primaryColor }}>
                      {t.schemeHighlights}
                    </h4>
                    <div className="space-y-2">
                      {scheme.highlights.map((highlight, index) => (
                        <div 
                          key={index}
                          className="flex items-center gap-3 p-3 rounded-lg border"
                          style={{ borderColor: `${primaryColor}20` }}
                        >
                          <FaStar style={{ color: secondaryColor }} />
                          <span className="text-sm" style={{ color: darkColor }}>
                            {typeof highlight === 'string' ? highlight : highlight?.label || JSON.stringify(highlight)}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>


        {/* Deposit Scheme Benefits */}
        <div 
          className="rounded-2xl shadow-xl p-8 mb-12 border"
          style={{
            backgroundColor: `${primaryColor}05`,
            borderColor: `${primaryColor}20`
          }}
        >
          <h3 className="text-2xl font-bold mb-8 text-center" style={{ color: primaryColor }}>
            {t.whyChooseDeposits}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                icon: <FaShieldAlt />,
                title: t.safeSecure,
                description: t.safeSecureDesc
              },
              {
                icon: <FaChartLine />,
                title: t.highReturns,
                description: t.highReturnsDesc
              },
              {
                icon: <FaCalendarAlt />,
                title: t.flexibleTenure,
                description: t.flexibleTenureDesc
              },
              {
                icon: <FaRupeeSign />,
                title: t.easyWithdrawal,
                description: t.easyWithdrawalDesc
              }
            ].map((benefit, index) => (
              <div 
                key={index}
                className="bg-white p-6 rounded-xl border text-center transform transition-all duration-300 hover:-translate-y-2 hover:shadow-lg"
                style={{ borderColor: `${primaryColor}20` }}
              >
                <div 
                  className="w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4 text-2xl"
                  style={{
                    backgroundColor: `${primaryColor}15`,
                    color: primaryColor
                  }}
                >
                  {benefit.icon}
                </div>
                <h4 className="font-bold mb-2" style={{ color: darkColor }}>
                  {benefit.title}
                </h4>
                <p className="text-gray-600 text-sm">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Contact CTA */}
        <div 
          className="rounded-2xl shadow-xl p-8 border text-center relative overflow-hidden"
          style={{
            background: `linear-gradient(135deg, ${primaryColor} 0%, #9c2956 100%)`,
            borderColor: primaryColor
          }}
        >
          <div className="absolute top-0 right-0 w-40 h-40 rounded-full bg-white/10 -translate-y-20 translate-x-20"></div>
          <div className="relative z-10">
            <h3 className="text-2xl font-bold text-white mb-4">
              {t.needHelp}
            </h3>
            <p className="text-white/80 mb-8 max-w-2xl mx-auto">
              {t.needHelpDesc}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 rounded-xl font-bold bg-white hover:bg-gray-100 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
                style={{ color: primaryColor }}>
                <FaPhoneAlt className="inline mr-2" />
                {t.callNow}
              </button>
              <button className="px-8 py-3 rounded-xl font-bold bg-transparent border-2 border-white text-white hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg">
                <FaBuilding className="inline mr-2" />
                {t.visitBranch}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Custom CSS */}
      <style jsx>{`
        /* Custom scrollbar for table */
        .overflow-x-auto::-webkit-scrollbar {
          height: 8px;
        }

        .overflow-x-auto::-webkit-scrollbar-track {
          background: #f1f1f1;
          border-radius: 4px;
        }

        .overflow-x-auto::-webkit-scrollbar-thumb {
          background: ${primaryColor}60;
          border-radius: 4px;
        }

        .overflow-x-auto::-webkit-scrollbar-thumb:hover {
          background: ${primaryColor}80;
        }

        /* Smooth hover transitions */
        .transition-all {
          transition-property: all;
          transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        }

        /* Card hover effects */
        .hover:-translate-y-4:hover {
          transform: translateY(-16px);
        }

        .hover:-translate-y-2:hover {
          transform: translateY(-8px);
        }

        .hover:-translate-y-1:hover {
          transform: translateY(-4px);
        }

        /* Shadow effects */
        .hover:shadow-2xl:hover {
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
        }

        .hover:shadow-xl:hover {
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
        }

        .hover:shadow-lg:hover {
          box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
        }
      `}</style>
    </div>
  );
};

export default Plan;