import React, { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const LanguageContext = createContext();

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('mr');
  const navigate = useNavigate();
  const location = useLocation();

  // Extract language from URL on mount and location change
  useEffect(() => {
    const pathParts = location.pathname.split('/').filter(part => part); // Remove empty parts
    const lastPart = pathParts[pathParts.length - 1];
    
    if (lastPart === 'en' || lastPart === 'mr') {
      setLanguage(lastPart);
    }
  }, [location.pathname]);

  const changeLanguage = (newLang) => {
    // Only change language if it's different
    if (language !== newLang) {
      setLanguage(newLang);
      
      // Don't navigate immediately - let the component handle the language change
      // This prevents the blank page issue
      setTimeout(() => {
        const pathParts = location.pathname.split('/').filter(part => part); // Remove empty parts
        const lastPart = pathParts[pathParts.length - 1];
        
        // Check if current path already has a language parameter
        const hasLangParam = lastPart === 'en' || lastPart === 'mr';
        
        let newPath;
        if (hasLangParam) {
          // Replace existing language parameter
          pathParts[pathParts.length - 1] = newLang;
          newPath = '/' + pathParts.join('/');
        } else {
          // Add language parameter
          newPath = location.pathname.endsWith('/') ? location.pathname + newLang : location.pathname + '/' + newLang;
        }
        
        // Use replace to avoid history buildup
        navigate(newPath, { replace: true });
      }, 100); // Small delay to ensure language state updates first
    }
  };

  return (
    <LanguageContext.Provider value={{ language, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
