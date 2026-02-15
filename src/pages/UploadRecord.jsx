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
    setIsSubmitting(true)
    setSubmitStatus('')

    // Simulate API call
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
        setSubmitStatus('')
      }, 3000)
    }, 2000)
  }

  const previewCertificate = () => {
    // This would open a preview modal
    alert('Preview functionality would be implemented here')
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
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
                className="cyber-input w-full"
                placeholder="Enter student's full name"
              />
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
                className="cyber-input w-full"
                placeholder="student@example.com"
              />
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
                className="cyber-input w-full"
                placeholder="STU2024CS001"
              />
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
                className="cyber-input w-full"
                placeholder="Bachelor of Computer Science"
              />
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
                className="cyber-input w-full"
                placeholder="Tech University"
              />
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
                className="cyber-input w-full"
              />
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
    </div>
  )
}
