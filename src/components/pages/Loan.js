import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext';
import { 
  FaHome, FaChevronRight,
  FaCalendarAlt, FaHandHoldingUsd, FaUserCheck, 
  FaShieldAlt, FaRupeeSign, FaHeart,
  FaGraduationCap, FaCar, FaBusinessTime,
  FaBuilding, FaPhoneAlt, FaMapMarkerAlt,
   FaFileAlt, FaStar,
  FaCheckCircle, FaInfoCircle, FaChartLine, FaUniversity, 
  FaIdCard, FaLandmark, FaList,
   FaChevronDown,
  FaRegFileAlt, FaRegChartBar, FaRegCreditCard,
  FaRegMoneyBillAlt, FaUserFriends, FaBullseye
} from 'react-icons/fa';
import {  GiGoldBar, GiHouseKeys } from 'react-icons/gi';

const Loan = () => {
  const { language } = useLanguage();
  const navigate = useNavigate();
  const location = useLocation();
  const isMarathi = language === 'mr';
  const [activeLoan, setActiveLoan] = useState('personal-loan');
  const [showAllDocuments, setShowAllDocuments] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [expandedLoan, setExpandedLoan] = useState(null);

  // Loan data with images - REPLACE WITH YOUR PROVIDED IMAGES
  const loanData = {
    'personal-loan': {
      title: 'Personal Loan',
      marathiTitle: 'सामान्य कर्ज',
      subtitle: 'For education, travel, medical expenses, marriage, etc.',
      marathiSubtitle: 'शिक्षण, प्रवास, वैद्यकीय खर्च, लग्न, इत्यादीसाठी',
      color: 'from-blue-600 to-indigo-700',
      icon: <FaHandHoldingUsd />,
      description: isMarathi ? [
        'या व्यवहारी जगात लहानसहान आर्थिक अडचणींमुळे मोठं नुकसान सोसावं लागतं.',
        'अनेकदा आपल्याला काही वैयक्तिक कारणास्तव अल्पावधीसाठी पैशांची गरज असते.',
        'मात्र वेळीच पैसे न मिळाल्याने मोठे नुकसान सोसावे लागते.',
        'पण आता नाही!'
      ] : [
        'In this practical world, small financial problems lead to big losses.',
        'Often we need money for a short period of time for some personal reason.',
        'But due to not getting the money on time, one has to bear a huge loss.',
        'But not now!'
      ],
      eligibility: isMarathi ? [
        { title: 'नागरिकत्व', value: 'भारतीय नागरिक', icon: <FaIdCard /> },
        { title: 'वय श्रेणी', value: '२१ ते ६० वर्ष', icon: <FaUserCheck /> },
        { title: 'किमान उत्पन्न', value: '₹१५,०००/महिना (वेतनभोगी)', icon: <FaRupeeSign /> },
        { title: 'व्यवसाय उत्पन्न', value: '₹४५,०००/महिना (स्वयं-रोजगार)', icon: <FaBusinessTime /> }
      ] : [
        { title: 'Citizenship', value: 'Indian citizen', icon: <FaIdCard /> },
        { title: 'Age Range', value: '21 to 60 years', icon: <FaUserCheck /> },
        { title: 'Minimum Income', value: '₹15,000/month (salaried)', icon: <FaRupeeSign /> },
        { title: 'Business Income', value: '₹45,000/month (self-employed)', icon: <FaBusinessTime /> }
      ],
      creditScore: {
        ideal: '750+',
        description: isMarathi ? 'चांगला क्रेडिट स्कोअर कर्ज मंजूरीत करण्यास मदत करतो' : 'Good credit score helps in faster loan approval',
        levels: isMarathi ? [
          { range: '३००-५९९', label: 'कमचा', color: 'bg-red-500' },
          { range: '६००-६९९', label: 'चांगला', color: 'bg-yellow-500' },
          { range: '७००-७४९', label: 'चांगला', color: 'bg-green-500' },
          { range: '७५०-९००', label: 'उत्कृष्ट', color: 'bg-blue-500' }
        ] : [
          { range: '300-599', label: 'Poor', color: 'bg-red-500' },
          { range: '600-699', label: 'Fair', color: 'bg-yellow-500' },
          { range: '700-749', label: 'Good', color: 'bg-green-500' },
          { range: '750-900', label: 'Excellent', color: 'bg-blue-500' }
        ]
      },
      loanAmount: 'Up to ₹1,00,000 (as per eligibility)',
      tenure: 'Up to 24 months',
      interestRate: '12% - 16%',
      benefits: isMarathi ? [
        'संपत्रेक आवश्यक नाही',
        'त्वरित प्रक्रिया वेळ',
        'किमान दस्तऐवजीकरण',
        'लवचबादी परत्याप पर्याय',
        'ऑनलाइन अर्ज उपलब्ध'
      ] : [
        'No collateral required',
        'Quick processing time',
        'Minimal documentation',
        'Flexible repayment options',
        'Online application available'
      ],
      disadvantages: isMarathi ? [
        'उच्च व्याज दर',
        'असुरक्षित कर्ज (संपत्रेक नाही)',
        'कडक पात्रता मानदंड',
        'प्रक्रिया शुल्क लागू'
      ] : [
        'Higher interest rates',
        'Unsecured loan (no collateral)',
        'Strict eligibility criteria',
        'Processing fees applicable'
      ]
    },
    'mortgage-loan': {
      title: 'Mortgage Loan',
      marathiTitle: 'तारण कर्ज',
      subtitle: 'Lower interest loans against property',
      marathiSubtitle: 'मालमत्तेच्या तारणावर कमी व्याज दराचे कर्ज',
      color: 'from-green-600 to-emerald-700',
      icon: <FaBuilding />,
      description: isMarathi ? [
        'इतर कर्जांच्या तुलनेत कमी व्याजदर असतो',
        'Floating व्याजदर, Fixed व्याजदर, Payment Option ARMs, Registered Mortgage Loan, Conditional Sale Mortgage Loan, Usufructuary Mortgage इ. पर्याय उपलब्ध',
        'मॉर्गेज लोन हा गृहकर्ज मिळविण्याचा सोपा प्रकार आहे',
        'कर्जाची परतफेड केल्यानंतर घराचा मालकी हक्क मिळतो',
        'कर्जाची रक्कम साधारणतः मालमत्तेच्या किमतीच्या 60% ते 70% पर्यंत असते',
        'मालमत्तेची मार्केट किंमत किंवा नोंदणीकृत किंमत यापैकी जी कमी असेल त्यावर कर्ज दिले जाते',
        'बांधकामाधीन जागा, बांधकाम पूर्ण झालेली जागा, निवासी किंवा व्यावसायिक जागेवर कर्ज मिळते',
        'मालमत्तेवर कोणताही कायदेशीर वाद किंवा कोर्ट केस चालू नसावा',
        'मॉर्गेज लोन दीर्घ कालावधीसाठी उपलब्ध असते',
        'इतर कर्जांच्या तुलनेत जास्त रकमेचे कर्ज मिळू शकते',
        'मिळालेली रक्कम वैयक्तिक किंवा व्यावसायिक गरजांसाठी वापरता येते'
      ] : [
        'Interest rates are lower compared to other types of loans',
        'Various options are available such as Floating Interest Rate, Fixed Interest Rate, Payment Option ARMs, Registered Mortgage Loan, Conditional Sale Mortgage Loan, and Usufructuary Mortgage',
        'A mortgage loan is an easy way to obtain a home-related loan',
        'Ownership rights of the property are retained after complete repayment of the loan',
        'The loan amount is generally 60% to 70% of the property value',
        'The loan is granted based on the lower of the market value or the registered value of the property',
        'Loans are available on under-construction property, completed property, residential property, or commercial property',
        'The property should be free from any legal disputes or court cases',
        'Mortgage loans are available for a long repayment period',
        'A higher loan amount can be obtained compared to other loans',
        'The sanctioned amount can be used for personal or business purposes'
      ],
      features: isMarathi ? [
        'मोठ्या रकमेचे सुरक्षित कर्ज',
        'इतर कर्जांच्या तुलनेत जास्त कालावधी',
        'प्रक्रिया शुल्क कमी',
        'कमी कागदपत्रे व जलद कर्जमंजुरी'
      ] : [
        'Large amount of secure loan',
        'Longer repayment period compared to other loans',
        'Lower processing charges',
        'Fewer documents and faster loan approval'
      ],
      types: isMarathi ? [
        { name: 'Fixed मॉर्गेज लोन व्याजदर', desc: 'संपूर्ण कालावधीत व्याजदर स्थिर राहतो' },
        { name: 'Adjustable मॉर्गेज लोन व्याजदर', desc: 'RBI च्या धोरणानुसार व्याजदर बदलतो' },
        { name: 'फक्त व्याज मॉर्गेज लोन', desc: 'ठराविक कालावधीसाठी फक्त व्याज भरावे लागते' },
        { name: 'रजिस्टर्ड मॉर्गेज लोन', desc: 'कायदेशीर करार करून मालमत्ता रजिस्ट्रेशनमध्ये नोंद केली जाते' },
        { name: 'Condition Sale मॉर्गेज लोन', desc: 'ठराविक तारखेपर्यंत कर्ज न फेडल्यास बँकेला मालमत्ता विकण्याचा अधिकार असतो' },
        { name: 'Usufructuary Mortgage', desc: 'मालमत्तेचे उत्पन्न (भाडे) कर्जदाराला दिले जाते' }
      ] : [
        { name: 'Fixed Rate Mortgage Loan', desc: 'The interest rate remains fixed throughout the loan tenure' },
        { name: 'Adjustable Rate Mortgage Loan', desc: 'The interest rate changes according to RBI policies' },
        { name: 'Interest-Only Mortgage Loan', desc: 'Only interest is paid for a specific period' },
        { name: 'Registered Mortgage Loan', desc: 'A legal agreement is executed and the mortgage is registered officially' },
        { name: 'Conditional Sale Mortgage Loan', desc: 'If the loan is not repaid by the specified date, the bank has the right to sell the property' },
        { name: 'Usufructuary Mortgage', desc: 'Income from the property (such as rent) is given to the lender' }
      ],
      eligibility: isMarathi ? [
        { title: 'नोकरीदार वार्षिक उत्पन्न', value: '₹40,000/-', icon: <FaRupeeSign /> },
        { title: 'व्यावसायिक वार्षिक उत्पन्न', value: '₹30,000/-', icon: <FaRupeeSign /> },
        { title: 'वय मर्यादा', value: '१८ ते ६५ वर्षे', icon: <FaCalendarAlt /> },
        { title: 'रोजगार स्थिती', value: 'नोकरीदार किंवा व्यावसायिक', icon: <FaUserCheck /> },
        { title: 'मालमत्ता मालकी', value: 'आवश्यक', icon: <GiHouseKeys /> },
        { title: 'कर्जफेडी क्षमता', value: 'आवश्यक', icon: <FaRegMoneyBillAlt /> }
      ] : [
        { title: 'Salaried Annual Income', value: '₹40,000/-', icon: <FaRupeeSign /> },
        { title: 'Self-employed Annual Income', value: '₹30,000/-', icon: <FaRupeeSign /> },
        { title: 'Age Limit', value: '18 to 65 years', icon: <FaCalendarAlt /> },
        { title: 'Employment Status', value: 'Salaried or self-employed', icon: <FaUserCheck /> },
        { title: 'Property Ownership', value: 'Required', icon: <GiHouseKeys /> },
        { title: 'Repayment Capacity', value: 'Required', icon: <FaRegMoneyBillAlt /> }
      ],
      documents: isMarathi ? [
        'ओळखपत्र : आधार कार्ड, पॅन कार्ड, मतदार ओळखपत्र, पासपोर्ट',
        'रहिवासी पुरावा : आधार कार्ड, वीज बिल, ड्रायव्हिंग लायसन्स',
        'पासपोर्ट साईज फोटो',
        'मागील 6 महिन्यांचे बँक स्टेटमेंट',
        'मालमत्तेची कागदपत्रे'
      ] : [
        'Identity Proof: Aadhaar Card, PAN Card, Voter ID, Passport',
        'Address Proof: Aadhaar Card, Electricity Bill, Driving License',
        'Passport-size photographs',
        'Bank statements of the last 6 months',
        'Property documents'
      ],
      interestRate: '12% - 14% (bank policy based)',
      loanAmount: 'Approximately 60% of the registered value of the property (Some banks offer up to ₹10 crore)',
      tenure: 'Minimum: 2 years, Maximum: 20 years (Higher loan amount generally allows a longer tenure)',
      reverseMortgage: isMarathi ? [
        'रिव्हर्स मॉर्गेजमध्ये मालमत्ता तुमच्याच मालकीची राहते',
        'बँक त्यावर कर्ज देते आणि ते मासिक, त्रैमासिक किंवा वार्षिक हप्त्यांमध्ये मिळते'
      ] : [
        'In a reverse mortgage, the property remains in the owner\'s name',
        'The bank provides a loan against the property, which is paid in monthly, quarterly, or annual installments'
      ],
      benefits: isMarathi ? [
        'मोठ्या रकमेचे सुरक्षित कर्ज',
        'इतर कर्जांच्या तुलनेत जास्त कालावधी',
        'प्रक्रिया शुल्क कमी',
        'कमी कागदपत्रे व जलद कर्जमंजुरी'
      ] : [
        'Large amount of secure loan',
        'Longer repayment period compared to other loans',
        'Lower processing charges',
        'Fewer documents and faster loan approval'
      ],
    },
    'home-loan': {
      title: 'Home Loan',
      marathiTitle: 'गृह कर्ज',
      subtitle: 'Finance for your dream home',
      marathiSubtitle: 'तुमच्या स्वप्नांच्या घरासाठी वित्तपुरवठा',
      color: 'from-purple-600 to-violet-700',
      icon: <GiHouseKeys />,
      purpose: isMarathi ? [
        'स्वतःच्या मालकीचं घर असणं हे अनेकांच्या आयुष्यातील प्रमुख स्वप्न असतं',
        'ग्राहकांना स्वतःचे घर बांधण्यासाठी किंवा विकत घेण्यासाठी आर्थिक सहाय्य करणे हा होम लोनचा उद्देश आहे',
        'साधारणतः बँकांकडून घराच्या एकूण किमतीच्या ८०% पर्यंत गृहकर्ज दिले जाते'
      ] : [
        'Owning a home is one of the most important dreams in a person\'s life',
        'The main objective of a home loan is to provide financial assistance to customers for constructing or purchasing their own house',
        'Generally, banks provide home loans up to 80% of the total cost of the house'
      ],
      types: isMarathi ? [
        { name: 'जमिन खरेदीसाठी कर्ज', desc: 'घर बांधण्यासाठी जमीन खरेदी करणे' },
        { name: 'गृहखरेदीसाठी कर्ज', desc: 'बांधकाम पूर्ण झालेले घर खरेदी करणे' },
        { name: 'घराच्या बांधकामासाठी कर्ज', desc: 'नवीन घर बांधण्यासाठी कर्ज' },
        { name: 'गृह विस्तार कर्ज', desc: 'अस्तित्वातील घराचा विस्तार करणे' },
        { name: 'गृह रूपांतर कर्ज', desc: 'विद्यमान कर्जाचे रूपांतर करणे' },
        { name: 'गृह सुधारणा कर्ज', desc: 'घराच्या दुरुस्तीसाठी कर्ज' },
        { name: 'बॅलन्स ट्रान्सफर होम लोन', desc: 'इतर बँकेतून कर्ज हस्तांतरण' },
        { name: 'एनआरआय गृहकर्ज', desc: 'विदेशात राहणाऱ्या भारतीयांसाठी कर्ज' },
        { name: 'ब्रिज कर्ज', desc: 'तात्पुरते कर्ज' },
        { name: 'स्टॅम्प ड्युटी कर्ज', desc: 'स्टॅम्प ड्युटी भरण्यासाठी कर्ज' },
        { name: 'कॉम्पोझिट होम लोन', desc: 'संयुक्त गृह कर्ज' }
      ] : [
        { name: 'Loan for purchase of land', desc: 'Purchase land for house construction' },
        { name: 'Loan for purchase of a house', desc: 'Purchase completed constructed house' },
        { name: 'Loan for construction of a house', desc: 'Build a new house' },
        { name: 'Home extension loan', desc: 'Extend existing house' },
        { name: 'Home conversion loan', desc: 'Convert existing loan' },
        { name: 'Home improvement loan', desc: 'Loan for house repairs' },
        { name: 'Balance Transfer Home Loan', desc: 'Transfer loan from other bank' },
        { name: 'NRI Home Loan', desc: 'Loan for Indians living abroad' },
        { name: 'Bridge Loan', desc: 'Temporary loan' },
        { name: 'Stamp Duty Loan', desc: 'Loan for stamp duty payment' },
        { name: 'Composite Home Loan', desc: 'Combined home loan' }
      ],
      eligibility: isMarathi ? [
        { title: 'नागरिकत्व', value: 'भारतीय नागरिक', icon: <FaIdCard /> },
        { title: 'क्रेडिट स्कोअर', value: '७५० किंवा त्याहून जास्त', icon: <FaRegChartBar /> },
        { title: 'वय मर्यादा', value: '१८ ते ७० वर्षे', icon: <FaUserCheck /> },
        { title: 'किमान उत्पन्न', value: '₹२५,०००/महिना', icon: <FaRupeeSign /> },
        { title: 'कामाचा अनुभव', value: 'किमान २ वर्षे', icon: <FaBusinessTime /> },
        { title: 'व्यवसाय कालावधी', value: 'स्वयंरोजगारासाठी किमान २ वर्षे', icon: <FaBusinessTime /> },
        { title: 'पात्रता', value: 'मालमत्तेच्या प्रकारावर आणि ठिकाणावर अवलंबून', icon: <GiHouseKeys /> }
      ] : [
        { title: 'Citizenship', value: 'Indian citizen', icon: <FaIdCard /> },
        { title: 'Credit Score', value: '750 or above', icon: <FaRegChartBar /> },
        { title: 'Age Limit', value: '18 to 70 years', icon: <FaUserCheck /> },
        { title: 'Minimum Income', value: '₹25,000/month', icon: <FaRupeeSign /> },
        { title: 'Work Experience', value: 'Minimum 2 years', icon: <FaBusinessTime /> },
        { title: 'Business Tenure', value: 'Minimum 2 years for self-employed', icon: <FaBusinessTime /> },
        { title: 'Eligibility', value: 'Depends on property type and location', icon: <GiHouseKeys /> }
      ],
      documents: isMarathi ? [
        'पूर्ण भरलेला गृहकर्ज अर्ज',
        'अर्ज व पासपोर्ट आकाराचे फोटो',
        'ओळख व रहिवासी पुरावा (आधार कार्ड / पॅन कार्ड / मतदार ओळखपत्र / ड्रायव्हिंग लायसन्स / बँक पासबुक / पासपोर्ट / जन्म प्रमाणपत्र / दहावी गुणपत्रक)',
        'मागील ६ महिन्यांचे बँक स्टेटमेंट',
        'प्रक्रिया शुल्कासाठी धनादेश (Cheque)',
        'टायटल कागदपत्रांची प्रत',
        'शेती जमीन असल्यास: शेती जमीन उतारा, पिकांचे तपशील दर्शवणारी कागदपत्रे',
        'व्यवसायासाठी: फॉर्म नंबर १६, मागील ३ वर्षांचे उत्पन्न प्रमाणपत्र, आयकर परतावा (ITR), मागील २ वर्षांतील घेतलेल्या कर्जाचा तपशील, मागील ३ वर्षांचे नफा-तोटा खाते व ताळेबंद, मागील ३ महिन्यांची वेतन पावती, कार, फिक्स्ड डिपॉझिट, एलआयसी पॉलिसी पेपर्स'
      ] : [
        'Duly filled home loan application form',
        'Application form with passport-size photographs',
        'Identity and address proof: Aadhaar Card, PAN Card, Voter ID, Driving License, Bank Passbook, Passport, Birth Certificate, 10th Mark Sheet (any one)',
        'Bank statement of the last 6 months',
        'Cheque for processing fee',
        'Copies of property title documents',
        'For agricultural land: Land ownership records, Documents showing crop details',
        'For business/self-employed: Form No. 16, Income certificates of the last 3 years, Income Tax Returns (ITR), Details of loans taken in the last 2 years, Profit & Loss Account and Balance Sheet of the last 3 years, Salary slips of the last 3 months, Documents of car, fixed deposits, LIC policy papers'
      ],
      interestRate: '8.4% - 9.5%',
      loanAmount: 'Up to 80% of total property cost',
      tenure: 'Up to 30 years',
      benefits: isMarathi ? [
        'टॅक्समधील सवलत',
        'कमी व्याजदर',
        'कर्ज परतफेडीसाठी मिळणारा जास्त कालावधी',
        'आगाऊ भरलेल्या रकमेसाठी दंड नसतो',
        'होम लोन सहज उपलब्ध',
        'होम लोनवरील व्याजदर सवलतीचे'
      ] : [
        'Tax benefits',
        'Lower interest rates',
        'Longer repayment tenure',
        'No penalty on prepayment of the loan',
        'Easy availability of home loans',
        'Concessional interest rates on home loans'
      ],
    },
    'vehicle-loan': {
      title: 'Vehicle Loan',
      marathiTitle: 'वाहन कर्ज',
      subtitle: 'Drive your dream vehicle',
      marathiSubtitle: 'तुमच्या स्वप्नांच्या वाहनासाठी कर्ज',
      color: 'from-red-600 to-pink-700',
      icon: <FaCar />,
      description: isMarathi ? [
        'चारचाकी वाहन खरेदीसाठी कर्ज मिळते',
        'वाहन घेण्यासाठी कंपनी नवीन तसेच जुनी (Second Hand) अशा दोन्ही वाहनांवर कर्ज उपलब्ध करून देते',
        'नवीन वाहन घेण्यासाठी साधारणतः १२% ते १५% व्याजदर असतो, तर जुन्या चारचाकी वाहनांसाठी १२.५०% ते १७.५०% इतका व्याजदर असतो',
        'वय १८ ते ६५ वर्षे, उत्पन्न, पगार व अनुभव या बाबींचा अभ्यास करून बँक वाहन कर्ज देते'
      ] : [
        'A vehicle loan is provided for the purchase of four-wheeler vehicles',
        'Loans are available for both new vehicles and used (second-hand) vehicles',
        'For new vehicles, the interest rate generally ranges between 12% to 15%, while for used vehicles it ranges between 12.5% to 17.5%',
        'Banks grant vehicle loans after considering factors such as age, income, salary, and work experience',
        'The eligible age for availing a vehicle loan is usually 18 to 65 years'
      ],
      eligibility: isMarathi ? [
        { title: 'वय मर्यादा', value: '१८ ते ६५ वर्षे', icon: <FaUserCheck /> },
        { title: 'उत्पन्न', value: 'वार्षिक उत्पन्नाच्या चार ते सहा पट', icon: <FaRegMoneyBillAlt /> },
        { title: 'कर्ज रक्कम', value: 'वाहनाच्या किमतीच्या साधारणतः ७५% पर्यंत', icon: <FaCar /> },
        { title: 'विशेष', value: 'काही बँका १००% फायनान्स देखील देतात', icon: <FaStar /> },
        { title: 'कामाचा अनुभव', value: 'किमान १ वर्षाचा अनुभव', icon: <FaBusinessTime /> },
        { title: 'ड्रायव्हिंग लायसन्स', value: 'वैध लायसन्स आवश्यक', icon: <FaIdCard /> },
        { title: 'रोजगार स्थिती', value: 'वेतनभोगी किंवा स्वयं-रोजगार', icon: <FaUserCheck /> },
        { title: 'निवासी पुरावा', value: 'स्थिर रहिवासी पुरावा आवश्यक', icon: <FaMapMarkerAlt /> }
      ] : [
        { title: 'Age Limit', value: '18 to 65 years', icon: <FaUserCheck /> },
        { title: 'Income', value: 'Four to six times annual income', icon: <FaRegMoneyBillAlt /> },
        { title: 'Loan Amount', value: 'Up to 75% of vehicle value', icon: <FaCar /> },
        { title: 'Special', value: 'Some banks offer 100% financing', icon: <FaStar /> },
        { title: 'Work Experience', value: 'Minimum 1 year experience', icon: <FaBusinessTime /> },
        { title: 'Driving License', value: 'Valid license required', icon: <FaIdCard /> },
        { title: 'Employment Status', value: 'Salaried or self-employed', icon: <FaUserCheck /> },
        { title: 'Residence Proof', value: 'Stable residence proof required', icon: <FaMapMarkerAlt /> }
      ],
      documents: isMarathi ? [
        'ओळखपत्र (आधार कार्ड, पासपोर्ट, ड्रायव्हिंग लायसन्स इ.)',
        'मतदान ओळखपत्र',
        'पत्त्याचा दाखला',
        'पासपोर्ट साईज फोटो',
        'गाडीची कागदपत्रे',
        'मागील तीन महिन्यांच्या सॅलरी स्लिप',
        'मागील सहा महिन्यांचे बँक स्टेटमेंट',
        'आयकर भरलेली पावती'
      ] : [
        'Identity proof (Aadhaar Card, Passport, Driving License, etc.)',
        'Voter ID card',
        'Address proof',
        'Passport-size photographs',
        'Vehicle-related documents',
        'Salary slips of the last three months',
        'Bank statement of the last six months',
        'Income tax paid receipt / ITR (if applicable)'
      ],
      expenses: isMarathi ? [
        'प्रोसेसिंग फी - ०.४% ते १% इतकी प्रोसेसिंग फी असू शकते',
        'मुद्रांक शुल्क व कागदपत्रांची फी',
        'काही बँक वाहन लोन फक्त पार्ट पेमेंट सुविधेसह उपलब्ध करून देतात',
        'काही बँक प्रीपेमेंटवर शुल्क आकारतात, तर काही बँक प्रीपेमेंट शुल्क घेत नाहीत'
      ] : [
        'Processing fee is charged by the bank',
        'Processing fees generally range from 0.4% to 1% of the loan amount',
        'Stamp duty and documentation charges may apply',
        'Some banks offer vehicle loans with a part-payment facility',
        'Certain banks charge prepayment penalties, while others do not'
      ],
      interestRate: '12% - 15% (higher for second-hand vehicles)',
      loanAmount: 'Up to 75% of vehicle value (some banks offer 100%)',
      tenure: '1-7 years',
      hypothecation: isMarathi ? [
        'हायपोथेकशन लेटर हे वाहन रजिस्ट्रेशन करणाऱ्या प्रादेशिक परिवहन अधिकाऱ्यांना (RTO) आवश्यक असते',
        'कर्ज पूर्णपणे फेडले जाईपर्यंत वाहनावर बँकेचा किंवा कंपनीचा अधिकार राहतो',
        'कर्ज पूर्ण फेडल्यानंतर बँक किंवा कंपनी NOC देते आणि वाहन पूर्णपणे आपल्या नावावर होते',
        'कर्ज फेडण्यास उशीर झाल्यास बँक किंवा कंपनी तुमची गाडी जप्त करू शकते'
      ] : [
        'A Hypothecation Letter is required by the Regional Transport Office (RTO) during vehicle registration',
        'Until the loan is fully repaid, the bank or finance company holds the rights over the vehicle',
        'After complete repayment of the loan, the bank issues an NOC, and full ownership of the vehicle is transferred to the borrower',
        'If loan repayment is delayed, the bank or finance company has the right to seize the vehicle'
      ],
      precautions: isMarathi ? [
        'लोन घेताना लोनवर दिलेले व्याज नीट तपासावे',
        'कागदपत्रे व्यवस्थित असल्यास केवळ एका आठवड्यात वाहन लोन मिळू शकते',
        'अनेकदा वाहन लोनसाठी विशेष ऑफर्स दिल्या जातात',
        'वाहन लोन घेताना वाहन शोरूम आणि बँक यांचा टाय-अप असतो'
      ] : [
        'Carefully check the interest rate before taking a vehicle loan',
        'If documents are complete, a vehicle loan can be sanctioned within one week',
        'Banks and dealers often offer special offers on vehicle loans',
        'Many vehicle loans are provided through tie-ups between vehicle showrooms and banks'
      ],
    },
    'gold-loan': {
      title: 'Gold Loan',
      marathiTitle: 'गोल्ड लोन',
      subtitle: 'Instant funds against your gold',
      marathiSubtitle: 'तुमच्या सोन्यावर त्वरित रक्कम',
      color: 'from-amber-500 to-yellow-600',
      icon: <GiGoldBar />,
      description: isMarathi ? [
        'किमान दस्तऐवजासहित सोने दागिने वर त्वरित कर्ज',
        'विमा कव्हरसहित सोने सुरक्षित ठेवण',
        'पारदर्शक सोने मूल्यांकन प्रक्रिया',
        'लवचबादी परत्याप पर्याय'
      ] : [
        'Quick loan against gold ornaments with minimal documentation',
        'Gold safe custody with insurance coverage',
        'Transparent gold valuation process',
        'Flexible repayment options'
      ],
      loanTypes: isMarathi ? [
        {
          name: 'गोल्ड लोन – ओव्हरड्राफ्ट (OD / CC)',
          interest: '१५% वार्षिक',
          amount: 'बँकेच्या नियमानुसार',
          tenure: '२४ महिने',
          features: ['एकदाच गोल्ड व्हॅल्यूएशन', 'फक्त वापरलेल्या रकमेवर व्याज', 'तिमाही व्याज आकारणी']
        },
        {
          name: 'बुलेट गोल्ड लोन',
          interest: '१५% वार्षिक',
          amount: 'बँकेच्या नियमानुसार',
          tenure: '१२ महिने',
          features: ['एकरकमी परतफेड', 'मुदत संपल्यानंतर परतफेड', 'तिमाही व्याज आकारणी']
        },
        {
          name: 'डोअर स्टेप (घरपोच) गोल्ड लोन',
          interest: 'सर्व योजना उपलब्ध',
          amount: 'बँकेच्या नियमानुसार',
          tenure: '१२-२४ महिने',
          features: ['घरपोच कर्ज सुविधा', 'फोन करून मागणी', 'सर्व गोल्ड लोन योजना']
        },
        {
          name: 'ई.एम.आय. (EMI) गोल्ड लोन',
          interest: '०.६९% मासिक',
          amount: 'बँकेच्या नियमानुसार',
          tenure: '१२ महिने',
          features: ['दरमहा हप्ता (मुदल + व्याज)', 'मासिक व्याज आकारणी', 'भरणे आवश्यक']
        },
        {
          name: 'ईझी गोल्ड लोन',
          interest: '०.९९% मासिक',
          amount: 'बँकेच्या नियमानुसार',
          tenure: '१२ महिने',
          features: ['दरमहा फक्त व्याज भरणे', 'मासिक व्याज आकारणी', 'भरणे आवश्यक']
        },
        {
          name: 'रेग्युलर गोल्ड लोन',
          interest: '०.८३% मासिक',
          amount: 'बँकेच्या नियमानुसार',
          tenure: '१२ महिने',
          features: ['दरमहा व्याज भरणे', 'मासिक व्याज आकारणी', 'भरणे आवश्यक']
        }
      ] : [
        {
          name: 'Gold Loan – Overdraft (OD / CC)',
          interest: '15% per annum',
          amount: 'As per bank norms',
          tenure: '24 months',
          features: ['One-time gold valuation', 'Interest only on used amount', 'Quarterly interest calculation']
        },
        {
          name: 'Bullet Gold Loan',
          interest: '15% per annum',
          amount: 'As per bank norms',
          tenure: '12 months',
          features: ['Lump-sum repayment at end', 'Loan tenure: 12 months', 'Quarterly interest calculation']
        },
        {
          name: 'Doorstep Gold Loan',
          interest: 'All schemes available',
          amount: 'As per bank norms',
          tenure: '12-24 months',
          features: ['Home service facility', 'Loan through phone call', 'All gold loan schemes']
        },
        {
          name: 'EMI Gold Loan',
          interest: '0.69% monthly',
          amount: 'As per bank norms',
          tenure: '12 months',
          features: ['Monthly EMI (principal + interest)', 'Monthly interest calculation', 'Compulsory payment']
        },
        {
          name: 'Easy Gold Loan',
          interest: '0.99% monthly',
          amount: 'As per bank norms',
          tenure: '12 months',
          features: ['Monthly interest payment only', 'Monthly interest calculation', 'Compulsory payment']
        },
        {
          name: 'Regular Gold Loan',
          interest: '0.83% monthly',
          amount: 'As per bank norms',
          tenure: '12 months',
          features: ['Monthly interest payment only', 'Monthly interest calculation', 'Compulsory payment']
        }
      ],
      eligibility: isMarathi ? [
        { title: 'वय मर्यादा', value: '१८ ते ७५ वर्ष', icon: <FaUserCheck /> },
        { title: 'सोन्याची शुद्धता', value: '१८के किंवा अधिक', icon: <GiGoldBar /> },
        { title: 'दस्तऐवजीकरण', value: 'किमान केवायसी', icon: <FaFileAlt /> },
        { title: 'सोने मालकी', value: 'आवश्यक', icon: <FaShieldAlt /> }
      ] : [
        { title: 'Age Limit', value: '18 to 75 years', icon: <FaUserCheck /> },
        { title: 'Gold Purity', value: '18K or above', icon: <GiGoldBar /> },
        { title: 'Documentation', value: 'Minimal KYC', icon: <FaFileAlt /> },
        { title: 'Gold Ownership', value: 'Required', icon: <FaShieldAlt /> }
      ],
      benefits: isMarathi ? [
        '२ तासात त्वरित मंजूरी',
        'किमान दस्तऐवज आवश्यक',
        'विमासहित सुरक्षित सोने ठेवण',
        'पूर्वभरतन शुल्क नाहीत',
        'पारदर्शक सोने मूल्यांकन'
      ] : [
        'Quick approval within 2 hours',
        'Minimal documentation required',
        'Safe gold storage with insurance',
        'No prepayment charges',
        'Transparent gold valuation'
      ],
      note: isMarathi ? [
        'प्रति तोळा कर्ज रक्कम व व्याजदर बँक / कंपनीनुसार बदलू शकतात',
        'कर्ज देताना सोन्याची शुद्धता व वजन तपासले जाते'
      ] : [
        'Loan amount per tola and interest rates may vary as per bank/company policy',
        'Gold purity and weight are considered during gold valuation'
      ],
      process: isMarathi ? [
        'प्रमाणित मूल्यांकनकाराकडून सोने मूल्यांकन',
        'मूल्यांकनावर आधारित कर्ज मंजूरी',
        'सुरक्षित तिजोरीत सोने ठेवण',
        'दस्तऐवजीकरण आणि वितरण',
        'पूर्ण परत्यापावर सोने परत करणे'
      ] : [
        'Gold valuation by certified appraiser',
        'Loan sanction based on valuation',
        'Gold storage in secure vault',
        'Documentation and disbursement',
        'Gold return on full repayment'
      ]
    },
    'women-loan': {
      title: 'Women Savings Loan Scheme',
      marathiTitle: 'महिला बचत कर्ज योजना',
      subtitle: 'Empowering women through financial independence',
      marathiSubtitle: 'आर्थिक स्वावलंबनाद्वारे महिलांना सशक्त बनवणे',
      color: 'from-pink-600 to-rose-700',
      icon: <FaHeart />,
      features: isMarathi ? [
        'किमान ५ महिला आणि जास्तीत जास्त १० महिलांचा गट आवश्यक',
        'प्रत्येक महिलेला ₹40,000/- पर्यंत कर्ज दिले जाते',
        'कर्जाची मुदत २ वर्षे',
        'दरमहा हप्त्यांमध्ये परतफेड करावी लागते',
        'मासिक व्याज आकारणी केली जाते',
        'कर्जासाठी कर्ज सुरक्षा निधी लागू असतो'
      ] : [
        'A group of minimum 5 women and maximum 10 women is required',
        'Each woman is eligible to receive a loan of up to ₹40,000/-',
        'The loan tenure is 2 years',
        'Loan repayment is done through monthly installments',
        'Monthly interest calculation is applicable',
        'A Loan Security Fund is applicable under this scheme'
      ],
      objectives: isMarathi ? [
        'महिलांना स्वावलंबी बनवणे',
        'महिलांना लघुउद्योग / व्यवसाय सुरू करण्यासाठी आर्थिक मदत देणे',
        'महिलांमध्ये बचतीची सवय वाढवणे',
        'स्वयं-सहायता गटांमार्फत महिलांचे आर्थिक सक्षमीकरण करणे'
      ] : [
        'To empower women economically',
        'To provide financial assistance for starting small businesses or self-employment activities',
        'To encourage the habit of saving among women',
        'To promote financial inclusion through Self-Help Groups (SHGs)'
      ],
      eligibility: isMarathi ? [
        { title: 'गट आवश्यकता', value: 'किमान ५ ते जास्त १० महिला', icon: <FaUserFriends /> },
        { title: 'वैयक्तिक कर्ज', value: 'प्रति महिला ₹40,000/- पर्यंत', icon: <FaRupeeSign /> },
        { title: 'कर्ज मुदत', value: '२ वर्षे', icon: <FaCalendarAlt /> },
        { title: 'परतफेड', value: 'दरमहा हप्ते', icon: <FaRegMoneyBillAlt /> },
        { title: 'व्याज', value: 'मासिक आकारणी', icon: <FaChartLine /> },
        { title: 'सुरक्षा', value: 'कर्ज सुरक्षा निधी', icon: <FaShieldAlt /> }
      ] : [
        { title: 'Group Requirement', value: 'Minimum 5 to maximum 10 women', icon: <FaUserFriends /> },
        { title: 'Individual Loan', value: 'Up to ₹40,000/- per woman', icon: <FaRupeeSign /> },
        { title: 'Loan Tenure', value: '2 years', icon: <FaCalendarAlt /> },
        { title: 'Repayment', value: 'Monthly installments', icon: <FaRegMoneyBillAlt /> },
        { title: 'Interest', value: 'Monthly calculation', icon: <FaChartLine /> },
        { title: 'Security', value: 'Loan Security Fund', icon: <FaShieldAlt /> }
      ],
      note: isMarathi ? [
        'कर्जाची रक्कम, व्याजदर व अटी संस्था / बँकेनुसार बदलू शकतात',
        'गटातील सर्व महिलांची संयुक्त जबाबदारी असते'
      ] : [
        'Loan amount, interest rates, and terms may vary according to the bank or financial institution',
        'All members of the group share joint responsibility for loan repayment'
      ],
      interestRate: 'As per bank norms',
      loanAmount: 'Up to ₹40,000/- per woman',
      tenure: '2 years',
      benefits: isMarathi ? [
        'महिलांना आर्थिक सशक्तीकरण',
        'लघुउद्योगासाठी सहाय्य',
        'बचतीची सवय वाढवणे',
        'स्वयं-सहायता गटांचा विकास',
        'कमी व्याज दर',
        'संयुक्त जबाबदारी'
      ] : [
        'Economic empowerment of women',
        'Support for small businesses',
        'Encourages saving habits',
        'Development of Self-Help Groups',
        'Lower interest rates',
        'Joint responsibility'
      ],
    }
  };

  // Common documents for all loans
  const commonDocuments = isMarathi ? [
    { name: 'आधार कार्ड', icon: <FaIdCard />, mandatory: true },
    { name: 'पॅन कार्ड', icon: <FaRegCreditCard />, mandatory: true },
    { name: 'पत्ता पुरावा', icon: <FaMapMarkerAlt />, mandatory: true },
    { name: 'पासपोर्ट आकार फोटो', icon: <FaUserCheck />, mandatory: true },
    { name: 'बँक विधाने (६ महिने)', icon: <FaRegFileAlt />, mandatory: true },
    { name: 'उत्पन्न पुरावा', icon: <FaRegMoneyBillAlt />, mandatory: true },
    { name: 'मालमत्ता दस्तऐवज', icon: <FaLandmark />, mandatory: false },
    { name: 'वाहन दस्तऐवज', icon: <FaCar />, mandatory: false },
    { name: 'रोजगार पुरावा', icon: <FaBusinessTime />, mandatory: false },
    { name: 'व्यवसाय पुरावा', icon: <FaRegChartBar />, mandatory: false }
  ] : [
    { name: 'Aadhaar Card', icon: <FaIdCard />, mandatory: true },
    { name: 'PAN Card', icon: <FaRegCreditCard />, mandatory: true },
    { name: 'Address Proof', icon: <FaMapMarkerAlt />, mandatory: true },
    { name: 'Passport Size Photo', icon: <FaUserCheck />, mandatory: true },
    { name: 'Bank Statements (6 months)', icon: <FaRegFileAlt />, mandatory: true },
    { name: 'Income Proof', icon: <FaRegMoneyBillAlt />, mandatory: true },
    { name: 'Property Documents', icon: <FaLandmark />, mandatory: false },
    { name: 'Vehicle Documents', icon: <FaCar />, mandatory: false },
    { name: 'Employment Proof', icon: <FaBusinessTime />, mandatory: false },
    { name: 'Business Proof', icon: <FaRegChartBar />, mandatory: false }
  ];

  // Translations
  const translations = {
    en: {
      // Breadcrumb
      home: 'Home',
      loans: 'Loans',
      
      // Hero Section
      pageTitle: 'Loan Products',
      pageSubtitle: 'Financial support for every personal and business need',
      loanTypes: 'Loan Types',
      lowestInterest: 'Lowest Interest',
      maxLoan: 'Max Loan',
      maxTenure: 'Max Tenure',
      
      // Navigation
      personalLoan: 'Personal Loan',
      mortgageLoan: 'Mortgage Loan',
      homeLoan: 'Home Loan',
      vehicleLoan: 'Vehicle Loan',
      goldLoan: 'Gold Loan',
      womenLoan: 'Women Loan',
      
      // Section Headers
      description: 'Description',
      features: 'Features',
      eligibility: 'Eligibility',
      documents: 'Documents',
      benefits: 'Benefits',
      disadvantages: 'Disadvantages',
      interestRate: 'Interest Rate',
      loanAmount: 'Loan Amount',
      tenure: 'Tenure',
      
      // Loan Details
      loanDetails: 'Loan Details',
      
      // Credit Score
      creditScoreInformation: 'Credit Score Information',
      idealCreditScore: 'Ideal Credit Score',
      
      // Types and Categories
      typesOfMortgageLoans: 'Types of Mortgage Loans',
      vehicleTypes: 'Vehicle Types',
      purpose: 'Purpose',
      specialFeaturesForWomen: 'Special Features for Women',
      coveredExpenses: 'Covered Expenses',
      womenLoanTypes: 'Women Loan Types',
      thingsToConsider: 'Things to Consider',
      
      // Common Documents
      commonLoanDocuments: 'Common Loan Documents',
      documentsRequired: 'Documents required for all loan applications',
      homeLoanDocumentsRequired: 'Documents Required for Home Loan',
      typesOfHomeLoans: 'Types of Home Loans',
      aboutVehicleLoan: 'About Vehicle Loan',
      vehicleLoanDocumentsRequired: 'Documents Required for Vehicle Loan',
      vehicleLoanExpenses: 'Expenses Involved in Vehicle Loan',
      hypothecation: 'What is Hypothecation',
      precautionsWhileTakingLoan: 'Precautions While Taking a Vehicle Loan',
      
      note: 'Note',
      keyFeatures: 'Key Features of the Scheme',
      objectivesOfTheScheme: 'Objectives of the Scheme',
      showAllDocuments: 'Show All Documents',
      showLessDocuments: 'Show Less Documents',
      mandatory: 'Mandatory',
      asRequired: 'As Required',
      
      // CTA Section
      applyForRightLoan: 'Apply for the Right',
      loanToday: 'Loan Today',
      getPersonalizedSolutions: 'Get personalized loan solutions with minimal documentation and quick approval',
      applyNow: 'Apply Now',
      visitNearestBranch: 'Visit Nearest Branch',
      approvalTime: 'Approval Time',
      transparent: 'Transparent',
      processingFee: 'Processing Fee',
      
      // Additional Labels
      interest: 'Interest',
      amount: 'Amount',
      featuresLabel: 'Features',
      maxAmount: 'Max Amount',
      
      // Loan specific content
      forEducationTravelMedical: 'For education, travel, medical expenses, marriage, etc.',
      forEducationTravelMedicalMr: 'शिक्षण, प्रवास, वैद्यकीय खर्च, लग्न, इत्यादीसाठी',
      
      // Personal Loan specific
      unsecuredLoan: 'Unsecured loan for personal needs without collateral requirement',
      quickDisbursal: 'Quick disbursal within 24-48 hours of approval',
      flexibleEndUse: 'Flexible end-use with no restrictions on usage',
      perfectForEmergencies: 'Perfect for emergencies and planned expenses',
      
      // Eligibility criteria
      citizenship: 'Citizenship',
      indianCitizen: 'Indian citizen',
      ageRange: 'Age Range',
      to60Years: '21 to 60 years',
      minimumIncome: 'Minimum Income',
      perMonthSalaried: '₹15,000/month (salaried)',
      perMonthSelfEmployed: '₹45,000/month (self-employed)',
      businessIncome: 'Business Income',
      
      // Credit Score
      creditScore: 'Credit Score',
      ideal: '750+',
      creditScoreDescription: 'Good credit score helps in faster loan approval',
      poor: 'Poor',
      fair: 'Fair',
      good: 'Good',
      excellent: 'Excellent',
      
      // Mortgage Loan specific
      lowerInterest: 'Lower interest compared to other loans',
      longRepayment: 'Long repayment tenure (up to 20 years)',
      higherLoanAmount: 'Higher loan amount available',
      flexibleEndUseOptions: 'Flexible end-use options',
      secureLoan: 'Secure loan against property with lower interest rates',
      loanAmountUpTo: 'Loan amount up to 60-70% of property value',
      suitableForBusiness: 'Suitable for business expansion, education, medical needs',
      
      // Mortgage Loan Types
      fixedMortgageLoan: 'Fixed Mortgage Loan',
      fixedInterestRate: 'Fixed interest rate for entire tenure',
      adjustableMortgageLoan: 'Adjustable Mortgage Loan',
      variableInterestRate: 'Variable interest rate as per market',
      simpleMortgage: 'Simple Mortgage',
      basicMortgage: 'Basic mortgage without registration',
      registeredMortgage: 'Registered Mortgage',
      formallyRegistered: 'Formally registered with authorities',
      conditionalSaleMortgage: 'Conditional Sale Mortgage',
      conditionalPropertyTransfer: 'Conditional property transfer',
      usufructuaryMortgage: 'Usufructuary Mortgage',
      lenderEnjoysProperty: 'Lender enjoys property benefits',
      
      // Home Loan specific
      purchaseHouseFlat: 'Purchase house/flat',
      constructHouse: 'Construct house',
      homeExtensionRenovation: 'Home extension/renovation',
      homeImprovement: 'Home improvement',
      balanceTransfer: 'Balance transfer from other banks',
      
      // Vehicle Loan specific
      loanForTwoWheeler: 'Loan for two-wheeler and four-wheeler',
      newAndSecondHand: 'New and second-hand vehicles',
      flexibleEmiOptions: 'Flexible EMI options',
      quickProcessing: 'Quick processing within 24 hours',
      onRoadFunding: '100% on-road funding',
      
      // Gold Loan specific
      instantFunds: 'Instant funds against your gold',
      minimalDocumentation: 'Quick loan against gold ornaments with minimal documentation',
      goldSafeCustody: 'Gold safe custody with insurance coverage',
      transparentValuation: 'Transparent gold valuation process',
      flexibleRepayment: 'Flexible repayment options',
      noPrepaymentCharges: 'No prepayment charges',
      
      // Gold Loan Types
      emiGoldLoan: 'EMI Gold Loan',
      monthlyInterestPayment: 'EMI + interest payment',
      fixedMonthlyInstallments: 'Fixed monthly installments',
      suitableForSalaried: 'Suitable for salaried',
      easyGoldLoan: 'Easy Gold Loan',
      monthlyInterestOnly: 'Monthly interest payment',
      principalRepaymentAtEnd: 'Principal repayment at end',
      flexibleForBusiness: 'Flexible for business',
      regularGoldLoan: 'Regular Gold Loan',
      goldReleaseOnFullPayment: 'Gold release on full payment',
      traditionalOption: 'Traditional option',
      
      // Women Loan specific
      specialLoanSchemes: 'Special loan schemes designed exclusively for women',
      lowerInterestRates: 'Lower interest rates compared to standard loans',
      flexibleRepaymentOptions: 'Flexible repayment options tailored for women',
      quickApprovalProcess: 'Quick approval process with minimal documentation',
      taxBenefits: 'Tax benefits under Section 80E',
      
      // Document section
      commonDocuments: 'Common Documents for All Loans',
      optional: 'Optional',
      aadhaarCard: 'Aadhaar Card',
      panCard: 'PAN Card',
      addressProof: 'Address Proof',
      passportSizePhoto: 'Passport Size Photo',
      bankStatements: 'Bank Statements (6 months)',
      incomeProof: 'Income Proof',
      propertyDocuments: 'Property Documents',
      vehicleDocuments: 'Vehicle Documents',
      employmentProof: 'Employment Proof',
      businessProof: 'Business Proof',
      
      // Stats
      loanTypesAvailable: 'Loan Types Available',
      processingTime: 'Processing Time',
      approvalRate: 'Approval Rate'
    },
    mr: {
      // Breadcrumb
      home: 'होम',
      loans: 'कर्ज',
      
      // Hero Section
      pageTitle: 'कर्ज उत्पादने',
      pageSubtitle: 'प्रत्येक वैयक्तिक आणि व्यवसायाच्या गरजांसाठी आर्थिक सहाय्य',
      loanTypes: 'कर्ज प्रकार',
      lowestInterest: 'किमान व्याज',
      maxLoan: 'कमाल कर्ज',
      maxTenure: 'कमाल कालावधी',
      
      // Navigation
      personalLoan: 'वैयक्तिक कर्ज',
      mortgageLoan: 'तारण कर्ज',
      homeLoan: 'गृह कर्ज',
      vehicleLoan: 'वाहन कर्ज',
      goldLoan: 'गोल्ड लोन',
      womenLoan: 'महिला कर्ज',
      
      // Common sections
      loanAmount: 'कर्ज रक्कम',
      tenure: 'कालावधी',
      
      // Loan specific content
      
      // Personal Loan specific
      unsecuredLoan: 'संपत्रेक आवश्यक नसलेले वैयक्तिक गरजांसाठी कर्ज',
      quickDisbursal: 'मंजूरीनंतर २४-४८ तासात त्वरित वितरण',
      flexibleEndUse: 'वापरावर कोणत्या निर्बंधांसहित लवचबादी वापर',
      perfectForEmergencies: 'आणीतकारी आणि नियोजित खर्चांसाठी उत्तम',
      
      // Eligibility criteria
      citizenship: 'नागरिकत्व',
      indianCitizen: 'भारतीय नागरिक',
      ageRange: 'वय श्रेणी',
      to60Years: '२१ ते ६० वर्ष',
      minimumIncome: 'किमान उत्पन्न',
      perMonthSalaried: '₹१५,०००/महिना (वेतनभोगी)',
      perMonthSelfEmployed: '₹४५,०००/महिना (स्वयं-रोजगार)',
      businessIncome: 'व्यवसाय उत्पन्न',
      
      // Credit Score
      creditScore: 'क्रेडिट स्कोअर',
      ideal: '७५०+',
      creditScoreDescription: 'चांगला क्रेडिट स्कोअर कर्ज मंजूरीत करण्यास मदत करतो',
      poor: 'कमचा',
      fair: 'चांगला',
      good: 'चांगला',
      excellent: 'उत्कृष्ट',
      
      // Mortgage Loan specific
      lowerInterest: 'इतर कर्जांपेक्षा कमी व्याज दर',
      longRepayment: 'दीर्घ कर्ज परत्याप कालावधी (२० वर्षापर्यंत)',
      higherLoanAmount: 'अधिक कर्ज रक्कम उपलब्ध',
      flexibleEndUseOptions: 'लवचबादी वापराच्या लवचबादी पर्याय',
      secureLoan: 'मालमत्तेच्या तारणावर कमी व्याज दरासहित सुरक्षित कर्ज',
      loanAmountUpTo: 'मालमत्तेच्या किंमतीच्या ६०-७०% पर्यंत कर्ज रक्कम',
      suitableForBusiness: 'व्यवसाय विस्तार, शिक्षण, वैद्यकीय गरजांसाठी उपयुक्त',
      
      // Mortgage Loan Types
      typesOfMortgageLoans: 'तारण कर्ज प्रकार',
      fixedMortgageLoan: 'निश्चित तारण कर्ज',
      fixedInterestRate: 'संपूर्ण कालावधीसाठी निश्चित व्याज दर',
      adjustableMortgageLoan: 'समायोज्य तारण कर्ज',
      variableInterestRate: 'बाजारप्रमाणे बदलता व्याज दर',
      simpleMortgage: 'सोपे तारण कर्ज',
      basicMortgage: 'नोंदणीशिवाय तारण कर्ज',
      registeredMortgage: 'नोंदणीकृत तारण कर्ज',
      formallyRegistered: 'अधिकारींसहित औपचारिकपणे नोंदणीकृत',
      conditionalSaleMortgage: 'अटी विक्री तारण कर्ज',
      conditionalPropertyTransfer: 'अटी मालमत्ता हस्तांतरण',
      usufructuaryMortgage: 'उसुफ्रक्च्युअरी तारण कर्ज',
      lenderEnjoysProperty: 'देयदार मालमत्तेचे फायदे आनंदतो',
      
      // Home Loan specific
      purchaseHouseFlat: 'घर/फ्लॅट खरेदाना',
      constructHouse: 'घर बांधणे',
      homeExtensionRenovation: 'घराचा विस्तार/नूतनीकरण',
      homeImprovement: 'घर सुधार',
      balanceTransfer: 'इतर बँकांकडून शिल्ड बदलणे',
      
      // Vehicle Loan specific
      loanForTwoWheeler: 'दोन चाकी आणि चार चाकी वाहनांसाठी कर्ज',
      newAndSecondHand: 'नवीन आणि वापरलेली वाहने',
      flexibleEmiOptions: 'लवचबादी ईएमआय पर्याय',
      quickProcessing: '२४ तासात त्वरित प्रक्रिया',
      onRoadFunding: '१०% रोड फंडिंग',
      
      // Gold Loan specific
      instantFunds: 'तुमच्या सोन्यावर त्वरित रक्कम',
      minimalDocumentation: 'किमाल दस्तऐवजासहित सोने दागिने वर त्वरित कर्ज',
      goldSafeCustody: 'विमा कव्हरसहित सोने सुरक्षित ठेवण',
      transparentValuation: 'पारदर्शक सोने मूल्यांकन प्रक्रिया',
      flexibleRepayment: 'लवचबादी पर्याय',
      noPrepaymentCharges: 'पूर्वभरतन शुल्क नाहीत',
      
      // Gold Loan Types
      emiGoldLoan: 'ईएमआय सोने कर्ज',
      monthlyInterestPayment: 'ईएमआय + व्याज भरता',
      fixedMonthlyInstallments: 'निश्चित मासिक हप्ते',
      suitableForSalaried: 'वेतनभोगींसाठी उपयुक्त',
      easyGoldLoan: 'सोपे सोने कर्ज',
      monthlyInterestOnly: 'फक्त मासिक व्याज भरता',
      principalRepaymentAtEnd: 'शेवटीवर मुद्दत भरता',
      flexibleForBusiness: 'व्यवसायासाठी लवचबादी',
      regularGoldLoan: 'नियमित सोने कर्ज',
      goldReleaseOnFullPayment: 'पूर्ण भरतावर सोने सोडणे',
      traditionalOption: 'पारंपरिक पर्याय',
      
      // Women Loan specific
      specialLoanSchemes: 'फक्त महिलांसाठी विशेष रचीलेले कर्ज योजना',
      lowerInterestRates: 'मानक कर्जांपेक्षा कमी व्याज दर',
      flexibleRepaymentOptions: 'महिलांसाठी तयारलेली लवचबादी पर्याय',
      quickApprovalProcess: 'किमाल दस्तऐवजासहित त्वरित मंजूर प्रक्रिया',
      taxBenefits: 'कलम ८०ई अंतर्गत कर कर फायदे',
      
      // Section Headers
      description: 'वर्णन',
      features: 'वैशिष्ट्ये',
      eligibility: 'पात्रता',
      documents: 'दस्तऐवज',
      benefits: 'फायदे',
      disadvantages: 'तोटे',
      interestRate: 'व्याज दर',
      
      // Loan Details
      
      // Credit Score
      creditScoreInformation: 'क्रेडिट स्कोअर माहिती',
      idealCreditScore: 'आदर्श क्रेडिट स्कोअर',
      
      // Types and Categories
      goldLoanTypes: 'गोल्ड लोन प्रकार',
      
      // Common Documents
      commonLoanDocuments: 'सामान्य कर्ज दस्तऐवज',
      documentsRequired: 'सर्व कर्ज अर्जांसाठी आवश्यक दस्तऐवज',
      homeLoanDocumentsRequired: 'होम लोनसाठी लागणारी कागदपत्रे',
      typesOfHomeLoans: 'होम लोनचे प्रकार',
      aboutVehicleLoan: 'वाहन कर्जाबाबत माहिती',
      vehicleLoanDocumentsRequired: 'वाहन कर्ज घेण्यासाठी लागणारी कागदपत्रे',
      vehicleLoanExpenses: 'वाहन लोन घेताना येणारे खर्च',
      hypothecation: 'हायपोथेकशन म्हणजे काय',
      precautionsWhileTakingLoan: 'वाहन लोन घेताना घ्यावयाची काळजी',
      
      note: 'टीप',
      keyFeatures: 'योजनेची वैशिष्ट्ये',
      objectivesOfTheScheme: 'योजनेचा उद्देश',
      showAllDocuments: 'सर्व दस्तऐवज दाखवा',
      showLessDocuments: 'कमी दस्तऐवज दाखवा',
      mandatory: 'अनिवार्य',
      asRequired: 'आवश्यक तितके',
      
      // CTA Section
      applyForRightLoan: 'योग्य कर्जासाठी आज अर्ज करा',
      getPersonalizedSolutions: 'किमान दस्तऐवज आणि त्वरित मंजुरीसह वैयक्तिकृत कर्ज उपाय मिळवा',
      applyNow: 'आता अर्ज करा',
      visitNearestBranch: 'जवळच्या शाखेला भेट द्या',
      approvalTime: 'मंजूरी वेळ',
      transparent: 'पारदर्शक',
      processingFee: 'प्रक्रिया शुल्क',
      
      // Additional Labels
      interest: 'व्याज',
      amount: 'रक्कम',
      featuresLabel: 'वैशिष्ट्ये',
      maxAmount: 'कमाल रक्कम'
    }
  };

  const t = translations[language];

  // Loan navigation items
  const loanNavItems = [
    { id: 'personal-loan', label: t.personalLoan, marathi: t.personalLoan, icon: <FaHandHoldingUsd /> },
    { id: 'mortgage-loan', label: t.mortgageLoan, marathi: t.mortgageLoan, icon: <FaBuilding /> },
    { id: 'home-loan', label: t.homeLoan, marathi: t.homeLoan, icon: <GiHouseKeys /> },
    { id: 'vehicle-loan', label: t.vehicleLoan, marathi: t.vehicleLoan, icon: <FaCar /> },
    { id: 'gold-loan', label: t.goldLoan, marathi: t.goldLoan, icon: <GiGoldBar /> },
    { id: 'women-loan', label: t.womenLoan, marathi: t.womenLoan, icon: <FaHeart /> }
  ];
  const scrollToLoan = (loanId) => {
    const element = document.getElementById(loanId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveLoan(loanId);
    }
  };
  // Handle hash-based navigation
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    const hash = location.hash.replace('#', '');
    if (hash && loanData[hash]) {
      setActiveLoan(hash);
      setTimeout(() => scrollToLoan(hash), 100);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.hash]);

  return (
    <div className="font-sans bg-gradient-to-b from-gray-50 to-white min-h-screen">
      {/* 1. Hero Banner Section */}
      <section className="relative h-[300px] sm:h-[350px] md:h-[400px] lg:h-[450px] overflow-hidden bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900">
        <div className="relative h-full flex flex-col justify-center px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto w-full">
            {/* Breadcrumb */}
            <nav className="flex items-center text-blue-100 text-xs sm:text-sm mb-4 sm:mb-6 lg:mb-8">
              <a href="/" className="flex items-center hover:text-white transition-colors">
                <FaHome className="mr-1 sm:mr-2 text-sm sm:text-base" />
                <span className="hidden xs:inline">{t.home}</span>
                <span className="xs:hidden">{t.home.slice(0, 3)}.</span>
              </a>
              <FaChevronRight className="mx-1 sm:mx-2 opacity-50 text-xs sm:text-sm" />
              <span className="font-semibold text-white text-xs sm:text-sm">{t.loans}</span>
            </nav>

            {/* Main Heading */}
            <div className="mb-6 sm:mb-8 lg:mb-10">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-3 sm:mb-4 lg:mb-6 leading-tight">
                {t.pageTitle}
              </h1>
              
              <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-blue-100 max-w-3xl mb-4 sm:mb-6 lg:mb-8 leading-relaxed">
                {t.pageSubtitle}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Sticky Loan Navigation */}
      <div className="sticky top-0 z-50 bg-white shadow-lg border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
          <div className="flex overflow-x-auto py-3 sm:py-4 space-x-2 sm:space-x-3 lg:space-x-4 scrollbar-hide">
            {loanNavItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToLoan(item.id)}
                className={`flex items-center px-3 sm:px-4 lg:px-6 py-2 sm:py-3 rounded-xl whitespace-nowrap transition-all duration-300 min-w-fit ${
                  activeLoan === item.id
                    ? `bg-gradient-to-r ${loanData[item.id]?.color || 'from-blue-600 to-indigo-700'} text-white shadow-lg transform -translate-y-0.5`
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <span className="mr-2 sm:mr-3 text-lg sm:text-xl">{item.icon}</span>
                <div className="text-left">
                  <div className="font-medium text-xs sm:text-sm lg:text-base">{item.label}</div>
                  <div className="text-xs opacity-90 hidden sm:block">{item.marathi}</div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

    
  <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8 py-8 sm:py-10 lg:py-12">
        <div className="grid grid-cols-1 gap-6 sm:gap-8">
          {/* Main Content - Loan Details */}
          <div className="col-span-1">
            {/* Loan Sections */}
            {loanNavItems.map((navItem) => (
              <section 
                key={navItem.id} 
                id={navItem.id} 
                className={`scroll-mt-20 sm:scroll-mt-24 lg:scroll-mt-28 mb-8 sm:mb-12 lg:mb-16 ${expandedLoan && expandedLoan !== navItem.id ? 'hidden lg:block' : ''}`}
               >
                <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg sm:shadow-xl overflow-hidden border border-gray-200">
                  {/* Loan Header */}
                  <div className={`bg-gradient-to-r ${loanData[navItem.id].color} p-4 sm:p-6 lg:p-8 text-white`}>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center mb-2 sm:mb-3">
                          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-white/20 flex items-center justify-center mr-3 sm:mr-4">
                            <span className="text-lg sm:text-xl lg:text-2xl">{loanData[navItem.id].icon}</span>
                          </div>
                          <div>
                            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold">{loanData[navItem.id].title}</h2>
                            <p className="text-blue-100 text-sm sm:text-base">{loanData[navItem.id].marathiTitle}</p>
                          </div>
                        </div>
                        <p className="text-sm sm:text-base opacity-90">{loanData[navItem.id].subtitle}</p>
                        <p className="text-xs sm:text-sm opacity-80 mt-1">{loanData[navItem.id].marathiSubtitle}</p>
                      </div>
                    </div>
                  </div>

                  {/* Loan Content */}
                  <div className="p-4 sm:p-6 lg:p-8">
                    {/* Two Column Layout */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
                      {/* Left Column */}
                      <div>
                        {/* Description */}
                        {loanData[navItem.id].description && (
                          <div className="mb-6 sm:mb-8">
                            <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-3 sm:mb-4 flex items-center">
                              <FaInfoCircle className="text-blue-600 mr-2 sm:mr-3 text-sm sm:text-base" />
                              {t.description}
                            </h3>
                            <ul className="space-y-2 sm:space-y-3">
                              {loanData[navItem.id].description.map((desc, idx) => (
                                <li key={idx} className="flex items-start">
                                  <FaCheckCircle className="text-green-500 mt-0.5 sm:mt-1 mr-2 sm:mr-3 flex-shrink-0 text-sm sm:text-base" />
                                  <span className="text-gray-700 text-sm sm:text-base leading-relaxed">{desc}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {/* Personal Loan Detailed Information */}
                        {navItem.id === 'personal-loan' && (
                          <div className="mb-6 sm:mb-8">
                            <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-3 sm:mb-4 flex items-center">
                              <FaHandHoldingUsd className="text-blue-600 mr-2 sm:mr-3 text-sm sm:text-base" />
                              {isMarathi ? 'वैयक्तिक कर्जाबद्दल माहिती' : 'Personal Loan Information'}
                            </h3>
                            <div className="space-y-3 sm:space-y-4">
                              <div className="bg-blue-50 p-3 sm:p-4 rounded-lg">
                                <h4 className="font-semibold text-gray-800 mb-2 text-sm sm:text-base">
                                  {isMarathi ? 'वैयक्तिक कर्ज म्हणजे काय?' : 'What is a Personal Loan?'}
                                </h4>
                                <p className="text-gray-700 text-xs sm:text-sm leading-relaxed">
                                  {isMarathi 
                                    ? 'लग्न, शिक्षण, प्रवास, वैद्यकीय खर्च, गॅजेट्सची खरेदी इत्यादी कोणत्याही वैयक्तिक गरजांसाठी सामान्य कर्ज (पर्सनल लोन) घेतले जाते.'
                                    : 'A personal loan is taken to meet any personal financial needs such as marriage, education, travel, medical expenses, or purchase of gadgets, etc.'
                                  }
                                </p>
                              </div>

                              <div className="bg-green-50 p-3 sm:p-4 rounded-lg">
                                <h4 className="font-semibold text-gray-800 mb-2 text-sm sm:text-base">
                                  {isMarathi ? 'पात्रता मानदंड' : 'Eligibility Criteria'}
                                </h4>
                                <ul className="space-y-1 sm:space-y-2">
                                  <li className="flex items-start">
                                    <FaCheckCircle className="text-green-500 mt-0.5 sm:mt-1 mr-2 sm:mr-3 flex-shrink-0 text-xs sm:text-sm" />
                                    <span className="text-gray-700 text-xs sm:text-sm">
                                      {isMarathi ? 'अर्जदार भारतीय नागरिक असावा' : 'The applicant must be an Indian citizen'}
                                    </span>
                                  </li>
                                  <li className="flex items-start">
                                    <FaCheckCircle className="text-green-500 mt-0.5 sm:mt-1 mr-2 sm:mr-3 flex-shrink-0 text-xs sm:text-sm" />
                                    <span className="text-gray-700 text-xs sm:text-sm">
                                      {isMarathi ? 'वयोमर्यादा : २१ ते ६० वर्षे' : 'Age limit: 21 to 60 years'}
                                    </span>
                                  </li>
                                  <li className="flex items-start">
                                    <FaCheckCircle className="text-green-500 mt-0.5 sm:mt-1 mr-2 sm:mr-3 flex-shrink-0 text-xs sm:text-sm" />
                                    <span className="text-gray-700 text-xs sm:text-sm">
                                      {isMarathi ? 'मासिक उत्पन्न ₹१५,००० पेक्षा अधिक असावे' : 'Minimum monthly income: More than ₹15,000'}
                                    </span>
                                  </li>
                                  <li className="flex items-start">
                                    <FaCheckCircle className="text-green-500 mt-0.5 sm:mt-1 mr-2 sm:mr-3 flex-shrink-0 text-xs sm:text-sm" />
                                    <span className="text-gray-700 text-xs sm:text-sm">
                                      {isMarathi ? 'व्यावसायिकांसाठी मासिक उत्पन्न ₹२५,००० पेक्षा अधिक असावे' : 'For self-employed individuals, monthly income should be more than ₹25,000'}
                                    </span>
                                  </li>
                                </ul>
                              </div>

                              <div className="bg-yellow-50 p-3 sm:p-4 rounded-lg">
                                <h4 className="font-semibold text-gray-800 mb-2 text-sm sm:text-base">
                                  {isMarathi ? 'क्रेडिट स्कोअरची भूमिका' : 'Role of Credit Score'}
                                </h4>
                                <ul className="space-y-1 sm:space-y-2">
                                  <li className="flex items-start">
                                    <FaCheckCircle className="text-green-500 mt-0.5 sm:mt-1 mr-2 sm:mr-3 flex-shrink-0 text-xs sm:text-sm" />
                                    <span className="text-gray-700 text-xs sm:text-sm">
                                      {isMarathi ? 'पर्सनल लोन घेण्यासाठी चांगला क्रेडिट स्कोअर आवश्यक असतो' : 'A good credit score is required to obtain a personal loan'}
                                    </span>
                                  </li>
                                  <li className="flex items-start">
                                    <FaCheckCircle className="text-green-500 mt-0.5 sm:mt-1 mr-2 sm:mr-3 flex-shrink-0 text-xs sm:text-sm" />
                                    <span className="text-gray-700 text-xs sm:text-sm">
                                      {isMarathi ? 'वैयक्तिक कर्ज घेताना व्याजदर क्रेडिट स्कोअरवर अवलंबून असतो' : 'The interest rate depends on the credit score of the applicant'}
                                    </span>
                                  </li>
                                  <li className="flex items-start">
                                    <FaCheckCircle className="text-green-500 mt-0.5 sm:mt-1 mr-2 sm:mr-3 flex-shrink-0 text-xs sm:text-sm" />
                                    <span className="text-gray-700 text-xs sm:text-sm">
                                      {isMarathi ? 'साधारणतः ७५० किंवा त्यापेक्षा जास्त क्रेडिट स्कोअर चांगला मानला जातो' : 'Generally, a credit score of 750 or above is considered good'}
                                    </span>
                                  </li>
                                  <li className="flex items-start">
                                    <FaCheckCircle className="text-green-500 mt-0.5 sm:mt-1 mr-2 sm:mr-3 flex-shrink-0 text-xs sm:text-sm" />
                                    <span className="text-gray-700 text-xs sm:text-sm">
                                      {isMarathi ? 'कमी क्रेडिट स्कोअर असल्यास कर्ज मिळण्यात अडचण येते' : 'A low credit score may create difficulties in loan approval'}
                                    </span>
                                  </li>
                                  <li className="flex items-start">
                                    <FaCheckCircle className="text-green-500 mt-0.5 sm:mt-1 mr-2 sm:mr-3 flex-shrink-0 text-xs sm:text-sm" />
                                    <span className="text-gray-700 text-xs sm:text-sm">
                                      {isMarathi ? 'चांगला क्रेडिट स्कोअर असल्यास कर्ज लवकर मंजूर होते' : 'With a good credit score, the loan is approved faster'}
                                    </span>
                                  </li>
                                </ul>
                              </div>

                              <div className="bg-red-50 p-3 sm:p-4 rounded-lg">
                                <h4 className="font-semibold text-gray-800 mb-2 text-sm sm:text-base">
                                  {isMarathi ? 'महत्त्वाच्या गोष्टी' : 'Important Points to Remember'}
                                </h4>
                                <ul className="space-y-1 sm:space-y-2">
                                  <li className="flex items-start">
                                    <FaCheckCircle className="text-green-500 mt-0.5 sm:mt-1 mr-2 sm:mr-3 flex-shrink-0 text-xs sm:text-sm" />
                                    <span className="text-gray-700 text-xs sm:text-sm">
                                      {isMarathi ? 'नेहमी भारत सरकार मान्यताप्राप्त बँक किंवा वित्तीय संस्थेकडूनच कर्ज घ्यावे' : 'Always take a personal loan from a Government-approved bank or financial institution'}
                                    </span>
                                  </li>
                                  <li className="flex items-start">
                                    <FaCheckCircle className="text-green-500 mt-0.5 sm:mt-1 mr-2 sm:mr-3 flex-shrink-0 text-xs sm:text-sm" />
                                    <span className="text-gray-700 text-xs sm:text-sm">
                                      {isMarathi ? 'प्रायव्हेट लिमिटेड किंवा पतसंस्थांकडून कर्ज घेताना पूर्ण चौकशी करावी' : 'While taking loans from private lenders or credit societies, proper verification is necessary'}
                                    </span>
                                  </li>
                                  <li className="flex items-start">
                                    <FaCheckCircle className="text-green-500 mt-0.5 sm:mt-1 mr-2 sm:mr-3 flex-shrink-0 text-xs sm:text-sm" />
                                    <span className="text-gray-700 text-xs sm:text-sm">
                                      {isMarathi ? 'झिरो इंटरेस्ट, झिरो EMI, आकर्षक गिफ्ट्स अशा नावाखाली लपविलेले शुल्क असू शकते' : 'Offers like zero interest, zero EMI, or free gifts may include hidden charges'}
                                    </span>
                                  </li>
                                  <li className="flex items-start">
                                    <FaCheckCircle className="text-green-500 mt-0.5 sm:mt-1 mr-2 sm:mr-3 flex-shrink-0 text-xs sm:text-sm" />
                                    <span className="text-gray-700 text-xs sm:text-sm">
                                      {isMarathi ? 'कर्जाचा व्याजदर, प्रक्रिया शुल्क, दंड व अटी नीट तपासाव्यात' : 'Carefully check the interest rate, processing fees, penalties, and terms & conditions'}
                                    </span>
                                  </li>
                                </ul>
                              </div>

                              <div className="bg-purple-50 p-3 sm:p-4 rounded-lg">
                                <h4 className="font-semibold text-gray-800 mb-2 text-sm sm:text-base">
                                  {isMarathi ? 'व्याजदरावर परिणाम करणारे घटक' : 'Factors Affecting Interest Rates'}
                                </h4>
                                <ul className="space-y-1 sm:space-y-2">
                                  <li className="flex items-start">
                                    <FaCheckCircle className="text-green-500 mt-0.5 sm:mt-1 mr-2 sm:mr-3 flex-shrink-0 text-xs sm:text-sm" />
                                    <span className="text-gray-700 text-xs sm:text-sm">
                                      {isMarathi ? 'वैयक्तिक कर्ज अल्पमुदतीसाठी घ्यावे' : 'Personal loans should be taken for a short duration'}
                                    </span>
                                  </li>
                                  <li className="flex items-start">
                                    <FaCheckCircle className="text-green-500 mt-0.5 sm:mt-1 mr-2 sm:mr-3 flex-shrink-0 text-xs sm:text-sm" />
                                    <span className="text-gray-700 text-xs sm:text-sm">
                                      {isMarathi ? 'व्याजदर हा कर्ज घेताना सर्वात महत्त्वाचा घटक असतो' : 'The interest rate is the most important factor while choosing a personal loan'}
                                    </span>
                                  </li>
                                  <li className="flex items-start">
                                    <FaCheckCircle className="text-green-500 mt-0.5 sm:mt-1 mr-2 sm:mr-3 flex-shrink-0 text-xs sm:text-sm" />
                                    <span className="text-gray-700 text-xs sm:text-sm">
                                      {isMarathi ? 'प्रत्येक बँकेचा व्याजदर वेगळा असतो' : 'Interest rates vary from bank to bank'}
                                    </span>
                                  </li>
                                </ul>
                              </div>

                              <div className="bg-indigo-50 p-3 sm:p-4 rounded-lg">
                                <h4 className="font-semibold text-gray-800 mb-2 text-sm sm:text-base">
                                  {isMarathi ? 'कर्ज कधी निवडावे?' : 'When Should You Choose a Personal Loan?'}
                                </h4>
                                <ul className="space-y-1 sm:space-y-2">
                                  <li className="flex items-start">
                                    <FaCheckCircle className="text-green-500 mt-0.5 sm:mt-1 mr-2 sm:mr-3 flex-shrink-0 text-xs sm:text-sm" />
                                    <span className="text-gray-700 text-xs sm:text-sm">
                                      {isMarathi ? 'खूप जास्त गरज असल्यासच वैयक्तिक कर्ज घ्यावे' : 'A personal loan should be taken only in case of urgent financial need'}
                                    </span>
                                  </li>
                                  <li className="flex items-start">
                                    <FaCheckCircle className="text-green-500 mt-0.5 sm:mt-1 mr-2 sm:mr-3 flex-shrink-0 text-xs sm:text-sm" />
                                    <span className="text-gray-700 text-xs sm:text-sm">
                                      {isMarathi ? 'कारण वैयक्तिक कर्जावर इतर कर्जांच्या तुलनेत जास्त व्याजदर असतो' : 'Personal loans generally carry higher interest rates compared to other loans'}
                                    </span>
                                  </li>
                                </ul>
                              </div>

                              <div className="bg-teal-50 p-3 sm:p-4 rounded-lg">
                                <h4 className="font-semibold text-gray-800 mb-2 text-sm sm:text-base">
                                  {isMarathi ? 'कर्जाची रक्कम' : 'Loan Amount Available'}
                                </h4>
                                <ul className="space-y-1 sm:space-y-2">
                                  <li className="flex items-start">
                                    <FaCheckCircle className="text-green-500 mt-0.5 sm:mt-1 mr-2 sm:mr-3 flex-shrink-0 text-xs sm:text-sm" />
                                    <span className="text-gray-700 text-xs sm:text-sm">
                                      {isMarathi ? 'वैयक्तिक कर्ज ₹१ लाखांपर्यंत मिळू शकते' : 'A personal loan of up to ₹1 lakh can be availed'}
                                    </span>
                                  </li>
                                  <li className="flex items-start">
                                    <FaCheckCircle className="text-green-500 mt-0.5 sm:mt-1 mr-2 sm:mr-3 flex-shrink-0 text-xs sm:text-sm" />
                                    <span className="text-gray-700 text-xs sm:text-sm">
                                      {isMarathi ? 'कर्जाची रक्कम बँकेवर अवलंबून असते' : 'The sanctioned loan amount depends on the bank'}
                                    </span>
                                  </li>
                                  <li className="flex items-start">
                                    <FaCheckCircle className="text-green-500 mt-0.5 sm:mt-1 mr-2 sm:mr-3 flex-shrink-0 text-xs sm:text-sm" />
                                    <span className="text-gray-700 text-xs sm:text-sm">
                                      {isMarathi ? 'कर्जाची रक्कम मासिक उत्पन्नावर आधारित असते' : 'Loan amount is generally based on the monthly income of the applicant'}
                                    </span>
                                  </li>
                                </ul>
                              </div>

                              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                                <div className="bg-green-50 p-3 sm:p-4 rounded-lg">
                                  <h4 className="font-semibold text-gray-800 mb-2 text-sm sm:text-base text-green-700">
                                    {isMarathi ? 'फायदे' : 'Advantages'}
                                  </h4>
                                  <ul className="space-y-1 sm:space-y-2">
                                    <li className="flex items-start">
                                      <FaCheckCircle className="text-green-500 mt-0.5 sm:mt-1 mr-2 sm:mr-3 flex-shrink-0 text-xs sm:text-sm" />
                                      <span className="text-gray-700 text-xs sm:text-sm">
                                        {isMarathi ? 'विनतारण कर्ज (कोणतीही मालमत्ता गहाण ठेवावी लागत नाही)' : 'Unsecured loan (no collateral required)'}
                                      </span>
                                    </li>
                                    <li className="flex items-start">
                                      <FaCheckCircle className="text-green-500 mt-0.5 sm:mt-1 mr-2 sm:mr-3 flex-shrink-0 text-xs sm:text-sm" />
                                      <span className="text-gray-700 text-xs sm:text-sm">
                                        {isMarathi ? 'कर्ज परतफेडीसाठी २४ महिन्यांपर्यंत कालावधी' : 'Loan repayment period of up to 24 months'}
                                      </span>
                                    </li>
                                    <li className="flex items-start">
                                      <FaCheckCircle className="text-green-500 mt-0.5 sm:mt-1 mr-2 sm:mr-3 flex-shrink-0 text-xs sm:text-sm" />
                                      <span className="text-gray-700 text-xs sm:text-sm">
                                        {isMarathi ? 'कमी कागदपत्रांची पूर्तता' : 'Minimum documentation required'}
                                      </span>
                                    </li>
                                  </ul>
                                </div>

                                <div className="bg-red-50 p-3 sm:p-4 rounded-lg">
                                  <h4 className="font-semibold text-gray-800 mb-2 text-sm sm:text-base text-red-700">
                                    {isMarathi ? 'तोटे' : 'Disadvantages'}
                                  </h4>
                                  <ul className="space-y-1 sm:space-y-2">
                                    <li className="flex items-start">
                                      <FaCheckCircle className="text-green-500 mt-0.5 sm:mt-1 mr-2 sm:mr-3 flex-shrink-0 text-xs sm:text-sm" />
                                      <span className="text-gray-700 text-xs sm:text-sm">
                                        {isMarathi ? 'विनतारण असल्यामुळे असुरक्षित कर्ज' : 'Being unsecured, it is a high-risk loan'}
                                      </span>
                                    </li>
                                    <li className="flex items-start">
                                      <FaCheckCircle className="text-green-500 mt-0.5 sm:mt-1 mr-2 sm:mr-3 flex-shrink-0 text-xs sm:text-sm" />
                                      <span className="text-gray-700 text-xs sm:text-sm">
                                        {isMarathi ? 'जास्त व्याजदर / जास्त जोखीम' : 'Higher interest rates compared to secured loans'}
                                      </span>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        )}

                        {/* Specific Features per Loan Type */}
                        {navItem.id === 'mortgage-loan' && (
                          <div className="mb-6 sm:mb-8">
                            <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-3 sm:mb-4 flex items-center">
                              <FaList className="text-green-600 mr-2 sm:mr-3 text-sm sm:text-base" />
                              {t.typesOfMortgageLoans}
                            </h3>
                            <div className="space-y-2 sm:space-y-3">
                              {loanData[navItem.id].types.map((type, idx) => (
                                <div key={idx} className="bg-gray-50 p-3 sm:p-4 rounded-lg">
                                  <div className="font-semibold text-gray-800 text-sm sm:text-base">{type.name}</div>
                                  <div className="text-xs sm:text-sm text-gray-600 mt-1">{type.desc}</div>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}

                        {navItem.id === 'gold-loan' && (
                          <div className="mb-4 sm:mb-6">
                            <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2 sm:mb-3 flex items-center">
                              <GiGoldBar className="text-amber-600 mr-2 sm:mr-3 text-sm sm:text-base" />
                              {t.goldLoanTypes}
                            </h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-3">
                              {loanData[navItem.id].loanTypes.map((type, idx) => (
                                <div key={idx} className="border border-amber-200 rounded-lg p-2 sm:p-2.5 bg-amber-50">
                                  <div className="font-bold text-gray-800 mb-1 text-xs">{type.name}</div>
                                  <div className="space-y-1 text-xs">
                                    <div>
                                      <span className="font-medium">{t.interest}:</span> {type.interest}
                                    </div>
                                    <div>
                                      <span className="font-medium">{t.amount}:</span> {type.amount}
                                    </div>
                                    <div>
                                      <span className="font-medium">{t.tenure}:</span> {type.tenure}
                                    </div>
                                  </div>
                                  <div className="mt-1.5">
                                    <div className="text-xs font-medium mb-0.5">{t.featuresLabel}:</div>
                                    <ul className="text-xs text-gray-600 space-y-0.5">
                                      {type.features.map((feature, fIdx) => (
                                        <li key={fIdx} className="flex items-start">
                                          <FaCheckCircle className="text-green-500 text-xs mt-0.5 mr-1 flex-shrink-0" />
                                          <span className="leading-tight">{feature}</span>
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}

                        {navItem.id === 'gold-loan' && (
                          <div className="mb-4 sm:mb-6">
                            <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2 sm:mb-3 flex items-center">
                              <FaInfoCircle className="text-amber-600 mr-2 sm:mr-3 text-sm sm:text-base" />
                              {t.note}
                            </h3>
                            <div className="space-y-1 sm:space-y-2">
                              {loanData[navItem.id].note.map((note, idx) => (
                                <div key={idx} className="flex items-start">
                                  <FaCheckCircle className="text-green-500 mr-2 sm:mr-3 flex-shrink-0 text-xs sm:text-sm mt-0.5" />
                                  <span className="text-gray-700 text-xs sm:text-sm">{note}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}

                        {navItem.id === 'vehicle-loan' && (
                          <div className="mb-4 sm:mb-6">
                            <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2 sm:mb-3 flex items-center">
                              <FaCar className="text-red-600 mr-2 sm:mr-3 text-sm sm:text-base" />
                              {t.aboutVehicleLoan}
                            </h3>
                            <div className="space-y-1 sm:space-y-2">
                              {loanData[navItem.id].description.map((desc, idx) => (
                                <div key={idx} className="flex items-start">
                                  <FaCheckCircle className="text-green-500 mr-2 sm:mr-3 flex-shrink-0 text-xs sm:text-sm mt-0.5" />
                                  <span className="text-gray-700 text-xs sm:text-sm">{desc}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}

                        {navItem.id === 'vehicle-loan' && (
                          <div className="mb-4 sm:mb-6">
                            <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2 sm:mb-3 flex items-center">
                              <FaFileAlt className="text-red-600 mr-2 sm:mr-3 text-sm sm:text-base" />
                              {t.vehicleLoanDocumentsRequired}
                            </h3>
                            <div className="space-y-1 sm:space-y-2">
                              {loanData[navItem.id].documents.map((doc, idx) => (
                                <div key={idx} className="flex items-start">
                                  <FaCheckCircle className="text-green-500 mr-2 sm:mr-3 flex-shrink-0 text-xs sm:text-sm mt-0.5" />
                                  <span className="text-gray-700 text-xs sm:text-sm">{doc}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}

                        {navItem.id === 'vehicle-loan' && (
                          <div className="mb-4 sm:mb-6">
                            <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2 sm:mb-3 flex items-center">
                              <FaRupeeSign className="text-red-600 mr-2 sm:mr-3 text-sm sm:text-base" />
                              {t.vehicleLoanExpenses}
                            </h3>
                            <div className="space-y-1 sm:space-y-2">
                              {loanData[navItem.id].expenses.map((expense, idx) => (
                                <div key={idx} className="flex items-start">
                                  <FaCheckCircle className="text-green-500 mr-2 sm:mr-3 flex-shrink-0 text-xs sm:text-sm mt-0.5" />
                                  <span className="text-gray-700 text-xs sm:text-sm">{expense}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}

                        {navItem.id === 'vehicle-loan' && (
                          <div className="mb-4 sm:mb-6">
                            <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2 sm:mb-3 flex items-center">
                              <FaInfoCircle className="text-red-600 mr-2 sm:mr-3 text-sm sm:text-base" />
                              {t.hypothecation}
                            </h3>
                            <div className="space-y-1 sm:space-y-2">
                              {loanData[navItem.id].hypothecation.map((hyp, idx) => (
                                <div key={idx} className="flex items-start">
                                  <FaCheckCircle className="text-green-500 mr-2 sm:mr-3 flex-shrink-0 text-xs sm:text-sm mt-0.5" />
                                  <span className="text-gray-700 text-xs sm:text-sm">{hyp}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}

                        {navItem.id === 'vehicle-loan' && (
                          <div className="mb-4 sm:mb-6">
                            <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2 sm:mb-3 flex items-center">
                              <FaShieldAlt className="text-red-600 mr-2 sm:mr-3 text-sm sm:text-base" />
                              {t.precautionsWhileTakingLoan}
                            </h3>
                            <div className="space-y-1 sm:space-y-2">
                              {loanData[navItem.id].precautions.map((prec, idx) => (
                                <div key={idx} className="flex items-start">
                                  <FaCheckCircle className="text-green-500 mr-2 sm:mr-3 flex-shrink-0 text-xs sm:text-sm mt-0.5" />
                                  <span className="text-gray-700 text-xs sm:text-sm">{prec}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}

                        {navItem.id === 'home-loan' && (
                          <div className="mb-6 sm:mb-8">
                            <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-3 sm:mb-4 flex items-center">
                              <GiHouseKeys className="text-purple-600 mr-2 sm:mr-3 text-sm sm:text-base" />
                              {t.purpose}
                            </h3>
                            <div className="space-y-1 sm:space-y-2">
                              {loanData[navItem.id].purpose.map((purpose, idx) => (
                                <div key={idx} className="flex items-center">
                                  <FaCheckCircle className="text-green-500 mr-2 sm:mr-3 flex-shrink-0 text-sm sm:text-base" />
                                  <span className="text-gray-700 text-sm sm:text-base">{purpose}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}

                        {navItem.id === 'home-loan' && (
                          <div className="mb-6 sm:mb-8">
                            <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-3 sm:mb-4 flex items-center">
                              <FaFileAlt className="text-purple-600 mr-2 sm:mr-3 text-sm sm:text-base" />
                              {t.homeLoanDocumentsRequired}
                            </h3>
                            <div className="space-y-1 sm:space-y-2">
                              {loanData[navItem.id].documents.map((doc, idx) => (
                                <div key={idx} className="flex items-start">
                                  <FaCheckCircle className="text-green-500 mr-2 sm:mr-3 flex-shrink-0 text-sm sm:text-base mt-1" />
                                  <span className="text-gray-700 text-sm sm:text-base">{doc}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}

                        {navItem.id === 'home-loan' && (
                          <div className="mb-4 sm:mb-6">
                            <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2 sm:mb-3 flex items-center">
                              <FaList className="text-purple-600 mr-2 sm:mr-3 text-sm sm:text-base" />
                              {t.typesOfHomeLoans}
                            </h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                              {loanData[navItem.id].types.map((type, idx) => (
                                <div key={idx} className="flex items-start">
                                  <FaCheckCircle className="text-green-500 mr-2 sm:mr-3 flex-shrink-0 text-xs sm:text-sm mt-0.5" />
                                  <div className="flex-1">
                                    <span className="text-gray-800 font-medium text-xs sm:text-sm">{type.name}</span>
                                    <span className="text-gray-600 text-xs block">{type.desc}</span>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}

                        {navItem.id === 'women-loan' && (
                          <div className="mb-4 sm:mb-6">
                            <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2 sm:mb-3 flex items-center">
                              <FaHeart className="text-pink-600 mr-2 sm:mr-3 text-sm sm:text-base" />
                              {t.keyFeatures}
                            </h3>
                            <div className="space-y-1 sm:space-y-2">
                              {loanData[navItem.id].features.map((feature, idx) => (
                                <div key={idx} className="flex items-start">
                                  <FaCheckCircle className="text-green-500 mr-2 sm:mr-3 flex-shrink-0 text-xs sm:text-sm mt-0.5" />
                                  <span className="text-gray-700 text-xs sm:text-sm">{feature}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}

                        {navItem.id === 'women-loan' && (
                          <div className="mb-4 sm:mb-6">
                            <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2 sm:mb-3 flex items-center">
                              <FaBullseye className="text-pink-600 mr-2 sm:mr-3 text-sm sm:text-base" />
                              {t.objectivesOfTheScheme}
                            </h3>
                            <div className="space-y-1 sm:space-y-2">
                              {loanData[navItem.id].objectives.map((objective, idx) => (
                                <div key={idx} className="flex items-start">
                                  <FaCheckCircle className="text-green-500 mr-2 sm:mr-3 flex-shrink-0 text-xs sm:text-sm mt-0.5" />
                                  <span className="text-gray-700 text-xs sm:text-sm">{objective}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}

                        {navItem.id === 'women-loan' && (
                          <div className="mb-4 sm:mb-6">
                            <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2 sm:mb-3 flex items-center">
                              <FaInfoCircle className="text-pink-600 mr-2 sm:mr-3 text-sm sm:text-base" />
                              {t.note}
                            </h3>
                            <div className="space-y-1 sm:space-y-2">
                              {loanData[navItem.id].note.map((note, idx) => (
                                <div key={idx} className="flex items-start">
                                  <FaCheckCircle className="text-green-500 mr-2 sm:mr-3 flex-shrink-0 text-xs sm:text-sm mt-0.5" />
                                  <span className="text-gray-700 text-xs sm:text-sm">{note}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}

                        {navItem.id === 'education-loan' && (
                          <div className="mb-6 sm:mb-8">
                            <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-3 sm:mb-4 flex items-center">
                              <FaGraduationCap className="text-indigo-600 mr-2 sm:mr-3 text-sm sm:text-base" />
                              {t.coveredExpenses}
                            </h3>
                            <div className="space-y-1 sm:space-y-2">
                              {loanData[navItem.id].coveredExpenses.map((expense, idx) => (
                                <div key={idx} className="flex items-center">
                                  <FaCheckCircle className="text-green-500 mr-2 sm:mr-3 flex-shrink-0 text-sm sm:text-base" />
                                  <span className="text-gray-700 text-sm sm:text-base">{expense}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>

                      {/* Right Column */}
                      <div>
                        {/* Eligibility */}
                        <div className="mb-4 sm:mb-6">
                          <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2 sm:mb-3 flex items-center">
                            <FaUserCheck className="text-blue-600 mr-2 sm:mr-3 text-sm sm:text-base" />
                            {t.eligibility}
                          </h3>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                            {loanData[navItem.id].eligibility.map((item, idx) => (
                              <div key={idx} className="bg-blue-50 p-2 sm:p-3 rounded-lg">
                                <div className="flex items-center mb-1">
                                  <div className="text-blue-600 mr-2 text-xs sm:text-sm">
                                    {item.icon}
                                  </div>
                                  <div className="text-xs font-medium text-gray-600">{item.title}</div>
                                </div>
                                <div className="font-semibold text-gray-800 text-xs sm:text-sm">{item.value}</div>
                              </div>
                            ))}
                          </div>
                        </div>




                        {/* Loan Categories for Education Loan */}
                        {navItem.id === 'education-loan' && (
                          <div className="mb-6 sm:mb-8">
                            <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-3 sm:mb-4 flex items-center">
                              <FaUniversity className="text-indigo-600 mr-2 sm:mr-3 text-sm sm:text-base" />
                              {t.educationLoanCategories}
                            </h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                              {loanData[navItem.id].loanCategories.map((category, idx) => (
                                <div key={idx} className="bg-indigo-50 p-3 sm:p-4 rounded-lg">
                                  <div className="font-semibold text-gray-800 text-sm sm:text-base">{category.category}</div>
                                  <div className="text-xs sm:text-sm text-gray-600">{t.maxAmount}: {category.maxAmount}</div>
                                  <div className="text-xs sm:text-sm text-gray-600">{t.tenure}: {category.tenure}</div>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}

                      </div>
                    </div>
                  </div>
                </div>
              </section>
            ))}

            {/* 8. Common Documents Section */}
            <section className="scroll-mt-20 sm:scroll-mt-24 lg:scroll-mt-28 mb-8 sm:mb-12 lg:mb-16">
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl sm:rounded-2xl shadow-lg sm:shadow-2xl p-4 sm:p-6 lg:p-8 border border-gray-700">
                <div className="text-center mb-6 sm:mb-8 lg:mb-10">
                  <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2 sm:mb-4">{t.commonLoanDocuments}</h2>
                  <p className="text-gray-400 text-sm sm:text-base">{t.documentsRequired}</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 sm:gap-6 mb-6 sm:mb-8">
                  {commonDocuments.slice(0, showAllDocuments ? commonDocuments.length : 5).map((doc, idx) => (
                    <div 
                      key={idx} 
                      className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl p-4 sm:p-6 border border-gray-700 hover:border-blue-500 transition-all duration-300 group"
                    >
                      <div className="flex flex-col items-center text-center">
                        <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-xl ${
                          doc.mandatory 
                            ? 'bg-gradient-to-r from-red-500 to-pink-600' 
                            : 'bg-gradient-to-r from-blue-500 to-cyan-600'
                        } flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300`}>
                          <div className="text-white text-lg sm:text-2xl">
                            {doc.icon}
                          </div>
                        </div>
                        <h3 className="font-bold text-white text-sm sm:text-base lg:text-lg mb-2">{doc.name}</h3>
                        <span className={`text-xs px-2 sm:px-3 py-1 rounded-full ${
                          doc.mandatory 
                            ? 'bg-red-500/20 text-red-300' 
                            : 'bg-blue-500/20 text-blue-300'
                        }`}>
                          {doc.mandatory ? t.mandatory : t.asRequired}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="text-center">
                  <button
                    onClick={() => setShowAllDocuments(!showAllDocuments)}
                    className="text-blue-400 hover:text-blue-300 font-medium flex items-center justify-center mx-auto text-sm sm:text-base"
                  >
                    {showAllDocuments ? t.showLessDocuments : t.showAllDocuments}
                    <FaChevronDown className={`ml-2 transition-transform text-sm sm:text-base ${showAllDocuments ? 'rotate-180' : ''}`} />
                  </button>
                </div>
              </div>
            </section>
          </div>
      </div>

        {/* 9. Call-to-Action Section */}
        <section className="mt-8 sm:mt-12 lg:mt-16">
          <div className="relative overflow-hidden rounded-xl sm:rounded-2xl shadow-lg sm:shadow-2xl bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
              }}></div>
            </div>

            <div className="relative p-6 sm:p-8 lg:p-12 text-center text-white z-10">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 leading-tight">
                  {t.applyForRightLoan} <span className="bg-gradient-to-r from-cyan-300 to-white bg-clip-text text-transparent">{t.loanToday}</span>
                </h2>
                <p className="text-base sm:text-lg lg:text-xl text-blue-100 mb-6 sm:mb-8 lg:mb-10 max-w-2xl mx-auto leading-relaxed">
                  {t.getPersonalizedSolutions}
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
                  <button 
                    onClick={() => navigate('/branch')}
                    className="bg-transparent border-2 border-white text-white px-6 sm:px-8 lg:px-10 py-3 sm:py-4 lg:py-5 rounded-full font-bold text-base sm:text-lg lg:text-xl hover:bg-white hover:bg-opacity-10 transition-all duration-300 shadow-lg"
                  >
                    <FaPhoneAlt className="inline mr-2" />
                    {t.visitNearestBranch}
                  </button>
                </div>
                
                <div className="mt-6 sm:mt-8 lg:mt-10 pt-4 sm:pt-6 lg:pt-8 border-t border-blue-300">
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
                    <div className="text-center">
                      <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-cyan-300">24 Hrs</div>
                      <div className="text-blue-200 text-xs sm:text-sm">{t.approvalTime}</div>
                    </div>
                    <div className="text-center">
                      <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-cyan-300">100%</div>
                      <div className="text-blue-200 text-xs sm:text-sm">{t.transparent}</div>
                    </div>
                    <div className="text-center">
                      <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-cyan-300">₹5 Cr</div>
                      <div className="text-blue-200 text-xs sm:text-sm">{t.maxLoan}</div>
                    </div>
                    <div className="text-center">
                      <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-cyan-300">0.5%</div>
                      <div className="text-blue-200 text-xs sm:text-sm">{t.processingFee}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      {/* Custom Styles */}
      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in {
          animation: fadeIn 0.5s ease-out;
        }
        
        /* Smooth scrolling */
        html {
          scroll-behavior: smooth;
        }
        
        /* Custom hover effects */
        .loan-card-hover {
          transition: all 0.3s ease;
        }
        
        .loan-card-hover:hover {
          transform: translateY(-4px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
        }
        
        /* Gradient text animation */
        .gradient-text {
          background: linear-gradient(45deg, #06b6d4, #3b82f6, #8b5cf6);
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }
        
        @keyframes gradient {
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
        
        /* Custom bullet points */
        .custom-bullet {
          position: relative;
          padding-left: 1.5rem;
        }
        
        .custom-bullet::before {
          content: '';
          position: absolute;
          left: 0;
          top: 0.7rem;
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: linear-gradient(45deg, #3b82f6, #06b6d4);
        }
        
        /* Mobile-specific touch interactions */
        @media (hover: none) and (pointer: coarse) {
          /* Touch-friendly tap targets */
          button, a {
            min-height: 44px;
            min-width: 44px;
          }
          
          /* Remove hover effects on touch devices */
          .loan-card-hover:hover {
            transform: none;
            box-shadow: none;
          }
          
          /* Add active state for touch feedback */
          button:active, a:active {
            transform: scale(0.98);
            transition: transform 0.1s ease;
          }
          
          /* Better touch scrolling */
          .overflow-x-auto {
            -webkit-overflow-scrolling: touch;
            scroll-snap-type: x mandatory;
          }
          
          .overflow-x-auto > * {
            scroll-snap-align: start;
          }
        }
        
        /* Responsive font sizes */
        @media (max-width: 640px) {
          body {
            font-size: 14px;
          }
        }
        
        @media (min-width: 641px) and (max-width: 1024px) {
          body {
            font-size: 15px;
          }
        }
        
        @media (min-width: 1025px) {
          body {
            font-size: 16px;
          }
        }
        
        /* Prevent horizontal overflow on small screens */
        @media (max-width: 640px) {
          .prevent-overflow {
            overflow-x: hidden;
          }
        }
        
        /* Improved mobile navigation */
        @media (max-width: 768px) {
          .sticky-nav {
            backdrop-filter: blur(10px);
            -webkit-backdrop-filter: blur(10px);
          }
        }
      `}</style>
    </div>
  );
};

export default Loan;
