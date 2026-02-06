import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext';
import { 
  FaPiggyBank,
  FaChartLine, FaHandHoldingUsd, FaShieldAlt, FaPercent,
  FaBuilding, FaCoins, FaGem, FaSeedling,
  FaArrowRight, FaCheckCircle, FaStar, FaUserTie, FaRing, FaPhoneAlt
} from 'react-icons/fa';

const Plan = () => {
  const { language } = useLanguage();
  const location = useLocation();


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
      smallSavingSchemes: 'Small Saving Schemes',
      unfixedDepositSchemes: 'Unfixed Deposits',
      recurringDesc: 'Build wealth systematically with our recurring deposit schemes offering regular savings and attractive returns.',
      fixedDepositDesc: 'Secure your future with our fixed deposit schemes designed for every life stage and financial goal.',
      smallSavingDesc: 'Flexible small saving options designed for daily earners and small businessmen.',
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
      fdTitle: 'Fixed Deposit Scheme',
      fdTagline: 'Safe & Secure Investment',
      fdDesc: (
        <>
          <div className="mb-2">A Fixed Deposit (FD) is considered one of the safest investment options.</div>
          <div className="mb-2">• Compared to savings accounts, fixed deposits offer higher interest rates.</div>
          <div className="mb-2">• Senior citizens receive higher interest rates on FDs.</div>
          <div>• Various financial institutions such as post offices, government, and private banks allow investments in fixed deposits for up to a maximum of 10 years.</div>
        </>
      ),
      fdFeatures: [],
      unfixedDetailsTitle: 'Unfixed Deposit Scheme',
      unfixedDetailsTagline: 'Flexible Withdrawal Options',
      unfixedDetailsDesc: (
        <>
          <div className="mb-2">• In this scheme, there is no fixed time limit for investment.</div>
          <div className="mb-2">• The invested amount can be withdrawn at any time.</div>
          <div>• Interest is paid for the number of days completed, provided at least 15 days have passed since opening the account.</div>
        </>
      ),
      unfixedDetailsFeatures: [],
      pensionTitle: 'Pension Deposit Scheme',
      pensionTagline: 'Old age financial security scheme',
      pensionDesc: 'Under the Pension Deposit Scheme, customers invest a lump-sum amount for a fixed period (minimum 1 year), and they receive a monthly return in the form of interest on that invested amount.',
      pensionFeatures: [],
      rdTitle: 'Recurring Deposit Scheme',
      rdTagline: '',
      rdDesc: (
        <>
          <div className="mb-2">• RD means Recurring Deposit is a savings scheme.</div>
          <div>• Under RD, after investing a fixed amount every month, interest is received on this investment at a fixed rate.</div>
        </>
      ),
      rdFeatures: [],
      rdTable: {
        title: 'Recurring Deposit Scheme (Interest Rate)',
        headers: ['Monthly Installment', 'Years', 'Maturity Amount'],
        rows: [
          ['335', '5 Years', '25,000'],
          ['670', '5 Years', '50,000'],
          ['1,340', '5 Years', '1,00,000'],
          ['6,700', '5 Years', '5,00,000'],
          ['13,400', '5 Years', '10,00,000']
        ]
      },
      halfPriceTitle: 'Half Price Deposit Scheme',
      halfPriceTagline: 'Special 150% return scheme',
      halfPriceDesc: 'Under the One-and-a-Half Times Deposit Scheme, a fixed lump-sum amount is deposited in the bank, and according to the bank’s policy, after a predetermined period, customers are paid one-and-a-half times the invested amount.',
      halfPriceFeatures: [],
      doubleMoneyTitle: 'Double Money Deposit Scheme',
      doubleMoneyTagline: 'Double your investment',
      doubleMoneyDesc: 'Under the Double Money Deposit Scheme, a fixed lump-sum amount is deposited in the bank, and according to the bank’s policy, after a predetermined period, customers are paid double the invested amount.',
      doubleMoneyFeatures: [],
      fourfoldTitle: 'Fourfold Deposit Scheme',
      fourfoldTagline: 'Quadruple your investment',
      fourfoldDesc: 'Under the Fourfold Deposit Scheme, a fixed lump-sum amount is deposited in the bank, and according to the bank’s policy, after the predetermined period, customers are paid four times the invested amount.',
      fourfoldFeatures: [],
      sujataTitle: 'Sujata Deposit Scheme',
      sujataTagline: 'Daily Savings Deposit',
      sujataDesc: 'The Shivpragati / Sujata Deposit Scheme is referred to as a daily savings deposit, also known as a pigmy deposit. In this scheme, the bank appoints agents who collect a fixed amount regularly from customers for deposit.',
      sujataFeatures: [],
      subhmangalTitle: 'Subhmangal Deposit Scheme',
      subhmangalTagline: 'Designed for children\'s wedding expenses',
      subhmangalDesc: (
        <>
          <div className="mb-2">• This deposit scheme is useful for making wedding ceremonies memorable.</div>
          <div>• Under this scheme, customers invest a fixed amount for 18 years, and after 18 years they receive returns according to the bank’s policy.</div>
        </>
      ),
      subhmangalFeatures: [],
      subhmangalTable: {
        title: 'Shubhamangal Deposit Scheme (Interest Details)',
        headers: ['Amount', 'Period', 'Maturity Amount'],
        rows: [
          ['₹1,31,000', '18 Years', '₹5,00,000'],
          ['₹2,61,000', '18 Years', '₹10,00,000'],
          ['₹3,09,000', '18 Years', '₹12,50,000']
        ]
      },
      billionaireTitle: 'Billionaire Deposit Scheme',
      billionaireTagline: 'High-return long-term deposit plan',
      billionaireDesc: 'Under the Shivpratap Multistate Millionaire Deposit Scheme, customers are paid an amount of ₹1 crore after 18 years on a monthly investment of ₹21,000.',
      billionaireFeatures: [],
      childSavingTitle: 'Shivpratap Child Savings Scheme (Recurring Deposit)',
      childSavingTagline: '',
      childSavingDesc: (
        <>
          <div className="mb-2">In today’s competitive and rapidly changing world, it is important for children to learn not only education but also financial discipline and planning. Even small monthly savings can grow into strong financial support in the future. To cultivate this habit from an early age, Shivpratap Multistate has introduced the “Shivpratap Child Savings Scheme” (Recurring Deposit).</div>
          <div className="mb-2">This scheme helps develop saving discipline in children, provides parents with a structured investment option, and creates a strong financial foundation for future education, career, and dreams. With safe investment, attractive interest rates, and assured returns, this scheme is highly beneficial for every family.</div>
          <div className="mb-2">The scheme is specially designed to build a culture of savings among children. By depositing just ₹50, ₹100, ₹300, or ₹500 per month, a substantial amount can be accumulated over 60 months with attractive interest. Regular savings provide excellent returns, helping create a secure fund for children’s primary and secondary education.</div>
          <div className="mb-4"><strong>Key Features:</strong></div>
          <ul className="list-none space-y-1 mb-4">
            <li>✓ Start saving with a small amount</li>
            <li>✓ Fixed duration of 60 months</li>
            <li>✓ Attractive interest rates</li>
            <li>✓ Ideal for education, fees, competitive exams, and skill development needs</li>
            <li>✓ Facility to open an account in the child’s name</li>
          </ul>
        </>
      ),
      childSavingFeatures: [],
      childSavingTable: {
        title: 'Scheme Details',
        headers: ['Monthly Installment (₹)', 'Total Installments (Months)', 'Total Deposit Amount (₹)', 'Final Amount After 5 Years (₹)'],
        rows: [
          ['50', '60', '3,000.00', '3,700.00'],
          ['100', '60', '6,000.00', '7,500.00'],
          ['300', '60', '18,000.00', '22,000.00'],
          ['500', '60', '30,000.00', '37,000.00']
        ]
      },
      ujwalSwapnapurtiTitle: 'Shivpratap Ujwal Swapnapurti Yogna',
      ujwalSwapnapurtiTagline: '',
      ujwalSwapnapurtiDesc: (
        <>
          <div className="mb-2">This scheme is designed to provide financial security for children’s higher education or important milestones after the age of 18. The younger the child’s current age, the lower the monthly installment and the longer the investment period. The objective of this scheme is to ensure a minimum amount of ₹5,00,000 becomes available when the child turns 18. Long-term investment provides higher returns and builds a strong financial fund for the child’s future.</div>
          <div className="mb-4"><strong>Key Features:</strong></div>
          <ul className="list-none space-y-1 mb-4">
            <li>✓ ₹5 lakh benefit when the child turns 18</li>
            <li>✓ Monthly installment fixed according to the child’s age</li>
            <li>✓ Investment period from 6 to 17 years — planned long-term investment</li>
            <li>✓ Best financial security for higher education, career, and skill development</li>
            <li>✓ Safe, reliable, and stable interest rate</li>
          </ul>
        </>
      ),
      ujwalSwapnapurtiFeatures: [],
      ujwalSwapnapurtiTable: {
        title: 'Scheme Details',
        headers: ['Current Age (Years)', 'Years of Payment', 'Total Installments (Months)', 'Monthly Installment (₹)', 'Total Deposit Amount (₹)', 'Amount at Age 18 (₹)'],
        rows: [
          ['1', '17', '204', '1100', '224,400', '500,000'],
          ['2', '16', '192', '1240', '238,080', '500,000'],
          ['3', '15', '180', '1390', '250,200', '500,000'],
          ['4', '14', '168', '1560', '262,080', '500,000'],
          ['5', '13', '156', '1770', '276,120', '500,000'],
          ['6', '12', '144', '2010', '289,440', '500,000'],
          ['7', '11', '132', '2310', '304,920', '500,000'],
          ['8', '10', '120', '2660', '319,200', '500,000'],
          ['9', '9', '108', '3100', '334,800', '500,000'],
          ['10', '8', '96', '3660', '351,360', '500,000'],
          ['11', '7', '84', '4380', '367,920', '500,000'],
          ['12', '6', '72', '5350', '385,200', '500,000']
        ]
      },
      unnatiLakhpatiTitle: 'Unnati Women Lakhpati Deposit Scheme (Recurring)',
      unnatiLakhpatiTagline: 'A step toward women empowerment',
      unnatiLakhpatiDesc: (
        <>
          <div className="mb-4">
            <h4 className="font-bold text-lg mb-2 text-black">Fixed Deposit @ 10%*</h4>
            <p className="mb-2">Secure investment for your future with attractive interest rates! To ensure proper growth of your hard-earned money, a fixed deposit scheme is a well-planned and safe investment option. Keep your money secure and enrich your future with assured benefits.</p>
          </div>
          
          <div className="mb-4">
            <h4 className="font-bold text-lg mb-2 text-black">Unnati Women Savings Account</h4>
            <ul className="list-disc ml-5 space-y-1 text-gray-700">
              <li>Minimum and maximum deposit limits from ₹1 lakh to ₹5 lakh</li>
              <li>Personal accident insurance coverage from ₹25,000 to ₹1 lakh</li>
              <li>Interest up to 4%*</li>
              <li>Free mobile banking app facility (NEFT/RTGS/IMPS/UPI)</li>
              <li>Facility to receive payments from any bank in India through apps like Google Pay, PhonePe, Paytm, etc.</li>
              <li>Free locker facility</li>
              <li>UPI QR code facility for business transactions</li>
              <li>Various loan scheme facilities available</li>
            </ul>
          </div>

          <div className="mb-4">
            <h4 className="font-bold text-lg mb-2 text-black">Unnati Women Lakhpati Deposit Scheme</h4>
            <p className="mb-2"><strong>A step toward women empowerment — with Shivpratap Multistate recurring deposit schemes…</strong></p>
            <p className="mb-2">Women are the foundation of society, and to make their financial independence easier and more secure, Shivpratap Multistate has introduced the special Unnati Women Recurring Deposit Scheme.</p>
          </div>

          <div className="mb-2"><strong>Key Features:</strong></div>
          <ul className="list-none space-y-1 mb-4">
            <li>✓ Regular monthly investment plan</li>
            <li>✓ Attractive interest rates</li>
            <li>✓ Easy monthly installments</li>
            <li>✓ Safe and secure investment</li>
            <li>✓ Loan facility against deposit</li>
          </ul>
        </>
      ),
      unnatiLakhpatiFeatures: [],
      unnatiLakhpatiTable: {
        title: 'Scheme Details',
        headers: ['Sr. No.', 'Monthly Installment', 'Duration', 'Total Deposit Amount', 'Maturity Amount'],
        rows: [
          ['1', '₹7,970', '12 months', '₹95,640', '₹1,00,000'],
          ['2', '₹3,820', '24 months', '₹91,680', '₹1,00,000'],
          ['3', '₹2,440', '36 months', '₹87,840', '₹1,00,000'],
          ['4', '₹1,750', '48 months', '₹84,000', '₹1,00,000'],
          ['5', '₹1,340', '60 months', '₹80,400', '₹1,00,000']
        ]
      },
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
      smallSavingSchemes: 'लहान बचत योजना',
      unfixedDepositSchemes: 'अनिश्चित मुदत ठेवी',
      recurringDesc: 'नियमित बचत आणि आकर्षक परताव्यासह आमच्या आवर्ती ठेव योजनांसह पद्धतशीरपणे संपत्ती तयार करा.',
      fixedDepositDesc: 'प्रत्येक जीवन श्रेणी आणि आर्थिक लक्ष्यांसाठी डिझाइन केलेल्या आमच्या मुदत ठेव योजनांसह आपले भविष्य सुरक्षित करा.',
      smallSavingDesc: 'रोजचे कमावणारे आणि छोटे व्यावसायिक यांच्यासाठी डिझाइन केलेले लवचिक लहान बचत पर्याय.',
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
      fdTitle: 'मुदत ठेव योजना',
      fdTagline: 'सुरक्षित आणि खात्रीशीर गुंतवणूक',
      fdDesc: (
        <>
          <div className="mb-2">फिक्स्ड डिपॉझिट म्हणजेच हा गुंतवणुकीचा सर्वात सुरक्षित पर्याय आहे.</div>
          <div className="mb-2">• बचत खात्याच्या तुलनेत मुदत ठेविवर जास्त व्याज मिळते.</div>
          <div className="mb-2">• एफ.डी.मध्ये ज्येष्ठ नागरिकांना अधिक व्याजदर मिळतो.</div>
          <div>• विविध वित्तीय संस्था म्हणजे पोस्ट ऑफिस, सरकारी आणि बिगर सरकारी बँका मुदत ठेविंतर्गत जास्तीत जास्त १० वर्षांसाठी गुंतवणूक करता येते.</div>
        </>
      ),
      fdFeatures: [],
      unfixedDetailsTitle: 'अनफिक्स्ड डिपॉझिट',
      unfixedDetailsTagline: 'लवचिक पैसे काढण्याचे पर्याय',
      unfixedDetailsDesc: (
        <>
          <div className="mb-2">• या योजनेमध्ये सभासदांना गुंतवणुकीसाठी कोणत्याही कालावधीची मर्यादा नसते.</div>
          <div className="mb-2">• गुंतवणूक केलेली रक्कम कधीही काढता येते.</div>
          <div>• खाते सुरू केल्याच्या दिवसापासून किमान १५ दिवसानंतर जेवढे दिवस झाले असतील तेवढ्या दिवसांचे व्याजदर अदा केले जाते.</div>
        </>
      ),
      unfixedDetailsFeatures: [],
      pensionTitle: 'पेन्शन ठेव योजना',
      pensionTagline: 'वृद्धापकाळीची आर्थिक सुरक्षा योजना',
      pensionDesc: '• पेन्शन ठेव योजने अंतर्गत ग्राहक ठराविक कालावधीसाठी (किमान १ वर्ष) एक रकमी रक्कम गुंतवतात व त्यांना त्या रकमेच्या व्याजाच्या रकमेचे मासिक परतावा अदा केला जातो.',
      pensionFeatures: [],
      rdTitle: 'रिकरिंग ठेव योजना',
      rdTagline: '',
      rdDesc: (
        <>
          <div className="mb-2">• आर.डी. म्हणजेच रिकरिंग डिपॉझिट ही एक बचत योजना आहे.</div>
          <div>• आर.डी. अंतर्गत ठराविक रक्कम दरमहा गुंतवणूक केल्यानंतर या गुंतवणुकीवर ठराविक दराने व्याज मिळते.</div>
        </>
      ),
      rdFeatures: [],
      rdTable: {
        title: 'रिकरिंग ठेवी योजना (व्याजदर)',
        headers: ['मासिक हप्ता', 'वर्ष', 'मिळणारी रक्कम'],
        rows: [
          ['३३५', '५ वर्ष', '२५,०००'],
          ['६७०', '५ वर्ष', '५०,०००'],
          ['१,३४०', '५ वर्ष', '१,००,०००'],
          ['६,७००', '५ वर्ष', '५,००,०००'],
          ['१३,४००', '५ वर्ष', '१०,००,०००']
        ]
      },
      halfPriceTitle: 'दाम दीडपट ठेव योजना',
      halfPriceTagline: 'विशेष 150% परतावा योजना',
      halfPriceDesc: '• दामदीडपट ठेव योजनेंतर्गत एक ठराविक एकरकमी रक्कम बँकेत गुंतवतात व बँकेच्या धोरणांतर्गत ठराविक नियोजित मुदतीनंतर ग्राहकांना गुंतवलेल्या रकमेच्या दीडपट रक्कम प्रदान केली जाते.',
      halfPriceFeatures: [],
      doubleMoneyTitle: 'दामदुपट ठेव योजना',
      doubleMoneyTagline: 'तुमची गुंतवणूक दुप्पट करा',
      doubleMoneyDesc: '• दामदुपट ठेव योजनेंतर्गत एक ठराविक एकरकमी रक्कम बँकेत गुंतवतात व बँकेच्या धोरणांतर्गत ठराविक नियोजित मुदतीनंतर ग्राहकांना गुंतवलेल्या रकमेच्या दुप्पट रक्कम प्रदान केली जाते.',
      doubleMoneyFeatures: [],
      fourfoldTitle: 'दामचौपट ठेव योजना',
      fourfoldTagline: 'तुमची गुंतवणूक चौपट करा',
      fourfoldDesc: '• दामचौपट ठेव योजनेंमध्ये एक ठराविक एकरकमी रक्कम बँकेत गुंतवतात व बँकेच्या धोरणांतर्गत जी मुदत ठरलेली आहे त्या मुदतीनंतर ग्राहकांना गुंतवलेल्या रकमेच्या चौपट रक्कम प्रदान केली जाते.',
      fourfoldFeatures: [],
      sujataTitle: 'सुजाता ठेव योजना',
      sujataTagline: 'दैनंदिन बचत ठेव',
      sujataDesc: '• शिवप्रगती / सुजाता ठेव योजनेला दैनंदिन बचत ठेव अर्थात पिग्मी असे संबोधले जाते. या योजनेत बँक एजंटी नेमणूक करते व त्यांच्यामार्फत ग्राहकांकडून ठराविक रक्कम जमा केली जाते.',
      sujataFeatures: [],
      subhmangalTitle: 'शुभमंगल ठेव योजना',
      subhmangalTagline: 'मुलांच्या लग्न खर्चांसाठी डिझाइन केलेली',
      subhmangalDesc: (
        <>
          <div className="mb-2">• विवाहसोहळा अविस्मरणीय करण्यासाठी ही ठेव योजना उपयोगी ठरते.</div>
          <div>• यामध्ये ग्राहक १८ वर्षांकरिता ठराविक रक्कम गुंतवतात व त्यांना त्या रकमेचा १८ वर्षांनंतर बँकेच्या धोरणाप्रमाणे परतावा अदा केला जातो.</div>
        </>
      ),
      subhmangalFeatures: [],
      subhmangalTable: {
        title: 'शुभमंगल ठेव योजना (व्याजदर)',
        headers: ['रक्कम', 'मुदत', 'मिळणारी रक्कम'],
        rows: [
          ['१,३१,०००', '१८ वर्ष', '५,००,०००'],
          ['२,६१,०००', '१८ वर्ष', '१०,००,०००'],
          ['३,०९,०००', '१८ वर्ष', '१२,५०,०००']
        ]
      },
      billionaireTitle: 'कोट्याधीश ठेव योजना ',
      billionaireTagline: 'उच्च-परतावा दीर्घकालीन ठेव योजना',
      billionaireDesc: '• शिवप्रताप मल्टीस्टेट कोट्याधीश ठेव योजनेंतर्गत ग्राहकांना आपल्या मासिक २१००० रु. च्या गुंतवणुकीवर १८ वर्षांत १ कोटी रुपये रक्कम अदा केली जाते.',
      billionaireFeatures: [],
      childSavingTitle: 'शिवप्रताप बालसंचय योजना(रिकरिंग ठेव)',
      childSavingTagline: '',
      childSavingDesc: (
        <>
          <div className="mb-2">आजच्या स्पर्धात्मक आणि बदलत्या काळात मुलांना केवळ शिक्षण नव्हे तर आर्थिक शिस्त व नियोजनाची जाण असणे तितकेच महत्त्वाचे आहे. प्रत्येक महिन्यात थोडी रक्कम वाचवली तरी ती भविष्यात मोठी आर्थिक ताकद बनू शकते, ही सवय लहानपणापासून मुलांमध्ये रुजावी यासाठीच शिवप्रताप मल्टीस्टेट ने "शिवप्रताप बालसंचय योजना"(रिकरिंग ठेव) सुरू केली आहे.</div>
          <div className="mb-2">ही योजना मुलांमध्ये बचतीची शिस्त निर्माण करते, पालकांना नियोजनबद्ध गुंतवणुकीचा मार्ग देते आणि भविष्यातील शिक्षण, करिअर व स्वप्नांसाठी मजबूत आर्थिक आधार उपलब्ध करून देते. सुरक्षित गुंतवणूक, आकर्षक व्याजदर आणि हमखास परतावा यामुळे ही योजना प्रत्येक कुटुंबासाठी अत्यंत उपयुक्त ठरते.</div>
          <div className="mb-2">ही योजना मुलांमध्ये बचतीची संस्कृती निर्माण करण्यासाठी तयार केली आहे. दरमहा फक्त ₹50, ₹100, ₹300 किंवा ₹500 अशा रकमा जमा करून 60 महिन्यांत आकर्षक व्याजासह एक मोठी रक्कम तयार करता होते, नियमित बचतीवर उत्कृष्ट परतावा मिळतो, ज्यामुळे मुलांच्या प्राथमिक व माध्यमिक शिक्षणासाठी सुरक्षित निधी तयार होतो.</div>
          <div className="mb-4"><strong>मुख्य वैशिष्ट्ये :</strong></div>
          <ul className="list-none space-y-1 mb-4">
            <li>✓ कमी रकमेपासून बचतीची सुरुवात</li>
            <li>✓ ६० महिन्यांचा निश्चित कालावधी</li>
            <li>✓ आकर्षक व्याजदर</li>
            <li>✓ शिक्षण, फी, स्पर्धा परीक्षा, कौशल्य विकास अशा गरजांसाठी परिपूर्ण</li>
            <li>✓ मुलांच्या नावाने खाते उघडण्याची सुविधा</li>
          </ul>
        </>
      ),
      childSavingFeatures: [],
      childSavingTable: {
        title: 'ठेव योजनेचा तपशील',
        headers: ['मासिक हप्ता (₹)', 'एकूण हप्ते (महिने)', 'एकूण जमा रक्कम (₹)', '५ वर्षांनंतर मिळणारी अंतिम रक्कम (₹)'],
        rows: [
          ['50', '60', '3,000.00', '3,700.00'],
          ['100', '60', '6,000.00', '7,500.00'],
          ['300', '60', '18,000.00', '22,000.00'],
          ['500', '60', '30,000.00', '37,000.00']
        ]
      },
      ujwalSwapnapurtiTitle: 'शिवप्रताप उज्ज्वल स्वप्नपूर्ती योजना',
      ujwalSwapnapurtiTagline: '',
      ujwalSwapnapurtiDesc: (
        <>
          <div className="mb-2">ही योजना मुलांच्या उच्च शिक्षणासाठी किंवा १८ वर्षांवरील महत्त्वाच्या टप्प्यांसाठी आर्थिक सुरक्षा देण्यासाठी तयार केली आहे. मुलाचे सध्याचे वय जितके कमी, तितका मासिक हप्ता कमी आणि गुंतवणुकीचा कालावधी जास्त असतो. या योजनेचा उद्देश मुलाचे वय १८ पूर्ण होताच किमान ₹5,00,000 रक्कम उपलब्ध करून देणे हा आहे. दीर्घकालीन गुंतवणुकीवर मोठा परतावा मिळतो आणि मुलांच्या भविष्यासाठी भक्कम आर्थिक कोष निर्माण होतो.</div>
          <div className="mb-4"><strong>मुख्य वैशिष्ट्ये :</strong></div>
          <ul className="list-none space-y-1 mb-4">
            <li>✓ १८ वर्षे पूर्ण होताच ₹5 लाखांचा लाभ</li>
            <li>✓ मुलाच्या वयानुसार मासिक हप्ता निश्चित</li>
            <li>✓ ६ ते १७ वर्षे कालावधी — नियोजनबद्ध दीर्घकालीन गुंतवणूक</li>
            <li>✓ उच्च शिक्षण, करिअर, कौशल्य विकासासाठी सर्वोत्तम आर्थिक सुरक्षा</li>
            <li>✓ सुरक्षित, विश्वासार्ह आणि स्थिर व्याजदर</li>
          </ul>
        </>
      ),
      ujwalSwapnapurtiFeatures: [],
      ujwalSwapnapurtiTable: {
        title: 'योजनेचा तपशील',
        headers: ['सध्याचे वय (वर्षे)', 'हप्ता भरण्याची वर्षे', 'एकूण हप्ते (महिने)', 'मासिक हप्ता (₹)', 'एकूण जमा रक्कम (₹)', '१८ वर्षे पूर्ण होताच मिळणारी रक्कम'],
        rows: [
          ['1', '17', '204', '1100', '2,24,400', '5,00,000'],
          ['2', '16', '192', '1240', '2,38,080', '5,00,000'],
          ['3', '15', '180', '1390', '2,50,200', '5,00,000'],
          ['4', '14', '168', '1560', '2,62,080', '5,00,000'],
          ['5', '13', '156', '1770', '2,76,120', '5,00,000'],
          ['6', '12', '144', '2010', '2,89,440', '5,00,000'],
          ['7', '11', '132', '2310', '3,04,920', '5,00,000'],
          ['8', '10', '120', '2660', '3,19,200', '5,00,000'],
          ['9', '9', '108', '3100', '3,34,800', '5,00,000'],
          ['10', '8', '96', '3660', '3,51,360', '5,00,000'],
          ['11', '7', '84', '4380', '3,67,920', '5,00,000'],
          ['12', '6', '72', '5350', '3,85,200', '5,00,000']
        ]
      },
      unnatiLakhpatiTitle: 'उन्नती महिला लखपती ठेव योजना (Recurring)',
      unnatiLakhpatiTagline: 'महिला सक्षमीकरणाची दिशा',
      unnatiLakhpatiDesc: (
        <>
          <div className="mb-4">
            <h4 className="font-bold text-lg mb-2 text-black">मुदत ठेव @ 10%*</h4>
            <p className="mb-2">आपल्या भविष्यासाठी सुरक्षित गुंतवणूक, उत्तम व्याजदरासह! आपल्या कष्टाचे योग्य मूल्यवर्धन करण्यासाठी मुदत ठेव योजना हा योजनाबद्ध आणि सुरक्षित पर्याय आहे. आपले पैसे सुरक्षित ठेवून मोठा फायदा मिळवण्यासाठी आपल्या भविष्याला समृद्ध करा!</p>
          </div>
          
          <div className="mb-4">
            <h4 className="font-bold text-lg mb-2 text-black">उन्नती महिला बचत खाते</h4>
            <ul className="list-disc ml-5 space-y-1 text-gray-700">
              <li>१ लाख ते ५ लाख रु. पर्यंतच्या ठेवांसाठी किमान व कमाल मर्यादा</li>
              <li>सोबत २५ हजार ते १ लाख रु. पर्यंत वैयक्तिक अपघात संरक्षण</li>
              <li>४%* पर्यंत व्याज</li>
              <li>मोफत मोबाईल बँकिंग अॅप (NEFT/RTGS/IMPS/UPI)</li>
              <li>भारतातील कोणत्याही बँकेतून Google Pay, PhonePe, Paytm इ. अॅपमधून पैसे स्वीकारण्याची सोय</li>
              <li>मोफत लॉकर सुविधा</li>
              <li>व्यवसायासाठी UPI QR कोड सुविधा</li>
              <li>विविध कर्ज योजनांची सुविधा</li>
            </ul>
          </div>

          <div className="mb-4">
            <h4 className="font-bold text-lg mb-2 text-black">उन्नती महिला लखपती ठेव योजना (Recurring)</h4>
            <p className="mb-2"><strong>महिला सक्षमीकरणाची दिशा — शिवप्रताप मल्टीस्टेटच्या रिकरिंग योजनांसह…</strong></p>
            <p className="mb-2">महिला हा समाजाचा मूलभूत पाया आहे आणि तिच्या आर्थिक स्वावलंबनाचा मार्ग अधिक सुगम व सुरक्षित बनवण्यासाठी शिवप्रताप मल्टीस्टेटची खास उन्नती महिला रिकरिंग ठेव योजना.</p>
          </div>

          <div className="mb-2"><strong>मुख्य वैशिष्ट्ये :</strong></div>
          <ul className="list-none space-y-1 mb-4">
            <li>✓ नियमित महिन्याची गुंतवणूक योजना</li>
            <li>✓ उत्कृष्ट व्याजदर</li>
            <li>✓ सुलभ मासिक हप्ते</li>
            <li>✓ सुरक्षित गुंतवणूक</li>
            <li>✓ ठेव तारण कर्ज सुविधा</li>
          </ul>
        </>
      ),
      unnatiLakhpatiFeatures: [],
      unnatiLakhpatiTable: {
        title: 'योजनेचा तपशील',
        headers: ['क्र.', 'मासिक हप्ता', 'मुदत', 'जमा होणारी रक्कम', 'मिळणारी रक्कम'],
        rows: [
          ['1', '₹7,970', '12 महिने', '₹95,640', '₹1,00,000'],
          ['2', '₹3,820', '24 महिने', '₹91,680', '₹1,00,000'],
          ['3', '₹2,440', '36 महिने', '₹87,840', '₹1,00,000'],
          ['4', '₹1,750', '48 महिने', '₹84,000', '₹1,00,000'],
          ['5', '₹1,340', '60 महिने', '₹80,400', '₹1,00,000']
        ]
      },
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
      if (schemeId.includes('recurring') || schemeId.includes('billionaire') || schemeId.includes('child-saving') || schemeId.includes('ujwal-swapnapurti') || schemeId.includes('unnati-lakhpati')) {
        setActiveCategory('recurring');
      } else if (schemeId.includes('unfixed')) {
        setActiveCategory('unfixed');
      } else if (schemeId.includes('pension') || schemeId.includes('half-price') || schemeId.includes('subhmangal') || schemeId.includes('double-money') || schemeId.includes('fourfold') || schemeId.includes('fixed-deposit')) {
        setActiveCategory('fixed');
      } else if (schemeId.includes('small-saving') || schemeId.includes('sujata')) {
        setActiveCategory('small-saving');
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
      table: t.rdTable,
      color: 'from-green-500 to-green-700'
    },
    {
      id: 'child-saving',
      title: t.childSavingTitle,
      icon: <FaSeedling />,
      tagline: t.childSavingTagline,
      description: t.childSavingDesc,
      features: t.childSavingFeatures,
      table: t.childSavingTable,
      color: 'from-teal-500 to-teal-700'
    },
    {
      id: 'ujwal-swapnapurti',
      title: t.ujwalSwapnapurtiTitle,
      icon: <FaSeedling />,
      tagline: t.ujwalSwapnapurtiTagline,
      description: t.ujwalSwapnapurtiDesc,
      features: t.ujwalSwapnapurtiFeatures,
      table: t.ujwalSwapnapurtiTable,
      color: 'from-cyan-500 to-cyan-700'
    },
    {
      id: 'unnati-lakhpati',
      title: t.unnatiLakhpatiTitle,
      icon: <FaHandHoldingUsd />,
      tagline: t.unnatiLakhpatiTagline,
      description: t.unnatiLakhpatiDesc,
      features: t.unnatiLakhpatiFeatures,
      table: t.unnatiLakhpatiTable,
      color: 'from-pink-500 to-pink-700'
    }
  ];

  // Fixed Deposit Schemes Data
  const fixedDepositSchemes = [
    {
      id: 'fixed-deposit',
      title: t.fdTitle,
      icon: <FaShieldAlt />,
      tagline: t.fdTagline,
      description: t.fdDesc,
      features: t.fdFeatures,
      color: 'from-blue-600 to-blue-800'
    },
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
      id: 'double-money',
      title: t.doubleMoneyTitle,
      icon: <FaCoins />,
      tagline: t.doubleMoneyTagline,
      description: t.doubleMoneyDesc,
      features: t.doubleMoneyFeatures,
      color: 'from-indigo-500 to-indigo-700'
    },
    {
      id: 'fourfold',
      title: t.fourfoldTitle,
      icon: <FaGem />,
      tagline: t.fourfoldTagline,
      description: t.fourfoldDesc,
      features: t.fourfoldFeatures,
      color: 'from-teal-500 to-teal-700'
    },
    {
      id: 'subhmangal',
      title: t.subhmangalTitle,
      icon: <FaRing />,
      tagline: t.subhmangalTagline,
      description: t.subhmangalDesc,
      features: t.subhmangalFeatures,
      table: t.subhmangalTable,
      color: 'from-pink-500 to-pink-700'
    }
  ];

  // Small Saving Schemes Data
  const smallSavingSchemes = [
    {
      id: 'sujata',
      title: t.sujataTitle,
      icon: <FaHandHoldingUsd />,
      tagline: t.sujataTagline,
      description: t.sujataDesc,
      features: t.sujataFeatures,
      color: 'from-pink-500 to-pink-700'
    }
  ];

  // Unfixed Deposit Schemes Data
  const unfixedDepositSchemes = [
    {
      id: 'unfixed-deposit',
      title: t.unfixedDetailsTitle,
      icon: <FaHandHoldingUsd />,
      tagline: t.unfixedDetailsTagline,
      description: t.unfixedDetailsDesc,
      features: t.unfixedDetailsFeatures,
      color: 'from-orange-500 to-orange-700'
    }
  ];

  // Get schemes based on active category
  const getActiveSchemes = () => {
    switch(activeCategory) {
      case 'recurring': return recurringSchemes;
      case 'fixed': return fixedDepositSchemes;
      case 'small-saving': return smallSavingSchemes;
      case 'unfixed': return unfixedDepositSchemes;
      default: return recurringSchemes;
    }
  };

  // Get category title
  const getCategoryTitle = () => {
    switch(activeCategory) {
      case 'recurring': return t.recurringSchemes;
      case 'fixed': return t.fixedDepositSchemes;
      case 'small-saving': return t.smallSavingSchemes;
      case 'unfixed': return t.unfixedDepositSchemes;
      default: return t.recurringSchemes;
    }
  };

  // Get category icon
  const getCategoryIcon = () => {
    switch(activeCategory) {
      case 'recurring': return <FaPiggyBank />;
      case 'fixed': return <FaBuilding />;
      case 'small-saving': return <FaSeedling />;
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
            onClick={() => setActiveCategory('small-saving')}
            className={`px-4 sm:px-6 md:px-8 py-3 sm:py-4 rounded-xl font-semibold transition-all duration-300 transform hover:-translate-y-1 flex items-center gap-2 sm:gap-3 text-sm sm:text-base ${
              activeCategory === 'small-saving' ? 'shadow-xl scale-105' : 'hover:shadow-lg'
            }`}
            style={{
              background: activeCategory === 'small-saving' 
                ? `linear-gradient(135deg, ${primaryColor} 0%, #d15679 100%)`
                : 'white',
              color: activeCategory === 'small-saving' ? 'white' : primaryColor,
              border: `2px solid ${activeCategory === 'small-saving' ? 'transparent' : `${primaryColor}30`}`
            }}
          >
            <FaSeedling className="text-sm sm:text-base" />
            <span className="hidden sm:inline">{t.smallSavingSchemes}</span>
            <span className="sm:hidden">{t.smallSavingSchemes.split(' ')[0]}</span>
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
                {activeCategory === 'small-saving' && t.smallSavingDesc}
                {activeCategory === 'unfixed' && t.unfixedDepositDesc}
              </p>
            </div>
          </div>
        </div>

        {/* Schemes Grid */}
        <div className={`grid gap-8 mb-16 ${
          activeCategory === 'recurring' 
            ? 'grid-cols-1 max-w-5xl mx-auto' 
            : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
        }`}>
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
                {scheme.features && scheme.features.length > 0 && (
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
                )}

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
                
                {/* Scheme Table */}
                {scheme.table && (
                  <div className="mt-6 border-t pt-6" style={{ borderColor: `${primaryColor}20` }}>
                    <h4 className="font-bold mb-4 text-center text-lg" style={{ color: scheme.id === 'unnati-lakhpati' ? 'black' : primaryColor }}>
                      {scheme.table.title}
                    </h4>
                    
                    {/* Desktop View - Standard Table */}
                    <div className="hidden md:block overflow-x-auto rounded-xl border shadow-sm" style={{ borderColor: `${primaryColor}20` }}>
                      <table className="w-full text-sm text-left">
                        <thead className="bg-gray-50 text-gray-700 font-bold uppercase tracking-wider">
                          <tr>
                            {scheme.table.headers.map((header, idx) => (
                              <th 
                                key={idx} 
                                className="p-4 border-b whitespace-nowrap bg-opacity-50"
                                style={{ backgroundColor: `${primaryColor}05` }}
                              >
                                {header}
                              </th>
                            ))}
                          </tr>
                        </thead>
                        <tbody>
                          {scheme.table.rows.map((row, rowIdx) => (
                            <tr 
                              key={rowIdx} 
                              className="hover:bg-gray-50 border-b last:border-0 transition-colors duration-150"
                            >
                              {row.map((cell, cellIdx) => (
                                <td key={cellIdx} className="p-4 whitespace-nowrap text-gray-700 font-medium">
                                  {cell}
                                </td>
                              ))}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>

                    {/* Mobile View - Card Layout */}
                    <div className="md:hidden space-y-4">
                      {scheme.table.rows.map((row, rowIdx) => (
                        <div 
                          key={rowIdx} 
                          className="bg-gray-50 rounded-xl p-4 border shadow-sm"
                          style={{ borderColor: `${primaryColor}20` }}
                        >
                          {row.map((cell, cellIdx) => (
                            <div key={cellIdx} className="flex justify-between items-center py-2 border-b last:border-0 border-gray-200">
                              <span className="text-xs font-bold text-gray-500 uppercase mr-4">
                                {scheme.table.headers[cellIdx]}
                              </span>
                              <span className="text-sm font-medium text-gray-800 text-right">
                                {cell}
                              </span>
                            </div>
                          ))}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
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