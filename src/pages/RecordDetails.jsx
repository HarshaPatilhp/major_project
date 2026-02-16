import React, { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { 
  ArrowLeft, 
  Download, 
  Share2, 
  CheckCircle, 
  Calendar,
  Award,
  Building,
  Hash,
  Link2,
  Copy,
  ExternalLink,
  Shield,
  Clock,
  Eye,
  FileText
} from 'lucide-react'

export const RecordDetails = () => {
  const { id } = useParams()
  const [copied, setCopied] = useState('')

  // Mock certificate data
  const certificate = {
    id: parseInt(id),
    title: 'Bachelor of Computer Science',
    issuer: 'Tech University',
    date: '2024-01-15',
    status: 'verified',
    type: 'degree',
    hash: '0x7f9a8b3c4d5e6f1a2b3c4d5e6f7a8b9c',
    transactionId: 'tx_123456789',
    blockNumber: '18456789',
    gasUsed: '21000',
    verificationCount: 23,
    lastVerified: '2024-01-28T10:30:00Z',
    description: 'Bachelor of Science in Computer Science with specialization in Artificial Intelligence and Machine Learning. This degree program covers fundamental computer science concepts, algorithms, data structures, software engineering, and advanced topics in AI.',
    grade: 'First Class Honors',
    duration: '4 Years',
    credits: '120',
    studentId: 'STU2020CS001',
    issuerAddress: '0x1234567890abcdef1234567890abcdef12345678',
    contractAddress: '0xabcdef1234567890abcdef1234567890abcdef12',
  }

  const copyToClipboard = (text, type) => {
    navigator.clipboard.writeText(text)
    setCopied(type)
    setTimeout(() => setCopied(''), 2000)
  }

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
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="mb-8">
        <Link
          to="/my-records"
          className="inline-flex items-center space-x-2 text-cyber-blue hover:text-cyber-purple mb-4"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Back to Records</span>
        </Link>
        <h1 className="text-3xl font-bold cyber-gradient-text mb-2">Certificate Details</h1>
        <p className="text-gray-400">
          View and manage your blockchain-verified certificate
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Certificate Info */}
        <div className="lg:col-span-2 space-y-6">
          {/* Certificate Header */}
          <div className="cyber-card">
            <div className="flex items-start justify-between mb-6">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-lg bg-gradient-to-r from-cyber-blue to-cyber-purple">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white mb-2">{certificate.title}</h2>
                  <p className="text-gray-400 mb-3">{certificate.description}</p>
                  <div className="flex items-center space-x-4">
                    <span className={`flex items-center space-x-1 px-3 py-1 rounded-full ${getStatusColor(certificate.status)}`}>
                      <CheckCircle className="w-4 h-4" />
                      <span className="capitalize">{certificate.status}</span>
                    </span>
                    <span className="flex items-center space-x-1 text-gray-400">
                      <Calendar className="w-4 h-4" />
                      <span>{certificate.date}</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Certificate Details */}
            <div className="grid grid-cols-2 gap-6">
              <div>
                <h3 className="text-sm font-medium text-gray-400 mb-2">Issuer</h3>
                <div className="flex items-center space-x-2">
                  <Building className="w-4 h-4 text-cyber-blue" />
                  <span className="text-white">{certificate.issuer}</span>
                </div>
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-400 mb-2">Grade</h3>
                <span className="text-white">{certificate.grade}</span>
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-400 mb-2">Duration</h3>
                <span className="text-white">{certificate.duration}</span>
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-400 mb-2">Credits</h3>
                <span className="text-white">{certificate.credits}</span>
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-400 mb-2">Student ID</h3>
                <span className="text-white">{certificate.studentId}</span>
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-400 mb-2">Type</h3>
                <span className="text-white capitalize">{certificate.type}</span>
              </div>
            </div>
          </div>

          {/* Blockchain Information */}
          <div className="cyber-card">
            <h3 className="text-xl font-semibold text-white mb-4 flex items-center space-x-2">
              <Shield className="w-6 h-6 text-cyber-blue" />
              <span>Blockchain Information</span>
            </h3>
            
            <div className="space-y-4">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="text-sm font-medium text-gray-400">Certificate Hash</label>
                  <button
                    onClick={() => copyToClipboard(certificate.hash, 'hash')}
                    className="text-cyber-blue hover:text-cyber-purple"
                  >
                    {copied === 'hash' ? 'Copied!' : <Copy className="w-4 h-4" />}
                  </button>
                </div>
                <div className="p-3 bg-black/30 rounded-lg font-mono text-sm text-gray-300 break-all">
                  {certificate.hash}
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="text-sm font-medium text-gray-400">Transaction ID</label>
                  <button
                    onClick={() => copyToClipboard(certificate.transactionId, 'tx')}
                    className="text-cyber-blue hover:text-cyber-purple"
                  >
                    {copied === 'tx' ? 'Copied!' : <Copy className="w-4 h-4" />}
                  </button>
                </div>
                <div className="p-3 bg-black/30 rounded-lg font-mono text-sm text-gray-300 break-all">
                  {certificate.transactionId}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-gray-400">Block Number</label>
                  <div className="p-3 bg-black/30 rounded-lg font-mono text-sm text-gray-300">
                    {certificate.blockNumber}
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-400">Gas Used</label>
                  <div className="p-3 bg-black/30 rounded-lg font-mono text-sm text-gray-300">
                    {certificate.gasUsed}
                  </div>
                </div>
              </div>

              <div>
                <label className="text-sm font-medium text-gray-400">Contract Address</label>
                <div className="p-3 bg-black/30 rounded-lg font-mono text-sm text-gray-300 break-all">
                  {certificate.contractAddress}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Actions */}
          <div className="cyber-card">
            <h3 className="text-lg font-semibold text-white mb-4">Actions</h3>
            <div className="space-y-3">
              <button className="w-full cyber-button flex items-center justify-center space-x-2">
                <Download className="w-5 h-5" />
                <span>Download PDF</span>
              </button>
              <Link
                to="/share-verify"
                className="w-full glass flex items-center justify-center space-x-2 py-3 hover:bg-white/20 transition-all duration-300"
              >
                <Share2 className="w-5 h-5" />
                <span>Share Certificate</span>
              </Link>
              <button className="w-full glass flex items-center justify-center space-x-2 py-3 hover:bg-white/20 transition-all duration-300">
                <ExternalLink className="w-5 h-5" />
                <span>View on Explorer</span>
              </button>
            </div>
          </div>

          {/* Verification Stats */}
          <div className="cyber-card">
            <h3 className="text-lg font-semibold text-white mb-4">Verification Statistics</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-gray-400">Total Verifications</span>
                <span className="text-xl font-bold text-cyber-blue">{certificate.verificationCount}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-400">Last Verified</span>
                <span className="text-sm text-gray-300">
                  {new Date(certificate.lastVerified).toLocaleDateString()}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-400">Network</span>
                <span className="text-sm text-gray-300">Ethereum Mainnet</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="cyber-card">
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <div className="space-y-3">
              <a
                href="#"
                className="flex items-center space-x-2 text-cyber-blue hover:text-cyber-purple transition-colors"
              >
                <Eye className="w-4 h-4" />
                <span>Public Verification Page</span>
              </a>
              <a
                href="#"
                className="flex items-center space-x-2 text-cyber-blue hover:text-cyber-purple transition-colors"
              >
                <FileText className="w-4 h-4" />
                <span>Download Transcript</span>
              </a>
              <a
                href="#"
                className="flex items-center space-x-2 text-cyber-blue hover:text-cyber-purple transition-colors"
              >
                <Link2 className="w-4 h-4" />
                <span>Blockchain Explorer</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  )
}
