import React, { useState } from 'react';
import { 
  FaHome, FaChevronRight, FaMapMarkerAlt, FaPhoneAlt,
   FaSearch, FaDirections,
  FaBuilding, FaCity, FaTimes, FaStar,
} from 'react-icons/fa';
import { GiBank } from 'react-icons/gi';
import { useLanguage } from '../../contexts/LanguageContext';

const Branch = () => {
  const { language } = useLanguage();
  const [selectedCity, setSelectedCity] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedBranch, setSelectedBranch] = useState(null);
  const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'list'

  // Use language from context directly
  const currentLang = language;

  // Translations for branch page content
  const translations = {
    en: {
      pageTitle: 'Our Branches',
      pageSubtitle: 'Find your nearest Shivpratap Multistate Bank branch',
      breadcrumbHome: 'Home',
      breadcrumbBranches: 'Branches',
      headOffice: 'Head Office',
      totalBranches: 'Total Branches',
      cities: 'Cities',
      searchPlaceholder: 'Search branch by name, city, address, or phone number...',
      grid: 'Grid',
      list: 'List',
      allBranches: 'All Branches',
      headOfficeBtn: 'Head Office',
      vitaBranches: 'Vita Branches',
      ourBranches: 'Our Branches',
      allBranchesDesc: 'All branches across Maharashtra',
      branchesIn: 'Branches in',
      showing: 'Showing',
      of: 'of',
      branches: 'branches',
      mainBranch: 'MAIN BRANCH',
      contactInformation: 'Contact Information',
      address: 'Address',
      phone: 'Phone',
      email: 'Email',
      timings: 'Timings',
      established: 'Established',
      manager: 'Manager',
      services: 'Services',
      facilities: 'Facilities',
      atms: 'ATMs',
      viewDetails: 'View Details',
      getDirections: 'Get Directions',
      call: 'Call',
      branchDetails: 'Branch Details',
      servicesOffered: 'Services Offered',
      facilitiesAvailable: 'Facilities Available',
      branchTimings: 'Branch Timings',
      mondayToFriday: 'Monday to Friday',
      saturday: 'Saturday',
      sunday: 'Sunday',
      closed: 'Closed',
      language: 'Language',
      view: 'View',
      location: 'Location',
      quickActions: 'Quick Actions',
      visitNearest: 'Visit Your Nearest',
      shivpratapBank: 'Shivpratap Bank',
      branchToday: 'Branch Today',
      experienceBanking: 'Experience personalized banking services at our',
      convenientlyLocated: 'conveniently located branches across Maharashtra',
      contactSupport: 'Contact Support',
      customerSupport: 'Customer Support',
      branchNames: {
        'Main Office (Vita - Main Office)': 'Main Office (Vita - Main Office)',
        'Choundeshwari Temple Branch, Vita': 'Choundeshwari Temple Branch, Vita',
        'Sangli Branch': 'Sangli Branch',
        'Khanapur Branch': 'Khanapur Branch',
        'Tasgaon Branch': 'Tasgaon Branch',
        'Atpadi Branch': 'Atpadi Branch',
        'Mayani Branch': 'Mayani Branch',
        'Jat Branch': 'Jat Branch',
        'Kavathe Mahankal Branch': 'Kavathe Mahankal Branch',
        'Miraj Branch': 'Miraj Branch',
        'Karad Branch': 'Karad Branch',
        'Islampur Branch': 'Islampur Branch',
        'Ichalkaranji Branch': 'Ichalkaranji Branch',
        'Athani Branch': 'Athani Branch',
        'Bhalvani Branch': 'Bhalvani Branch',
        'Shirala Branch': 'Shirala Branch',
        'Peth Vadgaon Branch': 'Peth Vadgaon Branch',
        'Ashta Branch': 'Ashta Branch',
        'Alasand Branch': 'Alasand Branch',
        'Vashi Branch': 'Vashi Branch',
        'Koparkhairane Branch': 'Koparkhairane Branch',
        'Kalamboli Branch': 'Kalamboli Branch',
        'Vishrantwadi, Pune Branch': 'Vishrantwadi, Pune Branch'
      }
    },
    mr: {
      pageTitle: 'आमच्या शाखा',
      pageSubtitle: 'तुमच्या जवळची शिवप्रताप मल्टीस्टेट बँक शाखा शोधा',
      breadcrumbHome: 'होम',
      breadcrumbBranches: 'शाखा',
      headOffice: 'मुख्य कार्यालय',
      totalBranches: 'एकूण शाखा',
      cities: 'शहरे',
      searchPlaceholder: 'नाव, शहर, पत्ता किंवा फोन नंबरने शाखा शोधा...',
      grid: 'ग्रिड',
      list: 'लिस्ट',
      allBranches: 'सर्व शाखा',
      headOfficeBtn: 'मुख्य कार्यालय',
      vitaBranches: 'विटा शाखा',
      ourBranches: 'आमच्या शाखा',
      allBranchesDesc: 'महाराष्ट्रमधील सर्व शाखा',
      branchesIn: 'मधील शाखा',
      showing: 'दाखवत आहे',
      of: 'पैकी',
      branches: 'शाखा',
      mainBranch: 'मुख्य शाखा',
      contactInformation: 'संपर्क माहिती',
      address: 'पत्ता',
      phone: 'फोन',
      email: 'ईमेल',
      timings: 'वेळ',
      established: 'स्थापना',
      manager: 'व्यवस्थापक',
      services: 'सेवा',
      facilities: 'सोयी',
      atms: 'एटीएम',
      viewDetails: 'तपशील पहा',
      getDirections: 'दिशा घ्या',
      call: 'कॉल करा',
      branchDetails: 'शाखा तपशील',
      servicesOffered: 'दिलेल्या सेवा',
      facilitiesAvailable: 'उपलब्ध सोयी',
      branchTimings: 'शाखा वेळ',
      mondayToFriday: 'सोमवार ते शुक्रवार',
      saturday: 'शनिवार',
      sunday: 'रविवार',
      closed: 'बंद',
      language: 'भाषा',
      view: 'दृश्य',
      location: 'स्थान',
      quickActions: 'त्वरित क्रिया',
      visitNearest: 'तुमच्या जवळची भेट द्या',
      shivpratapBank: 'शिवप्रताप बँक',
      branchToday: 'आज शाखा',
      experienceBanking: 'आमच्या वर वैयक्तिकृत बँकिंग सेवांचा अनुभव घ्या',
      convenientlyLocated: 'महाराष्ट्रमध्ये सोयीस्कर स्थानांवर आमाच्या',
      contactSupport: 'सपोर्टशी संपर्क साधा',
      customerSupport: 'ग्राहक सपोर्ट',
      branchNames: {
        'Main Office (Vita - Main Office)': 'मुख्य कार्यालय (विटा - मुख्य कार्यालय)',
        'Choundeshwari Temple Branch, Vita': 'चौंडेश्वरी मंदिर शाखा, विटा',
        'Sangli Branch': 'सांगली शाखा',
        'Khanapur Branch': 'खानापूर शाखा',
        'Tasgaon Branch': 'तासगाव शाखा',
        'Atpadi Branch': 'आटपाडी शाखा',
        'Mayani Branch': 'मायणी शाखा',
        'Jat Branch': 'जत शाखा',
        'Kavathe Mahankal Branch': 'कवठेमहांकाळ शाखा',
        'Miraj Branch': 'मिरज शाखा',
        'Karad Branch': 'कराड शाखा',
        'Islampur Branch': 'इस्लामपूर शाखा',
        'Ichalkaranji Branch': 'इचलकरंजी शाखा',
        'Athani Branch': 'अथणी शाखा',
        'Bhalvani Branch': 'भालवणी शाखा',
        'Shirala Branch': 'शिराळा शाखा',
        'Peth Vadgaon Branch': 'पेठ वडगाव शाखा',
        'Ashta Branch': 'आष्टा शाखा',
        'Alasand Branch': 'अकलूज शाखा',
        'Vashi Branch': 'वाशी शाखा',
        'Koparkhairane Branch': 'कोपरखैरणे शाखा',
        'Kalamboli Branch': 'कळंबोली शाखा',
        'Vishrantwadi, Pune Branch': 'विश्रांतवाडी, पुणे शाखा'
      }
    }
  };

  // Get current language content
  const currentContent = translations[currentLang];

  // Helper function to get translated branch name
  const getTranslatedBranchName = (branchName) => {
    return currentContent.branchNames[branchName] || branchName;
  };

  // Cities data based on provided branches
  const cities = [
    { id: 'all', name: currentContent.allBranches, count: 23 },
    { id: 'vita', name: 'Vita', count: 2 },
    { id: 'sangli', name: 'Sangli', count: 2 },
    { id: 'khanapur', name: 'Khanapur', count: 1 },
    { id: 'tasgaon', name: 'Tasgaon', count: 1 },
    { id: 'atpadi', name: 'Atpadi', count: 1 },
    { id: 'mayani', name: 'Mayani', count: 1 },
    { id: 'jat', name: 'Jat', count: 1 },
    { id: 'kavathe_mahankal', name: 'Kavathe Mahankal', count: 1 },
    { id: 'miraj', name: 'Miraj', count: 1 },
    { id: 'karad', name: 'Karad', count: 1 },
    { id: 'islampur', name: 'Islampur', count: 1 },
    { id: 'ichalkaranji', name: 'Ichalkaranji', count: 1 },
    { id: 'athani', name: 'Athani', count: 1 },
    { id: 'bhalvani', name: 'Bhalvani', count: 1 },
    { id: 'shirala', name: 'Shirala', count: 1 },
    { id: 'peth_vadgaon', name: 'Peth Vadgaon', count: 1 },
    { id: 'ashta', name: 'Ashta', count: 1 },
    { id: 'Alasand', name: 'Alasand', count: 1 },
    { id: 'vashi', name: 'Vashi', count: 1 },
    { id: 'koparkhairane', name: 'Koparkhairane', count: 1 },
    { id: 'kalamboli', name: 'Kalamboli', count: 1 },
    { id: 'pune', name: 'Pune', count: 1 }
  ];

  // Head Office Data
  const headOffice = {
    id: 'head-office',
    name: 'Main Office (Vita - Main Office)',
    city: 'Vita',
    address: 'शिवप्रताप गोल्ड टॉवर,पॉवर हाऊस रोड, दुसरा मजला, विटा.',
    phone: '02347-276399',
    email: 'headoffice@shivpratapbank.com',
    timings: 'Monday to Friday: 9:30 AM - 5:30 PM | Saturday: 9:30 AM - 1:30 PM',
    established: '1985',
    manager: 'Mr. Rajesh Sharma',
    services: ['All Banking Services', 'Corporate Banking', 'Investment Advisory', 'Loan Processing', 'Foreign Exchange'],
    facilities: ['ATM', 'Locker', 'WiFi', 'Parking', 'Wheelchair Access', 'Customer Lounge'],
    mapLink: 'https://maps.app.goo.gl/NZ2BXT9Zdtv7J9SS8'
  };

  // Branches data from your list
  const branches = [
    {
      id: 1,
      name: 'मुख्य शाखा',
      city: 'vita',
      address: 'शिवप्रताप गोल्ड टॉवर,पॉवर हाऊस रोड, पहिला मजला,विटा.',
      phone: '02347-276399',
      email: 'vita.main@shivpratapbank.com',
      timings: 'Mon-Fri: 10AM-4PM | Sat: 10AM-1PM',
      established: '1985',
      manager: 'Mr. Rajesh Sharma',
      atms: 3,
      services: ['All Banking Services', 'Corporate Banking', 'Loan Processing'],
      facilities: ['ATM', 'Locker', 'Safe Deposit', 'Customer Lounge'],
      mapLink: 'https://maps.app.goo.gl/NZ2BXT9Zdtv7J9SS8'
    },
    {
      id: 2,
      name: 'चौंडेश्वरी चौक शाखा - विटा',
      city: 'vita',
      address: 'भैरवनाथ थिएटर जवळ, लेंगरे रोड, विटा.',
      phone: '02347-276371',
      email: 'vita.choundeshwari@shivpratapbank.com',
      timings: 'Mon-Fri: 10AM-4PM | Sat: 10AM-1PM',
      established: '1990',
      manager: 'Mrs. Priya Deshmukh',
      atms: 2,
      services: ['Savings Account', 'Current Account', 'Fixed Deposit'],
      facilities: ['ATM', 'Locker', 'Cheque Deposit'],
      mapLink: 'https://maps.app.goo.gl/666gNKgq37zcwL2AA'
    },
    {
      id: 3,
      name: 'सांगली शाखा',
      city: 'sangli',
      address: 'नवीन सराफ कट्टा,सानिका भवन,तानवडे बुक डेपो सामोर, सांगली.',
      phone: '0233-2327399',
      email: 'sangli@shivpratapbank.com',
      timings: 'Mon-Fri: 10AM-4PM | Sat: 10AM-1PM',
      established: '1995',
      manager: 'Mr. Sanjay Patil',
      atms: 2,
      services: ['All Accounts', 'Education Loan', 'Insurance'],
      facilities: ['ATM', 'Locker', 'Internet Banking'],
      mapLink: 'https://maps.app.goo.gl/spuQY6Snbs4xgvZ77'
    },
    {
      id: 4,
      name: 'खानापूर शाखा',
      city: 'khanapur',
      address: 'एसटी स्टँड समोर, सतीश ड्रेसेस जवळ, शिवपार्वती बिल्डिंग खानापूर.',
      phone: '02347-295416',
      email: 'khanapur@shivpratapbank.com',
      timings: 'Mon-Fri: 10AM-4PM | Sat: 10AM-1PM',
      established: '1998',
      manager: 'Mr. Ramesh Kumar',
      atms: 2,
      services: ['Agriculture Loan', 'Gold Loan', 'Micro Finance'],
      facilities: ['ATM', 'Locker', 'Agriculture Advisory'],
      mapLink: 'https://maps.app.goo.gl/YvhvyUkBm1LpTT7s9?g_st=aw'
    },
    {
      id: 5,
      name: 'तासगाव शाखा',
      city: 'tasgaon',
      address: 'Vishwapriya Complex, Vandemataram Chowk, Tasgaon, Dist. Sangli',
      phone: '02346-240599',
      email: 'tasgaon@shivpratapbank.com',
      timings: 'Mon-Fri: 10AM-4PM | Sat: 10AM-1PM',
      established: '2000',
      manager: 'Mrs. Sunita Reddy',
      atms: 2,
      services: ['Education Loan', 'Savings Account', 'Fixed Deposit'],
      facilities: ['ATM', 'Locker', 'Student Banking']
    },
    {
      id: 6,
      name: 'आटपाडी शाखा',
      city: 'atpadi',
      address: 'आटपाडी कॉलेज समोर,दिघंची रोड,आटपाडी.',
      phone: '02343-220399',
      email: 'atpadi@shivpratapbank.com',
      timings: 'Mon-Fri: 10AM-4PM | Sat: 10AM-1PM',
      established: '2002',
      manager: 'Mr. Vikram Singh',
      atms: 2,
      services: ['Business Banking', 'Current Account', 'Working Capital'],
      facilities: ['ATM', 'Locker', 'Business Advisory'],
      mapLink: 'https://maps.app.goo.gl/mbLBb3E7spdCjfaL8'
    },
    {
      id: 7,
      name: 'मायणी शाखा',
      city: 'mayani',
      address: 'ए.टी. स्टँड समोर, मेन रोड, मायणी.',
      phone: '02161-270999',
      email: 'mayani@shivpratapbank.com',
      timings: 'Mon-Fri: 10AM-4PM | Sat: 10AM-1PM',
      established: '2005',
      manager: 'Mr. Ajit Pawar',
      atms: 1,
      services: ['Agriculture Loan', 'Small Business', 'Savings Account'],
      facilities: ['ATM', 'Locker', 'Agriculture Support'],
      mapLink: 'https://maps.app.goo.gl/CEcAkow8hv8wWX4A6'
    },
    {
      id: 8,
      name: 'जत शाखा',
      city: 'jat',
      address: 'एल.आय.सी. ऑफिस जवळ, उमराणी रोड, जत.',
      phone: '02344-248999',
      email: 'jat@shivpratapbank.com',
      timings: 'Mon-Fri: 10AM-4PM | Sat: 10AM-1PM',
      established: '2008',
      manager: 'Mr. Amit Verma',
      atms: 2,
      services: ['Retail Banking', 'MSME Loans', 'Credit Cards'],
      facilities: ['ATM', 'Locker', 'Self-service Kiosk'],
      mapLink: 'https://maps.app.goo.gl/AVSpEVrD2JY3RUBh7'
    },
    {
      id: 9,
      name: 'कवठे महांकाळ शाखा',
      city: 'kavathe_mahankal',
      address: 'छत्रपती शिवाजी महाराज चौक सांगली जिल्हा मध्यवर्ती बँक रस्ता ,कवठे महांकाळ.',
      phone: '02341-223999',
      email: 'kavathe@shivpratapbank.com',
      timings: 'Mon-Fri: 10AM-4PM | Sat: 10AM-1PM',
      established: '2010',
      manager: 'Mrs. Neha Joshi',
      atms: 2,
      services: ['NRI Services', 'Trade Finance', 'Forex'],
      facilities: ['ATM', 'Safe Deposit', 'Business Lounge'],
      mapLink: 'https://maps.app.goo.gl/suPoXrcdeh1jqq3Q7'
    },
    {
      id: 10,
      name: 'मिरज शाखा',
      city: 'miraj',
      address: 'Satar Maker Galli, Shaniwar Peth, Miraj, Tal. Miraj, Dist. Sangli – 416410',
      phone: '0233-2220299',
      email: 'miraj@shivpratapbank.com',
      timings: 'Mon-Fri: 10AM-4PM | Sat: 10AM-1PM',
      established: '2012',
      manager: 'Mr. Ramesh Kumar',
      atms: 3,
      services: ['Corporate Banking', 'NRI Services', 'Trade Finance'],
      facilities: ['ATM', 'Locker', 'Conference Room']
    },
    {
      id: 11,
      name: 'कराड शाखा',
      city: 'karad',
      address: 'Azad Chowk, Patil & Company Building, Somwar Peth, Karad',
      phone: '02364-245678',
      email: 'karad@shivpratapbank.com',
      timings: 'Mon-Fri: 10AM-4PM | Sat: 10AM-1PM',
      established: '2013',
      manager: 'Mrs. Priya Deshmukh',
      atms: 2,
      services: ['Savings Account', 'Current Account', 'Personal Loan'],
      facilities: ['ATM', 'Locker', 'Cash Deposit Machine']
    },
    {
      id: 12,
      name: 'ईश्वरपूर शाखा',
      city: 'islampur',
      address: 'काला मारुती मंदिर काला मारुती चौक, ईश्वरपूर.',
      phone: '8960050042',
      email: 'islampur@shivpratapbank.com',
      timings: 'Mon-Fri: 10AM-4PM | Sat: 10AM-1PM',
      established: '2014',
      manager: 'Mr. Sanjay Patil',
      atms: 2,
      services: ['Agriculture Loan', 'Gold Loan', 'Micro Finance'],
      facilities: ['ATM', 'Locker', 'Agriculture Advisory'],
      mapLink: 'https://maps.app.goo.gl/HdKmkpiHGU2rsuYL9'
    },
    {
      id: 13,
      name: 'इचलकरंजी शाखा',
      city: 'ichalkaranji',
      address: 'जुनी महानगरपालिका रोड, मगदुम शेजारी, गिरनार अपार्टमेंट शेजारी,इचलकरंजी.',
      phone: '7460050051',
      email: 'ichalkaranji@shivpratapbank.com',
      timings: 'Mon-Fri: 10AM-4PM | Sat: 10AM-1PM',
      established: '2015',
      manager: 'Mr. Vikram Singh',
      atms: 2,
      services: ['Business Banking', 'Current Account', 'Working Capital'],
      facilities: ['ATM', 'Locker', 'Business Advisory'],
      mapLink: 'https://maps.app.goo.gl/MrrLCgnnLCZP9BMRA'
    },
    {
      id: 14,
      name: 'अथणी शाखा',
      city: 'athani',
      address: 'गोटखिंडी गल्ली भाजी  मार्केट, अथणी.',
      phone: '7460050052',
      email: 'athani@shivpratapbank.com',
      timings: 'Mon-Fri: 10AM-4PM | Sat: 10AM-1PM',
      established: '2016',
      manager: 'Mr. Ajit Pawar',
      atms: 2,
      services: ['Agriculture Loan', 'Small Business', 'Savings Account'],
      facilities: ['ATM', 'Locker', 'Agriculture Support'],
      mapLink: 'https://maps.app.goo.gl/78VtZ6erRkoyZy3M6'
    },
    {
      id: 15,
      name: 'भाळवणी शाखा',
      city: 'bhalvani',
      address: 'मेन रोड ,मुल्ला वाडा ,भाळवणी.',
      phone: '8960050043',
      email: 'bhalvani@shivpratapbank.com',
      timings: 'Mon-Fri: 10AM-4PM | Sat: 10AM-1PM',
      established: '2017',
      manager: 'Mr. Amit Verma',
      atms: 1,
      services: ['Retail Banking', 'MSME Loans', 'Credit Cards'],
      facilities: ['ATM', 'Locker', 'Self-service Kiosk'],
      mapLink: 'https://maps.app.goo.gl/3Tm4tAFwrL5q6Z2f7'
    },
    {
      id: 16,
      name: 'शिराळा शाखा',
      city: 'shirala',
      address: 'एस टी स्टँड रोड,  स्टेट बँक ऑफ इंडिया समोर, शिराळा.',
      phone: '02345-245678',
      email: 'shirala@shivpratapbank.com',
      timings: 'Mon-Fri: 10AM-4PM | Sat: 10AM-1PM',
      established: '2018',
      manager: 'Mrs. Neha Joshi',
      atms: 1,
      services: ['NRI Services', 'Trade Finance', 'Forex'],
      facilities: ['ATM', 'Safe Deposit', 'Business Lounge'],
      mapLink: 'https://maps.app.goo.gl/MnnTF3WfWXhYtPbe7'
    },
    {
      id: 17,
      name: 'पेठ वडगाव शाखा',
      city: 'peth_vadgaon',
      address: 'गुरुगंगा अपार्टमेंट , मोमीन हॉस्पिटल समोर,पद्मा रोड, पेठ वडगाव.',
      phone: '02347-245678',
      email: 'pethvadgaon@shivpratapbank.com',
      timings: 'Mon-Fri: 10AM-4PM | Sat: 10AM-1PM',
      established: '2019',
      manager: 'Mr. Ramesh Kumar',
      atms: 2,
      services: ['Corporate Banking', 'NRI Services', 'Trade Finance'],
      facilities: ['ATM', 'Locker', 'Conference Room'],
      mapLink: 'https://maps.app.goo.gl/Qz9Ad8UNyJzSNfNt5'
    },
    {
      id: 18,
      name: 'आष्टा शाखा',
      city: 'ashta',
      address: 'Sagar Jewellers Samor, Pawar City Center, Main Road, Ashta',
      phone: '+91 63690 93632',
      email: 'ashta@shivpratapbank.com',
      timings: 'Mon-Fri: 10AM-4PM | Sat: 10AM-1PM',
      established: '2020',
      manager: 'Mrs. Priya Deshmukh',
      atms: 2,
      services: ['Savings Account', 'Current Account', 'Personal Loan'],
      facilities: ['ATM', 'Locker', 'Cash Deposit Machine']
    },
    {
      id: 19,
      name: 'आळसंद शाखा',
      city: 'Alasand',
      address: 'डोंबे मेडिकल समोर, विटा-कुंडल रोड,आळसंद.',
      phone: '02188-245678',
      email: 'Alasand@shivpratapbank.com',
      timings: 'Mon-Fri: 10AM-4PM | Sat: 10AM-1PM',
      established: '2021',
      manager: 'Mr. Sanjay Patil',
      atms: 2,
      services: ['Agriculture Loan', 'Gold Loan', 'Micro Finance'],
      facilities: ['ATM', 'Locker', 'Agriculture Advisory'],
      mapLink: 'https://maps.app.goo.gl/jUdc1Fojvo827xha8'
    },
    {
      id: 20,
      name: 'वाशी शाखा',
      city: 'vashi',
      address: 'Gavdevi Mandir Javal, Sector 14, Vashi Koparkhairane Road, Vashi – 400703',
      phone: '022-27894567',
      email: 'vashi@shivpratapbank.com',
      timings: 'Mon-Fri: 10AM-5PM | Sat: 10AM-2PM',
      established: '2022',
      manager: 'Mr. Vikram Singh',
      atms: 3,
      services: ['Corporate Banking', 'NRI Services', 'Trade Finance'],
      facilities: ['ATM', 'Locker', 'Business Lounge', 'Conference Room']
    },
    {
      id: 21,
      name: 'कोपरखैरणे शाखा',
      city: 'koparkhairane',
      address: 'स्वागत चेंबर , प्लॉट न १९, नॉर्थ पॉईंट स्कूल ऑफ व्हीलेज समोर , कोपखैरणे',
      phone: '022-27784567',
      email: 'koparkhairane@shivpratapbank.com',
      timings: 'Mon-Fri: 10AM-4PM | Sat: 10AM-1PM',
      established: '2022',
      manager: 'Mr. Ajit Pawar',
      atms: 2,
      services: ['Retail Banking', 'MSME Loans', 'Credit Cards'],
      facilities: ['ATM', 'Locker', 'Self-service Kiosk'],
      mapLink: 'https://maps.app.goo.gl/mxZxyrSN5vE7rtBv5'
    },
    {
      id: 22,
      name: 'कळंबोली शाखा',
      city: 'kalamboli',
      address: 'शॉप नं. १३, प्लॅटिनियम एक्सपेरीओ,प्लॉट नं. ८२ सेक्टर १७, रोडपाली, कळंबोली.',
      phone: '02192-245678',
      email: 'kalamboli@shivpratapbank.com',
      timings: 'Mon-Fri: 10AM-4PM | Sat: 10AM-1PM',
      established: '2023',
      manager: 'Mr. Amit Verma',
      atms: 2,
      services: ['NRI Services', 'Trade Finance', 'Forex'],
      facilities: ['ATM', 'Safe Deposit', 'Business Lounge'],
      mapLink: 'https://maps.app.goo.gl/G9ayLFUjuQWCiJDH6'
    },
    {
      id: 23,
      name: 'विश्रांतवाडी (पुणे)  शाखा',
      city: 'pune',
      address: 'शॉप न- 74, महालक्ष्मी विहार, आळंदी रोड , विश्रांतवाडी.( पुणे)',
      phone: '020-24567890',
      email: 'pune@shivpratapbank.com',
      timings: 'Mon-Fri: 10AM-4PM | Sat: 10AM-1PM',
      established: '2023',
      manager: 'Mrs. Neha Joshi',
      atms: 3,
      services: ['Corporate Banking', 'NRI Services', 'Trade Finance'],
      facilities: ['ATM', 'Locker', 'Conference Room'],
      mapLink: 'https://maps.app.goo.gl/x8b4Mcitbb9sGLEH8'
    }
  ];

  // Filter branches based on city and search
  const filteredBranches = branches.filter(branch => {
    const matchesCity = selectedCity === 'all' || branch.city === selectedCity;
    const matchesSearch = searchQuery === '' || 
      branch.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      branch.address.toLowerCase().includes(searchQuery.toLowerCase()) ||
      branch.city.toLowerCase().includes(searchQuery.toLowerCase()) ||
      branch.phone.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCity && matchesSearch;
  });

  // Group branches by city for city-wise display
  const groupedBranches = filteredBranches.reduce((groups, branch) => {
    if (!groups[branch.city]) {
      groups[branch.city] = [];
    }
    groups[branch.city].push(branch);
    return groups;
  }, {});

  // (removed unused allServices array)

  // Handle branch selection
  const handleBranchSelect = (branch) => {
    setSelectedBranch(branch);
    // Scroll to details section
    setTimeout(() => {
      const element = document.getElementById('branch-details');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  // Handle get directions
  const handleGetDirections = (branch) => {
    // Use mapLink if available, otherwise use address search
    if (branch.mapLink) {
      window.open(branch.mapLink, '_blank');
    } else {
      const address = encodeURIComponent(branch.address);
      const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${address}`;
      window.open(mapsUrl, '_blank');
    }
  };

  return (
    <div className="font-sans bg-gradient-to-b from-rose-50 to-white">
      {/* 1. Hero Banner Section */}
      <section 
        className="relative h-[500px] overflow-hidden"
        style={{
          background: 'linear-gradient(rgba(176, 52, 98, 0.85), rgba(176, 52, 98, 0.8))',
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
            <nav className="flex items-center text-blue-100 text-sm mb-6">
              <a href="/" className="flex items-center hover:text-white transition-colors">
                <FaHome className="mr-2" />
                {currentContent.breadcrumbHome}
              </a>
              <FaChevronRight className="mx-2 opacity-50" />
              <span className="font-semibold text-white">{currentContent.breadcrumbBranches}</span>
            </nav>

            {/* Page Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              {currentContent.pageTitle.split(' ')[0]} <span className="bg-gradient-to-r from-rose-300 to-pink-300 bg-clip-text text-transparent">{currentContent.pageTitle.split(' ')[1]}</span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mb-8">
              {currentContent.pageSubtitle}
            </p>

            {/* Head Office Badge */}
            <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-xl px-6 py-4 border border-blue-300 border-opacity-30 inline-block">
              <div className="flex items-center">
                <FaStar className="text-yellow-300 mr-3" />
                <div>
                  <div className="text-blue-100 text-sm opacity-90">{currentContent.headOffice}</div>
                  <div className="text-xl font-bold text-white">{headOffice.city}</div>
                </div>
              </div>
            </div>

            {/* Branch Stats */}
            <div className="flex flex-wrap gap-6 mt-8">
              <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-xl px-6 py-3 border border-blue-300 border-opacity-30">
                <div className="text-blue-100 text-sm opacity-90">{currentContent.totalBranches}</div>
                <div className="text-2xl font-bold text-white">{branches.length}</div>
              </div>
              <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-xl px-6 py-3 border border-blue-300 border-opacity-30">
                <div className="text-blue-100 text-sm opacity-90">{currentContent.cities}</div>
                <div className="text-2xl font-bold text-white">{cities.length - 1}</div>
              </div>
              {/* <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-xl px-6 py-3 border border-blue-300 border-opacity-30">
                <div className="text-blue-100 text-sm opacity-90">ATMs</div>
                <div className="text-2xl font-bold text-white">50+</div>
              </div> */}
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
                    className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
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

              <div className="flex items-center gap-4">
                {/* View Mode Toggle */}
                <div className="hidden md:flex bg-gray-100 rounded-lg p-1">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`px-4 py-2 rounded-md transition-colors ${viewMode === 'grid' ? 'bg-white text-blue-600 shadow-sm' : 'text-gray-600 hover:text-gray-800'}`}
                  >
                    {currentContent.grid}
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`px-4 py-2 rounded-md transition-colors ${viewMode === 'list' ? 'bg-white text-blue-600 shadow-sm' : 'text-gray-600 hover:text-gray-800'}`}
                  >
                    {currentContent.list}
                  </button>
                </div>

                {/* City Filter */}
                <div className="relative">
                  <select
                    value={selectedCity}
                    onChange={(e) => setSelectedCity(e.target.value)}
                    className="appearance-none bg-white border border-gray-300 rounded-lg px-4 py-3 pr-10 focus:border-rose-500 focus:ring-2 focus:ring-rose-200 outline-none transition-all"
                  >
                    {cities.map(city => (
                      <option key={city.id} value={city.id}>
                        {city.name} ({city.count})
                      </option>
                    ))}
                  </select>
                  <FaChevronRight className="absolute right-3 top-1/2 transform -translate-y-1/2 rotate-90 text-gray-400 pointer-events-none" />
                </div>
              </div>
            </div>

            {/* Quick Filters */}
            <div className="flex flex-wrap gap-3 mt-4">
              <button
                onClick={() => setSelectedCity('all')}
                className={`flex items-center px-4 py-2 rounded-lg transition-all ${selectedCity === 'all' ? 'bg-gradient-to-r from-rose-600 to-rose-800 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
              >
                <GiBank className="mr-2" />
                {currentContent.allBranches}
              </button>
              <button
                onClick={() => setSelectedBranch(headOffice)}
                className="flex items-center px-4 py-2 rounded-lg bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors"
              >
                <FaBuilding className="mr-2" />
                {currentContent.headOfficeBtn}
              </button>
              <button
                onClick={() => setSelectedCity('vita')}
                className={`flex items-center px-4 py-2 rounded-lg transition-all ${selectedCity === 'vita' ? 'bg-gradient-to-r from-rose-600 to-rose-800 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
              >
                <FaCity className="mr-2" />
                {currentContent.vitaBranches}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Branches List */}
          <div className="lg:col-span-2 space-y-12">
            {/* 3. Head Office Section */}
            <section id="head-office" className="scroll-mt-24">
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200">
                <div className="relative h-48 bg-gradient-to-r from-rose-600 to-rose-800">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <h2 className="text-3xl font-bold text-white">{getTranslatedBranchName(headOffice.name)}</h2>
                        <p className="text-rose-100">{headOffice.city}</p>
                      </div>
                      <div className="bg-white text-rose-700 px-4 py-2 rounded-full font-bold">
                        {currentContent.mainBranch}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-8 relative overflow-hidden">
                  {/* Main Branch Watermark */}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-5">
                    <div className="text-6xl font-bold text-gray-300 transform rotate-45 scale-150">MAIN BRANCH</div>
                  </div>
                  
                  <div className="relative z-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      {/* Contact Information Only */}
                      <div className="md:col-span-2">
                        <h3 className="text-xl font-bold text-gray-800 mb-6">{currentContent.contactInformation}</h3>
                        <div className="space-y-4">
                          <div className="flex items-start">
                            <FaMapMarkerAlt className="text-rose-600 mt-1 mr-3 flex-shrink-0" />
                            <div>
                              <div className="font-medium text-gray-800">{currentContent.address}</div>
                              <div className="text-gray-600">{headOffice.address}</div>
                            </div>
                          </div>
                          <div className="flex items-center">
                            <FaPhoneAlt className="text-rose-600 mr-3 flex-shrink-0" />
                            <div>
                              <div className="font-medium text-gray-800">{currentContent.phone}</div>
                              <div className="text-gray-600">{headOffice.phone}</div>
                            </div>
                          </div>
                          {/* Google Maps Link */}
                          {headOffice.mapLink && (
                            <div className="pt-4">
                              <button
                                onClick={() => window.open(headOffice.mapLink, '_blank')}
                                className="w-full bg-gradient-to-r from-rose-600 to-rose-800 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center"
                              >
                                <FaDirections className="mr-2 text-xl" />
                                {currentContent.getDirections}
                              </button>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* 4. City-wise Branch Listing */}
            <section id="branch-listing" className="scroll-mt-24">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h2 className="text-3xl font-bold text-gray-800">{currentContent.ourBranches}</h2>
                  <p className="text-gray-600">
                    {selectedCity === 'all' ? currentContent.allBranchesDesc : `${currentContent.branchesIn} ${cities.find(c => c.id === selectedCity)?.name}`}
                  </p>
                </div>
                <div className="text-gray-600">
                  {currentContent.showing} {filteredBranches.length} {currentContent.of} {branches.length} {currentContent.branches}
                </div>
              </div>

              {/* View Mode Toggle for Mobile */}
              <div className="flex md:hidden mb-6 bg-gray-100 rounded-lg p-1">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`flex-1 px-4 py-2 rounded-md transition-colors ${viewMode === 'grid' ? 'bg-white text-rose-600 shadow-sm' : 'text-gray-600 hover:text-gray-800'}`}
                >
                  {currentContent.grid} {currentContent.view}
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`flex-1 px-4 py-2 rounded-md transition-colors ${viewMode === 'list' ? 'bg-white text-rose-600 shadow-sm' : 'text-gray-600 hover:text-gray-800'}`}
                >
                  {currentContent.list} {currentContent.view}
                </button>
              </div>

              {Object.entries(groupedBranches).map(([city, cityBranches]) => (
                <div key={city} className="mb-12">
                  {/* City Header */}
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-rose-500 to-rose-600 flex items-center justify-center mr-4">
                      <FaCity className="text-white text-xl" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-800">
                        {cities.find(c => c.id === city)?.name || city}
                      </h3>
                      <p className="text-gray-600">{cityBranches.length} branch{cityBranches.length !== 1 ? 'es' : ''}</p>
                    </div>
                  </div>

                  {/* Branch Cards */}
                  <div className={`${viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 gap-6' : 'space-y-6'}`}>
                    {cityBranches.map(branch => (
                      <div 
                        key={branch.id}
                        className={`bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 hover:border-rose-300 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
                          viewMode === 'list' ? 'flex flex-col md:flex-row' : ''
                        }`}
                      >
                        {/* Branch Details */}
                        <div className={`p-6 w-full`}>
                          <div className="flex justify-between items-start mb-4">
                            <div>
                              <h4 className="text-xl font-bold text-gray-800">{getTranslatedBranchName(branch.name)}</h4>
                              <p className="text-rose-600 font-medium">
                                {cities.find(c => c.id === branch.city)?.name || branch.city}
                              </p>
                            </div>
                          </div>

                          <div className="space-y-3 mb-6">
                            <div className="flex items-start">
                              <FaMapMarkerAlt className="text-gray-400 mt-1 mr-3 flex-shrink-0" />
                              <div className="text-gray-600 text-sm">{branch.address}</div>
                            </div>
                            <div className="flex items-center">
                              <FaPhoneAlt className="text-gray-400 mr-3 flex-shrink-0" />
                              <div className="text-gray-600 text-sm font-medium">{branch.phone}</div>
                            </div>
                          </div>

                          {/* Action Buttons */}
                          <div className="flex flex-wrap gap-3">
                            <button
                              onClick={() => handleBranchSelect(branch)}
                              className="flex-1 bg-gradient-to-r from-rose-600 to-rose-800 text-white px-4 py-2 rounded-lg font-medium hover:shadow-lg transition-all duration-300"
                            >
                              {currentContent.viewDetails}
                            </button>
                            <button
                              onClick={() => handleGetDirections(branch)}
                              className="flex items-center px-4 py-2 rounded-lg border border-rose-600 text-rose-600 hover:bg-rose-50 transition-colors"
                            >
                              <FaDirections className="mr-2" />
                              {currentContent.getDirections}
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </section>
          </div>

          {/* Right Column - Sidebar */}
          <div className="space-y-8">
          </div>
        </div>

        {/* 5. Branch Details Section */}
        {selectedBranch && (
          <section id="branch-details" className="scroll-mt-24 mt-12">
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200">
              <div className="relative h-48 bg-gradient-to-r from-rose-600 to-rose-800">
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <div className="flex items-center justify-between">
                    <div>
                      <h2 className="text-4xl font-bold text-white">{getTranslatedBranchName(selectedBranch.name)}</h2>
                      <p className="text-rose-100 text-lg">
                        {cities.find(c => c.id === selectedBranch.city)?.name || selectedBranch.city}
                      </p>
                    </div>
                    <button
                      onClick={() => setSelectedBranch(null)}
                      className="bg-white text-gray-800 p-2 rounded-full hover:bg-gray-100 transition-colors"
                    >
                      <FaTimes size={20} />
                    </button>
                  </div>
                </div>
              </div>

              <div className="p-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  {/* Contact Details & Map */}
                  <div className="lg:col-span-2">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-800 mb-6">{currentContent.branchDetails}</h3>
                        <div className="space-y-4">
                          <div className="flex items-start">
                            <FaMapMarkerAlt className="text-rose-600 mt-1 mr-4 flex-shrink-0" />
                            <div>
                              <div className="font-bold text-gray-800">{currentContent.address}</div>
                              <div className="text-gray-700">{selectedBranch.address}</div>
                            </div>
                          </div>
                          <div className="flex items-center">
                            <FaPhoneAlt className="text-rose-600 mr-4 flex-shrink-0" />
                            <div>
                              <div className="font-bold text-gray-800">{currentContent.phone}</div>
                              <div className="text-gray-700 font-medium">{selectedBranch.phone}</div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Map */}
                      <div>
                        <h3 className="text-2xl font-bold text-gray-800 mb-4">{currentContent.location}</h3>
                        <div className="bg-gray-100 rounded-xl h-64 overflow-hidden">
                          <iframe
                            src={`https://maps.google.com/maps?q=${encodeURIComponent(selectedBranch.address)}&output=embed`}
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Branch Location Map"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">{currentContent.quickActions}</h3>
                    <button
                      onClick={() => handleGetDirections(selectedBranch)}
                      className="w-full bg-gradient-to-r from-rose-600 to-rose-800 text-white py-4 rounded-xl font-bold text-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center"
                    >
                      <FaDirections className="mr-3" />
                      {currentContent.getDirections}
                    </button>
                    <a
                      href={`tel:${selectedBranch.phone}`}
                      className="w-full border-2 border-rose-600 text-rose-600 py-4 rounded-xl font-bold text-lg hover:bg-rose-50 transition-colors flex items-center justify-center"
                    >
                      <FaPhoneAlt className="mr-3" />
                      {currentContent.call}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}


      </div>
    </div>
  );
};

export default Branch;