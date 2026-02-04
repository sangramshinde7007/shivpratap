import React, { useState } from 'react'
import { useLanguage } from '../../contexts/LanguageContext';
import '../Assets/sanchalak.jpeg'

const ManagingDirector = () => {
  const { language } = useLanguage();
  const [isModalOpen, setIsModalOpen] = useState(false)
  const primaryColor = '#b03462'
  const secondaryColor = '#f8f9fa'

  // Translations
  const translations = {
    en: {
      pageTitle: "Managing Director Committee",
      directorName: "Sanchalak Mandal",
      directorTitle: "Managing Director",
      imageAlt: "Sanchalak Mandal",
      modalImageAlt: "Sanchalak Mandal - Managing Director"
    },
    mr: {
      pageTitle: "व्यवस्थापक संचालक मंडळ",
      directorName: "संचालक मंडळ",
      directorTitle: "व्यवस्थापक संचालक",
      imageAlt: "संचालक मंडळ",
      modalImageAlt: "संचालक मंडळ - व्यवस्थापक संचालक"
    }
  };

  const t = translations[language];

  return (
    <div 
      className="min-h-screen flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8"
      style={{ 
        backgroundColor: secondaryColor,
        backgroundImage: 'linear-gradient(135deg, rgba(176, 52, 98, 0.03) 0%, rgba(248, 249, 250, 1) 100%)'
      }}
    >
      {/* Main Heading */}
      <div className="text-center mb-12">
        <h1 
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
          style={{ 
            color: primaryColor,
            position: 'relative',
            display: 'inline-block'
          }}
        >
          <span className="relative z-10 px-4">{t.pageTitle}</span>
          <div 
            className="absolute bottom-0 left-0 w-full h-3 -z-0"
            style={{ 
              backgroundColor: `${primaryColor}15`,
              transform: 'skewX(-15deg)'
            }}
          ></div>
        </h1>
      </div>

      {/* Image Container */}
      <div className="relative w-full max-w-md md:max-w-lg lg:max-w-xl">
        <div className="relative group">
          {/* Decorative background elements */}
          <div 
            className="absolute -top-6 -left-6 w-24 h-24 rounded-full opacity-20"
            style={{ backgroundColor: primaryColor }}
          ></div>
          <div 
            className="absolute -bottom-6 -right-6 w-32 h-32 rounded-full opacity-20"
            style={{ backgroundColor: primaryColor }}
          ></div>
          
          {/* Image with decorative border */}
          <div className="relative">
            <div 
              className="absolute inset-0 rounded-2xl transform rotate-3 opacity-30 group-hover:rotate-6 transition-transform duration-500"
              style={{ 
                backgroundColor: primaryColor,
                boxShadow: `0 20px 40px ${primaryColor}40`
              }}
            ></div>
            
            <div 
              className="absolute inset-0 rounded-2xl transform -rotate-2 opacity-20 group-hover:-rotate-4 transition-transform duration-500"
              style={{ 
                backgroundColor: primaryColor,
                boxShadow: `0 15px 30px ${primaryColor}40`
              }}
            ></div>
            
            <div 
              className="relative rounded-2xl overflow-hidden border-4 transform group-hover:scale-[1.02] transition-all duration-500 cursor-pointer"
              style={{ 
                borderColor: primaryColor,
                boxShadow: '0 25px 50px rgba(0, 0, 0, 0.15)',
                backgroundColor: '#f5f5f5'
              }}
              onClick={() => setIsModalOpen(true)}
            >
              <img 
                src={require('../Assets/sanchalak.jpeg')}
                alt={t.imageAlt}
                className="w-full h-auto object-cover"
                style={{
                  aspectRatio: '3/4',
                  objectPosition: 'center top'
                }}
                onError={(e) => {
                  e.target.onerror = null
                  e.target.src = `https://ui-avatars.com/api/?name=${t.directorName}&background=${primaryColor.slice(1)}&color=fff&size=400&bold=true`
                }}
              />
              
              {/* Image overlay with name */}
              <div 
                className="absolute bottom-0 left-0 right-0 p-6 text-center transform translate-y-0 group-hover:translate-y-0 transition-transform duration-500"
                style={{ 
                  background: `linear-gradient(to top, ${primaryColor}cc, transparent)`,
                  backdropFilter: 'blur(5px)'
                }}
              >
                <h2 
                  className="text-2xl md:text-3xl font-bold mb-2 text-white"
                  style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}
                >
                  {t.directorName}
                </h2>
                <p 
                  className="text-lg md:text-xl font-semibold text-white opacity-90"
                  style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.5)' }}
                >
                  {t.directorTitle}
                </p>
              </div>
            </div>
          </div>
          
          {/* Decorative corner accents */}
          <div 
            className="absolute -top-4 -left-4 w-8 h-8 border-t-4 border-l-4 rounded-tl-lg"
            style={{ borderColor: primaryColor }}
          ></div>
          <div 
            className="absolute -top-4 -right-4 w-8 h-8 border-t-4 border-r-4 rounded-tr-lg"
            style={{ borderColor: primaryColor }}
          ></div>
          <div 
            className="absolute -bottom-4 -left-4 w-8 h-8 border-b-4 border-l-4 rounded-bl-lg"
            style={{ borderColor: primaryColor }}
          ></div>
          <div 
            className="absolute -bottom-4 -right-4 w-8 h-8 border-b-4 border-r-4 rounded-br-lg"
            style={{ borderColor: primaryColor }}
          ></div>
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
                src={require('../Assets/sanchalak.jpeg')}
                alt={t.modalImageAlt}
                className="w-full h-full object-contain"
                style={{
                  maxHeight: '80vh',
                  borderRadius: '8px'
                }}
                onError={(e) => {
                  e.target.onerror = null
                  e.target.src = `https://ui-avatars.com/api/?name=${t.directorName}&background=${primaryColor.slice(1)}&color=fff&size=600&bold=true`
                }}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default ManagingDirector