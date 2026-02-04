// Simple test to verify language switching functionality
const { language } = useLanguage();
console.log('Current language:', language);

// Test translation keys
const translations = {
  en: { pageTitle: 'Loan Products' },
  mr: { pageTitle: 'कर्ज उत्पादने' }
};

const t = translations[language];
console.log('Page title:', t.pageTitle);

// Test Marathi content
const isMarathi = language === 'mr';
console.log('Is Marathi:', isMarathi);

// Test dynamic content
const testContent = isMarathi ? 'मराठी सामग्री' : 'English Content';
console.log('Dynamic content:', testContent);
