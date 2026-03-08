import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  Users,
  FileText,
  TrendingUp,
  CheckCircle,
  Clock,
  AlertCircle,
  Plus,
  Search,
  Filter,
  Download,
  Eye,
  Calendar,
  Award,
  Building,
  BarChart3,
  Activity,
  Upload,
  X
} from 'lucide-react'

export const InstitutionDashboard = () => {
  // Calculate live statistics from stored certificates
  const uploadedCertificates = JSON.parse(localStorage.getItem('uploadedCertificates') || '[]')

  // File upload state
  const [selectedFile, setSelectedFile] = useState(null)
  const [isUploading, setIsUploading] = useState(false)
  const [uploadStatus, setUploadStatus] = useState('')
  const [showUploadModal, setShowUploadModal] = useState(false)

  const stats = [
    {
      label: 'Total Issued',
      value: uploadedCertificates.length.toString(),
      icon: FileText,
      color: 'text-cyber-blue',
      bgColor: 'bg-cyber-blue/10',
      change: `${uploadedCertificates.length} certificates issued`,
    },
    {
      label: 'Active Students',
      value: uploadedCertificates.length > 0 ? Math.floor(uploadedCertificates.length * 1.5).toString() : '0',
      icon: Users,
      color: 'text-green-400',
      bgColor: 'bg-green-400/10',
      change: uploadedCertificates.length > 0 ? `${Math.floor(uploadedCertificates.length * 1.5)} students` : 'No student data available',
    },
    {
      label: 'Verification Rate',
      value: uploadedCertificates.length > 0 ? '100%' : '0%',
      icon: CheckCircle,
      color: 'text-cyber-purple',
      bgColor: 'bg-cyber-purple/10',
      change: uploadedCertificates.length > 0 ? 'All verified' : 'No certificates',
    },
    {
      label: 'Pending Requests',
      value: uploadedCertificates.length > 0 ? Math.floor(uploadedCertificates.length * 0.1).toString() : '0',
      icon: Clock,
      color: 'text-yellow-400',
      bgColor: 'bg-yellow-400/10',
      change: uploadedCertificates.length > 0 ? `${Math.floor(uploadedCertificates.length * 0.1)} pending` : 'No pending requests',
    },
  ]

  // File upload handlers
  const openSystemFileDialog = () => {
    const fileInput = document.createElement('input')
    fileInput.type = 'file'
    fileInput.accept = '.pdf,.jpg,.jpeg,.png'
    fileInput.multiple = false
    fileInput.style.display = 'none'

    fileInput.addEventListener('change', (e) => {
      const files = Array.from(e.target.files)
      if (files.length > 0) {
        const file = files[0]
        const isValidType = file.type === 'application/pdf' ||
                            file.type === 'image/jpeg' ||
                            file.type === 'image/png'
        const isValidSize = file.size <= 5 * 1024 * 1024 // 5MB

        if (isValidType && isValidSize) {
          setSelectedFile(file)
          setShowUploadModal(true)
        } else {
          alert('Please select a valid file (PDF, JPG, or PNG) under 5MB.')
        }
      }
    })

    document.body.appendChild(fileInput)
    fileInput.click()

    setTimeout(() => {
      document.body.removeChild(fileInput)
    }, 100)
  }

  const handleFileUpload = async () => {
    if (!selectedFile) return

    setIsUploading(true)
    setUploadStatus('')

    // Simulate blockchain upload process
    setTimeout(() => {
      // Create certificate object
      const newCertificate = {
        id: Date.now(),
        title: `Certificate ${uploadedCertificates.length + 1}`,
        issuer: 'Institution',
        date: new Date().toISOString().split('T')[0],
        status: 'verified',
        type: 'certificate',
        hash: '0x' + Math.random().toString(16).substring(2, 66),
        transactionId: 'tx_' + Math.random().toString(36).substring(2, 15),
        studentName: 'Student Name',
        studentEmail: 'student@example.com',
        studentId: 'STU001',
        grade: 'A',
        credits: '3',
        duration: '6 months',
        description: 'Certificate uploaded via dashboard',
        skills: ['Certificate Upload'],
        fileName: selectedFile.name,
        fileSize: selectedFile.size,
        uploadDate: new Date().toISOString().split('T')[0]
      }

      // Save to localStorage
      const existingCertificates = JSON.parse(localStorage.getItem('uploadedCertificates') || '[]')
      const updatedCertificates = [...existingCertificates, newCertificate]
      localStorage.setItem('uploadedCertificates', JSON.stringify(updatedCertificates))

      setIsUploading(false)
      setUploadStatus('success')
      setSelectedFile(null)
      setShowUploadModal(false)

      // Reset status after 3 seconds
      setTimeout(() => {
        setUploadStatus('')
      }, 3000)
    }, 2000)
  }

  const closeUploadModal = () => {
    setShowUploadModal(false)
    setSelectedFile(null)
    setUploadStatus('')
  }

  const recentCertificates = uploadedCertificates.slice(0, 4)

  const quickActions = [
    {
      title: 'Issue Certificate',
      description: 'Upload and issue new certificates',
      icon: Plus,
      action: openSystemFileDialog,
      color: 'from-cyber-blue to-cyber-purple',
    },
    {
      title: 'View All Records',
      description: 'Browse all issued certificates',
      icon: FileText,
      link: '/upload-record',
      color: 'from-cyber-purple to-cyber-pink',
    },
    {
      title: 'Student Management',
      description: 'Manage student records',
      icon: Users,
      link: '/upload-record',
      color: 'from-cyber-pink to-cyber-blue',
    },
  ]

  const getStatusColor = (status) => {
    switch (status) {
      case 'verified':
        return 'text-green-400 bg-green-400/10'
      case 'pending':
        return 'text-yellow-400 bg-yellow-400/10'
      case 'expired':
        return 'text-red-400 bg-red-400/10'
      default:
        return 'text-gray-400 bg-gray-400/10'
    }
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
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-8">
        {/* Welcome Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold cyber-gradient-text mb-2">
            Welcome back, Tech University!
          </h1>
          <p className="text-gray-400">
            Manage your institution's certificate issuance and verification system
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-6 sm:mb-8">
          {stats.map((stat, index) => (
            <div key={index} className="cyber-card">
              <div className="flex items-center justify-between mb-3 sm:mb-4">
                <div className={`p-2 sm:p-3 rounded-lg ${stat.bgColor}`}>
                  <stat.icon className={`w-5 h-5 sm:w-6 sm:h-6 ${stat.color}`} />
                </div>
                <span className="text-xs sm:text-sm text-green-400 truncate">{stat.change}</span>
              </div>
              <div className="text-lg sm:text-2xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-xs sm:text-sm text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Quick Actions */}
        <div className="mb-6 sm:mb-8">
          <h2 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4">Quick Actions</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {quickActions.map((action, index) => (
              action.link ? (
                <Link
                  key={index}
                  to={action.link}
                  className="cyber-card hover:scale-105 transition-transform duration-300 group"
                >
                  <div className={`p-2 sm:p-3 rounded-lg bg-gradient-to-r ${action.color} w-fit mb-3 sm:mb-4`}>
                    <action.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <h3 className="text-base sm:text-lg font-semibold text-white mb-2 group-hover:text-cyber-blue transition-colors">
                    {action.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-400">{action.description}</p>
                </Link>
              ) : (
                <button
                  key={index}
                  onClick={action.action}
                  className="cyber-card hover:scale-105 transition-transform duration-300 group text-left"
                >
                  <div className={`p-2 sm:p-3 rounded-lg bg-gradient-to-r ${action.color} w-fit mb-3 sm:mb-4`}>
                    <action.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <h3 className="text-base sm:text-lg font-semibold text-white mb-2 group-hover:text-cyber-blue transition-colors">
                    {action.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-400">{action.description}</p>
                </button>
              )
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {/* Recent Certificates */}
          <div>
            <div className="flex items-center justify-between mb-3 sm:mb-4">
              <h2 className="text-lg sm:text-xl font-semibold text-white">Recently Issued</h2>
              <Link
                to="/upload-record"
                className="text-cyber-blue hover:text-cyber-purple text-xs sm:text-sm"
              >
                View All →
              </Link>
            </div>
            <div className="space-y-3 sm:space-y-4">
              {recentCertificates.map((cert) => (
                <div key={cert.id} className="cyber-card hover:border-cyber-blue/50 transition-all duration-300">
                  <div className="flex items-start justify-between">
                    <div className="flex items-start space-x-2 sm:space-x-3">
                      <div className="p-1.5 sm:p-2 rounded-lg bg-cyber-blue/10">
                        <Award className="w-3 h-3 sm:w-4 sm:h-4" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-sm sm:text-base font-medium text-white mb-1 truncate">{cert.title}</h3>
                        <p className="text-xs sm:text-sm text-gray-400 mb-2 truncate">{cert.studentName}</p>
                        <div className="flex items-center space-x-2 sm:space-x-4 text-xs text-gray-500">
                          <span className="flex items-center space-x-1">
                            <Calendar className="w-2 h-2 sm:w-3 sm:h-3" />
                            <span>{cert.date}</span>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-end space-y-1 sm:space-y-2">
                      <span className={`px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full text-xs font-medium ${getStatusColor(cert.status)}`}>
                        {cert.status}
                      </span>
                      <button className="text-cyber-blue hover:text-cyber-purple text-xs sm:text-sm">
                        View →
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Analytics Overview */}
          <div>
            <h2 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4">Analytics Overview</h2>
            <div className="cyber-card">
              <div className="space-y-4 sm:space-y-6">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs sm:text-sm text-gray-400">Monthly Issuance</span>
                    <span className="text-xs sm:text-sm text-green-400">+12%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="bg-gradient-to-r from-cyber-blue to-cyber-purple h-2 rounded-full w-3/4 sm:w-4/5"></div>
                  </div>
                  <div className="flex justify-between mt-1">
                    <span className="text-xs text-gray-500">0</span>
                    <span className="text-xs text-gray-500">150</span>
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs sm:text-sm text-gray-400">Verification Success</span>
                    <span className="text-xs sm:text-sm text-green-400">98.5%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="bg-green-400 h-2 rounded-full w-11/12"></div>
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs sm:text-sm text-gray-400">Student Engagement</span>
                    <span className="text-xs sm:text-sm text-cyber-purple">+8%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="bg-cyber-purple h-2 rounded-full w-4/5"></div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 sm:gap-4 pt-4 border-t border-gray-700">
                  <div className="text-center">
                    <div className="text-xl sm:text-2xl font-bold text-cyber-blue">24/7</div>
                    <div className="text-xs text-gray-400">Uptime</div>
                  </div>
                  <div className="text-center">
                    <div className="text-xl sm:text-2xl font-bold text-green-400">0.3s</div>
                    <div className="text-xs text-gray-400">Avg Response</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Recent Activity */}
            <div className="mt-4 sm:mt-6">
              <h3 className="text-base sm:text-lg font-semibold text-white mb-3 sm:mb-4">Recent Activity</h3>
              <div className="cyber-card">
                <div className="space-y-3 sm:space-y-4">
                  <div className="flex items-start space-x-2 sm:space-x-3">
                    <div className="p-1.5 sm:p-2 rounded-full bg-green-400/10">
                      <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-green-400" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs sm:text-sm text-white">Certificate issued to John Doe</p>
                      <p className="text-xs text-gray-400">Bachelor of Computer Science - 2 hours ago</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-2 sm:space-x-3">
                    <div className="p-1.5 sm:p-2 rounded-full bg-cyber-blue/10">
                      <Users className="w-3 h-3 sm:w-4 sm:h-4 text-cyber-blue" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs sm:text-sm text-white">New student registration</p>
                      <p className="text-xs text-gray-400">45 new students this week - 5 hours ago</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-2 sm:space-x-3">
                    <div className="p-1.5 sm:p-2 rounded-full bg-cyber-purple/10">
                      <Activity className="w-3 h-3 sm:w-4 sm:h-4 text-cyber-purple" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs sm:text-sm text-white">System update completed</p>
                      <p className="text-xs text-gray-400">Version 2.1.0 deployed - 1 day ago</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Upload Modal */}
        {showUploadModal && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="cyber-card max-w-md w-full mx-4">
              <div className="flex items-center justify-between mb-4 sm:mb-6">
                <h3 className="text-lg sm:text-xl font-semibold text-white flex items-center space-x-2">
                  <Upload className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span>Upload Certificate</span>
                </h3>
                <button
                  onClick={closeUploadModal}
                  className="text-gray-400 hover:text-white p-1"
                >
                  <X className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>
              </div>

              {selectedFile && (
                <div className="mb-4 sm:mb-6">
                  <div className="flex items-center space-x-2 sm:space-x-3 p-2 sm:p-3 bg-black/30 rounded-lg border border-gray-700">
                    <FileText className="w-4 h-4 sm:w-5 sm:h-5 text-cyber-blue flex-shrink-0" />
                    <div className="flex-1 min-w-0">
                      <p className="text-xs sm:text-sm text-white font-medium truncate">{selectedFile.name}</p>
                      <p className="text-xs text-gray-400">
                        {(selectedFile.size / 1024 / 1024).toFixed(2)} MB • {selectedFile.type}
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {uploadStatus === 'success' && (
                <div className="mb-4 sm:mb-6 p-3 sm:p-4 rounded-lg bg-green-500/10 border border-green-500/30">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-400" />
                    <span className="text-sm text-green-400">Certificate uploaded successfully!</span>
                  </div>
                </div>
              )}

              <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-3">
                <button
                  onClick={closeUploadModal}
                  className="flex-1 glass px-3 sm:px-4 py-2 hover:bg-white/20 transition-all duration-300 text-sm sm:text-base"
                >
                  Cancel
                </button>
                <button
                  onClick={handleFileUpload}
                  disabled={isUploading || !selectedFile}
                  className="flex-1 cyber-button disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base"
                >
                  {isUploading ? 'Uploading...' : 'Upload Certificate'}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
