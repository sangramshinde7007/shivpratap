
import React, { useState, useEffect } from 'react';
import {
  FiUpload,
  FiTrash2,
  FiPlus,
  FiX,
  FiLoader,
  FiFile,
  FiMusic,
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

const AdminMedia = () => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [mediaFiles, setMediaFiles] = useState([]);
  const [uploading, setUploading] = useState(false);
  const [dragActive, setDragActive] = useState(false);
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [previewUrls, setPreviewUrls] = useState([]);
  const [loading, setLoading] = useState(true);

  const toggleSidebar = () => setSidebarCollapsed(prev => !prev);

  useEffect(() => {
    loadMediaFiles();
  }, []);

  const loadMediaFiles = async () => {
    try {
      setLoading(true);
      const ref = dbRef(database, 'shivpratapmultistate/media');
      const snap = await get(ref);

      if (snap.exists()) {
        const data = snap.val();
        const list = Object.keys(data).map(key => ({
          id: key,
          ...data[key]
        }));
        setMediaFiles(list.reverse());
      } else {
        setMediaFiles([]);
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
    const valid = Array.from(files).filter(f =>
      f.type.startsWith('image/') ||
      f.type.startsWith('video/') ||
      f.type.startsWith('audio/')
    );

    if (!valid.length) return alert('Only image, video or audio files allowed');

    setSelectedFiles(valid);

    const previews = valid.map(file =>
      file.type.startsWith('image/') || file.type.startsWith('video/')
        ? URL.createObjectURL(file)
        : null
    );

    setPreviewUrls(previews);
  };

  const removePreview = index => {
    if (previewUrls[index]) URL.revokeObjectURL(previewUrls[index]);
    setSelectedFiles(prev => prev.filter((_, i) => i !== index));
    setPreviewUrls(prev => prev.filter((_, i) => i !== index));
  };

  const uploadMedia = async () => {
    if (!selectedFiles.length) return alert('Select files first');

    setUploading(true);
    try {
      for (const file of selectedFiles) {
        const filename = `${Date.now()}_${file.name}`;
        const path = `shivpratapmultistate/media/${filename}`;
        const sRef = storageRef(storage, path);

        await uploadBytes(sRef, file);
        const url = await getDownloadURL(sRef);

        const newRef = push(dbRef(database, 'shivpratapmultistate/media'));
        await set(newRef, {
          id: newRef.key,
          filename,
          originalName: file.name,
          url,
          storagePath: path,
          type: file.type,
          size: file.size,
          uploadedAt: new Date().toISOString(),
          category: file.type.split('/')[0]
        });
      }

      previewUrls.forEach(u => u && URL.revokeObjectURL(u));
      setSelectedFiles([]);
      setPreviewUrls([]);
      await loadMediaFiles();
      alert('Media uploaded successfully');
    } catch (err) {
      console.error(err);
      alert('Upload failed');
    } finally {
      setUploading(false);
    }
  };

  const deleteMedia = async media => {
    if (!window.confirm('Delete this file?')) return;
    try {
      await deleteObject(storageRef(storage, media.storagePath));
      await remove(dbRef(database, `shivpratapmultistate/media/${media.id}`));
      setMediaFiles(prev => prev.filter(m => m.id !== media.id));
    } catch (err) {
      console.error(err);
      alert('Delete failed');
    }
  };

  const formatSize = bytes => {
    if (!bytes) return '0 B';
    const k = 1024;
    const sizes = ['B', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return `${(bytes / Math.pow(k, i)).toFixed(2)} ${sizes[i]}`;
  };

  return (
    <div className="min-h-screen bg-gray-50 overflow-x-hidden">
      <AdminSidebar collapsed={sidebarCollapsed} toggleSidebar={toggleSidebar} />
      <AdminNavbar toggleSidebar={toggleSidebar} title="Media Management" />

      {/* Responsive Content Wrapper */}
      <div
        className={`pt-20 transition-all duration-300
          ${sidebarCollapsed ? 'lg:ml-20' : 'lg:ml-64'} ml-0`}
      >
        <div className="max-w-7xl mx-auto p-4 sm:p-6">

          {/* Header */}
          <div className="bg-white rounded-xl shadow p-4 sm:p-6 mb-6">
            <h1 className="text-2xl sm:text-3xl font-bold">Media Management</h1>
            <p className="text-gray-600 text-sm sm:text-base">
              Upload & manage images, videos & audio
            </p>
          </div>

          {/* Upload Section */}
          <div className="bg-white rounded-xl shadow p-4 sm:p-6 mb-6">
            <h2 className="flex items-center text-lg font-semibold mb-4">
              <FiUpload className="mr-2 text-blue-600" /> Upload Media
            </h2>

            <div
              onDragEnter={handleDrag}
              onDragOver={handleDrag}
              onDragLeave={handleDrag}
              onDrop={handleDrop}
              className={`border-2 border-dashed rounded-xl p-6 text-center
                ${dragActive ? 'border-blue-500 bg-blue-50' : 'border-gray-300'}`}
            >
              <FiFile className="mx-auto text-4xl text-gray-400 mb-3" />
              <p className="text-gray-600">Drag & drop or select files</p>

              <input
                type="file"
                multiple
                accept="image/*,video/*,audio/*"
                onChange={e => handleFiles(e.target.files)}
                id="media-upload"
                className="hidden"
              />
              <label
                htmlFor="media-upload"
                className="inline-flex mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg cursor-pointer"
              >
                <FiPlus className="mr-2" /> Select Files
              </label>
            </div>

            {/* Preview */}
            {selectedFiles.length > 0 && (
              <>
                <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3 mt-5">
                  {previewUrls.map((url, i) => (
                    <div key={i} className="relative">
                      {url ? (
                        <img src={url} alt="Preview" className="h-24 w-full object-cover rounded" />
                      ) : (
                        <div className="h-24 flex items-center justify-center bg-gray-100 rounded">
                          <FiMusic className="text-gray-400" />
                        </div>
                      )}
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
                  onClick={uploadMedia}
                  disabled={uploading}
                  className="mt-4 flex items-center px-6 py-2 bg-green-600 text-white rounded-lg"
                >
                  {uploading ? <FiLoader className="animate-spin mr-2" /> : <FiUpload className="mr-2" />}
                  Upload Files
                </button>
              </>
            )}
          </div>

          {/* Media Grid */}
          <div className="bg-white rounded-xl shadow p-4 sm:p-6">
            <h2 className="flex items-center text-lg font-semibold mb-4">
              <FiFile className="mr-2 text-blue-600" />
              Media ({mediaFiles.length})
            </h2>

            {loading ? (
              <div className="flex justify-center py-10">
                <FiLoader className="animate-spin text-3xl text-blue-600" />
              </div>
            ) : (
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-4">
                {mediaFiles.map(media => (
                  <div key={media.id} className="relative group">
                    {media.type.startsWith('image/') ? (
                      <img src={media.url} alt="Media item" className="h-40 w-full object-cover rounded-lg" />
                    ) : media.type.startsWith('video/') ? (
                      <video src={media.url} controls className="h-40 w-full rounded-lg" />
                    ) : (
                      <div className="h-40 flex items-center justify-center bg-gray-100 rounded-lg">
                        <FiMusic className="text-3xl text-gray-400" />
                      </div>
                    )}

                    <div className="mt-2 text-xs text-gray-600 truncate">
                      {media.originalName} • {formatSize(media.size)}
                    </div>

                    <button
                      onClick={() => deleteMedia(media)}
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

export default AdminMedia;
