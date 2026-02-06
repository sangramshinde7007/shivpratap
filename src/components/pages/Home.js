import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext';
import { 
  FaFacebook,
 FaChartLine,
  FaBuilding, FaUsers, FaTimes,
  FaUserCheck, FaMapMarkerAlt, FaExternalLinkAlt,
  FaHistory, FaTrophy, FaClock, FaPhone, FaEnvelope
} from 'react-icons/fa';
import { 
  database, 
  ref as dbRef, 
  get 
} from '../../firebase';

import slider1 from '../Assets/slider1.png';
import slider111 from '../Assets/slider111.png';
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

  // Translations
  const translations = {
    en: {
      aboutOrg: "About the Organization",
      orgName: "Shivpratap Multistate Bank",
      whyChooseUs: "Why Choose Us",
      whyChooseUsSub: "",
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
      villageService: "Customer Service Centers",
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
      slider4Title: "Online payment facility",
      slider4Subtitle: "Instant and secure transactions via QR code",
      slider5Title: "Women Empowerment",
      slider5Subtitle: "Special banking services for women entrepreneurs",
      slider6Title: "Guaranteed financial savings",
      slider6Subtitle: "Regular savings – a strong foundation for a bright future",
      slider7Title: "Agriculture Loans",
      slider7Subtitle: "Low interest loan facility for farmers",
      slider8Title: "Personal Loan",
      slider8Subtitle: "Quick personal loans for all your immediate financial needs",
      slider9Title: "Mobile Banking Services",
      slider9Subtitle: "Your transactions are now safe and easy on your mobile.",
      slider10Title: "Gold Loans",
      slider10Subtitle: "Instant loan on your gold jewellery",
      slider11Title: "Senior Citizen Plans",
      slider11Subtitle: "Special schemes for our respected seniors",
      slider12Title: "Investment Plans",
      slider12Subtitle: "Grow your wealth with smart investment options",
    },
    mr: {
      aboutOrg: "संस्थेविषयी ",
      orgName: "शिवप्रताप मल्टीस्टेट बँक",
      whyChooseUs: "आम्हाला का निवडावे",
      whyChooseUsSub: "",
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
      villageService: "ग्राहक सेवा केंद्र",
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
      slider4Title: "ऑनलाईन पेमेंट सुविधा",
      slider4Subtitle: "QR कोडद्वारे तत्काळ आणि सुरक्षित व्यवहार",
      slider5Title: "महिला सक्षमीकरण",
      slider5Subtitle: "महिला उद्योजकांसाठी विशेष बँकिंग सेवा",
      slider6Title: "आर्थिक बचतीची खात्री",
      slider6Subtitle: "नियमित बचत – उज्ज्वल भविष्यासाठी मजबूत आधार",
      slider7Title: "शेती कर्ज",
      slider7Subtitle: "शेतकरी बांधवांसाठी कमी व्याजदरात कर्ज सुविधा",
      slider8Title: "वैयक्तिक कर्ज",
      slider8Subtitle: "आपल्या तातडीच्या आर्थिक गरजांसाठी जलद वैयक्तिक कर्ज",
      slider9Title: "मोबाईल बँकिंग सेवा",
      slider9Subtitle: "आपले व्यवहार आता सुरक्षित आणि सोप्या पद्धतीने मोबाईलवर",
      slider10Title: "सोने कर्ज",
      slider10Subtitle: "आपल्या सोन्याच्या दागिन्यांवर त्वरित कर्ज"
    }
  };
  
  // Merge AboutUs translations
  const aboutTranslations = {
    en: {
      pageTitle: 'About Us',
      subtitle: 'Shivpratap Multistate Nagari Co-Op Credit Society Ltd.',
      badges: {
        multistate: 'Multistate Institution',
        secureBanking: 'Secure Banking',
        yearsService: '22+ Years of Service'
      },
      stats: [
        { label: 'Established Year', suffix: '' },
        { label: 'Multistate Status', suffix: '' },
        { label: 'Customers', suffix: 'Lakh+' },
        { label: 'Years of Service', suffix: '+' }
      ],
      foundingTitle: 'Foundation and Beginning',
      foundingText1: 'In 2002, the Galai businessmen in our area came together and presented the idea of establishing a cooperative credit society to Late Pratapsheth (Dada) Salunkhe. At that time, the cooperative sector was going through extremely difficult circumstances—many institutions had collapsed, some were on the verge of collapse, and there was tremendous instability among depositors.',
      foundingText2: 'Starting a new institution in such challenging circumstances was truly a courageous step. Late Pratapsheth (Dada) Salunkhe and Adv. Vitthalrao Salunkhe, who had in-depth knowledge of the banking sector, conducted an extensive study of the situation and decided to run the institution efficiently based on proper management, transparent transactions, and responsible lending.',
      establishmentDate: 'Establishment',
      establishmentDateValue: 'June 26, 2002',
      motto: '"Service and Security"',
      inaugurationTitle: 'Inauguration Ceremony',
      inaugurationText: 'After this, the institution was established on June 26, 2002, and the grand inauguration of the institution took place on July 11, 2002, at the hands of Late Dr. Patangrao Kadam, Hon. Jayantrao Patil, and Hon. Harshvardhan Patil, the then dignitaries.',
      inaugurationCards: [
        { title: 'Special Ceremony', desc: 'Many former and current MLAs present' },
        { title: 'Important Decision', desc: 'Stay away from political interference' },
        { title: 'Growth Beginning', desc: 'Business community joined the institution' }
      ],
      expansionTitle: 'Expansion and Multistate Status',
      expansionText1: 'The growth of the institution has been remarkable from the beginning. The machinery, vegetable, poultry, grape, and other business communities in our area were connected to the institution, and the institution started providing loans to all sectors.',
      expansionHighlight: '2012: Achieved Multistate status, the first Multistate cooperative credit society in Western Maharashtra',
      expansionText2: 'Since the Galai brothers of the institution are spread across the country, there was a demand that the institution should expand its operations from various states. Considering this demand positively, the institution achieved Multistate status in 2012 and gained recognition as the first cooperative credit society to become Multistate in Western Maharashtra.',
      technologyTitle: 'Modern Technology and Services',
      technologyCards: [
        { title: 'Pioneer in Technology', desc: 'First local institution to computerize circulation and pigmy collection' },
        { title: 'Core Banking System', desc: 'CBS, online transactions, mobile banking, NEFT/RTGS/IMPS facilities' },
        { title: 'Service and Security', desc: 'Staff that considers customer satisfaction as true service is the main strength of the institution' },
        { title: 'Advanced Accounting', desc: 'Digitization and IT-based accurate accounting, all these services are continuously improved' }
      ],
      facilitiesTitle: 'Facilities and Services',
      facilitiesCards: [
        { title: 'Modern Offices', desc: 'Modern facilities in all branches' },
        { title: 'Trained Staff', desc: 'Experienced and helpful staff' },
        { title: 'Control System', desc: 'Excellent internal control system' },
        { title: 'Timely Service', desc: 'Services available to customers on time' }
      ],
      financialServicesTitle: 'Financial Services',
        financialServices: [
        'Savings Account',
        'Fixed Deposit',
        'Recurring Deposit',
        'Women\'s Scheme',
        'Senior Citizen Scheme',
        'Gold Loan',
        'Personal Loan',
        'Business Loan',
        'Various Facilities'
      ],
      socialCommitmentTitle: 'Social Commitment',
      socialCommitmentText: 'The institution has maintained social commitment along with financial services. The institution honestly focuses on financial literacy, women empowerment, encouraging small entrepreneurs in rural areas, guidance for students, and implementing various welfare programs for society.',
      socialCommitmentBadge: 'Dedicated to Social Development',
      todayTitle: 'Today\'s Institution',
      todayText: 'Today, Shivpratap Multistate is an institution standing on a strong financial foundation and is continuously progressing with the strength of members\' trust, management\'s vision, transparency, and employees\' dedication.',
      todayMotto: '"Following the values of cooperation, taking everyone along, providing safe and reliable banking services"',
      todayCommitment: 'Our commitment is to keep the flag of the institution\'s progress flying with more brightness.',
      contactTitle: 'Contact Us',
      contactSubtitle: 'Contact us for more information about our services and products',
      contactAddress: 'Address',
      contactPhone: 'Phone',
      contactEmail: 'Email'
    },
    mr: {
      pageTitle: 'संस्थेविषयी',
      subtitle: 'Shivpratap Multistate Nagari Co-Op Credit Society Ltd.',
      badges: {
        multistate: 'मल्टीस्टेट संस्था',
        secureBanking: 'सुरक्षित बँकिंग',
        yearsService: '२२+ वर्षे सेवा'
      },
      stats: [
        { label: 'स्थापना वर्ष', suffix: '' },
        { label: 'मल्टीस्टेट दर्जा', suffix: '' },
        { label: 'ग्राहक', suffix: 'लाख+' },
        { label: 'वर्षे सेवेचा अनुभव', suffix: '+' }
      ],
      foundingTitle: 'स्थापना आणि प्रारंभ',
      foundingText1: 'सन २००२ साली आमच्या भागातील गलाई व्यवसायिकांनी एकत्र येऊन स्व. प्रतापशेठ (दादा) साळुंखे यांच्याकडे सहकारी पतसंस्था स्थापनेची कल्पना मांडली. त्या काळात सहकार क्षेत्र अत्यंत कठीण परिस्थितीतून जात होते—अनेक संस्था बुडालेल्या, काही बुडण्याच्या मार्गावर, आणि ठेवीदारांमध्ये प्रचंड अस्थिरता निर्माण झाली होती. अशा आव्हानात्मक परिस्थितीत नवी संस्था सुरू करणे हे खरोखर धाडसी पाऊल होते.',
      foundingText2: 'स्व. प्रतापशेठ (दादा) साळुंखे व बँकिंग  क्षेत्राची सखोल माहिती असणारे अ‍ॅड. विठ्ठलराव साळुंखे यांनी परिस्थितीचा विस्तृत अभ्यास करून, योग्य व्यवस्थापन, पारदर्शक व्यवहार आणि जबाबदार कर्जपुरवठा यांच्या आधारे संस्था सक्षमपणे चालवण्याचा निर्णय घेतला. इतर संस्थांनी केलेल्या चुका टाळून, कमी व्याजदरात व सुरक्षित तारण घेऊन कर्जपुरवठा करणे ही संस्थेची धोरणात्मक दिशा निश्चित करण्यात आली.',
      establishmentDate: 'स्थापना',
      establishmentDateValue: '२६ जून २००२',
      motto: '"सेवा आणि सुरक्षा"',
      inaugurationTitle: 'उद्घाटन सोहळा',
      inaugurationText: 'यानंतर २६ जून २००२ रोजी संस्थेची स्थापना झाली आणि ११ जुलै २००२ रोजी संस्थेचे भव्य उद्घाटन स्व.डॉ. पतंगराव कदम, मा. जयंतराव पाटील, व मा. हर्षवर्धन पाटील या तत्कालीन मान्यवरांच्या हस्ते पार पडले. अनेक आजी–माजी आमदार उपस्थित असलेला हा सोहळा विशेष ठरला, आणि तेव्हाच राजकीय हस्तक्षेपापासून संस्था कायम दूर राहील, असा ठोस निर्णय घेण्यात आला.',
      inaugurationCards: [
        { title: 'विशेष सोहळा', desc: 'अनेक आजी–माजी आमदार उपस्थित' },
        { title: 'महत्वपूर्ण निर्णय', desc: 'राजकीय हस्तक्षेपापासून दूर राहणे' },
        { title: 'वाढीचा प्रारंभ', desc: 'व्यापारी वर्ग संस्थेशी जोडला गेला' }
      ],
      expansionTitle: 'विस्तार आणि मल्टीस्टेट दर्जा',
      expansionText1: 'संस्थेची वाढ सुरुवातीपासूनच उल्लेखनीय राहिली. आपल्या परिसरातील यंत्रमाग, भाजीपाला, पोल्ट्री, द्राक्ष तसेच अन्य व्यापारी वर्ग संस्थेशी जोडत गेले आणि संस्था सर्व क्षेत्रांसाठी कर्जपुरवठा करू लागली. आधुनिकतेचा स्वीकार हा संस्थेच्या कामकाजाचा कायमस्वरूपी भाग राहिला आहे. चलन करणे आणि पिग्मी गोळा करणे ही कामे संगणकीकृत पद्धतीने करणारी पहिली स्थानिक संस्था म्हणून शिवप्रताप मल्टीस्टेटची ओळख निर्माण झाली. त्यानंतर Core Banking System (CBS), ऑनलाइन व्यवहार, मोबाइल बँकिंग, NEFT/RTGS/IMPS सुविधा, डिजिटलीकरण आणि IT-आधारित अचूक लेखापद्धती या सर्व सेवा संस्था सातत्याने उन्नत करत गेली.',
      expansionHighlight: '२०१२: मल्टीस्टेट दर्जा मिळवला, पश्चिम महाराष्ट्रातील पहिली मल्टीस्टेट सहकारी पतसंस्था',
      expansionText2: 'आधुनिकतेचा स्वीकार हा संस्थेच्या कामकाजाचा कायमस्वरूपी भाग राहिला आहे. चलन करणे आणि पिग्मी गोळा करणे ही कामे संगणकीकृत पद्धतीने करणारी पहिली स्थानिक संस्था म्हणून शिवप्रताप मल्टीस्टेटची ओळख निर्माण झाली. त्यानंतर Core Banking System (CBS), ऑनलाइन व्यवहार, मोबाइल बँकिंग, NEFT/RTGS/IMPS सुविधा, डिजिटलीकरण आणि IT-आधारित अचूक लेखापद्धती या सर्व सेवा संस्था सातत्याने उन्नत करत गेली.',
      technologyTitle: 'आधुनिक तंत्रज्ञान आणि सेवा',
      technologyCards: [
        { title: 'तंत्रज्ञानातील अग्रेसर', desc: 'चलन करणे आणि पिग्मी गोळा करणे ही कामे संगणकीकृत पद्धतीने करणारी पहिली स्थानिक संस्था' },
        { title: 'Core Banking System', desc: 'CBS, ऑनलाइन व्यवहार, मोबाइल बँकिंग, NEFT/RTGS/IMPS सुविधा' },
        { title: 'सेवा आणि सुरक्षा', desc: 'ग्राहकांचे समाधान हीच खरी सेवा मानणारा कर्मचारी वर्ग संस्थेची मुख्य ताकद' },
        { title: 'उन्नत लेखापद्धती', desc: 'डिजिटलीकरण आणि IT-आधारित अचूक लेखापद्धती या सर्व सेवा सातत्याने उन्नत' }
      ],
      facilitiesTitle: 'सुविधा आणि सेवा',
      facilitiesCards: [
        { title: 'सुबक कार्यालये', desc: 'सर्व शाखांमध्ये आधुनिक सुविधा' },
        { title: 'प्रशिक्षित कर्मचारी', desc: 'अनुभवी आणि सहाय्यक कर्मचारीवर्ग' },
        { title: 'नियंत्रण व्यवस्था', desc: 'उत्तम अंतर्गत नियंत्रण व्यवस्था' },
        { title: 'वेळेवर सेवा', desc: 'ग्राहकांना वेळेवर उपलब्ध सेवा' }
      ],
      financialServicesTitle: 'आर्थिक सेवा',
      financialServices: [
        'बचत खाते',
        'मुदत ठेव',
        'आवर्ती ठेव',
        'महिला योजना',
        'ज्येष्ठ नागरिक योजना',
        'गोल्ड लोन',
        'वैयक्तिक कर्ज',
        'व्यवसाय कर्ज',
        'विविध सोयी'
      ],
      serviceSafetyPrinciple: "“सेवा आणि सुरक्षा” हे तत्त्व संस्थेने सुरुवातीपासूनच जपले असून ग्राहकांचे समाधान हीच खरी सेवा मानणारा कर्मचारी वर्ग संस्थेची मुख्य ताकद आहे.",
      facilitiesAndServicesNarrative: "संस्थेच्या सर्व शाखांमध्ये सुबक कार्यालये, प्रशिक्षित कर्मचारी, उत्तम अंतर्गत नियंत्रण व्यवस्था आणि ग्राहकांना वेळेवर उपलब्ध होणाऱ्या आर्थिक सेवांमुळे संस्थेची विश्वासार्हता दिवसेंदिवस वाढत गेली आहे. बचत खाते, मुदत ठेव, आवर्ती ठेव, महिला व ज्येष्ठ नागरिकांसाठी विशेष योजना, तसेच गोल्ड लोन, वैयक्तिक कर्ज, व्यवसाय कर्ज अशा विविध सोयी देऊन संस्था सभासदांच्या छोट्या-मोठ्या आर्थिक गरजांना समर्थपणे हाताळत आहे..",
      socialCommitmentTitle: 'सामाजिक बांधिलकी',
      socialCommitmentText: 'संस्थेचे गलाई बांधव देशभर पसरलेले असल्यामुळे विविध राज्यांतून संस्थेने आपले कामकाज वाढवावे, अशी मागणी होत होती. या मागणीचा सकारात्मक विचार करून संस्थेने २०१२ साली मल्टीस्टेट दर्जा मिळवला, आणि पश्चिम महाराष्ट्रातील मल्टीस्टेट होणारी पहिली सहकारी पतसंस्था म्हणून मान्यता मिळवली.',
      socialCommitmentBadge: 'समाज विकासासाठी समर्पित',
      todayTitle: 'आजची संस्था',
      todayText: 'आज शिवप्रताप मल्टीस्टेट ही संस्था मजबूत आर्थिक पायावर उभी असून सभासदांचा विश्वास, व्यवस्थापनाची दूरदृष्टी, पारदर्शकता आणि कर्मचार्‍यांचे समर्पण यांच्या बळावर सातत्याने प्रगती करत आहे. सहकाराच्या मूल्यांना अनुसरून सर्वांना सोबत घेऊन, सुरक्षित व विश्वासार्ह बँकिंग सेवा देणे आणि संस्थेच्या प्रगतीची पताका अधिक तेजाने फडकवत ठेवणे हीच आमची बांधिलकी आहे. सहकाराच्या मूल्यांना अनुसरून सर्वांना सोबत घेऊन, सुरक्षित व विश्वासार्ह बँकिंग सेवा देणे आणि संस्थेच्या प्रगतीची पताका अधिक तेजाने फडकवत ठेवणे हीच आमची बांधिलकी आहे.',
      todayMotto: '"सहकाराच्या मूल्यांना अनुसरून सर्वांना सोबत घेऊन, सुरक्षित व विश्वासार्ह बँकिंग सेवा देणे"',
      todayCommitment: 'संस्थेच्या प्रगतीची पताका अधिक तेजाने फडकवत ठेवणे हीच आमची बांधिलकी आहे.',
      contactTitle: 'आमच्याशी संपर्क साधा',
      contactSubtitle: 'आमच्या सेवा आणि उत्पादनांबद्दल अधिक माहितीसाठी संपर्क करा',
      contactAddress: 'पत्ता',
      contactPhone: 'फोन',
      contactEmail: 'ईमेल'
    }
  };



  const t = translations[language];
  const tAbout = aboutTranslations[language];

  // State management
  const [currentSlide, setCurrentSlide] = useState(0);

  const [galleryImages, setGalleryImages] = useState([]);
  const [galleryLoading, setGalleryLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState(null);
  const [showPopup, setShowPopup] = useState(true); // Popup state - starts as true to show on page load

  // Counter states


  // About stats state
  const isMarathi = language === 'mr';
  const [aboutStats, setAboutStats] = useState([
    { value: 0, target: 2002, suffix: '', label: aboutTranslations[language].stats[0].label, icon: FaHistory, color: 'blue' },
    { value: 0, target: 2012, suffix: '', label: aboutTranslations[language].stats[1].label, icon: FaTrophy, color: 'green' },
    { value: 0, target: 1, suffix: aboutTranslations[language].stats[2].suffix, label: aboutTranslations[language].stats[2].label, icon: FaUsers, color: 'amber' },
    { value: 0, target: 22, suffix: aboutTranslations[language].stats[3].suffix, label: aboutTranslations[language].stats[3].label, icon: FaClock, color: 'purple' }
  ]);
  const [isAboutVisible, setIsAboutVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsAboutVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setAboutStats(prevStats => 
        prevStats.map(stat => {
          if (stat.value < stat.target) {
            const increment = Math.ceil((stat.target - stat.value) / 20);
            return { ...stat, value: Math.min(stat.value + increment, stat.target) };
          }
          return stat;
        })
      );
    }, 100);

    return () => clearInterval(interval);
  }, []);

  // Update about stats when language changes
  useEffect(() => {
    setAboutStats([
      { value: 2002, target: 2002, suffix: '', label: aboutTranslations[language].stats[0].label, icon: FaHistory, color: 'blue' },
      { value: 2012, target: 2012, suffix: '', label: aboutTranslations[language].stats[1].label, icon: FaTrophy, color: 'green' },
      { value: 1, target: 1, suffix: aboutTranslations[language].stats[2].suffix, label: aboutTranslations[language].stats[2].label, icon: FaUsers, color: 'amber' },
      { value: 22, target: 22, suffix: aboutTranslations[language].stats[3].suffix, label: aboutTranslations[language].stats[3].label, icon: FaClock, color: 'purple' }
    ]);
  }, [language, aboutTranslations]);





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
            {/* Left: Enhanced About Content - Statistics Grid */}
            <div className="bg-white rounded-3xl shadow-xl p-6 border border-gray-100 h-full">
               <div className="grid grid-cols-2 gap-4 h-full content-center">
                  {/* Satisfied Customers */}
                  <div className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-2xl p-4 border border-pink-100 flex flex-col items-center justify-center text-center transform transition-all duration-300 hover:scale-105 hover:shadow-md col-span-2 sm:col-span-1">
                    <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center mb-3">
                      <FaUserCheck className="text-2xl text-pink-600" />
                    </div>
                    <h4 className="text-2xl font-bold text-gray-800">50L+</h4>
                    <p className="text-sm text-gray-600 font-medium">{t.satisfiedCustomers}</p>
                  </div>

                  {/* Branches */}
                  <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-4 border border-blue-100 flex flex-col items-center justify-center text-center transform transition-all duration-300 hover:scale-105 hover:shadow-md col-span-2 sm:col-span-1">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-3">
                      <FaBuilding className="text-2xl text-blue-600" />
                    </div>
                    <h4 className="text-2xl font-bold text-gray-800">23</h4>
                    <p className="text-sm text-gray-600 font-medium">{t.branches}</p>
                  </div>

                  {/* Customer Service Centers */}
                  <div className="bg-gradient-to-br from-amber-50 to-yellow-50 rounded-2xl p-4 border border-amber-100 flex flex-col items-center justify-center text-center transform transition-all duration-300 hover:scale-105 hover:shadow-md col-span-2 sm:col-span-1">
                    <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mb-3">
                      <FaMapMarkerAlt className="text-2xl text-amber-600" />
                    </div>
                    <h4 className="text-2xl font-bold text-gray-800">6</h4>
                    <p className="text-sm text-gray-600 font-medium">{t.villageService}</p>
                  </div>

                  {/* Employees */}
                  <div className="bg-gradient-to-br from-emerald-50 to-green-50 rounded-2xl p-4 border border-emerald-100 flex flex-col items-center justify-center text-center transform transition-all duration-300 hover:scale-105 hover:shadow-md col-span-2 sm:col-span-1">
                    <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mb-3">
                      <FaUsers className="text-2xl text-emerald-600" />
                    </div>
                    <h4 className="text-2xl font-bold text-gray-800">200+</h4>
                    <p className="text-sm text-gray-600 font-medium">{t.employee}</p>
                  </div>

                  {/* Business Volume */}
                  <div className="bg-gradient-to-br from-purple-50 to-violet-50 rounded-2xl p-4 border border-purple-100 flex flex-col items-center justify-center text-center transform transition-all duration-300 hover:scale-105 hover:shadow-md col-span-2">
                    <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-3">
                      <FaChartLine className="text-2xl text-purple-600" />
                    </div>
                    <h4 className="text-2xl font-bold text-gray-800">1000+</h4>
                    <p className="text-sm text-gray-600 font-medium">{t.businessVolume}</p>
                  </div>
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
                      src="https://www.facebook.com/plugins/page.php?href=https://www.facebook.com/shivpratapmultistatenagari&tabs=timeline&width=500&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&lazy=true"
                      width="100%"
                      height="500"
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


            </div>
          </div>
        </div>
      </section>

      {/* About Us Content replacing section after Facebook */}
      <div className="bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 pb-20">
        {/* Enhanced Header Section - About Us style */}


        {/* Enhanced Main Content */}
        <div className="max-w-7xl mx-auto px-4 py-16 -mt-10 relative z-10">
          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {aboutStats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div 
                  key={index}
                  className={`bg-white p-6 rounded-2xl shadow-lg border-t-4 border-${stat.color}-500 transform transition-all duration-500 hover:scale-105 hover:shadow-2xl ${isAboutVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className={`text-3xl mb-3 text-${stat.color}-600 flex justify-center`}>
                    <Icon />
                  </div>
                  <div className={`text-3xl font-bold text-${stat.color}-600 text-center mb-2`}>
                    {stat.value}{stat.suffix}
                  </div>
                  <div className="text-gray-600 text-center text-sm">{stat.label}</div>
                </div>
              );
            })}
          </div>
          {/* Enhanced Founder Section */}
          <div className={`bg-white rounded-3xl shadow-2xl p-8 md:p-12 mb-12 transform transition-all duration-1000 hover:shadow-3xl ${isAboutVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="lg:w-2/3">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-full flex items-center justify-center mr-4">
                    <FaHistory className="text-white text-xl" />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-800">
                    {tAbout.foundingTitle}
                  </h3>
                </div>
                <div className="space-y-6">
                  <p className="text-gray-700 text-lg leading-relaxed">
                    {tAbout.foundingText1}
                  </p>
                  <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-xl border-l-4 border-blue-600">
                    <p className="text-gray-700 text-lg leading-relaxed">
                      {tAbout.foundingText2}
                    </p>
                  </div>
                </div>
              </div>
              <div className="lg:w-1/3 flex justify-center">
                <div className="bg-gradient-to-br from-blue-600 to-indigo-700 p-8 rounded-2xl shadow-2xl text-white text-center transform transition-all duration-500 hover:scale-105">
                  <div className="text-6xl mb-4">🏛️</div>
                  <h4 className="text-2xl font-bold mb-2">{tAbout.establishmentDate}</h4>
                  <p className="text-xl font-semibold mb-4">{tAbout.establishmentDateValue}</p>
                  <div className="bg-white/20 backdrop-blur-sm p-4 rounded-xl">
                    <p className="text-lg font-semibold">{tAbout.motto}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Inauguration Section */}
          <div className="bg-gradient-to-r from-amber-50 to-yellow-50 rounded-2xl shadow-xl p-6 md:p-8 mb-10 border-l-8 border-amber-500">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
              <span className="bg-amber-500 text-white px-4 py-2 rounded-lg">
                {tAbout.inaugurationTitle}
              </span>
            </h3>
            <p className="text-gray-700 text-lg leading-relaxed mb-6 text-center">
              {tAbout.inaugurationText}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              {tAbout.inaugurationCards.map((card, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-md text-center transform transition-all duration-300 hover:scale-105">
                  <div className="text-4xl mb-3">{['👥', '🎯', '📈'][index]}</div>
                  <h4 className="font-bold text-gray-800">{card.title}</h4>
                  <p className="text-gray-600 mt-2">{card.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Growth & Multistate Section */}
          <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 mb-10 overflow-hidden relative">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-100 rounded-full -mr-16 -mt-16"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-amber-100 rounded-full -ml-12 -mb-12"></div>
            
            <h3 className="text-2xl font-bold text-gray-800 mb-6 relative z-10">
              <span className="border-b-4 border-blue-600 pb-2">{tAbout.expansionTitle}</span>
            </h3>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 relative z-10">
              <div>
                <p className="text-gray-700 text-lg leading-relaxed mb-4">
                  {tAbout.expansionText1}
                </p>
                <div className="bg-blue-50 p-5 rounded-xl mt-6 border border-blue-200">
                  <h4 className="font-bold text-blue-800 text-lg mb-2">🏆 {!isMarathi ? 'Historic Achievement' : 'ऐतिहासिक विक्रम'}</h4>
                  <p className="text-blue-700">
                    {tAbout.expansionHighlight}
                  </p>
                </div>
              </div>
              
              <div>
                <p className="text-gray-700 text-lg leading-relaxed">
                  {tAbout.expansionText2}
                </p>
              </div>
            </div>
          </div>

          {/* Technology & Services Section */}
          <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl shadow-xl p-6 md:p-8 mb-10">
            <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">
              <span className="inline-block bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 py-3 rounded-xl shadow-lg">
                {tAbout.technologyTitle}
              </span>
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                {tAbout.technologyCards.slice(0, 2).map((card, index) => (
                  <div key={index} className="bg-white p-6 rounded-xl shadow-md">
                    <div className="flex items-start">
                      <div className="text-3xl mr-4">{['💻', '🏦'][index]}</div>
                      <div>
                        <h4 className="font-bold text-gray-800 text-lg mb-2">{card.title}</h4>
                        <p className="text-gray-700">
                          {card.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="space-y-6">
                {tAbout.technologyCards.slice(2, 4).map((card, index) => (
                  <div key={index} className="bg-white p-6 rounded-xl shadow-md">
                    <div className="flex items-start">
                      <div className="text-3xl mr-4">{['🔒', '⚡'][index]}</div>
                      <div>
                        <h4 className="font-bold text-gray-800 text-lg mb-2">{card.title}</h4>
                        <p className="text-gray-700">
                          {card.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {isMarathi ? (
            <div className="bg-white rounded-2xl shadow-xl p-8 mb-10 border-l-8 border-pink-600">
               <p className="text-gray-700 text-lg leading-relaxed mb-6 font-medium">
                {tAbout.serviceSafetyPrinciple}
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                {tAbout.facilitiesAndServicesNarrative}
              </p>
            </div>
          ) : (
            <>
              {/* Infrastructure & Services Grid */}
              <div className="mb-10">
                <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">
                  <span className="inline-block border-b-4 border-blue-600 pb-2">
                    {tAbout.facilitiesTitle}
                  </span>
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {tAbout.facilitiesCards.map((item, index) => (
                    <div 
                      key={index} 
                      className="bg-gradient-to-br from-white to-blue-50 p-6 rounded-xl shadow-md border border-blue-100 transform transition-all duration-300 hover:shadow-lg hover:-translate-y-2"
                    >
                      <div className="text-4xl mb-4 text-center">{['🏢', '👨‍💼', '📊', '⏰'][index]}</div>
                      <h4 className="font-bold text-gray-800 text-lg mb-2 text-center">{item.title}</h4>
                      <p className="text-gray-600 text-center">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Financial Services */}
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl shadow-xl p-6 md:p-8 mb-10">
                <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
                  {tAbout.financialServicesTitle}
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {tAbout.financialServices.map((service, index) => (
                    <div 
                      key={index}
                      className="bg-white p-4 rounded-lg shadow-sm border border-green-200 flex items-center justify-center hover:bg-green-50 transition-colors duration-300"
                    >
                      <span className="text-green-700 font-medium">{service}</span>
                    </div>
                  ))}
                </div>
              </div>
            </>
          )}

          {/* Social Commitment */}
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl shadow-xl p-6 md:p-8 mb-10">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-2/3">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">
                  {tAbout.socialCommitmentTitle}
                </h3>
                <p className="text-gray-700 text-lg leading-relaxed mb-4">
                  {tAbout.socialCommitmentText}
                </p>
              </div>
              <div className="md:w-1/3 flex justify-center mt-6 md:mt-0">
                <div className="bg-gradient-to-br from-purple-100 to-pink-100 p-6 rounded-xl shadow-lg">
                  <div className="text-6xl mb-4 text-center">🤝</div>
                  <p className="text-purple-800 font-semibold text-center">{tAbout.socialCommitmentBadge}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Conclusion Section */}
          <div className="bg-gradient-to-r from-blue-900 to-indigo-900 text-white rounded-2xl shadow-2xl p-6 sm:p-8 md:p-12 text-center">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">{tAbout.todayTitle}</h3>
            
            <div className="max-w-4xl mx-auto px-2 sm:px-4">
              <p className="text-base sm:text-lg md:text-xl leading-relaxed mb-4 sm:mb-6 text-blue-100">
                {tAbout.todayText}
              </p>
              
              <div className="bg-gradient-to-r from-amber-500 to-yellow-500 inline-block px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 rounded-full shadow-lg mt-3 sm:mt-4">
                <p className="text-sm sm:text-base md:text-xl font-bold">
                  {tAbout.todayMotto}
                </p>
              </div>
            </div>
            
            <div className="mt-6 sm:mt-8 md:mt-10 pt-4 sm:pt-6 border-t border-blue-400">
              <p className="text-blue-200 text-sm sm:text-base md:text-lg">
                {tAbout.todayCommitment}
              </p>
            </div>
          </div>

          {/* Enhanced Contact Section */}
          <div className="mt-16 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-3xl shadow-2xl p-8 md:p-12 text-white">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold mb-4">{tAbout.contactTitle}</h3>
              <p className="text-blue-100 text-lg">{tAbout.contactSubtitle}</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaMapMarkerAlt className="text-2xl" />
                </div>
                <h4 className="font-bold text-lg mb-2">{tAbout.contactAddress}</h4>
                <p className="text-blue-100"> Shiv Pratap Gold Tower, Vita Ta. Khanapur, Dist. Sangli (Maharashtra)</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaPhone className="text-2xl" />
                </div>
                <h4 className="font-bold text-lg mb-2">{tAbout.contactPhone}</h4>
                <p className="text-blue-100">+91 9582837032</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaEnvelope className="text-2xl" />
                </div>
                <h4 className="font-bold text-lg mb-2">{tAbout.contactEmail}</h4>
                <p className="text-blue-100">customercare@shivpratapmultistate.com</p>
              </div>
            </div>
          </div>

          {/* Stats Section */}
          <div className="mt-10 grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-lg text-center border-t-4 border-blue-500">
              <div className="text-3xl font-bold text-blue-600">{!isMarathi ? '2002' : '२००२'}</div>
              <div className="text-gray-600 mt-2">{tAbout.stats[0].label}</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg text-center border-t-4 border-green-500">
              <div className="text-3xl font-bold text-green-600">{!isMarathi ? '2012' : '२०१२'}</div>
              <div className="text-gray-600 mt-2">{tAbout.stats[1].label}</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg text-center border-t-4 border-amber-500">
              <div className="text-3xl font-bold text-amber-600">{!isMarathi ? 'First' : 'पहिली'}</div>
              <div className="text-gray-600 mt-2">{!isMarathi ? 'Multistate Institution in Western Maharashtra' : 'पश्चिम महाराष्ट्रातील मल्टीस्टेट संस्था'}</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg text-center border-t-4 border-purple-500">
              <div className="text-3xl font-bold text-purple-600">{!isMarathi ? '22+' : '२२+'}</div>
              <div className="text-gray-600 mt-2">{tAbout.stats[3].label}</div>
            </div>
          </div>
        </div>
      </div>

      


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