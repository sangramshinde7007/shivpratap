import React, { useState, useEffect } from 'react';
import { FaHistory, FaTrophy, FaUsers, FaShieldAlt, FaHandshake, FaBuilding, FaClock, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';
import { useLanguage } from '../../contexts/LanguageContext';

const AboutUs = () => {
  const { language } = useLanguage();
  const isMarathi = language === 'mr';

  // Translations for About Us page
  const translations = {
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
      foundingText1: 'सन २००२ साली आमच्या भागातील गलाई व्यवसायिकांनी एकत्र येऊन स्व. प्रतापशेठ (दादा) साळुंखे यांच्याकडे सहकारी पतसंस्था स्थापनेची कल्पना मांडली. त्या काळात सहकार क्षेत्र अत्यंत कठीण परिस्थितीतून जात होते—अनेक संस्था बुडालेल्या, काही बुडण्याच्या मार्गावर, आणि ठेवीदारांमध्ये प्रचंड अस्थिरता निर्माण झाली होती.',
      foundingText2: 'अशा आव्हानात्मक परिस्थितीत नवी संस्था सुरू करणे हे खरोखर धाडसी पाऊल होते. स्व. प्रतापशेठ (दादा) साळुंखे व बँकिंग क्षेत्राची सखोल माहिती असणारे अ‍ॅड. विठ्ठलराव साळुंखे यांनी परिस्थितीचा विस्तृत अभ्यास करून, योग्य व्यवस्थापन, पारदर्शक व्यवहार आणि जबाबदार कर्जपुरवठा यांच्या आधारे संस्था सक्षमपणे चालवण्याचा निर्णय घेतला.',
      establishmentDate: 'स्थापना',
      establishmentDateValue: '२६ जून २००२',
      motto: '"सेवा आणि सुरक्षा"',
      inaugurationTitle: 'उद्घाटन सोहळा',
      inaugurationText: 'यानंतर २६ जून २००२ रोजी संस्थेची स्थापना झाली आणि ११ जुलै २००२ रोजी संस्थेचे भव्य उद्घाटन स्व.डॉ. पतंगराव कदम, मा. जयंतराव पाटील, व मा. हर्षवर्धन पाटील या तत्कालीन मान्यवरांच्या हस्ते पार पडले.',
      inaugurationCards: [
        { title: 'विशेष सोहळा', desc: 'अनेक आजी–माजी आमदार उपस्थित' },
        { title: 'महत्वपूर्ण निर्णय', desc: 'राजकीय हस्तक्षेपापासून दूर राहणे' },
        { title: 'वाढीचा प्रारंभ', desc: 'व्यापारी वर्ग संस्थेशी जोडला गेला' }
      ],
      expansionTitle: 'विस्तार आणि मल्टीस्टेट दर्जा',
      expansionText1: 'संस्थेची वाढ सुरुवातीपासूनच उल्लेखनीय राहिली. आपल्या परिसरातील यंत्रमाग, भाजीपाला, पोल्ट्री, द्राक्ष तसेच अन्य व्यापारी वर्ग संस्थेशी जोडत गेले आणि संस्था सर्व क्षेत्रांसाठी कर्जपुरवठा करू लागली.',
      expansionHighlight: '२०१२: मल्टीस्टेट दर्जा मिळवला, पश्चिम महाराष्ट्रातील पहिली मल्टीस्टेट सहकारी पतसंस्था',
      expansionText2: 'संस्थेचे गलाई बांधव देशभर पसरलेले असल्यामुळे विविध राज्यांतून संस्थेने आपले कामकाज वाढवावे, अशी मागणी होत होती. या मागणीचा सकारात्मक विचार करून संस्थेने २०१२ साली मल्टीस्टेट दर्जा मिळवला, आणि पश्चिम महाराष्ट्रातील मल्टीस्टेट होणारी पहिली सहकारी पतसंस्था म्हणून मान्यता मिळवली.',
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
      socialCommitmentTitle: 'सामाजिक बांधिलकी',
      socialCommitmentText: 'संस्था आर्थिक सेवांबरोबरच सामाजिक बांधिलकी जपत राहिली आहे. आर्थिक साक्षरता, महिला सक्षमीकरण, ग्रामीण भागातील छोट्या उद्योजकांना प्रोत्साहन, विद्यार्थ्यांसाठी मार्गदर्शन तसेच समाजहिताचे विविध उपक्रम राबवण्यावरही संस्था प्रामाणिकपणे लक्ष देते.',
      socialCommitmentBadge: 'समाज विकासासाठी समर्पित',
      todayTitle: 'आजची संस्था',
      todayText: 'आज शिवप्रताप मल्टीस्टेट ही संस्था मजबूत आर्थिक पायावर उभी असून सभासदांचा विश्वास, व्यवस्थापनाची दूरदृष्टी, पारदर्शकता आणि कर्मचार्‍यांचे समर्पण यांच्या बळावर सातत्याने प्रगती करत आहे.',
      todayMotto: '"सहकाराच्या मूल्यांना अनुसरून सर्वांना सोबत घेऊन, सुरक्षित व विश्वासार्ह बँकिंग सेवा देणे"',
      todayCommitment: 'संस्थेच्या प्रगतीची पताका अधिक तेजाने फडकवत ठेवणे हीच आमची बांधिलकी आहे.',
      contactTitle: 'आमच्याशी संपर्क साधा',
      contactSubtitle: 'आमच्या सेवा आणि उत्पादनांबद्दल अधिक माहितीसाठी संपर्क करा',
      contactAddress: 'पत्ता',
      contactPhone: 'फोन',
      contactEmail: 'ईमेल'
    }
  };

  // Get current language content
  const currentContent = translations[language];

  const [stats, setStats] = useState([
    { value: 0, target: 2002, suffix: '', label: currentContent.stats[0].label, icon: FaHistory, color: 'blue' },
    { value: 0, target: 2012, suffix: '', label: currentContent.stats[1].label, icon: FaTrophy, color: 'green' },
    { value: 0, target: 1, suffix: currentContent.stats[2].suffix, label: currentContent.stats[2].label, icon: FaUsers, color: 'amber' },
    { value: 0, target: 22, suffix: currentContent.stats[3].suffix, label: currentContent.stats[3].label, icon: FaClock, color: 'purple' }
  ]);

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setStats(prevStats => 
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Animated Background Pattern */}
      <div className="fixed inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(45deg, #3b82f6 0, #3b82f6 1px, transparent 1px, transparent 15px)`,
          backgroundSize: '20px 20px'
        }}></div>
      </div>
      {/* Enhanced Header Section */}
      <div className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white py-20 px-4 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-32 h-32 bg-blue-400 rounded-full opacity-10 animate-pulse"></div>
          <div className="absolute bottom-10 right-20 w-40 h-40 bg-indigo-400 rounded-full opacity-10 animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-cyan-400 rounded-full opacity-10 animate-pulse delay-500"></div>
        </div>
        
        <div className="max-w-6xl mx-auto relative z-10">
          <div className={`text-center transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full shadow-2xl mb-6">
              <FaBuilding className="text-4xl text-white" />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
              {currentContent.pageTitle}
            </h1>
            <div className="h-1 w-32 bg-gradient-to-r from-amber-400 to-orange-500 mx-auto mb-6 rounded-full shadow-lg"></div>
            <h2 className="text-2xl md:text-3xl font-semibold text-center text-blue-100 mb-8">
              {currentContent.subtitle}
            </h2>
            <div className="flex flex-wrap justify-center gap-4">
              <span className="px-4 py-2 bg-blue-700/50 backdrop-blur-sm rounded-full text-sm border border-blue-400/30">
                <FaTrophy className="inline mr-2" />{currentContent.badges.multistate}
              </span>
              <span className="px-4 py-2 bg-blue-700/50 backdrop-blur-sm rounded-full text-sm border border-blue-400/30">
                <FaShieldAlt className="inline mr-2" />{currentContent.badges.secureBanking}
              </span>
              <span className="px-4 py-2 bg-blue-700/50 backdrop-blur-sm rounded-full text-sm border border-blue-400/30">
                <FaHandshake className="inline mr-2" />{currentContent.badges.yearsService}
              </span>
            </div>
          </div>
        </div>
        
        {/* Enhanced Wave Design */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full h-full">
            <path fill="#ffffff" fillOpacity="1" d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,58.7C960,64,1056,64,1152,58.7C1248,53,1344,43,1392,37.3L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"></path>
          </svg>
        </div>
      </div>

      {/* Enhanced Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-16 -mt-10 relative z-10">
        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div 
                key={index}
                className={`bg-white p-6 rounded-2xl shadow-lg border-t-4 border-${stat.color}-500 transform transition-all duration-500 hover:scale-105 hover:shadow-2xl ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
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
        <div className={`bg-white rounded-3xl shadow-2xl p-8 md:p-12 mb-12 transform transition-all duration-1000 hover:shadow-3xl ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-2/3">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-full flex items-center justify-center mr-4">
                  <FaHistory className="text-white text-xl" />
                </div>
                <h3 className="text-3xl font-bold text-gray-800">
                  {currentContent.foundingTitle}
                </h3>
              </div>
              <div className="space-y-6">
                <p className="text-gray-700 text-lg leading-relaxed">
                  {currentContent.foundingText1}
                </p>
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-xl border-l-4 border-blue-600">
                  <p className="text-gray-700 text-lg leading-relaxed">
                    {currentContent.foundingText2}
                  </p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/3 flex justify-center">
              <div className="bg-gradient-to-br from-blue-600 to-indigo-700 p-8 rounded-2xl shadow-2xl text-white text-center transform transition-all duration-500 hover:scale-105">
                <div className="text-6xl mb-4">🏛️</div>
                <h4 className="text-2xl font-bold mb-2">{currentContent.establishmentDate}</h4>
                <p className="text-xl font-semibold mb-4">{currentContent.establishmentDateValue}</p>
                <div className="bg-white/20 backdrop-blur-sm p-4 rounded-xl">
                  <p className="text-lg font-semibold">{currentContent.motto}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Inauguration Section */}
        <div className="bg-gradient-to-r from-amber-50 to-yellow-50 rounded-2xl shadow-xl p-6 md:p-8 mb-10 border-l-8 border-amber-500">
          <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
            <span className="bg-amber-500 text-white px-4 py-2 rounded-lg">
              {currentContent.inaugurationTitle}
            </span>
          </h3>
          <p className="text-gray-700 text-lg leading-relaxed mb-6 text-center">
            {currentContent.inaugurationText}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            {currentContent.inaugurationCards.map((card, index) => (
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
            <span className="border-b-4 border-blue-600 pb-2">{currentContent.expansionTitle}</span>
          </h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 relative z-10">
            <div>
              <p className="text-gray-700 text-lg leading-relaxed mb-4">
                {currentContent.expansionText1}
              </p>
              <div className="bg-blue-50 p-5 rounded-xl mt-6 border border-blue-200">
                <h4 className="font-bold text-blue-800 text-lg mb-2">🏆 {!isMarathi ? 'Historic Achievement' : 'ऐतिहासिक विक्रम'}</h4>
                <p className="text-blue-700">
                  {currentContent.expansionHighlight}
                </p>
              </div>
            </div>
            
            <div>
              <p className="text-gray-700 text-lg leading-relaxed">
                {currentContent.expansionText2}
              </p>
            </div>
          </div>
        </div>

        {/* Technology & Services Section */}
        <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl shadow-xl p-6 md:p-8 mb-10">
          <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">
            <span className="inline-block bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 py-3 rounded-xl shadow-lg">
              {currentContent.technologyTitle}
            </span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              {currentContent.technologyCards.slice(0, 2).map((card, index) => (
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
              {currentContent.technologyCards.slice(2, 4).map((card, index) => (
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

        {/* Infrastructure & Services Grid */}
        <div className="mb-10">
          <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">
            <span className="inline-block border-b-4 border-blue-600 pb-2">
              {currentContent.facilitiesTitle}
            </span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {currentContent.facilitiesCards.map((item, index) => (
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
            {currentContent.financialServicesTitle}
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentContent.financialServices.map((service, index) => (
              <div 
                key={index}
                className="bg-white p-4 rounded-lg shadow-sm border border-green-200 flex items-center justify-center hover:bg-green-50 transition-colors duration-300"
              >
                <span className="text-green-700 font-medium">{service}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Social Commitment */}
        <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl shadow-xl p-6 md:p-8 mb-10">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-2/3">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                {currentContent.socialCommitmentTitle}
              </h3>
              <p className="text-gray-700 text-lg leading-relaxed mb-4">
                {currentContent.socialCommitmentText}
              </p>
            </div>
            <div className="md:w-1/3 flex justify-center mt-6 md:mt-0">
              <div className="bg-gradient-to-br from-purple-100 to-pink-100 p-6 rounded-xl shadow-lg">
                <div className="text-6xl mb-4 text-center">🤝</div>
                <p className="text-purple-800 font-semibold text-center">{currentContent.socialCommitmentBadge}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Conclusion Section */}
        <div className="bg-gradient-to-r from-blue-900 to-indigo-900 text-white rounded-2xl shadow-2xl p-6 sm:p-8 md:p-12 text-center">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">{currentContent.todayTitle}</h3>
          
          <div className="max-w-4xl mx-auto px-2 sm:px-4">
            <p className="text-base sm:text-lg md:text-xl leading-relaxed mb-4 sm:mb-6 text-blue-100">
              {currentContent.todayText}
            </p>
            
            <div className="bg-gradient-to-r from-amber-500 to-yellow-500 inline-block px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 rounded-full shadow-lg mt-3 sm:mt-4">
              <p className="text-sm sm:text-base md:text-xl font-bold">
                {currentContent.todayMotto}
              </p>
            </div>
          </div>
          
          <div className="mt-6 sm:mt-8 md:mt-10 pt-4 sm:pt-6 border-t border-blue-400">
            <p className="text-blue-200 text-sm sm:text-base md:text-lg">
              {currentContent.todayCommitment}
            </p>
          </div>
        </div>

        {/* Enhanced Contact Section */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-3xl shadow-2xl p-8 md:p-12 text-white">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-4">{currentContent.contactTitle}</h3>
            <p className="text-blue-100 text-lg">{currentContent.contactSubtitle}</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4">
                <FaMapMarkerAlt className="text-2xl" />
              </div>
              <h4 className="font-bold text-lg mb-2">{currentContent.contactAddress}</h4>
              <p className="text-blue-100">Shivpratap Gold Tower, Power House Rd, Hanmant Bazar, Vita, Maharashtra 415311</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4">
                <FaPhone className="text-2xl" />
              </div>
              <h4 className="font-bold text-lg mb-2">{currentContent.contactPhone}</h4>
              <p className="text-blue-100">+91 9582837032</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4">
                <FaEnvelope className="text-2xl" />
              </div>
              <h4 className="font-bold text-lg mb-2">{currentContent.contactEmail}</h4>
              <p className="text-blue-100">customercare@shivpratapmultistate.com</p>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-xl shadow-lg text-center border-t-4 border-blue-500">
            <div className="text-3xl font-bold text-blue-600">{!isMarathi ? '2002' : '२००२'}</div>
            <div className="text-gray-600 mt-2">{currentContent.stats[0].label}</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg text-center border-t-4 border-green-500">
            <div className="text-3xl font-bold text-green-600">{!isMarathi ? '2012' : '२०१२'}</div>
            <div className="text-gray-600 mt-2">{currentContent.stats[1].label}</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg text-center border-t-4 border-amber-500">
            <div className="text-3xl font-bold text-amber-600">{!isMarathi ? 'First' : 'पहिली'}</div>
            <div className="text-gray-600 mt-2">{!isMarathi ? 'Multistate Institution in Western Maharashtra' : 'पश्चिम महाराष्ट्रातील मल्टीस्टेट संस्था'}</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg text-center border-t-4 border-purple-500">
            <div className="text-3xl font-bold text-purple-600">{!isMarathi ? '22+' : '२२+'}</div>
            <div className="text-gray-600 mt-2">{currentContent.stats[3].label}</div>
          </div>
        </div>
      </div>

      {/* Enhanced Footer */}
      {/* <footer className="bg-gradient-to-r from-gray-900 to-black text-white py-12 mt-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full flex items-center justify-center mr-3">
                  <FaBuilding className="text-white text-xl" />
                </div>
                <div>
                  <h4 className="text-xl font-bold">शिवप्रताप मल्टीस्टेट</h4>
                  <p className="text-gray-400 text-sm">नागरी सहकारी पतसंस्था लि.</p>
                </div>
              </div>
              <p className="text-gray-300">सेवा आणि सुरक्षा याच आमची खरी ओळख</p>
            </div>
            
            <div className="text-center md:text-left">
              <h4 className="text-lg font-bold mb-4">जलद दुवे</h4>
              <ul className="space-y-2">
                <li><a href="/" className="text-gray-300 hover:text-amber-400 transition-colors">मुख्यपृष्ठ</a></li>
                <li><a href="/about" className="text-gray-300 hover:text-amber-400 transition-colors">आमच्याबद्दल</a></li>
                <li><a href="/contact" className="text-gray-300 hover:text-amber-400 transition-colors">संपर्क</a></li>
                <li><a href="/gallery" className="text-gray-300 hover:text-amber-400 transition-colors">गॅलरी</a></li>
              </ul>
            </div>
            
            <div className="text-center md:text-right">
              <h4 className="text-lg font-bold mb-4">अनुसरण करा</h4>
              <div className="flex justify-center md:justify-end space-x-4 mb-4">
                <button type="button" className="w-10 h-10 bg-gray-700 hover:bg-amber-500 rounded-full flex items-center justify-center transition-colors">
                  <FaGlobe />
                </button>
                <button type="button" className="w-10 h-10 bg-gray-700 hover:bg-amber-500 rounded-full flex items-center justify-center transition-colors">
                  <FaEnvelope />
                </button>
              </div>
              <p className="text-gray-400 text-sm">आमच्यासोबत सोशल मीडियावर जोडले राहा</p>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-8 text-center">
            <p className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} Shivpratap Multistate Nagari Co-Op Credit Society Ltd. All rights reserved.
            </p>
          </div>
        </div>
      </footer> */}
    </div>
  );
};

export default AboutUs;