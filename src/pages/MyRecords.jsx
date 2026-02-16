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
  Target,
  BookOpen,
  CheckCircle,
  Clock,
  AlertCircle,
  MoreVertical,
} from 'lucide-react'

export const MyRecords = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [filterType, setFilterType] = useState('all')
  const [filterStatus, setFilterStatus] = useState('all')

  const certificates = [
    {
      id: 1,
      title: 'Bachelor of Computer Science',
      issuer: 'Tech University',
      date: '2024-01-15',
      status: 'verified',
      type: 'degree',
      hash: '0x7f9a8b3c4d5e6f1a2b3c4d5e6f7a8b9c',
      transactionId: 'tx_123456789',
    },
    {
      id: 2,
      title: 'Web Development Certification',
      issuer: 'Code Academy',
      date: '2024-01-10',
      status: 'verified',
      type: 'certificate',
      hash: '0x8b7f9a3c4d5e6f1a2b3c4d5e6f7a8b9c',
      transactionId: 'tx_234567890',
    },
    {
      id: 3,
      title: 'Data Science Specialization',
      issuer: 'Tech University',
      date: '2024-01-05',
      status: 'pending',
      type: 'specialization',
      hash: '0x9c8b7f3a4d5e6f1a2b3c4d5e6f7a8b9c',
      transactionId: 'tx_345678901',
    },
    {
      id: 4,
      title: 'Machine Learning Course',
      issuer: 'AI Institute',
      date: '2023-12-28',
      status: 'verified',
      type: 'course',
      hash: '0xa9c8b7f4d5e6f1a2b3c4d5e6f7a8b9c3',
      transactionId: 'tx_456789012',
    },
    {
      id: 5,
      title: 'Cloud Architecture Certificate',
      issuer: 'Cloud Academy',
      date: '2023-12-20',
      status: 'expired',
      type: 'certificate',
      hash: '0xb9a8c7f5d6e7f1a2b3c4d5e6f7a8b9c4',
      transactionId: 'tx_567890123',
    },
    {
      id: 6,
      title: 'Mobile App Development',
      issuer: 'Dev Institute',
      date: '2023-12-15',
      status: 'verified',
      type: 'course',
      hash: '0xc9b8a7f6d7e8f1a2b3c4d5e6f7a8b9c5',
      transactionId: 'tx_678901234',
    },
  ]

  const filteredCertificates = certificates.filter(cert => {
    const matchesSearch =
      cert.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      cert.issuer.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesType = filterType === 'all' || cert.type === filterType
    const matchesStatus = filterStatus === 'all' || cert.status === filterStatus
    return matchesSearch && matchesType && matchesStatus
  })

  const getStatusColor = status => {
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

  const getTypeIcon = type => {
    switch (type) {
      case 'degree':
        return <Award className="w-4 h-4" />
      case 'certificate':
        return <FileText className="w-4 h-4" />
      case 'specialization':
        return <Target className="w-4 h-4" />
      case 'course':
        return <BookOpen className="w-4 h-4" />
      default:
        return <FileText className="w-4 h-4" />
    }
  }

  const getStatusIcon = status => {
    switch (status) {
      case 'verified':
        return <CheckCircle className="w-4 h-4" />
      case 'pending':
        return <Clock className="w-4 h-4" />
      case 'expired':
        return <AlertCircle className="w-4 h-4" />
      default:
        return <Clock className="w-4 h-4" />
    }
  }

  return (
    <div className="min-h-screen relative isolate">
      {/* Background */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-cyber-darker via-gray-900 to-cyber-darker" />

      {/* Content */}
      <div className="relative z-50 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-40 pb-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold cyber-gradient-text mb-2">
            My Records
          </h1>
          <p className="text-gray-400">
            Manage and track all your academic certificates and credentials
          </p>
        </div>

        {/* Filters */}
        <div className="cyber-card mb-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search certificates..."
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
                className="cyber-input pl-10 w-full"
              />
            </div>

            <select
              value={filterType}
              onChange={e => setFilterType(e.target.value)}
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
              onChange={e => setFilterStatus(e.target.value)}
              className="cyber-input"
            >
              <option value="all">All Status</option>
              <option value="verified">Verified</option>
              <option value="pending">Pending</option>
              <option value="expired">Expired</option>
            </select>

            <button className="cyber-button flex items-center justify-center space-x-2">
              <Filter className="w-4 h-4" />
              <span>Apply Filters</span>
            </button>
          </div>
        </div>

        {/* Results */}
        <div className="space-y-4">
          {filteredCertificates.map(cert => (
            <div
              key={cert.id}
              className="cyber-card relative hover:border-cyber-blue/50 transition-all duration-300 p-3"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-start space-x-3">
                  <div className="p-2 rounded-lg bg-cyber-blue/10">
                    {getTypeIcon(cert.type)}
                  </div>

                  <div>
                    <h3 className="text-sm font-semibold text-white break-words">
                      {cert.title}
                    </h3>
                    <p className="text-xs text-gray-400">{cert.issuer}</p>

                    <div className="flex items-center space-x-2 text-xs text-gray-500 mt-1">
                      <Calendar className="w-3 h-3" />
                      <span>{cert.date}</span>
                      <span
                        className={`flex items-center space-x-1 px-2 py-0.5 rounded-full ${getStatusColor(
                          cert.status
                        )}`}
                      >
                        {getStatusIcon(cert.status)}
                        <span className="capitalize">{cert.status}</span>
                      </span>
                    </div>

                    <div className="mt-3 text-xs text-gray-500 space-y-1">
                      <div className="font-mono bg-gray-800/50 px-2 py-1 rounded">
                        Hash: {cert.hash.slice(0, 25)}...
                      </div>
                      <div className="font-mono bg-gray-800/50 px-2 py-1 rounded">
                        Transaction: {cert.transactionId}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-center space-x-2 pt-3 border-t border-gray-700/50">
                  <button className="flex items-center space-x-2 px-4 py-2 rounded-lg hover:bg-white/10 transition-colors border border-cyber-blue/30 hover:border-cyber-blue">
                    <Eye className="w-4 h-4 text-cyber-blue" />
                    <span className="text-sm">View on Blockchain</span>
                  </button>
                  <button className="flex items-center space-x-2 px-4 py-2 rounded-lg hover:bg-white/10 transition-colors border border-cyber-purple/30 hover:border-cyber-purple">
                    <Download className="w-4 h-4 text-cyber-purple" />
                    <span className="text-sm">Download Certificate</span>
                  </button>
                  <button className="flex items-center space-x-2 px-4 py-2 rounded-lg hover:bg-white/10 transition-colors border border-cyber-pink/30 hover:border-cyber-pink">
                    <Share2 className="w-4 h-4 text-cyber-pink" />
                    <span className="text-sm">Share Certificate</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredCertificates.length === 0 && (
          <div className="text-center py-12">
            <FileText className="w-16 h-16 text-gray-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">
              No certificates found
            </h3>
            <p className="text-gray-400">
              Try adjusting your search or filter criteria
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
