import React, { useState } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { 
  FaFilePdf, 
  FaDownload, 
  FaEye, 
  FaCalendarAlt, 
  FaBookOpen,
  FaFileDownload,
  FaPrint,
} from 'react-icons/fa';
import annualReportPDF from '../Assets/Annual Report 2024-25.pdf';
import shivpratapLogo from '../Assets/SHIVPRATAP LOGO.png';

// Use the imported PDF
const PDF_PATH = annualReportPDF;

const AnnualReport = () => {
  const { language } = useLanguage();
  const [isLoading, setIsLoading] = useState(false);

  // Translations
  const translations = {
    en: {
      title: 'Annual Report 2024-25',
      financialYear: 'Financial Year:',
      description: '23rd Annual Report of Shivpratap Multistate Institution',
      pdfPreview: 'PDF Preview',
      availableForAll: 'Available for everyone',
      published: 'Published:',
      updated: 'Updated:',
      previewTitle: 'PDF Preview',
      previewDescription: 'Use the buttons below to download or view online',
      viewOnline: 'View Online',
      download: 'Download',
      loading: 'Loading...',
      pdfDownload: 'PDF Download',
      onlineRead: 'Online Read',
      mobileComputer: 'Mobile/Computer',
      print: 'Print',
      hardCopy: 'Hard Copy'
    },
    mr: {
      title: 'वार्षिक अहवाल २०२४-२५',
      financialYear: 'वित्तीय वर्ष:',
      description: 'शिवप्रताप मल्टीस्टेट संस्थेचा २३वा वार्षिक अहवाल',
      pdfPreview: 'PDF प्रिव्यू',
      availableForAll: 'सर्वांसाठी मोफत उपलब्ध',
      published: 'प्रकाशन:',
      updated: 'अद्यतन:',
      previewTitle: 'PDF प्रिव्यू',
      previewDescription: 'डाउनलोड किंवा ऑनलाइन पाहण्यासाठी खालील बटण वापरा',
      viewOnline: 'ऑनलाइन पहा',
      download: 'डाउनलोड करा',
      loading: 'लोड होत आहे...',
      pdfDownload: 'PDF डाउनलोड',
      onlineRead: 'ऑनलाइन वाचा',
      mobileComputer: 'मोबाईल/कॉम्प्युटर',
      print: 'प्रिंट करा',
      hardCopy: 'हार्ड कॉपी'
    }
  };

  const t = translations[language];

  const annualReport2025 = {
    year: '2024-25',
    title: t.title,
    fileName: 'shivpratap_annual_report_2024_25.pdf',
    fileSize: '5.8 MB',
    pages: 72,
    description: t.description,
    releaseDate: '१५ एप्रिल २०२५',
    lastUpdated: '२० एप्रिल २०२५',
    color: 'from-blue-600 to-indigo-600'
  };

  const handleViewPDF = () => {
    setIsLoading(true);
    
    // Small delay to show loading (optional – can be removed)
    setTimeout(() => {
      setIsLoading(false);
      // Open in new tab → browser usually shows PDF viewer
      window.open(PDF_PATH, '_blank', 'noopener,noreferrer');
    }, 800);
  };

  const handleDownloadPDF = () => {
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      
      const link = document.createElement('a');
      link.href = PDF_PATH;
      link.download = annualReport2025.fileName;   // forces download with this name
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }, 800);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-fuchsia-50 py-8 px-4 relative overflow-hidden">
        {/* Watermark Logo */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-5">
          <img 
            src={shivpratapLogo} 
            alt="Shivpratap Logo Watermark" 
            className="w-1/2 h-auto transform scale-150"
          />
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-rose-600 to-pink-600 rounded-full shadow-2xl mb-6">
            <FaFilePdf className="text-white text-3xl" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {annualReport2025.title}
          </h1>
          <div className="h-1 w-24 bg-gradient-to-r from-rose-500 to-pink-500 mx-auto rounded-full mb-4"></div>
          
          <div className="inline-block px-4 py-1 bg-gradient-to-r from-rose-500 to-pink-500 text-white rounded-full shadow mb-4">
            <div className="flex items-center space-x-2">
              <FaCalendarAlt className="text-sm" />
              <span className="text-sm">{t.financialYear} {annualReport2025.year}</span>
            </div>
          </div>
          
          <p className="text-gray-600 max-w-2xl mx-auto">
            {annualReport2025.description}
          </p>
        </div>

        {/* Main Card */}
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
          <div className="bg-gradient-to-r from-rose-600 to-pink-600 text-white p-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold mb-2">{t.pdfPreview}</h2>
                <p className="text-rose-100">{t.availableForAll}</p>
              </div>
              <div className="mt-4 md:mt-0 text-right">
                <div className="text-sm text-rose-200">{t.published} {annualReport2025.releaseDate}</div>
                <div className="text-sm text-rose-200">{t.updated} {annualReport2025.lastUpdated}</div>
              </div>
            </div>
          </div>

          <div className="p-6">
            {/* PDF Preview Area (Placeholder + Actions) */}
            <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl border-2 border-gray-300 overflow-hidden h-96 relative">
              <div className="absolute inset-0 flex flex-col items-center justify-center p-8">
                <div className="text-6xl mb-6 text-gray-400">
                  <FaBookOpen />
                </div>
                <div className="text-center">
                  <h4 className="text-xl font-bold text-gray-700 mb-3">{t.previewTitle}</h4>
                  <p className="text-gray-600 mb-6 max-w-md">
                    {t.previewDescription}
                  </p>
                  
                  <div className="flex flex-wrap justify-center gap-4">
                    <button
                      onClick={handleViewPDF}
                      disabled={isLoading}
                      className="px-6 py-3 bg-gradient-to-r from-rose-600 to-pink-600 text-white rounded-lg hover:from-rose-700 hover:to-pink-700 transition-all duration-300 flex items-center space-x-2 disabled:opacity-60 shadow-lg"
                    >
                      <FaEye className="text-lg" />
                      <span className="font-medium">{t.viewOnline}</span>
                    </button>
                    
                    <button
                      onClick={handleDownloadPDF}
                      disabled={isLoading}
                      className="px-6 py-3 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-lg hover:from-green-700 hover:to-emerald-700 transition-all duration-300 flex items-center space-x-2 disabled:opacity-60 shadow-lg"
                    >
                      <FaFileDownload className="text-lg" />
                      <span className="font-medium">{t.download}</span>
                    </button>
                  </div>
                </div>
              </div>

              {isLoading && (
                <div className="absolute inset-0 bg-white/90 backdrop-blur-sm flex flex-col items-center justify-center">
                  <div className="w-16 h-16 border-4 border-rose-600 border-t-transparent rounded-full animate-spin mb-4"></div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2">{t.loading}</h3>
                </div>
              )}
            </div>

            {/* Quick Action Cards */}
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
              <button
                onClick={handleDownloadPDF}
                disabled={isLoading}
                className="p-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-xl hover:from-green-600 hover:to-emerald-600 transition-all duration-300 flex flex-col items-center justify-center disabled:opacity-60 shadow-md"
              >
                <FaDownload className="text-2xl mb-2" />
                <span className="font-medium">{t.pdfDownload}</span>
                <span className="text-sm opacity-90 mt-1">{annualReport2025.fileSize}</span>
              </button>
              
              <button
                onClick={handleViewPDF}
                disabled={isLoading}
                className="p-4 bg-gradient-to-r from-rose-500 to-pink-500 text-white rounded-xl hover:from-rose-600 hover:to-pink-600 transition-all duration-300 flex flex-col items-center justify-center disabled:opacity-60 shadow-md"
              >
                <FaEye className="text-2xl mb-2" />
                <span className="font-medium">{t.onlineRead}</span>
                <span className="text-sm opacity-90 mt-1">{t.mobileComputer}</span>
              </button>
              
              <button
                onClick={() => window.print()}
                className="p-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-xl hover:from-amber-600 hover:to-orange-600 transition-all duration-300 flex flex-col items-center justify-center shadow-md"
              >
                <FaPrint className="text-2xl mb-2" />
                <span className="font-medium">{t.print}</span>
                <span className="text-sm opacity-90 mt-1">{t.hardCopy}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnnualReport;