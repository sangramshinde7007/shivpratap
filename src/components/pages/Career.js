import React, { useState, useEffect } from 'react';
import { FaHome, FaChevronRight, FaWhatsapp } from 'react-icons/fa';
import { useLanguage } from '../../contexts/LanguageContext';
import { database, ref as dbRef, get } from '../../firebase';

const Career = () => {
  const { language } = useLanguage();
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadJobs();
  }, []);

  const loadJobs = async () => {
    try {
      const jobsRef = dbRef(database, 'shivpratapmultistate/career');
      const snapshot = await get(jobsRef);
      
      if (snapshot.exists()) {
        const jobsData = snapshot.val();
        const jobsArray = Object.keys(jobsData).map(key => ({
          id: key,
          ...jobsData[key]
        }));
        setJobs(jobsArray);
      }
    } catch (error) {
      console.error('Error loading jobs:', error);
    } finally {
      setLoading(false);
    }
  };

  // Translations
  const translations = {
    en: {
      pageTitle: 'Career Opportunities',
      pageSubtitle: 'Join Our Growing Team',
      breadcrumbHome: 'Home',
      breadcrumbCareer: 'Career',
      currentOpenings: 'Current Openings',
      currentOpeningsDesc: 'Explore exciting career opportunities with us',
      applyNow: 'Apply Now',
      requirements: 'Requirements:',
      noJobs: 'No job openings available at the moment. Please check back later.',
      loading: 'Loading job opportunities...'
    },
    mr: {
      pageTitle: 'करिअर संधी',
      pageSubtitle: 'आमच्या वाढत्या टीमला सामील व्हा',
      breadcrumbHome: 'होम',
      breadcrumbCareer: 'करिअर',
      currentOpenings: 'सध्याच्या जागा',
      currentOpeningsDesc: 'आमच्यासोबत रोमांचक करिअर संधी शोधा',
      applyNow: 'आता अर्ज करा',
      requirements: 'आवश्यकता:',
      noJobs: 'सध्या कोणतीही नोकरी उपलब्ध नाही. कृपया नंतर तपासा.',
      loading: 'नोकरीच्या संधी लोड करत आहे...'
    }
  };

  const currentContent = translations[language];

  // WhatsApp integration function
  const handleApply = (jobTitle) => {
    const phoneNumber = '918308303159';
    const message = language === 'en' 
      ? `Hello, I am interested in applying for the position of ${jobTitle} at Shivpratap Multistate Bank. Please provide me with more details about the application process.`
      : `नमस्कार, मी शिवप्रताप मल्टीस्टेट बँकेत ${jobTitle} या पदासाठी अर्ज करण्यात स्वारस्य आहे. कृपया मला अर्ज प्रक्रियेबद्दल अधिक तपशील द्या.`;
    
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="font-sans bg-gradient-to-b from-rose-50 to-white">
      {/* Hero Banner Section */}
      <section 
        className="relative h-[400px] overflow-hidden"
        style={{
          background: 'linear-gradient(rgba(176, 52, 98, 0.9), rgba(220, 53, 69, 0.85))',
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
            <nav className="flex items-center text-rose-100 text-sm mb-6">
              <a href="/" className="flex items-center hover:text-white transition-colors">
                <FaHome className="mr-2" />
                {currentContent.breadcrumbHome}
              </a>
              <FaChevronRight className="mx-2 opacity-50" />
              <span className="font-semibold text-white">{currentContent.breadcrumbCareer}</span>
            </nav>

            {/* Page Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              {currentContent.pageTitle}
            </h1>
            <p className="text-xl md:text-2xl text-rose-100 max-w-3xl mb-8">
              {currentContent.pageSubtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Current Openings Section */}
        <section>
          <div className="mb-10 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">{currentContent.currentOpenings}</h2>
            <p className="text-lg text-gray-600">{currentContent.currentOpeningsDesc}</p>
          </div>

          {/* Job Listings */}
          {loading ? (
            <div className="text-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-rose-600 mx-auto"></div>
              <p className="text-gray-600 mt-4">{currentContent.loading}</p>
            </div>
          ) : jobs.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">{currentContent.noJobs}</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {jobs.map((job) => (
              <div 
                key={job.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 hover:border-rose-300 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="bg-gradient-to-r from-rose-600 to-rose-800 p-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{job.title[language]}</h3>
                  <p className="text-rose-100 text-sm">{job.location[language]}</p>
                </div>

                <div className="p-6">
                  <p className="text-gray-700 mb-4 leading-relaxed">{job.description[language]}</p>

                  <div className="mb-6">
                    <h4 className="font-bold text-gray-800 mb-3">
                      {currentContent.requirements}
                    </h4>
                    <ul className="space-y-2">
                      {job.requirements[language].map((req, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-rose-600 mr-2">•</span>
                          <span className="text-gray-600 text-sm">{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button
                    onClick={() => handleApply(job.title[language])}
                    className="w-full bg-gradient-to-r from-green-600 to-green-700 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center"
                  >
                    <FaWhatsapp className="mr-2 text-xl" />
                    {currentContent.applyNow}
                  </button>
                </div>
              </div>
            ))}
            </div>
          )}
        </section>
      </div>
    </div>
  );
};

export default Career;
