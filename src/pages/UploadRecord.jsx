import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { 
  Upload, 
  FileText, 
  User, 
  Calendar,
  Award,
  Building,
  Plus,
  X,
  CheckCircle,
  AlertCircle,
  Save,
  Eye,
  Download
} from 'lucide-react'

export const UploadRecord = () => {
  const [formData, setFormData] = useState({
    studentName: '',
    studentEmail: '',
    studentId: '',
    certificateTitle: '',
    certificateType: 'degree',
    issuer: '',
    issueDate: '',
    completionDate: '',
    grade: '',
    credits: '',
    duration: '',
    description: '',
    additionalInfo: '',
  })
  const [skills, setSkills] = useState([])
  const [currentSkill, setCurrentSkill] = useState('')
  const [uploadedFiles, setUploadedFiles] = useState([])
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState('')

  const certificateTypes = [
    { value: 'degree', label: 'Degree' },
    { value: 'certificate', label: 'Certificate' },
    { value: 'specialization', label: 'Specialization' },
    { value: 'course', label: 'Course' },
    { value: 'diploma', label: 'Diploma' },
  ]

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }))
  }

  const addSkill = () => {
    if (currentSkill.trim() && !skills.includes(currentSkill.trim())) {
      setSkills([...skills, currentSkill.trim()])
      setCurrentSkill('')
    }
  }

  const removeSkill = (skillToRemove) => {
    setSkills(skills.filter(skill => skill !== skillToRemove))
  }

  const handleFileUpload = (e) => {
    const files = Array.from(e.target.files)
    setUploadedFiles(prev => [...prev, ...files])
  }

  const removeFile = (fileToRemove) => {
    setUploadedFiles(uploadedFiles.filter(file => file !== fileToRemove))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (!validateForm()) {
      return
    }
    
    setIsSubmitting(true)
    setSubmitStatus('')

    // Simulate blockchain transaction
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitStatus('success')
      // Reset form after successful submission
      setTimeout(() => {
        setFormData({
          studentName: '',
          studentEmail: '',
          studentId: '',
          certificateTitle: '',
          certificateType: 'degree',
          issuer: '',
          issueDate: '',
          completionDate: '',
          grade: '',
          credits: '',
          duration: '',
          description: '',
          additionalInfo: '',
        })
        setSkills([])
        setUploadedFiles([])
        setErrors({})
        setSubmitStatus('')
      }, 3000)
    }, 2000)
  }

  const [showPreview, setShowPreview] = useState(false)
  const [errors, setErrors] = useState({})

  const validateForm = () => {
    const newErrors = {}
    
    if (!formData.studentName.trim()) {
      newErrors.studentName = 'Student name is required'
    }
    
    if (!formData.studentEmail.trim()) {
      newErrors.studentEmail = 'Student email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.studentEmail)) {
      newErrors.studentEmail = 'Please enter a valid email address'
    }
    
    if (!formData.studentId.trim()) {
      newErrors.studentId = 'Student ID is required'
    }
    
    if (!formData.certificateTitle.trim()) {
      newErrors.certificateTitle = 'Certificate title is required'
    }
    
    if (!formData.issuer.trim()) {
      newErrors.issuer = 'Issuing institution is required'
    }
    
    if (!formData.issueDate) {
      newErrors.issueDate = 'Issue date is required'
    }
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const previewCertificate = () => {
    if (!validateForm()) {
      return
    }
    setShowPreview(true)
  }

  const closePreview = () => {
    setShowPreview(false)
  }

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyber-darker via-gray-900 to-cyber-darker">
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%230099ff' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
        
        {/* Animated gradient orbs */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-cyber-blue/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyber-purple/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyber-pink/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
        
        {/* Grid lines */}
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(0,153,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,153,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}></div>
        
        {/* Floating particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-cyber-blue/30 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${3 + Math.random() * 4}s`
              }}
            />
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold cyber-gradient-text mb-2">Upload Certificate</h1>
        <p className="text-gray-400">
          Issue a new blockchain-verified certificate to a student
        </p>
      </div>

      {submitStatus === 'success' && (
        <div className="mb-6 p-4 rounded-lg bg-green-500/10 border border-green-500/30">
          <div className="flex items-center space-x-2">
            <CheckCircle className="w-5 h-5 text-green-400" />
            <span className="text-green-400">Certificate successfully issued and recorded on blockchain!</span>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Student Information */}
        <div className="cyber-card">
          <h2 className="text-xl font-semibold text-white mb-4 flex items-center space-x-2">
            <User className="w-5 h-5" />
            <span>Student Information</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Student Name *
              </label>
              <input
                type="text"
                name="studentName"
                value={formData.studentName}
                onChange={handleInputChange}
                required
                className={`cyber-input w-full ${errors.studentName ? 'border-red-400' : ''}`}
                placeholder="Enter student's full name"
              />
              {errors.studentName && (
                <p className="text-red-400 text-sm mt-1">{errors.studentName}</p>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Student Email *
              </label>
              <input
                type="email"
                name="studentEmail"
                value={formData.studentEmail}
                onChange={handleInputChange}
                required
                className={`cyber-input w-full ${errors.studentEmail ? 'border-red-400' : ''}`}
                placeholder="student@example.com"
              />
              {errors.studentEmail && (
                <p className="text-red-400 text-sm mt-1">{errors.studentEmail}</p>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Student ID *
              </label>
              <input
                type="text"
                name="studentId"
                value={formData.studentId}
                onChange={handleInputChange}
                required
                className={`cyber-input w-full ${errors.studentId ? 'border-red-400' : ''}`}
                placeholder="STU2024CS001"
              />
              {errors.studentId && (
                <p className="text-red-400 text-sm mt-1">{errors.studentId}</p>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Certificate Type *
              </label>
              <select
                name="certificateType"
                value={formData.certificateType}
                onChange={handleInputChange}
                required
                className="cyber-input w-full"
              >
                {certificateTypes.map(type => (
                  <option key={type.value} value={type.value}>
                    {type.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Certificate Details */}
        <div className="cyber-card">
          <h2 className="text-xl font-semibold text-white mb-4 flex items-center space-x-2">
            <Award className="w-5 h-5" />
            <span>Certificate Details</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Certificate Title *
              </label>
              <input
                type="text"
                name="certificateTitle"
                value={formData.certificateTitle}
                onChange={handleInputChange}
                required
                className={`cyber-input w-full ${errors.certificateTitle ? 'border-red-400' : ''}`}
                placeholder="Bachelor of Computer Science"
              />
              {errors.certificateTitle && (
                <p className="text-red-400 text-sm mt-1">{errors.certificateTitle}</p>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Issuing Institution *
              </label>
              <input
                type="text"
                name="issuer"
                value={formData.issuer}
                onChange={handleInputChange}
                required
                className={`cyber-input w-full ${errors.issuer ? 'border-red-400' : ''}`}
                placeholder="Tech University"
              />
              {errors.issuer && (
                <p className="text-red-400 text-sm mt-1">{errors.issuer}</p>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Issue Date *
              </label>
              <input
                type="date"
                name="issueDate"
                value={formData.issueDate}
                onChange={handleInputChange}
                required
                className={`cyber-input w-full ${errors.issueDate ? 'border-red-400' : ''}`}
              />
              {errors.issueDate && (
                <p className="text-red-400 text-sm mt-1">{errors.issueDate}</p>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Completion Date
              </label>
              <input
                type="date"
                name="completionDate"
                value={formData.completionDate}
                onChange={handleInputChange}
                className="cyber-input w-full"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Grade
              </label>
              <input
                type="text"
                name="grade"
                value={formData.grade}
                onChange={handleInputChange}
                className="cyber-input w-full"
                placeholder="First Class Honors"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Credits
              </label>
              <input
                type="number"
                name="credits"
                value={formData.credits}
                onChange={handleInputChange}
                className="cyber-input w-full"
                placeholder="120"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Duration
              </label>
              <input
                type="text"
                name="duration"
                value={formData.duration}
                onChange={handleInputChange}
                className="cyber-input w-full"
                placeholder="4 Years"
              />
            </div>
          </div>
          <div className="mt-4">
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Description
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              rows={4}
              className="cyber-input w-full"
              placeholder="Brief description of the program or achievement..."
            />
          </div>
        </div>

        {/* Skills */}
        <div className="cyber-card">
          <h2 className="text-xl font-semibold text-white mb-4">Skills & Competencies</h2>
          <div className="flex space-x-2 mb-4">
            <input
              type="text"
              value={currentSkill}
              onChange={(e) => setCurrentSkill(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addSkill())}
              className="cyber-input flex-1"
              placeholder="Add a skill (e.g., JavaScript, Data Analysis)"
            />
            <button
              type="button"
              onClick={addSkill}
              className="cyber-button px-4"
            >
              <Plus className="w-5 h-5" />
            </button>
          </div>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill, index) => (
              <span
                key={index}
                className="inline-flex items-center space-x-1 px-3 py-1 rounded-full bg-cyber-blue/10 text-cyber-blue border border-cyber-blue/30"
              >
                <span>{skill}</span>
                <button
                  type="button"
                  onClick={() => removeSkill(skill)}
                  className="hover:text-red-400"
                >
                  <X className="w-3 h-3" />
                </button>
              </span>
            ))}
          </div>
        </div>

        {/* File Upload */}
        <div className="cyber-card">
          <h2 className="text-xl font-semibold text-white mb-4 flex items-center space-x-2">
            <Upload className="w-5 h-5" />
            <span>Supporting Documents</span>
          </h2>
          <div className="border-2 border-dashed border-gray-600 rounded-lg p-8 text-center">
            <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <p className="text-gray-400 mb-4">
              Upload supporting documents (transcripts, ID proof, etc.)
            </p>
            <input
              type="file"
              multiple
              onChange={handleFileUpload}
              className="hidden"
              id="file-upload"
            />
            <label
              htmlFor="file-upload"
              className="cyber-button inline-flex items-center space-x-2 cursor-pointer"
            >
              <Upload className="w-4 h-4" />
              <span>Choose Files</span>
            </label>
          </div>
          {uploadedFiles.length > 0 && (
            <div className="mt-4 space-y-2">
              {uploadedFiles.map((file, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-black/30 rounded-lg">
                  <div className="flex items-center space-x-2">
                    <FileText className="w-4 h-4 text-cyber-blue" />
                    <span className="text-sm text-gray-300">{file.name}</span>
                  </div>
                  <button
                    type="button"
                    onClick={() => removeFile(file)}
                    className="text-red-400 hover:text-red-300"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Additional Information */}
        <div className="cyber-card">
          <h2 className="text-xl font-semibold text-white mb-4">Additional Information</h2>
          <textarea
            name="additionalInfo"
            value={formData.additionalInfo}
            onChange={handleInputChange}
            rows={3}
            className="cyber-input w-full"
            placeholder="Any additional notes or special recognitions..."
          />
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
          <button
            type="button"
            onClick={previewCertificate}
            className="glass flex items-center justify-center space-x-2 px-6 py-3 hover:bg-white/20 transition-all duration-300"
          >
            <Eye className="w-5 h-5" />
            <span>Preview Certificate</span>
          </button>
          <button
            type="submit"
            disabled={isSubmitting}
            className="cyber-button flex items-center justify-center space-x-2 px-6 py-3 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
              <>
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                <span>Issuing Certificate...</span>
              </>
            ) : (
              <>
                <Save className="w-5 h-5" />
                <span>Issue Certificate</span>
              </>
            )}
          </button>
        </div>
      </form>

      {/* Preview Modal */}
      {showPreview && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-gray-900 border border-cyber-blue/30 rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-semibold text-white">Certificate Preview</h3>
                <button
                  onClick={closePreview}
                  className="text-gray-400 hover:text-white"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              
              <div className="cyber-card p-8">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyber-blue to-cyber-purple rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-white">TC</span>
                  </div>
                  <h4 className="text-2xl font-bold text-white mb-2">{formData.issuer || 'Tech University'}</h4>
                  <p className="text-cyber-blue">Verified Institution</p>
                </div>
                
                <div className="text-center mb-6">
                  <h2 className="text-3xl font-bold cyber-gradient-text mb-2">{formData.certificateTitle || 'Certificate of Achievement'}</h2>
                  <p className="text-gray-400 mb-4">This is to certify that</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <p className="text-sm text-gray-400 mb-1">Student Name</p>
                    <p className="text-lg font-semibold text-white">{formData.studentName || 'Student Name'}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 mb-1">Student ID</p>
                    <p className="text-lg font-semibold text-white">{formData.studentId || 'STU2024XXXX'}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 mb-1">Email</p>
                    <p className="text-lg font-semibold text-white">{formData.studentEmail || 'student@example.com'}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 mb-1">Issue Date</p>
                    <p className="text-lg font-semibold text-white">{formData.issueDate || '2024-01-15'}</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <p className="text-sm text-gray-400 mb-1">Certificate Type</p>
                    <p className="text-lg font-semibold text-white capitalize">
                      {certificateTypes.find(type => type.value === formData.certificateType)?.label || 'Degree'}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 mb-1">Grade</p>
                    <p className="text-lg font-semibold text-white">{formData.grade || 'N/A'}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 mb-1">Credits</p>
                    <p className="text-lg font-semibold text-white">{formData.credits || 'N/A'}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 mb-1">Duration</p>
                    <p className="text-lg font-semibold text-white">{formData.duration || 'N/A'}</p>
                  </div>
                </div>
                
                {formData.description && (
                  <div className="mb-6">
                    <p className="text-sm text-gray-400 mb-2">Description</p>
                    <p className="text-white">{formData.description}</p>
                  </div>
                )}
                
                {skills.length > 0 && (
                  <div className="mb-6">
                    <p className="text-sm text-gray-400 mb-2">Skills & Competencies</p>
                    <div className="flex flex-wrap gap-2">
                      {skills.map((skill, index) => (
                        <span
                          key={index}
                          className="inline-flex items-center space-x-1 px-3 py-1 rounded-full bg-cyber-blue/10 text-cyber-blue border border-cyber-blue/30"
                        >
                          <span>{skill}</span>
                        </span>
                      ))}
                    </div>
                  </div>
                )}
                
                <div className="border-t border-gray-700 pt-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs text-gray-500">Certificate Hash</p>
                      <p className="text-xs font-mono text-cyber-blue">
                        0x7f9a8b3c4d5e6f1a2b3c4d5e6f7a8b9c
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-gray-500">Transaction ID</p>
                      <p className="text-xs font-mono text-cyber-blue">
                        tx_123456789
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="text-center mt-6">
                  <div className="inline-flex items-center space-x-2 px-4 py-2 bg-cyber-blue/10 border border-cyber-blue/30 rounded-lg">
                    <CheckCircle className="w-4 h-4 text-cyber-blue" />
                    <span className="text-cyber-blue text-sm">Blockchain Verified</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
    </div>
  )
}
