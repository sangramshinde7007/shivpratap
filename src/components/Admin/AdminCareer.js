import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiPlus, FiEdit2, FiTrash2, FiSave, FiX, FiBriefcase } from 'react-icons/fi';
import AdminNavbar from './AdminNavbar';
import AdminSidebar from './AdminSidebar';
import { 
  database, 
  ref as dbRef, 
  set, 
  get,
  remove,
  push
} from '../../firebase';

const AdminCareer = () => {
  const navigate = useNavigate();
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editingJob, setEditingJob] = useState(null);
  const [formData, setFormData] = useState({
    titleEn: '',
    titleMr: '',
    locationEn: '',
    locationMr: '',
    descriptionEn: '',
    descriptionMr: '',
    requirementsEn: [''],
    requirementsMr: ['']
  });

  useEffect(() => {
    // Check authentication
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    if (!isLoggedIn) {
      navigate('/login');
      return;
    }

    loadJobs();
  }, [navigate]);

  const loadJobs = async () => {
    setLoading(true);
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
      } else {
        setJobs([]);
      }
    } catch (error) {
      console.error('Error loading jobs:', error);
      alert('Error loading jobs. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleRequirementChange = (lang, index, value) => {
    const field = lang === 'en' ? 'requirementsEn' : 'requirementsMr';
    setFormData(prev => ({
      ...prev,
      [field]: prev[field].map((req, i) => i === index ? value : req)
    }));
  };

  const addRequirement = (lang) => {
    const field = lang === 'en' ? 'requirementsEn' : 'requirementsMr';
    setFormData(prev => ({
      ...prev,
      [field]: [...prev[field], '']
    }));
  };

  const removeRequirement = (lang, index) => {
    const field = lang === 'en' ? 'requirementsEn' : 'requirementsMr';
    setFormData(prev => ({
      ...prev,
      [field]: prev[field].filter((_, i) => i !== index)
    }));
  };

  const resetForm = () => {
    setFormData({
      titleEn: '',
      titleMr: '',
      locationEn: '',
      locationMr: '',
      descriptionEn: '',
      descriptionMr: '',
      requirementsEn: [''],
      requirementsMr: ['']
    });
    setEditingJob(null);
    setShowForm(false);
  };

  const handleEdit = (job) => {
    setFormData({
      titleEn: job.title.en,
      titleMr: job.title.mr,
      locationEn: job.location.en,
      locationMr: job.location.mr,
      descriptionEn: job.description.en,
      descriptionMr: job.description.mr,
      requirementsEn: job.requirements.en,
      requirementsMr: job.requirements.mr
    });
    setEditingJob(job);
    setShowForm(true);
  };

  const handleDelete = async (jobId) => {
    if (!window.confirm('Are you sure you want to delete this job?')) {
      return;
    }

    try {
      const jobRef = dbRef(database, `shivpratapmultistate/career/${jobId}`);
      await remove(jobRef);
      await loadJobs();
      alert('Job deleted successfully!');
    } catch (error) {
      console.error('Error deleting job:', error);
      alert('Error deleting job. Please try again.');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation
    if (!formData.titleEn || !formData.titleMr || !formData.locationEn || !formData.locationMr ||
        !formData.descriptionEn || !formData.descriptionMr) {
      alert('Please fill in all required fields');
      return;
    }

    // Filter out empty requirements
    const requirementsEn = formData.requirementsEn.filter(req => req.trim() !== '');
    const requirementsMr = formData.requirementsMr.filter(req => req.trim() !== '');

    if (requirementsEn.length === 0 || requirementsMr.length === 0) {
      alert('Please add at least one requirement in both languages');
      return;
    }

    const jobData = {
      title: {
        en: formData.titleEn,
        mr: formData.titleMr
      },
      location: {
        en: formData.locationEn,
        mr: formData.locationMr
      },
      description: {
        en: formData.descriptionEn,
        mr: formData.descriptionMr
      },
      requirements: {
        en: requirementsEn,
        mr: requirementsMr
      },
      updatedAt: new Date().toISOString(),
      updatedBy: localStorage.getItem('adminEmail') || 'admin'
    };

    try {
      if (editingJob) {
        // Update existing job
        const jobRef = dbRef(database, `shivpratapmultistate/career/${editingJob.id}`);
        await set(jobRef, jobData);
        alert('Job updated successfully!');
      } else {
        // Add new job
        const jobsRef = dbRef(database, 'shivpratapmultistate/career');
        const newJobRef = push(jobsRef);
        await set(newJobRef, {
          ...jobData,
          createdAt: new Date().toISOString()
        });
        alert('Job added successfully!');
      }

      resetForm();
      await loadJobs();
    } catch (error) {
      console.error('Error saving job:', error);
      alert('Error saving job. Please try again.');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <AdminNavbar />
      <AdminSidebar collapsed={sidebarCollapsed} toggleSidebar={() => setSidebarCollapsed(!sidebarCollapsed)} />
      
      <div className={`transition-all duration-300 ${sidebarCollapsed ? 'ml-20' : 'ml-64'} pt-16`}>
        <div className="p-8">
          {/* Header */}
          <div className="mb-8">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold text-gray-800 flex items-center">
                  <FiBriefcase className="mr-3 text-blue-600" />
                  Career Management
                </h1>
                <p className="text-gray-600 mt-2">Manage job listings for the career page</p>
              </div>
              <button
                onClick={() => setShowForm(!showForm)}
                className="flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all"
              >
                {showForm ? <FiX className="mr-2" /> : <FiPlus className="mr-2" />}
                {showForm ? 'Cancel' : 'Add New Job'}
              </button>
            </div>
          </div>

          {/* Add/Edit Form */}
          {showForm && (
            <div className="bg-white rounded-xl shadow-lg p-6 mb-8 border border-gray-200">
              <h2 className="text-xl font-bold text-gray-800 mb-6">
                {editingJob ? 'Edit Job' : 'Add New Job'}
              </h2>
              
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* English Fields */}
                  <div className="space-y-4">
                    <h3 className="font-semibold text-gray-700 border-b pb-2">English</h3>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Job Title *</label>
                      <input
                        type="text"
                        value={formData.titleEn}
                        onChange={(e) => handleInputChange('titleEn', e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="e.g., Branch Manager"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Location *</label>
                      <input
                        type="text"
                        value={formData.locationEn}
                        onChange={(e) => handleInputChange('locationEn', e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="e.g., Vita, Sangli"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Description *</label>
                      <textarea
                        value={formData.descriptionEn}
                        onChange={(e) => handleInputChange('descriptionEn', e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        rows="4"
                        placeholder="Job description..."
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Requirements *</label>
                      {formData.requirementsEn.map((req, index) => (
                        <div key={index} className="flex gap-2 mb-2">
                          <input
                            type="text"
                            value={req}
                            onChange={(e) => handleRequirementChange('en', index, e.target.value)}
                            className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            placeholder="Requirement..."
                          />
                          {formData.requirementsEn.length > 1 && (
                            <button
                              type="button"
                              onClick={() => removeRequirement('en', index)}
                              className="px-3 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
                            >
                              <FiTrash2 />
                            </button>
                          )}
                        </div>
                      ))}
                      <button
                        type="button"
                        onClick={() => addRequirement('en')}
                        className="mt-2 px-4 py-2 bg-blue-100 text-blue-600 rounded-lg hover:bg-blue-200 text-sm"
                      >
                        + Add Requirement
                      </button>
                    </div>
                  </div>

                  {/* Marathi Fields */}
                  <div className="space-y-4">
                    <h3 className="font-semibold text-gray-700 border-b pb-2">मराठी</h3>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">नोकरीचे शीर्षक *</label>
                      <input
                        type="text"
                        value={formData.titleMr}
                        onChange={(e) => handleInputChange('titleMr', e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="उदा., शाखा व्यवस्थापक"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">स्थान *</label>
                      <input
                        type="text"
                        value={formData.locationMr}
                        onChange={(e) => handleInputChange('locationMr', e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="उदा., विटा, सांगली"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">वर्णन *</label>
                      <textarea
                        value={formData.descriptionMr}
                        onChange={(e) => handleInputChange('descriptionMr', e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        rows="4"
                        placeholder="नोकरीचे वर्णन..."
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">आवश्यकता *</label>
                      {formData.requirementsMr.map((req, index) => (
                        <div key={index} className="flex gap-2 mb-2">
                          <input
                            type="text"
                            value={req}
                            onChange={(e) => handleRequirementChange('mr', index, e.target.value)}
                            className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            placeholder="आवश्यकता..."
                          />
                          {formData.requirementsMr.length > 1 && (
                            <button
                              type="button"
                              onClick={() => removeRequirement('mr', index)}
                              className="px-3 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
                            >
                              <FiTrash2 />
                            </button>
                          )}
                        </div>
                      ))}
                      <button
                        type="button"
                        onClick={() => addRequirement('mr')}
                        className="mt-2 px-4 py-2 bg-blue-100 text-blue-600 rounded-lg hover:bg-blue-200 text-sm"
                      >
                        + आवश्यकता जोडा
                      </button>
                    </div>
                  </div>
                </div>

                <div className="flex justify-end gap-4 mt-6 pt-6 border-t">
                  <button
                    type="button"
                    onClick={resetForm}
                    className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="flex items-center px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:shadow-lg"
                  >
                    <FiSave className="mr-2" />
                    {editingJob ? 'Update Job' : 'Save Job'}
                  </button>
                </div>
              </form>
            </div>
          )}

          {/* Jobs List */}
          <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
            <h2 className="text-xl font-bold text-gray-800 mb-6">Current Job Listings</h2>
            
            {loading ? (
              <div className="text-center py-12">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
                <p className="text-gray-600 mt-4">Loading jobs...</p>
              </div>
            ) : jobs.length === 0 ? (
              <div className="text-center py-12">
                <FiBriefcase className="text-gray-400 text-5xl mx-auto mb-4" />
                <p className="text-gray-600">No jobs added yet. Click "Add New Job" to create one.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {jobs.map((job) => (
                  <div key={job.id} className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-lg font-bold text-gray-800">{job.title.en}</h3>
                        <p className="text-sm text-gray-600">{job.title.mr}</p>
                        <p className="text-sm text-blue-600 mt-1">{job.location.en}</p>
                      </div>
                      <div className="flex gap-2">
                        <button
                          onClick={() => handleEdit(job)}
                          className="p-2 bg-blue-100 text-blue-600 rounded-lg hover:bg-blue-200"
                        >
                          <FiEdit2 />
                        </button>
                        <button
                          onClick={() => handleDelete(job.id)}
                          className="p-2 bg-red-100 text-red-600 rounded-lg hover:bg-red-200"
                        >
                          <FiTrash2 />
                        </button>
                      </div>
                    </div>
                    
                    <p className="text-sm text-gray-600 mb-3 line-clamp-2">{job.description.en}</p>
                    
                    <div className="text-xs text-gray-500">
                      <p>Requirements: {job.requirements.en.length} items</p>
                      {job.updatedAt && (
                        <p className="mt-1">Updated: {new Date(job.updatedAt).toLocaleDateString()}</p>
                      )}
                    </div>
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

export default AdminCareer;
