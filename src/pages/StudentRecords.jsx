import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { 
  Search, 
  Filter, 
  Download, 
  Share2, 
  Eye, 
  Calendar,
  Award,
  FileText,
  CheckCircle,
  Clock,
  AlertCircle,
  MoreVertical,
  ExternalLink,
  QrCode,
  Shield,
  TrendingUp,
  TrendingDown,
  BarChart3
} from 'lucide-react'

export const StudentRecords = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [filterType, setFilterType] = useState('all')
  const [filterStatus, setFilterStatus] = useState('all')
  const [sortBy, setSortBy] = useState('date')
  const [selectedRecords, setSelectedRecords] = useState([])
  const [showShareModal, setShowShareModal] = useState(false)
  const [selectedCertificate, setSelectedCertificate] = useState(null)

  const certificates = [
    {
      id: 1,
      title: 'Bachelor of Computer Science',
      issuer: 'Tech University',
      issueDate: '2024-01-15',
      completionDate: '2023-12-20',
      status: 'verified',
      type: 'degree',
      grade: 'First Class Honors',
      credits: '120',
      duration: '4 Years',
      hash: '0x7f9a8b3c4d5e6f1a2b3c4d5e6f7a8b9c',
      transactionId: 'tx_123456789',
      blockchainUrl: 'https://etherscan.io/tx/0x123456789',
      description: 'Completed comprehensive computer science program with specialization in artificial intelligence and machine learning.',
      skills: ['JavaScript', 'Python', 'React', 'Node.js', 'Machine Learning', 'Data Structures', 'Algorithms']
    },
    {
      id: 2,
      title: 'Web Development Certification',
      issuer: 'Code Academy',
      issueDate: '2024-01-10',
      completionDate: '2023-11-15',
      status: 'verified',
      type: 'certificate',
      grade: 'A+',
      credits: '45',
      duration: '6 Months',
      hash: '0x8b7f9a3c4d5e6f1a2b3c4d5e6f7a8b9c',
      transactionId: 'tx_234567890',
      blockchainUrl: 'https://etherscan.io/tx/0x234567890',
      description: 'Intensive web development program covering modern frontend and backend technologies.',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'MongoDB', 'Express', 'Git']
    },
    {
      id: 3,
      title: 'Data Science Specialization',
      issuer: 'Tech University',
      issueDate: '2024-01-05',
      completionDate: '2023-10-30',
      status: 'verified',
      type: 'specialization',
      grade: 'A',
      credits: '30',
      duration: '9 Months',
      hash: '0x9c8b7f3a4d5e6f1a2b3c4d5e6f7a8b9c',
      transactionId: 'tx_345678901',
      blockchainUrl: 'https://etherscan.io/tx/0x345678901',
      description: 'Advanced data science program with focus on statistical analysis, machine learning, and data visualization.',
      skills: ['Python', 'R', 'SQL', 'Tableau', 'Machine Learning', 'Statistics', 'Data Visualization']
    },
    {
      id: 4,
      title: 'Machine Learning Course',
      issuer: 'AI Institute',
      issueDate: '2023-12-28',
      completionDate: '2024-01-15',
      status: 'verified',
      type: 'course',
      grade: 'A',
      credits: '15',
      duration: '3 Months',
      hash: '0xa9c8b7f4d5e6f1a2b3c4d5e6f7a8b9c',
      transactionId: 'tx_456789012',
      blockchainUrl: 'https://etherscan.io/tx/0x456789012',
      description: 'Introduction to machine learning fundamentals and practical applications.',
      skills: ['Python', 'TensorFlow', 'Scikit-learn', 'Pandas', 'NumPy', 'Deep Learning']
    },
    {
      id: 5,
      title: 'Cloud Architecture Certificate',
      issuer: 'Cloud Academy',
      issueDate: '2023-12-20',
      completionDate: '2024-01-10',
      status: 'expired',
      type: 'certificate',
      grade: 'B',
      credits: '20',
      duration: '4 Months',
      hash: '0xb9a8c7f5d6e7f1a2b3c4d5e6f7a8b9c',
      transactionId: 'tx_567890123',
      blockchainUrl: 'https://etherscan.io/tx/0x567890123',
      description: 'Cloud computing fundamentals and architecture design principles.',
      skills: ['AWS', 'Azure', 'Google Cloud', 'Docker', 'Kubernetes', 'DevOps']
    },
    {
      id: 6,
      title: 'Mobile App Development',
      issuer: 'Dev Institute',
      issueDate: '2023-12-15',
      completionDate: '2024-01-05',
      status: 'pending',
      type: 'course',
      grade: 'In Progress',
      credits: '25',
      duration: '6 Months',
      hash: '0xc9b8a7f6d7e8f1a2b3c4d5e6f7a8b9c',
      transactionId: 'tx_678901234',
      blockchainUrl: 'https://etherscan.io/tx/0x678901234',
      description: 'Mobile application development using React Native and cross-platform technologies.',
      skills: ['React Native', 'JavaScript', 'TypeScript', 'iOS', 'Android', 'Firebase', 'Redux']
    }
  ]

  const filteredCertificates = certificates.filter(cert => {
    const matchesSearch = cert.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         cert.issuer.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         cert.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesType = filterType === 'all' || cert.type === filterType
    const matchesStatus = filterStatus === 'all' || cert.status === filterStatus
    return matchesSearch && matchesType && matchesStatus
  })

  const sortedCertificates = [...filteredCertificates].sort((a, b) => {
    switch (sortBy) {
      case 'date':
        return new Date(b.issueDate) - new Date(a.issueDate)
      case 'title':
        return a.title.localeCompare(b.title)
      case 'issuer':
        return a.issuer.localeCompare(b.issuer)
      case 'status':
        return a.status.localeCompare(b.status)
      default:
        return 0
    }
  })

  const getStatusColor = (status) => {
    switch (status) {
      case 'verified':
        return 'text-green-400 bg-green-400/10 border-green-400/30'
      case 'pending':
        return 'text-yellow-400 bg-yellow-400/10 border-yellow-400/30'
      case 'expired':
        return 'text-red-400 bg-red-400/10 border-red-400/30'
      default:
        return 'text-gray-400 bg-gray-400/10 border-gray-400/30'
    }
  }

  const getTypeIcon = (type) => {
    switch (type) {
      case 'degree':
        return <Award className="w-5 h-5" />
      case 'certificate':
        return <FileText className="w-5 h-5" />
      case 'specialization':
        return <BarChart3 className="w-5 h-5" />
      case 'course':
        return <FileText className="w-5 h-5" />
      default:
        return <FileText className="w-5 h-5" />
    }
  }

  const handleSelectRecord = (id) => {
    setSelectedRecords(prev => 
      prev.includes(id) 
        ? prev.filter(recordId => recordId !== id)
        : [...prev, id]
    )
  }

  const handleSelectAll = () => {
    setSelectedRecords(sortedCertificates.map(cert => cert.id))
  }

  const handleShareCertificate = (certificate) => {
    setSelectedCertificate(certificate)
    setShowShareModal(true)
  }

  const closeShareModal = () => {
    setShowShareModal(false)
    setSelectedCertificate(null)
  }

  const downloadCertificate = (certificate) => {
    // Create a downloadable certificate data
    const certificateData = {
      title: certificate.title,
      issuer: certificate.issuer,
      issueDate: certificate.issueDate,
      completionDate: certificate.completionDate,
      grade: certificate.grade,
      credits: certificate.credits,
      hash: certificate.hash,
      transactionId: certificate.transactionId,
      description: certificate.description,
      skills: certificate.skills
    }
    
    const blob = new Blob([JSON.stringify(certificateData, null, 2)], { type: 'application/json' })
    const url = URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = url
    link.download = `${certificate.title.replace(/\s+/g, '_')}_certificate.json`
    link.click()
    URL.revokeObjectURL(url)
  }

  const viewOnBlockchain = (certificate) => {
    window.open(certificate.blockchainUrl, '_blank')
  }

  return (
    <div className="min-h-screen relative overflow-hidden z-40">
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
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold cyber-gradient-text mb-2">My Records</h1>
        <p className="text-gray-400">
          View and manage all your academic certificates and credentials
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="cyber-card">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 rounded-lg bg-cyber-blue/10">
              <Award className="w-6 h-6 text-cyber-blue" />
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-white mb-1">{certificates.length}</div>
              <div className="text-sm text-gray-400">Total Certificates</div>
            </div>
          </div>
        </div>
        <div className="cyber-card">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 rounded-lg bg-green-400/10">
              <CheckCircle className="w-6 h-6 text-green-400" />
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-white mb-1">
                {certificates.filter(cert => cert.status === 'verified').length}
              </div>
              <div className="text-sm text-gray-400">Verified</div>
            </div>
          </div>
        </div>
        <div className="cyber-card">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 rounded-lg bg-yellow-400/10">
              <Clock className="w-6 h-6 text-yellow-400" />
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-white mb-1">
                {certificates.filter(cert => cert.status === 'pending').length}
              </div>
              <div className="text-sm text-gray-400">Pending</div>
            </div>
          </div>
        </div>
        <div className="cyber-card">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 rounded-lg bg-red-400/10">
              <AlertCircle className="w-6 h-6 text-red-400" />
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-white mb-1">
                {certificates.filter(cert => cert.status === 'expired').length}
              </div>
              <div className="text-sm text-gray-400">Expired</div>
            </div>
          </div>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="cyber-card mb-6">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search certificates..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="cyber-input pl-10 w-full"
            />
          </div>
          <div className="flex gap-2">
            <select
              value={filterType}
              onChange={(e) => setFilterType(e.target.value)}
              className="cyber-input"
            >
              <option value="all">All Types</option>
              <option value="degree">Degrees</option>
              <option value="certificate">Certificates</option>
              <option value="specialization">Specializations</option>
              <option value="course">Courses</option>
            </select>
            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="cyber-input"
            >
              <option value="all">All Status</option>
              <option value="verified">Verified</option>
              <option value="pending">Pending</option>
              <option value="expired">Expired</option>
            </select>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="cyber-input"
            >
              <option value="date">Sort by Date</option>
              <option value="title">Sort by Title</option>
              <option value="issuer">Sort by Issuer</option>
              <option value="status">Sort by Status</option>
            </select>
          </div>
        </div>
      </div>

      {/* Bulk Actions */}
      {selectedRecords.length > 0 && (
        <div className="cyber-card mb-6 p-4 bg-cyber-blue/10 border border-cyber-blue/30">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <span className="text-cyber-blue">
                {selectedRecords.length} records selected
              </span>
              <button
                onClick={() => setSelectedRecords([])}
                className="text-gray-400 hover:text-white text-sm"
              >
                Clear Selection
              </button>
            </div>
            <div className="flex items-center space-x-2">
              <button className="cyber-button flex items-center space-x-2">
                <Download className="w-4 h-4" />
                <span>Download Selected</span>
              </button>
              <button className="cyber-button flex items-center space-x-2">
                <Share2 className="w-4 h-4" />
                <span>Share Selected</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Results Count */}
      <div className="mb-4 text-gray-400">
        Showing {sortedCertificates.length} of {certificates.length} certificates
      </div>

      {/* Certificates Grid */}
      <div className="space-y-4">
        {sortedCertificates.map((certificate) => (
          <div key={certificate.id} className="cyber-card hover:border-cyber-blue/50 transition-all duration-300">
            <>
              <div className="flex items-start justify-between">
                <div className="flex items-start space-x-4 flex-1">
                  <input
                    type="checkbox"
                    checked={selectedRecords.includes(certificate.id)}
                    onChange={() => handleSelectRecord(certificate.id)}
                    className="w-4 h-4 text-cyber-blue bg-gray-700 border-gray-600 rounded focus:ring-cyber-blue"
                  />
                  <div className="flex-1">
                    <div className="flex items-start space-x-3">
                      <div className="p-3 rounded-lg bg-cyber-blue/10">
                        {getTypeIcon(certificate.type)}
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-2">{certificate.title}</h3>
                        <p className="text-cyber-blue mb-1">{certificate.issuer}</p>
                        <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
                          <span className="flex items-center space-x-1">
                            <Calendar className="w-4 h-4" />
                            <span>Issued: {certificate.issueDate}</span>
                          </span>
                          <span className="flex items-center space-x-1">
                            <Award className="w-4 h-4" />
                            <span>Grade: {certificate.grade || 'N/A'}</span>
                          </span>
                          <span className="flex items-center space-x-1">
                            <FileText className="w-4 h-4" />
                            <span>Credits: {certificate.credits || 'N/A'}</span>
                          </span>
                          <span className="flex items-center space-x-1">
                            <Clock className="w-4 h-4" />
                            <span>Duration: {certificate.duration || 'N/A'}</span>
                          </span>
                        </div>
                        <p className="text-gray-400 text-sm mb-3 line-clamp-2">
                          {certificate.description}
                        </p>
                        <div className="flex flex-wrap gap-2 mt-3">
                          {certificate.skills.map((skill, index) => (
                            <span
                              key={index}
                              className="inline-flex items-center space-x-1 px-3 py-1 rounded-full bg-cyber-blue/10 text-cyber-blue border border-cyber-blue/30"
                            >
                              <span>{skill}</span>
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-center space-y-2">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(certificate.status)}`}>
                      {certificate.status}
                    </span>
                    <div className="text-xs text-gray-500 font-mono">
                      {certificate.hash.slice(0, 10)}...
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-end space-x-2 pt-3 border-t border-gray-700/50 mt-4">
                <button className="flex items-center space-x-2 px-3 py-2 rounded-lg hover:bg-white/10 transition-colors border border-cyber-blue/30 hover:border-cyber-blue text-sm">
                  <Eye className="w-4 h-4 text-cyber-blue" />
                  <span>View on Blockchain</span>
                </button>
                <button className="flex items-center space-x-2 px-3 py-2 rounded-lg hover:bg-white/10 transition-colors border border-cyber-purple/30 hover:border-cyber-purple text-sm">
                  <Download className="w-4 h-4 text-cyber-purple" />
                  <span>Download Certificate</span>
                </button>
                <button className="flex items-center space-x-2 px-3 py-2 rounded-lg hover:bg-white/10 transition-colors border border-cyber-pink/30 hover:border-cyber-pink text-sm">
                  <Share2 className="w-4 h-4 text-cyber-pink" />
                  <span>Share Certificate</span>
                </button>
              </div>
            </>
          </div>
        ))}
      </div>

      {/* Share Modal */}
      {showShareModal && selectedCertificate && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-gray-900 border border-cyber-blue/30 rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-semibold text-white">Share Certificate</h3>
                <button
                  onClick={closeShareModal}
                  className="text-gray-400 hover:text-white"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              
              <div className="cyber-card p-6">
                <div className="text-center mb-6">
                  <div className="w-20 h-20 bg-gradient-to-r from-cyber-blue to-cyber-purple rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-white">TC</span>
                  </div>
                  <h4 className="text-2xl font-bold text-white mb-2">{selectedCertificate.title}</h4>
                  <p className="text-cyber-blue mb-2">{selectedCertificate.issuer}</p>
                  <p className="text-gray-400 mb-4">This is to certify that</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <p className="text-sm text-gray-400 mb-2">Student Name</p>
                    <p className="text-lg font-semibold text-white">John Doe</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 mb-2">Issue Date</p>
                    <p className="text-lg font-semibold text-white">{selectedCertificate.issueDate}</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <p className="text-sm text-gray-400 mb-2">Grade</p>
                    <p className="text-lg font-semibold text-white">{selectedCertificate.grade || 'N/A'}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 mb-2">Certificate Hash</p>
                    <p className="text-xs font-mono text-cyber-blue break-all">
                      {selectedCertificate.hash}
                    </p>
                  </div>
                </div>
                
                <div className="border-t border-gray-700 pt-6">
                  <p className="text-sm text-gray-400 mb-4">Verification Link</p>
                  <div className="flex items-center space-x-2">
                    <input
                      type="text"
                      value={`https://edublockchain.io/verify/${selectedCertificate.hash}`}
                      readOnly
                      className="cyber-input flex-1"
                    />
                    <button className="cyber-button px-4 py-2">
                      <QrCode className="w-4 h-4 inline mr-2" />
                      Copy Link
                    </button>
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
