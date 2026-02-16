import React, { useState } from 'react'
import { 
  Search, 
  QrCode, 
  FileText, 
  CheckCircle,
  AlertCircle,
  X,
  ExternalLink,
  Copy,
  Shield,
  Award,
  Building,
  Calendar,
  Hash,
  Link2,
  Upload,
  Camera
} from 'lucide-react'

export const PublicVerification = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [verificationResult, setVerificationResult] = useState(null)
  const [isVerifying, setIsVerifying] = useState(false)
  const [verificationMethod, setVerificationMethod] = useState('search')
  const [copied, setCopied] = useState('')

  const verificationMethods = [
    {
      id: 'search',
      title: 'Certificate ID',
      description: 'Search by certificate ID or transaction hash',
      icon: Search,
    },
    {
      id: 'qr',
      title: 'QR Code Scan',
      description: 'Scan QR code from certificate',
      icon: QrCode,
    },
    {
      id: 'upload',
      title: 'Upload Document',
      description: 'Upload certificate file for verification',
      icon: Upload,
    },
  ]

  const mockCertificate = {
    id: 'CERT-2024-001234',
    hash: '0x7f9a8b3c4d5e6f1a2b3c4d5e6f7a8b9c',
    transactionId: 'tx_123456789',
    blockNumber: '18456789',
    title: 'Bachelor of Computer Science',
    issuer: 'Tech University',
    studentName: 'John Doe',
    studentId: 'STU2020CS001',
    issueDate: '2024-01-15',
    status: 'verified',
    grade: 'First Class Honors',
    type: 'degree',
    description: 'Bachelor of Science in Computer Science with specialization in Artificial Intelligence and Machine Learning.',
    verificationCount: 23,
    lastVerified: '2024-01-28T10:30:00Z',
  }

  const handleVerify = async () => {
    if (!searchQuery.trim()) return

    setIsVerifying(true)
    setVerificationResult(null)

    // Simulate API call
    setTimeout(() => {
      setIsVerifying(false)
      // Mock successful verification
      if (searchQuery.toLowerCase().includes('cert') || searchQuery.toLowerCase().includes('0x')) {
        setVerificationResult({
          success: true,
          certificate: mockCertificate,
        })
      } else {
        setVerificationResult({
          success: false,
          error: 'Certificate not found. Please check the certificate ID or hash.',
        })
      }
    }, 2000)
  }

  const copyToClipboard = (text, type) => {
    navigator.clipboard.writeText(text)
    setCopied(type)
    setTimeout(() => setCopied(''), 2000)
  }

  const handleQRScan = () => {
    // This would open QR scanner
    alert('QR scanner would be implemented here')
  }

  const handleFileUpload = (e) => {
    const file = e.target.files[0]
    if (file) {
      setIsVerifying(true)
      // Simulate file processing
      setTimeout(() => {
        setIsVerifying(false)
        setVerificationResult({
          success: true,
          certificate: mockCertificate,
        })
      }, 2000)
    }
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-8">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold cyber-gradient-text mb-4">
          Public Certificate Verification
        </h1>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          Verify the authenticity of academic certificates instantly using our blockchain-based verification system
        </p>
      </div>

      {/* Verification Methods */}
      <div className="mb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {verificationMethods.map((method) => (
            <button
              key={method.id}
              onClick={() => setVerificationMethod(method.id)}
              className={`cyber-card p-6 text-left transition-all duration-300 ${
                verificationMethod === method.id
                  ? 'border-cyber-blue bg-cyber-blue/10'
                  : 'hover:border-cyber-blue/50'
              }`}
            >
              <method.icon className={`w-8 h-8 mb-4 ${
                verificationMethod === method.id ? 'text-cyber-blue' : 'text-gray-400'
              }`} />
              <h3 className="text-lg font-semibold text-white mb-2">{method.title}</h3>
              <p className="text-sm text-gray-400">{method.description}</p>
            </button>
          ))}
        </div>
      </div>

      {/* Verification Interface */}
      <div className="cyber-card mb-8">
        {verificationMethod === 'search' && (
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">Search Certificate</h3>
            <div className="flex space-x-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleVerify()}
                  placeholder="Enter Certificate ID, Transaction Hash, or Student ID"
                  className="cyber-input pl-10 w-full"
                />
              </div>
              <button
                onClick={handleVerify}
                disabled={isVerifying || !searchQuery.trim()}
                className="cyber-button px-6 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isVerifying ? 'Verifying...' : 'Verify'}
              </button>
            </div>
          </div>
        )}

        {verificationMethod === 'qr' && (
          <div className="text-center py-8">
            <QrCode className="w-16 h-16 text-cyber-blue mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">Scan QR Code</h3>
            <p className="text-gray-400 mb-6">
              Position the QR code within the scanner area
            </p>
            <button
              onClick={handleQRScan}
              className="cyber-button inline-flex items-center space-x-2"
            >
              <Camera className="w-5 h-5" />
              <span>Open Scanner</span>
            </button>
          </div>
        )}

        {verificationMethod === 'upload' && (
          <div className="text-center py-8">
            <Upload className="w-16 h-16 text-cyber-blue mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">Upload Certificate</h3>
            <p className="text-gray-400 mb-6">
              Upload the certificate file (PDF, JPG, PNG) for verification
            </p>
            <input
              type="file"
              onChange={handleFileUpload}
              accept=".pdf,.jpg,.jpeg,.png"
              className="hidden"
              id="file-upload"
            />
            <label
              htmlFor="file-upload"
              className="cyber-button inline-flex items-center space-x-2 cursor-pointer"
            >
              <Upload className="w-5 h-5" />
              <span>Choose File</span>
            </label>
          </div>
        )}
      </div>

      {/* Loading State */}
      {isVerifying && (
        <div className="cyber-card text-center py-12">
          <div className="w-16 h-16 border-4 border-cyber-blue border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <h3 className="text-xl font-semibold text-white mb-2">Verifying Certificate</h3>
          <p className="text-gray-400">Checking blockchain records...</p>
        </div>
      )}

      {/* Verification Results */}
      {verificationResult && !isVerifying && (
        <div>
          {verificationResult.success ? (
            <div className="cyber-card border-green-400/30">
              <div className="flex items-center space-x-2 mb-6">
                <CheckCircle className="w-6 h-6 text-green-400" />
                <h3 className="text-xl font-semibold text-green-400">Certificate Verified</h3>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Certificate Details */}
                <div>
                  <h4 className="text-lg font-semibold text-white mb-4">Certificate Details</h4>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <Award className="w-5 h-5 text-cyber-blue mt-0.5" />
                      <div>
                        <p className="text-sm text-gray-400">Title</p>
                        <p className="text-white">{verificationResult.certificate.title}</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Building className="w-5 h-5 text-cyber-blue mt-0.5" />
                      <div>
                        <p className="text-sm text-gray-400">Issuing Institution</p>
                        <p className="text-white">{verificationResult.certificate.issuer}</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Calendar className="w-5 h-5 text-cyber-blue mt-0.5" />
                      <div>
                        <p className="text-sm text-gray-400">Issue Date</p>
                        <p className="text-white">{verificationResult.certificate.issueDate}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Blockchain Information */}
                <div>
                  <h4 className="text-lg font-semibold text-white mb-4">Blockchain Information</h4>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <Hash className="w-5 h-5 text-cyber-purple mt-0.5" />
                      <div className="flex-1">
                        <p className="text-sm text-gray-400">Certificate Hash</p>
                        <div className="flex items-center space-x-2 mt-1">
                          <p className="text-xs font-mono text-gray-300 break-all">
                            {verificationResult.certificate.hash}
                          </p>
                          <button
                            onClick={() => copyToClipboard(verificationResult.certificate.hash, 'hash')}
                            className="text-cyber-blue hover:text-cyber-purple"
                          >
                            {copied === 'hash' ? <CheckCircle className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Link2 className="w-5 h-5 text-cyber-purple mt-0.5" />
                      <div className="flex-1">
                        <p className="text-sm text-gray-400">Transaction ID</p>
                        <div className="flex items-center space-x-2 mt-1">
                          <p className="text-xs font-mono text-gray-300">
                            {verificationResult.certificate.transactionId}
                          </p>
                          <button
                            onClick={() => copyToClipboard(verificationResult.certificate.transactionId, 'tx')}
                            className="text-cyber-blue hover:text-cyber-purple"
                          >
                            {copied === 'tx' ? <CheckCircle className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Verification Stats */}
              <div className="mt-6 pt-6 border-t border-gray-700">
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-cyber-blue">
                      {verificationResult.certificate.verificationCount}
                    </div>
                    <div className="text-sm text-gray-400">Total Verifications</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-green-400">Valid</div>
                    <div className="text-sm text-gray-400">Certificate Status</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-cyber-purple">
                      {new Date(verificationResult.certificate.lastVerified).toLocaleDateString()}
                    </div>
                    <div className="text-sm text-gray-400">Last Verified</div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="cyber-card border-red-400/30">
              <div className="flex items-center space-x-2 mb-4">
                <AlertCircle className="w-6 h-6 text-red-400" />
                <h3 className="text-xl font-semibold text-red-400">Verification Failed</h3>
              </div>
              <p className="text-gray-300 mb-4">{verificationResult.error}</p>
              <div className="p-4 bg-red-400/10 border border-red-400/30 rounded-lg">
                <p className="text-sm text-gray-400">
                  Please ensure the certificate ID or hash is correct. If you continue to experience issues, 
                  contact the issuing institution directly.
                </p>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Help Section */}
      {!verificationResult && !isVerifying && (
        <div className="cyber-card">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center space-x-2">
            <Shield className="w-5 h-5" />
            <span>How Verification Works</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-cyber-blue/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-cyber-blue font-bold">1</span>
              </div>
              <h4 className="font-medium text-white mb-2">Enter Certificate Details</h4>
              <p className="text-sm text-gray-400">Provide the certificate ID, hash, or upload the document</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-cyber-purple/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-cyber-purple font-bold">2</span>
              </div>
              <h4 className="font-medium text-white mb-2">Blockchain Verification</h4>
              <p className="text-sm text-gray-400">System checks the blockchain for certificate authenticity</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-green-400/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-green-400 font-bold">3</span>
              </div>
              <h4 className="font-medium text-white mb-2">Instant Results</h4>
              <p className="text-sm text-gray-400">Receive immediate verification results with full details</p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
