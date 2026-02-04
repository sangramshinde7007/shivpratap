import React, { useState, useEffect, useCallback } from 'react';
import { 
  FaHome, FaChevronRight, FaCamera,
  FaImages,
  FaTimes, FaChevronLeft, FaChevronRight as FaChevronRightIcon,
 FaExpand,
} from 'react-icons/fa';
import { 
  database, 
  ref as dbRef, 
  get 
} from '../../firebase';
import { useLanguage } from '../../contexts/LanguageContext';

const GalleryPage = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState(null);
  const [showLightbox, setShowLightbox] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [galleryImages, setGalleryImages] = useState([]);
  const { language } = useLanguage();

  // Translations for Gallery content
  const translations = {
    en: {
      title: 'Our',
      titleHighlight: 'Gallery',
      subtitle: 'Capturing moments of trust, growth, and celebration',
      breadcrumbHome: 'Home',
      breadcrumbGallery: 'Gallery',
      categories: {
        all: 'All'
      },
      allPhotos: 'All Photos',
      photos: 'Photos',
      image: 'image',
      images: 'images',
      noImagesFound: 'No images found',
      tryDifferentCategory: 'Try selecting a different category'
    },
    mr: {
      title: 'आमची',
      titleHighlight: 'गॅलरी',
      subtitle: 'विश्वास, वाढ आणि उत्सवाचे क्षण मोजत आहे',
      breadcrumbHome: 'होम',
      breadcrumbGallery: 'गॅलरी',
      categories: {
        all: 'सर्व'
      },
      allPhotos: 'सर्व फोटो',
      photos: 'फोटो',
      image: 'प्रतिमा',
      images: 'प्रतिमा',
      noImagesFound: 'कोणतेही चित्र सापडले नाहीत',
      tryDifferentCategory: 'वेगळी श्रेणी निवडण्याचा प्रयत्न करा'
    }
  };

  // Get current language content
  const currentContent = translations[language];

  // Load images from Firebase
  useEffect(() => {
    loadGalleryImages();
  }, []);

  const loadGalleryImages = async () => {
    try {
      const galleryRef = dbRef(database, 'shivpratapmultistate/gallery');
      const snapshot = await get(galleryRef);
      
      if (snapshot.exists()) {
        const galleryData = snapshot.val();
        const imagesList = Object.keys(galleryData).map(key => ({
          id: key,
          ...galleryData[key]
        }));
        setGalleryImages(imagesList);
      }
    } catch (error) {
      console.error('Error loading gallery images:', error);
    }
  };

  // Categories (simplified for Firebase integration)
  const categories = [
    { id: 'all', label: currentContent.categories.all, icon: <FaImages />, count: galleryImages.length },
  ];

  // Filter images only by category (no year/event filters anymore)
  const filteredImages = galleryImages.filter(item =>
    activeCategory === 'all' || item.category === activeCategory
  );

  const handleImageClick = (image, index) => {
    setSelectedImage(image);
    setCurrentImageIndex(index);
    setShowLightbox(true);
  };

  const nextImage = useCallback(() => {
    const nextIndex = (currentImageIndex + 1) % filteredImages.length;
    setSelectedImage(filteredImages[nextIndex]);
    setCurrentImageIndex(nextIndex);
  }, [currentImageIndex, filteredImages]);

  const prevImage = useCallback(() => {
    const prevIndex = (currentImageIndex - 1 + filteredImages.length) % filteredImages.length;
    setSelectedImage(filteredImages[prevIndex]);
    setCurrentImageIndex(prevIndex);
  }, [currentImageIndex, filteredImages]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!showLightbox) return;
      if (e.key === 'Escape') setShowLightbox(false);
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [showLightbox, currentImageIndex, filteredImages, nextImage, prevImage]);

  // (removed unused helper functions getCategoryColor and getEventIcon)

  return (
    <div className="font-sans bg-gradient-to-b from-gray-50 to-white min-h-screen">

      {/* Hero Banner */}
      <section
        className="relative h-[380px] md:h-[420px] overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, rgba(26, 35, 126, 0.95) 0%, rgba(57, 73, 171, 0.9) 100%)'
        }}
      >
        <div className="relative h-full flex flex-col justify-center">
          <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
            <nav className="flex items-center text-blue-100 text-sm mb-5">
              <a href="/" className="flex items-center hover:text-white">
                <FaHome className="mr-2" /> {currentContent.breadcrumbHome}
              </a>
              <FaChevronRight className="mx-3 opacity-60" />
              <span className="font-semibold text-white">{currentContent.breadcrumbGallery}</span>
            </nav>

            <div className="text-center">
              {/* Language Switcher - REMOVED - Using Navbar language dropdown */}
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
                {currentContent.title} <span className="bg-gradient-to-r from-blue-200 to-cyan-200 bg-clip-text text-transparent">{currentContent.titleHighlight}</span>
              </h1>
              <p className="text-lg md:text-xl text-blue-100 max-w-2xl">
                {currentContent.subtitle}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Category Tabs + Gallery */}
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 py-10 md:py-12">

        {/* Category Navigation */}
        <div className="mb-10">
          <div className="flex overflow-x-auto pb-4 gap-3 scrollbar-hide">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex items-center px-5 py-3 rounded-xl whitespace-nowrap transition-all flex-shrink-0 ${
                  activeCategory === cat.id
                    ? 'bg-gradient-to-r from-blue-600 to-blue-800 text-white shadow-lg'
                    : 'bg-white border border-gray-200 text-gray-700 hover:bg-gray-50'
                }`}
              >
                <span className="mr-2 text-lg">{cat.icon}</span>
                {cat.label}
                <span className={`ml-3 px-2.5 py-1 rounded-full text-xs font-semibold ${
                  activeCategory === cat.id ? 'bg-white/25 text-white' : 'bg-blue-50 text-blue-700'
                }`}>
                  {cat.count}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Photo Gallery Section */}
        <section>
          <div className="flex items-baseline justify-between mb-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                {activeCategory === 'all' ? currentContent.allPhotos : `${categories.find(c => c.id === activeCategory)?.label} ${currentContent.photos}`}
              </h2>
              <p className="text-gray-600 mt-1.5">
                {filteredImages.length} {filteredImages.length === 1 ? currentContent.image : currentContent.images}
              </p>
            </div>
          </div>

          {filteredImages.length === 0 ? (
            <div className="text-center py-20">
              <FaCamera className="mx-auto text-6xl text-gray-300 mb-5" />
              <h3 className="text-2xl font-semibold text-gray-700 mb-3">{currentContent.noImagesFound}</h3>
              <p className="text-gray-500">{currentContent.tryDifferentCategory}</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-7">
              {filteredImages.map((image, idx) => (
                <div
                  key={image.id}
                  className="group relative rounded-2xl overflow-hidden bg-white shadow-md border border-gray-200 hover:shadow-xl hover:border-blue-200 transition-all duration-300 cursor-pointer"
                  onClick={() => handleImageClick(image, idx)}
                >
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={image.url}
                      alt={image.originalName || 'Gallery image'}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="bg-white/90 rounded-full p-5 shadow-lg transform scale-90 group-hover:scale-100 transition-transform">
                        <FaExpand className="text-blue-600 text-2xl" />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>
      </div>

      {/* Lightbox */}
      {showLightbox && selectedImage && (
        <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4">
          <button
            onClick={() => setShowLightbox(false)}
            className="absolute top-6 right-6 text-white text-4xl hover:text-gray-300 z-20"
          >
            <FaTimes />
          </button>

          <button
            onClick={prevImage}
            className="absolute left-5 md:left-10 top-1/2 -translate-y-1/2 text-white text-4xl p-4 rounded-full bg-black/40 hover:bg-black/60 z-20"
          >
            <FaChevronLeft />
          </button>

          <button
            onClick={nextImage}
            className="absolute right-5 md:right-10 top-1/2 -translate-y-1/2 text-white text-4xl p-4 rounded-full bg-black/40 hover:bg-black/60 z-20"
          >
            <FaChevronRightIcon />
          </button>

          <div className="relative max-w-5xl max-h-[85vh] w-full">
            <img
              src={selectedImage.url}
              alt={selectedImage.originalName || 'Gallery image'}
              className="max-w-full max-h-[80vh] object-contain rounded-lg mx-auto"
            />
          </div>
        </div>
      )}

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </div>
  );
};

export default GalleryPage;