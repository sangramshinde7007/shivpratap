
import React, { useState, useEffect } from 'react';
import {
  FiUpload,
  FiImage,
  FiTrash2,
  FiPlus,
  FiX,
  FiLoader
} from 'react-icons/fi';

import {
  storage,
  database,
  ref as dbRef,
  set,
  get,
  remove,
  push,
  storageRef,
  uploadBytes,
  getDownloadURL,
  deleteObject
} from '../../firebase';

import AdminNavbar from './AdminNavbar';
import AdminSidebar from './AdminSidebar';

const AdminGallery = () => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [images, setImages] = useState([]);
  const [uploading, setUploading] = useState(false);
  const [dragActive, setDragActive] = useState(false);
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [previewUrls, setPreviewUrls] = useState([]);
  const [loading, setLoading] = useState(true);

  const toggleSidebar = () => setSidebarCollapsed(prev => !prev);

  useEffect(() => {
    loadGalleryImages();
  }, []);

  const loadGalleryImages = async () => {
    try {
      setLoading(true);
      const galleryRef = dbRef(database, 'shivpratapmultistate/gallery');
      const snapshot = await get(galleryRef);

      if (snapshot.exists()) {
        const data = snapshot.val();
        const list = Object.keys(data).map(key => ({
          id: key,
          ...data[key]
        }));
        setImages(list.reverse());
      } else {
        setImages([]);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleDrag = e => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(e.type === 'dragenter' || e.type === 'dragover');
  };

  const handleDrop = e => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files.length) handleFiles(e.dataTransfer.files);
  };

  const handleFiles = files => {
    const valid = Array.from(files).filter(f => f.type.startsWith('image/'));
    if (!valid.length) return alert('Only image files allowed');

    setSelectedFiles(prev => [...prev, ...valid]);

    valid.forEach(file => {
      const reader = new FileReader();
      reader.onload = e => setPreviewUrls(prev => [...prev, e.target.result]);
      reader.readAsDataURL(file);
    });
  };

  const removePreview = index => {
    setSelectedFiles(prev => prev.filter((_, i) => i !== index));
    setPreviewUrls(prev => prev.filter((_, i) => i !== index));
  };

  const uploadImages = async () => {
    if (!selectedFiles.length) return alert('Select images first');

    setUploading(true);
    try {
      for (const file of selectedFiles) {
        const filename = `${Date.now()}_${file.name}`;
        const imgRef = storageRef(storage, `shivpratapmultistate/gallery/${filename}`);

        const snap = await uploadBytes(imgRef, file);
        const url = await getDownloadURL(snap.ref);

        const dbGalleryRef = dbRef(database, 'shivpratapmultistate/gallery');
        const newRef = push(dbGalleryRef);

        await set(newRef, {
          id: newRef.key,
          filename,
          originalName: file.name,
          url,
          storagePath: `shivpratapmultistate/gallery/${filename}`,
          uploadedAt: new Date().toISOString(),
          size: file.size,
          type: file.type
        });
      }

      setSelectedFiles([]);
      setPreviewUrls([]);
      await loadGalleryImages();
      alert('Images uploaded successfully');
    } catch (err) {
      console.error(err);
      alert('Upload failed');
    } finally {
      setUploading(false);
    }
  };

  const deleteImage = async image => {
    if (!window.confirm('Delete this image?')) return;
    try {
      await deleteObject(storageRef(storage, image.storagePath));
      await remove(dbRef(database, `shivpratapmultistate/gallery/${image.id}`));
      setImages(prev => prev.filter(img => img.id !== image.id));
    } catch (err) {
      console.error(err);
      alert('Delete failed');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 overflow-x-hidden">
      <AdminSidebar collapsed={sidebarCollapsed} toggleSidebar={toggleSidebar} />
      <AdminNavbar toggleSidebar={toggleSidebar} title="Gallery Management" />

      {/* Responsive Content Wrapper */}
      <div
        className={`pt-20 transition-all duration-300 
          ${sidebarCollapsed ? 'lg:ml-20' : 'lg:ml-64'} 
          ml-0`}
      >
        <div className="max-w-7xl mx-auto p-4 sm:p-6">
          {/* Header */}
          <div className="bg-white rounded-xl shadow p-4 sm:p-6 mb-6">
            <h1 className="text-2xl sm:text-3xl font-bold">Gallery Management</h1>
            <p className="text-gray-600 text-sm sm:text-base">
              Upload & manage gallery images
            </p>
          </div>

          {/* Upload Box */}
          <div className="bg-white rounded-xl shadow p-4 sm:p-6 mb-6">
            <h2 className="flex items-center text-lg font-semibold mb-4">
              <FiUpload className="mr-2 text-blue-600" /> Upload Images
            </h2>

            <div
              onDragEnter={handleDrag}
              onDragOver={handleDrag}
              onDragLeave={handleDrag}
              onDrop={handleDrop}
              className={`border-2 border-dashed rounded-xl p-6 text-center 
                ${dragActive ? 'border-blue-500 bg-blue-50' : 'border-gray-300'}`}
            >
              <FiImage className="mx-auto text-4xl text-gray-400 mb-3" />
              <p className="text-gray-600">Drag & drop or select images</p>

              <input
                type="file"
                multiple
                accept="image/*"
                onChange={e => handleFiles(e.target.files)}
                id="file-upload"
                className="hidden"
              />
              <label
                htmlFor="file-upload"
                className="inline-flex mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg cursor-pointer"
              >
                <FiPlus className="mr-2" /> Select Images
              </label>
            </div>

            {/* Previews */}
            {previewUrls.length > 0 && (
              <>
                <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3 mt-5">
                  {previewUrls.map((url, i) => (
                    <div key={i} className="relative">
                       <img src={url} alt="Preview" className="h-24 w-full object-cover rounded" />
                      <button
                        onClick={() => removePreview(i)}
                        className="absolute top-1 right-1 bg-red-500 text-white rounded-full p-1"
                      >
                        <FiX size={12} />
                      </button>
                    </div>
                  ))}
                </div>

                <button
                  onClick={uploadImages}
                  disabled={uploading}
                  className="mt-4 flex items-center px-6 py-2 bg-green-600 text-white rounded-lg"
                >
                  {uploading ? (
                    <FiLoader className="animate-spin mr-2" />
                  ) : (
                    <FiUpload className="mr-2" />
                  )}
                  Upload Images
                </button>
              </>
            )}
          </div>

          {/* Gallery */}
          <div className="bg-white rounded-xl shadow p-4 sm:p-6">
            <h2 className="flex items-center text-lg font-semibold mb-4">
              <FiImage className="mr-2 text-blue-600" />
              Gallery ({images.length})
            </h2>

            {loading ? (
              <div className="flex justify-center py-10">
                <FiLoader className="animate-spin text-3xl text-blue-600" />
              </div>
            ) : (
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-4">
                {images.map(img => (
                  <div key={img.id} className="relative group">
                    <img
                      src={img.url}
                        alt="Gallery item"
                      className="h-40 w-full object-cover rounded-lg"
                    />
                    <button
                      onClick={() => deleteImage(img)}
                      className="absolute top-2 right-2 bg-red-500 text-white p-2 rounded-full opacity-0 group-hover:opacity-100"
                    >
                      <FiTrash2 size={14} />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminGallery;
