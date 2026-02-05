import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext';
import { 
  FaFacebook,
  FaCalculator, FaPiggyBank, FaHandHoldingUsd, FaChartLine,
  FaBuilding, FaUsers, FaShieldAlt, FaMobileAlt,
   FaRupeeSign, FaPercent, FaCalendarAlt,
  FaCamera, FaHandshake,
  FaHome, FaCar, FaGraduationCap, FaBriefcase,
  FaArrowRight, FaPlus, FaTimes,
  FaStar, FaAward, FaUserCheck, FaLightbulb,
  FaCreditCard, FaHandHoldingHeart, FaUniversity, FaFilter,
  FaPiggyBank as FaPiggyBankSolid, FaUser, FaRing, FaCrown, FaMapMarkerAlt, FaExternalLinkAlt
} from 'react-icons/fa';
import { 
  database, 
  ref as dbRef, 
  get 
} from '../../firebase';

import slider1 from '../Assets/slider1.png';
import slider111 from '../Assets/slider111.jpg';
import slider2 from '../Assets/slider2.png';
import slider3 from '../Assets/slider3.png';
import slider4 from '../Assets/slider4.png';
import slider5 from '../Assets/slider5.png';
import slider6 from '../Assets/slider6.png';
import slider7 from '../Assets/slider7.png';
import slider8 from '../Assets/slider8.png';
import slider9 from '../Assets/slider9.png';
import slider10 from '../Assets/slider10.png';
import popupImage from '../Assets/All.jpeg';

const Home = () => {
  const navigate = useNavigate();
  const { language } = useLanguage();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  
  // Handle language change loading state
  useEffect(() => {
    setIsLoading(true);
    setError(null);
    
    // Small delay to ensure smooth transition
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 200);
    
    return () => clearTimeout(timer);
  }, [language]);
  
  // Color constants
  const primaryColor = '#b03462';
  const secondaryColor = '#ffd166';
  const accentColor = '#06d6a0';
  const darkColor = '#1a1a2e';

  // Translations
  const translations = {
    en: {
      aboutOrg: "About the Organization",
      orgName: "Shivpratap Multistate Bank",
      whyChooseUs: "Why Choose Us",
      whyChooseUsSub: "We combine traditional banking values with modern technology to serve you better",
      popularSchemes: "Our Popular Schemes",
      schemesSub: "Tailored financial solutions designed to meet your specific needs and aspirations",
      modernBanking: "Perfect Modern Banking for All Needs",
      bankingServices: "Banking Services",
      exploreServices: "Explore our comprehensive banking solutions",
      goldLoanCalc: "Gold Loan Calculator",
      calcSubtitle: "Calculate your eligible loan amount instantly",
      goldWeight: "Weight (grams)",
      goldRate: "Current Gold Rate (₹/gram)",
      goldPurity: "Gold Purity",
      selectTenure: "Select Tenure",
      calculateLoan: "Calculate Loan Amount",
      eligibleAmount: "You are eligible for",
      monthlyEMI: "Your monthly EMI is",
      loanAmountText: "Loan Amount:",
      basedOnLTV: "*Based on 75% Loan-to-Value ratio",
      note: "Note:",
      noteText: "Maximum loan amount is 75% of gold value as per RBI guidelines. Actual approval subject to terms and conditions.",
      mediaGallery: "Media Gallery",
      gallerySub: "Explore our journey through pictures and videos",
      viewAllGallery: "View All Gallery",
      readMore: "Read More About Us",
      stayConnected: "Stay Connected",
      followUs: "Follow us on Facebook for latest updates",
      viewMoreFB: "View More on Facebook",
      savings: "Savings",
      current: "Current",
      loans: "Loans",
      deposits: "Deposits",
      // Statistics section
      statsTitle: "Our Achievements in Numbers",
      statsSubtitle: "Trusted by millions, serving communities with excellence",
      satisfiedCustomers: "Satisfied Customers",
      branches: "Branches",
      villageService: "Village Service Centers",
      employee: "Employees",
      businessVolume: "Business Volume",
      // About section content
      aboutYear2002: "In the year 2002",
      aboutParagraph1: "Galai businessmen came together and presented the idea of establishing an organization to Honorable Pratap Sheth Dada Salunkhe. At this time, the condition of cooperatives was very bad, many organizations were bankrupt and some were on the verge of bankruptcy. There was an atmosphere of volatility among depositors. Taking a decision in such a situation was very risky.",
      aboutVitthalSalunkhe: "Hon. Mr. Vitthal Salunkhe",
      aboutParagraph2: "who had a thorough knowledge of the banking sector, decided to study it and meet the challenge. Dada decided to correct the mistakes of other institutions and provide loans at low rates and with safe collateral and the institution was established on 26th June 2002.",
      aboutJuly11: "Immediately on 11th July 2002",
      aboutParagraph3: "the institution was inaugurated by Hon'ble Doctor Patangraoji Kadam, Hon'ble Jayantraoji Patil and Hon'ble Harsh Vardhanji Patil. On this occasion, grandmothers and former MLAs from all parties attended the event.",
      // Other hardcoded text
      popular: "Popular",
      viewDetails: "View Details",
      photos: "Photos",
      videos: "Videos",
      noImagesFound: "No images found",
      checkBackLater: "Check back later for new gallery images",
      photo: "PHOTO",
      bankEvent: "Bank Event",
      // Info Cards
      safeSecure: "Safe & Secure",
      safeSecureDesc: "RBI licensed with 256-bit encryption ensuring your money is always protected.",
      customerFirst: "Customer First",
      customerFirstDesc: "Personalized service with dedicated relationship managers for all your needs.",
      growthFocused: "Growth Focused",
      growthFocusedDesc: "Investment solutions designed to help you achieve your financial goals.",
      // Schemes
      pensionScheme: "Pension Deposit Scheme",
      pensionDesc: "A tree planted today provides shade along with fruits in the future. But the seeds for that future comfortable life must be sown today. So that one can enjoy a carefree life in old age and this is why Shiv Pratap Multistate Pension Deposit Scheme is the best. ",
      pensionFeatures: ["Regular monthly income", "Worry-free retirement", "Safe & secure", "Ideal for seniors"],
      pensionTagline: "Old age financial security scheme",
      recurringScheme: "Recurring Deposit Scheme (RD)",
      recurringDesc: "Small savings should be made from today to fulfill big needs and dreams of tomorrow. But often we do not know exactly how to save. Be it a professional or an employee, discipline yourself to save, fulfill today's dreams for tomorrow. ",
      recurringFeatures: ["Monthly savings", "Disciplined habit", "Future goals", "Assured returns"],
      recurringTagline: "Small monthly savings plan",
      halfPriceScheme: "Half Price Deposit Scheme",
      halfPriceDesc: "When small needs are fulfilled, big dreams become dreams. But not now! Every dream of yours will come true with Shiv Pratap Multistate Society's 150% Deposit Scheme, In which you will get 1.5 times profit on your investment, so every dream of yours will come true instantly! ",
      halfPriceFeatures: ["150% returns", "Short-term goals", "High ROI", "One-time deposit"],
      halfPriceTagline: "Special 150% return scheme",
      subhmangalScheme: "Subhmangal Deposit Scheme",
      subhmangalDesc: "Children's wedding is an important, joyful and memorable moment in the life of parents and children. There should not be any deficiency in it. No one's wishes should be broken, this ceremony should be an unforgettable ceremony forever. ",
      subhmangalFeatures: ["Wedding planning", "Family dreams", "Assured maturity", "Emotional savings"],
      subhmangalTagline: "Designed for children's wedding expenses",
      // Banking Services
      regularSavings: "Regular Savings Account",
      salaryAccount: "Salary Account",
      womensSavings: "Women's Savings Account",
      minorSavings: "Minor Savings Account",
      seniorAccount: "Senior Citizen Account",
      premiumCurrent: "Premium Current Account",
      startupCurrent: "Startup Current Account",
      tradeCurrent: "Trade Current Account",
      homeLoan: "Home Loan",
      personalLoan: "Personal Loan",
      carLoan: "Car Loan",
      educationLoan: "Education Loan",
      goldLoanService: "Gold Loan",
      businessLoan: "Business Loan",
      fixedDeposit: "Fixed Deposit",
      taxSaverFD: "Tax Saver FD",
      flexiDeposit: "Flexi Deposit",
      cumulativeDeposit: "Cumulative Deposit",
      // Gold Calculator
      enterWeight: "Enter weight in grams",
      grams: "Grams",
      fetchingRate: "Fetching rate...",
      realTimeRates: "*Real-time updated rates",
      forMonths: "For {months} months • 10% annual interest rate",
      errorFetchingPrice: "Unable to fetch live gold price",
      // Tenure Options
      sixMonths: "6 months",
      twelveMonths: "12 months",
      eighteenMonths: "18 months",
      twentyFourMonths: "24 months",
      thirtyMonths: "30 months",
      thirtySixMonths: "36 months",
      // Accounts Section
      accountsSection: "Our Accounts",
      accountsSub: "Choose the perfect account for your financial needs",
      savingsAccount: "Savings Account",
      premiumSavingsAccount: "Premium Savings Account", 
      currentAccount: "Current Account",
      savingsAccountDesc: "Following the motto of 'Highest Service and Security', we handle your savings responsibly and give 6.50% returns. All banking facilities available free of charge.",
      premiumSavingsAccountDesc: "Following the motto of 'Highest Service and Security', we handle your savings responsibly and give 6.50% returns. All banking facilities available free of charge.",
      currentAccountDesc: "Reliable banking services for businessmen with modern facilities and strong support for business growth. All banking facilities available free of charge.",
      learnMore: "Learn More",
      interestRate: "Interest Rate",
      minBalance: "Min Balance",
      features: "Features",
      freeFacilities: "Free Facilities",
      neftRtgsImps: "NEFT/RTGS/IMPS",
      mobileBanking: "Mobile Banking",
      internetBanking: "Internet Banking",
      smsBanking: "SMS Banking",
      interestRateFeature: "6.50% Interest",
      unlimitedTransactions: "Unlimited Transactions",
      aadharBankingFeature: "Aadhar Banking",
      // Modern Banking Section
      modernBankingCards: "Modern Banking Solutions",
      aadharBanking: "Aadhar Banking",
      aadharBankingDesc: "You can deposit or withdraw money through Aadhar banking with the help of your thumb.",
      debitCard: "Debit Card",
      debitCardDesc: "Times are changing and with changing times, get cash free payments instantly with RuPay EMV ATM.",
      qrCode: "QR Code",
      qrCodeDesc: "Accept payments from customers through UPI QR CODE and get business loans up to 5 lakhs.",
      digitalBanking: "Digital Banking",
      digitalBankingDesc: "For your transactions to be more dynamic and cashless, 365 days mobile, internet banking services.",
      businessBanking: "Business Banking",
      businessBankingDesc: "Comprehensive banking solutions tailored for businesses and entrepreneurs",
      personalBanking: "Personal Banking",
      personalBankingDesc: "Flexible banking products designed to meet your personal financial goals",
      ruralBanking: "Rural Banking",
      ruralBankingDesc: "Bringing banking services to rural areas with dedicated village service centers",
      // Purity Options
      purity24K: "24K (99.9% Pure)",
      purity22K: "22K (91.6% Pure)",
      purity18K: "18K (75% Pure)",
      purity14K: "14K (58.5% Pure)",
      purity12K: "12K (50% Pure)",
      // Slider translations
      slider1Title: "Secure Your Future",
      slider1Subtitle: "Experience banking with trust and transparency",
      slider2Title: "Digital Banking",
      slider2Subtitle: "Bank anytime, anywhere with our mobile app",
      slider3Title: "Business Loans",
      slider3Subtitle: "Fuel your business growth with our MSME schemes",
      slider4Title: "Deposit Mortgage Scheme",
      slider4Subtitle: "Secure your property with our flexible deposit mortgage options",
      slider5Title: "Women Empowerment",
      slider5Subtitle: "Special banking services for women entrepreneurs",
      slider6Title: "Education Loans",
      slider6Subtitle: "Invest in your future with our education schemes",
      slider7Title: "Agriculture Loans",
      slider7Subtitle: "Supporting our farmers with flexible financing",
      slider8Title: "Personal Loan",
      slider8Subtitle: "Quick personal loans for all your immediate financial needs",
      slider9Title: "Car Loans",
      slider9Subtitle: "Drive your dream car with our affordable car loans",
      slider10Title: "Gold Loans",
      slider10Subtitle: "Instant loans against your gold assets",
      slider11Title: "Senior Citizen Plans",
      slider11Subtitle: "Special schemes for our respected seniors",
      slider12Title: "Investment Plans",
      slider12Subtitle: "Grow your wealth with smart investment options",
    },
    mr: {
      aboutOrg: "संस्थेबद्दल",
      orgName: "शिवप्रताप मल्टीस्टेट बँक",
      whyChooseUs: "आम्हाला का निवडावे",
      whyChooseUsSub: "आम्ही तुम्हाला चांगली सेवा देण्यासाठी पारंपरिक बँकिंग मूल्ये आणि आधुनिक तंत्रज्ञान एकत्र करतो",
      popularSchemes: "आमच्या लोकप्रिय योजना",
      schemesSub: "तुमच्या विशिष्ट गरजा आणि आकांक्षा पूर्ण करण्यासाठी डिझाइन केलेले वित्तीय उपाय",
      modernBanking: "सर्व गरजांसाठी परिपूर्ण आधुनिक बँकिंग",
      bankingServices: "बँकिंग सेवा",
      exploreServices: "आमच्या व्यापक बँकिंग उपायांचा शोध घ्या",
      goldLoanCalc: "सोने कर्ज कॅल्क्युलेटर",
      calcSubtitle: "तुमच्या पात्र कर्जाची रक्कम त्वरित गणना करा",
      goldWeight: "वजन (ग्रॅम मध्ये)",
      goldRate: "सध्याची सोने दर (₹/ग्रॅम)",
      goldPurity: "सोन्याची शुद्धता (Purity)",
      selectTenure: "कालावधी निवडा",
      calculateLoan: "कर्जाची रक्कम गणना करा",
      eligibleAmount: "तुम्ही पात्र आहात",
      monthlyEMI: "तुमचा मासिक EMI आहे",
      loanAmountText: "कर्जाची रक्कम:",
      basedOnLTV: "*75% लोन-टू-व्हॅल्यू गुणोत्तरावर आधारित",
      note: "टीप:",
      noteText: "अधिकतम कर्ज रक्कम सोन्याच्या मूल्याच्या 75% आहे. वास्तविक मंजुरी अटी आणि नियमांना अधीन आहे.",
      mediaGallery: "मीडिया गॅलरी",
      gallerySub: "चित्रे आणि व्हिडिओद्वारे आमच्या प्रवासाचा शोध घ्या",
      viewAllGallery: "सर्व गॅलरी पहा",
      readMore: "आमच्याबद्दल अधिक वाचा",
      stayConnected: "कनेक्ट रहा",
      followUs: "नवीनतम अपडेटसाठी आम्हाला फेसबुकवर फॉलो करा",
      viewMoreFB: "फेसबुकवर अधिक पहा",
      savings: "बचत",
      current: "चालू",
      loans: "कर्ज",
      deposits: "ठेवी",
      // Statistics section
      statsTitle: "आमची उपलब्धी संख्यांमध्ये",
      statsSubtitle: "लाखो ग्राहकांचा विश्वास, उत्कृष्ट सेवेसह",
      satisfiedCustomers: "समाधानी ग्राहक",
      branches: "शाखा",
      villageService: "गाव सेवा केंद्र",
      employee: "कर्मचारी",
      businessVolume: "कोटी व्यवसाय",
      // About section content
      aboutYear2002: "वर्ष २००२ मध्ये",
      aboutParagraph1: "गलई व्यापाऱ्यांनी एकत्र येऊन माननीय प्रताप सेठ दादा सालुंखे यांना संस्था स्थापन करण्याचा कल्पना सादर केली. या वेळी सहकारी संस्थांची स्थिती खूप वाईट होती, अनेक संस्था दिवाळा झालेल्या होत्या आणि काही दिवाळ्याच्या वणवण्यावर होत्या. ठेवकरूंमध्ये अस्थिरतेचे वातावरण होते. अशा परिस्थितीत निर्णय घेणे खूप धोकादायक होते.",
      aboutVitthalSalunkhe: "माननीय श्री. विठ्ठल सालुंखे",
      aboutParagraph2: "यांना बँकिंग क्षेत्राचे संपूर्ण ज्ञान होते, त्यांनी त्याचा अभ्यास करण्याची आणि आव्हानाला सामोरे जाण्याची निर्णय घेतली. दादांनी इतर संस्थांच्या चुका दुरुस्त करण्याची आणि कमी दरावर आणि सुरक्षित जामीनवर कर्ज प्रदान करण्याची निर्णय घेतली आणि २६ जून २००२ रोजी संस्थेची स्थापना झाली.",
      aboutJuly11: "तात्काळ ११ जुलै २००२ रोजी",
      aboutParagraph3: "संस्थेचे उद्घाटन माननीय डॉक्टर पाटंगरावजी कदम, माननीय जयंतरावजी पाटील आणि माननीय हर्षवर्धनजी पाटील यांनी केले. या वेळी सर्व पक्षांच्या आजी आणि माजी आमदार या कार्यक्रमाला उपस्थित होते.",
      // Other hardcoded text
      popular: "लोकप्रिय",
      viewDetails: "तपशील पहा",
      photos: "फोटो",
      videos: "व्हिडिओ",
      noImagesFound: "कोणतेही चित्र सापडले नाही",
      checkBackLater: "नवीन गॅलरी प्रतिमांसाठी नंतर परत तपासा",
      photo: "फोटो",
      bankEvent: "बँक कार्यक्रम",
      // Info Cards
      safeSecure: "सुरक्षित आणि सुरक्षित",
      safeSecureDesc: "आरबीआय लायसेंस असलेले 256-बिट एन्क्रिप्शनसह आपले पैसे नेहमी सुरक्षित आहेत हे सुनिश्चित करते.",
      customerFirst: "ग्राहक प्रथम",
      customerFirstDesc: "आपल्या सर्व गरजांसाठी समर्पित रिलेशनशिप मॅनेजरसह वैयक्तिकृत सेवा.",
      growthFocused: "वाढीवर लक्ष केंद्रित",
      growthFocusedDesc: "आपल्या आर्थिक ध्येयां साध्य करण्यासाठी डिझाइन केलेले गुंतवणुकीचे उपाय.",
      // Schemes
      pensionScheme: "पेन्शन ठेव योजना",
      pensionDesc: "आज लावलेले झाड भविष्यात फळांसह सावलीही देते. पण त्या भविष्यातील आरामदायी जीवनासाठीचे बीज आजच पेरायला हवे, जेणेकरून वृद्धापकाळात निश्चिंत जीवनाचा आनंद घेता येईल आणि यासाठीच शिवप्रताप मल्टीस्टेट पेन्शन ठेव योजना सर्वोत्तम ठरते. ",
      pensionFeatures: ["नियमित मासिक उत्पन्न", "चिंतामुक्त निवृत्ती", "सुरक्षित आणि सुरक्षित", "वरिष्ठांसाठी आदर्श"],
      pensionTagline: "वृद्ध वयाची आर्थिक सुरक्षा योजना",
      recurringScheme: "रिकरींग ठेव योजना (RD)",
      recurringDesc: "उद्याच्या मोठ्या गरजा आणि स्वप्न पूर्ण करण्यासाठी आजपासूनच छोटी-छोटी बचत करायला हवी. पण अनेकदा बचत नक्की करायची कशी हेच कळत नाही.व्यावसायिक असो वा नोकरदार, स्वतःला शिस्त लावा बचतीची, आजच पूर्ण करा स्वप्नं उद्याची. ",
      recurringFeatures: ["मासिक बचत", "अनुशासित सवय", "भविष्यातील ध्येय", "आश्वासित परतावा"],
      recurringTagline: "लहान मासिक बचत योजना",
      halfPriceScheme: "दाम दीडपट ठेव योजना",
      halfPriceDesc: "लहानसहान गरजा पूर्ण करता करता मोठी स्वप्नं स्वप्नंच राहून जातात. पण आता नाही! तुमचं प्रत्येक स्वप्न होईल पूर्ण, शिवप्रताप मल्टीस्टेट सोसायटीच्या दाम दीडपट ठेव योजनेसह, ज्यात तुमच्या गुंतवणुकीवर फायदा मिळेल दीडपट , म्हणजे तुमचं प्रत्येक स्वप्न पूर्ण होईल झटपट! ",
      halfPriceFeatures: ["150% परतावा", "अल्पकालीन ध्येय", "उच्च ROI", "एकदा डिपॉजिट"],
      halfPriceTagline: "विशेष 150% परतावा योजना",
      subhmangalScheme: "शुभमंगल ठेव योजना",
      subhmangalDesc: "मुलांचं लग्न हे आई-वडिलांच्या आणि मुलांच्या आयुष्यातील एक महत्वाचा, अत्यानंदाचा व कायम लक्षात राहणारा क्षण असतो. त्यात कुठल्याही प्रकारची कमी राहू नये, कुणाच्याही इच्छा-आकांक्षांना तडा जाऊ नये, हा सोहळा कायम एक अविस्मरणीय सोहळा व्हावा. ",
      subhmangalFeatures: ["लग्न नियोजन", "कुटुंब स्वप्ने", "आश्वासित परिपक्वता", "भावनात्मक बचत"],
      subhmangalTagline: "मुलांच्या लग्न खर्चांसाठी डिझाइन केलेले",
      // Banking Services
      regularSavings: "नियमित बचत खाते",
      salaryAccount: "पगार खाते",
      womensSavings: "महिला बचत खाते",
      minorSavings: "किरकोळ बचत खाते",
      seniorAccount: "वरिष्ठ नागरिक खाते",
      currentAccount: "चालू खाते",
      premiumCurrent: "प्रीमियम चालू खाते",
      startupCurrent: "स्टार्टअप चालू खाते",
      tradeCurrent: "व्यापार चालू खाते",
      homeLoan: "होम लोन",
      personalLoan: "वैयक्तिक कर्ज",
      carLoan: "कार लोन",
      educationLoan: "शिक्षण कर्ज",
      goldLoanService: "सोने कर्ज",
      businessLoan: "व्यवसाय कर्ज",
      fixedDeposit: "फिक्स्ड डिपॉजिट",
      taxSaverFD: "टॅक्स सेव्हर FD",
      flexiDeposit: "फ्लेक्सी डिपॉजिट",
      cumulativeDeposit: "क्युम्युलेटिव्ह डिपॉजिट",
      // Gold Calculator
      enterWeight: "ग्रॅममध्ये वजन प्रविष्ट करा",
      grams: "ग्रॅम",
      fetchingRate: "दर आणत आहे...",
      realTimeRates: "*रियल-टाइम अपडेटेड दर",
      forMonths: "{months} महिन्यांसाठी • 10% वार्षिक व्याज दर",
      errorFetchingPrice: "थेट सोने दर मिळवण्यात अक्षम",
      // Tenure Options
      sixMonths: "6 महिने",
      twelveMonths: "12 महिने",
      eighteenMonths: "18 महिने",
      twentyFourMonths: "24 महिने",
      thirtyMonths: "30 महिने",
      thirtySixMonths: "36 महिने",
      // Accounts Section
      accountsSection: "आमची खाती",
      accountsSub: "आपल्या आर्थिक गरजांसाठी योग्य खाते निवडा",
      savingsAccount: "बचत खाते",
      premiumSavingsAccount: "प्रीमियम बचत खाते",
      savingsAccountDesc: "उच्चतम सेवा व सुरक्षा या ब्रीद वाक्यास अनुसरून तुमची बचत जबाबदारीने सांभाळून ६.५०% परतावा देतो. सर्व बँकिंग सुविधा विनामूल्य उपलब्ध.",
      premiumSavingsAccountDesc: "उच्चतम सेवा व सुरक्षा या ब्रीद वाक्यास अनुसरून तुमची बचत जबाबदारीने सांभाळून ६.५०% परतावा देतो. सर्व बँकिंग सुविधा विनामूल्य उपलब्ध.",
      currentAccountDesc: "व्यवसायिकांसाठी विश्वासार्ह बँकिंग सेवा, आधुनिक सुविधा आणि व्यवसाय वाढीसाठी मजबूत पाठबळ. सर्व बँकिंग सुविधा विनामूल्य उपलब्ध.",
      learnMore: "अधिक जाणून घ्या",
      interestRate: "व्याज दर",
      minBalance: "किमान शिल्लक",
      features: "वैशिष्ट्ये",
      freeFacilities: "विनामूल्य सुविधा",
      neftRtgsImps: "NEFT/RTGS/IMPS",
      mobileBanking: "मोबाईल बँकिंग",
      internetBanking: "इंटरनेट बँकिंग",
      smsBanking: "SMS बँकिंग",
      interestRateFeature: "६.५०% व्याज",
      unlimitedTransactions: "अमर्यादित व्यवहार",
      aadharBankingFeature: "आधार बँकिंग",
      // Modern Banking Section
      modernBankingCards: "आधुनिक बँकिंग उपाय",
      aadharBanking: "आधार बँकिंग",
      aadharBankingDesc: "तुम्ही तुमच्या अंगठ्याच्या सहाय्याने आधार बँकिंगद्वारे पैसे डिपॉझिट किंवा विथड्रॉव करू शकता.",
      debitCard: "डेबिट कार्ड",
      debitCardDesc: "काळ बदलतोय आणि बदलत्या काळासोबत झटपट कॅश फ्री पेमेंटसाठी RuPay EMV ATM.",
      qrCode: "QR कोड",
      qrCodeDesc: "UPI QR CODE द्वारे ग्राहकांकडून पेमेंट स्वीकारा व मिळवा 5 लाखापर्यंत व्यवसायिक कर्ज.",
      digitalBanking: "डिजिटल बँकिंग",
      digitalBankingDesc: "तुमचे व्यवहार अधिक गतिमान व कॅशलेस व्हावे यासाठी 365 दिवस मोबाईल, इंटरनेट बँकिंग सेवा.",
      businessBanking: "व्यवसाय बँकिंग",
      businessBankingDesc: "व्यवसाय आणि उद्योजकांसाठी तयार केलेले व्यापक बँकिंग उपाय",
      personalBanking: "वैयक्तिक बँकिंग",
      personalBankingDesc: "आपल्या वैयक्तिक आर्थिक ध्येय पूर्ण करण्यासाठी डिझाइन केलेली लवचिक बँकिंग उत्पादने",
      ruralBanking: "ग्रामीण बँकिंग",
      ruralBankingDesc: "समर्पित गाव सेवा केंद्रांसह ग्रामीण भागात बँकिंग सेवा आणणे",
      // Purity Options
      purity24K: "24K (९९.९% शुद्ध)",
      purity22K: "22K (९१.६% शुद्ध)",
      purity18K: "18K (७५% शुद्ध)",
      purity14K: "14K (५८.५% शुद्ध)",
      purity12K: "12K (५०% शुद्ध)",
      // Slider translations
      slider1Title: "आपले भविष्य सुरक्षित करा",
      slider1Subtitle: "विश्वास आणि पारदर्शकतेसह बँकिंगचा अनुभव घ्या",
      slider2Title: "डिजिटल बँकिंग",
      slider2Subtitle: "आमच्या मोबाईल अॅपसह कुठूनही, कधीही बँकिंग करा",
      slider3Title: "व्यवसाय कर्ज",
      slider3Subtitle: "आमच्या MSME योजनांसह आपल्या व्यवसायाची वाढ करा",
      slider4Title: "डिपॉजिट गृहकर्ज योजना",
      slider4Subtitle: "आमच्या लवचिक डिपॉजिट गृहकर्ज पर्यायांसह आपली मालमत्ता सुरक्षित करा",
      slider5Title: "महिला सक्षमीकरण",
      slider5Subtitle: "महिला उद्योजकांसाठी विशेष बँकिंग सेवा",
      slider6Title: "शिक्षण कर्ज",
      slider6Subtitle: "आमच्या शिक्षण योजनांसह आपल्या भविष्यात गुंतवणूक करा",
      slider7Title: "शेती कर्ज",
      slider7Subtitle: "लवचिक वित्तपुरवठ्यासह आपल्या शेतकऱ्यांना समर्थन द्या",
      slider8Title: "वैयक्तिक कर्ज",
      slider8Subtitle: "आपल्या तातडीच्या आर्थिक गरजांसाठी जलद वैयक्तिक कर्ज",
      slider9Title: "कार लोन",
      slider9Subtitle: "आमच्या स्वस्त कार लोनसह आपले स्वप्नाचे कार चालवा",
      slider10Title: "सोने कर्ज",
      slider10Subtitle: "आपल्या सोन्याच्या मालमत्तेवर त्वरित कर्ज"
    }
  };

  const t = translations[language];

  // State management
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeTab, setActiveTab] = useState('savings');
  const [goldWeight, setGoldWeight] = useState('');
  const [goldPurity, setGoldPurity] = useState('24');
  const [selectedTenure, setSelectedTenure] = useState('12');
  const [goldRate, setGoldRate] = useState('6250');
  const [loanAmount, setLoanAmount] = useState('');
  const [monthlyEMI, setMonthlyEMI] = useState('');
  const [galleryImages, setGalleryImages] = useState([]);
  const [galleryLoading, setGalleryLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState(null);
  const [showPopup, setShowPopup] = useState(true); // Popup state - starts as true to show on page load

  // Counter states
  const [counters, setCounters] = useState({
    customers: 0,
    branches: 0,
    villageService: 0,
    employees: 0,
    businessVolume: 0
  });
  const [countersVisible, setCountersVisible] = useState(false);

  // Counter animation effect using React state
  useEffect(() => {
    if (!countersVisible) return;

    const targetValues = {
      customers: 50,
      branches: 23,
      villageService: 6,
      employees: 200,
      businessVolume: 1000
    };

    const duration = 2000; // 2 seconds
    const steps = 60; // 60fps
    const interval = duration / steps;

    Object.keys(targetValues).forEach((key, index) => {
      const target = targetValues[key];
      const increment = target / steps;
      let current = 0;
      let step = 0;

      const timer = setTimeout(() => {
        const counterInterval = setInterval(() => {
          step++;
          current += increment;
          
          if (step >= steps) {
            current = target;
            clearInterval(counterInterval);
          }
          
          setCounters(prev => ({
            ...prev,
            [key]: Math.floor(current)
          }));
        }, interval);
      }, index * 200); // Staggered start

      return () => clearTimeout(timer);
    });
  }, [countersVisible]);

  // Intersection Observer for counters
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting && !countersVisible) {
            setCountersVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    const statsSection = document.getElementById('stats-section');
    if (statsSection) {
      observer.observe(statsSection);
    }

    return () => {
      if (statsSection) {
        observer.unobserve(statsSection);
      }
    };
  }, [countersVisible]);

  // const [currentSlide, setCurrentSlide] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  // Hero Slider Images
  const sliderImages = [
    { 
      id: 'slide-1',
      src: slider1,  // Mobile image
      srcDesktop: slider111,  // Desktop/Laptop image
      alt: t.slider1Title + " - " + t.slider1Subtitle,
      title: t.slider1Title,
      subtitle: t.slider1Subtitle
    },
    { 
      id: 'slide-2',
      src: slider2, 
      alt: t.slider2Title + " - " + t.slider2Subtitle,
      title: t.slider2Title,
      subtitle: t.slider2Subtitle
    },
    { 
      id: 'slide-3',
      src: slider3, 
      alt: t.slider3Title + " - " + t.slider3Subtitle,
      title: t.slider3Title,
      subtitle: t.slider3Subtitle
    },
    { 
      id: 'slide-4',
      src: slider4, 
      alt: t.slider4Title + " - " + t.slider4Subtitle,
      title: t.slider4Title,
      subtitle: t.slider4Subtitle
    },
    { 
      id: 'slide-5',
      src: slider5, 
      alt: t.slider5Title + " - " + t.slider5Subtitle,
      title: t.slider5Title,
      subtitle: t.slider5Subtitle
    },
    { 
      id: 'slide-6',
      src: slider6, 
      alt: t.slider6Title + " - " + t.slider6Subtitle,
      title: t.slider6Title,
      subtitle: t.slider6Subtitle
    },
    { 
      id: 'slide-7',
      src: slider7, 
      alt: t.slider7Title + " - " + t.slider7Subtitle,
      title: t.slider7Title,
      subtitle: t.slider7Subtitle
    },
    { 
      id: 'slide-8',
      src: slider8, 
      alt: t.slider8Title + " - " + t.slider8Subtitle,
      title: t.slider8Title,
      subtitle: t.slider8Subtitle
    },
    { 
      id: 'slide-9',
      src: slider9, 
      alt: t.slider9Title + " - " + t.slider9Subtitle,
      title: t.slider9Title,
      subtitle: t.slider9Subtitle
    },
    { 
      id: 'slide-10',
      src: slider10, 
      alt: t.slider10Title + " - " + t.slider10Subtitle,
      title: t.slider10Title,
      subtitle: t.slider10Subtitle
    }
  ];

  // Information Cards Data
  const infoCards = [
    {
      icon: <FaShieldAlt />,
      title: t.safeSecure,
      description: t.safeSecureDesc,
      gradient: "from-purple-600 to-blue-600"
    },
    {
      icon: <FaHandHoldingUsd />,
      title: t.customerFirst,
      description: t.customerFirstDesc,
      gradient: "from-pink-600 to-rose-600"
    },
    {
      icon: <FaChartLine />,
      title: t.growthFocused,
      description: t.growthFocusedDesc,
      gradient: "from-orange-500 to-yellow-500"
    }
  ];

  // Schemes Data - First 4 from Plan.js deposit schemes
  const schemes = [
    {
      id: 'pension',
      name: t.pensionScheme,
      description: t.pensionDesc,
      icon: <FaUser />,
      features: t.pensionFeatures,
      tagline: t.pensionTagline
    },
    {
      id: 'recurring',
      name: t.recurringScheme,
      description: t.recurringDesc,
      icon: <FaPiggyBank />,
      features: t.recurringFeatures,
      tagline: t.recurringTagline
    },
    {
      id: 'half-price',
      name: t.halfPriceScheme,
      description: t.halfPriceDesc,
      icon: <FaStar />,
      features: t.halfPriceFeatures,
      tagline: t.halfPriceTagline
    },
    {
      id: 'subhmangal',
      name: t.subhmangalScheme,
      description: t.subhmangalDesc,
      icon: <FaRing />,
      features: t.subhmangalFeatures,
      tagline: t.subhmangalTagline
    }
  ];

  // Banking Services Data
  const bankingServices = {
    savings: [
      { name: t.regularSavings, icon: <FaPiggyBankSolid /> },
      { name: t.salaryAccount, icon: <FaRupeeSign /> },
      { name: t.womensSavings, icon: <FaHandHoldingHeart /> },
      { name: t.minorSavings, icon: <FaUniversity /> },
      { name: t.seniorAccount, icon: <FaUserCheck /> }
    ],
    current: [
      { name: t.currentAccount, icon: <FaBriefcase /> },
      { name: t.premiumCurrent, icon: <FaStar /> },
      { name: t.startupCurrent, icon: <FaLightbulb /> },
      { name: t.tradeCurrent, icon: <FaChartLine /> }
    ],
    loans: [
      { name: t.homeLoan, icon: <FaHome /> },
      { name: t.personalLoan, icon: <FaCreditCard /> },
      { name: t.carLoan, icon: <FaCar /> },
      { name: t.educationLoan, icon: <FaGraduationCap /> },
      { name: t.goldLoanService, icon: <FaAward /> },
      { name: t.businessLoan, icon: <FaBuilding /> }
    ],
    deposits: [
      { name: t.fixedDeposit, icon: <FaCalendarAlt /> },
      { name: t.recurringScheme, icon: <FaPiggyBank /> },
      { name: t.taxSaverFD, icon: <FaPercent /> },
      { name: t.flexiDeposit, icon: <FaFilter /> },
      { name: t.cumulativeDeposit, icon: <FaChartLine /> }
    ]
  };

  // Accounts Data for Cards Section
  const accountsData = [
    {
      id: 'savings',
      title: t.savingsAccount,
      description: t.savingsAccountDesc,
      icon: <FaPiggyBank />,
      features: [t.freeFacilities, t.neftRtgsImps, t.mobileBanking, t.internetBanking, t.smsBanking],
      color: 'from-blue-600 to-blue-800',
      link: '/savings-account'
    },
    {
      id: 'premium-savings',
      title: t.premiumSavingsAccount,
      description: t.premiumSavingsAccountDesc,
      icon: <FaCrown />,
      features: [t.interestRateFeature, t.freeFacilities, t.neftRtgsImps, t.mobileBanking, t.internetBanking, t.smsBanking],
      color: 'from-amber-600 to-yellow-600',
      link: '/premium-savings-account'
    },
    {
      id: 'current',
      title: t.currentAccount,
      description: t.currentAccountDesc,
      icon: <FaBuilding />,
      features: [t.unlimitedTransactions, t.neftRtgsImps, t.mobileBanking, t.internetBanking, t.aadharBankingFeature, t.freeFacilities],
      color: 'from-emerald-600 to-green-700',
      link: '/current-account'
    }
  ];

  // Modern Banking Cards Data
  const modernBankingCards = [
    {
      id: 'aadhar-banking',
      title: t.aadharBanking,
      description: t.aadharBankingDesc,
      icon: <FaUniversity />,
      color: 'from-blue-600 to-purple-600'
    },
    {
      id: 'debit-card',
      title: t.debitCard,
      description: t.debitCardDesc,
      icon: <FaCreditCard />,
      color: 'from-emerald-600 to-teal-600'
    },
    {
      id: 'qr-code',
      title: t.qrCode,
      description: t.qrCodeDesc,
      icon: <FaMobileAlt />,
      color: 'from-orange-600 to-red-600'
    },
    {
      id: 'digital-banking',
      title: t.digitalBanking,
      description: t.digitalBankingDesc,
      icon: <FaMobileAlt />,
      color: 'from-green-600 to-lime-600'
    }
  ];

  // Load gallery images from Firebase
  useEffect(() => {
    loadGalleryImages();
  }, []);

  const loadGalleryImages = async () => {
    try {
      setGalleryLoading(true);
      const galleryRef = dbRef(database, 'shivpratapmultistate/gallery');
      const snapshot = await get(galleryRef);
      
      if (snapshot.exists()) {
        const galleryData = snapshot.val();
        const imagesList = Object.keys(galleryData).map(key => ({
          id: key,
          ...galleryData[key]
        }));
        setGalleryImages(imagesList);
      }
    } catch (error) {
      console.error('Error loading gallery images:', error);
    } finally {
      setGalleryLoading(false);
    }
  };

  
  // Touch handlers for mobile swipe
  const minSwipeDistance = 50;

  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = (e) => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      nextSlide();
    }
    if (isRightSwipe) {
      prevSlide();
    }
  };

  // Slider control functions
  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === sliderImages.length - 1 ? 0 : prev + 1));
  }, [sliderImages.length]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === 0 ? sliderImages.length - 1 : prev - 1));
  }, [sliderImages.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  // Auto-advance slider
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') {
        prevSlide();
      } else if (e.key === 'ArrowRight') {
        nextSlide();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide]);



  // Static gold price (same as Calculator.js)
  const staticGoldPrice = 6250;

  // Handle weight input change
  const handleWeightChange = (e) => {
    const value = e.target.value;
    setGoldWeight(value);
  };

  // Set static gold price on component mount
  useEffect(() => {
    setGoldRate(staticGoldPrice.toString());
  }, []);

  // Handle Gold Loan Calculation (matching Calculator.js logic)
  const calculateGoldLoan = () => {
    if (!goldWeight || !goldRate) {
      alert('Please enter gold weight');
      return;
    }
    
    const weight = parseFloat(goldWeight);
    const rate = parseFloat(goldRate);
    
    // Purity factors (same as Calculator.js)
    const purityFactor = {
      24: 1,
      22: 0.916,
      18: 0.75,
      14: 0.585,
      12: 0.5,
    };
    
    // Calculate gold value based on purity (same as Calculator.js)
    const pricePerGram = rate * purityFactor[goldPurity];
    const totalPrice = weight * pricePerGram;
    const eligibleAmount = (totalPrice * 0.75).toFixed(2); // 75% LTV
    setLoanAmount(eligibleAmount);
    
    // Calculate EMI (same as Calculator.js - 10% annual interest rate)
    const principal = parseFloat(eligibleAmount);
    const monthlyInterestRate = 0.10 / 12;
    const tenureMonths = parseInt(selectedTenure);
    
    const emi = principal && tenureMonths
      ? (principal * monthlyInterestRate * Math.pow(1 + monthlyInterestRate, tenureMonths)) /
        (Math.pow(1 + monthlyInterestRate, tenureMonths) - 1)
      : 0;
    
    setMonthlyEMI(emi.toFixed(2));
  };

  // Show loading state during language transition
  if (isLoading) {
    return (
      <div className="font-sans bg-gradient-to-b from-gray-50 to-white min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-pink-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  // Show error state if something goes wrong
  if (error) {
    return (
      <div className="font-sans bg-gradient-to-b from-gray-50 to-white min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-600 mb-4">Something went wrong. Please try again.</p>
          <button 
            onClick={() => setError(null)} 
            className="px-4 py-2 bg-pink-600 text-white rounded hover:bg-pink-700"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="font-sans bg-gradient-to-b from-gray-50 to-white min-h-screen relative overflow-hidden">
      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) translateX(0px) scale(1);
          }
          25% {
            transform: translateY(-20px) translateX(10px) scale(1.05);
          }
          50% {
            transform: translateY(10px) translateX(-10px) scale(0.95);
          }
          75% {
            transform: translateY(-15px) translateX(5px) scale(1.02);
          }
        }
        
        @keyframes gradientShift {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
      `}</style>
      
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute -top-20 -right-20 w-96 h-96 rounded-full opacity-5"
          style={{ backgroundColor: primaryColor }}
        ></div>
        <div 
          className="absolute -bottom-32 -left-32 w-80 h-80 rounded-full opacity-5"
          style={{ backgroundColor: primaryColor }}
        ></div>
      </div>

      {/* Hero Slider Section */}
<section
  className="
    relative w-full overflow-hidden
    bg-transparent

    h-auto                    /* mobile */
    md:h-[30vh]               /* iPad */
    lg:h-[65vh]               /* laptop */
    xl:h-[70vh]

    max-h-[900px]
  "
>
  <div
    className="relative w-full h-full"
    onTouchStart={onTouchStart}
    onTouchMove={onTouchMove}
    onTouchEnd={onTouchEnd}
  >
    {/* Slider Images */}
    {sliderImages.map((slide, index) => (
      <div
        key={slide.id}
        className={`
          transition-opacity duration-700 ease-in-out
          ${
            index === currentSlide
              ? 'opacity-100 md:absolute md:inset-0'
              : 'opacity-0 absolute inset-0'
          }
        `}
      >
        {/* Mobile Image - Only visible on mobile */}
        <img
          src={slide.src}
          alt={slide.alt}
          className="
            block w-full h-auto md:hidden    /* Show on mobile, hide on tablet+ */
          "
        />
        
        {/* Desktop/Laptop Image - Only visible on tablet and above */}
        <img
          src={slide.srcDesktop || slide.src}
          alt={slide.alt}
          className="
            hidden md:block                   /* Hide on mobile, show on tablet+ */
            w-full h-full
            object-cover
            object-center
          "
        />
        
        {/* Title Overlay - Only show on active slide (except first slide) */}
        {index === currentSlide && index !== 0 && (
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex items-center justify-center">
            <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
              <div className="max-w-7xl mx-auto text-center">
                <h2 className="
                  text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl
                  font-bold text-white 
                  mb-3 sm:mb-4 md:mb-5 
                  drop-shadow-lg 
                  leading-tight sm:leading-tight md:leading-tight
                  px-2 sm:px-4 md:px-0
                ">
                  {slide.title}
                </h2>
                <p className="
                  text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl
                  text-white/90 
                  drop-shadow-md 
                  max-w-2xl sm:max-w-3xl md:max-w-4xl lg:max-w-5xl xl:max-w-6xl
                  mx-auto 
                  leading-relaxed
                  px-4 sm:px-6 md:px-0
                ">
                  {slide.subtitle}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    ))}

    {/* Navigation Arrows */}
    <button
      onClick={prevSlide}
      className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-2 sm:p-3 rounded-full z-10"
      aria-label="Previous slide"
    >
      <svg className="w-4 h-4 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
      </svg>
    </button>

    <button
      onClick={nextSlide}
      className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-2 sm:p-3 rounded-full z-10"
      aria-label="Next slide"
    >
      <svg className="w-4 h-4 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
      </svg>
    </button>

    {/* Indicators */}
    <div className="absolute bottom-3 md:bottom-5 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
      {sliderImages.map((_, index) => (
        <button
          key={index}
          onClick={() => goToSlide(index)}
          className={`h-2 w-2 md:h-3 md:w-3 rounded-full transition-all duration-300 ${
            index === currentSlide
              ? 'bg-white w-6 md:w-8'
              : 'bg-white/50'
          }`}
          aria-label={`Go to slide ${index + 1}`}
        />
      ))}
    </div>
  </div>
</section>

      {/* Modern Banking Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 
              className="text-4xl md:text-5xl font-bold mb-4"
              style={{
                background: `linear-gradient(135deg, ${primaryColor} 0%, #d15679 100%)`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
            >
              {t.modernBanking}
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              {t.exploreServices}
            </p>
          </div>

          {/* Horizontal Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {modernBankingCards.map((card, index) => (
              <div 
                key={index}
                className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer bg-white"
                style={{ border: `1px solid ${primaryColor}20` }}
              >
                {/* Card Header with Icon */}
                <div className={`relative p-8 bg-gradient-to-br ${card.color} overflow-hidden`}>
                  {/* Icon */}
                  <div className="w-16 h-16 bg-white bg-opacity-90 rounded-full flex items-center justify-center shadow-lg mx-auto transition-all duration-500 group-hover:-translate-y-8 group-hover:scale-110">
                    <div 
                      className="text-2xl transition-transform duration-500 group-hover:rotate-12"
                      style={{ color: primaryColor }}
                    >
                      {card.icon}
                    </div>
                  </div>
                  
                  {/* Decorative elements that appear on hover */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute top-2 left-2 w-4 h-4 bg-white bg-opacity-20 rounded-full"></div>
                    <div className="absolute top-2 right-2 w-4 h-4 bg-white bg-opacity-20 rounded-full"></div>
                    <div className="absolute bottom-2 left-2 w-3 h-3 bg-white bg-opacity-15 rounded-full"></div>
                    <div className="absolute bottom-2 right-2 w-3 h-3 bg-white bg-opacity-15 rounded-full"></div>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6">
                  <h3 
                    className="text-xl font-bold mb-3 text-center"
                    style={{ color: primaryColor }}
                  >
                    {card.title}
                  </h3>
                  
                  <p className="text-gray-600 text-sm leading-relaxed text-center">
                    {card.description}
                  </p>
                </div>

                {/* Hover Effect Border */}
                <div 
                  className="absolute bottom-0 left-0 right-0 h-1 transform scale-x-0 transition-transform duration-500 group-hover:scale-x-100"
                  style={{
                    background: `linear-gradient(90deg, ${primaryColor}, ${secondaryColor})`
                  }}
                ></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Organization Section */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        {/* Animated Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
          <div className="absolute inset-0 bg-gradient-to-tr from-blue-100/20 via-transparent to-purple-100/20 animate-pulse"></div>
        </div>
        
        {/* Floating Animated Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Large floating circles */}
          <div 
            className="absolute top-10 right-10 w-72 h-72 rounded-full opacity-20 animate-bounce"
            style={{
              background: `radial-gradient(circle, ${primaryColor} 0%, transparent 70%)`,
              animation: 'float 6s ease-in-out infinite'
            }}
          ></div>
          
          <div 
            className="absolute bottom-10 left-10 w-96 h-96 rounded-full opacity-20 animate-bounce"
            style={{
              background: `radial-gradient(circle, ${secondaryColor} 0%, transparent 70%)`,
              animation: 'float 8s ease-in-out infinite reverse'
            }}
          ></div>
          
          <div 
            className="absolute top-1/2 left-1/4 w-64 h-64 rounded-full opacity-15 animate-bounce"
            style={{
              background: `radial-gradient(circle, #06d6a0 0%, transparent 70%)`,
              animation: 'float 7s ease-in-out infinite 2s'
            }}
          ></div>
          
          {/* Small floating particles */}
          <div 
            className="absolute top-20 left-20 w-8 h-8 rounded-full opacity-30 animate-ping"
            style={{ backgroundColor: primaryColor }}
          ></div>
          
          <div 
            className="absolute top-40 right-32 w-6 h-6 rounded-full opacity-30 animate-ping"
            style={{ backgroundColor: secondaryColor, animationDelay: '1s' }}
          ></div>
          
          <div 
            className="absolute bottom-32 left-1/3 w-10 h-10 rounded-full opacity-30 animate-ping"
            style={{ backgroundColor: '#06d6a0', animationDelay: '2s' }}
          ></div>
          
          {/* Animated gradient overlays */}
          <div 
            className="absolute inset-0 opacity-30"
            style={{
              background: `linear-gradient(45deg, ${primaryColor}10 0%, transparent 25%, ${secondaryColor}10 50%, transparent 75%, ${primaryColor}10 100%)`,
              backgroundSize: '200% 200%',
              animation: 'gradientShift 8s ease infinite'
            }}
          ></div>
          
          <div 
            className="absolute inset-0 opacity-20"
            style={{
              background: `linear-gradient(-45deg, ${secondaryColor}10 0%, transparent 30%, ${primaryColor}10 60%, transparent 90%)`,
              backgroundSize: '300% 300%',
              animation: 'gradientShift 12s ease infinite reverse'
            }}
          ></div>
        </div>

        {/* Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl mb-6"
              style={{ backgroundColor: `${primaryColor}15` }}
            >
              <FaBuilding className="text-3xl" style={{ color: primaryColor }} />
            </div>
            <h2 
              className="text-4xl md:text-5xl font-bold mb-4"
              style={{
                background: `linear-gradient(135deg, ${primaryColor} 0%, #d15679 100%)`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
            >
              {t.aboutOrg}
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              {t.whyChooseUsSub}
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Left: Enhanced About Content */}
            <div className="space-y-8">
              {/* Organization Name Card */}
              <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full -translate-y-16 translate-x-16 opacity-50"></div>
                
                <div className="relative z-10">
                  <div className="flex items-center mb-6">
                    <div 
                      className="w-16 h-16 rounded-2xl flex items-center justify-center mr-4"
                      style={{ backgroundColor: `${primaryColor}15` }}
                    >
                      <FaBuilding className="text-2xl" style={{ color: primaryColor }} />
                    </div>
                    <div>
                      <h3 className="text-3xl md:text-4xl font-bold" style={{ color: primaryColor }}>
                        {t.orgName}
                      </h3>
                      <p className="text-gray-500 text-sm mt-1">Established 2002</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Journey Timeline Cards */}
              <div className="space-y-6">
                {/* Year 2002 Card */}
                <div className="group bg-white rounded-2xl shadow-lg p-6 border border-gray-100 hover:shadow-2xl transition-all duration-500 hover:-translate-y-1">
                  <div className="flex items-start">
                    <div 
                      className="w-12 h-12 rounded-xl flex items-center justify-center mr-4 flex-shrink-0 group-hover:scale-110 transition-transform duration-300"
                      style={{ backgroundColor: `${primaryColor}15` }}
                    >
                      <FaCalendarAlt className="text-xl" style={{ color: primaryColor }} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center mb-2">
                        <span 
                          className="inline-block px-3 py-1 rounded-full text-sm font-semibold mr-3"
                          style={{ backgroundColor: `${primaryColor}15`, color: primaryColor }}
                        >
                          {t.aboutYear2002}
                        </span>
                        <div className="flex-1 h-0.5 bg-gradient-to-r from-purple-200 to-transparent"></div>
                      </div>
                      <p className="text-gray-700 leading-relaxed">
                        {t.aboutParagraph1}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Vitthal Salunkhe Card */}
                <div className="group bg-white rounded-2xl shadow-lg p-6 border border-gray-100 hover:shadow-2xl transition-all duration-500 hover:-translate-y-1">
                  <div className="flex items-start">
                    <div 
                      className="w-12 h-12 rounded-xl flex items-center justify-center mr-4 flex-shrink-0 group-hover:scale-110 transition-transform duration-300"
                      style={{ backgroundColor: `${primaryColor}15` }}
                    >
                      <FaChartLine className="text-xl" style={{ color: primaryColor }} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center mb-2">
                        <span 
                          className="inline-block px-3 py-1 rounded-full text-sm font-semibold mr-3"
                          style={{ backgroundColor: `${primaryColor}15`, color: primaryColor }}
                        >
                          {t.aboutVitthalSalunkhe}
                        </span>
                        <div className="flex-1 h-0.5 bg-gradient-to-r from-purple-200 to-transparent"></div>
                      </div>
                      <p className="text-gray-700 leading-relaxed">
                        {t.aboutParagraph2}
                      </p>
                    </div>
                  </div>
                </div>

                {/* July 11 Card */}
                <div className="group bg-white rounded-2xl shadow-lg p-6 border border-gray-100 hover:shadow-2xl transition-all duration-500 hover:-translate-y-1">
                  <div className="flex items-start">
                    <div 
                      className="w-12 h-12 rounded-xl flex items-center justify-center mr-4 flex-shrink-0 group-hover:scale-110 transition-transform duration-300"
                      style={{ backgroundColor: `${primaryColor}15` }}
                    >
                      <FaHandshake className="text-xl" style={{ color: primaryColor }} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center mb-2">
                        <span 
                          className="inline-block px-3 py-1 rounded-full text-sm font-semibold mr-3"
                          style={{ backgroundColor: `${primaryColor}15`, color: primaryColor }}
                        >
                          {t.aboutJuly11}
                        </span>
                        <div className="flex-1 h-0.5 bg-gradient-to-r from-purple-200 to-transparent"></div>
                      </div>
                      <p className="text-gray-700 leading-relaxed">
                        {t.aboutParagraph3}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Enhanced CTA Button */}
              <div className="pt-4">
                <button 
                  onClick={() => navigate('/about')}
                  className="group relative overflow-hidden px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl w-full md:w-auto"
                  style={{
                    background: `linear-gradient(135deg, ${primaryColor} 0%, #d15679 100%)`,
                    color: 'white'
                  }}
                >
                  <span className="relative z-10 flex items-center justify-center">
                    {t.readMore}
                    <FaArrowRight className="ml-3 group-hover:translate-x-2 transition-transform duration-300" />
                  </span>
                  
                  {/* Button shine effect */}
                  <div 
                    className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700"
                    style={{
                      background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)'
                    }}
                  ></div>
                </button>
              </div>
            </div>

            {/* Right: Enhanced Social Media Section */}
            <div className="space-y-6">
              {/* Facebook Feed Card */}
              <div 
                className="rounded-2xl shadow-2xl overflow-hidden border relative bg-white transform transition-all duration-300 hover:shadow-3xl hover:-translate-y-1"
                style={{
                  borderColor: `${primaryColor}20`
                }}
              >
                <div 
                  className="p-8 text-white relative overflow-hidden"
                  style={{
                    background: `linear-gradient(135deg, #0866ff 0%, #0051d5 100%)`
                  }}
                >
                  <div className="absolute top-0 right-0 w-40 h-40 rounded-full bg-white/10 -translate-y-20 translate-x-20"></div>
                  <div className="absolute bottom-0 left-0 w-32 h-32 rounded-full bg-white/5 translate-y-16 -translate-x-16"></div>
                  
                  <div className="relative z-10">
                    <div className="flex items-center">
                      <div 
                        className="w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center mr-4 backdrop-blur-sm border border-white/30"
                      >
                        <FaFacebook className="text-3xl text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl md:text-3xl font-bold">{t.stayConnected}</h3>
                        <p className="text-white/90 mt-1">{t.followUs}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <div className="rounded-xl overflow-hidden border border-gray-200 bg-gray-50">
                    <iframe
                      src="https://www.facebook.com/plugins/page.php?href=https://www.facebook.com/shivpratapmultistatenagari&tabs=timeline&width=500&height=800&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&lazy=true"
                      width="100%"
                      height="800"
                      style={{ border: "none", overflow: "scroll" }}
                      scrolling="yes"
                      frameBorder="0"
                      allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                      allowFullScreen
                      title="Shivpratap Multistate Nagari Bank Facebook"
                    />
                  </div>

                  <button 
                    className="w-full mt-6 py-3 rounded-xl font-medium transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg flex items-center justify-center gap-2 group text-white"
                    style={{
                      background: `linear-gradient(135deg, #0866ff 0%, #0051d5 100%)`,
                      border: `2px solid #0866ff`
                    }}
                    onClick={(e) => {
                      e.stopPropagation();
                      window.open('https://www.facebook.com/shivpratapmultistatenagari', '_blank');
                    }}
                  >
                    <FaFacebook className="group-hover:scale-110 transition-transform duration-300" />
                    {t.viewMoreFB}
                    <FaExternalLinkAlt className="text-sm opacity-60 group-hover:opacity-100 transition-opacity duration-300" />
                  </button>
                </div>
              </div>

              {/* Quick Info Cards */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white rounded-xl p-4 border border-gray-200 text-center hover:shadow-lg transition-all duration-300">
                  <div className="w-12 h-12 rounded-lg mx-auto mb-2 flex items-center justify-center"
                    style={{ backgroundColor: `${primaryColor}15` }}
                  >
                    <FaUsers className="text-xl" style={{ color: primaryColor }} />
                  </div>
                  <div className="text-2xl font-bold" style={{ color: primaryColor }}>50L+</div>
                  <div className="text-gray-600 text-sm">Customers</div>
                </div>
                <div className="bg-white rounded-xl p-4 border border-gray-200 text-center hover:shadow-lg transition-all duration-300">
                  <div className="w-12 h-12 rounded-lg mx-auto mb-2 flex items-center justify-center"
                    style={{ backgroundColor: `${primaryColor}15` }}
                  >
                    <FaMapMarkerAlt className="text-xl" style={{ color: primaryColor }} />
                  </div>
                  <div className="text-2xl font-bold" style={{ color: primaryColor }}>23+</div>
                  <div className="text-gray-600 text-sm">Branches</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Information Cards Section */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        {/* Animated Background for Info Cards */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-purple-50">
          <div className="absolute inset-0 bg-gradient-to-tr from-blue-50/30 via-transparent to-purple-50/30 animate-pulse"></div>
        </div>
        
        {/* Floating elements for background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div 
            className="absolute top-20 right-20 w-48 h-48 rounded-full opacity-10 animate-bounce"
            style={{
              background: `radial-gradient(circle, ${primaryColor} 0%, transparent 70%)`,
              animation: 'float 10s ease-in-out infinite'
            }}
          ></div>
          <div 
            className="absolute bottom-20 left-20 w-64 h-64 rounded-full opacity-10 animate-bounce"
            style={{
              background: `radial-gradient(circle, ${secondaryColor} 0%, transparent 70%)`,
              animation: 'float 12s ease-in-out infinite reverse'
            }}
          ></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 
              className="text-4xl md:text-5xl font-bold mb-4"
              style={{
                background: `linear-gradient(135deg, ${primaryColor} 0%, #d15679 100%)`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
            >
              {t.aboutOrg}
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              {t.whyChooseUsSub}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {infoCards.map((card, index) => (
              <div 
                key={index}
                className="group relative bg-white rounded-3xl shadow-2xl p-8 transform transition-all duration-700 hover:-translate-y-6 hover:shadow-3xl border-2 overflow-hidden"
                style={{ 
                  borderColor: `${primaryColor}20`,
                  background: 'linear-gradient(135deg, #ffffff 0%, #fafbff 100%)'
                }}
              >
                {/* Animated background pattern */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div 
                    className="absolute inset-0"
                    style={{
                      background: `radial-gradient(circle at 50% 50%, ${primaryColor}5 0%, transparent 70%)`,
                      animation: 'pulse 3s ease-in-out infinite'
                    }}
                  ></div>
                </div>
                
                {/* Corner decorative elements */}
                <div className="absolute top-0 right-0 w-24 h-24 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-x-12 -translate-y-12">
                  <div 
                    className="w-full h-full rounded-full"
                    style={{
                      background: `conic-gradient(from 0deg, ${primaryColor}20, ${secondaryColor}20, ${primaryColor}20)`,
                      animation: 'spin 8s linear infinite'
                    }}
                  ></div>
                </div>
                
                <div className="absolute bottom-0 left-0 w-16 h-16 opacity-0 group-hover:opacity-100 transition-all duration-500 transform -translate-x-8 translate-y-8">
                  <div 
                    className="w-full h-full rounded-full"
                    style={{
                      background: `conic-gradient(from 180deg, ${secondaryColor}20, ${primaryColor}20, ${secondaryColor}20)`,
                      animation: 'spin 6s linear infinite reverse'
                    }}
                  ></div>
                </div>

                {/* Icon Container with enhanced effects */}
                <div className="relative mb-8">
                  <div 
                    className="w-20 h-20 rounded-3xl flex items-center justify-center mx-auto relative z-10 transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-6"
                    style={{
                      background: `linear-gradient(135deg, ${primaryColor} 0%, #d15679 100%)`,
                      boxShadow: `0 12px 32px ${primaryColor}40, 0 8px 16px ${primaryColor}20`
                    }}
                  >
                    <div className="text-white text-3xl transform transition-transform duration-500 group-hover:scale-110">
                      {card.icon}
                    </div>
                    
                    {/* Icon glow effect */}
                    <div 
                      className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-50 transition-opacity duration-500 blur-xl"
                      style={{ backgroundColor: primaryColor }}
                    ></div>
                  </div>
                  
                  {/* Floating particles around icon */}
                  <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-0 left-1/2 w-2 h-2 bg-blue-400 rounded-full opacity-0 group-hover:opacity-60 transition-all duration-500 transform -translate-x-1/2 -translate-y-2 group-hover:-translate-y-4 animate-ping"></div>
                    <div className="absolute bottom-0 right-1/2 w-1.5 h-1.5 bg-purple-400 rounded-full opacity-0 group-hover:opacity-60 transition-all duration-500 transform translate-x-1/2 translate-y-2 group-hover:translate-y-4 animate-ping" style={{ animationDelay: '0.5s' }}></div>
                  </div>
                </div>
                
                {/* Content with enhanced typography */}
                <div className="relative z-10">
                  <h3 
                    className="text-2xl font-bold mb-4 text-center transition-all duration-500 group-hover:text-transparent group-hover:bg-clip-text"
                    style={{ 
                      color: primaryColor,
                      background: `linear-gradient(135deg, ${primaryColor} 0%, #d15679 100%)`,
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text'
                    }}
                  >
                    {card.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-8 text-center leading-relaxed transition-all duration-500 group-hover:text-gray-700">
                    {card.description}
                  </p>
                  
                  {/* Enhanced bottom indicator */}
                  <div className="flex items-center justify-center space-x-2">
                    <div 
                      className="h-1 rounded-full transition-all duration-500 group-hover:w-16"
                      style={{
                        width: '2rem',
                        background: `linear-gradient(90deg, ${primaryColor}, ${secondaryColor})`
                      }}
                    ></div>
                    <div 
                      className="w-2 h-2 rounded-full transition-all duration-500 group-hover:scale-150"
                      style={{ backgroundColor: primaryColor }}
                    ></div>
                    <div 
                      className="h-1 rounded-full transition-all duration-500 group-hover:w-16"
                      style={{
                        width: '2rem',
                        background: `linear-gradient(90deg, ${secondaryColor}, ${primaryColor})`
                      }}
                    ></div>
                  </div>
                </div>

                {/* Hover overlay effect */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background: `linear-gradient(135deg, ${primaryColor}5 0%, ${secondaryColor}5 100%)`,
                  }}
                ></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Accounts Section */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        {/* Animated Background for Accounts */}
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-white to-teal-50">
          <div className="absolute inset-0 bg-gradient-to-tr from-green-100/20 via-transparent to-blue-100/20 animate-pulse"></div>
        </div>
        
        {/* Floating elements for background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Large floating circles */}
          <div 
            className="absolute top-32 left-16 w-56 h-56 rounded-full opacity-15 animate-bounce"
            style={{
              background: `radial-gradient(circle, ${primaryColor} 0%, transparent 70%)`,
              animation: 'float 9s ease-in-out infinite'
            }}
          ></div>
          
          <div 
            className="absolute bottom-20 right-20 w-72 h-72 rounded-full opacity-15 animate-bounce"
            style={{
              background: `radial-gradient(circle, ${secondaryColor} 0%, transparent 70%)`,
              animation: 'float 11s ease-in-out infinite reverse'
            }}
          ></div>
          
          <div 
            className="absolute top-1/3 right-1/4 w-48 h-48 rounded-full opacity-10 animate-bounce"
            style={{
              background: `radial-gradient(circle, #06d6a0 0%, transparent 70%)`,
              animation: 'float 13s ease-in-out infinite 1s'
            }}
          ></div>
          
          {/* Small floating particles */}
          <div 
            className="absolute top-16 right-1/3 w-6 h-6 rounded-full opacity-25 animate-ping"
            style={{ backgroundColor: primaryColor }}
          ></div>
          
          <div 
            className="absolute bottom-32 left-1/4 w-8 h-8 rounded-full opacity-25 animate-ping"
            style={{ backgroundColor: secondaryColor, animationDelay: '1.5s' }}
          ></div>
          
          <div 
            className="absolute top-1/2 right-16 w-5 h-5 rounded-full opacity-25 animate-ping"
            style={{ backgroundColor: '#06d6a0', animationDelay: '3s' }}
          ></div>
          
          {/* Animated gradient overlays */}
          <div 
            className="absolute inset-0 opacity-25"
            style={{
              background: `linear-gradient(60deg, ${primaryColor}10 0%, transparent 20%, ${secondaryColor}10 40%, transparent 60%, ${primaryColor}10 80%, transparent 100%)`,
              backgroundSize: '300% 300%',
              animation: 'gradientShift 15s ease infinite'
            }}
          ></div>
          
          <div 
            className="absolute inset-0 opacity-20"
            style={{
              background: `linear-gradient(-60deg, ${secondaryColor}10 0%, transparent 25%, ${primaryColor}10 50%, transparent 75%, ${secondaryColor}10 100%)`,
              backgroundSize: '250% 250%',
              animation: 'gradientShift 18s ease infinite reverse'
            }}
          ></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl mb-6"
              style={{ backgroundColor: `${primaryColor}15` }}
            >
              <FaUniversity className="text-3xl" style={{ color: primaryColor }} />
            </div>
            <h2 
              className="text-4xl md:text-5xl font-bold mb-4"
              style={{
                background: `linear-gradient(135deg, ${primaryColor} 0%, #d15679 100%)`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
            >
              {t.accountsSection}
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              {t.accountsSub}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {accountsData.map((account, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl shadow-xl overflow-hidden border transform transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl group"
                style={{ borderColor: `${primaryColor}20` }}
              >
                {/* Card Header with Icon */}
                <div className={`bg-gradient-to-r ${account.color} p-6 relative overflow-hidden`}>
                  <div className="absolute top-0 right-0 w-32 h-32 rounded-full opacity-10 transform translate-x-16 -translate-y-16">
                    <div className="w-full h-full rounded-full border-4 border-white"></div>
                  </div>
                  <div className="relative z-10">
                    <div className="w-16 h-16 rounded-2xl bg-white bg-opacity-20 backdrop-blur-sm flex items-center justify-center mb-4">
                      <div className="text-white text-2xl">
                        {account.icon}
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {account.title}
                    </h3>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6">
                  <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                    {account.description}
                  </p>

                  {/* Key Features */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-800 mb-3 flex items-center">
                      <FaStar className="text-yellow-500 mr-2 text-sm" />
                      {t.features}
                    </h4>
                    <div className="space-y-2">
                      {account.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center text-sm">
                          <div className="w-2 h-2 bg-green-500 rounded-full mr-3 flex-shrink-0"></div>
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTA Button */}
                  <button 
                    onClick={() => navigate(account.link)}
                    className="w-full py-3 rounded-xl font-semibold transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg group-hover:shadow-xl"
                    style={{
                      background: `linear-gradient(135deg, ${primaryColor} 0%, #d15679 100%)`,
                      color: 'white'
                    }}
                  >
                    {t.learnMore}
                    <FaArrowRight className="inline ml-2 text-sm" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Schemes Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 
              className="text-4xl md:text-5xl font-bold mb-16"
              style={{
                background: `linear-gradient(135deg, ${primaryColor} 0%, #d15679 100%)`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
            >
              {t.popularSchemes}
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              {t.schemesSub}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {schemes.map((scheme, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-xl overflow-hidden border transform transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl group p-6"
                style={{ borderColor: `${primaryColor}20` }}
              >
                <h3 
                  className="text-xl font-bold mb-3"
                  style={{ color: primaryColor }}
                >
                  {scheme.name}
                </h3>
                
                <p className="text-gray-600 mb-6">
                  {scheme.description}
                </p>
                
                {/* Features tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {scheme.features.map((feature, idx) => (
                    <span 
                      key={idx}
                      className="text-xs font-medium px-3 py-1 rounded-full"
                      style={{
                        backgroundColor: `${primaryColor}15`,
                        color: primaryColor
                      }}
                    >
                      {feature}
                    </span>
                  ))}
                </div>
                
                <button 
                  onClick={() => navigate(`/plan#${scheme.id}`)}
                  className="w-full py-3 rounded-xl font-semibold transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg group-hover:shadow-xl"
                  style={{
                    background: `linear-gradient(135deg, ${primaryColor} 0%, #d15679 100%)`,
                    color: 'white'
                  }}
                >
                  {t.viewDetails}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Modern Banking & Calculator Section */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        {/* Gold-themed gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-amber-50 via-yellow-50 to-amber-100">
          <div className="absolute inset-0 bg-gradient-to-tr from-yellow-100/30 via-transparent to-amber-100/30"></div>
          {/* Animated gold particles */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-20 left-10 w-32 h-32 bg-yellow-300 rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute top-40 right-20 w-40 h-40 bg-amber-300 rounded-full opacity-15 animate-pulse" style={{ animationDelay: '1s' }}></div>
            <div className="absolute bottom-20 left-1/3 w-36 h-36 bg-yellow-200 rounded-full opacity-25 animate-pulse" style={{ animationDelay: '2s' }}></div>
            <div className="absolute bottom-40 right-1/4 w-28 h-28 bg-amber-200 rounded-full opacity-20 animate-pulse" style={{ animationDelay: '3s' }}></div>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 
            className="text-4xl md:text-5xl font-bold text-center mb-16"
            style={{
              background: `linear-gradient(135deg, #d4af37 0%, #ffd700 50%, #b8860b 100%)`,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}
          >
            {t.modernBanking}
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left: Banking Services */}
            <div 
              className="rounded-2xl shadow-xl p-8 border relative overflow-hidden"
              style={{
                background: 'linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(255,248,220,0.9) 100%)',
                borderColor: '#d4af3730',
                backdropFilter: 'blur(10px)'
              }}
            >
              <div 
                className="absolute top-0 right-0 w-40 h-40 rounded-full opacity-15"
                style={{ background: 'linear-gradient(135deg, #ffd700 0%, #d4af37 100%)' }}
              ></div>
              
              <div className="relative z-10">
                <div className="flex items-center mb-8">
                  <div 
                    className="w-14 h-14 rounded-xl flex items-center justify-center mr-4"
                    style={{
                      background: 'linear-gradient(135deg, #d4af37 0%, #ffd700 100%)',
                      boxShadow: '0 4px 15px rgba(212, 175, 55, 0.3)'
                    }}
                  >
                    <FaBuilding className="text-white text-2xl" />
                  </div>
                  <div>
                    <h3 
                      className="text-2xl font-bold"
                      style={{ color: '#b8860b' }}
                    >
                      {t.bankingServices}
                    </h3>
                    <p className="text-gray-600">{t.exploreServices}</p>
                  </div>
                </div>

                {/* Service Tabs */}
                <div className="flex space-x-4 mb-8 overflow-x-auto pb-4">
                  {['savings', 'current', 'loans', 'deposits'].map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`px-6 py-3 rounded-xl font-semibold whitespace-nowrap transition-all duration-300 ${
                        activeTab === tab
                          ? 'shadow-lg transform scale-105'
                          : 'hover:bg-gray-100'
                      }`}
                      style={{
                        background: activeTab === tab 
                          ? `linear-gradient(135deg, ${primaryColor} 0%, #d15679 100%)`
                          : 'white',
                        color: activeTab === tab ? 'white' : primaryColor,
                        border: `2px solid ${activeTab === tab ? 'transparent' : `${primaryColor}30`}`
                      }}
                    >
                      {t[tab]}
                    </button>
                  ))}
                </div>

                {/* Service List */}
                <div className="space-y-4">
                  {bankingServices[activeTab].map((service, index) => (
                    <div 
                      key={index}
                      className="flex items-center p-4 rounded-xl border hover:shadow-lg transition-all duration-300 cursor-pointer group"
                      style={{
                        borderColor: `${primaryColor}20`,
                        backgroundColor: 'white'
                      }}
                    >
                      <div 
                        className="w-10 h-10 rounded-full flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300"
                        style={{
                          backgroundColor: `${primaryColor}15`,
                          color: primaryColor
                        }}
                      >
                        {service.icon}
                      </div>
                      <span className="text-gray-800 font-medium flex-1">{service.name}</span>
                      <FaArrowRight className="text-gray-400 group-hover:text-primary group-hover:translate-x-2 transition-all duration-300" />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Gold Loan Calculator */}
            <div 
              className="rounded-2xl shadow-xl p-8 border relative overflow-hidden"
              style={{
                background: 'linear-gradient(135deg, rgba(255,248,220,0.95) 0%, rgba(255,236,179,0.9) 100%)',
                borderColor: '#d4af3730',
                backdropFilter: 'blur(10px)'
              }}
            >
              <div 
                className="absolute -top-20 -right-20 w-60 h-60 rounded-full opacity-15"
                style={{ background: 'linear-gradient(135deg, #ffd700 0%, #d4af37 100%)' }}
              ></div>
              
              <div className="relative z-10">
                <div className="flex items-center mb-8">
                  <div 
                    className="w-14 h-14 rounded-xl flex items-center justify-center mr-4"
                    style={{
                      background: 'linear-gradient(135deg, #d4af37 0%, #ffd700 100%)',
                      boxShadow: '0 4px 15px rgba(212, 175, 55, 0.3)'
                    }}
                  >
                    <FaCalculator className="text-white text-2xl" />
                  </div>
                  <div>
                    <h3 
                      className="text-2xl font-bold"
                      style={{ color: '#b8860b' }}
                    >
                      {t.goldLoanCalc}
                    </h3>
                    <p className="text-gray-600">{t.calcSubtitle}</p>
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <label className="block text-gray-700 mb-3 font-medium">
                      {t.goldWeight}
                    </label>
                    <div className="relative">
                      <input
                        type="number"
                        value={goldWeight}
                        onChange={handleWeightChange}
                        className="w-full px-4 py-4 rounded-xl border focus:ring-4 outline-none transition-all pr-12"
                        style={{
                          borderColor: '#e2e8f0',
                          backgroundColor: 'white',
                          boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)'
                        }}
                        placeholder={t.enterWeight}
                      />
                      <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                        {t.grams}
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-gray-700 mb-3 font-medium">
                      {t.goldPurity}
                    </label>
                    <select
                      value={goldPurity}
                      onChange={(e) => setGoldPurity(e.target.value)}
                      className="w-full px-4 py-4 rounded-xl border focus:ring-4 outline-none transition-all"
                      style={{
                        borderColor: '#e2e8f0',
                        backgroundColor: 'white',
                        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)'
                      }}
                    >
                      <option value="24">{t.purity24K}</option>
                      <option value="22">{t.purity22K}</option>
                      <option value="18">{t.purity18K}</option>
                      <option value="14">{t.purity14K}</option>
                      <option value="12">{t.purity12K}</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-gray-700 mb-3 font-medium">
                      {t.selectTenure}
                    </label>
                    <select
                      value={selectedTenure}
                      onChange={(e) => setSelectedTenure(e.target.value)}
                      className="w-full px-4 py-4 rounded-xl border focus:ring-4 outline-none transition-all"
                      style={{
                        borderColor: '#e2e8f0',
                        backgroundColor: 'white',
                        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)'
                      }}
                    >
                      <option value="6">{t.sixMonths}</option>
                      <option value="12">{t.twelveMonths}</option>
                      <option value="18">{t.eighteenMonths}</option>
                      <option value="24">{t.twentyFourMonths}</option>
                      <option value="30">{t.thirtyMonths}</option>
                      <option value="36">{t.thirtySixMonths}</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-gray-700 mb-3 font-medium">
                      {t.goldRate}
                    </label>
                    <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                      <p className="text-sm text-gray-600">24K {t.goldRate}</p>
                      <p className="text-2xl font-bold text-gray-800">
                        ₹{staticGoldPrice.toLocaleString("en-IN")} / gram
                      </p>
                      <p className="text-sm mt-2 text-gray-600">
                        {goldPurity}K {t.goldRate}: ₹{(staticGoldPrice * {
                          24: 1,
                          22: 0.916,
                          18: 0.75,
                          14: 0.585,
                          12: 0.5,
                        }[goldPurity]).toFixed(2)} / gram
                      </p>
                    </div>
                  </div>

                  <button
                    onClick={calculateGoldLoan}
                    className="w-full py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl active:scale-95"
                    style={{
                      background: `linear-gradient(135deg, ${secondaryColor} 0%, #ffc233 100%)`,
                      color: darkColor
                    }}
                  >
                    {t.calculateLoan}
                  </button>

                  {loanAmount && (
                    <div 
                      className="rounded-xl p-6 border animate-fade-in mb-4"
                      style={{
                        backgroundColor: `${accentColor}15`,
                        borderColor: `${accentColor}30`
                      }}
                    >
                      <div className="text-center">
                        <p className="text-green-700 font-semibold mb-2">
                          कर्जासाठी तुम्ही पात्र आहात ✅
                        </p>
                        <div className="text-4xl font-bold mb-3" style={{ color: accentColor }}>
                          {t.loanAmountText} ₹{parseFloat(loanAmount).toLocaleString('en-IN')}
                        </div>
                        <p className="text-sm text-gray-600">
                          {t.basedOnLTV}
                        </p>
                      </div>
                    </div>
                  )}

                  {monthlyEMI && (
                    <div 
                      className="rounded-xl p-6 border animate-fade-in"
                      style={{
                        backgroundColor: `${primaryColor}15`,
                        borderColor: `${primaryColor}30`
                      }}
                    >
                      <div className="text-center">
                        <p className="text-gray-600 mb-3">{t.monthlyEMI}</p>
                        <div className="text-3xl font-bold mb-3 text-amber-600" style={{ color: primaryColor }}>
                          ₹{parseFloat(monthlyEMI).toLocaleString('en-IN')}
                        </div>
                        <p className="text-sm text-gray-600">
                          {selectedTenure} {language === 'mr' ? 'महिने' : 'months'} • 10% {language === 'mr' ? 'वार्षिक व्याज' : 'annual interest'}
                        </p>
                      </div>
                    </div>
                  )}
                  <div 
                    className="text-sm pt-4 border-t"
                    style={{ borderColor: `${primaryColor}20` }}
                  >
                    <p className="flex items-start gap-2 text-gray-600">
                      <span className="text-lg">💡</span>
                      <span><strong>{t.note}:</strong> {t.noteText}</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Statistics Counter Section */}
      <section id="stats-section" className="py-12 md:py-16 text-white relative overflow-hidden" style={{
        background: `linear-gradient(135deg, #b03462 0%, #8a2b4d 50%, #b03462 100%)`
      }}>
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-white/10 animate-pulse"></div>
          <div className="absolute -bottom-20 -left-20 w-48 h-48 rounded-full bg-white/5 animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/4 w-32 h-32 rounded-full bg-white/5 animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-3" style={{
              textShadow: '0 2px 4px rgba(0,0,0,0.3)'
            }}>
              {t.statsTitle}
            </h2>
            <p className="text-white/90 text-base md:text-lg max-w-2xl mx-auto">
              {t.statsSubtitle}
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 sm:gap-6 md:gap-8">
            {/* Satisfied Customers */}
            <div className="text-center group">
              <div className="relative mb-3 sm:mb-4">
                <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm group-hover:bg-white/30 transition-all duration-500 group-hover:scale-110 shadow-2xl border-2 border-white/30">
                  <FaUsers className="text-2xl sm:text-3xl text-white" />
                </div>
                <div className="absolute inset-0 rounded-full bg-white/10 animate-ping opacity-20"></div>
              </div>
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold mb-1 sm:mb-2">
                {counters.customers.toLocaleString('en-IN')}{language === 'en' ? ' Lakh+' : ' लाख+'}

              </div>
              <div className="text-white/90 text-xs sm:text-sm md:text-base font-medium leading-tight">
                {t.satisfiedCustomers}
              </div>
            </div>

            {/* Branches */}
            <div className="text-center group">
              <div className="relative mb-3 sm:mb-4">
                <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm group-hover:bg-white/30 transition-all duration-500 group-hover:scale-110 shadow-2xl border-2 border-white/30">
                  <FaBuilding className="text-2xl sm:text-3xl text-white" />
                </div>
                <div className="absolute inset-0 rounded-full bg-white/10 animate-ping opacity-20" style={{ animationDelay: '0.2s' }}></div>
              </div>
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold mb-1 sm:mb-2">
                {counters.branches.toLocaleString('en-IN')}
              </div>
              <div className="text-white/90 text-xs sm:text-sm md:text-base font-medium leading-tight">
                {t.branches}
              </div>
            </div>

            {/* Village Service Centers */}
            <div className="text-center group">
              <div className="relative mb-3 sm:mb-4">
                <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm group-hover:bg-white/30 transition-all duration-500 group-hover:scale-110 shadow-2xl border-2 border-white/30">
                  <FaHome className="text-2xl sm:text-3xl text-white" />
                </div>
                <div className="absolute inset-0 rounded-full bg-white/10 animate-ping opacity-20" style={{ animationDelay: '0.4s' }}></div>
              </div>
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold mb-1 sm:mb-2">
                {counters.villageService.toLocaleString('en-IN')}
              </div>
              <div className="text-white/90 text-xs sm:text-sm md:text-base font-medium leading-tight">
                {t.villageService}
              </div>
            </div>

            {/* Customers */}
            <div className="text-center group">
              <div className="relative mb-3 sm:mb-4">
                <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm group-hover:bg-white/30 transition-all duration-500 group-hover:scale-110 shadow-2xl border-2 border-white/30">
                  <FaUserCheck className="text-2xl sm:text-3xl text-white" />
                </div>
                <div className="absolute inset-0 rounded-full bg-white/10 animate-ping opacity-20" style={{ animationDelay: '0.6s' }}></div>
              </div>
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold mb-1 sm:mb-2">
                {counters.employees.toLocaleString('en-IN')}+
              </div>
              <div className="text-white/90 text-xs sm:text-sm md:text-base font-medium leading-tight">
                {t.employee}
              </div>
            </div>

            {/* Business Volume */}
            <div className="text-center group">
              <div className="relative mb-3 sm:mb-4">
                <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm group-hover:bg-white/30 transition-all duration-500 group-hover:scale-110 shadow-2xl border-2 border-white/30">
                  <FaChartLine className="text-2xl sm:text-3xl text-white" />
                </div>
                <div className="absolute inset-0 rounded-full bg-white/10 animate-ping opacity-20" style={{ animationDelay: '0.8s' }}></div>
              </div>
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold mb-1 sm:mb-2">
                {counters.businessVolume.toLocaleString('en-IN')}{language === 'en' ? ' Cr+' : '+'}

              </div>
              <div className="text-white/90 text-xs sm:text-sm md:text-base font-medium leading-tight">
                {t.businessVolume}
              </div>
            </div>
          </div>
        </div>
      </section>

      
      {/* 8. Media Gallery Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between mb-16 gap-6">
            <div>
              <h2 
                className="text-4xl md:text-5xl font-bold"
                style={{
                  background: `linear-gradient(135deg, ${primaryColor} 0%, #d15679 100%)`,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}
              >
                {t.mediaGallery}
              </h2>
              <p className="text-gray-600 text-lg mt-3">{t.gallerySub}</p>
            </div>
            <button 
              onClick={() => navigate('/gallery')}
              className="px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl flex items-center gap-3"
              style={{
                background: `linear-gradient(135deg, ${primaryColor} 0%, #d15679 100%)`,
                color: 'white'
              }}
            >
              <FaCamera />
              {t.viewAllGallery}
            </button>
          </div>

          {/* Gallery Grid */}
          {galleryLoading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[...Array(6)].map((_, index) => (
                <div key={index} className="relative rounded-2xl overflow-hidden shadow-lg">
                  <div 
                    className="h-64 relative overflow-hidden animate-pulse"
                    style={{
                      background: `linear-gradient(135deg, ${primaryColor} 0%, #9c2956 100%)`
                    }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/10 to-black/30"></div>
                  </div>
                </div>
              ))}
            </div>
          ) : galleryImages.length === 0 ? (
            <div className="text-center py-20">
              <FaCamera className="mx-auto text-6xl text-gray-300 mb-5" />
              <h3 className="text-2xl font-semibold text-gray-700 mb-3">{t.noImagesFound}</h3>
              <p className="text-gray-500">{t.checkBackLater}</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {galleryImages.slice(0, 6).map((image, index) => (
                <div 
                  key={image.id}
                  onClick={() => setSelectedImage(image.url)}
                  className="relative rounded-2xl overflow-hidden shadow-lg transform transition-all duration-500 hover:-translate-y-4 hover:shadow-2xl cursor-pointer group"
                >
                  <div className="h-64 relative overflow-hidden">
                    <img
                      src={image.url}
                      alt={image.originalName || t.bankEvent}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/10 to-black/30"></div>
                    <div 
                      className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{
                        background: `radial-gradient(circle, ${primaryColor}40 0%, transparent 70%)`
                      }}
                    >
                      <div className="w-16 h-16 rounded-full flex items-center justify-center bg-white/20 backdrop-blur-sm">
                        <FaPlus className="text-white text-2xl" />
                      </div>
                    </div>
                  </div>

                  <div 
                    className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-bold"
                    style={{
                      backgroundColor: `${secondaryColor}20`,
                      color: darkColor,
                      backdropFilter: 'blur(10px)'
                    }}
                  >
                    {t.photo}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm animate-fade-in"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6 text-white text-3xl hover:text-gray-300 transition-colors duration-300 z-20"
            style={{ color: secondaryColor }}
          >
            <FaTimes />
          </button>
          <div 
            className="relative max-w-4xl max-h-[80vh] w-full rounded-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <img 
              src={selectedImage} 
              alt="Gallery" 
              className="w-full h-full object-contain rounded-xl"
            />
          </div>
        </div>
      )}

      {/* Custom CSS */}
      <style jsx>{`
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
          animation: fade-in-up 0.8s ease-out;
        }

        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }

        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        .delay-200 {
          animation-delay: 200ms;
        }

        .delay-400 {
          animation-delay: 400ms;
        }

        /* Custom scrollbar for tabs */
        .overflow-x-auto::-webkit-scrollbar {
          height: 6px;
        }

        .overflow-x-auto::-webkit-scrollbar-track {
          background: #f1f1f1;
          border-radius: 3px;
        }

        .overflow-x-auto::-webkit-scrollbar-thumb {
          background: ${primaryColor}50;
          border-radius: 3px;
        }

        .overflow-x-auto::-webkit-scrollbar-thumb:hover {
          background: ${primaryColor}70;
        }

        /* Focus styles */
        input:focus, textarea:focus, select:focus {
          outline: none;
          border-color: ${primaryColor};
          box-shadow: 0 0 0 4px ${primaryColor}20;
        }
      `}</style>

      {/* Automatic Popup Modal */}
      {showPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
          <div className="relative max-w-4xl w-full max-h-[90vh] bg-white rounded-2xl shadow-2xl overflow-hidden animate-fade-in-up">
            {/* Close Button */}
            <button
              onClick={() => setShowPopup(false)}
              className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-red-500 hover:bg-red-600 text-white flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg"
            >
              <FaTimes className="text-xl" />
            </button>
            
            {/* Popup Content */}
            <div className="relative">
              {/* Image */}
              <img
                src={popupImage}
                alt="Shivpratap Multistate Bank"
                className="w-full h-auto max-h-[70vh] object-contain bg-gray-50"
              />
              
              {/* Optional: Add some content below image */}
              {/* <div className="p-6 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
                <h3 className="text-2xl font-bold text-center mb-2">
                  Welcome to Shivpratap Multistate Bank
                </h3>
                <p className="text-center text-white/90">
                  Your trusted partner for banking and financial services
                </p>
              </div> */}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;