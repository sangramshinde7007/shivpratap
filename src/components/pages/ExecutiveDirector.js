import React, { useState } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { 
  FaUserTie, 
  FaChartLine, 
  FaUsers, 
  FaCogs, 
  FaShieldAlt, 
  FaLightbulb,
  FaHandshake,
  FaBullseye,
  FaClock,
  FaRocket,
  FaCrown,
  FaBalanceScale,
  FaRegCheckCircle,
  FaArrowRight
} from 'react-icons/fa';
import { GiTeamIdea } from 'react-icons/gi';
import executiveDirectorImage from '../Assets/Executive Directors.jpeg';

const ExecutiveDirector = () => {
  const { language } = useLanguage();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const primaryColor = '#b03462';

  // Translations
  const translations = {
    en: {
      name: "Shri. Vithalrao Salunkhe",
      designation: "Executive Director",
      organization: "Shivpratap Multistate Urban Cooperative Credit Society Ltd.",
      experience: "22+ years of experience in cooperative sector",
      qualifications: "Expertise in banking, management and legal fields",
      
      message: {
        title: "Executive Director's Message",
        content: `"Maintaining quality, speed and accuracy in the daily operations of the institution is our main objective. At the management level, continuous planning and implementation is done to ensure that the working procedures in all branches are uniform, transparent and customer-centric.

The institution's services include savings accounts, fixed deposits, various loan schemes, as well as digital and technology-based facilities. Special emphasis is placed on IT systems, internal control systems and staff training to ensure that members receive secure and convenient services.

Based on the trinity of staff dedication, strong management and members' trust, the institution is continuously progressing. In the future too, keeping in mind the changing financial needs, we are committed to moving forward as a more capable, trustworthy and service-oriented institution."`
      },

      subtitle: "Management leadership and institutional operational perspective",
      
      visionPillars: [
        {
          title: "Quality",
          description: "High standards in all services",
          icon: FaCrown,
          color: "from-blue-500 to-cyan-500"
        },
        {
          title: "Speed",
          description: "Rapid service delivery",
          icon: FaRocket,
          color: "from-purple-500 to-pink-500"
        },
        {
          title: "Accuracy",
          description: "Flawless transaction processes",
          icon: FaBullseye,
          color: "from-green-500 to-emerald-500"
        },
        {
          title: "Transparency",
          description: "Clear and open systems",
          icon: FaBalanceScale,
          color: "from-amber-500 to-orange-500"
        }
      ],

      focusAreas: [
        {
          title: "Technology Integration",
          description: "Use of modern technology",
          achievements: ["Core Banking System", "Digital Transactions", "Online Services"]
        },
        {
          title: "Staff Development",
          description: "Continuous training and skill development",
          achievements: ["Annual Training Programs", "Skill Enhancement", "Incentive Schemes"]
        },
        {
          title: "Customer Satisfaction",
          description: "Member-centric approach",
          achievements: ["24x7 Support", "Quick Problem Resolution", "Feedback System"]
        },
        {
          title: "Financial Stability",
          description: "Strong financial management",
          achievements: ["Risk Management", "Alternative Funds", "Profit Growth"]
        }
      ],

      achievements: [
        { metric: "2002", label: "Establishment Year", icon: FaClock },
        { metric: "2012", label: "Multistate Status", icon: FaChartLine },
        { metric: "50+", label: "Branches", icon: FaUsers },
        { metric: "99%", label: "Customer Satisfaction", icon: FaRegCheckCircle }
      ],

      experienceTitle: "Experience",
      qualificationsTitle: "Educational Qualifications",
      keyResponsibilities: "Key Responsibilities",
      responsibilities: [
        "Daily operations management",
        "Implementation of business policies",
        "Staff leadership and development",
        "Technical improvements and innovations",
        "Customer relationship management"
      ],
      leadershipPhilosophy: "Leadership Philosophy",
      leadershipText: "\"Focusing on strong management, teamwork and customer-centric approach is the secret of successful administration.\"",
      executivePerspective: "Executive Director's Perspective",
      operationalManagement: "Operational management and future dreams",
      managementPillars: "Four Pillars of Management",
      notableAchievements: "Notable Achievements",
      ourCommitment: "Our Commitment",
      commitmentText: "\"Under the efficient leadership of management, the institution is always on the path of development, protecting the trust of members and we are dedicated to providing more efficient services with the help of technology.\"",
      institutionInfo: "Institution Information",
      contactUs: "Contact Us"
    },
    mr: {
      name: "श्री. विठ्ठलराव साळुंखे",
      designation: "कार्यकारी संचालक",
      organization: "शिवप्रताप मल्टीस्टेट नागरी सहकारी पतसंस्था लि.",
      experience: "२२+ वर्षे सहकार क्षेत्रातील अनुभव",
      qualifications: "बँकिंग, व्यवस्थापन आणि कायदा क्षेत्रातील विशेष ज्ञान",
      
      message: {
        title: "कार्यकारी संचालकांचे मनोगत",
        content: `"संस्थेच्या दैनंदिन कार्यामध्ये गुणवत्ता, वेग आणि अचूकता राखणे हे आमचे मुख्य ध्येय आहे. सर्व शाखांमधील कार्यप्रणाली एकसमान, पारदर्शक आणि ग्राहककेंद्रित राहावी यासाठी व्यवस्थापन पातळीवर सातत्याने नियोजन आणि अंमलबजावणी केली जाते.

संस्थेच्या सेवांमध्ये बचत खाते, मुदत ठेव, विविध कर्ज योजना, तसेच डिजिटल आणि तंत्रज्ञानाधारित सुविधा यांचा समावेश असून, सभासदांना सुरक्षित व सुलभ सेवा मिळावी यासाठी आयटी प्रणाली, अंतर्गत नियंत्रण व्यवस्था आणि कर्मचारी प्रशिक्षणावर विशेष भर दिला जातो.

कर्मचारीवर्गाचे समर्पण, मजबूत व्यवस्थापन आणि सभासदांचा विश्वास या त्रिसूत्रीच्या बळावर संस्था सातत्याने प्रगती करत आहे. भविष्यातही बदलत्या आर्थिक गरजा लक्षात घेऊन अधिक सक्षम, विश्वासार्ह आणि सेवा-केंद्रित संस्था म्हणून पुढे वाटचाल करणे हीच आमची कटिबद्धता आहे."`
      },

      subtitle: "व्यवस्थापनाचे नेतृत्व आणि संस्थेचे परिचालन दृष्टिकोन",
      
      visionPillars: [
        {
          title: "गुणवत्ता",
          description: "सर्व सेवांमध्ये उच्च दर्जा",
          icon: FaCrown,
          color: "from-blue-500 to-cyan-500"
        },
        {
          title: "वेग",
          description: "त्वरित सेवा पुरवठा",
          icon: FaRocket,
          color: "from-purple-500 to-pink-500"
        },
        {
          title: "अचूकता",
          description: "निर्दोष व्यवहार प्रक्रिया",
          icon: FaBullseye,
          color: "from-green-500 to-emerald-500"
        },
        {
          title: "पारदर्शकता",
          description: "स्पष्ट आणि उघडी व्यवस्था",
          icon: FaBalanceScale,
          color: "from-amber-500 to-orange-500"
        }
      ],

      focusAreas: [
        {
          title: "तंत्रज्ञान एकत्रीकरण",
          description: "आधुनिक तंत्रज्ञानाचा वापर",
          achievements: ["Core Banking System", "डिजिटल व्यवहार", "ऑनलाइन सेवा"]
        },
        {
          title: "कर्मचारी विकास",
          description: "निरंतर प्रशिक्षण आणि कौशल्य विकास",
          achievements: ["वार्षिक प्रशिक्षण कार्यक्रम", "कौशल्य उन्नयन", "प्रोत्साहन योजना"]
        },
        {
          title: "ग्राहक संतुष्टी",
          description: "सभासद केंद्रित दृष्टिकोन",
          achievements: ["२४x७ सहाय्य", "त्वरित समस्या निराकरण", "अभिप्राय प्रणाली"]
        },
        {
          title: "आर्थिक स्थैर्य",
          description: "मजबूत आर्थिक व्यवस्थापन",
          achievements: ["जोखीम व्यवस्थापन", "पर्यायी निधी", "नफा वाढ"]
        }
      ],

      achievements: [
        { metric: "२००२", label: "स्थापना वर्ष", icon: FaClock },
        { metric: "२०१२", label: "मल्टीस्टेट दर्जा", icon: FaChartLine },
        { metric: "५०+", label: "शाखा", icon: FaUsers },
        { metric: "९९%", label: "ग्राहक संतुष्टी", icon: FaRegCheckCircle }
      ],

      experienceTitle: "अनुभव",
      qualificationsTitle: "शैक्षणिक पात्रता",
      keyResponsibilities: "प्रमुख जबाबदार्या",
      responsibilities: [
        "दैनंदिन परिचालन व्यवस्थापन",
        "व्यवसाय धोरणांची अंमलबजावणी",
        "कर्मचारी नेतृत्व आणि विकास",
        "तांत्रिक सुधारणा आणि नवकल्पना",
        "ग्राहक संबंध व्यवस्थापन"
      ],
      leadershipPhilosophy: "नेतृत्व तत्त्वज्ञान",
      leadershipText: "\"मजबूत व्यवस्थापन, टीम वर्क आणि ग्राहक-केंद्रित दृष्टिकोन यावर भर देणे हे यशस्वी संचालनाचे गुपित आहे.\"",
      executivePerspective: "कार्यकारी दृष्टिकोन",
      operationalManagement: "संचालन व्यवस्थापन आणि भविष्याचे स्वप्न",
      managementPillars: "व्यवस्थापनाचे चार स्तंभ",
      notableAchievements: "उल्लेखनीय उपलब्धी",
      ourCommitment: "आमची कटिबद्धता",
      commitmentText: "\"व्यवस्थापनाच्या कुशल नेतृत्वाखाली संस्था सतत विकासाच्या मार्गावर असून, सभासदांच्या विश्वासाचे रक्षण करत आणि तंत्रज्ञानाच्या साहाय्याने अधिक कार्यक्षम सेवा पुरविण्यासाठी आम्ही समर्पित आहोत.\"",
      institutionInfo: "संस्थेची माहिती",
      contactUs: "संपर्क साधा"
    }
  };

  const t = translations[language];

  return (
    <div className="min-h-screen py-12 px-4" style={{ 
      backgroundColor: '#f8f9fa',
      backgroundImage: 'linear-gradient(135deg, rgba(176, 52, 98, 0.03) 0%, rgba(248, 249, 250, 1) 100%)'
    }}>
      {/* Animated Background Pattern */}
      <div className="fixed inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(45deg, ${primaryColor} 0, ${primaryColor} 1px, transparent 1px, transparent 15px)`,
          backgroundSize: '20px 20px'
        }}></div>
      </div>

      {/* Main Container */}
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Page Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-24 h-24 rounded-full shadow-2xl mb-6 animate-pulse" style={{ 
            background: `linear-gradient(135deg, ${primaryColor}, ${primaryColor}dd)`
          }}>
            <FaUserTie className="text-white text-4xl" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            <span style={{ 
              background: `linear-gradient(to right, ${primaryColor}, ${primaryColor}dd)`,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>
              {t.message.title}
            </span>
          </h1>
          <div className="h-1.5 w-32 mx-auto rounded-full mb-6" style={{ 
            background: `linear-gradient(to right, ${primaryColor}, ${primaryColor}88)`
          }}></div>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            {t.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left Column - Executive Director Profile */}
          <div className="lg:col-span-1 space-y-8">
            {/* Profile Card */}
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-200 transform transition-all duration-500 hover:shadow-3xl hover:-translate-y-1">
              {/* Profile Header */}
              <div className="p-8 text-center cursor-pointer" style={{ 
                background: `linear-gradient(135deg, ${primaryColor}, ${primaryColor}dd)`
              }} onClick={() => setIsModalOpen(true)}>
                <div className="relative mx-auto w-48 h-48">
                  {/* Executive Director Image */}
                  <img 
                    src={executiveDirectorImage}
                    alt={t.name}
                    className="w-full h-full object-cover rounded-full shadow-2xl border-4 border-white/20"
                    onError={(e) => {
                      e.target.onerror = null
                      e.target.src = `https://ui-avatars.com/api/?name=${t.name}&background=${primaryColor.slice(1)}&color=fff&size=400&bold=true`
                    }}
                  />
                  
                  {/* Status Badge */}
                  <div className="absolute bottom-2 right-2 w-14 h-14 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center shadow-xl">
                    <FaShieldAlt className="text-white text-xl" />
                  </div>
                </div>
              </div>

              {/* Profile Details */}
              <div className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 text-center mb-2">
                  {t.name}
                </h2>
                
                <div className="text-center mb-6">
                  <span className="inline-block px-4 py-1.5 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-full text-sm font-medium mb-2">
                    {t.designation}
                  </span>
                  <p className="text-gray-700 font-semibold">
                    {t.organization}
                  </p>
                </div>

                {/* Experience & Qualifications */}
                <div className="space-y-4">
                  <div className="flex items-start space-x-3 p-3 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl">
                    <FaChartLine className="text-blue-600 text-xl mt-1" />
                    <div>
                      <h4 className="font-bold text-gray-800">{t.experienceTitle}</h4>
                      <p className="text-gray-600 text-sm">{t.experience}</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3 p-3 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl">
                    <FaLightbulb className="text-purple-600 text-xl mt-1" />
                    <div>
                      <h4 className="font-bold text-gray-800">{t.qualificationsTitle}</h4>
                      <p className="text-gray-600 text-sm">{t.qualifications}</p>
                    </div>
                  </div>
                </div>

                {/* Key Responsibilities */}
                <div className="mt-8 pt-6 border-t border-gray-200">
                  <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center">
                    <GiTeamIdea className="text-indigo-600 mr-2" />
                    {t.keyResponsibilities}
                  </h3>
                  <ul className="space-y-3">
                    {t.responsibilities.map((responsibility, index) => (
                      <li key={index} className="flex items-center">
                        <div className="w-2 h-2 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full mr-3"></div>
                        <span className="text-gray-700">{responsibility}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Leadership Philosophy */}
            <div className="bg-gradient-to-br from-gray-900 to-slate-800 text-white rounded-2xl p-6 shadow-xl">
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <FaHandshake className="text-amber-400 mr-2" />
                {t.leadershipPhilosophy}
              </h3>
              <p className="text-gray-300">
                {t.leadershipText}
              </p>
            </div>
          </div>

          {/* Right Column - Message & Details */}
          <div className="lg:col-span-2 space-y-8">
            {/* Message Card */}
            <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-10 relative overflow-hidden">
              {/* Background Elements */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-full -mr-20 -mt-20"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-full -ml-16 -mb-16"></div>
              
              <div className="relative z-10">
                {/* Message Header */}
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center space-x-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center shadow-lg">
                      <FaUserTie className="text-white text-2xl" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-gray-900">{t.executivePerspective}</h2>
                      <p className="text-gray-600">{t.operationalManagement}</p>
                    </div>
                  </div>
                </div>

                {/* Message Content */}
                <div className="space-y-6">
                  {t.message.content.split('\n\n').map((paragraph, index) => (
                    <div 
                      key={index} 
                      className="text-gray-700 text-lg leading-relaxed bg-gradient-to-r from-gray-50 to-blue-50 p-6 rounded-xl border-l-4 border-indigo-500"
                    >
                      {paragraph}
                    </div>
                  ))}
                </div>

                {/* Vision Pillars */}
                <div className="mt-12">
                  <h3 className="text-xl font-bold text-gray-800 mb-6 text-center">
                    {t.managementPillars}
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {t.visionPillars.map((pillar, index) => {
                      const Icon = pillar.icon;
                      return (
                        <div 
                          key={index} 
                          className="bg-white p-5 rounded-xl shadow-lg border border-gray-200 text-center transform transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
                        >
                          <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${pillar.color} rounded-full mb-4 shadow-md`}>
                            <Icon className="text-white text-2xl" />
                          </div>
                          <h4 className="font-bold text-gray-800 text-lg mb-2">{pillar.title}</h4>
                          <p className="text-gray-600 text-sm">{pillar.description}</p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>

            {/* Focus Areas Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {t.focusAreas.map((area, index) => (
                <div 
                  key={index} 
                  className="bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-xl p-6 border border-gray-200 transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
                >
                  <div className="flex items-start space-x-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <FaCogs className="text-white text-xl" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-800">{area.title}</h3>
                      <p className="text-gray-600">{area.description}</p>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    {area.achievements.map((achievement, idx) => (
                      <div key={idx} className="flex items-center">
                        <div className="w-1.5 h-1.5 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full mr-3"></div>
                        <span className="text-gray-700 text-sm">{achievement}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Achievements Stats */}
            <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-3xl shadow-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-8 text-center">{t.notableAchievements}</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {t.achievements.map((achievement, index) => {
                  const Icon = achievement.icon;
                  return (
                    <div 
                      key={index} 
                      className="text-center transform transition-all duration-300 hover:scale-110"
                    >
                      <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4">
                        <Icon className="text-white text-2xl" />
                      </div>
                      <div className="text-3xl font-bold mb-2">{achievement.metric}</div>
                      <div className="text-indigo-100 text-sm">{achievement.label}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Commitment Section */}
        <div className="mt-16 bg-gradient-to-r from-blue-900 to-indigo-900 rounded-3xl shadow-2xl p-10 text-white text-center">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold mb-6">{t.ourCommitment}</h3>
            <p className="text-xl mb-8 text-blue-100">
              {t.commitmentText}
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <button 
                onClick={() => window.location.href = '/about'}
                className="px-8 py-3 bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-full hover:from-amber-600 hover:to-orange-600 transition-all duration-300 transform hover:-translate-y-1 flex items-center space-x-2"
              >
                <span>{t.institutionInfo}</span>
                <FaArrowRight />
              </button>
              <button 
                onClick={() => window.location.href = '/contact'}
                className="px-8 py-3 bg-white text-blue-900 rounded-full hover:bg-blue-50 transition-all duration-300 transform hover:-translate-y-1"
              >
                {t.contactUs}
              </button>
            </div>
          </div>
        </div>

        {/* Image Modal */}
        {isModalOpen && (
          <div 
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-90 backdrop-blur-sm"
            onClick={() => setIsModalOpen(false)}
          >
            <div className="relative max-w-4xl max-h-[90vh] w-full">
              {/* Close button */}
              <button
                className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors duration-200 z-10"
                onClick={(e) => {
                  e.stopPropagation()
                  setIsModalOpen(false)
                }}
                style={{ fontSize: '2rem' }}
              >
                ✕
              </button>
              
              {/* Modal content */}
              <div 
                className="relative rounded-lg overflow-hidden"
                onClick={(e) => e.stopPropagation()}
              >
                <img 
                  src={executiveDirectorImage}
                  alt={t.name}
                  className="w-full h-full object-contain"
                  style={{
                    maxHeight: '80vh',
                    borderRadius: '8px'
                  }}
                  onError={(e) => {
                    e.target.onerror = null
                    e.target.src = `https://ui-avatars.com/api/?name=${t.name}&background=${primaryColor.slice(1)}&color=fff&size=600&bold=true`
                  }}
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ExecutiveDirector;