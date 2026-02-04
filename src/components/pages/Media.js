import React, { useState, useEffect } from 'react';
import { 
  FaHome, 
  FaChevronRight, 
  FaImages,
  FaCalendarAlt,
  FaUsers,
  FaFilter,
  FaTimes,
  FaExpand,
  FaDownload,
  FaHeart,
} from 'react-icons/fa';
import { 
  database, 
  ref as dbRef, 
  get 
} from '../../firebase';
import { useLanguage } from '../../contexts/LanguageContext';

const Media = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedImage, setSelectedImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  // eslint-disable-next-line no-unused-vars
  const [sortBy, setSortBy] = useState('latest');
  // eslint-disable-next-line no-unused-vars
  const [showSortMenu, setShowSortMenu] = useState(false);
  const [favorites, setFavorites] = useState(new Set());
  const [mediaData, setMediaData] = useState([]);
  const [loading, setLoading] = useState(true);
  const { language } = useLanguage();

  useEffect(() => {
    loadMediaFiles();
  }, []);

  const loadMediaFiles = async () => {
    try {
      setLoading(true);
      const mediaRef = dbRef(database, 'shivpratapmultistate/media');
      const snapshot = await get(mediaRef);
      
      if (snapshot.exists()) {
        const mediaDataFromDB = snapshot.val();
        const mediaList = Object.keys(mediaDataFromDB).map(key => ({
          id: key,
          url: mediaDataFromDB[key].url,
          category: mediaDataFromDB[key].category || 'image',
          date: mediaDataFromDB[key].uploadedAt,
          alt: mediaDataFromDB[key].originalName || 'Media file',
          originalName: mediaDataFromDB[key].originalName,
          type: mediaDataFromDB[key].type,
          size: mediaDataFromDB[key].size
        }));
        setMediaData(mediaList);
      }
    } catch (error) {
      console.error('Error loading media files:', error);
    } finally {
      setLoading(false);
    }
  };

  // Translations for Media content
  const translations = {
    en: {
      title: 'Media',
      titleHighlight: 'Gallery',
      subtitle: 'Capturing moments, milestones & community impact of Shivpratap Multistate Bank',
      breadcrumbHome: 'Home',
      breadcrumbMedia: 'Media Gallery',
      categories: {
        all: 'All',
        image: 'Images',
        video: 'Videos',
        audio: 'Audio'
      },
      showing: 'Showing',
      mediaItems: 'media items',
      in: 'in',
      matching: 'matching',
      clearAllFilters: 'Clear all filters',
      loadingMedia: 'Loading Media',
      loadingText: 'Please wait while we fetch your media files...',
      noImagesFound: 'No images found',
      noImagesText: 'Try changing the category, clearing search, or adjusting sort order',
      viewAllMedia: 'View All Media',
      viewFullSize: 'View Full Size',
      category: 'Category',
      latest: 'Latest',
      oldest: 'Oldest',
      latestFirst: 'Latest First',
      oldestFirst: 'Oldest First',
      searchPlaceholder: 'Search gallery...'
    },
    mr: {
      title: 'मीडिया',
      titleHighlight: 'गॅलरी',
      subtitle: 'शिवप्रताप मल्टीस्टेट बँकचे क्षण, उपलब्धी आणि समुदायावरील परिणाम मोजत आहे',
      breadcrumbHome: 'होम',
      breadcrumbMedia: 'मीडिया गॅलरी',
      categories: {
        all: 'सर्व',
        image: 'प्रतिमा',
        video: 'व्हिडिओ',
        audio: 'ऑडिओ'
      },
      showing: 'दाखवत आहे',
      mediaItems: 'मीडिया आयटम्स',
      in: 'मध्ये',
      matching: 'जुळणारे',
      clearAllFilters: 'सर्व फिल्टर साफ करा',
      loadingMedia: 'मीडिया लोड करत आहे',
      loadingText: 'कृपया आम्ही तुमचे मीडिया फाइल्स आणत असताना थांबा...',
      noImagesFound: 'कोणतेही चित्र सापडले नाहीत',
      noImagesText: 'श्रेणी बदलण्याचा प्रयत्न करा, शोध साफ करा, किंवा क्रमवारी समायोजित करा',
      viewAllMedia: 'सर्व मीडिया पहा',
      viewFullSize: 'पूर्ण आकार पहा',
      category: 'श्रेणी',
      latest: 'नवीनतम',
      oldest: 'जुनीतम',
      latestFirst: 'प्रथम नवीनतम',
      oldestFirst: 'प्रथम जुनीतम',
      searchPlaceholder: 'गॅलरी शोधा...'
    }
  };

  // Get current language content
  const currentContent = translations[language];

  // Dynamic categories based on actual media data
  const categories = [
    { id: 'all',              name: currentContent.categories.all,              icon: <FaImages />,        color: 'from-blue-500 to-indigo-600',    count: mediaData.length },
    { id: 'image',            name: currentContent.categories.image,            icon: <FaImages />,        color: 'from-purple-500 to-pink-600',    count: mediaData.filter(m => m.category === 'image').length },
    { id: 'video',            name: currentContent.categories.video,            icon: <FaCalendarAlt />,   color: 'from-green-500 to-emerald-600',  count: mediaData.filter(m => m.category === 'video').length },
    { id: 'audio',            name: currentContent.categories.audio,            icon: <FaUsers />,         color: 'from-amber-500 to-orange-600',   count: mediaData.filter(m => m.category === 'audio').length },
  ];

  // Combined filtering: category + search
  const filteredMedia = mediaData
    .filter(item => {
      const matchesCategory = activeFilter === 'all' || item.category === activeFilter;
      const matchesSearch = !searchTerm || 
        item.alt?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.category.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesCategory && matchesSearch;
    })
    .sort((a, b) => {
      if (sortBy === 'latest') return new Date(b.date) - new Date(a.date);
      if (sortBy === 'oldest') return new Date(a.date) - new Date(b.date);
      return 0;
    });

  const toggleFavorite = (id) => {
    const newFavorites = new Set(favorites);
    if (newFavorites.has(id)) {
      newFavorites.delete(id);
    } else {
      newFavorites.add(id);
    }
    setFavorites(newFavorites);
  };

  const openImageModal = (image) => {
    setSelectedImage(image);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeImageModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isModalOpen) return;
      
      if (e.key === 'Escape') {
        closeImageModal();
      } else if (e.key === 'ArrowRight') {
        const idx = filteredMedia.findIndex(img => img.id === selectedImage?.id);
        const next = (idx + 1) % filteredMedia.length;
        setSelectedImage(filteredMedia[next]);
      } else if (e.key === 'ArrowLeft') {
        const idx = filteredMedia.findIndex(img => img.id === selectedImage?.id);
        const prev = (idx - 1 + filteredMedia.length) % filteredMedia.length;
        setSelectedImage(filteredMedia[prev]);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isModalOpen, selectedImage, filteredMedia]);

  const getCategoryName = (categoryId) => {
    const cat = categories.find(c => c.id === categoryId);
    return cat ? cat.name : '';
  };

  return (
    <div className="font-sans bg-gradient-to-b from-gray-50 to-white min-h-screen">
      {/* Hero Banner */}
      <section className="relative h-[380px] md:h-[420px] overflow-hidden bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div 
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23ffffff' fill-opacity='0.4' fill-rule='evenodd'/%3E%3C/svg%3E")`,
              backgroundSize: '280px'
            }}
          />
        </div>

        <div className="relative h-full flex flex-col justify-center">
          <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
            <nav className="flex items-center text-blue-100 text-sm mb-6">
              <a href="/" className="flex items-center hover:text-white transition-colors">
                <FaHome className="mr-2" /> {currentContent.breadcrumbHome}
              </a>
              <FaChevronRight className="mx-2 opacity-60" />
              <span className="font-medium text-white">{currentContent.breadcrumbMedia}</span>
            </nav>

            <div className="text-center">
              {/* Language Switcher - REMOVED - Using Navbar language dropdown */}
              
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">
                {currentContent.title} <span className="bg-gradient-to-r from-cyan-300 to-blue-200 bg-clip-text text-transparent">{currentContent.titleHighlight}</span>
              </h1>
              <p className="text-lg sm:text-xl text-blue-100 max-w-3xl mx-auto">
                {currentContent.subtitle}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Filter & Controls Bar */}
      {/* <section className="sticky top-0 z-40 bg-white shadow-md border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-5">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-5">
            <div className="overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-blue-400 scrollbar-track-gray-100">
              <div className="flex space-x-2.5 min-w-max">
                {categories.map(cat => (
                  <button
                    key={cat.id}
                    onClick={() => setActiveFilter(cat.id)}
                    className={`flex items-center px-5 py-2.5 rounded-full whitespace-nowrap transition-all duration-300 text-sm font-medium ${
                      activeFilter === cat.id
                        ? `bg-gradient-to-r ${cat.color} text-white shadow-lg scale-105`
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    <span className="mr-2 text-base">{cat.icon}</span>
                    {cat.name}
                    <span className={`ml-2.5 text-xs px-2.5 py-0.5 rounded-full ${
                      activeFilter === cat.id ? 'bg-white/25' : 'bg-gray-300/70'
                    }`}>
                      {cat.count}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="relative">
                <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder={currentContent.searchPlaceholder}
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none w-56 text-sm"
                />
              </div>

              <div className="relative">
                <button
                  onClick={() => setShowSortMenu(!showSortMenu)}
                  className="flex items-center gap-2 px-4 py-2.5 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition"
                >
                  <FaSortAmountDown />
                  <span className="text-sm font-medium">
                    {sortBy === 'latest' ? currentContent.latest : currentContent.oldest}
                  </span>
                  <FaCaretDown className="text-xs" />
                </button>

                {showSortMenu && (
                  <div className="absolute right-0 mt-2 w-44 bg-white rounded-lg shadow-xl border border-gray-200 z-50">
                    <button
                      onClick={() => { setSortBy('latest'); setShowSortMenu(false); }}
                      className="block w-full text-left px-4 py-3 hover:bg-blue-50 text-sm"
                    >
                      {currentContent.latestFirst}
                    </button>
                    <button
                      onClick={() => { setSortBy('oldest'); setShowSortMenu(false); }}
                      className="block w-full text-left px-4 py-3 hover:bg-blue-50 text-sm"
                    >
                      {currentContent.oldestFirst}
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Gallery Grid */}
      <main className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-12">
        <div className="mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-gray-700">
            <FaFilter className="text-blue-600" />
            <span>
              {currentContent.showing} <strong className="text-blue-700">{filteredMedia.length}</strong> {currentContent.mediaItems}
              {activeFilter !== 'all' && (
                <> {currentContent.in} <strong className="text-blue-700">{getCategoryName(activeFilter)}</strong></>
              )}
              {searchTerm && <> {currentContent.matching} "<strong>{searchTerm}</strong>"</>}
            </span>
          </div>

          {(activeFilter !== 'all' || searchTerm) && (
            <button
              onClick={() => { setActiveFilter('all'); setSearchTerm(''); }}
              className="text-sm text-blue-600 hover:text-blue-800 flex items-center gap-1.5"
            >
              <FaTimes /> {currentContent.clearAllFilters}
            </button>
          )}
        </div>

        {loading ? (
          <div className="text-center py-24">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mb-4"></div>
            <h3 className="text-xl font-semibold text-gray-600 mb-2">{currentContent.loadingMedia}</h3>
            <p className="text-gray-500">{currentContent.loadingText}</p>
          </div>
        ) : filteredMedia.length === 0 ? (
          <div className="text-center py-24">
            <FaImages className="mx-auto text-7xl text-gray-300 mb-6" />
            <h3 className="text-2xl font-bold text-gray-600 mb-3">{currentContent.noImagesFound}</h3>
            <p className="text-gray-500 mb-6 max-w-md mx-auto">
              {currentContent.noImagesText}
            </p>
            <button
              onClick={() => { setActiveFilter('all'); setSearchTerm(''); }}
              className="px-8 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition"
            >
              {currentContent.viewAllMedia}
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredMedia.map(item => (
              <div
                key={item.id}
                className="group relative overflow-hidden rounded-xl bg-white shadow-lg border border-gray-200 cursor-pointer transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
                onClick={() => openImageModal(item)}
              >
                <div className="relative aspect-square overflow-hidden">
                  {item.category === 'image' ? (
                    <img
                      src={item.url}
                      alt={item.alt}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      loading="lazy"
                    />
                  ) : item.category === 'video' ? (
                    <video
                      src={item.url}
                      className="w-full h-full object-cover"
                      muted
                      onMouseOver={e => e.target.play()}
                      onMouseOut={e => e.target.pause()}
                    />
                  ) : (
                    <div className="w-full h-full bg-gray-100 flex items-center justify-center">
                      <FaUsers className="text-6xl text-gray-400" />
                    </div>
                  )}

                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="text-white text-center">
                      <FaExpand className="text-4xl mb-2" />
                      <div className="text-sm font-medium">{currentContent.viewFullSize}</div>
                    </div>
                  </div>

                  <div className="absolute top-3 left-3">
                    <span className="px-3 py-1 bg-black/70 text-white text-xs rounded-full backdrop-blur-sm">
                      {getCategoryName(item.category)}
                    </span>
                  </div>

                  <button
                    onClick={e => {
                      e.stopPropagation();
                      toggleFavorite(item.id);
                    }}
                    className="absolute top-3 right-3 p-2.5 bg-black/50 rounded-full backdrop-blur-sm hover:bg-black/70 transition"
                  >
                    <FaHeart 
                      className={`text-xl transition-colors ${
                        favorites.has(item.id) ? 'text-red-500' : 'text-white'
                      }`}
                    />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>

      {/* Modal */}
      {isModalOpen && selectedImage && (
  <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95 backdrop-blur-sm">
    {/* Close button */}
    <button
      onClick={closeImageModal}
      className="absolute top-6 right-6 text-white text-4xl hover:text-gray-300 z-50 transition-colors"
      aria-label="Close modal"
    >
      <FaTimes />
    </button>

    {/* Previous button - only show if there's a previous image */}
    {filteredMedia.length > 1 && (
      <button
        onClick={() => {
          const currentIdx = filteredMedia.findIndex((img) => img.id === selectedImage.id);
          if (currentIdx === -1) return; // safety - shouldn't happen but prevents crash
          const prevIdx = (currentIdx - 1 + filteredMedia.length) % filteredMedia.length;
          setSelectedImage(filteredMedia[prevIdx]);
        }}
        className="absolute left-6 top-1/2 -translate-y-1/2 text-white text-5xl hover:text-gray-300 z-50 transition-colors"
        aria-label="Previous image"
      >
        ‹
      </button>
    )}

    {/* Next button - only show if there's a next image */}
    {filteredMedia.length > 1 && (
      <button
        onClick={() => {
          const currentIdx = filteredMedia.findIndex((img) => img.id === selectedImage.id);
          if (currentIdx === -1) return;
          const nextIdx = (currentIdx + 1) % filteredMedia.length;
          setSelectedImage(filteredMedia[nextIdx]);
        }}
        className="absolute right-6 top-1/2 -translate-y-1/2 text-white text-5xl hover:text-gray-300 z-50 transition-colors"
        aria-label="Next image"
      >
        ›
      </button>
    )}

    {/* Main image container */}
    <div className="relative max-w-6xl max-h-[90vh] w-full">
      <img
        src={selectedImage.url}
        alt={selectedImage.alt || `${getCategoryName(selectedImage.category)} - Shivpratap Bank`}
        className="max-w-full max-h-[85vh] object-contain rounded-xl mx-auto shadow-2xl bg-black/40"
        onError={(e) => {
          e.currentTarget.src = '/fallback-image.jpg'; // optional: add fallback
          e.currentTarget.alt = 'Image failed to load';
        }}
      />

      {/* Bottom info & actions bar */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-6 rounded-b-xl">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 text-white">
          <div>
            <div className="text-sm text-gray-300">{currentContent.category}</div>
            <div className="font-medium text-lg">{getCategoryName(selectedImage.category)}</div>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={() => toggleFavorite(selectedImage.id)}
              className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition"
              aria-label={favorites.has(selectedImage.id) ? "Remove from favorites" : "Add to favorites"}
            >
              <FaHeart
                className={`text-2xl transition-colors ${
                  favorites.has(selectedImage.id) ? 'text-red-500' : 'text-white'
                }`}
              />
            </button>

            <button
              onClick={() => window.open(selectedImage.url, '_blank')}
              className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition"
              aria-label="Open image in new tab"
            >
              <FaExpand className="text-2xl" />
            </button>

            <button
              onClick={() => {
                const link = document.createElement('a');
                link.href = selectedImage.url;
                link.download = `shivpratap-bank-${selectedImage.category}-${selectedImage.id}.jpg`;
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
              }}
              className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition"
              aria-label="Download image"
            >
              <FaDownload className="text-2xl" />
            </button>
          </div>
        </div>
      </div>
    </div>

    {/* Counter */}
    {filteredMedia.length > 0 && (
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white text-sm bg-black/50 px-4 py-2 rounded-full backdrop-blur-sm">
        {filteredMedia.findIndex((i) => i.id === selectedImage.id) + 1} / {filteredMedia.length}
      </div>
    )}
  </div>
)}
      {/* Footer */}
      {/* <footer className="mt-16 bg-gradient-to-r from-gray-900 to-gray-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 text-center">
          <h3 className="text-2xl font-bold mb-4">Shivpratap Multistate Bank Media Gallery</h3>
          <p className="text-gray-400 max-w-2xl mx-auto mb-8">
            Documenting our journey, achievements, and commitment to the community
          </p>
          <div className="flex flex-wrap justify-center gap-12">
            <div>
              <div className="text-4xl font-bold text-cyan-400">{mediaData.length}+</div>
              <div className="text-gray-300">Media Items</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-cyan-400">{categories.length - 1}</div>
              <div className="text-gray-300">Categories</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-cyan-400">2025</div>
              <div className="text-gray-300">Latest Year</div>
            </div>
          </div>
        </div>
      </footer> */}
    </div>
  );
};

export default Media;